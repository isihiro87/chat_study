/**
 * 公式LINE フォールバック AI チャットボット（Gemini）。
 *
 * `lineWebhook.ts` の `handleMessage` で、既存コマンド（設定変更 / ニックネーム
 * 入力 / 復帰キーワード）のいずれにもマッチしなかった自由文に対して呼び出される。
 * 本サービスの仕様を内蔵したシステムプロンプト＋直近の会話履歴＋ユーザーの質問を
 * Gemini に送り、応答を LINE reply で返す。
 *
 * コスト管理（多層）:
 *   1. 1 日利用上限（プラン統合により全ユーザー共通 40 回）。
 *      超過時は API を呼ばず固定文で断る（課金ゼロ）。
 *   2. 出力トークン上限・入力履歴ターン制限でトークンを抑制。
 *   3. Gemini 呼び出し成功時のみ count を消費（エラーで上限を無駄にしない）。
 *   4. **支出を `aiCostStats` に計上する**（2026-07-26〜）。実トークン・
 *      キャッシュヒット率が見える。
 *   5. **予算ゲート**（2026-08-06〜）。①全体キャップ ②無料ティア専用キャップ
 *      ③個人の月次回数（公平性）を `aiCostCore.evaluateFreeGate` で判定する。
 *      ⚠️ 2026-08-06 以前は「計上はするが判定はしない」状態で、全体キャップは
 *      free に効いていなかった（歯止めは 1日40回だけ＝1人 ¥650/月まで伸びうる）。
 *
 * 安全（2026-07-26〜）:
 *   - 決定論的な安全分類（`aiSafetyCore`）を通す。**LLM 補完分類は呼ばない**ので
 *     コストはゼロのまま。`crisis` は LLM を1回も呼ばず固定文＋運営通知で終わる。
 *
 * 失敗時はフォールバック文を返し、webhook 全体（200 応答）を壊さない。
 */

import type { messagingApi } from '@line/bot-sdk';
import type { UserDoc } from './userDocTypes';
import {
  getUserPlan,
  getLineClient,
  CONTACT_URL,
  LIFF_UNITS_URL,
  AI_SETTINGS_URL,
} from './lineWebhook';
import { buildSystemPrompt, type AiChatBotKind } from './aiChatPrompt';
import { resolveTier } from './aiTier';
import {
  getDailyLimit,
  getHistoryTurns,
  getJstDate,
  trimHistory,
  evaluateRateLimit,
  resolveFreeSafety,
  canRecallToday,
} from './aiChatCore';
import { appendConcernFooter, type SafetyClass } from './aiSafetyCore';
import { handleAiCrisis } from './aiCrisisHandler';
import { notifyIfProviderStopped } from './aiProviderAlert';
import {
  buildReplyMessages,
  finishTruncated,
  splitReply,
} from './aiReplySplit';
import {
  denyMessage,
  evaluateFreeGate,
  parseLimits,
  type CostLimits,
  type GateDecision,
} from './aiCostCore';
import {
  buildIntentQuickReply as buildIntentQuickReplyPure,
  buildFallbackQuickReply as buildFallbackQuickReplyPure,
  type AiQuickReply,
  type QuickReplyUrls,
} from './aiChatQuickReply';
import type { LlmPurpose } from './llmModelResolver';
import type { CostBreakdown } from './llmPrices';
import type { AiProfile } from './aiProfileCore';

/** Gemini の出力トークン上限。LINE で読める長さに抑える。 */
const MAX_OUTPUT_TOKENS = 500;
/**
 * 無料ティアの想起で走査する要約索引の件数上限（既定の 60 から絞る）。
 * 想起は1日1回だけだが、3,000人ぶんの read を積むと効いてくるため。
 */
const FREE_DIGEST_QUERY_LIMIT = 20;
/**
 * 単発生成（`generateGeminiText`）の入力トークン上限。
 * 従来は無制限だったため、実害が出ない大きさで頭を押さえるだけの値にする
 * （月末レポートの集計テキスト・記述答案・参考書本文が収まる想定）。
 */
const ONE_SHOT_MAX_INPUT_TOKENS = 30_000;

/** 上限超過時の固定文。webhook 側のメディア早期ガードでも再利用する。 */
export const LIMIT_REACHED_TEXT =
  'ごめんね、1日にやり取りできる回数に達しちゃったみたい💦 また明日、続きを質問してね😊';
