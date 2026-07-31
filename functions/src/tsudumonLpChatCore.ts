/**
 * つづもんLP 相談チャットの純ロジック（HTTP に依存しない部分）。
 *
 * もとは Vercel Serverless Function（pdf-workbook/lp/api/chat.js）だったが、
 * つづもんの独自ドメイン化（tsudumon.jp / Firebase Hosting 直配信）で Vercel を
 * 配信経路から外したため、Cloud Function へ移した。
 * 応答文言・上限値・プロンプトは移行前と同一に保っている（利用者から見た挙動を変えない）。
 *
 * 設計: pdf-workbook/.steering/20260725-tsudumon-domain-independence/
 */

export const MODEL = 'gemini-2.5-flash-lite';
export const MAX_OUTPUT_TOKENS = 400;
export const MAX_HISTORY = 8;
export const MAX_CHARS_PER_MSG = 300;

export const DEFAULT_DAILY_LIMIT = 300;
export const DEFAULT_USER_DAILY_LIMIT = 15;

/** perUser Map の上限（日内リセットの保険としてのメモリ保護） */
export const MAX_TRACKED_USERS = 5000;

const LINE_URL = 'https://lin.ee/XGIhuYi';

/** 応答文言。移行前（Vercel版）と1文字も変えないこと。 */
export const REPLY = {
  noApiKey: `ただいまチャットを準備中です。お手数ですが公式LINEでご質問ください。 ${LINE_URL}`,
  totalLimit: `申し訳ありません、本日のチャット対応が上限に達しました。よくある質問はページ下部のFAQに、その他は公式LINEでお答えできます。 ${LINE_URL}`,
  userLimit: `本日のチャットのご利用上限に達しました。また明日お使いいただけます。\nお急ぎのご質問や無料体験は、公式LINEでどうぞ。 ${LINE_URL}`,
  emptyCandidate: `すみません、うまく答えられませんでした。公式LINEでもご質問いただけます。 ${LINE_URL}`,
  failed: `すみません、いま回答の生成に失敗しました。少し時間をおいて試すか、公式LINEでご質問ください。 ${LINE_URL}`,
} as const;

export const SYSTEM_PROMPT = `
あなたは中学歴史のWeb教材「つづもん」の相談窓口です。名乗るときは「つづもん相談チャット」。

## 一番大事な姿勢
- 営業マンではありません。保護者や中学生の疑問・不安に寄り添って解消するのが役目です。
- 売り込み・煽り・「今だけ」等の表現は禁止。購入を急かさない。
- 相手が迷いを口にしたとき（「うちの子に合うかな」「買おうか迷う」等）だけ、
  「まず無料体験で確かめてからで大丈夫ですよ」と、そっと一歩だけ背中を押す。
- 分からないこと・ここに書かれていないことは、正直に「わかりかねます」と伝えて
  公式LINE（https://lin.ee/XGIhuYi）での問い合わせを案内する。絶対に作り話をしない。
- 回答は日本語で、3〜6文程度。やわらかい敬語。相手の気持ちへの共感を先に。

## 商品の事実（この範囲だけ答えてよい）
- 商品名: つづもん（中学歴史のWeb教材＝問題集＋参考書、スマホ等のブラウザで開くレッスン形式）。“日本一つづけやすい”を目指す教材
- 価格: 月額1,280円（税込）の定額制、1プランのみ（学年の区別なし・中1〜中3の歴史 全19単元すべて込み）
- きょうだい: 学習記録・毎日届く単元がお子さまごとに違うため、お一人ずつのアカウント＆お一人ずつのご契約。
  ただし2人目以降は月額980円（税込）。この割引は「公式LINEで保護者の方と1人目のお子さまがつながっていること」で
  自動適用される（同じ家庭であることの確認のため）。1人目の登録後、決済完了画面から公式LINEでつなぎ、
  2人目のお子さまのページを開いてもらう。くわしくは https://tsudumon.jp/parents/ を案内する
- 提供形態: PDFダウンロード販売ではなく、Web教材（レッスンプレイヤー）を直接ブラウザで利用する形。紙で解きたい場合はWeb画面からブラウザ印刷ができる（無料）
- 契約中は全19単元＋公式LINEの問題演習・AI採点・AI先生への質問・学習記録がすべて追加料金なしで使い放題
- 解約: 月額サブスクリプションなので、いつでも解約可能。次回請求日より前に解約すれば以降の課金は発生しない
- 紙面（画面）の内容: 穴埋め年表 / 要点まとめ / 一問一答 / 4択実戦問題 / 記述問題 / 写真つき資料問題 / 読みがなつき解答
- 使い方: スマホ・タブレット・PCのブラウザでWeb教材を開いて解く。画面上のQRコードや導線から
  公式LINEでAIがその場で丸つけ・解説（記述問題も採点）。LINEだけで解くこともできる
- 続く仕組み: すぐ丸がつく / 1単元15分 / 正答率・レベル・連続正解の記録 / まちがえた問題の自動再出題
- 無料体験: 3日間、全19単元（参考書＋問題集）をまるごと無料で試せる。期限後も「律令国家と奈良時代」の1単元はずっと無料。体験開始は**このページの「3日間無料でためす」ボタン**から（公式LINEでログインするだけ・お支払いの登録は不要。ログインと同時に公式LINEの友だち追加になる）
- 対象: 中学1〜3年生。学年をまたぐ復習・先取りOK。教科書を問わず定期テスト・実力テスト対策に使える
- 利用開始: 決済が完了するとその場で全19単元が開く（即時）。公式LINEにも御礼と教材リンクが届く
- AI先生の名前: つづもんのAIは「つづ先生」（別サービス「チャットでスタディ」のAIは「スタ先生」で別人）
- 今日の1単元: 全19単元を教科書の流れどおりに順番で1単元ずつ、毎日きまった時刻にLINEへ届く。
  時刻は平日/土日で別々に設定できる。※学習記録やニガテ・テスト日に合わせた出し分けは「今後の実装予定」であり、
  すでにできているかのように答えてはいけない
- ロードマップ（予定）: 今後、社会・英語・理科・数学を順次追加予定。
  学習時間の見える化と負荷調整 / 状況で変わる声かけ / テスト日から逆算プラン /
  学習記録に合わせた出し分け / 保護者への週1通知・AI診断レポート も予定（いずれも未実装）
- 販売: ぐっとスクール（つづもん開発者・石本大貴、塾講師・家庭教師歴10年）。現在は歴史のみ販売
- AIとのやり取りは担当者も定期的に確認している

## 答えられない・答えてはいけないもの
- 返金や個別のトラブル対応、決済の詳細 → 公式LINEへ案内
- 歴史の学習内容そのものの長い解説（それは教材の役目）→ 簡潔に触れる程度は可
- つづもんと無関係の話題 → やわらかく本題に戻す
`.trim();

