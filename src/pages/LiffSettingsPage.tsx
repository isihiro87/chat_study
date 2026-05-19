import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db, auth } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';

const CHECKOUT_FN_URL = import.meta.env.VITE_PREMIUM_CHECKOUT_FN_URL as
  | string
  | undefined;
// 解約 Function は同じ region に同居しているので createStripeCheckoutSession のパスを差し替える。
const CANCEL_FN_URL = CHECKOUT_FN_URL
  ? CHECKOUT_FN_URL.replace(
      /createStripeCheckoutSession$/,
      'cancelStripeSubscription'
    )
  : undefined;

const GRADE_NUM_TO_LABEL = (g: 1 | 2 | 3 | null): GradeLabel | null => {
  if (g === 1) return '中1';
  if (g === 2) return '中2';
  if (g === 3) return '中3';
  return null;
};

type Subject = 'history' | 'english';
type GradeLabel = '中1' | '中2' | '中3';
type PreferredHour = 6 | 7 | 16 | 18 | 20;
type Plan = 'free' | 'premium';
const NICKNAME_MAX_LEN = 20;

// 英語コンテンツは未配信のため、現状の設定ページでは「歴史」のみ選択可能。
// 配信開始時に { id: 'english', label: '英語', emoji: '🔤' } を再追加する。
const SUBJECTS: { id: Subject; label: string; emoji: string }[] = [
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
  { value: 16, label: '夕方4時' },
  { value: 18, label: '夕方6時' },
  { value: 20, label: '夜8時' },
];

// LIFF お問い合わせフォーム。同一ドメイン内の /liff/contact に飛ばすことで、
// 既に LIFF 認証済みのセッションを引き継いだまま遷移できる。
const CONTACT_URL = '/liff/contact';
// LIFF /premium-info に同一ドメイン内で遷移。LIFF endpoint は LINE Developers Console で
// /liff/premium-info にマップ済（VITE_LIFF_ID_PREMIUM_INFO）
const PREMIUM_INFO_URL = '/liff/premium-info';

interface UserSettings {
  nickname: string;
  subject: Subject | null;
  grade: GradeLabel | null;
  preferredHour: PreferredHour | null;
  plan: Plan;
}