/** Gemini エラー時のフォールバック文。 */
const FALLBACK_ERROR_TEXT =
  'ごめんね、いまうまく答えられなかったみたい💦 もう一度送ってみてくれる？';
/**
 * AI 応答の注意書き。初回利用時と毎月最初のやり取り時に、AI 回答の前に1通添える。
 */
const AI_DISCLAIMER_TEXT =
  '💡 ここからは AI が自動で返信するよ。べんりだけど、ときどき間違えることもあるんだ。大事なことは教科書や先生にも確認してね😊';

/**
 * Quick Reply の組み立ては純粋モジュール（`aiChatQuickReply`）に持たせ、
 * ここでは `lineWebhook` の URL 定数を渡すだけの薄いラッパーにする。
 *
 * ⚠️ URL は**関数の中で**参照する。`aiChat` は `lineWebhook` を静的 import して
 * いるので、モジュール評価時に読むと初期化順に依存してしまう。
 */
function quickReplyUrls(): QuickReplyUrls {
  return {
    units: LIFF_UNITS_URL,
    contact: CONTACT_URL,
    aiSettings: AI_SETTINGS_URL,
  };
}

/**
 * 話題に応じたワンタップ導線（テキスト入力時のみ・追いコストなし）。
 * `modelText` を渡すと **AI が案内した操作**もボタン化する（2026-08-06）。
 */
export function buildIntentQuickReply(
  userText: string,
  modelText?: string,
  includeAiSettings = false
): AiQuickReply | undefined {
  return buildIntentQuickReplyPure(
    userText,
    quickReplyUrls(),
    modelText,
    includeAiSettings
  );
}

/** AI が使えないとき（上限到達・生成エラー）の導線。 */
export function buildFallbackQuickReply(): AiQuickReply {
  return buildFallbackQuickReplyPure(quickReplyUrls());
}

/**
 * マルチモーダル入力（画像・音声）の 1 パート。base64 データと MIME タイプを持つ。
 * webhook 側が LINE のコンテンツ API から取得してこの形に詰めて渡す。
 */
export interface AiChatMediaPart {
  /** Gemini に渡す MIME タイプ（例: "image/jpeg" / "audio/mp4"）。 */
  mimeType: string;
  /** base64 エンコード済みのバイナリ。 */
  data: string;
}

/** メディア種別を MIME から判定（プロンプト・履歴マーカーの出し分け用）。 */
function mediaKind(media: AiChatMediaPart[]): 'image' | 'audio' | 'mixed' {
  const kinds = new Set(
    media.map((m) => (m.mimeType.startsWith('audio/') ? 'audio' : 'image'))
  );
  if (kinds.size > 1) return 'mixed';
  return kinds.has('audio') ? 'audio' : 'image';
}

/** テキスト無しでメディアだけ送られたときに Gemini へ与える既定の指示文。 */
function defaultMediaPrompt(media: AiChatMediaPart[]): string {
  switch (mediaKind(media)) {
    case 'audio':
      return '送られてきた音声を聞き取って、その内容にわかりやすく答えてあげてね。質問が含まれていれば中学生にもわかるように解説して。';
    case 'image':
      return '送られてきた画像の内容を読み取って、わかりやすく説明したり質問に答えてあげてね。問題の写真なら解き方も教えてあげて。';
    default:
      return '送られてきたファイルの内容を読み取って、わかりやすく答えてあげてね。';
  }
}

/** 履歴に残す user 側マーカー（base64 は保存せず、何を送ったかだけ残す）。 */
function mediaHistoryMarker(media: AiChatMediaPart[], caption: string): string {
  const tag =
    mediaKind(media) === 'audio'
      ? '[音声を送信]'
      : mediaKind(media) === 'image'
        ? '[画像を送信]'
        : '[ファイルを送信]';
  return caption ? `${tag} ${caption}` : tag;
}

/**
 * LINE に reply を送る（薄いラッパ）。client を注入し、どちらのBotからでも使える。
 * `quickReply` を渡すと、AI が答えられないときでも次の一手を出せる。
 */
