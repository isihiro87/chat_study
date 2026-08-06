import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LoadingScreen } from '../components/common/LoadingScreen';
import {
  PERSONA_OPTIONS,
  AI_PROFILE_LIMITS,
  getAiProfile,
  saveAiProfile,
  validateAiProfile,
  type AiProfile,
  type PersonaKey,
  type ValidationError,
} from '../utils/aiProfile';

/**
 * AI チャットボットの設定ページ（`/ai`）。
 *
 * AI の名前・呼んでほしい名前・話し方・知っておいてほしいことを本人が決める。
 * 保存先は `users/{uid}.aiProfile` で、`functions/src/aiChatPrompt.ts` が
 * システムプロンプトへ注入する。
 *
 * 認証は `/scope`（TestRangePage）と同じ方式＝LIFF ではなく **LINE Login OAuth**
 * （`/welcome?next=/ai` → `/auth/line/callback`）。外部ブラウザで開かれるため
 * `liff.closeWindow` は使えず、保存後は LINE のトークへ戻すリンクを出す。
 *
 * ⚠️ 個人情報（本名・住所・学校名・電話番号）は保存させない。入力中に理由つきで
 * 弾く（`validateAiProfile`）。サーバー側（`aiProfileCore.validateProfilePatch`）が
 * 最終防衛線。
 */

const LINE_OFFICIAL_CHAT_URL =
  (import.meta.env.VITE_OFFICIAL_LINE_ADD_FRIEND_URL as string | undefined) ||
  'https://lin.ee/wxDOngU';

type Status = 'loading' | 'ready' | 'saving' | 'saved' | 'error';

/** 入力欄1つ分。文字数カウンタつき。 */
function TextField(props: {
  label: string;
  hint?: string;
  placeholder: string;
  value: string;
  limit: number;
  error?: string;
  multiline?: boolean;
  onChange: (v: string) => void;
}) {
  const { label, hint, placeholder, value, limit, error, multiline } = props;
  const over = value.length > limit;
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-800 mb-1">
        {label}
      </label>
      {hint && <p className="text-xs text-gray-500 mb-2">{hint}</p>}
      {multiline ? (
        <textarea
          value={value}
          rows={3}
          placeholder={placeholder}
          onChange={(e) => props.onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => props.onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
        />
      )}
      <div className="mt-1 flex items-start justify-between gap-2">
        <p className="text-xs text-red-600">{error ?? ''}</p>
        <p
          className={`text-xs shrink-0 ${over ? 'text-red-600' : 'text-gray-400'}`}
        >
          {value.length}/{limit}
        </p>
      </div>
    </div>
  );
}

