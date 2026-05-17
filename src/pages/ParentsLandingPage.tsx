import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePremiumPromoCountdown } from '../hooks/usePremiumPromoCountdown';

const PROMO_PRICE_YEN = 680;
const REGULAR_PRICE_YEN = 1280;
const CONTACT_URL = 'https://www.chatstudy.jp/contact';
const DEFAULT_LINE_FRIEND_URL = 'https://line.me/R/ti/p/@chatstudy';

interface BenefitRow {
  title: string;
  free: string;
  premium: string;
}

const BENEFITS: BenefitRow[] = [
  { title: '毎日1問配信', free: '○', premium: '○' },
  { title: '連続記録の確認', free: '○', premium: '○' },
  { title: '出題範囲設定', free: '○', premium: '○' },
  { title: '追加で解く（無制限）', free: '—', premium: '○' },
  { title: '苦手を復習（誤答優先）', free: '—', premium: '○' },
  { title: 'じっくり学ぶ（解説・カード）', free: '—', premium: '○' },
  { title: '詳細な成績レポート', free: '簡易のみ', premium: '○' },
];

interface ParentQA {
  q: string;
  a: string;
}

const PARENT_FAQ: ParentQA[] = [
  {
    q: '料金はいくらですか？',
    a: `特典期間中は月 ${PROMO_PRICE_YEN.toLocaleString()}円。通常価格は月 ${REGULAR_PRICE_YEN.toLocaleString()}円の予定です。今登録いただいた方は、将来通常価格に値上げ後も月 ${PROMO_PRICE_YEN.toLocaleString()}円のまま継続いただけます。`,
  },
  {
    q: '解約はいつでもできますか？',
    a: 'はい、いつでも可能です。公式LINEのリッチメニュー「設定・サポート」内のお問い合わせから連絡してください。次回更新日以降は無料プランに戻ります。',
  },
  {
    q: '子どもがどれだけ進めているか親が確認できますか？',
    a: '公式LINEのリッチメニュー「成績・記録」から、連続学習日数・解いた問題数・正答率がいつでも確認できます。お子さまの LINE 画面を一緒に見ていただく形になります。',
  },
  {
    q: '領収書／請求書は発行できますか？',
    a: '可能です。お問い合わせフォーム、または公式LINE「設定・サポート」から、宛名と必要事項をお知らせください。',
  },
  {
    q: 'もし子どもに合わなかったら？',
    a: '7日間の無料トライアル中であれば、追加のお支払いは発生しません。何もしなければ自動で無料プランに戻ります。',
  },
];

