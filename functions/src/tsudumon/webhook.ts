// つづもん専用LINE Botのwebhook本体。
//
// design.md「2. tsudumon/webhook.ts」のディスパッチ表どおりに、つづもん機能
// （ワーク演習 / 参考書AI対話 / ライセンス登録 / AIチャットのフォールバック）だけに
// 委譲する。一問一答固有のpostback type（select_grade / scope_* / restart /
// weak_review / settings_* / extra_question 等）は一切扱わない。
//
// 署名検証は既存 lineWebhook.ts の verifyLineSignature と同じ手順（validateSignature）
// を新規に書く（既存関数は共有化しない＝既存を触らない）。検証失敗時は401、
// それ以外は常に200を返す（LINEの再送ループを避ける方針も既存webhookと同じ）。
import * as functions from 'firebase-functions/v1';
import type { messagingApi } from '@line/bot-sdk';

import { getTsudumonLineClient } from './client';
import {
  handleTsudumonFollow,
  handleTsudumonUnfollow,
  buildTsudumonUid,
} from './followHandlers';
import {
  type LineEvent,
  handleTsudumonActivation,
  handleTsudumonContinueRequest,
  handleWorkbookQuestion,
  handleWorkbookTextAnswer,
  handleWorkbookStartPostback,
  handleWorkbookNextPostback,
  handleWorkbookEndPostback,
  handleWorkbookIdkPostback,
  handleWorkbookKindPostback,
  handleWorkbookInputSkipPostback,
  handleWorkbookRegradePostback,
  handleWorkbookStatsPostback,
  handleWorkbookRecentPostback,
  handleWorkbookWeakPostback,
  handleWorkbookHelpPostback,
  handleReferenceAskPostback,
  handleReferenceTalkPostback,
  handleReferenceCheckPostback,
  handleReferenceLevelPostback,
  handleReferenceTextInput,
  handleAnswerPostback,
  handleMediaMessage,
  handleStickerMessage,
} from '../lineWebhook';
import { handleAiChatWith } from '../aiChat';
import { extractTsudumonCode } from '../tsudumonCore';
import { WORKBOOK_PREFIX_RE } from '../workbookTopic';

interface TsudumonWebhookBody {
  destination?: string;
  events?: LineEvent[];
}

async function verifyTsudumonSignature(
  bodyText: string,
  channelSecret: string,
  signature: string
): Promise<boolean> {
  const { validateSignature } = await import('@line/bot-sdk');
  return validateSignature(bodyText, channelSecret, signature);
}

/** lineWebhook.ts の getDb() と同じ初期化パターン（既存を触らず自己完結させる）。 */
async function getTsudumonDb(): Promise<FirebaseFirestore.Firestore> {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return getFirestore();
}

/**
 * postback ディスパッチ。design.md のディスパッチ表どおり wb_* / ref_* / answer の
 * みを扱う。一問一答固有の type（select_grade / scope_* / restart 等）は
 * default 節でログのみ・無視する。
 */
