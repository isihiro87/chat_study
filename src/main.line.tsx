/**
 * LINE 版アプリのエントリポイント。
 *
 * Web 版の `src/main.tsx` と並行して、`vite.config.line.ts` から build される。
 * 詳細: `.steering/20260510-line-app-split/design.md`
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LineApp } from './line/App.line';
import { readCachedGrade } from './utils/liffStudyCache';
import './styles/index.css';

// ─── 起動直後の prefetch（fire-and-forget）────────────────────────────
//
// LIFF 版の初期表示ウォーターフォール（HTML → React → LiffUnitsPage マウント →
// useLiffAuth が `import('@line/liff')` を発火）はシーケンシャルに走ると
// 体感 10 秒級になる。ここで React マウントと並列に chunk のダウンロードを
// 開始しておくことで、useLiffAuth / LiffUnitsPage が実際に必要としたときは
// chunk が既に手元（Vite のモジュールキャッシュ）にあって即解決する。
//
// 失敗は握り潰す。実際に必要になった時点で通常の `import()` が再 fetch するため、
// prefetch が失敗してもユーザー体験には影響しない。
void import('@line/liff').catch(() => undefined);

// 前回ログインで観測した grade があれば、学年データの大きい chunk を先読みする。
// uid が判明する前なので `_anon` 名前空間からの読み出しになる（liffStudyCache
// 側で uid 別と anon の両方に書き込む設計）。
const cachedGrade = readCachedGrade(null);
if (cachedGrade === 1) {
  void import('./data/generated/line-study-history-g1.generated').catch(() => undefined);
} else if (cachedGrade === 2) {
  void import('./data/generated/line-study-history-g2.generated').catch(() => undefined);
} else if (cachedGrade === 3) {
  void import('./data/generated/line-study-history-g3.generated').catch(() => undefined);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LineApp />
    </BrowserRouter>
  </React.StrictMode>
);
