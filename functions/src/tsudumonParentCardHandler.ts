/**
 * 「おうちの人にわたすカード」の LINE 側ハンドラ（Firestore・送信あり）。
 * 文面・判定の純粋ロジックは `tsudumonParentCard.ts`。
 *
 * すべて reply で返す＝**配信枠を消費しない**。
 */
import type { messagingApi } from '@line/bot-sdk';

import {
  buildParentCardErrorMessage,
  buildParentCardGuide,
  buildParentForwardMessage,
  sanitizeParentName,
} from './tsudumonParentCard';
import { createTsudumonInvite } from './tsudumonParent';

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return getFirestore();
}

async function reply(
  client: messagingApi.MessagingApiClient,
  replyToken: string,
  messages: messagingApi.Message[]
): Promise<void> {
  try {
    await client.replyMessage({ replyToken, messages } as never);
  } catch (error) {
    console.error('[tsudumonParentCard] reply failed:', error);
  }
}

/**
 * カードを発行して返す。呼び名が未設定なら、先に一度だけ聞く。
 *
 * @param skipNameAsk 呼び名を聞き終えた直後の再入（無限に聞かない）
 */
export async function handleParentCardPostback(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  skipNameAsk = false
): Promise<void> {
  if (!replyToken) return;

  const invite = await createTsudumonInvite(uid).catch((error) => {
    console.error('[tsudumonParentCard] createTsudumonInvite failed:', error);
    return null;
  });
  if (!invite) {
    await reply(client, replyToken, [buildParentCardErrorMessage()]);
    return;
  }

  // ⚠️ 呼び名は**先に聞かない**（2026-07-31 変更）。
  // 「おうちの人に見せたい」と言った子はリンクが今すぐ欲しい。そこへ質問を挟むと、
  // いちばん気持ちが乗っている瞬間で止めてしまう（唯一の課金経路なので致命的）。
  // 既定の「中2のこども」で十分伝わるし、変えたい子はカードの
  // quickReply「呼び名を変える」から、保護者はダッシュボードの
  // 「表示名を変える」からいつでも直せる。むしろ**気にするのは保護者のほう**。
  // 引数 skipNameAsk は呼び名を保存した直後の再入で使う（互換のため残す）。
  void skipNameAsk;

  // 2通で返す。1通目＝子への指示、2通目＝**そのまま転送してもらうもの**。
  // 指示を2通目に混ぜると、転送されたときに保護者に意味不明な文が届く。
  await reply(client, replyToken, [
    buildParentCardGuide(invite.expiresLabel),
    buildParentForwardMessage(invite.url),
  ]);
}

/** 呼び名を保存する（quick reply の既定候補 / 自由入力の両方から呼ぶ）。 */
async function saveParentName(uid: string, name: string): Promise<void> {
  const db = await getDb();
  await db
    .doc(`users/${uid}`)
    .set(
      { tsudumonParentName: name, tsudumonParentNameAwaiting: false },
      { mergeFields: ['tsudumonParentName', 'tsudumonParentNameAwaiting'] }
    );
}

/**
 * 呼び名の既定候補が選ばれたとき（postback `type=tzm_pname&v=…`）。
 * 保存してから、そのままカードを出す（もう1タップさせない）。
 */
export async function handleParentNamePostback(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const name = sanitizeParentName(params.get('v') ?? '');
  if (name) {
    try {
      await saveParentName(uid, name);
    } catch (error) {
      console.error('[tsudumonParentCard] name save failed:', error);
    }
  }
  await handleParentCardPostback(client, uid, replyToken, true);
}

/**
 * 呼び名の自由入力を受ける。呼び名待ちでなければ false（他の処理に流す）。
 *
 * @returns このテキストを消費したか
 */