async function replyWith(
  client: messagingApi.MessagingApiClient,
  replyToken: string,
  text: string,
  opts?: { quickReply?: AiQuickReply }
): Promise<void> {
  await client.replyMessage({
    replyToken,
    messages: [
      {
        type: 'text',
        text,
        ...(opts?.quickReply ? { quickReply: opts.quickReply } : {}),
      },
    ] as never,
  });
}

/**
 * フォールバック AI 応答のメインハンドラ（client 注入版）。
 * つづもんBot（tsudumonWebhook）からもこちらを直接呼ぶ。
 *
 * @param client     reply を送るチャネルの MessagingApiClient
 * @param uid        users/{uid} の ID
 * @param replyToken LINE の replyToken
 * @param userText   ユーザーが送ってきた自由文
 * @param userData   handleMessage で取得済みの users/{uid} データ（追加 read 回避）
 * @param media      画像・音声の添付（あれば）
 * @param botKind    どちらの公式LINE Botから呼ばれているか。既定は "ichimon"
 *   （チャットでスタディ）。つづもんBotは "tsudumon" を渡し、システムプロンプトを
 *   つづもん用の知識ブロックに差し替える（aiChatPrompt.ts 参照）。
 */
export async function handleAiChatWith(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string,
  userText: string,
  userData: UserDoc | undefined,
  media?: AiChatMediaPart[],
  botKind: AiChatBotKind = 'ichimon'
): Promise<void> {
  const trimmed = userText.trim();
  const hasMedia = !!media && media.length > 0;
  // テキストも添付も無ければ何もしない（メディアだけ・テキストだけは続行）。
  if (!trimmed && !hasMedia) return;

  // Gemini に渡す指示文と、履歴に残す user 側テキスト。
  // メディアのみ（キャプション無し）のときは既定の指示文を補う。
  const promptText = hasMedia ? trimmed || defaultMediaPrompt(media!) : trimmed;
  const historyUserText = hasMedia
    ? mediaHistoryMarker(media!, trimmed)
    : trimmed;

  const plan = getUserPlan(userData as Record<string, unknown> | undefined);
  const limit = getDailyLimit(plan);
  const maxTurns = getHistoryTurns(plan);
  const todayJst = getJstDate(new Date());

  const aiChat = userData?.aiChat;
  const { currentCount, limited, currentMonthCount } = evaluateRateLimit(
    aiChat,
    todayJst,
    limit
  );

  // AI 注意書きを出すか: 初回利用 or 当月まだ出していない（毎月最初のやり取り）。
  // todayJst は "YYYY-MM-DD" なので先頭7文字が "YYYY-MM"（JST 基準の当月）。
  const currentMonth = todayJst.slice(0, 7);
  const needsDisclaimer = aiChat?.lastDisclaimerMonth !== currentMonth;

  // AI 設定ページ（`/ai`）の案内を出すか。**1人につき1回だけ**（2026-08-06〜）。
  // 「AI の名前や話し方を自分で決められる」ことは言われないと気づけない一方、
  // 毎回出すとうるさい。最初の応答にだけチップを添える。
  const needsPersonaPrompt = !aiChat?.personaPromptedAt;

  // ===== ティア分岐（この1箇所のみ）=====
  // つづもん（有料）の課金者・体験者は個別サポート用のパイプラインへ委譲する。
  // それ以外（= 一問一答Bot の 3,000 人、つづもん未登録・期限切れ）は
  // **以下の現行コードパスをそのまま通る**（挙動は 1 ミリも変えない）。
  // 判定は取得済みの userData だけで行う＝追加 Firestore read ゼロ。
  // 詳細: .steering/20260725-ai-personal-support/
  const tier = resolveTier({
    bot: botKind,
    tsudumonRaw: (userData as Record<string, unknown> | undefined)?.tsudumon,
    nowMs: Date.now(),
  });
  if (tier.tier === 'paid') {
    try {
      const { handlePaidAiChat } = await import('./aiPaidChat');
      await handlePaidAiChat({
        client,
        uid,
        replyToken,
        promptText,
        historyUserText,
        userData,
        media,
        botKind,
        tier,
        needsDisclaimer,
        disclaimerText: AI_DISCLAIMER_TEXT,
        quickReply: hasMedia ? undefined : buildIntentQuickReply(trimmed),
        // 注: paid は応答生成が aiPaidChat 側なので、AI 応答由来のチップは
        //     あちらで組む（ここでは発話由来のみ）。
      });
      return;
    } catch (error) {
      // paid パイプラインが落ちても無応答にはしない。
      // ただし free の経路に落として二重課金・二重返信にならないよう、
      // ここで固定文を返して終了する。
      console.error('[aiChat] paid pipeline failed:', error);
      try {
        await replyWith(client, replyToken, FALLBACK_ERROR_TEXT);
      } catch (replyError) {
        console.error('[aiChat] paid fallback reply failed:', replyError);
      }
      return;
    }
  }

  const now = new Date();
  const env = process.env as Record<string, string | undefined>;

  // 1. 安全分類（決定論のみ・**LLM は呼ばない**＝コストゼロ・レイテンシゼロ）。
  //    無料Botの利用者は中学生3,000人。ここまで paid だけの機能だったが、
  //    取りこぼしの代償が大きいので free にも入れる（requirements.md R1〜R3）。
  //    ⚠️ `needsLlmClassification`（最安モデルでの補完分類）は free では呼ばない。
  const safety: SafetyClass = resolveFreeSafety(promptText);

  if (safety === 'crisis') {
    console.warn(`[aiChat] crisis detected uid=${uid.slice(0, 16)}…`);
    // AI を1回も呼ばずに固定文で受け止め、運営へ通知する。
    // count も消費しない（API を叩いていないため）。
    await handleAiCrisis({
      client,
      uid,
      replyToken,
      userText: promptText,
      botKind,
      now,
    });
    return;
  }

  // 2. レート制限。超過時は API を呼ばず固定文で断る（課金ゼロ）。
  //    ここで会話を終端させず、AI 以外で続けられる導線を添える。
  if (limited) {
    try {
      await replyWith(client, replyToken, LIMIT_REACHED_TEXT, {
        quickReply: buildFallbackQuickReply(),
      });
    } catch (error) {
      console.error('[aiChat] limit reply failed:', error);
    }
    return;
  }

  // 3. 履歴（プラン downgrade に備え送信側でもトリミング）。
  const priorHistory = trimHistory(aiChat?.history ?? [], maxTurns);

  // 3-b. 検索的想起（2026-08-06〜・無料にも開放／**1日1回まで**）。
  //   直近20ターンより前の話は履歴から落ちるが、原文は `aiThreads` に残っている。
  //   「前に話した◯◯」のように過去を指されたときだけ、要約索引を照合して
  //   該当セグメントの原文を引き戻す。トリガーが無ければ Firestore も触らない。
  const recallAllowed = canRecallToday(aiChat, todayJst);
  const recallContext = recallAllowed
    ? await buildFreeRecall(uid, promptText)
    : '';
  const usedRecall = recallContext !== '';

  // 4. 用途の決定。悩み相談（concern）は counsel にする。モデルは既定では
  //    最安のままで、`LLM_MODEL_FREE_COUNSEL` を設定したときだけ1段上がる。
  const purpose: LlmPurpose = safety === 'concern' ? 'counsel' : 'chat';

  // 5. 予算ゲート（2026-08-06〜）。
  //    ここまで free は**計上だけして判定していなかった**ため、全体キャップが
  //    効かず、歯止めは「1人1日40回」だけだった。無料にも全体キャップ＋
  //    無料ティア専用キャップ＋個人の月次回数を通す（`aiCostCore.evaluateFreeGate`）。
  //    Firestore read は TTL 60秒キャッシュ越しなので、増えても 1 read/ターン以下。
  const limits = parseLimits(env);
  const gate = await resolveFreeGate({
    purpose,
    limits,
    userMonthCount: currentMonthCount,
    now,
  });
  if (gate.kind === 'deny') {
    console.warn(
      `[aiChat] free denied uid=${uid.slice(0, 16)}… reason=${gate.reason}` +
        ` (LLM は呼ばない＝課金ゼロ)`
    );
    if (gate.notifyAdmin) await notifyFreeCapReached(gate.reason, now);
    try {
      // AI 以外（1問解く・苦手を復習・じっくり学ぶ）は上限と無関係に使えるので、
      // 会話をここで終端させずそちらへ逃がす。
      await replyWith(client, replyToken, denyMessage(gate.reason), {
        quickReply: buildFallbackQuickReply(),
      });
    } catch (error) {
      console.error('[aiChat] deny reply failed:', error);
    }
    return; // count は消費しない（API を叩いていない）
  }

  // 6. 生成。`llmProvider` 経由にすることで実トークン・円換算が取れ、
  //    支出が全体キャップ（②層）と無料ティアのサブキャップに載る。
  let answer: string;
  let truncated = false;
  try {
    const { generateText, createGrant } = await import('./llmProvider');
    const grant = createGrant('free', gate);
    const result = await generateText({
      purpose,
      grant,
      // 話題に合うブロックだけ注入する（入力トークンとコストを削る）。
      system:
        buildSystemPrompt(userData, botKind, { promptText }) + recallContext,
      history: priorHistory,
      userText: promptText,
      media,
      // 現行の GEMINI_MODEL 尊重を維持する（挙動不変）。
      // counsel は env オプトイン経路に任せるので上書きしない。
      modelOverride:
        purpose === 'chat' ? env.GEMINI_MODEL || undefined : undefined,
      env,
    });
    answer = result.text;
    truncated = result.truncated === true;

    await recordFreeCost(purpose, result.cost, now);
  } catch (error) {
    console.error('[aiChat] Gemini call failed:', error);

    // 費用上限・レート制限でサービスが止まっているなら運営に気づかせる
    // （free 側が沈黙しても誰も気づけなかった。requirements.md R4）。
    await notifyIfProviderStopped(error, now);

    // タイムアウト等「課金され得る」失敗だけ計上する。
    // 4xx/5xx で拒否された場合はトークン未消費なので計上しない。
    try {
      const { isBillableError } = await import('./llmProvider');
      const failedCost = (error as { llmCost?: CostBreakdown }).llmCost;
      if (failedCost && isBillableError(error)) {
        await recordFreeCost(purpose, failedCost, now);
      }
    } catch (costError) {
      console.error('[aiChat] failed-call cost record failed:', costError);
    }

    try {
      await replyWith(client, replyToken, FALLBACK_ERROR_TEXT, {
        quickReply: buildFallbackQuickReply(),
      });
    } catch (replyError) {
      console.error('[aiChat] fallback reply failed:', replyError);
    }
    return; // count は消費しない
  }

  // 7. 応答の仕上げ。
  //    - 出力上限で切れていたら未完の文を落として「つづき」を促す
  //    - 悩み相談なら大人につなげる一文をコード側で必ず付ける
  if (truncated) answer = finishTruncated(answer);
  if (safety === 'concern') answer = appendConcernFooter(answer);

  // 8. 返信。初回・毎月最初のやり取りでは AI 注意書きを先頭に添えて送る。
  // 話題に応じたワンタップ導線を最後のメッセージに Quick Reply で添える
  // （テキスト入力時のみ・追いコストなし）。長い応答は吹き出しを分ける。
  try {
    // AI が案内した操作もボタンにする（`answer` を渡す）。
    // 「範囲を設定しよう」と言われたのにボタンが無い、という取りこぼしを無くす。
    const quickReply = hasMedia
      ? undefined
      : buildIntentQuickReply(trimmed, answer, needsPersonaPrompt);
    const messages = buildReplyMessages(splitReply(answer), {
      quickReply,
      leadingText: needsDisclaimer ? AI_DISCLAIMER_TEXT : undefined,
    });
    await client.replyMessage({
      replyToken,
      messages: messages as never,
    });
  } catch (error) {
    console.error('[aiChat] reply failed:', error);
    return; // 返信できなければ count も履歴も更新しない
  }

  // 9. count++ ＋ 履歴追記 ＋ 当月の注意書き表示済みを書き戻し（成功時のみ）。
  const newHistory = trimHistory(
    [
      ...priorHistory,
      { role: 'user' as const, text: historyUserText },
      { role: 'model' as const, text: answer },
    ],
    maxTurns
  );
  const newCount = currentCount + 1;
  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        aiChat: {
          dateJST: todayJst,
          count: newCount,
          // ---- 通算カウンタ（2026-08-06〜・計測のため）----
          // `count` は JST 日付が変わるたび 0 に戻る（＝最終利用日ぶんしか残らない）。
          // そのため「7月のAIチャット呼び出し回数 1,641回」のような集計は**すべて
          // 下限値**にしかならず、改善の効果を測れなかった。
          // リセットされない通算値をここで持つ。**write は増えない**（同じ set）。
          totalCount: FieldValue.increment(1),
          // 初回利用日。まだ一度も使っていない人にだけ書く（以後は上書きしない）。
          ...(aiChat ? {} : { firstChatAt: FieldValue.serverTimestamp() }),
          // 月次カウント（公平性の上限用）。日次と同じ set に相乗りするので
          // 3,000人ぶんの write は増えない。月が変われば 0 から数え直す。
          monthJST: currentMonth,
          monthCount: currentMonthCount + 1,
          // 当日ぶんの想起を使い切ったことを記録（使ったときだけ更新する）。
          ...(usedRecall ? { recallDateJST: todayJst } : {}),
          // AI 設定ページの案内は1人1回だけ。出したことを記録する。
          // ⚠️ メディア送信時はチップを付けないので、そのときは記録もしない
          //    （次のテキスト応答で必ず1回出す）。
          ...(needsPersonaPrompt && !hasMedia
            ? { personaPromptedAt: FieldValue.serverTimestamp() }
            : {}),
          history: newHistory,
          lastChatAt: FieldValue.serverTimestamp(),
          // 当月分の注意書きは表示済みにする（needsDisclaimer に関わらず冪等）。
          lastDisclaimerMonth: currentMonth,
        },
      },
      { merge: true }
    );
  } catch (error) {
    // 返信は済んでいるのでログのみ。
    console.error('[aiChat] state write failed:', error);
  }

  // 10. 全会話アーカイブへ追記（2026-08-06〜・無料にも開放）。
  //    `users/{uid}.aiChat.history` は直近20ターンで古いものから消えるが、
  //    こちらは**消さずに永続保存**する（`aiThreads/{uid}/segments/{seq}`）。
  //
  //    なぜ無料にも入れるか:
  //      - 保存は安い（1ターン 1read+1write ≒ 月¥1未満／3,000人ぶん）。
  //        高いのは「毎ターン思い出すこと」であって「覚えておくこと」ではない。
  //      - 記憶が貯まっていないと、あとでプレミアムを始めても思い出す中身が無い。
  //        **今から貯め始めることに価値がある。**
  //    返信後に呼ぶので、失敗しても会話は成立する（appendTurn は throw しない）。
  try {
    const { appendTurn } = await import('./aiThreadStore');
    await appendTurn({
      uid,
      userText: historyUserText,
      modelText: answer,
      now,
    });
  } catch (error) {
    console.error('[aiChat] thread archive failed:', error);
  }

  // 10-b. セグメント要約（想起の検索インデックス）を作る。
  //    100メッセージ（＝50ターン）たまってセグメントが閉じたときだけ走るので、
  //    ふつうの無料ユーザーではめったに発生しない（発生しても最安モデルで
  //    1回 約¥0.5）。**これが無いと `aiThreads` に貯めても引き当てられない。**
  //    uid は渡すが tier:'free' なのでユーザー予算には計上しない（全体キャップのみ）。
  try {
    const { generatePendingDigests } = await import('./aiDigest');
    await generatePendingDigests({ uid, now, env, tier: 'free' });
  } catch (error) {
    console.error('[aiChat] digest generation failed:', error);
  }

  // 11. 軽量プロフィール記憶の抽出（返信後・N ターンに1回だけ）。
  //    ユーザーはもう待っていないので、失敗しても会話は成立する。
  try {
    const { shouldExtractProfile, extractAndSaveProfile } =
      await import('./aiFreeProfile');
    if (shouldExtractProfile(newCount)) {
      await extractAndSaveProfile({
        uid,
        history: newHistory,
        existing: (userData as Record<string, unknown> | undefined)
          ?.aiProfile as AiProfile | undefined,
        now,
        env,
      });
    }
  } catch (error) {
    console.error('[aiChat] profile extraction failed:', error);
  }

  // 注: AI 応答は replyMessage（リプライ）で送るため LINE の月間配信枠を
  // 消費しない。deliveryStats（push 配信枠モニター）には記録しない。
  // 利用量は users/{uid}.aiChat.count、コストは aiCostStats/{YYYY-MM}（byTier.free）
  // で把握する。
}

