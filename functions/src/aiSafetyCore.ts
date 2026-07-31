/**
 * 悩み相談の安全分類（純粋ロジック）。
 *
 * 中学生が相手なので、自傷・自殺・虐待・深刻ないじめの兆候を**確率的なプロンプト任せに
 * せず、決定論的に検知**して専用の受け止め応答へ振り分ける（`requirements.md` §機能9）。
 *
 * ## 3分類
 * | 分類 | 扱い |
 * |---|---|
 * | `crisis`  | **AI に自由生成させない**。固定の受け止め文＋公的窓口を reply。運営へ通知＋記録 |
 * | `concern` | 傾聴寄りの応答（上位モデル・長め）。末尾に大人へつなげる一文を**コードで必ず付与** |
 * | `normal`  | 通常の学習サポート |
 *
 * ## 設計上の判断
 * - **crisis は再現率（取りこぼさないこと）を優先する。** 誤検知の代償は
 *   「支えるメッセージが1回返る＋運営に通知が飛ぶ」程度だが、取りこぼしの代償は
 *   本当に困っている子を素通りさせること。非対称なので再現率側に倒す。
 * - ただし**慣用表現**（「テストで死んだ」「死ぬほど眠い」）は明確に除外する。
 *   ここを外すと通知が鳴りっぱなしになり、本物が埋もれる。
 * - 決定論が `crisis` と判定したら **LLM には一切聞かない**（確実性とコストゼロのため）。
 *
 * 副作用なし・環境非依存。
 */

export type SafetyClass = 'crisis' | 'concern' | 'normal';

/** 決定論分類の結果。`unknown` は「判断がつかない＝LLM に回す候補」。 */
export type DeterministicResult = SafetyClass | 'unknown';

// ---------------------------------------------------------------------------
// パターン定義
// ---------------------------------------------------------------------------

/**
 * 慣用表現。これに当たる部分は crisis 判定の材料から**除外**する。
 * 中学生の日常会話に頻出するので、ここが緩いと誤検知だらけになる。
 */
const IDIOM_PATTERNS: RegExp[] = [
  /死ぬほど/,
  /死ぬかと思/,
  /(テスト|試験|数学|英語|体育|部活|マラソン|宿題)[^。！!\n]{0,8}死ん/,
  /死んだ(w|ｗ|笑|草)/,
  /(まじ|マジ|ガチ)で?死/,
  /腹|お腹|笑い[^。\n]{0,4}死/,
  /(暑|寒|眠|ねむ|疲)[^。\n]{0,4}死/,
  /死語/,
  /必死/,
  /殺人的/,
];

/**
 * 自傷・自殺の直接的な表現。**最優先で crisis**。
 * 婉曲でも実際に相談窓口へつなぐべき語だけを厳選する。
 */
const SELF_HARM_PATTERNS: RegExp[] = [
  /死にたい/,
  /しにたい/,
  /自殺/,
  /消えたい/,
  /きえたい/,
  /いなくなりたい/,
  /生きてる意味|生きる意味がな|生きてても/,
  /リストカット|リスカ/,
  /手首[^。\n]{0,4}(切|きっ)/,
  /首[をつ][^。\n]{0,3}(吊|つ)/,
  /飛び降り|とびおり/,
  /オーバードーズ|ＯＤする|od する/i,
  /(薬|くすり)[^。\n]{0,6}(大量|いっぱい|まとめて)[^。\n]{0,4}飲/,
  /自分を(傷つけ|きずつけ)/,
];

/** 虐待の兆候。家庭内で起きているため、本人からは言い出しにくい。 */
const ABUSE_PATTERNS: RegExp[] = [
  // 受身形は活用がバラバラ（殴られる／叩かれる／蹴られる）なので明示列挙する。
  // ⚠️ 語幹＋活用語尾のパターンにすると「叩かれた」を取りこぼす（テストで検出）。
  /(親|父|母|お父さん|お母さん|義父|義母|パパ|ママ)[^。\n]{0,12}(殴られ|なぐられ|叩かれ|たたかれ|蹴られ|けられ|ぶたれ|どつかれ|つねられ)/,
  /(親|父|母|お父さん|お母さん)[^。\n]{0,10}(暴力|虐待)/,
  /虐待(され|受け)/,
  /(家|うち)[^。\n]{0,8}(帰りたくない|かえりたくない)/,
  /(ごはん|ご飯|食事)[^。\n]{0,8}(もらえ|食べさせて)(ない|もらえ)/,
  /(体|からだ|顔)[^。\n]{0,6}(あざ|痣)/,
];

