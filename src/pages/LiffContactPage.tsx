import { useState } from 'react';
import { auth } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { LiffAuthFailedScreen } from '../components/common/LiffAuthFailedScreen';

type Category = '質問' | '不具合の報告' | 'ご要望' | 'その他';

const CATEGORIES: Category[] = ['質問', '不具合の報告', 'ご要望', 'その他'];

const BODY_MAX_LEN = 4000;
const REPLY_MAX_LEN = 200;

const CONTACT_FN_URL = import.meta.env.VITE_CONTACT_FN_URL as
  | string
  | undefined;

/**
 * 公式LINE LIFF `/liff/contact` のお問い合わせフォーム。
 *
 * useLiffAuth で LIFF SDK → Firebase Auth サインイン後、
 * `submitContactForm` Cloud Function を ID トークン付きで叩く。
 * 送信されたデータは Firestore + 管理人 LINE + (設定されていれば) メール
 * の3経路で運営に通知される。
 */
export function LiffContactPage() {
  const { user, loading } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_CONTACT as string | undefined
  );

  const [category, setCategory] = useState<Category>('質問');
  const [bodyText, setBodyText] = useState('');
  const [replyContact, setReplyContact] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'done' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!user) return;
    const trimmed = bodyText.trim();
    if (!trimmed) {
      setErrorMessage('お問い合わせ内容を入力してください。');
      return;
    }
    if (!CONTACT_FN_URL) {
      setErrorMessage('お問い合わせ API URL が設定されていません。');
      return;
    }
    setStatus('submitting');
    setErrorMessage(null);
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        setErrorMessage('認証情報を取得できませんでした。');
        setStatus('error');
        return;
      }
      const res = await fetch(CONTACT_FN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          category,
          body: trimmed,
          replyContact: replyContact.trim() || undefined,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setErrorMessage(data.error || '送信に失敗しました。');
        setStatus('error');
        return;
      }
      setStatus('done');
    } catch (err) {
      console.error('[LiffContactPage] submit failed', err);
      setErrorMessage('通信エラーが発生しました。少し時間をおいてください。');
      setStatus('error');
    }
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }
  if (!user) {
    return <LiffAuthFailedScreen nextPath="/liff/contact" />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
      <header className="px-5 py-4 border-b border-gray-100 bg-white">
        <h1
          className="text-lg font-bold text-gray-800"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          お問い合わせ
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          ご質問・不具合の報告などお気軽にどうぞ。返信は LINE トークまたは
          ご記入のメールアドレスから差し上げます。
        </p>
      </header>

      <main className="px-5 py-6 space-y-5 max-w-xl mx-auto">
        {status === 'done' ? (
          <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <p
              className="text-base font-bold text-emerald-900"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              送信しました 🙌
            </p>
            <p className="mt-2 text-sm text-emerald-900 leading-relaxed">
              お問い合わせを受け付けました。内容を確認のうえ、できるだけ早めに
              お返事します。お時間いただく場合があります、ご了承ください。
            </p>
          </section>
        ) : (
          <>
            <section className="bg-white rounded-2xl shadow-sm p-5">
              <label className="text-xs text-gray-500 block mb-2">
                お問い合わせ種別
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((c) => {
                  const active = category === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      disabled={status === 'submitting'}
                      className={`rounded-2xl border px-3 py-3 text-sm transition ${
                        active
                          ? 'border-amber-400 bg-amber-50 text-amber-800 font-bold'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300'
                      } disabled:opacity-50`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-5">
              <label className="text-xs text-gray-500 block mb-2">
                内容
              </label>
              <textarea
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value.slice(0, BODY_MAX_LEN))}
                disabled={status === 'submitting'}
                placeholder="ご質問・不具合の状況・ご要望などをご記入ください。"
                rows={8}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm leading-relaxed focus:outline-none focus:border-amber-400 disabled:opacity-50"
              />
              <p className="mt-1 text-xs text-gray-400 text-right">
                {bodyText.length} / {BODY_MAX_LEN}
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-5">
              <label className="text-xs text-gray-500 block mb-2">
                返信用のご連絡先（任意）
              </label>
              <input
                type="text"
                value={replyContact}
                onChange={(e) =>
                  setReplyContact(e.target.value.slice(0, REPLY_MAX_LEN))
                }
                disabled={status === 'submitting'}
                placeholder="メールアドレスなど（無記入なら LINE トークで返信します）"
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-amber-400 disabled:opacity-50"
              />
            </section>

            {errorMessage && (
              <p className="text-center text-sm text-red-600">{errorMessage}</p>
            )}

            <button
              type="button"
              onClick={() => void handleSubmit()}
              disabled={status === 'submitting' || bodyText.trim().length === 0}
              className="w-full rounded-full bg-amber-500 py-3 text-sm font-bold text-white disabled:opacity-50"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {status === 'submitting' ? '送信中…' : '送信する'}
            </button>
            <p className="text-center text-xxs text-gray-400">
              ※返信までお時間をいただく場合があります。
            </p>
          </>
        )}
      </main>
    </div>
  );
}
