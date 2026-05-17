import { useEffect } from 'react';

const CONTACT_URL = 'https://www.chatstudy.jp/contact';

interface QA {
  q: string;
  a: string;
}

const HOW_TO_USE: { title: string; text: string; emoji: string }[] = [
  {
    emoji: '📩',
    title: '毎日1問届く',
    text: '登録した時間（朝6時 / 朝7時 / 夕方5時 / 夜7時）に、選んだ教科×学年の問題が公式LINEから届きます。',
  },
  {
    emoji: '✅',
    title: '4択から答える',
    text: '届いた問題の4択ボタンをタップ。正解／不正解と解説がすぐ表示されます。',
  },
  {
    emoji: '🎯',
    title: 'テスト範囲を絞る',
    text: 'リッチメニュー「テスト範囲設定」で、出題範囲を指定できます。テスト前にぴったり。',
  },
  {
    emoji: '🔥',
    title: '連続記録を伸ばす',
    text: '毎日続けると連続日数が更新されます。「連続記録」ボタンで確認しよう。',
  },
];

const FAQ: QA[] = [
  {
    q: '配信時間や学年を変えたい',
    a: '「設定・サポート」ボタンから変更できます。プレミアムの方は「設定画面を開く」、無料の方はトークに「設定変更」と送ってください（1日1回まで）。',
  },
  {
    q: '今日の問題に答えそびれた',
    a: '当日中であれば、リッチメニューから問題のリンクをもう一度開ければ回答できます。翌日になると次の1問に切り替わります。',
  },
  {
    q: '同じ問題ばかり出る気がする',
    a: '直近の出題は重複しないようにしていますが、母集団が少ない範囲ではくり返しが起きます。テスト範囲を広げると改善します。',
  },
  {
    q: 'もっとたくさん解きたい',
    a: 'プレミアムプランで「追加で解く」「苦手を復習」が使えます。リッチメニューの「もっと解く」から詳細をご覧ください。',
  },
  {
    q: 'プレミアムを解約したい',
    a: '月額登録・解約は、決済ページまたは案内された管理画面から手続きできます。うまく進められない場合はお問い合わせください。',
  },
];

/**
 * 公式LINE のリッチメニュー無料版「使い方」ボタンの flex から
 * 「使い方を詳しく見る」LIFF button 経由で開かれる、使い方ガイド。
 *
 * 認証は不要（誰でも見られる）。アプリの使い方を網羅的に説明する。
 */
export function LiffHelpPage() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const liffId = import.meta.env.VITE_LIFF_ID_HELP as string | undefined;
      if (!liffId) return;
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
      } catch (err) {
        console.warn('[LiffHelpPage] liff.init failed', err);
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
            📖 使い方ガイド
          </h1>
          <p className="text-xs text-white/90 text-center mt-1">
            はじめての方も、もう慣れた方も
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        <section className="mt-4">
          <h2
            className="text-sm font-bold text-gray-700 px-1 mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            基本の流れ
          </h2>
          <ul className="space-y-2">
            {HOW_TO_USE.map((item) => (
              <li
                key={item.title}
                className="bg-white rounded-2xl shadow-sm px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-bold text-gray-800"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
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

        <section className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-gray-700 text-center leading-relaxed">
            解決しない場合は
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
        </section>

        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          チャットでスタディ
        </p>
      </main>
    </div>
  );
}
