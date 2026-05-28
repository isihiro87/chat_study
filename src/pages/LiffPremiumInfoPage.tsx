import { useEffect, useMemo, useState } from 'react';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';
import { logFunnelEvent } from '../utils/funnelEvent';
import { useAuth } from '../contexts/AuthContext';

type PageState =
  | 'loading'
  | 'free'          // free + trial 未経験。「まずは 1問、解いてみよう」訴求
  | 'trial_active'  // plan=premium && planSource=trial。「これからも使い続ける」訴求
  | 'trial_expired' // planSource=trial_expired。「もう一度はじめる」訴求
  | 'already_premium'; // paid 契約済み

// お問い合わせは LIFF Contact ページ（line.chatstudy.jp/liff/contact）に集約。
// 旧 www.chatstudy.jp/contact は Web 版に当該ルートがなく 404 になる。
const LIFF_ID_CONTACT = import.meta.env.VITE_LIFF_ID_CONTACT as string | undefined;
const CONTACT_URL = LIFF_ID_CONTACT
  ? `https://liff.line.me/${LIFF_ID_CONTACT}`
  : 'https://line.chatstudy.jp/liff/contact';
const APPLY_PATH = '/liff/premium-apply';
const PARENTS_LP_URL = 'https://www.chatstudy.jp/for-parents';
const PROMO_PRICE_YEN = 680;
const REGULAR_PRICE_YEN = 980;
const CURRENT_SCOPE = '現在は中1・中2の歴史に対応';
const FUTURE_SCOPE = '対応教科は今後追加予定';

interface ComparisonRow {
  feature: string;
  free: string;
  premium: string;
  highlight?: boolean;
}

const COMPARISON: ComparisonRow[] = [
  {
    feature: '毎日1問配信',
    free: '○',
    premium: '○',
  },
  {
    feature: '連続記録の確認',
    free: '○',
    premium: '○',
  },
  {
    feature: '出題範囲設定',
    free: '○',
    premium: '○',
  },
  {
    feature: '追加で解く',
    free: '—',
    premium: '無制限',
    highlight: true,
  },
  {
    feature: '苦手を復習',
    free: '—',
    premium: '誤答を優先出題',
    highlight: true,
  },
  {
    feature: '暗記カード（じっくり学ぶ）',
    free: '—',
    premium: '無制限',
    highlight: true,
  },
  {
    feature: '四択クイズ（じっくり学ぶ）',
    free: '—',
    premium: '無制限',
    highlight: true,
  },
  {
    feature: '対応範囲',
    free: '毎日1問',
    premium: '無制限',
    highlight: true,
  },
  {
    feature: '成績・記録',
    free: '簡易',
    premium: '詳細レポート',
    highlight: true,
  },
];

interface Step {
  num: number;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    num: 1,
    title: '7日間無料で始める',
    body: 'このページの下のボタンから、ワンタップで無料トライアルを開始できます',
  },
  {
    num: 2,
    title: '7日間 無料トライアル開始',
    body: '送信後すぐに「追加で解く」「苦手を復習」が使えるようになります（自動で開放）',
  },
  {
    num: 3,
    title: '続ける場合は月額登録へ',
    body: '無料期間中に気に入ったら、月額プランの登録へ進めます',
  },
  {
    num: 4,
    title: '合わなければ自動で無料に戻る',
    body: '本契約しなければ7日後に無料プランへ戻ります',
  },
];

interface QA {
  q: string;
  a: string;
}

