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
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LineApp />
    </BrowserRouter>
  </React.StrictMode>
);
