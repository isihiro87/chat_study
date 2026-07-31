// @vitest-environment node
/**
 * 参考書AI対話セッションの TTL・離脱判定。
 *
 * 回帰の対象: 2026-07-26、この対話に入ったまま抜けられず、別の話題（江戸時代の質問・
 * テスト勉強の相談）まで「この単元の範囲では説明されていないよ」で返り続けた事故。
 * 原因は「TTLが無い」「離脱ワードが6語の完全一致だけ」の2点。
 */
import { describe, it, expect } from 'vitest';

import {
  REF_SESSION_TTL_MS,
  isRefEndText,
  isRefSessionExpired,
} from '../refSessionCore';

describe('refSessionCore: 期限切れ判定', () => {
  const now = new Date('2026-07-26T13:40:00+09:00').getTime();

  it('直前のやり取りなら継続する', () => {
    expect(isRefSessionExpired({ updatedAt: now - 60 * 1000 }, now)).toBe(
      false
    );
  });

  it('TTLちょうど以内は継続、超えたら期限切れ', () => {
    expect(
      isRefSessionExpired({ updatedAt: now - REF_SESSION_TTL_MS }, now)
    ).toBe(false);
    expect(
      isRefSessionExpired({ updatedAt: now - REF_SESSION_TTL_MS - 1 }, now)
    ).toBe(true);
  });

  it('updatedAt が無い古いセッションは期限切れ扱い（固定されている人を自己修復する）', () => {
    expect(isRefSessionExpired({}, now)).toBe(true);
    expect(isRefSessionExpired(undefined, now)).toBe(true);
    expect(isRefSessionExpired(null, now)).toBe(true);
  });

  it('5時間放置は必ず期限切れ（実機で観測したケース）', () => {
    const morning = new Date('2026-07-26T08:39:00+09:00').getTime();
    expect(isRefSessionExpired({ updatedAt: morning }, now)).toBe(true);
  });
});

describe('refSessionCore: 離脱ワード', () => {
  it('従来の終了ワードは引き続き効く', () => {
    for (const t of [
      'おわり',
      '終わり',
      'やめる',
      '終了',
      'stop',
      'ストップ',
    ]) {
      expect(isRefEndText(t)).toBe(true);
    }
  });

  it('「別の話がしたい」系の言い回しでも抜けられる', () => {
    for (const t of [
      'もどる',
      '戻る',
      'ぬける',
      'キャンセル',
      'べつの話',
      '別の単元',
      'ちがう話',
      '違う単元',
      'exit',
    ]) {
      expect(isRefEndText(t)).toBe(true);
    }
  });

  it('末尾の記号・空白は許容する', () => {
    expect(isRefEndText('おわり！')).toBe(true);
    expect(isRefEndText('  終了。 ')).toBe(true);
  });

  it('学習の質問を誤って離脱と判定しない', () => {
    for (const t of [
      '江戸時代の初期に関する勉強をしたい',
      '来週テストなんだけどどう進めればいい？',
      '足利義満って何をした人？',
      '終わりの時期はいつごろ？', // 「終わり」を含むが離脱ではない
      'この戦争が終わる理由を教えて',
    ]) {
      expect(isRefEndText(t)).toBe(false);
    }
  });
});
