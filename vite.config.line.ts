/**
 * LINE 版アプリ専用の Vite ビルド設定。
 *
 * - 入力エントリ: `index.line.html` → `src/main.line.tsx` → `src/line/App.line.tsx`
 * - 出力先: `dist-line/`（既存 `dist/` と分離）
 * - 含まれるルート: WelcomePage / LiffUnitsPage / LineCallbackPage / NotFoundPage のみ
 * - 既存の学習体験（TopPage / 263トピック / prerender 等）は import されないため bundle から除外される
 *
 * 詳細: `.steering/20260510-line-app-split/design.md`
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  // public/ には Web 版の教材画像（数百MB）が含まれるため、LINE 版では使わない。
  // LINE 版に必要な最小限の static アセットだけを `public_line/` に置く。
  publicDir: 'public_line',
  build: {
    outDir: 'dist-line',
    rollupOptions: {
      input: 'index.line.html',
      output: {
        // 重い依存を分離して main bundle を軽量化し、cache 効率も上げる。
        // - firebase: app/auth/firestore-lite。最大の塊
        // - react: react と react-dom
        // - router: react-router-dom
        manualChunks(id) {
          if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) {
            return 'firebase';
          }
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react/') ||
            id.endsWith('/react/index.js')
          ) {
            return 'react';
          }
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    'import.meta.env.VITE_MODE': JSON.stringify('line'),
  },
});
