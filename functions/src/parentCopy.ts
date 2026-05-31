/**
 * 保護者向けコピー（D-5: Day 3 に追加する保護者向け flex 用）。
 *
 * 設計鉄則:
 *   - **塾比較・授業料比較は本ファイルでのみ使用**（中学生本人向けでは禁止）
 *   - 中学生本人向けと混同しないよう、明示的に「保護者の方へ」見出しを付ける
 *   - 価格訴求の根拠は具体的に（塾 1コマ / 塾の授業 1回 / 副教材 1冊 など）
 *   - 「塾の体験授業」は無料のケースが多く比較として不適切なので使わない
 */

/** 保護者向け flex の見出し */
export function buildParentHeading(): string {
  return "お子様 / 保護者の方へ";
}

/** 保護者向け flex の本文（短文） */
export function buildParentCopyBody(): string {
  return [
    "月¥680 = 塾の授業1回分以下です。",
    "お子様の自走習慣を月単位で支援できます。",
  ].join("\n");
}

/** 保護者向け flex の箇条書き */
export function buildParentCopyBullets(): string[] {
  return [
    "✅ 学習履歴は LINE で保護者にも共有可能",
    "✅ 今後追加される教科分も同じ価格で使えます",
    "✅ カード未登録、いつでも停止可",
  ];
}

/** 保護者向け CTA テキスト */
export function getParentCtaText(): string {
  return "保護者の方が登録する";
}

/** 保護者向けの補助比較テキスト（塾・授業料比較） */
export function getParentPriceComparisons(): string[] {
  return [
    "塾の30分授業 1コマより安い",
    "塾の授業 1回分以下",
    "学習教室 月謝の 1/15 ほど",
  ];
}
