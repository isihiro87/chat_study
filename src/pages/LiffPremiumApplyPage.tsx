import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { withFirestoreTimeout } from '../utils/firestoreTimeout';
import { logFunnelEvent } from '../utils/funnelEvent';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';
import {
  type ApplicationGrade,
  type ApplicationPreferredHour,
  type ApplicationSubject,
} from '../types/premium';

type Plan = 'free' | 'premium';
type Status =
  | 'loading'
  | 'ready'
  | 'already_premium'
  | 'submitting'
  | 'submitted'
  | 'error';
type PlanSource = 'trial' | 'paid' | 'trial_expired' | null;

const GRADE_NUM_TO_LABEL = (g: 1 | 2 | 3 | null): ApplicationGrade | null => {
  if (g === 1) return '中1';
  if (g === 2) return '中2';
  if (g === 3) return '中3';
  return null;
};

interface UserProfile {
  subject: ApplicationSubject | null;
  grade: ApplicationGrade | null;
  preferredHour: ApplicationPreferredHour | null;
  plan: Plan;
  planSource: PlanSource;
}

const PROMO_PRICE_YEN = 680;
const CHECKOUT_URL = import.meta.env.VITE_PREMIUM_CHECKOUT_URL as
  | string
  | undefined;

const HOURS: {
  value: ApplicationPreferredHour;
  label: string;
  note: string;
}[] = [
  { value: 6, label: '朝6時', note: '登校前に1問' },
  { value: 7, label: '朝7時', note: '朝の準備後に' },
  { value: 17, label: '夕方5時', note: '帰宅後すぐ' },
  { value: 19, label: '夜7時', note: '夕食前後に' },
];

/**
 * LIFF プレミアム登録ページ。
 *
 * 認証必須。Firebase Auth 確立後、users/{uid} を読んで plan を確認:
 * - premium ならフォームを出さず「すでにプレミアム」案内
 * - free ならワンタップで premiumApplications/{autoId} に書き込み、7日間無料を開始
 * - 無料トライアル中 / トライアル使用済みなら本契約用の決済ページへ送客
 *
 * LINE displayName は送信時に liff.getProfile() で取得して同梱する。
 * 申込ステータスは初期値 "pending" 固定（firestore.rules で強制）。
 */
