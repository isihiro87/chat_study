import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';
import { trackEvent } from '../utils/gtag';

const LIFF_APPLY_URL = 'https://line.chatstudy.jp/liff/premium-apply';
const CONTACT_URL = 'https://line.chatstudy.jp/liff/contact';
const DEFAULT_LINE_FRIEND_URL = 'https://line.me/R/ti/p/@chatstudy';
const PROMO_PRICE_YEN = 680;
const REGULAR_PRICE_YEN = 980;
const CURRENT_SCOPE = '中1〜中3の歴史に対応';
const FUTURE_SCOPE = '対応教科は今後追加予定';

interface ComparisonRow {
  feature: string;
  free: string;
  premium: string;
  highlight?: boolean;
}

const COMPARISON: ComparisonRow[] = [
  { feature: '毎日1問配信', free: '○', premium: '○' },
  { feature: '連続記録の確認', free: '○', premium: '○' },
  { feature: '出題範囲設定', free: '○', premium: '○' },
  { feature: '追加で解く', free: '—', premium: '無制限', highlight: true },
  { feature: '苦手を復習', free: '—', premium: '誤答を優先出題', highlight: true },
  { feature: '暗記カード（じっくり学ぶ）', free: '—', premium: '無制限', highlight: true },
  { feature: '四択クイズ（じっくり学ぶ）', free: '—', premium: '無制限', highlight: true },
  { feature: '成績・記録', free: '簡易', premium: '詳細レポート', highlight: true },
];

interface Feature {
  icon: string;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: '🔥',
    title: '追加で解く（無制限）',
    body: 'やる気がある日は何問でも。1日1問では物足りない時、リッチメニューから何問でも追加で解けます。',
  },
  {
    icon: '🎯',
    title: '苦手を復習',
    body: '過去に間違えた問題が優先で出題。テスト前の弱点つぶしや、忘れたころの再チャレンジに。',
  },
  {
    icon: '📖',
    title: 'じっくり学ぶ',
    body: '暗記カードと四択クイズを LIFF 内で無制限に。スキマ時間の教科書代わりとして使えます。',
  },
  {
    icon: '📊',
    title: '詳細な成績レポート',
    body: '連続学習日数・正答率・教科ごとの進捗を毎日チェック。続いていることが目に見えてやる気アップ。',
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
    title: '下のボタンから申込みへ',
    body: 'ボタンをタップすると、LINE 内の申込みフォームが開きます。',
  },
  {
    num: 2,
    title: '7日間 無料トライアル開始',
    body: '申込み送信後すぐに「追加で解く」「苦手を復習」「じっくり学ぶ」が使えるようになります。',
  },
  {
    num: 3,
    title: '続ける場合は月額登録へ',
    body: '無料期間中に気に入ったら、月額プランの登録へ進みます。',
  },
  {
    num: 4,
    title: '合わなければ自動で無料に戻る',
    body: '本契約しなければ7日後に自動で無料プランへ戻ります。追加のお支払いは発生しません。',
  },
];

interface QA {
  q: string;
  a: string;
}

const FAQ: QA[] = [
  {
    q: '料金はいくらですか？',
    a: `今だけ月 ${PROMO_PRICE_YEN.toLocaleString()}円（通常 ${REGULAR_PRICE_YEN.toLocaleString()}円）です。今登録いただいた方は、対応教科が増えて通常価格に上がった後も、月 ${PROMO_PRICE_YEN.toLocaleString()}円のまま継続いただけます。`,
  },
  {
    q: '今使える範囲はどこまでですか？',
    a: `${CURRENT_SCOPE}しています。${FUTURE_SCOPE}で、追加後も今登録した方は月 ${PROMO_PRICE_YEN.toLocaleString()}円のまま使い続けられます。`,
  },
  {
    q: '解約はいつでもできますか？',
    a: 'はい、いつでも可能です。決済ページまたは公式LINE「設定・サポート」内のお問い合わせから手続きいただけます。次回更新日以降は無料プランに戻ります。',
  },
  {
    q: 'もし合わなかったら？',
    a: '7日間の無料トライアル中であれば、追加のお支払いは発生しません。何もしなければ自動で無料プランに戻りますので、お気軽にお試しください。',
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
    q: '解約後に再開できますか？',
    a: 'はい、いつでも再開可能です。ただし一度解約した後の再開時に、早期登録価格を継続できるかは決済・キャンペーン条件に従います。',
  },
  {
    q: '申込みの流れは？',
    a: 'ボタンから LINE の申込みフォームが開きます。お名前・学年などを入力して送信するだけで、その場で7日間のトライアルが始まります。',
  },
];