/**
 * 無料ティアの検索的想起（過去会話の引き戻し）。
 *
 * 直近ウィンドウ（20ターン）から落ちた会話は `aiThreads` に原文が残っているので、
 * 「前に話した◯◯」のように過去を指されたときだけ、要約索引（digests）を照合して
 * 該当セグメントを引き戻す。
 *
 * ## read を増やさないための3段構え
 * 1. **呼び出し側で1日1回に制限**（`canRecallToday`）。ここへ来る時点で当日未使用。
 * 2. **トリガー検出は決定論・ゼロコスト**（`detectRecallIntent`）。
 *    過去参照の言い回しが無ければ Firestore に一切触らずに返る。
 * 3. digests は `limit` 付きで引き、原文は選ばれた**最大2件だけ** `doc().get()`。
 *
 * 失敗しても会話は続く（空文字を返すだけ）。
 */
async function buildFreeRecall(uid: string, userText: string): Promise<string> {
  try {
    const { detectRecallIntent, pickRecallSegments, buildRecallContext } =
      await import('./aiRecallCore');
    const intent = detectRecallIntent(userText);
    if (!intent.needed) return ''; // ← ここで大半は Firestore を触らずに終わる

    const { loadDigests, loadSegments } = await import('./aiThreadStore');
    // 無料は索引の走査幅も絞る（既定60→20）。read 規律。
    const digests = await loadDigests({ uid, limit: FREE_DIGEST_QUERY_LIMIT });
    if (digests.length === 0) return '';

    const seqs = pickRecallSegments(intent.hints, digests);
    if (seqs.length === 0) return '';

    const segments = await loadSegments({ uid, seqs });
    console.log(
      `[aiChat] free recall via=${intent.via} seqs=${seqs.join(',')} uid=${uid.slice(0, 16)}…`
    );
    return buildRecallContext(
      segments.map((seg) => ({ seq: seg.seq, messages: seg.messages }))
    );
  } catch (error) {
    console.error('[aiChat] free recall failed:', error);
    return '';
  }
}