/** export はテスト用（design.md「ユニットテスト」節）。振る舞いへの影響はない。 */
export async function dispatchTsudumonPostback(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const type = params.get('type');

  switch (type) {
    // postback type=answer はワーク問題への回答（一問一答の毎日配信の回答は
    // 旧webhookに届くため混ざらない）。
    case 'answer':
      await handleAnswerPostback(client, uid, replyToken, params);
      return;
    case 'wb_start':
      await handleWorkbookStartPostback(client, uid, replyToken, params);
      return;
    case 'wb_next':
      await handleWorkbookNextPostback(client, uid, replyToken, params);
      return;
    case 'wb_end':
      await handleWorkbookEndPostback(client, uid, replyToken);
      return;
    case 'wb_idk':
      await handleWorkbookIdkPostback(client, uid, replyToken, params);
      return;
    case 'wb_kind':
      await handleWorkbookKindPostback(client, uid, replyToken, params);
      return;
    case 'wb_iskip':
      await handleWorkbookInputSkipPostback(client, uid, replyToken, params);
      return;
    case 'wb_regrade':
      await handleWorkbookRegradePostback(client, uid, replyToken);
      return;
    case 'wb_stats':
      await handleWorkbookStatsPostback(client, uid, replyToken);
      return;
    case 'wb_recent':
      await handleWorkbookRecentPostback(client, uid, replyToken);
      return;
    case 'wb_weak':
      await handleWorkbookWeakPostback(client, uid, replyToken);
      return;
    case 'wb_help':
      await handleWorkbookHelpPostback(client, replyToken);
      return;
    // 「教材をひらく」。おすすめの1単元と教材トップを reply で返す（配信枠ゼロ）。
    // ※ リッチメニューの左上は **uri でマップを直接開く**（1タップで即開くため）。
    //   この postback は、AIやクイックリプライから「おすすめを出す」ときの入口として残す。
    case 'tzm_open': {
      const { handleTsudumonOpenPostback } =
        await import('../tsudumonOpenMaterial');
      await handleTsudumonOpenPostback(client, uid, replyToken);
      return;
    }
    // 「今日の1単元」の『終わったよ！』ボタン。その場でほめて復習へつなぐ。
    case 'tzm_done': {
      const { handleTsudumonDonePostback } =
        await import('../tsudumonDoneReport');
      await handleTsudumonDonePostback(
        client,
        uid,
        replyToken,
        params.get('unit') ?? undefined
      );
      return;
    }
    // 登録直後のオンボーディング（設定 → 範囲 → その場で学習開始）。
    case 'tzm_ob': {
      const { handleTsudumonOnboardingPostback } =
        await import('../tsudumonOnboarding');
      await handleTsudumonOnboardingPostback(client, uid, replyToken, params);
      return;
    }
    // 「おうちの人にわたすカード」。中学生本人は決済できないので、
    // ここが唯一の課金経路への入口になる（reply なので配信枠ゼロ）。
    case 'tzm_parent_card': {
      const { handleParentCardPostback } =
        await import('../tsudumonParentCardHandler');
      await handleParentCardPostback(client, uid, replyToken);
      return;
    }
    // 保護者画面での呼び名（既定候補を選んだとき）。保存してそのままカードを出す。
    // ⚠️ 子に呼び名を聞く導線は 2026-08-01 に撤去した（保護者ダッシュボードの
    //    「表示名を変える」に一本化）。この case は旧カードのボタンが押されたときの受け皿。
    case 'tzm_pname': {
      const { handleParentNamePostback } =
        await import('../tsudumonParentCardHandler');
      await handleParentNamePostback(client, uid, replyToken, params);
      return;
    }
    case 'ref_ask':
      await handleReferenceAskPostback(client, uid, replyToken, params);
      return;
    case 'ref_talk':
      await handleReferenceTalkPostback(client, uid, replyToken, params);
      return;
    case 'ref_check':
      await handleReferenceCheckPostback(client, uid, replyToken, params);
      return;
    case 'ref_level':
      await handleReferenceLevelPostback(client, uid, replyToken, params);
      return;
    default:
      // 一問一答固有の type（select_grade / scope_* / restart / weak_review /
      // settings_* / extra_question 等）はここに落ちる。意図的に無視する。
      console.log('[tsudumonWebhook] ignored postback type:', type);
      return;
  }
}

/**
 * message(text/image/audio) ディスパッチ。design.md のディスパッチ表どおり:
 * ライセンスコード → 継続希望 → ワーク{単元名} → ワーク回答中の自由入力 →
 * 参考書AI対話中の入力 → それ以外は aiChat.handleAiChatWith にフォールスルーする。
 * 一問一答固有の分岐（設定変更・復帰キーワード・「問題出して」等）は持ち込まない。
 */
