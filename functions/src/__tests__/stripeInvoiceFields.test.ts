// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  getInvoiceLinesPeriodEnd,
  getInvoiceSubscriptionId,
  getInvoiceSubscriptionMetadata,
  getSubscriptionPeriodEnd,
  resolvePeriodEnd,
} from '../stripeInvoiceFields';

/**
 * 実データ（テストモードの実 `invoice.paid` イベント / api_version 2026-04-22.dahlia）
 * を刈り込んだもの。`subscription` / `subscription_details` がトップレベルに
 * **存在しない**のが現行形のポイント。
 */
const CURRENT_INVOICE = {
  id: 'in_1Twqp7KQXAjIGgOguDDpdM97',
  object: 'invoice',
  customer: 'cus_UwkJNZLnmqMEHW',
  metadata: {},
  // トップレベルの period_* は「請求書自体の期間」で start === end になる（実測値）。
  period_start: 1784929205,
  period_end: 1784929205,
  parent: {
    type: 'subscription_details',
    quote_details: null,
    subscription_details: {
      subscription: 'sub_1Twqp9KQXAjIGgOgVfQacg3q',
      metadata: { uid: 'line:TESTSTRIPE001', product: 'tsudumon' },
    },
  },
  lines: {
    data: [
      {
        id: 'il_1Twqp7KQXAjIGgOgFJ8iN796',
        object: 'line_item',
        metadata: { uid: 'line:TESTSTRIPE001' },
        parent: {
          type: 'subscription_item_details',
          invoice_item_details: null,
          subscription_item_details: {
            subscription: 'sub_1Twqp9KQXAjIGgOgVfQacg3q',
            subscription_item: 'si_UwkJqmp4pn8NGb',
            proration: false,
          },
        },
        period: { start: 1784929205, end: 1787607605 },
      },
    ],
  },
};

/** basil 以前の Invoice 形（後方互換の確認用）。 */
const LEGACY_INVOICE = {
  id: 'in_legacy',
  object: 'invoice',
  subscription: 'sub_legacy',
  subscription_details: {
    metadata: { uid: 'line:U999', product: 'tsudumon' },
  },
  lines: {
    data: [{ id: 'il_legacy', period: { start: 1700000000, end: 1702592000 } }],
  },
};

/**
 * 実データ（`/v1/subscriptions/{id}` retrieve）を刈り込んだもの。
 * トップレベルの `current_period_end` は**存在しない**。
 */
const CURRENT_SUBSCRIPTION = {
  id: 'sub_1Twqp9KQXAjIGgOgVfQacg3q',
  object: 'subscription',
  customer: 'cus_UwkJNZLnmqMEHW',
  status: 'active',
  billing_cycle_anchor: 1784929205,
  metadata: { uid: 'line:TESTSTRIPE001', product: 'tsudumon' },
  items: {
    object: 'list',
    data: [
      {
        id: 'si_UwkJqmp4pn8NGb',
        object: 'subscription_item',
        current_period_start: 1784929205,
        current_period_end: 1787607605,
        quantity: 1,
      },
    ],
  },
};

/** basil 以前の Subscription 形。 */
const LEGACY_SUBSCRIPTION = {
  id: 'sub_legacy',
  object: 'subscription',
  status: 'active',
  current_period_end: 1702592000,
  metadata: { uid: 'line:U999' },
};

describe('getInvoiceSubscriptionId', () => {
  it('現行形（parent.subscription_details.subscription）から取れる', () => {
    expect(getInvoiceSubscriptionId(CURRENT_INVOICE)).toBe(
      'sub_1Twqp9KQXAjIGgOgVfQacg3q'
    );
  });

  it('旧形（トップレベル subscription）から取れる', () => {
    expect(getInvoiceSubscriptionId(LEGACY_INVOICE)).toBe('sub_legacy');
  });

  it('移行期の形（subscription_details.subscription）から取れる', () => {
    const invoice = {
      object: 'invoice',
      subscription_details: { subscription: 'sub_mid', metadata: {} },
    };
    expect(getInvoiceSubscriptionId(invoice)).toBe('sub_mid');
  });

  it('parent が空でも明細（lines[].parent.subscription_item_details）へフォールバックする', () => {
    const invoice = {
      ...CURRENT_INVOICE,
      parent: { type: 'subscription_details', subscription_details: null },
    };
    expect(getInvoiceSubscriptionId(invoice)).toBe(
      'sub_1Twqp9KQXAjIGgOgVfQacg3q'
    );
  });

  it('サブスク由来でない Invoice では空文字', () => {
    expect(getInvoiceSubscriptionId({ object: 'invoice' })).toBe('');
    expect(
      getInvoiceSubscriptionId({
        object: 'invoice',
        parent: { type: 'quote_details', subscription_details: null },
        lines: { data: [{ id: 'il_1', parent: null }] },
      })
    ).toBe('');
  });

  it('壊れた形でも例外を投げない', () => {
    expect(getInvoiceSubscriptionId({ parent: 'x', lines: 5 })).toBe('');
    expect(getInvoiceSubscriptionId({ lines: { data: [null, 'x'] } })).toBe('');
    expect(getInvoiceSubscriptionId({ subscription: 123 })).toBe('');
  });
});