/**
 * 無料ティアの予算ゲートを解決する。
 *
 * 全体・ティア別の集計は `aiCostStats/{YYYY-MM}` の TTL キャッシュ（60秒）越しに
 * 読むので、追加 Firestore read は最大でも 1回/ターン（多くはキャッシュヒットで 0）。
 *
 * ⚠️ **集計が読めなくても free は止めない**（paid とは逆）。free は最安モデル固定で
 * 「1人1日40回」が先に効くため、読めない数分間の想定損失は数十円にとどまる。
 * 一方 deny に倒すと 3,000人の AI が一斉に沈黙する＝損失が非対称。
 * 判定の詳細は `aiCostCore.evaluateFreeGate` の doc コメント。
 */
async function resolveFreeGate(opts: {
  purpose: LlmPurpose;
  limits: CostLimits;
  userMonthCount: number;
  now: Date;
}): Promise<GateDecision> {
  let global: {
    monthJpy: number | undefined;
    dayJpy: number | undefined;
    freeMonthJpy: number | undefined;
    freeDayJpy: number | undefined;
  };
  try {
    const { loadGlobalCost } = await import('./aiCostStore');
    global = await loadGlobalCost(opts.now);
  } catch (error) {
    console.warn(
      '[aiChat] global cost unavailable; allowing free turn (see evaluateFreeGate):',
      error
    );
    global = {
      monthJpy: undefined,
      dayJpy: undefined,
      freeMonthJpy: undefined,
      freeDayJpy: undefined,
    };
  }
  return evaluateFreeGate({
    purpose: opts.purpose,
    limits: opts.limits,
    state: {
      globalMonthJpy: global.monthJpy,
      globalDayJpy: global.dayJpy,
      freeMonthJpy: global.freeMonthJpy,
      freeDayJpy: global.freeDayJpy,
      userMonthCount: opts.userMonthCount,
    },
  });
}

