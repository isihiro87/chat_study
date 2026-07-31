/**
 * つづもん（有料）向け AI パイプライン。
 *
 * `aiChat.handleAiChatWith` がティア判定して `paid` のときだけここへ委譲する。
 * **`free`（一問一答Bot・3,000人）はこのファイルを一切通らない**——現行の挙動を
 * 1ミリも変えないため（`requirements.md` 受け入れ条件）。
 *
 * ## 現在の処理順
 *   1. コスト状態を読む（読めなければ **LLM を呼ばずに停止**）
 *   2. コストゲート（5層キャップ）を通す
 *   2-b. **安全分類**（決定論 → 必要なら最安モデルで補完）
 *        `crisis` は AI を1回も呼ばず固定文＋運営通知で終了
 *   3. 3層メモリを組む（直近ウィンドウ＋検索的想起）
 *   4. LLM 呼び出し（`concern` は上位モデル・長め・末尾文をコードで付与）
 *   5. reply
 *   6. コスト計上（ユーザー分＋全体分）／会話状態の書き戻し
 *   7. 全会話アーカイブへ追記 → 想起の索引（digest）を生成（**返信後**）
 *
 * ## 後続フェーズで足すもの（ここには**まだ無い**）
 *   - フェーズ7: `aiContext`（学習分析）の注入
 *   - フェーズ8: ツール実行（記憶更新・プラン保存・範囲反映）
 *   - フェーズ9: 教材接地
 *
 * 設計: `.steering/20260725-ai-personal-support/design.md` §2-11
 */

import type { messagingApi } from '@line/bot-sdk';

import type { UserDoc, AiChatTurn } from './userDocTypes';
import type { AiChatBotKind } from './aiChatPrompt';
import { buildSystemPrompt } from './aiChatPrompt';
import type { TierResolution } from './aiTier';
import {
  evaluateGate,
  parseLimits,
  denyMessage,
  type GateAllow,
} from './aiCostCore';
import {
  buildAiContextPrompt,
  detectAnalysisIntent,
  buildAnalysisVerifyInput,
  parseVerifyResult,
  ANALYSIS_VERIFY_PROMPT,
  type AiContext,
} from './aiContextCore';
import {
  resolveTopics,
  resolveTopicByKey,
  listAllTopics,
  buildGroundingContext,
  buildTopicQuickReply,
  type ResolvedTopic,
} from './aiTopicResolver';
import { buildMemoryPrompt, type AiMemory } from './aiMemoryCore';
import { buildProfilePrompt, type AiProfile } from './aiProfileCore';
import { buildPlanPrompt, type StudyPlan } from './studyPlanCore';
import {
  executeTool,
  buildToolResultContext,
  buildTopicKeyCatalog,
  TOOL_DEFINITIONS,
  type ToolOutcome,
} from './aiTools';
import {
  loadCostState,
  recordCost,
  CostStateUnavailableError,
  RECENT_TIMES_KEEP,
} from './aiCostStore';
import { createGrant, generateText, type BudgetGrant } from './llmProvider';
import {
  resolveHistoryTurns,
  resolveMaxOutputTokens,
  wantsDetailedAnswer,
  type LlmPurpose,
} from './llmModelResolver';
import {
  classifyDeterministic,
  needsLlmClassification,
  parseLlmSafetyClass,
  appendConcernFooter,
  SAFETY_CLASSIFY_PROMPT,
  type SafetyClass,
} from './aiSafetyCore';
import { handleAiCrisis } from './aiCrisisHandler';
import { notifyIfProviderStopped } from './aiProviderAlert';
import { splitReply, buildReplyMessages } from './aiReplySplit';
import { trimHistory, getJstDate } from './aiChatCore';

/** 応答生成に失敗したときのフォールバック文（`aiChat` と同文）。 */
const FALLBACK_ERROR_TEXT =
  'ごめんね、いまうまく答えられなかったみたい💦 もう一度送ってみてくれる？';

export interface PaidChatInput {
  client: messagingApi.MessagingApiClient;
  uid: string;
  replyToken: string;
  /** LLM に渡す指示文（メディアのみのときは既定文が入る） */
  promptText: string;
  /** 履歴に残す user 側テキスト（メディアはマーカー） */
  historyUserText: string;
  userData: UserDoc | undefined;
  media?: Array<{ mimeType: string; data: string }>;
  botKind: AiChatBotKind;
  tier: TierResolution;
  /** 月初の AI 注意書きを添えるか（`aiChat` 側で判定済み） */
  needsDisclaimer: boolean;
  disclaimerText: string;
  /** Quick Reply（`aiChat.buildIntentQuickReply` の結果） */
  quickReply?: {
    items: Array<{ type: 'action'; action: Record<string, string> }>;
  };
  now?: Date;
  env?: Record<string, string | undefined>;
}

