import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';
import { trackEvent } from '../utils/gtag';
import { useAuth } from '../contexts/AuthContext';

const LIFF_APPLY_URL = 'https://line.chatstudy.jp/liff/premium-apply';
const CONTACT_URL = 'https://line.chatstudy.jp/liff/contact';
const DEFAULT_LINE_FRIEND_URL = 'https://line.me/R/ti/p/@chatstudy';
const PROMO_PRICE_YEN = 680;
const REGULAR_PRICE_YEN = 980;

// 画像 placeholder のパス。public/images/premium-lp/ 配下に配置すれば自動表示。
// 画像が無い間は ImageFrame の alt + 背景色で表示される。
const IMG_HERO = '/images/premium-lp/hero.png';
const IMG_SOLUTION_1 = '/images/premium-lp/solution-1-morning.png';
const IMG_SOLUTION_2 = '/images/premium-lp/solution-2-onequestion.png';
const IMG_SOLUTION_3 = '/images/premium-lp/solution-3-weakness.png';
const IMG_SOLUTION_4 = '/images/premium-lp/solution-4-extra.png';
const IMG_PHONE_MOCKUP = '/images/premium-lp/phone-mockup.png';

interface PainPoint {
  text: string;
}

const PAIN_POINTS: PainPoint[] = [
  { text: '教科書開く前に、スマホ見ちゃう' },
  { text: '勉強しなきゃ、は分かってる。けど続かない' },
  { text: 'テスト前だけ詰め込んで、すぐ忘れる' },
  { text: '塾に行くほどじゃない、けど何もしないのは不安' },
];

interface Solution {
  num: number;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

const SOLUTIONS: Solution[] = [
  {
    num: 1,
    title: '毎日 LINE が来るから、考えなくていい',
    body: '朝7時、夕方4時、夜8時 — 自分の好きな時間にLINEへ1問が届く。「やらなきゃ」じゃなくて「届いたから開く」、それだけ。',
    image: IMG_SOLUTION_1,
    imageAlt: '朝の光の中、スマホのLINE通知に今日のクイズが届いた様子',
  },
  {
    num: 2,
    title: '1問だけ。だから続けられる',
    body: '「1問だけ解けばいい」と思えば、机に向かう気持ちが楽。30秒で終わって、また明日。それが積み重なって、テスト範囲を全部覆う。',
    image: IMG_SOLUTION_2,
    imageAlt: 'スマホ画面に4択クイズが1問だけ表示されている、シンプルな画面',
  },
  {
    num: 3,
    title: '苦手だけ、もう一度',
    body: '間違えた問題は忘れたころにまた出てくる。「分かったつもり」をなくして、本当に覚える。テスト直前、苦手だけ集中して潰せる。',
    image: IMG_SOLUTION_3,
    imageAlt: '過去に間違えた問題が再出題されている画面',
  },
  {
    num: 4,
    title: 'やる気のある日は、好きなだけ',
    body: 'やる気が乗った日は、リッチメニューから何問でも追加で解ける。テスト直前、まとめて解ける。テスト範囲も指定できる。',
    image: IMG_SOLUTION_4,
    imageAlt: 'リッチメニューの「もっと解く」を押してクイズが追加されている様子',
  },
];

interface Objection {
  q: string;
  a: string;
}

const OBJECTIONS: Objection[] = [
  {
    q: 'スマホで勉強って、本当に続く？',
    a: '続かないように作ったらこのサービスは終わりです。だから「1問だけ」「好きな時間」「LINEで自然に」という形にしました。7日間で続かないと感じたら、何もしなくていい。料金は発生しません。',
  },
  {
    q: '月¥680、高くないですか？',
    a: '塾の体験授業1回分以下。スタバ2杯分以下。それで毎日30日間使えて、解約はいつでも可能。今登録すれば、対応教科が増えて通常価格(¥980)になっても、月¥680のまま使い続けられます。',
  },
  {
    q: 'うちの子に合うか不安',
    a: '7日間、完全無料で試せます。クレジットカードの登録もありません。合わなかったら何もしなくていい — 自動で無料プランに戻ります。追加のお支払いは絶対に発生しません。',
  },
  {
    q: '解約が面倒くさそう',
    a: 'いいえ。リッチメニュー「設定・サポート」→ お問い合わせから連絡1回で完了します。次の更新日以降は無料プランに戻ります。引き止めなどはしません。',
  },
  {
    q: '保護者の同意なしで使える？',
    a: '中学生向けサービスのため、申込時に「保護者と確認しました」のチェックを必須にしています。保護者向けの詳しい説明ページもご用意しています。',
  },
];

interface QA {
  q: string;
  a: string;
}

const FAQ: QA[] = [
  {
    q: '今使える教科はどこまでですか？',
    a: '中1〜中3の歴史に対応しています。対応教科は今後追加予定です。今登録した方は、教科が増えて価格が上がった後も月 ¥680 のまま使い続けられます。',
  },
  {
    q: '7日間トライアル後、自動で課金されますか？',
    a: 'いいえ。トライアル中にクレジットカード登録はしません。継続したい場合のみ、ご自身でStripeの月額登録に進んでいただきます。何もしなければ自動で無料プランに戻ります。',
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
    q: '一度解約した後、再開できますか？',
    a: 'はい、いつでも再開可能です。ただし再開時に早期登録価格(¥680)を継続できるかは、その時点のキャンペーン条件に従います。',
  },
  {
    q: '中学生本人が登録できますか？',
    a: '可能です。ただし保護者の方と相談してから登録するようお願いしています。申込時に「保護者と確認しました」のチェック必須です。',
  },
];

// 画像 placeholder フレーム。画像が無い間も alt + 背景色でデザインを維持する。
function ImageFrame({
  src,
  alt,
  aspect,
  className = '',
}: {
  src: string;
  alt: string;
  aspect: 'hero' | 'portrait' | 'phone';
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const aspectClass =
    aspect === 'hero'
      ? 'aspect-[3/2]'
      : aspect === 'phone'
        ? 'aspect-[2/3]'
        : 'aspect-[4/5]';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-amber-100 ${aspectClass} ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {(!loaded || failed) && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <p
            className="text-center text-xs text-amber-700/70 leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {alt}
          </p>
        </div>
      )}
    </div>
  );
}

