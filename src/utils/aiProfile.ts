import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

/**
 * AI チャットボットの設定（`users/{uid}.aiProfile`）の読み書き。
 *
 * 検証ロジックの正本は **`functions/src/aiProfileCore.ts`**（システムプロンプトへ
 * 注入する側）。ここはブラウザから同じ制約をかけるための写しで、
 * **上限値・禁止語をあちらと必ず一致させる**こと。ずれると「ページでは保存できたのに
 * AI が使ってくれない（または逆）」という分かりにくい不整合になる。
 *
 * `aiProfile` は firestore.rules の保護フィールドに入っていないので、
 * LINE Login でサインインした本人が直接書き込める（`testScope` と同じ方式）。
 */

/** AI のキャラクター（`aiProfileCore.PERSONA_PRESETS` と同じキー）。 */
export const PERSONA_OPTIONS = [
  {
    key: 'friendly',
    label: 'やさしいお姉さん・お兄さん',
    sample: 'いっしょにやってみよっか。ここまでよくがんばったね😊',
  },
  {
    key: 'cheerful',
    label: '元気な応援団',
    sample: 'いいね！その調子だよ〜！次いってみよう🔥',
  },
  {
    key: 'calm',
    label: 'おちついた先生',
    sample: 'なるほど。では順を追って確認していきましょう。',
  },
  {
    key: 'buddy',
    label: 'タメ口の相棒',
    sample: 'お、やるじゃん。次いってみよ！',
  },
] as const;

export type PersonaKey = (typeof PERSONA_OPTIONS)[number]['key'];

/** 文字数上限（`aiProfileCore.PROFILE_LIMITS` と一致させる）。 */
export const AI_PROFILE_LIMITS = {
  aiName: 12,
  studentName: 12,
  likes: 60,
  dream: 60,
  note: 100,
} as const;

export interface AiProfile {
  persona?: PersonaKey;
  aiName?: string;
  studentName?: string;
  likes?: string;
  dream?: string;
  note?: string;
}

/** 呼び名として受け付けない語（`aiProfileCore.RESERVED_NAMES` と一致）。 */
const RESERVED_NAMES = ['運営', '管理人', '先生です', 'システム', 'ai'];

/**
 * 個人情報が含まれていないか（`aiMemoryCore.containsPersonalInfo` の簡易版）。
 *
 * 相手は中学生で、会話は運営が閲覧しうる。**本名・住所・学校名・電話番号は保存しない**。
 * ここで弾けなくてもサーバー側の検証が最終防衛線になるが、
 * **入力中に理由を伝えられる**のがページ側で持つ意味。
 */
export function containsPersonalInfoLike(text: string): boolean {
  if (!text) return false;
  // 電話番号・メール・郵便番号・住所らしい表記・学校名
  return (
    /\d{2,4}-?\d{2,4}-?\d{3,4}/.test(text) ||
    /[\w.+-]+@[\w-]+\.[\w.]+/.test(text) ||
    /〒?\d{3}-?\d{4}/.test(text) ||
    /(都|道|府|県|市|区|町|村)[^\s]{0,10}(丁目|番地|号)/.test(text) ||
    /(小学校|中学校|高校|高等学校|学園|学院)/.test(text)
  );
}

export interface ValidationError {
  field: keyof AiProfile;
  message: string;
}

const FIELD_LABEL: Record<string, string> = {
  aiName: 'AIの名前',
  studentName: '呼んでほしい名前',
  likes: '好きなこと',
  dream: '目標',
  note: '知っておいてほしいこと',
};

/** 保存前の検証。空配列なら OK。 */
export function validateAiProfile(profile: AiProfile): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const key of [
    'aiName',
    'studentName',
    'likes',
    'dream',
    'note',
  ] as const) {
    const value = (profile[key] ?? '').trim();
    if (!value) continue;
    const limit = AI_PROFILE_LIMITS[key];
    if (value.length > limit) {
      errors.push({
        field: key,
        message: `${FIELD_LABEL[key]}は${limit}文字までにしてね`,
      });
      continue;
    }
    if (containsPersonalInfoLike(value)) {
      errors.push({
        field: key,
        message:
          '本名・住所・学校名・電話番号は登録できないよ。ニックネームで教えてね',
      });
      continue;
    }
    if (
      (key === 'aiName' || key === 'studentName') &&
      RESERVED_NAMES.some((r) => value.toLowerCase() === r)
    ) {
      errors.push({
        field: key,
        message: `「${value}」は名前にできないんだ`,
      });
    }
  }
  return errors;
}

/** Firestore の生データを正規化する（型が違う値は捨てる）。 */
export function normalizeAiProfile(raw: unknown): AiProfile {
  if (!raw || typeof raw !== 'object') return {};
  const r = raw as Record<string, unknown>;
  const out: AiProfile = {};
  const personaKeys = PERSONA_OPTIONS.map((p) => p.key) as string[];
  if (typeof r.persona === 'string' && personaKeys.includes(r.persona)) {
    out.persona = r.persona as PersonaKey;
  }
  for (const key of [
    'aiName',
    'studentName',
    'likes',
    'dream',
    'note',
  ] as const) {
    if (typeof r[key] === 'string' && r[key]) out[key] = r[key] as string;
  }
  return out;
}

export async function getAiProfile(uid: string): Promise<AiProfile> {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return {};
  return normalizeAiProfile(snap.data().aiProfile);
}

/**
 * 設定を保存する。
 *
 * **空文字のフィールドは `''` として保存する**（キーごと消さない）。
 * merge 更新なので、キーを落とすと「前の値が残り続けて消せない」ことになるため。
 * 空文字はサーバー側の注入時に無視される（`buildFreeProfilePrompt` は falsy を出さない）。
 */
export async function saveAiProfile(
  uid: string,
  profile: AiProfile
): Promise<void> {
  await setDoc(
    doc(db, 'users', uid),
    {
      aiProfile: {
        persona: profile.persona ?? 'friendly',
        aiName: (profile.aiName ?? '').trim(),
        studentName: (profile.studentName ?? '').trim(),
        likes: (profile.likes ?? '').trim(),
        dream: (profile.dream ?? '').trim(),
        note: (profile.note ?? '').trim(),
        // ページから保存したことを残す（会話からの自動抽出と区別する）。
        updatedAt: serverTimestamp(),
        lastSource: 'page',
      },
    },
    { merge: true }
  );
}