/**
 * paid パイプラインの本体。
 *
 * 例外は投げない（webhook は常に 200 を維持する）。返信できなかった場合も
 * ログのみで戻る。
 */
export async function handlePaidAiChat(input: PaidChatInput): Promise<void> {
  const now = input.now ?? new Date();
  const env = input.env ?? (process.env as Record<string, string | undefined>);
  const limits = parseLimits(env);

  // ---- 1. コスト状態を読む（失敗＝安全側に止める）----
  let state;
  try {
    state = await loadCostState({
      userData: input.userData as Record<string, unknown> | undefined,
      now,
    });
  } catch (error) {
    if (error instanceof CostStateUnavailableError) {
      // 「読めなかったから無制限」は禁止（requirements.md §3-b）。
      console.error(
        '[aiPaidChat] cost state unavailable; refusing to call LLM'
      );
      await safeReply(input, denyMessage('state_unavailable'));
      return;
    }
    console.error('[aiPaidChat] loadCostState failed:', error);
    await safeReply(input, denyMessage('state_unavailable'));
    return;
  }

  // ---- 2. 5層キャップの判定 ----
  const decision = evaluateGate({
    tier: input.tier,
    purpose: 'chat',
    state,
    limits,
    nowMs: now.getTime(),
    userText: input.promptText,
  });

  if (decision.kind === 'deny') {
    console.warn(
      `[aiPaidChat] denied uid=${input.uid} reason=${decision.reason}` +
        ` (LLM は呼ばない＝課金ゼロ)`
    );
    if (decision.notifyAdmin) {
      await notifyAdminOfCostDeny(input.uid, decision.reason, state, now);
    }
    await safeReply(input, denyMessage(decision.reason));
    return;
  }

  // ---- 2-b. 安全分類（決定論 → 必要なら LLM で補完）----
  // crisis は **AI に自由生成させない**。固定文で受け止め、運営へ通知して終わる。
  const safety = await classifySafety({
    userText: input.promptText,
    // 分類は1語しか返さないので出力上限を絞る（失敗時の推定計上も膨らませない）。
    grant: createGrant('paid', {
      ...decision,
      maxOutputTokens: resolveMaxOutputTokens(
        'classify',
        'paid',
        decision.degrade
      ),
    }),
    env,
  });

  if (safety === 'crisis') {
    console.warn(`[aiPaidChat] crisis detected uid=${input.uid.slice(0, 16)}…`);
    await handleCrisis(input, now);
    return;
  }

  // ---- 3. 記憶の組み立て（3層メモリ）----
  const historyTurns = resolveHistoryTurns('paid', decision.degrade);

  // 第2層: 直近ウィンドウ。アーカイブ（aiThreads）から原文で読む。
  // まだアーカイブが無いユーザー（移行直後）は `users/{uid}.aiChat.history` に
  // フォールバックする——記憶が空に見える事故を防ぐ。
  const priorHistory: AiChatTurn[] = await loadRecentHistory({
    uid: input.uid,
    historyTurns,
    fallback: input.userData?.aiChat?.history ?? [],
  });

  // 第3層: 検索的想起。トリガーが無ければ検索しない（read もコストも使わない）。
  const recallContext = await buildRecallIfNeeded(input.uid, input.promptText);

  // 教材接地: 話題の単元を解決できたら、参考書本文をプロンプトへ入れる。
  // 解決できないときは接地しない（無理に当てはめない）。実行時 Firestore read はゼロ。
  //
  // ⚠️ 今のメッセージだけで解決すると、会話の流れで単元名が出てこない追い質問
  //    （「参考書のリンクが欲しい」「さっきのとこは？」）で単元を見失い、
  //    直前まで出せていたリンクが急に出なくなる（2026-07-26 実機で確認）。
  //    直近の生徒の発言もさかのぼって解決する。
  //  - 接地（参考書本文の注入）は会話の流れをさかのぼってよい
  //  - **リンクのボタンは「教材の話をしているとき」だけ**に出す
  //    （2026-07-26 実機: ワールドカップの雑談にまで教材ボタンが付いた）
  const topicNow =
    safety === 'normal' ? resolveTopics(input.promptText)[0] : undefined;
  const topicFromHistory =
    safety === 'normal' && !topicNow
      ? resolveRecentTopic(priorHistory)
      : undefined;
  const topic = topicNow ?? topicFromHistory;
  // 「参考書ある？」「リンクちょうだい」のように教材を求めているか。
  const wantsMaterial = MATERIAL_REQUEST_RE.test(input.promptText);
  const linkTopic = topicNow ?? (wantsMaterial ? topicFromHistory : undefined);
  const groundingContext = buildGroundingContext(topic);

  // 学習分析（aiContext）を注入する。夜間 cron が事前計算済みなので追加 read ゼロ。
  // ⚠️ `aiChatPrompt.buildSystemPrompt` ではなくここで足す。あちらは無料Botと共有で、
  //    かつ並行作業で編集中のため、`paid` 専用の文脈はこちら側に閉じ込める。
  const analysisContext = buildAiContextPrompt(
    (input.userData as Record<string, unknown> | undefined)?.aiContext as
      | AiContext
      | undefined,
    now
  );

  // 用途の決定:
  //   concern → counsel（上位モデル・長め・傾聴）
  //   学習分析の依頼 → analysis（数字を扱うので後段で自己検証する）
  //   それ以外 → chat
  const isAnalysis =
    safety === 'normal' && detectAnalysisIntent(input.promptText);
  const purpose: LlmPurpose =
    safety === 'concern' ? 'counsel' : isAnalysis ? 'analysis' : 'chat';
  // 用途が変わると出力上限も変わるので grant を取り直す。
  // chat は既定 600 トークン（出力はコストの主因）。ただし本人が
  // 「くわしく教えて」と頼んだときだけ 1000 まで伸ばす（ユーザー判断 2026-07-27）。
  const detailed = wantsDetailedAnswer(input.promptText);
  const activeGrant = createGrant('paid', {
    ...decision,
    maxOutputTokens: resolveMaxOutputTokens(
      purpose,
      'paid',
      decision.degrade,
      detailed
    ),
  });

  // 長期記憶（第1層）とプランを注入する。どちらも user doc 内なので追加 read ゼロ。
  const memory = (input.userData as Record<string, unknown> | undefined)
    ?.aiMemory as AiMemory | undefined;
  const plan = (input.userData as Record<string, unknown> | undefined)
    ?.studyPlan as StudyPlan | undefined;
  const profile = (input.userData as Record<string, unknown> | undefined)
    ?.aiProfile as AiProfile | undefined;
  // キャラクター・呼び名・プロフィール。話し方と呼び名にだけ効く（安全方針は不変）。
  const profileContext = buildProfilePrompt(profile);
  const memoryContext = buildMemoryPrompt(memory, now);
  const planContext = buildPlanPrompt(plan, now, topicNameOf);

  // ツールを渡すのは相談中でないときだけ（相談の最中に操作を挟ませない）。
  const toolsEnabled = safety === 'normal';
  // プラン作成に使える単元キーの一覧。話題に関係する範囲だけ渡す（全92件は載せない）。
  const topicCatalog = toolsEnabled
    ? buildTopicKeyCatalog(catalogCandidates(input.promptText, memory))
    : '';

  const baseSystem =
    buildSystemPrompt(input.userData, input.botKind, {
      // 話題に合うブロックだけ注入する（入力トークンとコストを削る）
      promptText: input.promptText,
    }) +
    profileContext +
    memoryContext +
    planContext +
    analysisContext +
    recallContext +
    groundingContext +
    topicCatalog +
    (linkTopic ? buildStudyLinkGuidance(linkTopic) : '') +
    (safety === 'concern' ? COUNSEL_GUIDANCE : '');

  let answer: string;
  let cost;
  let toolAck: string | undefined;
  let pendingWrite: ToolOutcome['write'];
  try {
    const result = await generateText({
      purpose,
      grant: activeGrant,
      system: baseSystem,
      history: priorHistory,
      userText: input.promptText,
      media: input.media,
      tools: toolsEnabled ? TOOL_DEFINITIONS : undefined,
      env,
    });
    answer = result.text;
    cost = result.cost;

    // ---- ツール実行（1ターン1回だけ）----
    const call = result.toolCalls?.[0];
    if (call) {
      let outcome = executeTool(call, {
        existingMemory: memory,
        existingProfile: profile,
        validTopicKeys: allTopicKeys(),
        topicName: topicNameOf,
        analysisSummary: analysisContext,
        // 配信設定はここでは読まない（毎メッセージの read を増やさないため）。
        // 未指定項目は merge:true でそのまま残るので、部分変更でも壊れない。
        currentSchedule: undefined,
        now,
      });
      // Web検索だけは実際の通信が要るので、ここで実行して結果を差し替える
      // （`executeTool` は副作用なしの純粋関数に保つ）。
      if (call.name === 'searchWeb') {
        const { searchWeb, buildSearchResultContext } =
          await import('./aiWebSearch');
        const query = String(call.args?.query ?? '');
        const searched = await searchWeb(query, env);
        outcome = {
          resultForModel: buildSearchResultContext(query, searched),
          rejected: !searched.ok,
        };
      }
      toolAck = outcome.ackText;
      pendingWrite = outcome.write;

      // 2回目の呼び出しで、実行結果を踏まえた返事を書かせる。
      // ⚠️ ここでツールは渡さない（同じツールの再実行・無限往復を防ぐ）。
      const second = await generateText({
        purpose,
        grant: activeGrant,
        system: baseSystem + buildToolResultContext(call, outcome),
        history: priorHistory,
        userText: input.promptText,
        env,
      });
      answer = second.text;
      // 1回目・2回目の両方が課金されているので合算する。
      cost = { ...second.cost, costJpy: cost.costJpy + second.cost.costJpy };
    }

    if (safety === 'concern') answer = appendConcernFooter(answer);

    // 分析の回答は数字と単元名を扱うので、注入データ外を使っていないか機械的に点検する。
    // 落ちたら**その回答は出さず**、案内文に差し替える（誤った成績を伝えないため）。
    if (isAnalysis && analysisContext) {
      const verified = await verifyAnalysisAnswer({
        contextPrompt: analysisContext,
        answer,
        decision,
        uid: input.uid,
        now,
        env,
      });
      if (!verified) {
        console.warn(
          `[aiPaidChat] analysis verify failed uid=${input.uid.slice(0, 16)}…`
        );
        answer = ANALYSIS_UNVERIFIED_TEXT;
      }
    }
  } catch (error) {
    console.error('[aiPaidChat] LLM call failed:', error);

    // プロバイダ側の費用上限・レート制限で**サービスが止まっている**場合は、
    // ユーザー側の工夫では回復しない＝運営が気づく必要がある（実地で発生済み）。
    await notifyIfProviderStopped(error, now);

    // `llmCost` が載っているのは「課金され得る失敗」（タイムアウト等）だけ。
    // 4xx/5xx で拒否された場合は**トークン未消費なので計上しない**
    // （計上すると停止中に架空のコストで予算を食い潰す）。
    const failedCost = (error as { llmCost?: typeof cost }).llmCost;
    if (failedCost) {
      await recordCost({
        uid: input.uid,
        purpose,
        cost: failedCost,
        now,
        recentMessageTimesMs: appendNow(state.recentMessageTimesMs, now),
        tier: 'paid',
      });
    }
    await safeReply(input, FALLBACK_ERROR_TEXT);
    return;
  }

  // ---- 4. 返信 ----
  try {
    // 単元が特定できたら「参考書をひらく／問題を解く」のワンタップ導線を添える。
    // ⚠️ URL は**コード側で索引から組み立てる**。AI に URL を書かせると存在しない
    //    ページを案内しかねない（単元名の自由作文と同じ事故）。
    const quickReply = linkTopic
      ? buildTopicQuickReply(linkTopic)
      : input.quickReply;
    // ツールが実行されたときは、定型の確認文を添える。
    // 「覚えたよ」「プランを作ったよ」を AI の作文任せにすると、
    // 実行していないのに言う／実行したのに言わない、が起きるため。
    const fullText = toolAck ? `${answer}\n\n${toolAck}` : answer;
    // 長い応答は意味の切れ目で吹き出しを分ける（相談・プランは長くなりやすい）。
    const messages = buildReplyMessages(splitReply(fullText), {
      quickReply,
      leadingText: input.needsDisclaimer ? input.disclaimerText : undefined,
    });
    await input.client.replyMessage({
      replyToken: input.replyToken,
      messages: messages as never,
    });
  } catch (error) {
    console.error('[aiPaidChat] reply failed:', error);
    // 返信できなくても API は課金されているのでコストだけは計上する
    // （現行 free 経路は「返信失敗なら何も書かない」だが、コストは実在するため）。
    await recordCost({
      uid: input.uid,
      purpose,
      cost,
      now,
      recentMessageTimesMs: appendNow(state.recentMessageTimesMs, now),
      tier: 'paid',
    });
    return;
  }

  // ---- 5. 計上＋会話状態の書き戻し ----
  await recordCost({
    uid: input.uid,
    purpose,
    cost,
    now,
    recentMessageTimesMs: appendNow(state.recentMessageTimesMs, now),
    tier: 'paid',
  });

  await writeChatState({
    uid: input.uid,
    priorHistory,
    historyUserText: input.historyUserText,
    answer,
    historyTurns,
    now,
  });

  // ---- 5-a. 計測（失敗しても本体は止めない）----
  void logAiFunnel({
    uid: input.uid,
    purpose,
    safety,
    degrade: decision.degrade,
    toolWrite: pendingWrite?.kind,
    topicKey: topic?.key,
    analysisShown: isAnalysis,
  });

  // ---- 5-b. ツールの書き込みを反映（返信後・失敗しても会話は成立する）----
  if (pendingWrite) {
    try {
      const { initializeApp, getApps } = await import('firebase-admin/app');
      const { getFirestore } = await import('firebase-admin/firestore');
      if (getApps().length === 0) initializeApp();
      // 配信設定だけは書き込み先が別（tsudumonDaily/{uid}）。
      // ⚠️ ここで return するとこのあとの会話アーカイブ処理を飛ばしてしまうので、
      //    分岐で書き分けるだけにする。
      if (pendingWrite.kind === 'schedule') {
        await getFirestore()
          .doc(`tsudumonDaily/${input.uid}`)
          .set(
            {
              lineUserId: input.uid.startsWith('line:')
                ? input.uid.slice('line:'.length)
                : '',
              ...pendingWrite.value,
            },
            { merge: true }
          );
        console.log(
          `[aiPaidChat] tool write schedule uid=${input.uid.slice(0, 16)}…`
        );
      } else {
        const field =
          pendingWrite.kind === 'memory'
            ? { aiMemory: pendingWrite.value }
            : pendingWrite.kind === 'profile'
              ? { aiProfile: pendingWrite.value }
              : pendingWrite.kind === 'operator'
                ? { operatorHandling: pendingWrite.value }
                : pendingWrite.kind === 'exam'
                  ? { tsudumonExam: pendingWrite.value }
                  : pendingWrite.kind === 'mode'
                    ? { tsudumonMode: pendingWrite.value }
                    : { studyPlan: pendingWrite.value };
        await getFirestore()
          .doc(`users/${input.uid}`)
          .set(field, { merge: true });
        console.log(
          `[aiPaidChat] tool write ${pendingWrite.kind} uid=${input.uid.slice(0, 16)}…`
        );
        // 運営への取り次ぎは、書き込みだけでは意味がない。運営に届けて初めて完了する。
        if (pendingWrite.kind === 'operator') {
          const { notifyOperatorHandoff } = await import('./operatorHandoff');
          await notifyOperatorHandoff(
            input.uid,
            input.userData?.displayName,
            pendingWrite.value
          );
        }
      }
    } catch (error) {
      console.error('[aiPaidChat] tool write failed:', error);
    }
  }

  // ---- 6. 全会話アーカイブへ追記（第3層・削除しない）----
  // ここが「ずっと覚えている」の土台。失敗しても会話は成立するのでログのみ。
  try {
    const { appendTurn } = await import('./aiThreadStore');
    await appendTurn({
      uid: input.uid,
      userText: input.historyUserText,
      modelText: answer,
      now,
    });
  } catch (error) {
    console.error('[aiPaidChat] appendTurn failed:', error);
  }

  // ---- 7. 想起の索引（digest）を作る ----
  // **返信後に実行**するのでユーザーは待たない。閉じたセグメントが無ければ何もしない。
  // これが動かないと想起が何も見つけられないので、失敗はログに残す。
  try {
    const { generatePendingDigests } = await import('./aiDigest');
    const created = await generatePendingDigests({ uid: input.uid, now, env });
    if (created > 0) {
      console.log(
        `[aiPaidChat] created ${created} digest(s) uid=${input.uid.slice(0, 16)}…`
      );
    }
  } catch (error) {
    console.error('[aiPaidChat] digest generation failed:', error);
  }
}

