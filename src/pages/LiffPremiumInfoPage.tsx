import { useEffect } from 'react';

const CONTACT_URL = 'https://www.chatstudy.jp/contact';
const APPLY_PATH = '/liff/premium-apply';

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
    feature: 'テスト範囲設定',
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
    feature: 'じっくり学ぶ',
    free: '—',
    premium: 'カード+クイズ',
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
    title: '申込フォームを送信',
    body: 'このページの下の「申込フォームを開く」から、連絡可能な時間帯と支払い希望をお選びください',
  },
  {
    num: 2,
    title: '担当者からLINEで連絡',
    body: '24時間以内に公式LINEで折り返します。具体的な金額・期間をご案内します',
  },
  {
    num: 3,
    title: '案内に従って支払い',
    body: 'ご希望の方法（銀行振込／クレジットカード等）でお支払いいただきます',
  },
  {
    num: 4,
    title: 'リッチメニューが切り替わる',
    body: '確認後、メニューが6ボタンに切り替わり、追加で解く・苦手復習が使えるようになります',
  },
];

interface QA {
  q: string;
  a: string;
}

const FAQ: QA[] = [
  {
    q: '料金はいくらですか？',
    a: '現在準備中のため、お問い合わせ時に個別にご案内しています。月額／3ヶ月／半年などの期間からお選びいただけます。',
  },
  {
    q: '解約はいつでもできますか？',
    a: 'はい、いつでも可能です。リッチメニュー「設定・サポート」内のお問い合わせから連絡してください。次回更新日以降は無料プランに戻ります。',
  },
  {
    q: 'もし子どもに合わなかったら？',
    a: 'お試し利用後、合わないと感じた場合は遠慮なくお知らせください。初回はリスクが少ないよう短期間からご案内することもできます。',
  },
  {
    q: '兄弟・家族で使えますか？',
    a: '公式LINEは1ユーザー単位の契約となるため、お子さま1人につき1アカウントでのご利用をお願いしています。複数人ご希望の場合は申込フォームの「ご質問・ご要望」欄にご記入ください。',
  },
];

/**
 * 公式LINE のリッチメニュー無料版「もっと解く」postback から
 * flex の「詳細を見る」ボタン経由で開かれる、プレミアム誘導ランディング。
 *
 * 認証は不要（誰でも見られる）。プレミアム特典の比較・申込までの流れ・FAQ を
 * 提示し、興味を持ったユーザーを LIFF 申込フォーム (/liff/premium-apply) へ誘導する。
 */
export function LiffPremiumInfoPage() {
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
      } catch (err) {
        console.warn('[LiffPremiumInfoPage] liff.init failed', err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1
            className="text-xl font-bold text-white text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ✨ プレミアムでもっと学ぼう
          </h1>
          <p className="text-xs text-white/90 text-center mt-1">
            無料版にプラスαで、テスト対策が一気に進む
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
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
        </section>

        {/* 申込から開通までの流れ */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-sm font-bold text-gray-700 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            申込から開通までの流れ
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

        {/* 主CTA: 申込フォームを開く */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-gray-700 text-center leading-relaxed">
            申込みは LINE 内で完結します
            <br />
            まずはフォームから連絡可能な時間をお知らせください
          </p>
          <a
            href={APPLY_PATH}
            className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            申込フォームを開く
          </a>
          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            送信後、24時間以内に担当者からLINEでご連絡します
          </p>
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
