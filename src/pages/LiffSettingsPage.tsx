import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';

type Subject = 'history' | 'english';
type GradeLabel = '中1' | '中2' | '中3';
type PreferredHour = 6 | 7 | 17 | 19;
type Plan = 'free' | 'premium';

const SUBJECTS: { id: Subject; label: string; emoji: string }[] = [
  { id: 'english', label: '英語', emoji: '🔤' },
  { id: 'history', label: '歴史', emoji: '⏳' },
];

const GRADES: { value: GradeLabel; label: string }[] = [
  { value: '中1', label: '中1' },
  { value: '中2', label: '中2' },
  { value: '中3', label: '中3' },
];

const HOURS: { value: PreferredHour; label: string }[] = [
  { value: 6, label: '朝6時' },
  { value: 7, label: '朝7時' },
  { value: 17, label: '夕方5時' },
  { value: 19, label: '夜7時' },
];

const CONTACT_URL = 'https://www.chatstudy.jp/contact';
const PREMIUM_INFO_URL = 'https://www.chatstudy.jp/premium';

interface UserSettings {
  subject: Subject | null;
  grade: GradeLabel | null;
  preferredHour: PreferredHour | null;
  plan: Plan;
}

type Status = 'loading' | 'ready' | 'saving' | 'saved' | 'error';

/**
 * 公式LINE のリッチメニュー「設定・サポート」から開かれる LIFF ページ。
 *
 * users/{uid} の subject / grade / preferredHour を編集可能。
 * 解約案内・お問い合わせ・FAQ への外部リンクを集約。
 *
 * Web 版（www.chatstudy.jp）の UI には影響しない。
 */
export function LiffSettingsPage() {
  const { user, loading } = useAuth();

  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_SETTINGS as string | undefined
  );

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [settings, setSettings] = useState<UserSettings | null>(null);

  // Firestore 読み出し
  useEffect(() => {
    if (loading) return;
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (cancelled) return;
        const data = snap.exists() ? snap.data() : {};
        setSettings({
          subject: (data.subject as Subject | undefined) ?? null,
          grade: (data.grade as GradeLabel | undefined) ?? null,
          preferredHour: (data.preferredHour as PreferredHour | undefined) ?? null,
          plan: ((data.plan as Plan | undefined) ?? 'free') as Plan,
        });
        setStatus('ready');
      } catch (err) {
        console.error('[LiffSettingsPage] load failed', err);
        if (!cancelled) {
          setErrorMessage('読み込みに失敗しました。再度開き直してください。');
          setStatus('error');
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  const saveField = async <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) => {
    if (!user || !settings) return;
    setStatus('saving');
    setErrorMessage(null);
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        {
          [key]: value,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      setSettings((prev) => (prev ? { ...prev, [key]: value } : prev));
      setStatus('saved');
      setTimeout(() => {
        setStatus((s) => (s === 'saved' ? 'ready' : s));
      }, 1500);
    } catch (err) {
      console.error('[LiffSettingsPage] save failed', err);
      setErrorMessage('保存できませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/welcome?next=/liff/settings" replace />;
  }

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'error' && !settings) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm text-red-600 mb-3">{errorMessage}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  const s = settings!;

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1
            className="text-lg font-bold text-gray-800 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ⚙️ 設定・サポート
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 space-y-4 mt-4">
        {/* 教科 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">教科</div>
          <div className="flex gap-2">
            {SUBJECTS.map((sub) => {
              const active = s.subject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => void saveField('subject', sub.id)}
                  disabled={status === 'saving'}
                  className={`flex-1 rounded-full py-2.5 px-4 text-sm font-medium transition ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <span className="mr-1">{sub.emoji}</span>
                  {sub.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 学年 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">学年</div>
          <div className="flex gap-2">
            {GRADES.map((g) => {
              const active = s.grade === g.value;
              return (
                <button
                  key={g.value}
                  onClick={() => void saveField('grade', g.value)}
                  disabled={status === 'saving'}
                  className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 配信時刻 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">毎日1問の配信時刻</div>
          <div className="grid grid-cols-2 gap-2">
            {HOURS.map((h) => {
              const active = s.preferredHour === h.value;
              return (
                <button
                  key={h.value}
                  onClick={() => void saveField('preferredHour', h.value)}
                  disabled={status === 'saving'}
                  className={`rounded-full py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {h.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 保存ステータス */}
        {status === 'saved' && (
          <p className="text-center text-sm text-amber-700">✓ 保存しました</p>
        )}
        {status === 'saving' && (
          <p className="text-center text-sm text-gray-500">保存中...</p>
        )}
        {status === 'error' && errorMessage && (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        )}

        {/* プラン */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">プラン</div>
          <div className="flex items-center gap-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                s.plan === 'premium'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {s.plan === 'premium' ? '✨ プレミアム' : '無料プラン'}
            </span>
            {s.plan === 'free' && (
              <a
                href={PREMIUM_INFO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-600 underline"
              >
                プレミアムの詳細
              </a>
            )}
          </div>
          {s.plan === 'premium' && (
            <p className="mt-3 text-xs text-gray-500 leading-relaxed">
              解約のお手続きは下の「お問い合わせ」からお願いします。担当者からご案内します。
            </p>
          )}
        </section>

        {/* サポートリンク */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-3">サポート</div>
          <div className="flex flex-col gap-2">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-white border border-gray-200 hover:border-amber-300 rounded-full py-3 text-sm font-medium text-gray-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              お問い合わせ
            </a>
            <a
              href={PREMIUM_INFO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-white border border-gray-200 hover:border-amber-300 rounded-full py-3 text-sm font-medium text-gray-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              プレミアム / 解約の案内
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