/**
 * 直近ウィンドウを組む（第2層）。
 *
 * アーカイブ（`aiThreads`）から原文で読む。まだアーカイブが無い場合
 * （フェーズ5導入直後・購入直後）は `users/{uid}.aiChat.history` を使う。
 */
async function loadRecentHistory(opts: {
  uid: string;
  historyTurns: number;
  fallback: AiChatTurn[];
}): Promise<AiChatTurn[]> {
  try {
    const { loadRecentMessages } = await import('./aiThreadStore');
    const messages = await loadRecentMessages({
      uid: opts.uid,
      maxMessages: opts.historyTurns * 2,
    });
    if (messages.length > 0) {
      return messages.map((m) => ({ role: m.role, text: m.text }));
    }
  } catch (error) {
    console.error('[aiPaidChat] loadRecentHistory failed:', error);
  }
  return trimHistory(opts.fallback, opts.historyTurns);
}

/**
 * 過去会話の想起（第3層）。**トリガーが無ければ Firestore を読まない。**
 * 失敗しても空文字を返す（想起なしで会話は続く）。
 */
async function buildRecallIfNeeded(
  uid: string,
  userText: string
): Promise<string> {
  try {
    const { detectRecallIntent, pickRecallSegments, buildRecallContext } =
      await import('./aiRecallCore');
    const intent = detectRecallIntent(userText);
    if (!intent.needed) return '';

    const { loadDigests, loadSegments } = await import('./aiThreadStore');
    const digests = await loadDigests({ uid });
    if (digests.length === 0) return '';

    const seqs = pickRecallSegments(intent.hints, digests);
    if (seqs.length === 0) return '';

    const segments = await loadSegments({ uid, seqs });
    console.log(
      `[aiPaidChat] recall via=${intent.via} seqs=${seqs.join(',')} uid=${uid.slice(0, 16)}…`
    );
    return buildRecallContext(
      segments.map((s) => ({ seq: s.seq, messages: s.messages }))
    );
  } catch (error) {
    console.error('[aiPaidChat] recall failed:', error);
    return '';
  }
}

