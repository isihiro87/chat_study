import { useEffect, useMemo, useState } from 'react';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';
import { logFunnelEvent } from '../utils/funnelEvent';
import { useAuth } from '../contexts/AuthContext';

type PageState =
  | 'loading'
  | 'free'          // free。「月¥680 で申し込む」直接訴求（trial 言及なし）
  | 'trial_active'  // plan=premium && planSource=trial。「これからも使い続ける」訴求
  | 'trial_expired' // planSource=trial_expired。「月¥680 で再開」訴求
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
    title: 'このページから申込フォームへ',
    body: '下のボタンから申込フォーム（LIFF）に進みます',
  },
  {
    num: 2,
    title: '決済情報を入力',
    body: 'クレジットカード（Visa / Mastercard / JCB / Amex）で月額決済を登録します',
  },
  {
    num: 3,
    title: 'プレミアム機能がすぐ使えるように',
    body: '決済完了後すぐに「追加で解く」「苦手を復習」「じっくり学ぶ」が解放されます',
  },
  {
    num: 4,
    title: '解約はいつでも',
    body: '設定・サポートまたはお問い合わせから1タップで解約できます。次回更新日まで利用可能、日割返金はありません',
  },
];

interface PainPoint {
  icon: string;
  text: string;
}

const PAIN_POINTS_STUDENT: PainPoint[] = [
  { icon: '😅', text: '1日1問だと物足りない、もっと解きたい' },
  { icon: '📝', text: 'テスト前に焦って暗記が間に合わない' },
  { icon: '🔁', text: '間違えた問題をそのままにしてしまう' },
  { icon: '📱', text: '塾やアプリは続かなかった、LINE なら続けられそう' },
];

const PAIN_POINTS_PARENT: PainPoint[] = [
  { icon: '💰', text: '塾は高くて続けにくい、でも家庭学習は心配' },
  { icon: '👀', text: '子どもの学習状況が見えない' },
  { icon: '📲', text: '新しいアプリを入れさせるのは抵抗がある' },
];

interface DailyFlowStep {
  time: string;
  emoji: string;
  title: string;
  body: string;
}

const DAILY_FLOW: DailyFlowStep[] = [
  {
    time: '朝',
    emoji: '☀️',
    title: '通学前に LINE で1問',
    body: '毎朝届く問題を、出かける前にサクッと1問。1分で習慣化。',
  },
  {
    time: '放課後',
    emoji: '📚',
    title: '「追加で解く」で苦手分野を集中演習',
    body: '今日の授業で気になったところを、リッチメニューからすぐ追加で解ける。',
  },
  {
    time: '夜',
    emoji: '🌙',
    title: '「じっくり学ぶ」で暗記カード＆クイズ',
    body: '寝る前の10分で暗記カードを繰り返し。記憶定着のゴールデンタイム。',
  },
  {
    time: '週末',
    emoji: '📈',
    title: '「苦手を復習」と「成績・記録」で総点検',
    body: '間違えた問題を優先出題。週末に成績ページで伸びを実感。',
  },
];

interface ParentReassurance {
  icon: string;
  title: string;
  body: string;
}