const FAQ: QA[] = [
  {
    q: '料金はいくらですか？',
    a: `今だけ月 ${PROMO_PRICE_YEN.toLocaleString()}円です。今登録いただいた方は、今後教科が増えて価格が上がった後も月 ${PROMO_PRICE_YEN.toLocaleString()}円のまま継続いただけます。`,
  },
  {
    q: '今使える範囲はどこまでですか？',
    a: `${CURRENT_SCOPE}しています。${FUTURE_SCOPE}で、追加後も今登録した方は月 ${PROMO_PRICE_YEN.toLocaleString()}円のまま使い続けられます。`,
  },
  {
    q: '解約はいつでもできますか？',
    a: 'はい、いつでも可能です。決済ページまたは案内された管理画面から手続きできます。次回更新日以降は無料プランに戻ります。',
  },
  {
    q: 'もし子どもに合わなかったら？',
    a: '7日間の無料トライアル中であれば、追加のお支払いは発生しません。何もしなければ自動で無料プランに戻ります。',
  },
  {
    q: '兄弟・家族で使えますか？',
    a: '公式LINEは1ユーザー単位の契約となるため、お子さま1人につき1アカウントでのご利用をお願いしています。',
  },
  {
    q: '領収書／請求書は発行できますか？',
    a: '可能です。お問い合わせフォーム、または公式LINE「設定・サポート」から、宛名と必要事項をお知らせください。',
  },
  {
    q: '子どもがどれだけ進めているか親が確認できますか？',
    a: '公式LINEのリッチメニュー「成績・記録」から、連続学習日数・解いた問題数・正答率がいつでも確認できます。お子さまの LINE 画面を一緒に見ていただく形になります。',
  },
  {
    q: '解約後に再開できますか？',
    a: 'はい、いつでも再開可能です。ただし一度解約した後の再開時に、早期登録価格を継続できるかは決済・キャンペーン条件に従います。',
  },
];