export interface GeminiContent {
  role: 'user' | 'model';
  parts: { text: string }[];
}

/** JST の YYYY-MM-DD。日次カウンタのリセット判定に使う。 */
export function jstToday(nowMs: number): string {
  return new Date(nowMs + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

/**
 * クライアントから来た messages を Gemini の contents 形式へ正規化する。
 * 不正（空・最後が user でない）なら null を返す＝400 相当。
 */
export function normalizeMessages(raw: unknown): GeminiContent[] | null {
  const list = Array.isArray(raw) ? raw : [];
  const messages: GeminiContent[] = list
    .filter(
      (m): m is { role: string; content: string } =>
        !!m &&
        typeof m === 'object' &&
        ((m as { role?: unknown }).role === 'user' ||
          (m as { role?: unknown }).role === 'assistant') &&
        typeof (m as { content?: unknown }).content === 'string'
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
      parts: [{ text: m.content.slice(0, MAX_CHARS_PER_MSG) }],
    }));

  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return null;
  }
  return messages;
}

/**
 * 簡易日次カウンタ（インスタンス単位の目安）。
 * Cloud Functions もインスタンスが分かれるため厳密ではない点は Vercel 版と同じ。
 * 厳密にしたい場合はここを Firestore / Redis に差し替える。
 */
export class DailyCounters {
  private date = '';
  private total = 0;
  private perUser = new Map<string, number>();

  /** 日付が変わっていればリセットする。 */
  private roll(nowMs: number): void {
    const today = jstToday(nowMs);
    if (this.date !== today) {
      this.date = today;
      this.total = 0;
      this.perUser = new Map();
    }
  }

  /** 全体上限に達しているか。 */
  isTotalExceeded(nowMs: number, limit: number): boolean {
    this.roll(nowMs);
    return this.total >= limit;
  }

  /** この利用者の上限に達しているか。 */
  isUserExceeded(nowMs: number, key: string, limit: number): boolean {
    this.roll(nowMs);
    return (this.perUser.get(key) || 0) >= limit;
  }

  /** 応答に成功したときだけ加算する（Vercel版と同じく失敗時は数えない）。 */
  record(nowMs: number, key: string): void {
    this.roll(nowMs);
    this.total += 1;
    this.perUser.set(key, (this.perUser.get(key) || 0) + 1);
    if (this.perUser.size > MAX_TRACKED_USERS) this.perUser.clear();
  }

  /** テスト用。 */
  snapshot(): { date: string; total: number; users: number } {
    return { date: this.date, total: this.total, users: this.perUser.size };
  }
}

/** 環境変数から上限値を読む（未設定・不正なら既定値）。 */
export function readLimit(raw: string | undefined, fallback: number): number {
  const n = parseInt(raw || '', 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

/** Gemini の応答から本文を取り出す。取り出せなければ既定文言。 */
export function parseGeminiReply(data: unknown): string {
  const parts = (
    data as { candidates?: { content?: { parts?: { text?: string }[] } }[] }
  )?.candidates?.[0]?.content?.parts;
  const text = Array.isArray(parts)
    ? parts.map((p) => p?.text ?? '').join('')
    : '';
  return text || REPLY.emptyCandidate;
}

/** Gemini generateContent のリクエストボディ。 */
export function buildGeminiRequest(messages: GeminiContent[]): string {
  return JSON.stringify({
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: messages,
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.6,
    },
  });
}