export async function handleParentNameInput(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  text: string,
  userData: Record<string, unknown> | undefined
): Promise<boolean> {
  if (!userData?.tsudumonParentNameAwaiting) return false;
  if (!replyToken) return false;

  const name = sanitizeParentName(text);
  if (!name) {
    // 長すぎ・URL・記号だけ。責めずにもう一度だけ促す（待ち状態は維持）。
    await reply(client, replyToken, [
      {
        type: 'text',
        text: `ごめんなさい、その名前は使えませんでした。${'ひらがな・カタカナ・漢字で12文字までにしてね。'}`,
      },
    ]);
    return true;
  }

  try {
    await saveParentName(uid, name);
  } catch (error) {
    console.error('[tsudumonParentCard] name save failed:', error);
  }
  await handleParentCardPostback(client, uid, replyToken, true);
  return true;
}

/**
 * 保護者用リッチメニュー「お子さんの追加」。
 *
 * きょうだいの連携は**2人目の子がカードを発行する**ところからしか始まらない
 * （保護者から子を検索して繋ぐ口は作らない）。その手順を短く返す。
 */
export async function handleSiblingAddGuide(
  client: messagingApi.MessagingApiClient,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  await reply(client, replyToken, [
    {
      type: 'text',
      text: [
        'きょうだいでお使いの場合は、お子さまごとにアカウントをつなぎます。',
        '',
        '① 2人目のお子さまのLINEで、つづもんに「おうちの人に見せたい」と送ってもらう',
        // ⚠️ ここでQRを前提にしない（2026-08-02）。子の画面に出るのは
        // **転送用のメッセージ**で、QRページは出ない（2026-08-01 に中間ページを廃止した）。
        // 「QRを読み取って」と案内すると、保護者が出てこないものを探すことになる。
        '② そのメッセージを保護者の方へ転送してもらう（長おし →「転送」）',
        '③ 届いたリンクを開き、「公式LINEでお子さまの学習の記録を見る」を押す',
        '',
        'すでにおつなぎいただいているので、2人目以降のご契約は月額980円（税込）になります。',
        'https://tsudumon.jp/parents/dashboard/',
      ].join('\n'),
    },
  ]);
}

/**
 * 子から保護者の連携を解除する。
 *
 * 「勝手に見られている」状態を子が自分で終わらせられることが、この機能を安心して
 * 使える前提。**課金は止まらない**（払っているのは保護者なので、解約は保護者の
 * Billing Portal から）ことを、ごまかさずに伝える。
 */
export async function handleParentUnlink(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  let parentUids: string[] = [];
  try {
    const db = await getDb();
    const childRef = db.doc(`users/${uid}`);
    parentUids = await db.runTransaction(async (tx) => {
      const snap = await tx.get(childRef);
      const raw = snap.data()?.tsudumonParents;
      const parents: Array<{ uid?: unknown }> = Array.isArray(raw) ? raw : [];
      const uids = parents
        .map((p) => (p && typeof p.uid === 'string' ? p.uid : ''))
        .filter(Boolean);
      if (uids.length === 0) return [];
      tx.set(
        childRef,
        { tsudumonParents: [] },
        { mergeFields: ['tsudumonParents'] }
      );
      return uids;
    });

    // 保護者側からも子を外す（片方だけ残ると保護者画面に幽霊が残る）。
    for (const parentUid of parentUids) {
      const parentRef = db.doc(`users/${parentUid}`);
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(parentRef);
        const raw = snap.data()?.tsudumonChildren;
        const children: Array<{ uid?: unknown }> = Array.isArray(raw)
          ? raw
          : [];
        const next = children.filter(
          (c) => !(c && typeof c.uid === 'string' && c.uid === uid)
        );
        tx.set(
          parentRef,
          { tsudumonChildren: next },
          { mergeFields: ['tsudumonChildren'] }
        );
      });
    }
  } catch (error) {
    console.error('[tsudumonParentCard] unlink failed:', error);
    await reply(client, replyToken, [
      {
        type: 'text',
        text: 'いま解除できませんでした。少し時間をおいてもう一度ためしてください。',
      },
    ]);
    return;
  }

  if (parentUids.length === 0) {
    await reply(client, replyToken, [
      {
        type: 'text',
        text: 'いま、つながっているおうちの人はいません。学習の記録は誰にも見られていません。',
      },
    ]);
    return;
  }

  for (const parentUid of parentUids) {
    await notifyParentUnlinked(parentUid);
    try {
      const { logServerFunnelEvent } = await import('./funnelEvent');
      await logServerFunnelEvent('parent_unlinked', parentUid, { by: 'child' });
    } catch (error) {
      console.error('[tsudumonParentCard] unlink funnel log failed:', error);
    }
  }

  await reply(client, replyToken, [
    {
      type: 'text',
      text: [
        'おうちの人との連携を解除しました。学習の記録はもう見えません。',
        '',
        'ただし、**お支払いは止まりません**。やめたいときは、おうちの人にお支払いページから手続きしてもらってください。',
        '',
        'またつなぎたくなったら、「おうちの人に見せたい」と送ってください。',
      ].join('\n'),
    },
  ]);
}

