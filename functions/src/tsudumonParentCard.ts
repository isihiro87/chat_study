/**
 * 「おうちの人にわたすカード」（子側のLINE）。
 * 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §7-1
 *
 * ## この機能の勝負どころ
 *
 * 中学生がカードを出さない理由は2つある。
 *   1. **お金の話を切り出せない** → 台本と実績（自分から勉強したがっている証拠）で埋める
 *   2. **監視されそう** → 「トークは見えない」を**先に**見せることで埋める
 *
 * だから Flex の最初の行は「見える／見えない」にする。CTAより前に置く。
 * プライバシーの説明は付帯情報ではなく、**カードを出す気になるための条件**。
 *
 * 送信はすべて reply（配信枠ゼロ）。
 */
import type { messagingApi } from '@line/bot-sdk';

const BRAND = '#b45309';
const INK = '#33291f';
const MUTED = '#8a7a63';

/** 呼び名の最大長。長い文章を保護者画面に出させない。 */
export const PARENT_NAME_MAX = 12;

/**
 * 呼び名として受け付ける文字列に整える。受け付けられなければ null。
 *
 * 本名を保存しない方針なので、ここで長い文章・URL・記号列を弾く。
 * （本人が自分の下の名前を入れることは止められないが、それは本人の選択）
 */
export function sanitizeParentName(raw: string): string | null {
  const text = (raw ?? '').trim().replace(/[\r\n\t]+/g, ' ');
  if (!text) return null;
  if (/https?:\/\//i.test(text)) return null;
  if (text.length > PARENT_NAME_MAX) return null;
  // 記号だけ・空白だけは弾く
  if (!/[\p{L}\p{N}]/u.test(text)) return null;
  return text;
}

/**
 * 「親に聞かないと」「お金が…」という発言を拾う。
 *
 * AIのツール呼び出しにすると誤爆と遅延が増えるので、**パターン一致**にする。
 * 誤爆を避けるため「保護者を指す語」と「お金・許可を指す語」の**両方**を要求する
 * （「お母さんが好きな歴史上の人物は？」のような質問で出さない）。
 */
export function detectParentAskIntent(text: string): boolean {
  const t = (text ?? '').normalize('NFKC');
  if (!t) return false;
  const guardian =
    /(親|おや|お母さん|お父さん|ママ|パパ|保護者|おうちの人|家の人)/;
  // 「許可を得る」か「お金」のどちらかの語。保護者語と**両方**そろって初めて拾う。
  const permission =
    /(聞い|聞く|聞か|聞け|きい|きく|きか|相談|そうだん|許可|お金|おかね|払|はらっ|課金|高い|たかい|買って|かって|お願い|おねがい|言えない|いえない|言いにくい|いいにくい)/;
  if (guardian.test(t) && permission.test(t)) return true;
  // 保護者語を含まない定型の言い回し
  return /(お金がない|課金できない|自分では払えない|払えない)/.test(t);
}

/** 呼び名を聞くときの既定候補（学年ベース）。 */
export function defaultParentNameChoice(_grade?: unknown): string {
  // ⚠️ **保護者画面の既定表示（`fallbackChildName`）と必ず同じ文字列にする。**
  // ここがずれると、子には「こども と出ています」と伝えながら
  // 保護者には「お子さん」と出る、という嘘になる。
  // 学年を付けないのは fallbackChildName と同じ理由。
  return 'お子さん';
}

/**
 * 呼び名をたずねるメッセージ（初回だけ）。
 * 本名を保存しない方針なので、学年での表示をそのまま選べるようにする。
 */
export function buildParentNameAskMessage(
  grade: unknown
): messagingApi.TextMessage {
  const preset = defaultParentNameChoice(grade);
  return {
    type: 'text',
    text: [
      `おうちの人の画面では、いま「${preset}」と出ています。`,
      '',
      '変えたい呼び名があれば、そのまま送ってね（あだ名でもOK）。',
      'このままでよければ、何もしなくて大丈夫です。',
      '',
      '※ 本名は保存しないので、無理に本名にしなくて大丈夫です。',
    ].join('\n'),
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'postback',
            label: `「${preset}」のままでいい`,
            data: `type=tzm_pname&v=${encodeURIComponent(preset)}`,
            displayText: `「${preset}」のままでいい`,
          },
        },
      ],
    },
  };
}

