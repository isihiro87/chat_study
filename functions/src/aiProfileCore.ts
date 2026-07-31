/**
 * 生徒プロフィールと AI キャラクターの設定（`users/{uid}.aiProfile`）。
 *
 * 「一人ひとりに合わせる」ための土台。生徒が自分で決められるのは次の3種類:
 *   ① **AI のキャラクター**（口調・距離感・テンション）
 *   ② **お互いの呼び名**（AI をなんと呼ぶか／生徒をなんと呼ぶか）
 *   ③ **プロフィール**（好きなこと・得意/苦手・目標など。**個人情報は入れない**）
 *
 * ## 個人情報の扱い（最重要）
 * 相手は中学生で、会話は運営が閲覧しうる。**本名・住所・学校名・電話番号は保存しない**。
 * 呼び名は「ニックネーム」であって本名ではない、と明示して受け取る
 * （`aiMemoryCore.containsPersonalInfo` と同じフィルタを使う）。
 *
 * 副作用なし・環境非依存。
 */

import { containsPersonalInfo } from './aiMemoryCore';

/** AI のキャラクター（口調・距離感）のプリセット。 */
export const PERSONA_PRESETS = {
  friendly: {
    label: 'やさしいお姉さん・お兄さん',
    guidance:
      '親しみやすく、やわらかい口調。共感を多めに。「〜だね」「〜しよっか」。' +
      '励ましは押しつけず、そっと背中を押す。',
  },
  cheerful: {
    label: '元気な応援団',
    guidance:
      'テンション高め、明るくノリがいい。「いいね！」「その調子！」を多めに。' +
      '絵文字は1〜2個。ただし空回りしない——相手が沈んでいるときは静かに寄りそう。',
  },
  calm: {
    label: 'おちついた先生',
    guidance:
      '落ち着いた丁寧な口調。「〜ですね」「〜してみましょう」。' +
      '感情を煽らず、筋道を立てて説明する。',
  },
  buddy: {
    label: 'タメ口の相棒',
    guidance:
      '同級生のようなフランクなタメ口。「マジで？」「やってみよ」。' +
      'ただし雑にならない。バカにする言い方や強い言葉は使わない。',
  },
} as const;

export type PersonaKey = keyof typeof PERSONA_PRESETS;

export const PERSONA_KEYS = Object.keys(PERSONA_PRESETS) as PersonaKey[];

/** 既定のキャラクター（未設定のとき）。現行の「スタ先生／つづ先生」に近い。 */
export const DEFAULT_PERSONA: PersonaKey = 'friendly';

/** 文字数上限（超えたら**拒否**。切り詰めない）。 */
export const PROFILE_LIMITS = {
  /** AI の呼び名 */
  aiName: 12,
  /** 生徒の呼び名 */
  studentName: 12,
  /** 好きなこと・興味 */
  likes: 60,
  /** 目標・なりたい姿 */
  dream: 60,
  /** そのほか知っておいてほしいこと */
  note: 100,
} as const;

export interface AiProfile {
  /** AI のキャラクター */
  persona?: PersonaKey;
  /** AI の呼び名（生徒が決める。例「つづ先生」「ミナト」） */
  aiName?: string;
  /** 生徒の呼び名（ニックネーム。**本名は入れない**） */
  studentName?: string;
  /** 好きなこと・興味（会話のとっかかりに使う） */
  likes?: string;
  /** 目標・なりたい姿 */
  dream?: string;
  /** そのほか知っておいてほしいこと */
  note?: string;
}

export type ProfileValidateResult =
  | { ok: true; value: Partial<AiProfile> }
  | { ok: false; reason: string };

/** 呼び名として受け付けない語（なりすまし・混乱の防止）。 */
const RESERVED_NAMES = ['運営', '管理人', '先生です', 'システム', 'ai', 'AI'];

/**
 * プロフィールのパッチを検証する。
 *
 * - 個人情報を含むなら**全体を拒否**
 * - 長さ超過は拒否（切り詰めない）
 * - `persona` はプリセットのキーのみ
 */