export function LiffPremiumApplyPage() {
  const { user, loading, userDoc, userDocLoaded } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_PREMIUM_APPLY as string | undefined
  );
  const promo = usePremiumPromoCountdown();

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [selectedHour, setSelectedHour] =
    useState<ApplicationPreferredHour | null>(null);
  const [guardianConfirmed, setGuardianConfirmed] = useState(false);

  // 計測: 認証確立後に1回だけ閲覧イベントを記録
  useEffect(() => {
    if (!user) return;
    const source = new URLSearchParams(window.location.search).get('src');
    void logFunnelEvent('liff_premium_apply_view', {
      source: source ?? 'direct',
    });
  }, [user]);

  // AuthContext がロード済みの userDoc から派生（getDoc 重複を排除）
  useEffect(() => {
    if (loading) return;
    if (!user) return;
    if (!userDocLoaded) return;
    if (!userDoc) {
      setErrorMessage('読み込みに失敗しました。再度開き直してください。');
      setStatus('error');
      return;
    }
    const subject = (userDoc.subject as ApplicationSubject | null) ?? null;
    const grade: ApplicationGrade | null = GRADE_NUM_TO_LABEL(userDoc.grade);
    const preferredHour =
      (userDoc.preferredHour as ApplicationPreferredHour | null) ?? null;
    const plan: Plan = userDoc.plan;
    const planSource: PlanSource = userDoc.planSource;
    setProfile({
      subject,
      grade,
      preferredHour,
      plan,
      planSource,
    });
    setSelectedHour((current) => current ?? preferredHour ?? 19);
    // 無料トライアル中（plan=premium かつ planSource=trial）は本契約 UI へ進める
    if (plan === 'premium' && planSource === 'trial') {
      setStatus('ready');
    } else if (plan === 'premium') {
      setStatus('already_premium');
    } else {
      setStatus('ready');
    }
  }, [user, loading, userDoc, userDocLoaded]);

  const canSubmit = useMemo(() => {
    if (status !== 'ready') return false;
    if (!profile) return false;
    if (
      profile.planSource === 'trial' ||
      profile.planSource === 'trial_expired'
    ) {
      return true;
    }
    if (!selectedHour) return false;
    if (!guardianConfirmed) return false;
    return true;
  }, [guardianConfirmed, profile, selectedHour, status]);

  const handleSubmit = async () => {
    if (!user || !profile) return;
    const isTrialToPaid = profile.planSource === 'trial';
    const isTrialExpired = profile.planSource === 'trial_expired';
    if (isTrialToPaid || isTrialExpired) {
      if (!CHECKOUT_URL) {
        setErrorMessage(
          '本契約ページの準備中です。しばらくしてからもう一度お試しください。'
        );
        return;
      }
      window.location.href = CHECKOUT_URL;
      return;
    }

    setStatus('submitting');
    setErrorMessage(null);

    let displayName = '';
    try {
      const liff = (await import('@line/liff')).default;
      if (liff.isLoggedIn()) {
        const p = await liff.getProfile();
        displayName = p.displayName ?? '';
      }
    } catch (err) {
      console.warn('[LiffPremiumApplyPage] getProfile failed (continue)', err);
    }

    const lineUserId = user.uid.startsWith('line:')
      ? user.uid.slice('line:'.length)
      : user.uid;

    try {
      if (selectedHour && selectedHour !== profile.preferredHour) {
        await withFirestoreTimeout(
          setDoc(
            doc(db, 'users', user.uid),
            {
              preferredHour: selectedHour,
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          ),
          7000,
          'setDoc users preferredHour'
        );
      }
      const ref = await withFirestoreTimeout(
        addDoc(collection(db, 'premiumApplications'), {
          applicationType: 'trial_start',
          uid: user.uid,
          lineUserId,
          displayName,
          subject: profile.subject,
          grade: profile.grade,
          preferredHour: selectedHour,
          status: 'pending' as const,
          createdAt: serverTimestamp(),
        }),
        7000,
        'addDoc premiumApplications'
      );
      void logFunnelEvent('liff_premium_apply_submit', {
        applicationId: ref.id,
        applicationType: 'trial_start',
        source:
          new URLSearchParams(window.location.search).get('src') ?? 'direct',
      });
      setStatus('submitted');
    } catch (err) {
      console.error('[LiffPremiumApplyPage] submit failed', err);
      setErrorMessage(
        '送信できませんでした。通信状況を確認のうえ、もう一度お試しください。'
      );
      setStatus('ready');
    }
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }
  if (!user) {
    return <Navigate to="/welcome?next=/liff/premium-apply" replace />;
  }
  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'error' && !profile) {
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

  if (status === 'already_premium') {
    return (
      <div className="min-h-screen bg-[#FAF9F7] pb-12">
        <header className="bg-amber-500">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <h1
              className="text-xl font-bold text-white text-center"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ✨ ご利用ありがとうございます
            </h1>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4">
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5 text-center">
            <p
              className="text-sm font-bold text-gray-800 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              すでにプレミアムをご利用中です
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              追加のお手続きは不要です。設定や解約のご相談はリッチメニュー「設定・サポート」からお問い合わせください。
            </p>
          </section>
        </main>
      </div>
    );
  }

  if (status === 'submitted') {
    const hourLabel =
      HOURS.find((h) => h.value === selectedHour)?.label ??
      (selectedHour ? `${selectedHour}時` : '設定した時刻');

    const handleBackToLine = async () => {
      try {
        const liff = (await import('@line/liff')).default;
        if (typeof liff.closeWindow === 'function') {
          liff.closeWindow();
          return;
        }
      } catch (err) {
        console.warn('[LiffPremiumApplyPage] closeWindow failed', err);
      }
      window.location.href = 'https://line.me/R/';
    };

    return (
      <div className="min-h-screen bg-[#FAF9F7] pb-12">
        <header className="bg-gradient-to-br from-amber-400 via-orange-400 to-sky-500">
          <div className="max-w-2xl mx-auto px-4 py-8">
            <h1
              className="text-2xl font-bold text-white text-center leading-snug"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              7日間無料トライアルを
              <br />
              開始しました
            </h1>
            <p className="text-sm text-white/95 text-center mt-3 leading-relaxed">
              このあとLINEに戻って、リッチメニューからすぐに使えます。
            </p>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4">
          <section className="-mt-3 bg-white rounded-2xl shadow-sm p-5 border border-amber-100">
            <p
              className="text-sm font-bold text-gray-800 mb-3"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              次にすること
            </p>
            <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
              <div className="rounded-xl bg-amber-50 px-4 py-3">
                <div className="font-bold text-amber-800">1. LINEに戻る</div>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  下のボタンでこの画面を閉じ、チャットでスタディのトーク画面を開きます。
                </p>
              </div>
              <div className="rounded-xl bg-sky-50 px-4 py-3">
                <div className="font-bold text-sky-800">
                  2. 「もっと解く」を押す
                </div>
                <p className="text-xs text-sky-800 mt-1 leading-relaxed">
                  プレミアム版リッチメニューから、追加問題と苦手復習を試せます。
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 px-4 py-3">
                <div className="font-bold text-gray-800">
                  3. 毎日1問は{hourLabel}に届きます
                </div>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  配信時刻はあとから「設定・サポート」で変更できます。
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => void handleBackToLine()}
              className="mt-5 w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              LINEに戻って始める
            </button>
          </section>
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
            <p
              className="text-sm font-bold text-gray-800 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              保護者の方へ
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              無料トライアル中はクレジットカード登録なしで試せます。継続して使う場合は、トライアル中にStripeの月額登録へ進む想定です。
            </p>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              現在は中1・中2の歴史が中心です。対応教科は今後増える予定で、今登録した方は月
              {PROMO_PRICE_YEN.toLocaleString()}円のまま継続できます。
            </p>
          </section>
          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            このページは閉じていただいて構いません
          </p>
        </main>
      </div>
    );
  }

  const s = profile!;
  const submitting = status === 'submitting';
  const isTrialToPaid = s.planSource === 'trial';
  const requiresCheckout = isTrialToPaid || s.planSource === 'trial_expired';

  return (
    <div className="min-h-screen bg-[#FFF9EE] pb-12">
      <header className="bg-gradient-to-br from-amber-400 via-orange-400 to-sky-500">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1
            className="text-2xl font-bold text-white text-center leading-snug"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {isTrialToPaid
              ? '✨ プレミアム本契約のお申込み'
              : s.planSource === 'trial_expired'
                ? '✨ プレミアム本契約へ'
                : '✨ 7日間無料トライアル'}
          </h1>
          <p className="text-xs text-white/90 text-center mt-1">
            {isTrialToPaid
              ? '無料トライアル後も続ける方はこちらから'
              : s.planSource === 'trial_expired'
                ? '無料トライアルは終了しています'
                : '内容を確認して、7日間無料を始めます'}
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 space-y-4 -mt-2">
        {/* 価格再確認カード */}
        <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-amber-100">
          {promo.isActive ? (
            <div className="bg-gradient-to-r from-amber-50 to-white px-5 py-4">
              <p
                className="text-sm font-bold text-amber-700 mb-1"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                今だけ月額
              </p>
              <div className="flex flex-wrap items-baseline gap-2">
                <span
                  className="text-4xl font-bold text-amber-600"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  ¥{PROMO_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-xs text-gray-600">/月（税込）</span>
              </div>
              <p className="text-xs text-amber-700 mt-1 font-bold">
                ⏰ 特典終了まで残り{promo.daysRemaining}日 /
                今登録すると今後も680円のまま
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                7日間無料で試して、続ける場合だけStripeの月額登録に進みます。
              </p>
            </div>
          ) : (
            <div className="px-5 py-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                  今だけ
                </span>
                <span
                  className="text-4xl font-bold text-amber-600"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  ¥{PROMO_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-xs text-gray-600">/月（税込）</span>
              </div>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                今登録すると、今後教科が増えて価格が上がった後も680円のまま使い続けられます。
              </p>
            </div>
          )}
        </section>

        {/* 無料トライアル中向け補足 */}
        {isTrialToPaid && (
          <section className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
            <p
              className="text-sm font-bold text-amber-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              現在 7日間無料トライアルをご利用中です
            </p>
            <p className="text-xs text-amber-800 mt-1 leading-relaxed">
              {CHECKOUT_URL
                ? 'このページから本契約に進むと、無料期間終了後も継続してプレミアム機能をご利用いただけます。'
                : '月額プランの登録受付は準備中です。準備ができ次第、こちらから登録できるようになります。'}
            </p>
          </section>
        )}

        {s.planSource === 'trial_expired' && (
          <section className="bg-white rounded-2xl shadow-sm px-4 py-3">
            <p
              className="text-sm font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              無料トライアルは終了しています
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              {CHECKOUT_URL
                ? '続けて使う場合は、月額プランの登録へ進んでください。'
                : '月額プランの登録受付は準備中です。準備ができ次第、こちらから登録できるようになります。'}
            </p>
          </section>
        )}

        {/* 申込内容 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">申込内容の確認</div>
          <dl className="text-sm text-gray-700 space-y-1">
            <div className="flex gap-2">
              <dt className="text-gray-500 w-16 shrink-0">教科</dt>
              <dd>{s.subject ? labelForSubject(s.subject) : '未設定'}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-500 w-16 shrink-0">学年</dt>
              <dd>{s.grade ?? '未設定'}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-500 w-16 shrink-0">配信時刻</dt>
              <dd>
                {selectedHour
                  ? HOURS.find((h) => h.value === selectedHour)?.label
                  : '未設定'}
              </dd>
            </div>
          </dl>
        </section>

        {!requiresCheckout && (
          <>
            <section className="bg-white rounded-2xl shadow-sm p-5">
              <div className="text-xs text-gray-500 mb-2">
                毎日1問の配信時刻
              </div>
              <div className="grid grid-cols-2 gap-2">
                {HOURS.map((h) => {
                  const active = selectedHour === h.value;
                  return (
                    <button
                      key={h.value}
                      type="button"
                      onClick={() => setSelectedHour(h.value)}
                      disabled={submitting}
                      className={`rounded-2xl border px-3 py-3 text-left transition ${
                        active
                          ? 'border-amber-400 bg-amber-50 text-amber-800'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300'
                      } disabled:opacity-50`}
                    >
                      <span
                        className="block text-sm font-bold"
                        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {h.label}
                      </span>
                      <span className="mt-1 block text-[11px] text-gray-500">
                        {h.note}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                ここで選んだ時刻に、毎日1問が届きます。あとから変更できます。
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-5">
              <div
                className="text-sm font-bold text-gray-800 mb-2"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                確認事項
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed mb-3">
                <li>7日間無料でプレミアム機能を試せます。</li>
                <li>
                  無料体験の開始だけではクレジットカード入力はありません。
                </li>
                <li>
                  継続する場合は、Stripeの月額登録でカード情報を入力します。
                </li>
                <li>中学生の方は、保護者の方と確認してから始めてください。</li>
              </ul>
              <label className="flex items-start gap-2 rounded-xl bg-amber-50 px-3 py-3 text-xs text-amber-900">
                <input
                  type="checkbox"
                  checked={guardianConfirmed}
                  onChange={(e) => setGuardianConfirmed(e.target.checked)}
                  className="mt-0.5"
                />
                <span>
                  保護者と確認しました。7日間無料トライアルを開始します。
                </span>
              </label>
            </section>
          </>
        )}

        {errorMessage && (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        )}

        {/* 送信ボタン */}
        <section>
          <button
            type="button"
            onClick={() => void handleSubmit()}
            disabled={
              !canSubmit || submitting || (requiresCheckout && !CHECKOUT_URL)
            }
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {submitting
              ? '送信中...'
              : requiresCheckout && !CHECKOUT_URL
                ? '月額登録の受付準備中'
                : isTrialToPaid
                  ? '月680円で継続登録する'
                  : s.planSource === 'trial_expired'
                    ? '月額プランに登録する'
                    : '7日間無料で始める'}
          </button>
          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            {isTrialToPaid
              ? CHECKOUT_URL
                ? '決済ページで登録を完了できます'
                : 'Stripe継続課金の準備ができ次第、登録できるようになります'
              : s.planSource === 'trial_expired'
                ? CHECKOUT_URL
                  ? '決済ページで登録を完了できます'
                  : 'Stripe継続課金の準備ができ次第、登録できるようになります'
                : '開始後はLINEに戻って、リッチメニュー「もっと解く」から使えます'}
          </p>
        </section>
      </main>
    </div>
  );
}

function labelForSubject(subject: ApplicationSubject): string {
  return subject === 'history' ? '歴史' : '英語';
}