export function ParentsLandingPage() {
  const promo = usePremiumPromoCountdown();
  const lineFriendUrl =
    (import.meta.env.VITE_OFFICIAL_LINE_ADD_FRIEND_URL as string | undefined) ||
    DEFAULT_LINE_FRIEND_URL;

  useEffect(() => {
    const prev = document.title;
    document.title =
      'チャットでスタディ プレミアム｜保護者向けご案内 | 中学生の毎日学習を公式LINEで';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-16">
      {/* Hero */}
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-10 text-center">
          <p className="text-xs text-white/90 mb-2">保護者の皆さまへ</p>
          <h1
            className="text-2xl font-bold text-white leading-snug"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            お子さまの毎日の学習を
            <br />
            公式LINEで1問ずつコツコツ
          </h1>
          <p className="text-sm text-white/90 mt-3 leading-relaxed">
            中学生向けの学習サポートサービス「チャットでスタディ」のご案内です。
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {/* 料金カード */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-amber-50 px-5 py-5">
            <h2
              className="text-sm font-bold text-amber-700 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              料金プラン
            </h2>
            {promo.isActive ? (
              <>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold text-amber-600"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    ¥{PROMO_PRICE_YEN.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">/月（税込）</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-gray-400 line-through">
                    通常 ¥{REGULAR_PRICE_YEN.toLocaleString()}/月
                  </span>
                  <span className="text-xs font-bold text-amber-700">
                    ⏰ 残り{promo.daysRemaining}日
                  </span>
                </div>
                <p className="text-xs text-gray-700 mt-3 leading-relaxed">
                  特典期間中にご登録いただいた方は、対応教科の追加で通常価格 ¥
                  {REGULAR_PRICE_YEN.toLocaleString()}/月になっても、
                  <br />
                  <span className="font-bold text-amber-700">
                    ずっと月 ¥{PROMO_PRICE_YEN.toLocaleString()}
                  </span>
                  のまま継続いただけます。
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  まずは{' '}
                  <span className="font-bold">7日間の無料トライアル</span> から
                </p>
              </>
            ) : promo.isExpired ? (
              <>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold text-gray-800"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    ¥{REGULAR_PRICE_YEN.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">/月（税込）</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ※ 早期登録の特典期間は終了しました
                </p>
              </>
            ) : (
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl font-bold text-gray-800"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  ¥{REGULAR_PRICE_YEN.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">/月（税込）</span>
              </div>
            )}
          </div>
        </section>

        {/* サービス概要 */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            サービスの特長
          </h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-amber-600">✓</span>
              <span>
                <span className="font-bold">公式LINE で毎日1問配信。</span>
                朝・夕・夜から配信時間を選べます。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">✓</span>
              <span>
                <span className="font-bold">
                  学校で習う範囲に合わせた問題。
                </span>
                中学1〜3年の学年・教科を選ぶだけ。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">✓</span>
              <span>
                <span className="font-bold">続けやすい仕組み。</span>
                連続記録（ストリーク）で習慣化をサポート。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">✓</span>
              <span>
                <span className="font-bold">専用アプリ不要。</span>
                普段使っている LINE だけで完結します。
              </span>
            </li>
          </ul>
        </section>

        {/* 無料・プレミアム比較 */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            無料 と プレミアム の違い
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <div className="grid grid-cols-[1fr_auto_auto] text-xs">
              <div className="bg-gray-50 px-3 py-2 font-bold text-gray-700">
                機能
              </div>
              <div className="bg-gray-50 px-3 py-2 font-bold text-gray-700 text-center min-w-[64px]">
                無料
              </div>
              <div className="bg-amber-50 px-3 py-2 font-bold text-amber-700 text-center min-w-[80px]">
                プレミアム
              </div>
              {BENEFITS.map((row, idx) => (
                <div key={row.title} className="contents">
                  <div
                    className={`px-3 py-2 text-gray-700 ${
                      idx % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    {row.title}
                  </div>
                  <div
                    className={`px-3 py-2 text-center text-gray-500 ${
                      idx % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    {row.free}
                  </div>
                  <div
                    className={`px-3 py-2 text-center text-amber-700 font-bold ${
                      idx % 2 === 1 ? 'bg-amber-50/30' : 'bg-amber-50/10'
                    }`}
                  >
                    {row.premium}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* お子さまへのおすすめ方法 */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-base font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            お子さまへの始め方
          </h2>
          <ol className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <div>下のボタンから公式LINE を友だち追加していただきます。</div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <div>
                学年・教科・配信時間を選ぶと、翌日から毎日1問届きます（無料）。
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <div>
                プレミアムを試したい時はリッチメニュー「もっと解く」から7日間無料トライアルへ。
                送信すると7日間の無料トライアルが始まります。
              </div>
            </li>
          </ol>
          <a
            href={lineFriendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            公式LINE を友だち追加する
          </a>
          <p className="text-xs text-gray-400 text-center mt-2">
            お子さまの LINE で開いて追加してください
          </p>
        </section>

        {/* 保護者向け FAQ */}
        <section className="mt-4">
          <h2
            className="text-base font-bold text-gray-800 px-1 mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            よくある質問
          </h2>
          <ul className="space-y-2">
            {PARENT_FAQ.map((qa, idx) => (
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

        {/* 問い合わせ */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            ご不明な点はお気軽にお問い合わせください
          </p>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-white border border-amber-300 text-amber-700 hover:bg-amber-50 active:scale-[0.98] transition rounded-full px-6 py-2 text-sm font-bold"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            お問い合わせフォームを開く
          </a>
        </section>

        {/* footer link */}
        <div className="mt-6 text-center space-x-4">
          <Link to="/terms" className="text-xs text-gray-500 underline">
            利用規約
          </Link>
          <Link to="/privacy" className="text-xs text-gray-500 underline">
            プライバシーポリシー
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
          チャットでスタディ
        </p>
      </main>
    </div>
  );
}
