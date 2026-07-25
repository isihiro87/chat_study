/**
 * Stripe イベントの「商品タグ」を取り出す純粋関数。
 *
 * 背景: プレミアム（`stripeWebhook`）と つづもん（`tsudumonStripeWebhook`）は **同一 Stripe
 * アカウント**に相乗りしている。Stripe は同一アカウント内の同じイベントを**全エンドポイントへ
 * 配信する**ため、対策なしだと「つづもん購入 → プレミアム権限が誤付与」「プレミアムの継続課金
 * → つづもんの利用権が誤延長」といった相互汚染が起きる。
 *
 * そこで Checkout Session / Subscription の metadata に `product` タグを載せ、
 *  - つづもん側 webhook: タグが `tsudumon` の**イベントだけ**処理（opt-in）
 *  - プレミアム側 webhook: タグが `tsudumon` の**イベントだけ**素通り（opt-out）
 * という振り分けを行う。判定はこのファイルの純粋関数に集約する。
 *
 * 探索場所は実際の Stripe オブジェクトを確認して決めている（推測ではない）:
 *  - `metadata.product` … Checkout Session / Subscription はここ
 *  - `parent.subscription_details.metadata.product` … Invoice。2025-04-30.basil 以降の
 *    API バージョンではサブスクの metadata がここに入る（本アカウントの現行形）
 *  - `subscription_details.metadata.product` … basil 以前の Invoice 形（後方互換）
 *  - `lines.data[].metadata.product` … Invoice 明細のフォールバック
 */

/** つづもん商品を示すタグ値。Checkout 作成時に metadata へ載せる。 */
export const TSUDUMON_PRODUCT_TAG = 'tsudumon';

function getString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

/** `{ product: '...' }` 形の metadata から product を取り出す。 */
function tagFromMetadata(metadata: unknown): string {
  const record = asRecord(metadata);
  return record ? getString(record.product) : '';
}

/**
 * Stripe イベントの `data.object` から商品タグ（`metadata.product`）を取り出す。
 * 見つからなければ空文字を返す（＝タグ無し）。
 */
export function getStripeProductTag(obj: Record<string, unknown>): string {
  // 1. Checkout Session / Subscription（および metadata を持つ一般オブジェクト）
  const direct = tagFromMetadata(obj.metadata);
  if (direct) return direct;

  // 2. Invoice（2025-04-30.basil 以降）: parent.subscription_details.metadata
  const parent = asRecord(obj.parent);
  if (parent) {
    const details = asRecord(parent.subscription_details);
    const fromParent = tagFromMetadata(details ? details.metadata : null);
    if (fromParent) return fromParent;
  }

  // 3. Invoice（basil 以前）: subscription_details.metadata
  const legacyDetails = asRecord(obj.subscription_details);
  if (legacyDetails) {
    const fromLegacy = tagFromMetadata(legacyDetails.metadata);
    if (fromLegacy) return fromLegacy;
  }

  // 4. Invoice 明細のフォールバック: lines.data[].metadata
  const lines = asRecord(obj.lines);
  const data = lines && Array.isArray(lines.data) ? lines.data : [];
  for (const line of data) {
    const fromLine = tagFromMetadata(asRecord(line)?.metadata);
    if (fromLine) return fromLine;
  }

  return '';
}

/** つづもん商品のイベントか。 */
export function isTsudumonProduct(obj: Record<string, unknown>): boolean {
  return getStripeProductTag(obj) === TSUDUMON_PRODUCT_TAG;
}
