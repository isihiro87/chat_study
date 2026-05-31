import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { logFunnelEvent } from '../utils/funnelEvent';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';
import {
  type ApplicationGrade,
  type ApplicationPreferredHour,
  type ApplicationSubject,
  type PremiumApplicationSource,
} from '../types/premium';

/** URL の ?src=... から受け取る Source。値が一致しなければ undefined。 */
const VALID_SOURCES: PremiumApplicationSource[] = [
  'trial-day0',
  'trial-day1',
  'trial-day3',
  'trial-day6',
  'trial-day7-morning',
  'trial-day7-evening',
  'trial-day7-night',
  'post-trial-day8',
  'post-trial-day15',
  'post-trial-day30',
  'winback-day7',
  'winback-day14',
  'first-answer',
  'milestone',
  'other',
];

function parseSourceParam(value: string | null): PremiumApplicationSource {
  if (!value) return 'other';
  return (VALID_SOURCES as readonly string[]).includes(value)
    ? (value as PremiumApplicationSource)
    : 'other';
}

type Plan = 'free' | 'premium';
type Status =
  | 'loading'
  // free + trial 未経験。フォームを出さず「まず1問解いてみよう」案内に倒す。
  | 'no_trial_yet'
  // trial 中 / trial 切れ。「これからも使い続ける」フォーム → Stripe Checkout 起動。
  | 'ready'
  | 'already_premium'
  | 'submitting'
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
const REGULAR_PRICE_YEN = 980;
const CHECKOUT_FN_URL = import.meta.env.VITE_PREMIUM_CHECKOUT_FN_URL as
  | string
  | undefined;

const HOUR_LABELS: Record<number, string> = {
  6: '朝6時',
  7: '朝7時',
  16: '夕方4時',
  18: '夕方6時',
  19: '夕方7時',
  20: '夜8時',
};

interface CheckoutSessionResponse {
  url?: string;
  error?: string;
}

function buildCheckoutReturnUrl(result: 'success' | 'cancel'): string {
  const url = new URL('/liff/premium-apply', window.location.origin);
  url.searchParams.set('checkout', result);
  return url.toString();
}