/** 解除されたことを保護者にも伝える（黙って消えると不信につながる）。 */
async function notifyParentUnlinked(parentUid: string): Promise<void> {
  const lineUserId = parentUid.startsWith('line:')
    ? parentUid.slice('line:'.length)
    : '';
  if (!lineUserId) return;
  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    await client.pushMessage({
      to: lineUserId,
      messages: [
        {
          type: 'text',
          text: [
            'お子さまのご希望により、学習の記録の共有が解除されました。',
            '',
            'ダッシュボードには表示されなくなりますが、ご契約とお支払いはそのまま続いています。',
            '解約をご希望の場合は https://tsudumon.jp/parents/dashboard/ からお手続きください。',
          ].join('\n'),
        },
      ],
    } as never);
    const { recordPushDelivery } = await import('./deliveryStats');
    await recordPushDelivery('tsudumonParent');
  } catch (error) {
    console.error('[tsudumonParentCard] unlink notify failed:', error);
  }
}

/**
 * 「親に聞かないと」系の発言に、カードへの導線を1回だけ添える。
 *
 * 催促にしないため、`users/{uid}.tsudumonParentHintedAt` で**生涯1回**に制限する。
 * 判定は正規表現のみ（AIを呼ばない＝コストゼロ・即答）。
 *
 * @returns 導線を出した（＝このテキストを消費した）か
 */
export async function handleParentAskIntent(
  client: messagingApi.MessagingApiClient,
  uid: string,
  replyToken: string | undefined,
  userData: Record<string, unknown> | undefined
): Promise<boolean> {
  if (!replyToken) return false;
  if (userData?.tsudumonParentHintedAt) return false;

  try {
    const db = await getDb();
    await db
      .doc(`users/${uid}`)
      .set(
        { tsudumonParentHintedAt: new Date() },
        { mergeFields: ['tsudumonParentHintedAt'] }
      );
  } catch (error) {
    console.error('[tsudumonParentCard] hint flag write failed:', error);
  }

  const { parentCardQuickReply } = await import('./tsudumonParentCard');
  await reply(client, replyToken, [
    {
      type: 'text',
      text: [
        'おうちの人に相談するときは、これまでの取り組みをまとめたページを見てもらうのがいちばん早いです。',
        '',
        '「勉強したいから」と言葉で伝えるより、やった時間と問題数が並んでいるほうが伝わります。',
        // ⚠️ QRを前提にしない（2026-08-02）。下の quickReply から出るのは
        // **転送用のメッセージ**で、QRページは出ない（2026-08-01 に中間ページを廃止）。
        '言いにくければ、下のボタンで出るメッセージを転送するだけでも大丈夫です。',
      ].join('\n'),
      quickReply: parentCardQuickReply(),
    },
  ]);
  return true;
}