/**
 * トーク画面に「考え中…」のローディングアニメーションを出す
 * （Messaging API の chat loading）。一問一答の `showThinkingIndicator` と同じ仕組みで、
 * **reply token も配信枠も消費しない**専用APIを使う。botの返信が届くと自動で消える。
 *
 * `loadingSeconds` は 5〜60 の 5 の倍数。1:1トークのみ対応。
 * 表示演出なので、失敗しても本処理は止めない（警告ログのみ）。
 */
async function showTsudumonThinking(
  client: messagingApi.MessagingApiClient,
  event: LineEvent,
  loadingSeconds: number
): Promise<void> {
  const userId = event.source?.userId;
  if (!userId || event.source?.type !== 'user') return;
  try {
    await client.showLoadingAnimation({ chatId: userId, loadingSeconds });
  } catch (error) {
    console.warn('[tsudumonWebhook] showLoadingAnimation failed:', error);
  }
}

/** export はテスト用（design.md「ユニットテスト」節）。振る舞いへの影響はない。 */
export async function dispatchTsudumonMessage(
  client: messagingApi.MessagingApiClient,
  event: LineEvent
): Promise<void> {
  const messageType = event.message?.type;

  if (messageType === 'image' || messageType === 'audio') {
    await handleMediaMessage(client, event, messageType, 'tsudumon');
    return;
  }

  // 旧Botはスタンプに AI チャットボットで応答する（handleStickerMessage）。
  // つづもんBotだけ無反応になるのを避けるため、同じ扱いにする。
  if (messageType === 'sticker') {
    await handleStickerMessage(client, event, 'tsudumon');
    return;
  }

  if (messageType !== 'text') {
    console.log('[tsudumonWebhook] ignored message type:', messageType);
    return;
  }

  const text = event.message?.text?.trim() ?? '';
  const replyToken = event.replyToken;
  const uid = buildTsudumonUid(event);

  // つづもんライセンスコード（TZM-XXXX-XXXX）→ 購入者登録。
  const tsudumonCode = extractTsudumonCode(text);
  if (tsudumonCode && uid && replyToken) {
    await handleTsudumonActivation(client, uid, replyToken, tsudumonCode);
    return;
  }

  // 学習の報告。
  //  ① 教材ページの「読み終わった／解き終わった」ボタン（LINEに下書きが入る）
  //  ② 生徒が自分で「終わったよ」と打った場合
  // どちらも reply で返すので **配信枠を消費しない**。
  if (uid && replyToken) {
    const { parseDoneReport, handleTsudumonDonePostback } =
      await import('../tsudumonDoneReport');
    const report = parseDoneReport(text);
    if (report) {
      await handleTsudumonDonePostback(
        client,
        uid,
        replyToken,
        report.unitNo,
        report.kind
      );
      return;
    }
    if (/^(おわ|終わ)っ(た|たよ)[！!。]?$/.test(text)) {
      await handleTsudumonDonePostback(client, uid, replyToken, undefined);
      return;
    }
  }

  // 「教材をひらく」と打たれたら、おすすめの1単元＋教材トップを返す
  //（AIに作文させるより速く・確実。リッチメニューは uri で直接マップを開く）。
  if ((text === '教材をひらく' || text === '教材を開く') && uid && replyToken) {
    const { handleTsudumonOpenPostback } =
      await import('../tsudumonOpenMaterial');
    await handleTsudumonOpenPostback(client, uid, replyToken);
    return;
  }

  // 「おうちの人にわたすカード」を明示的に求められたとき。
  if (
    /^(おうちの人に(見せ|みせ)た?い?|保護者に(見せ|みせ)る|親に(見せ|みせ)る)$/.test(
      text
    ) &&
    uid &&
    replyToken
  ) {
    const { handleParentCardPostback } =
      await import('../tsudumonParentCardHandler');
    await handleParentCardPostback(client, uid, replyToken);
    return;
  }

  // 保護者用リッチメニュー「お子さんの追加」。きょうだいの連携手順を返す。
  if (text === 'きょうだいを追加したい' && replyToken) {
    const { handleSiblingAddGuide } =
      await import('../tsudumonParentCardHandler');
    await handleSiblingAddGuide(client, replyToken);
    return;
  }

  // 保護者との連携を子から解除する。子が自分で終わらせられることが、
  // この機能を安心して使える前提なので、ワンフレーズで効くようにする。
  if (
    /^(保護者の?連携を?解除|連携を?解除|おうちの人との?連携を?解除)$/.test(
      text
    ) &&
    uid &&
    replyToken
  ) {
    const { handleParentUnlink } = await import('../tsudumonParentCardHandler');
    await handleParentUnlink(client, uid, replyToken);
    return;
  }

  // 期限切れ案内の「『継続希望』と送ってください」の受け口。
  if (text === '継続希望' && uid && replyToken) {
    await handleTsudumonContinueRequest(client, uid, replyToken);
    return;
  }

  // 印刷ワークのQRコード経由:「ワーク {単元名}」。
  if (WORKBOOK_PREFIX_RE.test(text) && uid && replyToken) {
    const handled = await handleWorkbookQuestion(client, uid, replyToken, text);
    if (handled) return;
  }

  if (!uid) {
    console.warn('[tsudumonWebhook] message event without resolvable uid');
    return;
  }

  let userData: Record<string, unknown> | undefined;
  try {
    const db = await getTsudumonDb();
    const snap = await db.doc(`users/${uid}`).get();
    userData = snap.data();
  } catch (error) {
    console.error('[tsudumonWebhook] user doc read failed:', error);
  }

  if (replyToken) {
    // ⚠️ 呼び名の自由入力を受ける分岐は**撤去した**（2026-08-02）。
    // 呼び名を聞く導線は 8/1 に無くしたのに受け取り側だけが残っており、
    // 古い「呼び名待ち」フラグが立ったままの子は、**次に送った文が何であれ
    // 呼び名として保存**されていた（実例: 「テストの範囲がわからない」が
    // 保護者ページの表示名になっていた）。聞かないものを待ち続けない。

    // ワーク入力演習（用語入力/記述）の解答待ちなら、このテキストを解答として採点する。
    const wbSession = userData?.workbookSession as
      | { awaiting?: { qid?: string } }
      | undefined;
    if (wbSession?.awaiting?.qid) {
      const consumed = await handleWorkbookTextAnswer(
        client,
        uid,
        replyToken,
        text,
        wbSession as never,
        (userData?.workbookStats as never) ?? {}
      );
      if (consumed) return;
    }

    // 参考書AI対話（質問／理解度チェック）中の入力を捕捉する。
    const refSession = userData?.refSession as
      | { awaiting?: boolean }
      | undefined;
    if (refSession?.awaiting) {
      const consumed = await handleReferenceTextInput(
        client,
        uid,
        replyToken,
        text,
        refSession as never
      );
      if (consumed) return;
    }
  }

  // 「親に聞かないと」「お金が…」で止まっている合図を拾い、カードへつなぐ。
  // AIに任せると誤爆と遅延が増えるのでパターン一致で判定し、**生涯1回だけ**出す
  // （催促にしない）。2回目以降は普通にAIが答える。
  if (replyToken) {
    const { detectParentAskIntent } = await import('../tsudumonParentCard');
    if (detectParentAskIntent(text)) {
      const { handleParentAskIntent } =
        await import('../tsudumonParentCardHandler');
      if (await handleParentAskIntent(client, uid, replyToken, userData)) {
        return;
      }
    }
  }

  // どの既存コマンドにもマッチしなかった自由文は AI チャットボットへフォールスルー。
  // 一問一答固有の分岐（設定変更 / 復帰キーワード / 「問題出して」等）はここに
  // 持ち込まない＝つづもんBotでは常に aiChat が受ける。
  if (replyToken) {
    try {
      await handleAiChatWith(
        client,
        uid,
        replyToken,
        text,
        userData as never,
        undefined,
        'tsudumon'
      );
    } catch (error) {
      console.error('[tsudumonWebhook] handleAiChatWith failed:', error);
    }
  }
}