export function validateProfilePatch(raw: unknown): ProfileValidateResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, reason: '設定の形式が正しくありません' };
  }
  const patch = raw as Record<string, unknown>;
  const value: Partial<AiProfile> = {};

  for (const v of Object.values(patch)) {
    if (typeof v === 'string' && containsPersonalInfo(v)) {
      return {
        ok: false,
        reason:
          '名前や住所などの個人情報は登録できないよ。ニックネームで教えてね',
      };
    }
  }

  if (patch.persona !== undefined) {
    if (
      typeof patch.persona !== 'string' ||
      !PERSONA_KEYS.includes(patch.persona as PersonaKey)
    ) {
      return { ok: false, reason: 'そのキャラクターは選べません' };
    }
    value.persona = patch.persona as PersonaKey;
  }

  const textFields: Array<[keyof typeof PROFILE_LIMITS, string]> = [
    ['aiName', 'わたしの呼び名'],
    ['studentName', 'きみの呼び名'],
    ['likes', '好きなこと'],
    ['dream', '目標'],
    ['note', 'メモ'],
  ];

  for (const [key, label] of textFields) {
    if (patch[key] === undefined) continue;
    const v = patch[key];
    if (typeof v !== 'string') {
      return { ok: false, reason: `${label}は文字で教えてね` };
    }
    const t = v.trim();
    if (!t) return { ok: false, reason: `${label}が空です` };
    if (t.length > PROFILE_LIMITS[key]) {
      return {
        ok: false,
        reason: `${label}は${PROFILE_LIMITS[key]}文字までにしてね`,
      };
    }
    if (
      (key === 'aiName' || key === 'studentName') &&
      RESERVED_NAMES.some((r) => t.toLowerCase() === r.toLowerCase())
    ) {
      return { ok: false, reason: `「${t}」は呼び名にできないんだ` };
    }
    (value as Record<string, string>)[key] = t;
  }

  if (Object.keys(value).length === 0) {
    return { ok: false, reason: '設定できる内容がありませんでした' };
  }
  return { ok: true, value };
}

/** パッチを適用する（すべて置き換え）。 */
export function applyProfilePatch(
  existing: AiProfile | undefined,
  patch: Partial<AiProfile>
): AiProfile {
  return { ...(existing ?? {}), ...patch };
}

/**
 * プロフィールをシステムプロンプトへ注入する節にする。
 *
 * キャラクターの指示は**既定のプロンプトを上書きするのではなく足す**。
 * サービス知識や安全方針は変えない（`ai-capabilities.md` の「守ること」は不変）。
 */
export function buildProfilePrompt(profile: AiProfile | undefined): string {
  const persona = PERSONA_PRESETS[profile?.persona ?? DEFAULT_PERSONA];
  const lines: string[] = [];

  lines.push(`- 話し方のタイプ: ${persona.label}`);
  lines.push(`  ${persona.guidance}`);

  if (profile?.aiName) {
    lines.push(
      `- あなたの呼び名: 「${profile.aiName}」（この子が決めてくれた名前。名乗るときはこれを使う）`
    );
  }
  if (profile?.studentName) {
    lines.push(
      `- この子の呼び名: 「${profile.studentName}」（会話の中で自然に呼びかけてよい。呼びすぎない）`
    );
  }
  if (profile?.likes) {
    lines.push(
      `- 好きなこと・興味: ${profile.likes}（たとえ話や雑談に使ってよい）`
    );
  }
  if (profile?.dream) lines.push(`- 目標・なりたい姿: ${profile.dream}`);
  if (profile?.note) lines.push(`- 知っておいてほしいこと: ${profile.note}`);

  return (
    `\n\n# この子に合わせた設定（本人が選んだもの）\n` +
    lines.join('\n') +
    `\n**この設定は話し方と呼び名にだけ効く。** 安全に関する方針・` +
    `サービスの案内内容・「答えを教えない」などのルールは変えない。`
  );
}

// ---------------------------------------------------------------------------
// 無料Bot（一問一答）向けの軽量プロフィール
// ---------------------------------------------------------------------------

/**
 * 無料Bot 用のプロフィール注入（`requirements.md` R17）。
 *
 * `buildProfilePrompt` との違い:
 *   - **persona（話し方）は使わない。** 無料Botは「スタ先生」の口調が固定で、
 *     プロンプト本体がそれを規定しているため、勝手に上書きしない
 *   - **中身が何も無ければ空文字**を返す（未設定の 3,000人に無駄なトークンを載せない）
 *
 * 覚えているのは「呼び名・好きなこと・目標・メモ」だけで、いずれも
 * `validateProfilePatch` が個人情報を弾いたあとの値。
 */