/**
 * 相談モード（`concern`）でシステムプロンプトに足す指示。
 * 傾聴に寄せ、アドバイスを急がせない。末尾の一文は**コード側で付ける**ので
 * ここでは指示しない（AI 任せだと付いたり付かなかったりするため）。
 */
const COUNSEL_GUIDANCE = `

# いまは「相談モード」で答えて
この子はいま、勉強ではなく気持ちの話をしている。次を守って答えて。
- まず気持ちを受け止める。「そうだったんだね」「つらかったね」と共感から入る。
- すぐに解決策を並べない。まず聞く。必要なら「もう少し聞かせて」と促す。
- 責めない・比べない・説教しない。「がんばれ」で終わらせない。
- 勉強の話に無理やり戻さない。この子が話したいことを話させる。
- 少し長めに、ていねいに書いてよい（ただし LINE で読める長さに）。`;

/**
 * この応答で何が起きたかを funnel に記録する（best-effort・awaitしない）。
 * ⚠️ **会話の内容は載せない**（uid と種別だけ）。
 */
async function logAiFunnel(opts: {
  uid: string;
  purpose: LlmPurpose;
  safety: SafetyClass;
  degrade: number;
  toolWrite?:
    | 'memory'
    | 'plan'
    | 'profile'
    | 'operator'
    | 'exam'
    | 'schedule'
    | 'mode';
  topicKey?: string;
  analysisShown: boolean;
}): Promise<void> {
  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    const tasks: Array<Promise<unknown>> = [];

    if (opts.safety === 'concern') {
      tasks.push(logServerFunnelEvent('ai_counsel_reply', opts.uid, {}));
    }
    if (opts.analysisShown) {
      tasks.push(
        logServerFunnelEvent('ai_analysis_view', opts.uid, {
          purpose: opts.purpose,
        })
      );
    }
    if (opts.toolWrite === 'plan') {
      tasks.push(logServerFunnelEvent('ai_plan_created', opts.uid, {}));
    }
    if (opts.toolWrite === 'memory') {
      tasks.push(logServerFunnelEvent('ai_memory_updated', opts.uid, {}));
    }
    if (opts.toolWrite === 'operator') {
      // 運営への取り次ぎ件数は「AIが答えられなかった話題」の指標にもなる。
      tasks.push(logServerFunnelEvent('ai_operator_handoff', opts.uid, {}));
    }
    if (opts.topicKey) {
      tasks.push(
        logServerFunnelEvent('ai_topic_linked', opts.uid, {
          topicKey: opts.topicKey,
        })
      );
    }
    if (opts.degrade > 0) {
      tasks.push(
        logServerFunnelEvent('ai_budget_degraded', opts.uid, {
          degrade: String(opts.degrade),
        })
      );
    }
    await Promise.all(tasks);
  } catch (error) {
    console.warn('[aiPaidChat] funnel log failed:', error);
  }
}