describe('getSubscriptionPeriodEnd', () => {
  it('現行形（items.data[].current_period_end）から取れる ※トップレベルは無い', () => {
    expect(
      (CURRENT_SUBSCRIPTION as Record<string, unknown>).current_period_end
    ).toBeUndefined();
    expect(getSubscriptionPeriodEnd(CURRENT_SUBSCRIPTION)).toBe(1787607605);
  });

  it('旧形（トップレベル current_period_end）から取れる', () => {
    expect(getSubscriptionPeriodEnd(LEGACY_SUBSCRIPTION)).toBe(1702592000);
  });

  it('複数明細では最も遅い期末を採る', () => {
    const sub = {
      items: {
        data: [
          { current_period_end: 1787607605 },
          { current_period_end: 1790000000 },
          { current_period_end: null },
        ],
      },
    };
    expect(getSubscriptionPeriodEnd(sub)).toBe(1790000000);
  });

  it('取れないときは 0', () => {
    expect(getSubscriptionPeriodEnd({})).toBe(0);
    expect(getSubscriptionPeriodEnd({ items: { data: [] } })).toBe(0);
    expect(getSubscriptionPeriodEnd({ items: 'x' })).toBe(0);
    expect(getSubscriptionPeriodEnd({ current_period_end: '1787607605' })).toBe(
      0
    );
  });
});

describe('getInvoiceLinesPeriodEnd', () => {
  it('明細の period.end から利用期間の終わりが取れる', () => {
    expect(getInvoiceLinesPeriodEnd(CURRENT_INVOICE)).toBe(1787607605);
  });

  it('トップレベルの period_end（＝period_start と同値）は使わない', () => {
    expect(CURRENT_INVOICE.period_end).toBe(CURRENT_INVOICE.period_start);
    expect(getInvoiceLinesPeriodEnd(CURRENT_INVOICE)).not.toBe(
      CURRENT_INVOICE.period_end
    );
  });

  it('旧形の Invoice でも取れる', () => {
    expect(getInvoiceLinesPeriodEnd(LEGACY_INVOICE)).toBe(1702592000);
  });

  it('明細が無い / 壊れているときは 0', () => {
    expect(getInvoiceLinesPeriodEnd({})).toBe(0);
    expect(getInvoiceLinesPeriodEnd({ lines: { data: [] } })).toBe(0);
    expect(
      getInvoiceLinesPeriodEnd({ lines: { data: [{ period: null }] } })
    ).toBe(0);
  });
});

describe('getInvoiceSubscriptionMetadata', () => {
  it('現行形（parent.subscription_details.metadata）から uid が取れる', () => {
    expect(getInvoiceSubscriptionMetadata(CURRENT_INVOICE).uid).toBe(
      'line:TESTSTRIPE001'
    );
  });

  it('旧形（subscription_details.metadata）から uid が取れる', () => {
    expect(getInvoiceSubscriptionMetadata(LEGACY_INVOICE).uid).toBe(
      'line:U999'
    );
  });

  it('parent が空なら明細 metadata にフォールバックする', () => {
    const invoice = {
      ...CURRENT_INVOICE,
      parent: { type: 'subscription_details', subscription_details: null },
    };
    expect(getInvoiceSubscriptionMetadata(invoice).uid).toBe(
      'line:TESTSTRIPE001'
    );
  });

  it('無いときは空オブジェクト', () => {
    expect(getInvoiceSubscriptionMetadata({})).toEqual({});
    expect(getInvoiceSubscriptionMetadata({ parent: 'x', lines: 1 })).toEqual(
      {}
    );
  });
});

describe('resolvePeriodEnd', () => {
  it('subscription 側を優先する', () => {
    expect(resolvePeriodEnd(1787607605, 1700000000)).toBe(1787607605);
  });

  it('subscription 側が取れなければ明細へフォールバックする', () => {
    expect(resolvePeriodEnd(0, 1787607605)).toBe(1787607605);
  });

  it('どちらも無ければ 0', () => {
    expect(resolvePeriodEnd(0, 0)).toBe(0);
    expect(resolvePeriodEnd(-1, -1)).toBe(0);
  });
});

describe('現行形の invoice.paid から期限延長に必要な値が一式そろう（回帰）', () => {
  it('sub id と period end が取れ、旧実装（obj.subscription）は undefined', () => {
    // 旧実装が壊れていたことの明示（この参照は現行 API では undefined）。
    expect(
      (CURRENT_INVOICE as Record<string, unknown>).subscription
    ).toBeUndefined();

    const subscriptionId = getInvoiceSubscriptionId(CURRENT_INVOICE);
    const periodEnd = resolvePeriodEnd(
      getSubscriptionPeriodEnd(CURRENT_SUBSCRIPTION),
      getInvoiceLinesPeriodEnd(CURRENT_INVOICE)
    );
    expect(subscriptionId).toBe('sub_1Twqp9KQXAjIGgOgVfQacg3q');
    expect(periodEnd).toBe(1787607605);

    // expiresAt = period_end + 猶予3日
    const expiresMs = periodEnd * 1000 + 3 * 24 * 60 * 60 * 1000;
    expect(new Date(expiresMs).toISOString()).toBe('2026-08-27T21:40:05.000Z');
  });
});