export interface ParentCardInput {
  childName: string;
  handoffUrl: string;
  parentUrl: string;
  expiresLabel: string;
  /**
   * LINE の送り先一覧（シェアターゲットピッカー）を開く LIFF URL。
   * `LIFF_TSUDUMON_SHARE_ID` が未設定なら空で、その場合は `handoffUrl`（QR）に落ちる。
   */
  shareUrl?: string;
}

/**
 * カード本体（Flex）。
 *
 * 並びに意味がある:
 *   ① 見える／見えない（安心）→ ② 何が起きるか → ③ ボタン → ④ URL（転送用）
 * ①を最後に置くと、読む前にカードを閉じられる。
 */
export function buildParentCardFlex(
  input: ParentCardInput
): messagingApi.FlexMessage {
  const text = (
    t: string,
    opts: Record<string, unknown> = {}
  ): messagingApi.FlexText =>
    ({ type: 'text', text: t, wrap: true, ...opts }) as messagingApi.FlexText;

  return {
    type: 'flex',
    altText: 'おうちの人にわたすカード',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          text('おうちの人にわたす', {
            weight: 'bold',
            size: 'lg',
            color: BRAND,
          }),
          // ① 安心を先に置く
          {
            type: 'box',
            layout: 'vertical',
            spacing: 'xs',
            margin: 'md',
            backgroundColor: '#f0fdf4',
            cornerRadius: '8px',
            paddingAll: '10px',
            contents: [
              text(
                '🔒 おうちの人に見えるのは、勉強した時間や進んだ単元だけ。',
                {
                  size: 'sm',
                  color: '#15803d',
                }
              ),
              text(
                'トークの内容・質問したこと・まちがえた問題は、見えません。',
                {
                  size: 'sm',
                  color: '#15803d',
                }
              ),
            ],
          },
          // ② 何が起きるか
          // ⚠️ QRには必ず触れる。話しかけて渡すのが苦手な子の逃げ道で、
          //    ここが無いと「言い出せないまま終わる」子を取りこぼす。
          text(
            input.shareUrl
              ? 'つづもんの案内ページを、おうちの人に送れます。' +
                  '下のボタンを押すと送り先が出るので、えらぶだけ。' +
                  '直接わたしたいときは、QRコードを見せることもできます。'
              : 'つづもんの案内ページを、おうちの人に見てもらえます。' +
                  '言いにくいときは、下のボタンからQRコードを見せるだけでも大丈夫。',
            { size: 'sm', color: INK, margin: 'md' }
          ),
          text(`（このご案内は ${input.expiresLabel} まで使えます）`, {
            size: 'xxs',
            color: MUTED,
            margin: 'sm',
          }),
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: BRAND,
            height: 'sm',
            action: {
              type: 'uri',
              // shareUrl が使えるなら、押した瞬間に LINE の送り先一覧が開く
              // （送信は子のアカウントから＝親には「自分の子から」届く）。
              // LIFF 未設定なら従来の QR ページへ。どちらでも行き止まりにしない。
              label: input.shareUrl ? 'おうちの人に送る' : '見せる画面をひらく',
              uri: input.shareUrl || input.handoffUrl,
            },
          },
          text(
            input.shareUrl
              ? 'QRで見せたいときは、送り先の画面から切りかえられます'
              : 'LINEで送るときは、このメッセージを長おしして「転送」',
            { size: 'xxs', color: MUTED, align: 'center' }
          ),
          text(input.parentUrl, { size: 'xxs', color: MUTED, align: 'center' }),
        ],
      },
    },
    // ⚠️ 呼び名の変更はここに出さない（2026-08-01）。
    // 子に呼び名を決めさせる必要はない。既定の「お子さん」で困らないし、
    // 見分けたいのは保護者のほうなので、保護者ダッシュボードの
    // 「表示名を変える」に一本化する。カードは渡すことだけに集中させる。
  } as messagingApi.FlexMessage;
}

/** カードを出せなかったときの案内（env未設定・障害時）。 */
export function buildParentCardErrorMessage(): messagingApi.TextMessage {
  return {
    type: 'text',
    text: 'ごめんなさい、いまカードを作れませんでした。少し時間をおいてもう一度ためしてみてください。',
  };
}

/**
 * 「親に聞かないと」と言われたときに添えるクイックリプライ。
 * **1回だけ**出す（催促にしない）。
 */
export function parentCardQuickReply(): messagingApi.QuickReply {
  return {
    items: [
      {
        type: 'action',
        action: {
          type: 'postback',
          label: 'おうちの人に見せる',
          data: 'type=tzm_parent_card',
          displayText: 'おうちの人に見せたい',
        },
      },
    ],
  };
}