/** 単元キー → 表示名（プラン・カタログで使う）。 */
function topicNameOf(key: string): string | null {
  return resolveTopicByKey(key)?.name ?? null;
}

/**
 * 直近の生徒の発言から単元を解決する（今のメッセージで解決できなかったとき用）。
 * 新しい発言から順に見て、最初に当たった単元を返す。
 * 会話の流れを引き継ぐためのものなので、さかのぼるのは直近4発言まで。
 */
/**
 * 「教材を出してほしい」と言っているか。雑談の流れで教材ボタンを出さないための判定。
 * 単元名が今のメッセージに出ていれば別途 topicNow で拾えるので、ここは要求の語だけ見る。
 */
const MATERIAL_REQUEST_RE =
  /(リンク|参考書|問題集|問題|教材|ページ|開き|ひらき|解きたい|勉強したい|やりたい|復習)/;

function resolveRecentTopic(history: AiChatTurn[]): ResolvedTopic | undefined {
  const userTexts = history
    .filter((t) => t.role === 'user')
    .slice(-4)
    .reverse();
  for (const turn of userTexts) {
    const hit = resolveTopics(turn.text)[0];
    if (hit) return hit;
  }
  return undefined;
}

/** 教材に実在する単元キーの集合（プラン検証の関門）。 */
function allTopicKeys(): ReadonlySet<string> {
  return new Set(listAllTopics().map((t) => t.key));
}

