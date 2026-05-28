// @vitest-environment node

import { describe, it, expect } from 'vitest';
import * as crypto from 'crypto';
import {
  renderDmText,
  truncateText,
  verifySignature,
} from '../instagramWebhook';

const SECRET = 'test-app-secret';

function makeReq(opts: {
  body: string;
  signature?: string;
  withRaw?: boolean;
}) {
  const headers: Record<string, string> = {};
  if (opts.signature) headers['x-hub-signature-256'] = opts.signature;
  return {
    get(name: string): string | undefined {
      return headers[name.toLowerCase()];
    },
    rawBody: opts.withRaw === false ? undefined : Buffer.from(opts.body),
  } as unknown as Parameters<typeof verifySignature>[0];
}

function sign(body: string, secret: string): string {
  return (
    'sha256=' +
    crypto.createHmac('sha256', secret).update(Buffer.from(body)).digest('hex')
  );
}

describe('verifySignature', () => {
  it('正しい署名で true', () => {
    const body = '{"object":"instagram"}';
    const signature = sign(body, SECRET);
    expect(verifySignature(makeReq({ body, signature }), SECRET)).toBe(true);
  });

  it('間違ったシークレットで生成された署名は false', () => {
    const body = '{"object":"instagram"}';
    const signature = sign(body, 'wrong-secret');
    expect(verifySignature(makeReq({ body, signature }), SECRET)).toBe(false);
  });

  it('署名ヘッダ無しで false', () => {
    expect(
      verifySignature(makeReq({ body: 'x' }), SECRET),
    ).toBe(false);
  });

  it('sha256= プレフィックス無しで false', () => {
    const body = 'x';
    const hex = crypto
      .createHmac('sha256', SECRET)
      .update(Buffer.from(body))
      .digest('hex');
    expect(
      verifySignature(makeReq({ body, signature: hex }), SECRET),
    ).toBe(false);
  });

  it('appSecret 未設定で false', () => {
    const body = 'x';
    expect(
      verifySignature(makeReq({ body, signature: sign(body, SECRET) }), ''),
    ).toBe(false);
  });

  it('rawBody が無い場合は false', () => {
    const body = 'x';
    expect(
      verifySignature(
        makeReq({ body, signature: sign(body, SECRET), withRaw: false }),
        SECRET,
      ),
    ).toBe(false);
  });

  it('長さが異なる署名で false（timingSafeEqual の throw を吸収）', () => {
    expect(
      verifySignature(makeReq({ body: 'x', signature: 'sha256=abcd' }), SECRET),
    ).toBe(false);
  });
});

describe('renderDmText', () => {
  it('{lineUrl} プレースホルダを置換', () => {
    expect(
      renderDmText('こちらから: {lineUrl}', 'https://lin.ee/xxx'),
    ).toBe('こちらから: https://lin.ee/xxx');
  });

  it('複数の {lineUrl} を全て置換', () => {
    expect(renderDmText('A {lineUrl} B {lineUrl}', 'URL')).toBe('A URL B URL');
  });

  it('プレースホルダが無ければそのまま返す', () => {
    expect(renderDmText('ただのテキスト', 'URL')).toBe('ただのテキスト');
  });
});

describe('truncateText', () => {
  it('上限以下はそのまま', () => {
    expect(truncateText('短い', 500)).toBe('短い');
  });

  it('上限を超えると切り詰め', () => {
    const long = 'あ'.repeat(600);
    expect(truncateText(long, 500)).toHaveLength(500);
  });
});
