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
 * だから1通目の冒頭で「見える／見えない」を伝える。
 * プライバシーの説明は付帯情報ではなく、**渡す気になるための条件**。
 *
 * 渡し方は LINE の「転送」だけにする（2026-08-01）。QRページ・共有ページのような
 * 中間地点を置くと、そのぶん確実に脱落する。
 *
 * 送信はすべて reply（配信枠ゼロ）。
 */
import type { messagingApi } from '@line/bot-sdk';

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

/**
 * 子のトークに出す案内（1通目）。
 *
 * ⚠️ **ページを挟まない。** QRページ・共有ページのような中間地点を置くと、
 * そのぶん確実に脱落する。渡す手段は LINE がもともと持っている「転送」で足りる。
 *
 * ⚠️ **プライバシーの説明はここに書かない**（ユーザー指示 2026-08-01）。
 * 以前は「見えるのは、やった時間と進んだ単元だけ／トークやまちがえた問題は
 * 見えないよ」を入れていたが、**まだ疑っていない子に不安の存在を教える**文面に
 * なっていた。加えて、この1通目は「長おし→転送」という一手の指示であり、
 * 手を動かす直前に別の話題を挟むほど実行率は落ちる。
 * 監視されないことの説明が要るのは**保護者ダッシュボード側**（実際に見える
 * 範囲が決まる場所）で、子への1通目ではない。
 */
export function buildParentCardGuide(
  expiresLabel: string
): messagingApi.TextMessage {
  return {
    type: 'text',
    text: [
      '下のメッセージを長おししてね。',
      '「転送」→ おうちの人をえらぶだけ。',
      '',
      `（リンクは${expiresLabel}まで使えるよ）`,
    ].join('\n'),
  };
}

/**
 * そのまま保護者へ転送してもらうメッセージ（2通目）。
 *
 * ⚠️ **この1通だけで完結させる。** 子はこれを転送するので、
 * 子への指示（長おし、など）を混ぜてはいけない。保護者に意味不明な文が届く。
 *
 * ⚠️ URL は必ず **?t= 付きの保護者ページ**。裸の tsudumon.jp を送ると、
 * 保護者が登録しても**保護者自身のアカウントに課金され、子の教材が開かない**。
 * このトークンが「支払いは子のアカウントに付ける」印になっている。
 * リンク先は保護者向けの案内ページそのもの（料金・解約・AIの扱い・登録）で、
 * OGP も入っているので LINE 上ではカードとしてプレビューされる。
 *
 * Flex ではなく**ただのテキスト**にしてある。転送されたとき、
 * 作り込んだカードより「子どもが送ってきたもの」に見えるほうが読まれる。
 */
export function buildParentForwardMessage(
  parentUrl: string
): messagingApi.TextMessage {
  return {
    type: 'text',
    text: [
      '中学歴史の教材「つづもん」を使っています。',
      'つづけたいので、見てもらえますか。',
      '',
      parentUrl,
    ].join('\n'),
  };
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