/**
 * プラン作成用に AI へ渡す単元キーの候補を選ぶ。
 *
 * 92単元すべてを載せると入力トークンを大きく食うので、**関係しそうな範囲だけ**渡す:
 *   ① 発話から解決できた単元と**同じ巻**の単元（テスト範囲は巻単位のことが多い）
 *   ② 記憶している「テスト範囲・教科」から解決できた単元と同じ巻
 * どちらも無ければ空（＝プランは作らせない。範囲が分からないまま作っても外れるため）。
 */
function catalogCandidates(
  userText: string,
  memory: AiMemory | undefined
): Array<{ key: string; name: string; volume: string }> {
  const chapters = new Set<string>();
  for (const hit of resolveTopics(userText, { limit: 3 })) {
    chapters.add(hit.chapter);
  }
  for (const subject of memory?.testSubjects ?? []) {
    for (const hit of resolveTopics(subject, { limit: 2 })) {
      chapters.add(hit.chapter);
    }
  }
  if (chapters.size === 0) return [];

  return listAllTopics()
    .filter((t) => chapters.has(t.chapter))
    .map((t) => ({ key: t.key, name: t.name, volume: t.volume }));
}

/**
 * 単元が特定できたときに、AI へ「下にボタンを出してある」と伝える指示。
 *
 * ⚠️ **AI に URL を書かせない。** URL は索引から組み立てて Quick Reply で添えるので、
 * AI は「下のボタンから開けるよ」と案内するだけでよい。
 * AI に URL を作らせると、存在しないページを案内する事故になる。
 */