export function LiffPremiumInfoPage() {
  const promo = usePremiumPromoCountdown();
  const { user, userDoc, userDocLoaded } = useAuth();
  const [shareSucceeded, setShareSucceeded] = useState(false);
  const [shareAvailable, setShareAvailable] = useState(false);

  // ユーザー状態に応じて主CTA と訴求トーンを切替える。
  // - trial 中           → 「これからも使い続ける」
  // - trial 切れ         → 「もう一度はじめる」
  // - paid 契約済み      → CTA 出さず
  // - free（trial 未経験）→ 「LINE トークから 1問解こう」案内
  const pageState: PageState = useMemo(() => {
    if (!userDocLoaded) return 'loading';
    if (!userDoc) return 'free';
    const plan = userDoc.plan;
    const planSource = userDoc.planSource;
    if (plan === 'premium' && planSource === 'trial') return 'trial_active';
    if (plan === 'premium') return 'already_premium';
    if (planSource === 'trial_expired') return 'trial_expired';
    return 'free';
  }, [userDoc, userDocLoaded]);

  const handleBackToLine = async () => {
    try {
      const liff = (await import('@line/liff')).default;
      if (typeof liff.closeWindow === 'function') {
        liff.closeWindow();
        return;
      }
    } catch (err) {
      console.warn('[LiffPremiumInfoPage] closeWindow failed', err);
    }
    window.location.href = 'https://line.me/R/';
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const liffId = import.meta.env.VITE_LIFF_ID_PREMIUM_INFO as
        | string
        | undefined;
      if (!liffId) return;
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
        if (cancelled) return;
        const available =
          typeof liff.isApiAvailable === 'function' &&
          liff.isApiAvailable('shareTargetPicker');
        setShareAvailable(available);
      } catch (err) {
        console.warn('[LiffPremiumInfoPage] liff.init failed', err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // 計測: ユーザー認証が確立したタイミングで一度だけ閲覧イベントを記録する
  useEffect(() => {
    if (!user) return;
    const source = new URLSearchParams(window.location.search).get('src');
    void logFunnelEvent('liff_premium_info_view', {
      source: source ?? 'direct',
    });
  }, [user]);

  const handleShare = async () => {
    try {
      const liff = (await import('@line/liff')).default;
      const message =
        `📚 チャットでスタディ プレミアムのご案内です\n\n` +
        `中学生の毎日の学習を、公式LINEで1問ずつコツコツ続けるサービスです。` +
        `7日間の無料トライアルあり。\n\n` +
        `▼保護者向けの詳細はこちら\n${PARENTS_LP_URL}`;
      await liff.shareTargetPicker([{ type: 'text', text: message }]);
      setShareSucceeded(true);
    } catch (err) {
      console.warn('[LiffPremiumInfoPage] shareTargetPicker failed', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EE] pb-12">
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-7">
          <div className="flex justify-center gap-2 mb-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-amber-700">
              7日間無料
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-amber-700">
              今だけ月{PROMO_PRICE_YEN.toLocaleString()}円
              <span className="ml-1 text-gray-400 line-through font-normal">
                ¥{REGULAR_PRICE_YEN.toLocaleString()}
              </span>
            </span>
          </div>
          <h1
            className="text-2xl font-bold text-white text-center leading-snug"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            1日1問といわず、
            <br />
            もっと解きたい人へ
          </h1>
          <p className="text-sm text-white/95 text-center mt-3 leading-relaxed">
            毎日1問の配信に加えて、暗記カードと四択クイズが無制限。短時間で効率よく学べる仕組みです。
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {/* 価格バナー */}
        <section className="-mt-3 bg-white rounded-2xl shadow-sm overflow-hidden border border-amber-100">
          {promo.isActive ? (
            <div className="bg-amber-50 px-5 py-5">
              <p
                className="text-sm font-bold text-amber-700 mb-1"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                今すぐ登録した方限定
              </p>
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
              <p
                className="text-xs font-bold text-amber-700 mt-1.5"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                ⏰ 特典終了まで残り{promo.daysRemaining}日
                {promo.daysRemaining === 0 && promo.hoursRemaining > 0
                  ? `${promo.hoursRemaining}時間`
                  : ''}
              </p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                今登録いただいた方は、今後教科が増えて価格が上がった後も
                <span className="font-bold text-amber-700">
                  月¥{PROMO_PRICE_YEN.toLocaleString()}
                </span>
                のまま使い続けられます。
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-bold">
                <div className="rounded-xl bg-white/80 px-3 py-2 text-gray-700">
                  {CURRENT_SCOPE}
                </div>
                <div className="rounded-xl bg-white/80 px-3 py-2 text-sky-700">
                  {FUTURE_SCOPE}
                </div>
              </div>
            </div>
          ) : promo.isExpired ? (
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
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                今登録いただいた方は、今後教科が増えて価格が上がった後も月¥
                {PROMO_PRICE_YEN.toLocaleString()}のまま使い続けられます。
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
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                今登録いただいた方は、今後教科が増えて価格が上がった後も月¥
                {PROMO_PRICE_YEN.toLocaleString()}のまま使い続けられます。
              </p>
            </div>
          )}
        </section>

        {/* 永続特典説明カード */}
        {promo.isActive && (
          <section className="mt-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
            <p
              className="text-sm font-bold text-amber-800 leading-relaxed"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              💡 アーリーアダプター特典
            </p>
            <p className="text-xs text-amber-800 mt-1 leading-relaxed">
              特典期間に登録すれば、対応教科が増えて価格が上がった後も、月 ¥
              {PROMO_PRICE_YEN.toLocaleString()}{' '}
              のまま継続いただけます。対応教科は順次追加予定です。
            </p>
          </section>
        )}

        {/* 比較表 */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-sm font-bold text-gray-700 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            無料 vs プレミアム
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <div className="grid grid-cols-[1fr_auto_auto] text-xs">
              <div className="bg-gray-50 px-3 py-2 font-bold text-gray-700">
                機能
              </div>
              <div className="bg-gray-50 px-3 py-2 font-bold text-gray-700 text-center min-w-[60px]">
                無料
              </div>
              <div className="bg-amber-50 px-3 py-2 font-bold text-amber-700 text-center min-w-[90px]">
                プレミアム
              </div>
              {COMPARISON.map((row, idx) => (
                <div key={row.feature} className="contents">
                  <div
                    className={`px-3 py-2 text-gray-700 ${
                      idx % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    {row.feature}
                  </div>
                  <div
                    className={`px-3 py-2 text-center text-gray-500 ${
                      idx % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    {row.free}
                  </div>
                  <div
                    className={`px-3 py-2 text-center ${
                      row.highlight
                        ? 'text-amber-700 font-bold'
                        : 'text-gray-700'
                    } ${idx % 2 === 1 ? 'bg-amber-50/30' : 'bg-amber-50/10'}`}
                  >
                    {row.premium}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {pageState === 'already_premium' ? (
            <p className="mt-4 text-center text-xs text-amber-700 font-bold">
              ✨ プレミアム会員ありがとうございます
            </p>
          ) : pageState === 'free' || pageState === 'loading' ? (
            <>
              <button
                type="button"
                onClick={() => void handleBackToLine()}
                className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white shadow-sm"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                まずは1問、LINEで解いてみる
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                1問解くと、これらの機能が自動で7日間ひらきます
              </p>
            </>
          ) : (
            <>
              <a
                href={APPLY_PATH}
                className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white shadow-sm"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {pageState === 'trial_active'
                  ? 'これからも使い続ける'
                  : 'もう一度はじめる'}
              </a>
              <p className="text-xs text-gray-500 text-center mt-2">
                {pageState === 'trial_active'
                  ? `7日後もこのまま月${PROMO_PRICE_YEN.toLocaleString()}円で続けられます`
                  : '次の画面で決済情報を入力します'}
              </p>
            </>
          )}
        </section>

        {/* トライアル開始から継続までの流れ */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-sm font-bold text-gray-700 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            無料トライアル開始から継続まで
          </h2>
          <ol className="space-y-3">
            {STEPS.map((step) => (
              <li key={step.num} className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-sm font-bold text-gray-800"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    {step.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 保護者へ共有 */}
        {shareAvailable && (
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
            <h2
              className="text-sm font-bold text-gray-700 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              📱 保護者にこのページを共有
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              申込の前に保護者の方とご相談ください。
              <br />
              保護者向けの詳しい説明ページを LINE で送れます。
            </p>
            <button
              type="button"
              onClick={() => void handleShare()}
              className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-2.5 text-sm font-bold text-white"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              LINE で保護者に送る
            </button>
            {shareSucceeded && (
              <p className="text-xs text-amber-700 mt-2 text-center">
                送信しました ✓
              </p>
            )}
          </section>
        )}

        {/* FAQ */}
        <section className="mt-4">
          <h2
            className="text-sm font-bold text-gray-700 px-1 mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            よくある質問
          </h2>
          <ul className="space-y-2">
            {FAQ.map((qa, idx) => (
              <li
                key={idx}
                className="bg-white rounded-2xl shadow-sm px-4 py-3"
              >
                <div
                  className="text-sm font-bold text-gray-800 mb-1"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  Q. {qa.q}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  A. {qa.a}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 主CTA: 状態別に出し分け */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          {pageState === 'already_premium' ? (
            <p className="text-sm text-amber-700 text-center font-bold">
              ✨ プレミアム会員ありがとうございます
            </p>
          ) : pageState === 'free' || pageState === 'loading' ? (
            <>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                まだ1問解いていない方は、まずトークから
                <br />
                <span className="font-bold text-amber-700">1問解くと、機能が自動でひらきます</span>
              </p>
              <button
                type="button"
                onClick={() => void handleBackToLine()}
                className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                LINEに戻って1問解く
              </button>
              <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
                カード登録なし、7日後にそのまま自動で戻ります
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                {pageState === 'trial_active' ? (
                  <>
                    今、<span className="font-bold text-amber-700">7日間お試し中</span>です
                    <br />
                    これからも続けるならこちらから
                  </>
                ) : (
                  <>
                    お試し期間は終了しています
                    <br />
                    <span className="font-bold text-amber-700">
                      月{PROMO_PRICE_YEN.toLocaleString()}円
                    </span>
                    で再開できます
                  </>
                )}
              </p>
              <a
                href={APPLY_PATH}
                className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {pageState === 'trial_active'
                  ? 'これからも使い続ける'
                  : 'もう一度はじめる'}
              </a>
              <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
                次の画面で決済情報を入力します。いつでも解約できます。
              </p>
            </>
          )}
        </section>

        {/* 補助: 相談だけしたい場合 */}
        <section className="mt-3 text-center">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 underline"
          >
            申込以外で相談したい場合はこちら
          </a>
        </section>

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          チャットでスタディ
        </p>
      </main>
    </div>
  );
}