export function buildFreeProfilePrompt(profile: AiProfile | undefined): string {
  const lines: string[] = [];
  if (profile?.studentName) {
    lines.push(
      `- この子の呼び名: 「${profile.studentName}」（会話の中で自然に呼びかけてよい。呼びすぎない）`
    );
  }
  if (profile?.likes) {
    lines.push(
      `- 好きなこと・興味: ${profile.likes}（たとえ話や雑談に使ってよい）`
    );
  }
  if (profile?.dream) lines.push(`- 目標・なりたい姿: ${profile.dream}`);
  if (profile?.note) lines.push(`- 知っておいてほしいこと: ${profile.note}`);

  if (lines.length === 0) return '';

  return (
    `\n\n# この子について覚えていること（過去の会話から）\n` +
    lines.join('\n') +
    `\n自然に会話へ活かしてよい。ただし**毎回むりに持ち出さない**し、` +
    `「前に言ってたよね」と詰めるような使い方はしない。` +
    `内容が違っていたら本人の言うことを優先する。`
  );
}

/**
 * 会話から覚えておくことを抜き出すためのシステムプロンプト（最安モデルで使う）。
 * **本名・住所・学校名などは書かせない**（書かれても `validateProfilePatch` が弾く）。
 */
export const FREE_PROFILE_EXTRACT_PROMPT = `あなたは中学生と学習AIの会話ログから、次に話すときに覚えておくと役に立つことだけを抜き出す担当です。

次の JSON だけを出力してください。説明・前置き・コードブロックは不要です。
{"studentName":"","likes":"","dream":"","note":""}

- studentName … この子が「〇〇って呼んで」と言ったニックネーム（${PROFILE_LIMITS.studentName}文字まで）
- likes … 好きなこと・部活・趣味・推し（${PROFILE_LIMITS.likes}文字まで）
- dream … 志望校や将来の目標（${PROFILE_LIMITS.dream}文字まで）
- note … 次に話すとき役に立つこと。苦手教科・テストの予定など（${PROFILE_LIMITS.note}文字まで）

ルール:
- 会話に**書かれていない項目は空文字**にする。推測で埋めない。
- **本名・住所・学校名・電話番号・メールアドレスは絶対に書かない。**
- その場かぎりの話題（今日の天気、1問の答えなど）は書かない。
- 一時的な気分（今日は眠い等）も書かない。長く役に立つことだけ。`;

/**
 * 抽出結果（JSON 文字列）を検証可能なパッチにする。
 *
 * LLM は前後に説明やコードブロックを付けてくることがあるので、最初の `{...}` を
 * 取り出してからパースする。**空文字のフィールドは落とす**（未取得と区別する）。
 * パースできなければ null（呼び出し側は何もしない）。
 */
export function parseProfileExtraction(
  raw: string
): Record<string, string> | null {
  const text = (raw ?? '').trim();
  if (!text) return null;
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
    return null;

  const out: Record<string, string> = {};
  for (const key of ['studentName', 'likes', 'dream', 'note'] as const) {
    const v = (parsed as Record<string, unknown>)[key];
    if (typeof v !== 'string') continue;
    const t = v.trim();
    if (t) out[key] = t;
  }
  return Object.keys(out).length > 0 ? out : null;
}

/** パッチが既存プロフィールと同じ内容か（同じなら書き込みを省く）。 */
export function isSameProfilePatch(
  existing: AiProfile | undefined,
  patch: Partial<AiProfile>
): boolean {
  const base = (existing ?? {}) as Record<string, unknown>;
  return Object.entries(patch).every(([key, value]) => base[key] === value);
}

/** 設定メニューに出す選択肢（LINE の Quick Reply / Flex 用）。 */
export function buildPersonaOptions(): Array<{
  key: PersonaKey;
  label: string;
}> {
  return PERSONA_KEYS.map((key) => ({
    key,
    label: PERSONA_PRESETS[key].label,
  }));
}

/** 設定内容を人が読める形にする（「いまの設定」表示用）。 */
export function describeProfile(profile: AiProfile | undefined): string {
  const persona = PERSONA_PRESETS[profile?.persona ?? DEFAULT_PERSONA];
  const lines = [
    `🎭 話し方: ${persona.label}`,
    `🤖 わたしの呼び名: ${profile?.aiName ?? '（未設定）'}`,
    `🙂 きみの呼び名: ${profile?.studentName ?? '（未設定）'}`,
  ];
  if (profile?.likes) lines.push(`💛 好きなこと: ${profile.likes}`);
  if (profile?.dream) lines.push(`🎯 目標: ${profile.dream}`);
  if (profile?.note) lines.push(`📝 メモ: ${profile.note}`);
  return lines.join('\n');
}