function buildStudyLinkGuidance(topic: ResolvedTopic): string {
  return (
    `\n\n# この返信に添えているボタン（あなたは URL を書かない）\n` +
    `この返信の下に「📖 参考書をひらく」「✏️ 問題を解く」のボタンを自動で付けてある。\n` +
    `どちらも「${topic.volume} ${topic.name}」のページにそのまま飛ぶ。\n` +
    `- 「勉強したい」と言われたら、まず要点を2〜3文でさっと教えてから、` +
    `「下のボタンからすぐ始められるよ」と案内する。\n` +
    `- **URL やリンクを文章中に書かない**（ボタンがあるので不要。書くと間違いのもと）。\n` +
    `- 「参考書のどこ？」と聞かれても、ページ番号ではなくボタンを案内する。`
  );
}

/** 分析の自己検証に落ちたときの差し替え文（誤った成績を伝えない）。 */
const ANALYSIS_UNVERIFIED_TEXT =
  'ごめんね、いま成績のまとめをうまく作れなかったみたい💦\n' +
  'メニューの「苦手を復習」を押すと、間違えた問題から出してくれるよ。そっちも試してみてね😊';

/**
 * 分析回答の自己検証。注入したデータ外の数字・単元名を使っていないかを最安モデルで点検する。
 *
 * - 検証自体のコストも計上する（見えない支出を作らない）
 * - 検証が失敗（API エラー等）したら **true 扱い**で通す。
 *   検証できないことを理由に正しい回答まで捨てるのは、体験の損失が大きいため。
 */
async function verifyAnalysisAnswer(opts: {
  contextPrompt: string;
  answer: string;
  decision: GateAllow;
  uid: string;
  now: Date;
  env: Record<string, string | undefined>;
}): Promise<boolean> {
  try {
    const result = await generateText({
      purpose: 'verify',
      grant: createGrant('paid', {
        ...opts.decision,
        maxOutputTokens: resolveMaxOutputTokens(
          'verify',
          'paid',
          opts.decision.degrade
        ),
      }),
      system: ANALYSIS_VERIFY_PROMPT,
      history: [],
      userText: buildAnalysisVerifyInput(opts.contextPrompt, opts.answer),
      env: opts.env,
    });
    await recordCost({
      uid: opts.uid,
      purpose: 'verify',
      cost: result.cost,
      now: opts.now,
      tier: 'paid',
    });
    return parseVerifyResult(result.text);
  } catch (error) {
    console.error('[aiPaidChat] analysis verify failed to run:', error);
    return true; // 検証できない＝回答を捨てる理由にはしない
  }
}

/**
 * 安全分類を行う（決定論 → 必要なら LLM で補完）。
 *
 * - 決定論が `crisis` と言ったら **LLM は呼ばない**（確実性とコストゼロ）
 * - `unknown` かつ十分な長さのときだけ最安モデルで確認する
 * - LLM 側が失敗したら `concern` に倒す（素通りより安全）
 */