function sanitizeNickname(raw: string): string {
  return raw.replace(/\s+/g, ' ').trim().slice(0, NICKNAME_MAX_LEN);
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
  const { user, loading, userDoc, userDocLoaded } = useAuth();

  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_SETTINGS as string | undefined
  );

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [nicknameDraft, setNicknameDraft] = useState('');

  // プレミアム解約フロー: 確認パネル展開 → 確定ボタン押下で Cloud Function を叩く。
  // 二段階にすることで誤タップでの解約を防ぐ（無料体験中はそもそも解約ボタン自体を出さない）。
  type CancelStep = 'idle' | 'confirming' | 'submitting' | 'done';
  const [cancelStep, setCancelStep] = useState<CancelStep>('idle');
  const [cancelError, setCancelError] = useState<string | null>(null);

  const planSource = userDoc?.planSource ?? null;
  const cancelAtPeriodEnd = userDoc?.cancelAtPeriodEnd ?? false;
  const currentPeriodEnd = userDoc?.currentPeriodEnd ?? null;
  const isTrial = planSource === 'trial';
  const isPaid = planSource === 'paid';

  const formatJstDate = (date: Date | null): string => {
    if (!date) return '次回更新日';
    return new Intl.DateTimeFormat('ja-JP', {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const handleConfirmCancel = async () => {
    if (!user) return;
    if (!CANCEL_FN_URL) {
      setCancelError('解約 API URL が設定されていません');
      return;
    }
    setCancelStep('submitting');
    setCancelError(null);
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) {
        setCancelError('認証情報が取得できませんでした');
        setCancelStep('confirming');
        return;
      }
      const res = await fetch(CANCEL_FN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setCancelError(body.error || '解約処理に失敗しました');
        setCancelStep('confirming');
        return;
      }
      setCancelStep('done');
    } catch (err) {
      console.error('[LiffSettingsPage] cancel failed', err);
      setCancelError('通信エラーが発生しました');
      setCancelStep('confirming');
    }
  };

  useEffect(() => {
    if (settings) setNicknameDraft(settings.nickname);
  }, [settings]);

  // AuthContext がロード済みの userDoc から派生（getDoc 重複を排除）。
  // 以前は preferredHour / plan が UserDoc に含まれていなかったため追加 fetch
  // していたが、これらも UserDoc に格納するようになったので 1 回の fetch で完結。
  useEffect(() => {
    if (loading) return;
    if (!user) return;
    if (!userDocLoaded) return;

    setSettings({
      nickname: typeof userDoc?.nickname === 'string' ? userDoc.nickname : '',
      subject: (userDoc?.subject ?? null) as Subject | null,
      grade: GRADE_NUM_TO_LABEL(userDoc?.grade ?? null),
      preferredHour: (userDoc?.preferredHour ?? null) as PreferredHour | null,
      plan: (userDoc?.plan ?? 'free') as Plan,
    });
    setStatus('ready');
  }, [user, loading, userDoc, userDocLoaded]);

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
        {/* ニックネーム */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">ニックネーム</div>
          <div className="flex gap-2">
            <input
              type="text"
              value={nicknameDraft}
              onChange={(e) => setNicknameDraft(e.target.value)}
              disabled={status === 'saving'}
              maxLength={NICKNAME_MAX_LEN}
              placeholder="例: たろう"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            />
            <button
              type="button"
              onClick={() => {
                const cleaned = sanitizeNickname(nicknameDraft);
                if (!cleaned) return;
                void saveField('nickname', cleaned);
              }}
              disabled={
                status === 'saving' ||
                sanitizeNickname(nicknameDraft) === s.nickname ||
                sanitizeNickname(nicknameDraft).length === 0
              }
              className="rounded-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition px-4 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              保存
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            最大 {NICKNAME_MAX_LEN} 文字。空白だけは保存できません。
          </p>
        </section>

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
              {s.plan === 'premium'
                ? isTrial
                  ? '✨ プレミアム（無料体験中）'
                  : '✨ プレミアム'
                : '無料プラン'}
            </span>
            {s.plan === 'free' && (
              <a
                href={PREMIUM_INFO_URL}
                className="text-xs text-amber-600 underline"
              >
                プレミアムの詳細
              </a>
            )}
          </div>

          {/* 無料体験中: 解約不要の案内 */}
          {s.plan === 'premium' && isTrial && (
            <p className="mt-3 text-xs text-gray-500 leading-relaxed">
              無料体験中は解約手続きは不要です。期間終了時に自動で無料プランに戻ります。
              体験中にこのままサブスク登録した場合は、体験終了後から1ヶ月のプレミアム期間が始まります（体験期間中は二重課金されません）。
            </p>
          )}

          {/* 有料・解約予約済み: 利用期限の案内 */}
          {s.plan === 'premium' && isPaid && cancelAtPeriodEnd && (
            <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900 leading-relaxed">
              <p className="font-bold">解約予約済み</p>
              <p className="mt-1">
                <span className="font-bold">{formatJstDate(currentPeriodEnd)}</span>
                まではプレミアム機能をそのままご利用いただけます。期日になったら自動で無料プランに切り替わります。
              </p>
            </div>
          )}

          {/* 有料・通常: 解約ボタン */}
          {s.plan === 'premium' && isPaid && !cancelAtPeriodEnd && (
            <div className="mt-3">
              {cancelStep === 'idle' && (
                <button
                  type="button"
                  onClick={() => {
                    setCancelError(null);
                    setCancelStep('confirming');
                  }}
                  className="text-xs text-gray-500 underline"
                >
                  プレミアムを解約する
                </button>
              )}
              {cancelStep === 'confirming' && (
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 space-y-3">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    本当に解約しますか？
                    <br />
                    解約予約が成立しても、今お支払いいただいた1ヶ月分の期間中はプレミアム機能をそのままご利用いただけます。期間終了時に自動で無料プランへ切り替わります。
                  </p>
                  {cancelError && (
                    <p className="text-xs text-red-600">{cancelError}</p>
                  )}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCancelStep('idle');
                        setCancelError(null);
                      }}
                      className="flex-1 rounded-full border border-gray-300 bg-white py-2 text-xs text-gray-700"
                    >
                      キャンセル
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleConfirmCancel()}
                      className="flex-1 rounded-full bg-amber-500 py-2 text-xs font-bold text-white"
                    >
                      解約を確定する
                    </button>
                  </div>
                </div>
              )}
              {cancelStep === 'submitting' && (
                <p className="text-xs text-gray-500">解約処理中…</p>
              )}
              {cancelStep === 'done' && (
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-900 leading-relaxed">
                  解約予約を受け付けました。期日まではこれまで通りご利用いただけます。
                </div>
              )}
            </div>
          )}
        </section>

        {/* サポートリンク */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-3">サポート</div>
          <div className="flex flex-col gap-2">
            <a
              href={CONTACT_URL}
              className="block w-full text-center bg-white border border-gray-200 hover:border-amber-300 rounded-full py-3 text-sm font-medium text-gray-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              お問い合わせ
            </a>
            <a
              href={PREMIUM_INFO_URL}
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
