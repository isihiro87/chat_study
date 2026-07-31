import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

const ENV_KEY = 'LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN';

describe('getTsudumonLineClient', () => {
  const originalValue = process.env[ENV_KEY];

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    if (originalValue === undefined) {
      delete process.env[ENV_KEY];
    } else {
      process.env[ENV_KEY] = originalValue;
    }
  });

  it('env未設定時は例外を投げる（旧Botのトークンへフォールバックしない）', async () => {
    delete process.env[ENV_KEY];
    const { getTsudumonLineClient } = await import('../tsudumon/client');
    await expect(getTsudumonLineClient()).rejects.toThrow(
      'LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN is not set'
    );
  });

  it('2回呼ぶと同一インスタンスが返る（モジュールスコープでキャッシュ）', async () => {
    process.env[ENV_KEY] = 'dummy-test-token';
    const { getTsudumonLineClient } = await import('../tsudumon/client');
    const first = await getTsudumonLineClient();
    const second = await getTsudumonLineClient();
    expect(second).toBe(first);
  });
});
