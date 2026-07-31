import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'dist-line/**',
      'coverage/**',
      '.steering/**',
      'functions/lib/**',
      'functions/node_modules/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      // `_` 接頭辞は「意図的に使っていない」の目印。引数だけでなく変数・関数にも効かせる
      // （`scripts/generate-geometry-figures.ts` の `_arcThrough` のように、
      //   作図の途中式として残してある補助関数を消さずに済ませるため）。
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: [
      'scripts/**/*.{ts,mjs,js}',
      'functions/src/**/*.ts',
      '*.config.{js,ts,mjs}',
      'vite.config.ts',
      'vitest.config.ts',
      'postcss.config.js',
      'tailwind.config.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