export function PremiumLandingPage() {
  const promo = usePremiumPromoCountdown();
  const lineFriendUrl =
    (import.meta.env.VITE_OFFICIAL_LINE_ADD_FRIEND_URL as string | undefined) ||
    DEFAULT_LINE_FRIEND_URL;

  useEffect(() => {
    const prev = document.title;
    document.title =
      'プレミアムプラン｜チャットでスタディ - 中学生の毎日学習を公式LINEで';
    return () => {
      document.title = prev;
    };
  }, []);

  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get('src');
    if (src) {
      trackEvent('premium_lp_view_source', src);
    }
  }, []);

  const handleCtaClick = (placement: 'hero' | 'comparison' | 'final') => {
    trackEvent('premium_lp_cta_click', placement);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-16">
      {/* Hero */}
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-10">
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
            className="text-2xl sm:text-3xl font-bold text-white text-center leading-snug"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            1日1問じゃ足りない人へ
            <br />
            もう一度始めたい人へ
          </h1>
          <p className="text-sm text-white/95 text-center mt-3 leading-relaxed">
            毎日1問の配信に加えて、追加で解ける・苦手を復習できる・暗記カードや四択クイズが無制限。
            <br />
            短時間で効率よく学べる仕組みです。
          </p>
          <a
            href={LIFF_APPLY_URL}
            onClick={() => handleCtaClick('hero')}
            className="mt-6 block w-full text-center bg-white text-amber-600 active:scale-[0.98] transition rounded-full py-3.5 text-sm font-bold shadow-sm"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            7日間無料でプレミアムを試す
          </a>
          <p className="text-xs text-white/90 text-center mt-2">
            申込みは LINE で1分。担当者とのやり取りなし
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {/* 料金カード */}
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
              <p className="text-xs text-gray-700 mt-2 leading-relaxed">
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
                <div className="rounded-xl bg-white/80 px-3 py-2 text-amber-700">
                  {FUTURE_SCOPE}
                </div>
              </div>
            </div>
          ) : promo.isExpired ? (
            <div className="px-5 py-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span
                  className="text-4xl font-bold text-gray-800"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  ¥{REGULAR_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-xs text-gray-600">/月（税込）</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                早期登録特典の期間は終了しました。通常価格でのご案内となります。
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-bold">
                <div className="rounded-xl bg-gray-50 px-3 py-2 text-gray-700">
                  {CURRENT_SCOPE}
                </div>
                <div className="rounded-xl bg-gray-50 px-3 py-2 text-gray-700">
                  {FUTURE_SCOPE}
                </div>
              </div>
            </div>
          ) : (
            <div className="px-5 py-5">
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
              <p className="text-xs text-gray-700 mt-2 leading-relaxed">
                今登録いただいた方は、今後教科が増えて価格が上がった後も月¥
                {PROMO_PRICE_YEN.toLocaleString()}のまま使い続けられます。
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-bold">
                <div className="rounded-xl bg-amber-50 px-3 py-2 text-gray-700">
                  {CURRENT_SCOPE}
                </div>
                <div className="rounded-xl bg-amber-50 px-3 py-2 text-amber-700">
                  {FUTURE_SCOPE}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 永続特典説明カード（isActive 時のみ） */}
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
              {PROMO_PRICE_YEN.toLocaleString()} のまま継続いただけます。
              対応教科は順次追加予定です。
            </p>
          </section>
        )}

        {/* プレミアム機能の紹介 */}
        <section className="mt-6">
          <h2
            className="text-lg font-bold text-gray-800 px-1 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            プレミアムでできること
          </h2>
          <ul className="space-y-3">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="bg-white rounded-2xl border border-gray-200 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none mt-0.5" aria-hidden>
                    {f.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-base font-bold text-gray-800"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {f.title}
                    </div>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 比較表 */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-3"
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
          <a
            href={LIFF_APPLY_URL}
            onClick={() => handleCtaClick('comparison')}
            className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            7日間無料で始める
          </a>
          <p className="text-xs text-gray-500 text-center mt-2">
            今登録すると、今後も月{PROMO_PRICE_YEN.toLocaleString()}円のまま
          </p>
        </section>

        {/* トライアルの流れ */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-3"
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

        {/* FAQ */}
        <section className="mt-6">
          <h2
            className="text-lg font-bold text-gray-800 px-1 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            よくある質問
          </h2>
          <ul className="space-y-2">
            {FAQ.map((qa, idx) => (
              <li
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 px-4 py-3"
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

        {/* 最終 CTA */}
        <section className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p
            className="text-base font-bold text-gray-800 text-center leading-relaxed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            今だけ月¥{PROMO_PRICE_YEN.toLocaleString()}、
            <br />
            まずは7日間無料で試せます
          </p>
          <p className="text-xs text-gray-600 text-center mt-2 leading-relaxed">
            申込みは LINE で1分。本契約しなければ自動で無料プランに戻ります。
          </p>
          <a
            href={LIFF_APPLY_URL}
            onClick={() => handleCtaClick('final')}
            className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3.5 text-sm font-bold text-white"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            7日間無料で始める
          </a>
        </section>

        {/* 運営者 */}
        <section className="mt-8 bg-white rounded-2xl border border-gray-200 p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            運営者
          </h2>
          <dl className="text-sm text-gray-700 space-y-2 leading-relaxed">
            <div className="flex gap-2">
              <dt className="w-20 flex-shrink-0 text-gray-500">サービス名</dt>
              <dd className="flex-1">チャットでスタディ</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 flex-shrink-0 text-gray-500">運営</dt>
              <dd className="flex-1">チャットでスタディ運営事務局</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 flex-shrink-0 text-gray-500">連絡先</dt>
              <dd className="flex-1">
                <a
                  href={CONTACT_URL}
                  className="text-amber-700 underline"
                >
                  お問い合わせフォーム
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={CONTACT_URL}
              className="block text-center bg-white border-2 border-gray-200 active:scale-[0.98] transition rounded-full py-2.5 text-sm font-bold text-gray-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              お問い合わせ
            </a>
            <a
              href={lineFriendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white border-2 border-amber-300 active:scale-[0.98] transition rounded-full py-2.5 text-sm font-bold text-amber-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              公式LINEを友だち追加
            </a>
          </div>
        </section>

        {/* footer links */}
        <div className="mt-6 text-center space-x-4">
          <Link to="/terms" className="text-xs text-gray-500 underline">
            利用規約
          </Link>
          <Link to="/privacy" className="text-xs text-gray-500 underline">
            プライバシーポリシー
          </Link>
          <Link to="/for-parents" className="text-xs text-gray-500 underline">
            保護者の方へ
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
          チャットでスタディ
        </p>
      </main>
    </div>
  );
}
