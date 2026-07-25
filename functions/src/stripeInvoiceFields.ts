/**
 * Stripe の Invoice / Subscription オブジェクトから「サブスクリプションID」と
 * 「次回請求日（period end）」を取り出す純粋関数。
 *
 * 背景: Stripe API `2025-04-30.basil` 以降でフィールドが移動しており、旧来の
 * トップレベル参照だと **undefined** になる。本アカウントの webhook エンドポイントは
 * `api_version: null`（＝アカウント既定＝最新。2026-07 時点で `2026-04-22.dahlia`）で
 * 配信されるため、現行形を正として扱う必要がある。
 *
 * 実物のオブジェクト（テストモードの実イベント / API retrieve）で確認した構造:
 *
 *  Invoice（`invoice.paid` の `data.object`）
 *   - `subscription`               … **廃止済み。undefined**
 *   - `subscription_details`       … **廃止済み。undefined**
 *   - `parent.subscription_details.subscription` … ← 現行のサブスクID
 *   - `lines.data[].parent.subscription_item_details.subscription` … 明細側にも入る（保険）
 *   - `period_start` / `period_end`（トップレベル）… **請求書自体の期間で
 *     `period_start === period_end` になる**（実測 1784929205 / 1784929205）。
 *     利用期間ではないので **期限延長に使ってはいけない**。
 *   - `lines.data[].period.end`    … ← 支払った分がカバーする利用期間の終わり（実測 1787607605）
 *
 *  Subscription（`/v1/subscriptions/{id}` retrieve、`customer.subscription.*` の object）
 *   - `current_period_end`（トップレベル）… **廃止済み。undefined**
 *   - `items.data[].current_period_end`  … ← 現行の次回請求日（実測 1787607605）
 *
 * 旧形（basil 以前）も後方互換で読めるようにしてある（API バージョンを固定したい将来の
 * 変更や、Stripe CLI の古いフィクスチャで壊れないように）。
 */

function getString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function getUnixSeconds(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? value
    : 0;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

/** `lines.data` を Record の配列として取り出す（形が壊れていても落ちない）。 */
function invoiceLines(
  invoice: Record<string, unknown>
): Record<string, unknown>[] {
  const lines = asRecord(invoice.lines);
  const data = lines && Array.isArray(lines.data) ? lines.data : [];
  const out: Record<string, unknown>[] = [];
  for (const line of data) {
    const record = asRecord(line);
    if (record) out.push(record);
  }
  return out;
}

/**
 * Invoice からサブスクリプションIDを取り出す。
 * 優先順: 現行形（parent） → 旧 details 形 → 旧トップレベル形 → 明細フォールバック。
 * 見つからなければ空文字。
 */
export function getInvoiceSubscriptionId(
  invoice: Record<string, unknown>
): string {
  // 1. 現行形（2025-04-30.basil 以降）
  const parent = asRecord(invoice.parent);
  if (parent) {
    const details = asRecord(parent.subscription_details);
    const fromParent = details ? getString(details.subscription) : '';
    if (fromParent) return fromParent;
  }

  // 2. `subscription_details.subscription`（移行期の形・後方互換）
  const legacyDetails = asRecord(invoice.subscription_details);
  if (legacyDetails) {
    const fromLegacy = getString(legacyDetails.subscription);
    if (fromLegacy) return fromLegacy;
  }

  // 3. 旧トップレベル（basil 以前）
  const legacyTop = getString(invoice.subscription);
  if (legacyTop) return legacyTop;

  // 4. 明細フォールバック: lines.data[].parent.subscription_item_details.subscription
  for (const line of invoiceLines(invoice)) {
    const lineParent = asRecord(line.parent);
    const itemDetails = lineParent
      ? asRecord(lineParent.subscription_item_details)
      : null;
    const fromItem = itemDetails ? getString(itemDetails.subscription) : '';
    if (fromItem) return fromItem;
    // さらに古い明細形（line.subscription）
    const fromLineTop = getString(line.subscription);
    if (fromLineTop) return fromLineTop;
  }

  return '';
}

/**
 * Invoice に載っているサブスクリプションの metadata（`uid` / `product` を含む）を返す。
 * 現行形は `parent.subscription_details.metadata`。見つからなければ旧形 → 明細の順。
 * Subscription の retrieve が失敗したときの uid フォールバックに使う。
 */
export function getInvoiceSubscriptionMetadata(
  invoice: Record<string, unknown>
): Record<string, unknown> {
  const parent = asRecord(invoice.parent);
  if (parent) {
    const details = asRecord(parent.subscription_details);
    const metadata = details ? asRecord(details.metadata) : null;
    if (metadata) return metadata;
  }

  const legacyDetails = asRecord(invoice.subscription_details);
  if (legacyDetails) {
    const metadata = asRecord(legacyDetails.metadata);
    if (metadata) return metadata;
  }

  for (const line of invoiceLines(invoice)) {
    const metadata = asRecord(line.metadata);
    if (metadata && Object.keys(metadata).length > 0) return metadata;
  }

  return {};
}

/**
 * Subscription オブジェクトから次回請求日（unix 秒）を取り出す。
 * 現行形では `items.data[].current_period_end` にあり、トップレベルの
 * `current_period_end` は存在しない。複数明細がある場合は**最も遅い**期末を採る
 * （その時点まで課金済み＝利用させてよい）。取れなければ 0。
 */
export function getSubscriptionPeriodEnd(
  subscription: Record<string, unknown>
): number {
  // 1. 旧トップレベル（basil 以前 / API バージョン固定時）
  const top = getUnixSeconds(subscription.current_period_end);
  if (top > 0) return top;

  // 2. 現行形: items.data[].current_period_end の最大値
  const items = asRecord(subscription.items);
  const data = items && Array.isArray(items.data) ? items.data : [];
  let latest = 0;
  for (const item of data) {
    const record = asRecord(item);
    if (!record) continue;
    const end = getUnixSeconds(record.current_period_end);
    if (end > latest) latest = end;
  }
  return latest;
}

/**
 * Invoice の明細から「支払った分がカバーする利用期間の終わり」（unix 秒）を取り出す。
 * Subscription の retrieve が失敗したときのフォールバック用。
 *
 * ⚠️ Invoice トップレベルの `period_end` は請求書自体の期間（実測で `period_start` と
 * 同値）であって利用期間ではないため、**使わない**。
 */
export function getInvoiceLinesPeriodEnd(
  invoice: Record<string, unknown>
): number {
  let latest = 0;
  for (const line of invoiceLines(invoice)) {
    const period = asRecord(line.period);
    const end = period ? getUnixSeconds(period.end) : 0;
    if (end > latest) latest = end;
  }
  return latest;
}

/**
 * Invoice / Subscription 由来の期末を突き合わせて、実際に使う period end を決める。
 * Subscription 側（＝次回請求日そのもの）を優先し、取れないときだけ明細にフォールバックする。
 */
export function resolvePeriodEnd(
  subscriptionPeriodEnd: number,
  invoiceLinesPeriodEnd: number
): number {
  const fromSub = getUnixSeconds(subscriptionPeriodEnd);
  if (fromSub > 0) return fromSub;
  return getUnixSeconds(invoiceLinesPeriodEnd);
}