/** export はテスト用（design.md「ユニットテスト」節）。振る舞いへの影響はない。 */
export async function dispatchTsudumonEvent(
  client: messagingApi.MessagingApiClient,
  event: LineEvent
): Promise<void> {
  try {
    switch (event.type) {
      case 'follow':
        await handleTsudumonFollow(client, event);
        return;
      case 'unfollow':
        await handleTsudumonUnfollow(event);
        return;
      case 'postback': {
        const uid = buildTsudumonUid(event);
        if (!uid) return;
        // ボタン系は数秒で返るので短め（返信が届いた時点で自動的に消える）
        await showTsudumonThinking(client, event, 10);
        const params = new URLSearchParams(event.postback?.data ?? '');
        await dispatchTsudumonPostback(client, uid, event.replyToken, params);
        return;
      }
      case 'message':
        // 自由文・画像・音声は AI が絡んで10数秒かかることがあるので長めに出す。
        // つづもんの有料AI（計画・分析）はさらに待つので、一問一答より長い 30 秒。
        await showTsudumonThinking(client, event, 30);
        await dispatchTsudumonMessage(client, event);
        return;
      default:
        console.log('[tsudumonWebhook] ignored event type:', event.type);
        return;
    }
  } catch (error) {
    console.error(
      `[tsudumonWebhook] dispatchTsudumonEvent failed (type=${event.type}):`,
      error
    );
  }
}