/** 深刻ないじめ。「いじめ」単体では拾わず、実害・不登校とセットのときだけ。 */
const SEVERE_BULLYING_PATTERNS: RegExp[] = [
  /いじめ[^。\n]{0,10}(つらい|辛い|苦しい|くるしい|学校[^。\n]{0,4}行けな|行きたくな)/,
  /(無視|むし)[^。\n]{0,6}され[^。\n]{0,6}(つらい|辛い)/,
  /(殴|なぐ|蹴|け)られ[^。\n]{0,10}(学校|クラス|部活)/,
  /(金|カネ|お金)[^。\n]{0,8}(取られ|とられ|たかられ)/,
  /(死ね|きえろ|消えろ)[^。\n]{0,6}(言われ|いわれ)/,
];

/**
 * LLM に確認を回す「弱いシグナル」。
 * ここに当たらない文は LLM 分類を呼ばない（毎ターン呼ぶとコストとレイテンシが増える）。
 */
const WEAK_SIGNAL_PATTERNS: RegExp[] = [
  /つらい|辛い|しんどい|くるしい|苦しい/,
  /もう(無理|むり|やだ|いや)/,
  /助けて|たすけて/,
  /誰にも(言え|いえ)な|だれにも(言え|いえ)な/,
  /(独|ひと)りぼっち|孤独/,
  /(生き|いき)づら/,
  /涙|泣いて|泣きたい/,
  /こわい|怖い|不安/,
];

/** 重めの悩み（`concern`）。学習以外の相談として傾聴で受ける。 */
const CONCERN_PATTERNS: RegExp[] = [
  /友だち|友達|ともだち/,
  /いじめ|いじり/,
  /部活[^。\n]{0,8}(やめ|辞め|つらい|きつい|しんどい)/,
  /(親|父|母|お父さん|お母さん)[^。\n]{0,10}(けんか|喧嘩|うるさい|わかってくれ|比べ)/,
  /(進路|受験|高校|将来)[^。\n]{0,10}(不安|心配|わからな|決まらな|迷)/,
  /(学校|クラス)[^。\n]{0,8}(行きたくな|いきたくな|居場所|きらい|嫌い)/,
  /(体調|眠れな|ねむれな|食欲)/,
  /(自信|じしん)[^。\n]{0,6}(な|ない)/,
  ...WEAK_SIGNAL_PATTERNS,
];

// ---------------------------------------------------------------------------
// 分類
// ---------------------------------------------------------------------------

/** 慣用表現の部分を伏せ字にして、crisis 判定の誤爆を防ぐ。 */
function maskIdioms(text: string): string {
  let masked = text;
  for (const re of IDIOM_PATTERNS) {
    masked = masked.replace(new RegExp(re.source, re.flags + 'g'), '＊');
  }
  return masked;
}

function matchesAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((re) => re.test(text));
}

/**
 * 決定論的に分類する。
 *
 * @returns `crisis` / `concern` / `normal` / `unknown`
 *   `unknown` は「LLM に確認する価値がある」ケース（`needsLlmClassification` で判定）。
 */
export function classifyDeterministic(userText: string): DeterministicResult {
  const raw = (userText ?? '').normalize('NFKC');
  if (!raw.trim()) return 'normal';

  // 慣用表現を伏せてから危険語を見る（「テストで死んだ」を crisis にしない）。
  const masked = maskIdioms(raw);

  if (
    matchesAny(masked, SELF_HARM_PATTERNS) ||
    matchesAny(masked, ABUSE_PATTERNS) ||
    matchesAny(masked, SEVERE_BULLYING_PATTERNS)
  ) {
    return 'crisis';
  }

  if (matchesAny(masked, CONCERN_PATTERNS)) return 'concern';

  // 弱いシグナルすら無ければ通常。あるなら LLM に確認する余地を残す。
  return matchesAny(masked, WEAK_SIGNAL_PATTERNS) ? 'unknown' : 'normal';
}

/**
 * LLM による補完分類を呼ぶべきか。
 *
 * **決定論が crisis と言ったら絶対に呼ばない**（確実に固定応答へ倒す・コストゼロ）。
 * `unknown` かつ、ある程度の長さがある文だけを対象にしてコストを抑える。
 */