/**
 * 全体・無料ティアのキャップに当たったことを運営へ通知する（スロットル付き）。
 * これが出たら「無料の利用が想定を超えた」合図なので、env で上限を上げるか
 * 原因（暴走・新機能の想定外利用）を調べる。
 */
async function notifyFreeCapReached(reason: string, now: Date): Promise<void> {
  try {
    const { notifyAdminsThrottled } = await import('./adminNotify');
    await notifyAdminsThrottled(
      `ai_cost:free:${reason}`,
      `⚠️ 無料AIチャットが上限に達しました（${reason}）\n` +
        `無料ユーザーへの AI 応答を停止しています。\n` +
        `確認: aiCostStats/${now.toISOString().slice(0, 7)} の byTier.free / byTierDay\n` +
        `調整: functions/.env の AI_FREE_MONTHLY_CAP_JPY / AI_FREE_DAILY_CAP_JPY`,
      now.getTime()
    );
  } catch (error) {
    console.error('[aiChat] free cap notify failed:', error);
  }
}

/**
 * free の 1 回ぶんを計上する。
 *
 * **uid は渡さない**＝ユーザー予算（`users/{uid}.aiBudget`）には載せない。
 * free は回数制のままなので個人予算は不要で、3,000人ぶんのトランザクション write を
 * 増やさないため（`requirements.md` R6 / C4）。サービス全体キャップ（②層）には載る。
 */