export function AiSettingsPage() {
  const { user, loading } = useAuth();
  const [status, setStatus] = useState<Status>('loading');
  const [profile, setProfile] = useState<AiProfile>({ persona: 'friendly' });
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const loaded = await getAiProfile(user.uid);
        if (cancelled) return;
        setProfile({ persona: 'friendly', ...loaded });
        setStatus('ready');
      } catch (error) {
        console.error('[AiSettingsPage] load failed:', error);
        if (cancelled) return;
        setLoadError('設定の読み込みに失敗しました。');
        setStatus('error');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading) {
    return (
      <LoadingScreen
        message="ログインを確認しています..."
        stuckThresholdMs={6000}
      />
    );
  }
  if (!user) {
    return <Navigate to="/welcome?next=/ai" replace />;
  }
  if (status === 'loading') {
    return (
      <LoadingScreen
        message="設定を読み込んでいます..."
        stuckThresholdMs={6000}
      />
    );
  }

  const errorOf = (field: keyof AiProfile) =>
    errors.find((e) => e.field === field)?.message;

  const update = (patch: Partial<AiProfile>) => {
    setProfile((p) => ({ ...p, ...patch }));
    setErrors([]);
    if (status === 'saved') setStatus('ready');
  };

  const handleSave = async () => {
    const found = validateAiProfile(profile);
    if (found.length > 0) {
      setErrors(found);
      return;
    }
    setStatus('saving');
    try {
      await saveAiProfile(user.uid, profile);
      setStatus('saved');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('[AiSettingsPage] save failed:', error);
      setLoadError('保存に失敗しました。通信環境のよい場所で試してね。');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-24">
      <div className="mx-auto max-w-lg px-4 py-6">
        <h1 className="text-xl font-bold text-gray-900">AIの設定</h1>
        <p className="mt-2 text-sm text-gray-600">
          チャットでスタディのAIを、きみに合わせてカスタマイズできるよ。
          あとからいつでも変えられます。
        </p>

        {status === 'saved' && (
          <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3">
            <p className="text-sm font-bold text-amber-900">保存したよ！</p>
            <p className="mt-1 text-xs text-amber-800">
              つぎの会話から、この設定でお話しするね。
            </p>
            <a
              href={LINE_OFFICIAL_CHAT_URL}
              className="mt-3 inline-block rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white"
            >
              LINEにもどる
            </a>
          </div>
        )}

        {loadError && <p className="mt-4 text-sm text-red-600">{loadError}</p>}

        <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
          <TextField
            label="AIの名前"
            hint="このAIをなんて呼びたい？（未設定だと「スタ先生」だよ）"
            placeholder="例: スタ先生 / ミナト"
            value={profile.aiName ?? ''}
            limit={AI_PROFILE_LIMITS.aiName}
            error={errorOf('aiName')}
            onChange={(v) => update({ aiName: v })}
          />

          <TextField
            label="呼んでほしい名前"
            hint="AIがきみをどう呼ぶか。本名じゃなくてニックネームでね"
            placeholder="例: あおい / たろー"
            value={profile.studentName ?? ''}
            limit={AI_PROFILE_LIMITS.studentName}
            error={errorOf('studentName')}
            onChange={(v) => update({ studentName: v })}
          />

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-800 mb-1">
              話し方
            </label>
            <p className="text-xs text-gray-500 mb-3">
              AIの性格を選べるよ。えらぶと下の例のような話し方になります。
            </p>
            <div className="space-y-2">
              {PERSONA_OPTIONS.map((option) => {
                const selected = (profile.persona ?? 'friendly') === option.key;
                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() =>
                      update({ persona: option.key as PersonaKey })
                    }
                    className={`w-full rounded-lg border px-4 py-3 text-left ${
                      selected
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <span className="block text-sm font-bold text-gray-900">
                      {selected ? '✓ ' : ''}
                      {option.label}
                    </span>
                    <span className="mt-1 block text-xs text-gray-600">
                      「{option.sample}」
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <TextField
            label="好きなこと・部活"
            hint="たとえ話や雑談に使うよ"
            placeholder="例: バスケ部、音楽をきくこと"
            value={profile.likes ?? ''}
            limit={AI_PROFILE_LIMITS.likes}
            error={errorOf('likes')}
            onChange={(v) => update({ likes: v })}
          />

          <TextField
            label="目標"
            hint="テストの点数でも、行きたい高校でもOK"
            placeholder="例: つぎのテストで80点"
            value={profile.dream ?? ''}
            limit={AI_PROFILE_LIMITS.dream}
            error={errorOf('dream')}
            onChange={(v) => update({ dream: v })}
          />

          <TextField
            label="知っておいてほしいこと"
            hint="苦手なこと、勉強のペース、してほしくない声かけなど"
            placeholder="例: 歴史がにがて。はげまされるよりコツを教えてほしい"
            value={profile.note ?? ''}
            limit={AI_PROFILE_LIMITS.note}
            error={errorOf('note')}
            multiline
            onChange={(v) => update({ note: v })}
          />

          <p className="mb-4 text-xs text-gray-500">
            ⚠️
            本名・住所・学校名・電話番号は登録できません。安全のため、ニックネームで書いてね。
          </p>

          <button
            type="button"
            onClick={handleSave}
            disabled={status === 'saving'}
            className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white disabled:opacity-50"
          >
            {status === 'saving' ? '保存中...' : 'この設定で保存する'}
          </button>
        </div>

        <a
          href={LINE_OFFICIAL_CHAT_URL}
          className="mt-6 block text-center text-sm text-gray-500 underline"
        >
          LINEのトークにもどる
        </a>
      </div>
    </div>
  );
}

export default AiSettingsPage;
