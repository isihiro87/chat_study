import { useEffect, useState } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { LiffAuthFailedScreen } from '../components/common/LiffAuthFailedScreen';

const MAX_LEN = 20;

function sanitize(raw: string): string {
  return raw.replace(/\s+/g, ' ').trim().slice(0, MAX_LEN);
}

/**
 * 公式LINE のトークから「ニックネームを教えて」flex 経由で開かれる
 * 超シンプルなニックネーム登録 LIFF ページ。
 *
 * 仕様:
 *  - useLiffAuth で LIFF ID トークン → Firebase Auth サインイン
 *  - users/{uid}.nickname を setDoc（最大 20 文字、改行/連続空白は単一空白に正規化）
 *  - 保存成功で「✓ 保存しました！」表示 → そのまま LIFF closeWindow
 *  - 既に nickname がある場合は初期値として表示し、変更可能
 */
export function LiffNicknamePage() {
  const { user, loading, userDoc, userDocLoaded } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_NICKNAME as string | undefined
  );

  const [value, setValue] = useState('');
  const [initialized, setInitialized] = useState(false);
  const [status, setStatus] = useState<
    'idle' | 'saving' | 'saved' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!userDocLoaded) return;
    if (initialized) return;
    const existing = userDoc?.nickname ?? '';
    if (existing) setValue(existing);
    setInitialized(true);
  }, [userDoc, userDocLoaded, initialized]);

  const handleSave = async () => {
    if (!user) return;
    const cleaned = sanitize(value);
    if (!cleaned) {
      setErrorMessage('空白だけだと保存できないので、何か入力してね🙏');
      return;
    }
    setStatus('saving');
    setErrorMessage(null);
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        { nickname: cleaned, updatedAt: serverTimestamp() },
        { merge: true }
      );
      setStatus('saved');
      // 1.2 秒後に LIFF ウィンドウを閉じる（閉じれなければそのまま表示）
      setTimeout(async () => {
        try {
          const liff = (await import('@line/liff')).default;
          if (typeof liff.closeWindow === 'function') liff.closeWindow();
        } catch {
          // ignore
        }
      }, 1200);
    } catch (err) {
      console.error('[LiffNicknamePage] save failed', err);
      setErrorMessage('保存できませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }
  if (!user) {
    return <LiffAuthFailedScreen nextPath="/liff/nickname" />;
  }

  const saving = status === 'saving';
  const saved = status === 'saved';

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-5">
          <h1
            className="text-lg font-bold text-white text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🙋 ニックネームを教えてね
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-4 w-full">
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            なんて呼べばいい？
            <br />
            ニックネームでも本名でもOK！メッセージで時々呼びかけるのに使います。
          </p>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={saving || saved}
            maxLength={MAX_LEN}
            placeholder="例: たろう"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          />
          <p className="text-xs text-gray-400 mt-2 text-right">
            {value.length} / {MAX_LEN} 文字
          </p>

          {errorMessage && (
            <p className="mt-3 text-sm text-red-600 text-center">
              {errorMessage}
            </p>
          )}
          {saved && (
            <p className="mt-3 text-sm text-amber-700 font-bold text-center">
              ✓ 保存しました！このページは閉じて構いません
            </p>
          )}

          <button
            type="button"
            onClick={() => void handleSave()}
            disabled={saving || saved || value.trim().length === 0}
            className="mt-5 w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {saving
              ? '保存中…'
              : saved
                ? '保存しました'
                : '保存する'}
          </button>
          <p className="text-xs text-gray-400 mt-3 text-center leading-relaxed">
            あとから「設定・サポート」でも変更できます
          </p>
        </section>
      </main>
    </div>
  );
}