async function recordFreeCost(
  purpose: LlmPurpose,
  cost: CostBreakdown,
  now: Date
): Promise<void> {
  try {
    const { recordCost } = await import('./aiCostStore');
    await recordCost({ purpose, cost, now, tier: 'free' });
  } catch (error) {
    console.error('[aiChat] cost record failed:', error);
  }
}

/**
 * 旧Bot（一問一答）固定の薄いラッパー。既存の呼び出し元は無変更のまま使える。
 */
export async function handleAiChat(
  uid: string,
  replyToken: string,
  userText: string,
  userData: UserDoc | undefined,
  media?: AiChatMediaPart[]
): Promise<void> {
  await handleAiChatWith(
    await getLineClient(),
    uid,
    replyToken,
    userText,
    userData,
    media
  );
}

/**
 * 履歴なしの単発 Gemini 生成（月末レポート・記述採点・参考書チャット等で再利用）。
 * systemPrompt に指示、userText に素材を渡す。成功時はテキスト、失敗時は throw。
 * model を渡すと既定（GEMINI_MODEL / flash-lite）を上書きできる。
 *
 * ## 2026-07-25: `llmProvider` 経由に載せ替えた（互換シム）
 *
 * 呼び出し側のシグネチャ・戻り値・例外は**従来と同じ**まま、内部を統一
 * インターフェースに通すことで次を得る:
 *   - **実トークンから円換算したコストを `aiCostStats/{YYYY-MM}` に計上**する
 *     → サービス全体キャップ（②層）が、会話以外の支出も含めて効くようになる
 *   - 価格表に無いモデルは既定モデルへフォールバック（`resolveOverride`）
 *
 * ユーザー予算（`users/{uid}.aiBudget`）には計上しない（uid を受け取らない＝
 * 会話とは別系統）。ユーザー単位の上限が要る経路は `aiPaidChat` を使う。
 *
 * 設計: `.steering/20260725-ai-personal-support/design.md` §2-4
 */
