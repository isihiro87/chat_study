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
import { readCachedGrade, readCachedPlan } from './utils/liffStudyCache';
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

// 学年データの大きい chunk（g1=583KB / g2=439KB / g3=243KB）は
// `/liff/units`（プレミアム機能「じっくり学ぶ」）でしか使われない。
// 無料ユーザーや /liff/scope, /liff/premium-info, /liff/help などの
// 軽量ページではダウンロード・パースが純粋な無駄になり、特に LIFF 内蔵
// ブラウザの低速回線で他 chunk（React / firebase / @line/liff）の取得を
// 遅らせて初期表示を遅延させる。
//
// 二段ゲート:
//   1. pathname が `/liff/units` のときだけ prefetch する
//      （他ページからのナビゲーションでは LiffUnitsPage 側の dynamic import に任せる）
//   2. 前回観測した plan が 'premium' のときだけ prefetch する
//      （初訪問・無料ユーザー・キャッシュ無効化後は安全側に倒して prefetch しない）
//
// uid が判明する前なので `_anon` 名前空間からの読み出しになる（liffStudyCache
// 側で uid 別と anon の両方に書き込む設計）。
function shouldPrefetchStudyChunk(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.location.pathname !== '/liff/units') return false;
  return readCachedPlan(null) === 'premium';
}

if (shouldPrefetchStudyChunk()) {
  const cachedGrade = readCachedGrade(null);
  if (cachedGrade === 1) {
    void import('./data/generated/line-study-history-g1.generated').catch(
      () => undefined
    );
  } else if (cachedGrade === 2) {
    void import('./data/generated/line-study-history-g2.generated').catch(
      () => undefined
    );
  } else if (cachedGrade === 3) {
    void import('./data/generated/line-study-history-g3.generated').catch(
      () => undefined
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LineApp />
    </BrowserRouter>
  </React.StrictMode>
);