const PARENTS_REASSURANCE: ParentReassurance[] = [
  {
    icon: '💸',
    title: '塾の1コマより安い、月¥680',
    body: '個別指導塾の1コマ平均 約¥3,000 と比べて、毎日続けても月¥680（税込）。値上げ後も登録時の価格のままご利用いただけます。',
  },
  {
    icon: '🔓',
    title: 'いつでも1タップで解約、自動延長の罠なし',
    body: '解約は LINE の「設定・サポート」から1タップ。次回更新日まで使えて、それ以降は無料プランに自動で戻ります。',
  },
  {
    icon: '📱',
    title: '新しいアプリのインストール不要',
    body: 'すべて LINE 内で完結。お子さまの端末に余計なアプリを入れる必要はありません。',
  },
  {
    icon: '📊',
    title: '保護者も学習状況を確認できる',
    body: 'リッチメニュー「成績・記録」から、連続学習日数・解いた問題数・正答率がいつでも分かります。',
  },
  {
    icon: '🧾',
    title: '領収書・請求書も発行可能',
    body: '教育費として家計管理されたい場合も安心。お問い合わせから宛名を指定して発行できます。',
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
    a: 'いつでも解約できます。次回更新日までは引き続きご利用いただけ、それ以降は無料プランに戻ります。日割返金はありません。',
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
  // - trial 切れ         → 「月¥680 で本登録する」
  // - paid 契約済み      → CTA 出さず
  // - free               → 「月¥680 で申し込む」（trial は言及しない）
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
        `中学生の毎日の学習を、公式LINEで1問ずつコツコツ続けるサービスです。\n` +
        `月 ${PROMO_PRICE_YEN.toLocaleString()}円（税込）、いつでも解約可能。\n\n` +
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
              今だけ月{PROMO_PRICE_YEN.toLocaleString()}円
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-amber-700">
              いつでも解約可
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
            毎日1問の配信に加えて、暗記カードと四択クイズが無制限。月{PROMO_PRICE_YEN.toLocaleString()}円（税込）で続けられます。
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {/* 共感パート: 中学生本人 + 保護者の悩みに刺さる */}
        <section className="-mt-3 bg-white rounded-2xl shadow-sm p-5 border border-amber-100">
          <p
            className="text-base font-bold text-gray-800 leading-relaxed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            こんなこと、思っていませんか？
          </p>
          <div className="mt-3 space-y-2">
            <p className="text-xs font-bold text-amber-700">中学生のあなたへ</p>
            <ul className="space-y-1.5">
              {PAIN_POINTS_STUDENT.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="flex-shrink-0">{point.icon}</span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-100 space-y-2">
            <p className="text-xs font-bold text-amber-700">保護者の方へ</p>
            <ul className="space-y-1.5">
              {PAIN_POINTS_PARENT.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="flex-shrink-0">{point.icon}</span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <p
            className="mt-4 text-center text-sm font-bold text-amber-700 leading-relaxed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            プレミアムなら、ぜんぶ解決できます。
          </p>
        </section>

        {/* 継続率データ: LINEが継続の鍵 */}
        <section className="mt-3 bg-white rounded-2xl shadow-sm p-5 border border-amber-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-700">
              実績データ
            </span>
            <p
              className="text-base font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              続けられる仕組みは「LINE」でした
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-2 leading-relaxed">
            アプリや教材を使った学習サービスでは、3か月後まで続けられるお子さまは
            <span className="font-bold text-gray-800">10人に1人</span>でした。
            <br />
            一方、毎日使う <span className="font-bold">LINE で配信する形に変えたところ</span>、続けられた割合は大きく伸びました。
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-gray-100 px-3 py-4 text-center">
              <p className="text-[10px] font-bold text-gray-500 mb-1">
                以前のサービス（アプリ型）
              </p>
              <p
                className="text-4xl font-bold text-gray-400"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                10<span className="text-xl">%</span>
              </p>
              <p className="text-[10px] text-gray-500 mt-1">3か月継続率</p>
            </div>
            <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 px-3 py-4 text-center">
              <p className="text-[10px] font-bold text-amber-700 mb-1">
                LINE版（チャットでスタディ）
              </p>
              <p
                className="text-4xl font-bold text-amber-600"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                88<span className="text-xl">%</span>
              </p>
              <p className="text-[10px] text-amber-700 mt-1">3か月継続率</p>
            </div>
          </div>

          <div className="mt-4 bg-amber-50 rounded-xl px-3 py-3">
            <p
              className="text-sm font-bold text-amber-800 leading-relaxed"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              💡 続かない理由は「やる気」ではなく「仕組み」
            </p>
            <ul className="mt-2 space-y-1 text-xs text-amber-900 leading-relaxed">
              <li>・新しいアプリを開く手間がない（LINE は毎日見る）</li>
              <li>・通知がトーク欄に届くから、自然と目に入る</li>
              <li>・1問1分で終わる軽さ、けど積み上がる</li>
            </ul>
          </div>
        </section>

        {/* 価格バナー */}
        <section className="mt-3 bg-white rounded-2xl shadow-sm overflow-hidden border border-amber-100">
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
                今後、対応教科の追加に伴い月額を引き上げる予定です。特典期間中に登録いただいた方は、値上げ後も
                <span className="font-bold text-amber-700">
                  月¥{PROMO_PRICE_YEN.toLocaleString()}
                </span>
                のまま継続いただけます。
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
                <span className="text-xs text-gray-600">/月（税込）</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                今後、対応教科の追加に伴い月額を引き上げる予定です。今登録いただいた方は、値上げ後も月¥
                {PROMO_PRICE_YEN.toLocaleString()}のまま継続いただけます。
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
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                今後、対応教科の追加に伴い月額を引き上げる予定です。今登録いただいた方は、値上げ後も月¥
                {PROMO_PRICE_YEN.toLocaleString()}のまま継続いただけます。
              </p>
            </div>
          )}
        </section>

        {/* アーリーアダプター特典: なぜ¥680なのか、ストーリー仕立て */}
        {promo.isActive && (
          <section className="mt-3 bg-gradient-to-br from-amber-50 to-amber-100/40 border-2 border-amber-300 rounded-2xl px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-bold text-white">
                EARLY ADOPTER
              </span>
              <p
                className="text-base font-bold text-amber-900"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                なぜ今だけ ¥{PROMO_PRICE_YEN.toLocaleString()} なの？
              </p>
            </div>
            <ol className="space-y-2 text-xs text-amber-900 leading-relaxed">
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
                <span>
                  現在は<span className="font-bold">中1・中2の歴史</span>に対応。これから英語・数学・理科・地理を順次追加予定です。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
                <span>
                  教科追加にあわせて<span className="font-bold">月額は段階的に引き上げる予定</span>です。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  3
                </span>
                <span>
                  <span className="font-bold">
                    でも、今登録した方は値上げ後もずっと月 ¥{PROMO_PRICE_YEN.toLocaleString()} のまま。
                  </span>
                  これがアーリーアダプター特典です。
                </span>
              </li>
            </ol>
            <div className="mt-3 bg-white/70 rounded-xl px-3 py-2">
              <p className="text-[11px] text-amber-900 leading-relaxed">
                💡 例: 5教科対応で月¥1,480 になっても、今登録なら<span className="font-bold">ずっと月¥{PROMO_PRICE_YEN.toLocaleString()}</span>。早く始めるほどお得です。
              </p>
            </div>
          </section>
        )}

        {/* プレミアム会員の1日フロー */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-1"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            プレミアムなら、1日はこう変わる
          </h2>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            毎日1問の配信に加えて、自分のペースで「もっと解く」「じっくり学ぶ」が使えます。
          </p>
          <ol className="space-y-3">
            {DAILY_FLOW.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-xl">
                    {step.emoji}
                  </div>
                  <p className="text-[10px] font-bold text-amber-700 mt-1">
                    {step.time}
                  </p>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div
                    className="text-sm font-bold text-gray-800"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {step.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4 bg-amber-50 rounded-xl px-3 py-2.5">
            <p className="text-xs text-amber-800 leading-relaxed">
              ✨ <span className="font-bold">合計10〜20分の積み重ね</span>で、テスト前に慌てない習慣が作れます。
            </p>
          </div>
        </section>

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
          ) : pageState === 'loading' ? (
            <p className="mt-4 text-center text-xs text-gray-400">読み込み中...</p>
          ) : (
            <>
              <a
                href={APPLY_PATH}
                className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white shadow-sm"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {pageState === 'trial_active'
                  ? 'これからも使い続ける'
                  : `月${PROMO_PRICE_YEN.toLocaleString()}円で申し込む`}
              </a>
              <p className="text-xs text-gray-500 text-center mt-2">
                {pageState === 'trial_active'
                  ? `継続後も月${PROMO_PRICE_YEN.toLocaleString()}円のまま使えます`
                  : '次の画面で決済情報を入力します。いつでも解約できます。'}
              </p>
            </>
          )}
        </section>

        {/* 保護者の安心ブロック */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5 border border-sky-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-[10px] font-bold text-sky-700">
              FOR PARENTS
            </span>
            <h2
              className="text-base font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              保護者の方が安心できる5つの理由
            </h2>
          </div>
          <ul className="space-y-3">
            {PARENTS_REASSURANCE.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-sm font-bold text-gray-800"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    {item.body}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 bg-sky-50 rounded-xl px-3 py-2.5">
            <p className="text-xs text-sky-900 leading-relaxed">
              📖 保護者向けの詳しい説明は{' '}
              <a
                href={PARENTS_LP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                こちらのページ
              </a>
              。LINE で送ることもできます（下のセクション参照）。
            </p>
          </div>
        </section>

        {/* 申込から利用開始までの流れ */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-sm font-bold text-gray-700 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            申込から利用開始まで
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
          ) : pageState === 'loading' ? (
            <p className="text-sm text-gray-400 text-center">読み込み中...</p>
          ) : (
            <>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                {pageState === 'trial_active' ? (
                  <>
                    今、<span className="font-bold text-amber-700">プレミアム体験中</span>です
                    <br />
                    これからも続けるならこちらから
                  </>
                ) : pageState === 'trial_expired' ? (
                  <>
                    プレミアム体験は終了しました
                    <br />
                    <span className="font-bold text-amber-700">
                      月{PROMO_PRICE_YEN.toLocaleString()}円
                    </span>
                    で続けられます
                  </>
                ) : (
                  <>
                    プレミアム機能をすぐに利用開始
                    <br />
                    <span className="font-bold text-amber-700">
                      月{PROMO_PRICE_YEN.toLocaleString()}円（税込）
                    </span>
                    、いつでも解約可
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
                  : `月${PROMO_PRICE_YEN.toLocaleString()}円で申し込む`}
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

        <div className="text-center text-xs text-gray-500 mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a
            href="https://www.chatstudy.jp/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            利用規約
          </a>
          <a
            href="https://www.chatstudy.jp/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            プライバシーポリシー
          </a>
          <a
            href="https://www.chatstudy.jp/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            特定商取引法に基づく表記
          </a>
        </div>
        <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
          チャットでスタディ
        </p>
      </main>
    </div>
  );
}
