import { useEffect } from 'react';

const CONTACT_URL = 'https://www.chatstudy.jp/contact';

interface Feature {
  emoji: string;
  title: string;
  description: string;
}

const PREMIUM_FEATURES: Feature[] = [
  {
    emoji: '🔥',
    title: '追加で解く',
    description: '1日1問に縛られず、好きなタイミングでもう1問追加で解ける',
  },
  {
    emoji: '🔁',
    title: '苦手を復習',
    description: '過去に間違えた問題を優先的に出題。3回連続正解で「習得済」に',
  },
  {
    emoji: '🎯',
    title: 'テスト範囲設定',
    description: '中間・期末テスト前に範囲を指定すると、その単元から優先出題',
  },
  {
    emoji: '📚',
    title: 'じっくり学ぶ（サイト）',
    description: 'フラッシュカード暗記 + 連続クイズで深く学習できる学習サイト',
  },
  {
    emoji: '📊',
    title: '成績・記録',
    description: '連続記録・正答率・教科別・単元別の詳細レポート',
  },
  {
    emoji: '⚙️',
    title: '設定・サポート',
    description: '配信時刻・教科・学年をいつでも変更可能',
  },
];

/**
 * 公式LINE のリッチメニュー無料版「もっと解く」postback から
 * flex の「詳細を見る」ボタン経由で開かれる、プレミアム誘導ランディング。
 *
 * 認証は不要（誰でも見られる）。プレミアム特典を網羅的に紹介し、
 * 興味を持ったユーザーをお問い合わせフォームへ誘導する。
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
        {/* 比較カード */}
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <h2
            className="text-sm font-bold text-gray-700 mb-3"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            無料版でできること
          </h2>
          <ul className="text-sm text-gray-700 space-y-1.5 leading-relaxed">
            <li className="flex gap-2">
              <span aria-hidden className="text-amber-500">✓</span>
              <span>毎日1問が決まった時間に届く</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-amber-500">✓</span>
              <span>連続記録の確認</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-amber-500">✓</span>
              <span>テスト範囲を設定して出題を絞り込み</span>
            </li>
          </ul>
        </section>

        <section className="mt-4">
          <h2
            className="text-sm font-bold text-amber-700 px-1 mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            プレミアムで使える機能
          </h2>
          <ul className="space-y-2">
            {PREMIUM_FEATURES.map((f) => (
              <li
                key={f.title}
                className="bg-white rounded-2xl shadow-sm px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-bold text-gray-800"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {f.title}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      {f.description}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-gray-700 text-center leading-relaxed">
            気になる方は
            <br />
            お問い合わせフォームから連絡してください
          </p>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            お問い合わせフォームを開く
          </a>
          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            内容を確認のうえ、担当からご案内します
          </p>
        </section>

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          チャットでスタディ
        </p>
      </main>
    </div>
  );
}