export const tsudumonWebhook = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    if (req.method === 'GET') {
      res.json({ message: 'tsudumon LINE webhook endpoint is working.' });
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const channelSecret =
      process.env.LINE_TSUDUMON_MESSAGING_CHANNEL_SECRET || '';
    if (!channelSecret) {
      console.error(
        '[tsudumonWebhook] LINE_TSUDUMON_MESSAGING_CHANNEL_SECRET is not set'
      );
      res.status(500).json({ error: 'Server misconfigured' });
      return;
    }

    const signature = req.get('x-line-signature');
    if (!signature) {
      console.warn('[tsudumonWebhook] missing x-line-signature header');
      res.status(401).json({ error: 'Missing signature' });
      return;
    }

    const rawBody = req.rawBody;
    if (!rawBody || rawBody.length === 0) {
      console.error('[tsudumonWebhook] empty rawBody');
      res.status(400).json({ error: 'Empty body' });
      return;
    }

    const bodyText = rawBody.toString('utf8');

    const signatureValid = await verifyTsudumonSignature(
      bodyText,
      channelSecret,
      signature
    );
    if (!signatureValid) {
      console.warn('[tsudumonWebhook] invalid signature');
      res.status(401).json({ error: 'Invalid signature' });
      return;
    }

    let body: TsudumonWebhookBody;
    try {
      body = JSON.parse(bodyText) as TsudumonWebhookBody;
    } catch (error) {
      console.error('[tsudumonWebhook] failed to parse body JSON:', error);
      res.status(400).json({ error: 'Invalid JSON' });
      return;
    }

    const events = body.events ?? [];
    if (events.length === 0) {
      res.json({ ok: true });
      return;
    }

    // env未設定時は明示的に例外を投げる getTsudumonLineClient() の設計どおり、
    // ここで失敗したら旧トークンへフォールバックせず、ログを残してそのまま200を返す
    // （LINEの再送ループを避ける。エラーハンドリング戦略は design.md 参照）。
    try {
      const client = await getTsudumonLineClient();
      await Promise.allSettled(
        events.map((event) => dispatchTsudumonEvent(client, event))
      );
    } catch (error) {
      console.error('[tsudumonWebhook] getTsudumonLineClient failed:', error);
    }
    res.json({ ok: true });
  });