export async function generateGeminiText(
  systemPrompt: string,
  userText: string,
  maxOutputTokens?: number,
  model?: string,
  timeoutMs?: number
): Promise<string> {
  const { generateText, createOneShotGrant, DEFAULT_TIMEOUT_MS } =
    await import('./llmProvider');

  const maxOut = maxOutputTokens ?? MAX_OUTPUT_TOKENS;
  const grant = createOneShotGrant({
    // 単発生成は素材（集計テキスト・答案・教材本文）が入力の主体。
    // 従来は上限を設けていなかったので、実害が出ない大きさで頭を押さえるだけにする。
    maxInputTokens: ONE_SHOT_MAX_INPUT_TOKENS,
    maxOutputTokens: maxOut,
  });

  const result = await generateText({
    purpose: 'chat',
    grant,
    system: systemPrompt,
    history: [],
    userText,
    timeoutMs: timeoutMs ?? DEFAULT_TIMEOUT_MS,
    // 従来の既定（GEMINI_MODEL → flash-lite）を維持する。
    modelOverride: model || process.env.GEMINI_MODEL || undefined,
  });

  // 計上は best-effort（失敗しても生成結果は返す）。await して取りこぼしを防ぐ。
  try {
    const { recordCost } = await import('./aiCostStore');
    await recordCost({ purpose: 'chat', cost: result.cost, now: new Date() });
  } catch (error) {
    console.error('[aiChat] one-shot cost record failed:', error);
  }

  return result.text;
}

/** firebase-admin の Firestore を遅延初期化して返す（lineWebhook と同パターン）。 */
async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}
