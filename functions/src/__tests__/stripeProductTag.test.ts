// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  TSUDUMON_PRODUCT_TAG,
  getStripeProductTag,
  isTsudumonProduct,
} from '../stripeProductTag';

describe('getStripeProductTag', () => {
  it('Checkout Session 形（metadata.product）でタグが取れる', () => {
    const session = {
      object: 'checkout.session',
      client_reference_id: 'line:U123',
      metadata: { uid: 'line:U123', product: 'tsudumon' },
      subscription: 'sub_1',
    };
    expect(getStripeProductTag(session)).toBe(TSUDUMON_PRODUCT_TAG);
    expect(isTsudumonProduct(session)).toBe(true);
  });

  it('Subscription 形（metadata.product）でタグが取れる', () => {
    const subscription = {
      object: 'subscription',
      id: 'sub_1',
      status: 'active',
      metadata: { uid: 'line:U123', product: 'tsudumon' },
    };
    expect(getStripeProductTag(subscription)).toBe(TSUDUMON_PRODUCT_TAG);
  });

  it('Invoice 形（parent.subscription_details.metadata）でタグが取れる ※現行 API', () => {
    // 実データ（2026-07 時点のアカウント既定 API バージョン）で確認した形。
    const invoice = {
      object: 'invoice',
      metadata: {},
      parent: {
        type: 'subscription_details',
        quote_details: null,
        subscription_details: {
          subscription: 'sub_1',
          metadata: { uid: 'line:U123', product: 'tsudumon' },
        },
      },
    };
    expect(getStripeProductTag(invoice)).toBe(TSUDUMON_PRODUCT_TAG);
  });

  it('Invoice 形（subscription_details.metadata・basil 以前）でタグが取れる', () => {
    const invoice = {
      object: 'invoice',
      subscription: 'sub_1',
      subscription_details: {
        metadata: { uid: 'line:U123', product: 'tsudumon' },
      },
    };
    expect(getStripeProductTag(invoice)).toBe(TSUDUMON_PRODUCT_TAG);
  });

  it('Invoice 明細（lines.data[].metadata）へフォールバックする', () => {
    const invoice = {
      object: 'invoice',
      metadata: {},
      parent: { type: 'subscription_details', subscription_details: null },
      lines: {
        data: [
          { id: 'il_1', metadata: {} },
          { id: 'il_2', metadata: { uid: 'line:U123', product: 'tsudumon' } },
        ],
      },
    };
    expect(getStripeProductTag(invoice)).toBe(TSUDUMON_PRODUCT_TAG);
  });

  it('タグ無しのオブジェクトでは空文字を返す', () => {
    expect(getStripeProductTag({})).toBe('');
    expect(getStripeProductTag({ metadata: {} })).toBe('');
    expect(getStripeProductTag({ metadata: null })).toBe('');
    expect(getStripeProductTag({ lines: { data: [] } })).toBe('');
  });

  it('プレミアムの実イベント形（uid / lineUserId はあるが product 無し）は空文字', () => {
    const premiumSession = {
      object: 'checkout.session',
      mode: 'subscription',
      payment_status: 'paid',
      client_reference_id: 'line:U999',
      customer: 'cus_1',
      subscription: 'sub_9',
      metadata: {
        uid: 'line:U999',
        lineUserId: 'U999',
        lockedMonthlyPrice: '680',
      },
    };
    expect(getStripeProductTag(premiumSession)).toBe('');
    expect(isTsudumonProduct(premiumSession)).toBe(false);
  });

  it('プレミアムの Subscription / Invoice 形も空文字（＝プレミアム側で従来どおり処理される）', () => {
    const premiumSubscription = {
      object: 'subscription',
      id: 'sub_9',
      status: 'active',
      current_period_end: 1800000000,
      metadata: { uid: 'line:U999', lineUserId: 'U999' },
    };
    expect(getStripeProductTag(premiumSubscription)).toBe('');

    const premiumInvoice = {
      object: 'invoice',
      metadata: {},
      parent: {
        type: 'subscription_details',
        subscription_details: {
          subscription: 'sub_9',
          metadata: { uid: 'line:U999', lineUserId: 'U999' },
        },
      },
      lines: { data: [{ id: 'il_9', metadata: { uid: 'line:U999' } }] },
    };
    expect(getStripeProductTag(premiumInvoice)).toBe('');
  });

  it('別サービスのタグはそのまま返る（つづもん扱いにはしない）', () => {
    const other = { metadata: { product: 'premium' } };
    expect(getStripeProductTag(other)).toBe('premium');
    expect(isTsudumonProduct(other)).toBe(false);
  });

  it('metadata が壊れた形（配列・数値）でも例外を投げない', () => {
    expect(getStripeProductTag({ metadata: [1, 2] })).toBe('');
    expect(getStripeProductTag({ metadata: { product: 123 } })).toBe('');
    expect(getStripeProductTag({ parent: 'x', lines: 5 })).toBe('');
    expect(getStripeProductTag({ lines: { data: [null, 'x'] } })).toBe('');
  });
});