async function classifySafety(opts: {
  userText: string;
  grant: BudgetGrant;
  env: Record<string, string | undefined>;
}): Promise<SafetyClass> {
  const deterministic = classifyDeterministic(opts.userText);
  if (deterministic !== 'unknown') return deterministic;

  if (!needsLlmClassification(opts.userText, deterministic)) return 'normal';

  try {
    const result = await generateText({
      purpose: 'classify',
      grant: opts.grant,
      system: SAFETY_CLASSIFY_PROMPT,
      history: [],
      userText: opts.userText,
      env: opts.env,
    });
    return parseLlmSafetyClass(result.text);
  } catch (error) {
    console.error('[aiPaidChat] safety classify failed; falling back:', error);
    // 分類できないまま素通りさせるより、傾聴で受けるほうが安全。
    return 'concern';
  }
}

/**
 * `crisis` の処理。**AI を1回も呼ばない**（＝コストゼロ・内容が揺れない）。
 * 実体は `aiCrisisHandler`（無料Botと共有）。
 */
async function handleCrisis(input: PaidChatInput, now: Date): Promise<void> {
  await handleAiCrisis({
    client: input.client,
    uid: input.uid,
    replyToken: input.replyToken,
    userText: input.promptText,
    botKind: input.botKind,
    now,
  });
}

/** 直近メッセージ時刻に今回ぶんを足す（フラッド検知用・末尾 N 件だけ保持）。 */
function appendNow(times: number[] | undefined, now: Date): number[] {
  return [...(times ?? []), now.getTime()].slice(-RECENT_TIMES_KEEP);
}

/** reply を試み、失敗してもログのみ（webhook 200 を維持）。 */
async function safeReply(input: PaidChatInput, text: string): Promise<void> {
  try {
    await input.client.replyMessage({
      replyToken: input.replyToken,
      messages: [{ type: 'text', text }],
    });
  } catch (error) {
    console.error('[aiPaidChat] reply failed:', error);
  }
}

/**
 * 会話履歴・当日カウント・注意書き表示月を書き戻す。
 * `free` 経路（`aiChat`）と**同じフィールド**を使う（両Botで履歴を共有する設計）。
 */
async function writeChatState(opts: {
  uid: string;
  priorHistory: AiChatTurn[];
  historyUserText: string;
  answer: string;
  historyTurns: number;
  now: Date;
}): Promise<void> {
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    const todayJst = getJstDate(opts.now);
    const newHistory = trimHistory(
      [
        ...opts.priorHistory,
        { role: 'user' as const, text: opts.historyUserText },
        { role: 'model' as const, text: opts.answer },
      ],
      opts.historyTurns
    );

    // ⚠️ `aiChat.count` は free の回数制の器。paid はコスト予算制なので
    // 「使った回数」の記録としてのみ加算する（上限判定には使わない）。
    await db.doc(`users/${opts.uid}`).set(
      {
        aiChat: {
          dateJST: todayJst,
          count: FieldValue.increment(1),
          history: newHistory,
          lastChatAt: FieldValue.serverTimestamp(),
          lastDisclaimerMonth: todayJst.slice(0, 7),
        },
      },
      { merge: true }
    );
  } catch (error) {
    // 返信は済んでいるのでログのみ。
    console.error('[aiPaidChat] state write failed:', error);
  }
}

/**
 * 全体キャップ超過・急増を運営（管理者）へ通知する。
 * 通知は best-effort（失敗しても本体は止めない）。
 */
async function notifyAdminOfCostDeny(
  uid: string,
  reason: string,
  state: { globalMonthJpy?: number; globalDayJpy?: number; userDayJpy: number },
  now: Date
): Promise<void> {
  try {
    const { notifyAdminsThrottled } = await import('./adminNotify');
    // 全体キャップ超過は全ユーザーの各ターンで発火し得るので、
    // 理由ごとに間引く（管理者のトークが埋まる＆push 枠の無駄を防ぐ）。
    // ユーザー起因の急増は uid 単位で間引く。
    const key =
      reason === 'user_spike'
        ? `ai_cost:user_spike:${uid}`
        : `ai_cost:${reason}`;
    await notifyAdminsThrottled(
      key,
      [
        '⚠️ AI コスト上限に達しました',
        `理由: ${reason}`,
        `時刻: ${now.toISOString()}`,
        `対象: ${uid.slice(0, 20)}…`,
        `全体（当月/当日）: ¥${(state.globalMonthJpy ?? 0).toFixed(0)} / ¥${(
          state.globalDayJpy ?? 0
        ).toFixed(0)}`,
        `このユーザーの当日: ¥${state.userDayJpy.toFixed(1)}`,
        '',
        '確認: npx tsx scripts/report-ai-cost.ts',
      ].join('\n'),
      now.getTime()
    );
  } catch (error) {
    console.error('[aiPaidChat] admin notify failed:', error);
  }
}