/**
 * LIFF プレミアム登録（継続申込）ページ。
 *
 * 認証必須。Firebase Auth 確立後、users/{uid} を読んで plan / planSource を確認:
 * - plan='premium' && planSource='trial'    → 'ready'（「これからも使い続ける」CTA → Stripe Checkout）
 * - plan='premium' && planSource≠'trial'    → 'already_premium'（paid 契約済み）
 * - planSource='trial_expired'              → 'ready'（「もう一度はじめる」CTA → Stripe Checkout）
 * - それ以外（free + trial 未経験）          → 'no_trial_yet'（「まず1問解いてみよう」案内）
 *
 * Phase 4 以降、フォーム送信は trial 中 / 切れユーザーの Stripe Checkout 起動専用。
 * 旧 free → premiumApplications 経路は撤去済み（Phase 1+2 の 1問目自動 trial と二重路を回避）。
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

  // URL param: ?parent=true → 保護者経由フラグ、?src=... → 申込経路
  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const isParentInitiated = urlParams.get('parent') === 'true';
  const applicationSource = useMemo(
    () => parseSourceParam(urlParams.get('src')),
    [urlParams]
  );

  // 計測: 認証確立後に1回だけ閲覧イベントを記録 + 離脱検知用に開始時刻を Firestore に書き込む
  useEffect(() => {
    if (!user) return;
    void logFunnelEvent('liff_premium_apply_view', {
      source: applicationSource,
      parent: isParentInitiated,
    });

    // 申込フォーム途中離脱フォローアップ（D-13）用に premiumApplicationStartedAt を記録。
    // trialFormAbandonReminder cron が 24h 後に未 submit ユーザーを抽出して push する。
    // 既に申込済みのユーザーは onPremiumApplicationCreated 側で plan が premium になるため、
    // ここで重複書き込みしても問題ない（最新時刻に更新される）。
    void setDoc(
      doc(db, 'users', user.uid),
      {
        premiumApplicationStartedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    ).catch((err) => {
      console.warn(
        '[LiffPremiumApplyPage] premiumApplicationStartedAt 記録失敗:',
        err
      );
    });
  }, [user, applicationSource, isParentInitiated]);

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
    // 4 状態に分岐:
    //  - plan='premium' && planSource='trial' → trial 中。「これからも使い続ける」UI（Stripe Checkout）
    //  - plan='premium' && planSource≠'trial' → paid 契約済み。「すでにプレミアム」
    //  - planSource='trial_expired'            → trial 切れ。「再開する」UI（Stripe Checkout）
    //  - それ以外（free + 未経験）              → 'no_trial_yet'。「まず1問解いてみよう」案内
    // Phase 4 で旧 free→premiumApplications 経路は撤去（1問目自動 trial と二重路を回避）。
    if (plan === 'premium' && planSource === 'trial') {
      setStatus('ready');
    } else if (plan === 'premium') {
      setStatus('already_premium');
    } else if (planSource === 'trial_expired') {
      setStatus('ready');
    } else {
      setStatus('no_trial_yet');
    }
  }, [user, loading, userDoc, userDocLoaded]);

  const canSubmit = useMemo(() => {
    if (status !== 'ready') return false;
    if (!profile) return false;
    // Phase 4 以降、ready は trial 中 / 切れのみで成立。両方とも常に submit 可能。
    return (
      profile.planSource === 'trial' ||
      profile.planSource === 'trial_expired'
    );
  }, [profile, status]);

  const handleSubmit = async () => {
    if (!user || !profile) return;
    const isTrialToPaid = profile.planSource === 'trial';
    const isTrialExpired = profile.planSource === 'trial_expired';
    if (!isTrialToPaid && !isTrialExpired) {
      // Phase 4 以降、ready 状態は trial 中 / 切れのみ。
      // 念のためのガード。
      console.error(
        '[LiffPremiumApplyPage] unexpected submit state',
        profile
      );
      setErrorMessage(
        '内部エラーが発生しました。しばらくしてからもう一度お試しください。'
      );
      return;
    }
    if (!CHECKOUT_FN_URL) {
      setErrorMessage(
        '決済ページの準備中です。しばらくしてからもう一度お試しください。'
      );
      return;
    }
    setStatus('submitting');
    setErrorMessage(null);
    try {
      const idToken = await user.getIdToken();
      const response = await fetch(CHECKOUT_FN_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          successUrl: buildCheckoutReturnUrl('success'),
          cancelUrl: buildCheckoutReturnUrl('cancel'),
        }),
      });
      const data = (await response.json()) as CheckoutSessionResponse;
      if (!response.ok || !data.url) {
        throw new Error(data.error || 'checkout_session_failed');
      }
      void logFunnelEvent('liff_premium_apply_submit', {
        applicationType: isTrialToPaid ? 'paid_subscribe' : 'paid_resume',
        source: applicationSource,
        parent: isParentInitiated,
      });
      window.location.href = data.url;
      return;
    } catch (err) {
      console.error('[LiffPremiumApplyPage] checkout failed', err);
      setErrorMessage(
        '決済ページを開けませんでした。通信状況を確認のうえ、もう一度お試しください。'
      );
      setStatus('ready');
      return;
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

  if (status === 'no_trial_yet') {
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
      <div className="min-h-screen bg-[#FFF9EE] pb-12">
        <header className="bg-amber-500">
          <div className="max-w-2xl mx-auto px-4 py-7 text-center">
            <h1
              className="text-2xl font-bold text-white leading-snug"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              📚 まずは1問、
              <br />
              解いてみよう
            </h1>
            <p className="text-sm text-white/95 mt-3 leading-relaxed">
              1問解くと、追加問題・暗記カード・四択クイズが
              <br />
              そのまま7日間使えるようになります。
            </p>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4">
          <section className="-mt-3 bg-white rounded-2xl shadow-sm p-5 border border-amber-100">
            <p
              className="text-sm font-bold text-amber-800 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ✨ ノーリスク・カード登録なし
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              公式LINEのトークから1問解いた直後に、機能が自動で7日間ひらきます。
              <br />
              7日後はそのまま自動で元に戻るので、安心してお試しください。
            </p>
          </section>
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
            <p
              className="text-sm font-bold text-gray-800 mb-3"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              次にやること
            </p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="leading-relaxed">下のボタンでLINEのトークに戻る</span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="leading-relaxed">
                  毎日1問が届くまで待つ、または「もっと解く」を押してすぐ1問解く
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="leading-relaxed">
                  1問解いた直後から、7日間お試しが自動でスタート！
                </span>
              </li>
            </ol>
            <button
              type="button"
              onClick={() => void handleBackToLine()}
              className="mt-5 w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              LINEに戻る
            </button>
          </section>
          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            学年や教科がまだ未設定の場合は、トーク内の案内に従って設定してください。
          </p>
        </main>
      </div>
    );
  }

  // Phase 4 以降、ready 状態は trial 中 / 切れのみ。submit → Stripe Checkout に
  // window.location.href で遷移するため、'submitted' 状態には到達しない。
  const s = profile!;
  const submitting = status === 'submitting';
  const isTrialToPaid = s.planSource === 'trial';
  const isTrialExpired = s.planSource === 'trial_expired';

  return (
    <div className="min-h-screen bg-[#FFF9EE] pb-12">
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {isParentInitiated && (
            <div className="mb-2 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white">
              保護者の方からの申込
            </div>
          )}
          <h1
            className="text-2xl font-bold text-white text-center leading-snug"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {isTrialToPaid
              ? '✨ これからも使い続ける'
              : '✨ もう一度はじめる'}
          </h1>
          <p className="text-xs text-white/90 text-center mt-1">
            {isTrialToPaid
              ? '7日間使ってみて気に入ったら、このまま使い続けられます'
              : 'いつでも再開できます。よかったらこのまま続けてください'}
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 space-y-4 -mt-2">
        {/* 価格再確認カード */}
        <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-amber-100">
          {promo.isActive ? (
            <div className="bg-amber-50 px-5 py-4">
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
                <span className="text-xs text-gray-400 line-through">
                  通常 ¥{REGULAR_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-xs text-gray-600">/月（税込）</span>
              </div>
              <p className="text-xs text-amber-700 mt-1 font-bold">
                ⏰ 特典終了まで残り{promo.daysRemaining}日 /
                今登録すると今後も680円のまま
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                7日間無料でプレミアムプランを試して、続ける場合だけStripeの月額登録に進みます。
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
                <span className="text-xs text-gray-400 line-through">
                  通常 ¥{REGULAR_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-xs text-gray-600">/月（税込）</span>
              </div>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                今登録すると、今後教科が増えて価格が上がった後も680円のまま使い続けられます。
              </p>
            </div>
          )}
        </section>

        {/* trial 中向け補足 */}
        {isTrialToPaid && (
          <section className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
            <p
              className="text-sm font-bold text-amber-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              今、7日間お試し中です
            </p>
            <p className="text-xs text-amber-800 mt-1 leading-relaxed">
              {CHECKOUT_FN_URL
                ? 'お試し期間が終わってからこのまま続けるなら、ここから手続きできます。お試し中に二重で課金されることはありません。'
                : '継続登録の準備中です。準備ができ次第、こちらから手続きできるようになります。'}
            </p>
          </section>
        )}

        {isTrialExpired && (
          <section className="bg-white rounded-2xl shadow-sm px-4 py-3">
            <p
              className="text-sm font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              お試し期間は終了しています
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              {CHECKOUT_FN_URL
                ? 'もう一度はじめる場合は、こちらから手続きできます。'
                : '継続登録の準備中です。準備ができ次第、こちらから手続きできるようになります。'}
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
                {s.preferredHour
                  ? (HOUR_LABELS[s.preferredHour] ?? `${s.preferredHour}時`)
                  : '未設定'}
              </dd>
            </div>
          </dl>
        </section>

        {errorMessage && (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        )}

        {/* 送信ボタン */}
        <section>
          <p className="text-xs text-gray-500 text-center mb-3 leading-relaxed">
            「{isTrialToPaid ? 'これからも使い続ける' : 'もう一度はじめる'}」を押すと、
            <a
              href="https://www.chatstudy.jp/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline"
            >
              利用規約
            </a>
            ・
            <a
              href="https://www.chatstudy.jp/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline"
            >
              プライバシーポリシー
            </a>
            ・
            <a
              href="https://www.chatstudy.jp/legal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline"
            >
              特定商取引法に基づく表記
            </a>
            に同意したものとみなします。
          </p>
          <button
            type="button"
            onClick={() => void handleSubmit()}
            disabled={!canSubmit || submitting || !CHECKOUT_FN_URL}
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {submitting
              ? '送信中...'
              : !CHECKOUT_FN_URL
                ? '継続登録の受付準備中'
                : isTrialToPaid
                  ? 'これからも使い続ける'
                  : 'もう一度はじめる'}
          </button>
          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            {CHECKOUT_FN_URL
              ? '次の画面で決済情報を入力します。いつでも解約できます。'
              : '継続登録の準備ができ次第、こちらから手続きできるようになります。'}
          </p>
        </section>
      </main>
    </div>
  );
}

function labelForSubject(subject: ApplicationSubject): string {
  return subject === 'history' ? '歴史' : '英語';
}
