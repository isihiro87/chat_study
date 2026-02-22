/**
 * ChatGPT プロンプト生成ユーティリティ
 *
 * チャット学習完了後にChatGPTで深掘りするためのプロンプト生成機能を提供
 */

/**
 * HTMLタグを除去してプレーンテキストを返す
 * DOMParserを使用して安全にHTMLをデコード
 */
export function stripHtmlTags(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body.textContent || '').trim();
}

/**
 * buildPrompt のオプション
 */
export interface BuildPromptOptions {
  title: string;
  subtitle: string;
  points: string[];
}

/**
 * プロンプトテンプレート（URL長制限のため圧縮版）
 */
const PROMPT_TEMPLATE = `あなたは「AI先生」です。中学生と自然に会話しながら、学んだ内容の理解を深める手伝いをしてください。

【会話の方針】
・一方的に教えず、会話を通して理解を広げる
・「へぇ!」と思える話など、理解が深まる話を入れる
・質問ばかりにせず、説明・豆知識・雑談を適度に挟む
・生徒からの質問を歓迎する雰囲気を作る
・返答は短め(3-5文)、自然で話し言葉に近くする

【進め方】
1. 最初に「{title}について学んだんだね!」と声をかける
2. 学習ポイントから面白い事実や意外な話を1つ紹介
3. そのあと、生徒が質問しやすいように質問例を2-3個示す(「番号でも自由な質問でもOK」と伝える)
4. 生徒が番号で質問している間は引き続き質問例を提示。自分の言葉で質問してきたら、以降は質問例なしで自然な会話を続ける
5. 数回のやり取り後は「今回のポイントは○○だったね。ほかに気になることある?」とキーワードだけ示して生徒の発言を引き出す

【テーマ】{title} - {subtitle}

【学習ポイント】
{points}`;

/**
 * 学習内容からプロンプトを生成
 *
 * @param options - プロンプト生成オプション
 * @returns 生成されたプロンプト文字列
 */
export function buildPrompt(options: BuildPromptOptions): string {
  const { title, subtitle, points } = options;

  // ポイントをプレーンテキストに変換して箇条書きにする
  const pointsText = points
    .map((point) => `• ${stripHtmlTags(point)}`)
    .join('\n');

  return PROMPT_TEMPLATE.replaceAll('{title}', title)
    .replace('{subtitle}', subtitle)
    .replace('{points}', pointsText);
}

/**
 * ChatGPTのベースURL
 */
const CHATGPT_BASE_URL = 'https://chatgpt.com/';

/**
 * プロンプト付きChatGPT URLを構築
 *
 * @param options - プロンプト生成オプション
 * @returns ChatGPT URL（プロンプトがチャット欄に入力された状態で開く）
 */
export function buildChatGPTUrl(options: BuildPromptOptions): string {
  const prompt = buildPrompt(options);
  return `${CHATGPT_BASE_URL}?q=${encodeURIComponent(prompt)}`;
}