export function PremiumLandingPage() {
  const promo = usePremiumPromoCountdown();
  const { userDoc } = useAuth();
  const trialStatus = computeTrialStatus(userDoc);
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

  const handleCtaClick = (
    placement: 'hero' | 'sticky' | 'objection' | 'pricing' | 'final',
  ) => {
    trackEvent('premium_lp_cta_click', placement);
  };

  const heroCtaClass =
    'inline-flex items-center justify-center bg-white text-amber-700 rounded-full px-7 py-4 text-base font-bold active:scale-[0.98] transition shadow-sm';
  const accentCtaClass =
    'inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white rounded-full px-7 py-4 text-base font-bold active:scale-[0.98] transition';

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-28 sm:pb-16">
      {trialStatus.kind !== 'none' && (
        <TrialStatusBanner status={trialStatus} applyUrl={LIFF_APPLY_URL} />
      )}

      {/* ============= SECTION 1: Hero ============= */}
      <header className="relative overflow-hidden bg-amber-500">
        {/* 装飾: 背景の薄い円 (SVG) */}
        <svg
          aria-hidden
          className="absolute -top-20 -right-20 w-[420px] h-[420px] opacity-20"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="#FEF3C7" />
        </svg>
        <svg
          aria-hidden
          className="absolute -bottom-32 -left-24 w-[320px] h-[320px] opacity-15"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="#FFFFFF" />
        </svg>

        <div className="relative max-w-5xl mx-auto px-4 pt-8 pb-12 sm:pt-14 sm:pb-20">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            {/* テキスト */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-amber-700">
                  7日間無料
                </span>
                <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-amber-700">
                  今だけ月{PROMO_PRICE_YEN.toLocaleString()}円
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl font-bold text-white leading-[1.3]"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                毎日、LINEが来る。
                <br />
                <span className="inline-block bg-white text-amber-600 px-2 rounded-lg mt-2">
                  だから、続く。
                </span>
              </h1>
              <p className="text-sm sm:text-base text-white/95 mt-5 leading-relaxed">
                中学生のためのLINE学習サービス、
                <br className="sm:hidden" />
                <span className="font-bold">チャットでスタディ プレミアム</span>。
                <br />
                1日1問だけ、好きな時間にLINEで届く。
                <br />
                やらなきゃ、と思う前に、もう解いてる。
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={LIFF_APPLY_URL}
                  onClick={() => handleCtaClick('hero')}
                  className={heroCtaClass}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  7日間無料で始める →
                </a>
                <p className="text-[11px] text-white/85 leading-relaxed">
                  ✓ クレジットカード登録なし &nbsp;✓ 担当者やり取りなし
                  <br />
                  ✓ 合わなければ自動で無料に戻る
                </p>
              </div>
            </div>

            {/* ヒーロー画像 */}
            <div className="relative">
              <ImageFrame
                src={IMG_HERO}
                alt="中学生がスマホで気軽にLINE学習をしている様子"
                aspect="hero"
                className="border-4 border-white/40"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ============= SECTION 2: 共感（悩み） ============= */}
        <section className="py-12 sm:py-20 bg-[#FAF9F7]">
          <div className="max-w-3xl mx-auto px-4">
            <p
              className="text-xs sm:text-sm font-bold text-amber-700 mb-3"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              こんなこと、ない？
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-8"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              中学生の「勉強しなきゃ」、
              <br />
              続かないのは「気合い」じゃなくて<br className="sm:hidden" />「仕組み」のせい。
            </h2>
            <ul className="space-y-3">
              {PAIN_POINTS.map((p, idx) => (
                <li
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 px-5 py-4 text-base text-gray-700 leading-relaxed"
                >
                  <span
                    className="text-amber-500 font-bold mr-2"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    ―
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base sm:text-lg text-gray-600 leading-relaxed">
              気持ちの問題じゃなくて、続けられる「仕掛け」が無いだけ。
              <br />
              チャットでスタディ プレミアムは、その仕掛けを作りました。
            </p>
          </div>
        </section>

        {/* ============= SECTION 3: 解決ストーリー（4 シーン） ============= */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p
                className="text-xs sm:text-sm font-bold text-amber-700 mb-2"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                チャットでスタディができること
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                1日1問、LINEで終わる。
                <br />
                それが、続くきっかけ。
              </h2>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {SOLUTIONS.map((s, idx) => {
                const reverse = idx % 2 === 1;
                return (
                  <div
                    key={s.num}
                    className={`grid sm:grid-cols-2 gap-8 sm:gap-12 items-center ${
                      reverse ? 'sm:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div>
                      <ImageFrame
                        src={s.image}
                        alt={s.imageAlt}
                        aspect="portrait"
                        className="max-w-xs mx-auto"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white font-bold"
                          style={{
                            fontFamily: "'Zen Maru Gothic', sans-serif",
                          }}
                        >
                          {s.num}
                        </span>
                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                          Story {s.num} / {SOLUTIONS.length}
                        </span>
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug mb-3"
                        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============= SECTION 4: 実際の画面 ============= */}
        <section className="py-14 sm:py-20 bg-[#F5F3F0]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p
              className="text-xs sm:text-sm font-bold text-amber-700 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              実際のLINE画面
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-3"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              これが、毎日届く1問。
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              朝のあいさつ → クイズ → あなたの回答 → 正誤フィードバック → かんたんな解説。
              <br />
              全部、LINEのトーク画面で完結します。
            </p>
            <div className="max-w-xs mx-auto">
              <ImageFrame
                src={IMG_PHONE_MOCKUP}
                alt="スマホで実際のLINEチャット画面：朝のあいさつ、クイズ、回答、解説の流れ"
                aspect="phone"
              />
            </div>
          </div>
        </section>

        {/* ============= SECTION 5: 不安解消（objection handling） ============= */}
        <section className="py-14 sm:py-24 bg-amber-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p
                className="text-xs sm:text-sm font-bold text-amber-700 mb-2"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                「でも...」と思った方へ
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                正直に、お答えします。
              </h2>
            </div>

            <div className="space-y-4">
              {OBJECTIONS.map((o, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-amber-200 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                      Q
                    </span>
                    <p
                      className="text-base sm:text-lg font-bold text-gray-800 leading-snug"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {o.q}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pl-1">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-800 text-white text-xs font-bold">
                      A
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {o.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={LIFF_APPLY_URL}
                onClick={() => handleCtaClick('objection')}
                className={accentCtaClass}
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                7日間無料で試してみる →
              </a>
            </div>
          </div>
        </section>

        {/* ============= SECTION 6: 保護者の方へ ============= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F5F3F0] rounded-3xl p-6 sm:p-10">
              <p
                className="text-xs sm:text-sm font-bold text-gray-500 mb-2 tracking-wider"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                FOR PARENTS
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-4"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                保護者の方へ
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                チャットでスタディは、中学生のお子さま向けの学習サービスです。
                公式LINEで毎日1問の問題が届き、ゲーム感覚で続けられる仕組みになっています。
              </p>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed mb-5">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>専用アプリ不要。普段使っている LINE だけで完結</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>7日間の無料トライアル中はクレジットカード登録なし</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>連続学習日数・正答率の確認が可能（リッチメニュー「成績・記録」）</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>解約はいつでも、お問い合わせから1回の連絡で完了</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>領収書・請求書も発行可能</span>
                </li>
              </ul>
              <Link
                to="/for-parents"
                className="inline-flex items-center gap-1 text-sm font-bold text-amber-700 underline"
              >
                保護者向けの詳しい説明を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ============= SECTION 7: 料金プラン ============= */}
        <section className="py-14 sm:py-24 bg-[#FAF9F7]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p
                className="text-xs sm:text-sm font-bold text-amber-700 mb-2"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                料金プラン
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                今だけ、月¥{PROMO_PRICE_YEN.toLocaleString()}。
                <br className="sm:hidden" />
                登録した方は、ずっとこの価格。
              </h2>
            </div>

            <div className="bg-white rounded-3xl border-2 border-amber-300 p-6 sm:p-10">
              {promo.isActive && (
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-white px-4 py-1.5 text-xs font-bold mb-4">
                  <span>⏰</span>
                  <span>特典終了まで残り{promo.daysRemaining}日</span>
                </div>
              )}
              <div className="flex flex-wrap items-baseline gap-3 mb-3">
                <span
                  className="text-5xl sm:text-6xl font-bold text-amber-600"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  ¥{PROMO_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-base text-gray-600">/月（税込）</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                今後、対応教科の追加に伴い月額を引き上げる予定です（¥
                {REGULAR_PRICE_YEN.toLocaleString()}/月を予定）。今登録した方は、値上げ後も
                <span className="font-bold text-amber-700">
                  {' '}
                  ずっと月 ¥{PROMO_PRICE_YEN.toLocaleString()}{' '}
                </span>
                のまま継続いただけます。
              </p>

              <div className="bg-amber-50 rounded-2xl p-4 mb-6">
                <p
                  className="text-sm font-bold text-amber-800 mb-2"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  💡 アーリーアダプター特典 = 価格ロック
                </p>
                <p className="text-xs text-amber-800 leading-relaxed">
                  通常価格に値上げされても、今登録した方の月額は変わりません。長く使うほどお得な仕組みです。
                </p>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed mb-6">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>7日間 完全無料トライアル</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>クレジットカード登録は本契約時のみ</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>解約はいつでも可能、引き止めなし</span>
                </li>
              </ul>

              <a
                href={LIFF_APPLY_URL}
                onClick={() => handleCtaClick('pricing')}
                className={`${accentCtaClass} w-full`}
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                7日間無料で始める →
              </a>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
              ※ 現在は中1〜中3の歴史に対応。対応教科は順次追加予定です。
            </p>
          </div>
        </section>

        {/* ============= SECTION 8: FAQ ============= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10 leading-snug"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              よくある質問
            </h2>
            <ul className="space-y-3">
              {FAQ.map((qa, idx) => (
                <li
                  key={idx}
                  className="bg-[#FAF9F7] rounded-2xl border border-gray-200 p-5"
                >
                  <p
                    className="text-base font-bold text-gray-800 mb-2 leading-snug"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    Q. {qa.q}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A. {qa.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============= SECTION 9: 最終 CTA ============= */}
        <section className="relative py-16 sm:py-24 bg-amber-500 overflow-hidden">
          <svg
            aria-hidden
            className="absolute -top-32 -right-32 w-[480px] h-[480px] opacity-15"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="100" fill="#FFFFFF" />
          </svg>
          <div className="relative max-w-2xl mx-auto px-4 text-center">
            <p className="text-xs sm:text-sm font-bold text-white/90 mb-3 tracking-wider">
              START YOUR 7 DAYS FREE
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-5"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              さあ、明日のあなたを
              <br />
              ちょっとだけ変えてみよう。
            </h2>
            <p className="text-base text-white/95 leading-relaxed mb-8">
              7日間、完全無料。クレジットカード登録なし。
              <br />
              合わなければ自動で無料に戻ります。
            </p>
            <a
              href={LIFF_APPLY_URL}
              onClick={() => handleCtaClick('final')}
              className={heroCtaClass}
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              7日間無料で始める →
            </a>
            <p className="text-xs text-white/80 mt-4">
              LINEの申込みフォームが開きます（1分で完了）
            </p>
          </div>
        </section>

        {/* ============= SECTION 10: 運営者 / footer ============= */}
        <section className="py-12 sm:py-16 bg-[#F5F3F0]">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-base font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              運営者
            </h2>
            <dl className="text-sm text-gray-700 space-y-2 leading-relaxed mb-6">
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
                  <a href={CONTACT_URL} className="text-amber-700 underline">
                    お問い合わせフォーム
                  </a>
                </dd>
              </div>
            </dl>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
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

            <div className="text-center text-xs text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
              <Link to="/terms" className="underline">
                利用規約
              </Link>
              <Link to="/privacy" className="underline">
                プライバシーポリシー
              </Link>
              <Link to="/legal" className="underline">
                特定商取引法に基づく表記
              </Link>
              <Link to="/for-parents" className="underline">
                保護者の方へ
              </Link>
            </div>
            <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
              © チャットでスタディ
            </p>
          </div>
        </section>
      </main>

      {/* ============= Sticky Bottom CTA (mobile only) ============= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur border-t border-gray-200 px-4 py-3">
        <a
          href={LIFF_APPLY_URL}
          onClick={() => handleCtaClick('sticky')}
          className={`${accentCtaClass} w-full py-3 text-sm`}
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          {trialStatus.kind === 'trial-active'
            ? `あと${trialStatus.daysLeft}日 → 継続登録する`
            : '7日間無料で始める →'}
        </a>
      </div>
    </div>
  );
}

type TrialStatus =
  | { kind: 'none' }
  | { kind: 'trial-active'; daysLeft: number }
  | { kind: 'trial-expired' }
  | { kind: 'paid'; cancelAtPeriodEnd: boolean };

function computeTrialStatus(
  userDoc: ReturnType<typeof useAuth>['userDoc'],
): TrialStatus {
  if (!userDoc) return { kind: 'none' };
  if (userDoc.planSource === 'paid') {
    return {
      kind: 'paid',
      cancelAtPeriodEnd: userDoc.cancelAtPeriodEnd,
    };
  }
  if (userDoc.planSource === 'trial' && userDoc.premiumUntil) {
    const msLeft = userDoc.premiumUntil.getTime() - Date.now();
    if (msLeft <= 0) return { kind: 'trial-expired' };
    // Math.floor で「残り完全日数」を表す。Math.ceil だと premiumUntil が日末で +1 されてしまう。
    const daysLeft = Math.max(1, Math.floor(msLeft / (24 * 60 * 60 * 1000)));
    return { kind: 'trial-active', daysLeft };
  }
  if (userDoc.planSource === 'trial_expired') return { kind: 'trial-expired' };
  return { kind: 'none' };
}

function TrialStatusBanner({
  status,
  applyUrl,
}: {
  status: TrialStatus;
  applyUrl: string;
}) {
  if (status.kind === 'paid') {
    return (
      <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-3 text-center text-sm text-emerald-800">
        ✨ プレミアム会員にご登録いただきありがとうございます
        {status.cancelAtPeriodEnd && '（解約予約中）'}
      </div>
    );
  }
  if (status.kind === 'trial-active') {
    return (
      <div className="bg-amber-500 text-white px-4 py-3 text-center text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2">
        <span>
          🎁 プレミアム体験中（あと{status.daysLeft}日）
        </span>
        <a
          href={applyUrl}
          className="inline-flex items-center bg-white text-amber-700 rounded-full px-4 py-1 text-xs font-bold"
        >
          月¥680で継続登録する →
        </a>
      </div>
    );
  }
  if (status.kind === 'trial-expired') {
    return (
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700">
        プレミアム体験は終了しました。引き続きご利用される場合は月¥680で本登録いただけます。
      </div>
    );
  }
  return null;
}
