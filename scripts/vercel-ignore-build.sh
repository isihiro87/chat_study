#!/usr/bin/env bash
# Vercel「Ignored Build Step」用スクリプト。
#
# つづもん(/tsudumon/**)は Firebase Hosting が配信し、Vercel はプロキシするだけ
# （vercel.json の /tsudumon/(.*) → tsudumon.web.app）。よって public/tsudumon だけの
# 変更で www の SPA フルビルド(tsc+vite+prerender263, 約17分)を走らせるのは無駄。
# このスクリプトが「今回の push が public/tsudumon 以外を触っていないか」を判定し、
# 触っていなければビルドをスキップする。
#
# Vercel の規約: exit 0 = ビルドをスキップ / exit 1 = ビルド実行。
#
# 設定方法（1回だけ・Vercelダッシュボード）:
#   Project → Settings → Git → Ignored Build Step に次を設定:
#     bash scripts/vercel-ignore-build.sh
#
# 注意: HEAD^ が取れない(初回/浅いクローン)場合や git エラー時は安全側に倒して
#       ビルドを実行する(exit 1)。

if git diff --quiet HEAD^ HEAD -- . ':(exclude)public/tsudumon' 2>/dev/null; then
  echo "変更は public/tsudumon のみ → www ビルドをスキップ (Firebase が配信)"
  exit 0
else
  echo "public/tsudumon 以外の変更あり → www ビルドを実行"
  exit 1
fi