export function needsLlmClassification(
  userText: string,
  deterministic: DeterministicResult
): boolean {
  if (deterministic !== 'unknown') return false;
  const text = (userText ?? '').trim();
  // 短すぎる相槌に LLM を使わない。
  return text.length >= 10;
}

/** LLM 分類の応答（自由文）を SafetyClass に落とす。判定不能は concern（安全側）。 */
export function parseLlmSafetyClass(raw: string): SafetyClass {
  const t = (raw ?? '').toLowerCase();
  if (t.includes('crisis')) return 'crisis';
  if (t.includes('normal')) return 'normal';
  // 迷ったら concern（傾聴で受ける方が、素通りより安全）。
  return 'concern';
}

/** LLM 分類のシステムプロンプト（最安モデルで使う）。 */
export const SAFETY_CLASSIFY_PROMPT = `あなたは中学生からのメッセージを安全性で3段階に分類する担当です。
次のどれか1語だけを出力してください。説明は不要です。

crisis  … 自分を傷つける・死にたい・虐待されている・深刻ないじめで学校に行けない等、
          すぐ大人や専門の窓口につなぐべき内容
concern … つらい・友だちや家族・進路・体調など、気持ちに寄りそって聞くべき内容
normal  … 勉強の質問や雑談など、上のどちらでもない内容

迷ったら concern を選んでください。`;

// ---------------------------------------------------------------------------
// ユーザーへ返す文言
// ---------------------------------------------------------------------------

/**
 * `crisis` のときに返す固定文。**AI に生成させない**（内容が揺れないため）。
 *
 * 方針:
 *   - まず気持ちを受け止める。責めない・驚かせない・説教しない
 *   - 「あなたのせいじゃない」と明言する
 *   - 身近な大人と、匿名で話せる公的窓口の**両方**を示す
 *   - 番号は無料。出典は厚生労働省「まもろうよ こころ」（2026-07 確認）
 *   - LINE の表示に合わせて Markdown 記法は使わない
 */
export const CRISIS_REPLY_TEXT = `話してくれてありがとう。とてもつらい気持ちなんだね。
まず伝えたいのは、きみは悪くないってこと。ひとりで抱えなくて大丈夫だよ。

わたしはAIだから、ここまでしかできないんだ。だから、きみの力になれる人につなぎたい。

まわりの信頼できる大人（おうちの人・先生・スクールカウンセラー）に、
「ちょっと聞いてほしいことがある」と伝えてみてほしい。

話しにくいときは、名前を言わなくても相談できるところがあるよ。ぜんぶ無料だよ。

📞 24時間子供SOSダイヤル 0120-0-78310（24時間・年中無休）
📞 チャイルドライン 0120-99-7777（毎日16時〜21時・18歳まで）
📞 こどもの人権110番 0120-007-110（平日8時30分〜17時15分）

いますぐ危ないと感じたら、ためらわずに 119 番に電話してね。

きみが話してくれたこと、大事に受け止めたよ。またいつでも話しかけてね。`;

/**
 * `concern` の応答末尾に**コード側で必ず付ける**一文。
 * AI の裁量に任せると付いたり付かなかったりするため、機械的に付与する。
 */
export const CONCERN_FOOTER_TEXT =
  '\n\nそれと、大事なことは信頼できる大人（おうちの人や先生）にも話してみてね。きっと力になってくれるよ。';

/** 応答末尾に一文を足す（すでに同じ趣旨があれば重ねない）。 */
export function appendConcernFooter(answer: string): string {
  const body = (answer ?? '').trimEnd();
  if (!body) return CONCERN_FOOTER_TEXT.trim();
  // AI が既に同趣旨を書いていたら二重に付けない。
  if (/信頼できる大人|大人にも(相談|話)/.test(body)) return body;
  return body + CONCERN_FOOTER_TEXT;
}

/**
 * 運営通知に載せる要約。**メッセージ全文は載せない**（プライバシー配慮）。
 * 冒頭 `SUMMARY_CHARS` 文字だけを、改行を潰して渡す。
 */
export const SUMMARY_CHARS = 40;

export function buildSafetySummary(userText: string): string {
  const t = (userText ?? '').replace(/\s+/gu, ' ').trim();
  if (t.length <= SUMMARY_CHARS) return t;
  return `${t.slice(0, SUMMARY_CHARS)}…`;
}
