/**
 * リッチメニュー「📖 教材をひらく」の応答文の検査。
 *
 * 守りたいこと:
 *   - **必ず2択**（おすすめの1単元／ぜんぶから選ぶ）。片方だけにしない
 *   - 未登録・期限切れの人でも**押し損にならない**（体験の入口＋無料の1単元）
 */

import { describe, it, expect } from 'vitest';

import {
  buildOpenMaterialMessage,
  buildOpenMaterialLockedMessage,
} from '../tsudumonOpenMaterial';
import { TSUDUMON_FREE_UNIT_NO } from '../tsudumonUnits';
import { TSUDUMON_FREE_WORKBOOK_TOPICS } from '../tsudumonCore';

describe('buildOpenMaterialMessage（登録済み）', () => {
  it('単元の問題・参考書・教材トップの3つのURLを並べる', () => {
    const text = buildOpenMaterialMessage({ unitNo: '05', firstTime: false });
    expect(text).toContain('https://tsudumon.jp/wb/05/');
    expect(text).toContain('https://tsudumon.jp/ref/05/');
    expect(text).toContain('https://tsudumon.jp/map/');
  });

  it('単元名と学年・章番号を出す', () => {
    const text = buildOpenMaterialMessage({ unitNo: '05', firstTime: false });
    expect(text).toContain('【中1・05】武士と鎌倉幕府');
  });

  it('枕（なぜこの単元か）があればそれを書き出しに使う', () => {
    const text = buildOpenMaterialMessage({
      unitNo: '08',
      lead: 'テストまであと3日。',
      firstTime: false,
    });
    expect(text.startsWith('テストまであと3日。')).toBe(true);
  });

  it('記録が無い人には「はじめの1単元」と案内する', () => {
    const text = buildOpenMaterialMessage({ unitNo: '01', firstTime: true });
    expect(text).toContain('はじめの1単元');
  });

  it('記録がある人には「つづきから」と案内する', () => {
    const text = buildOpenMaterialMessage({ unitNo: '07', firstTime: false });
    expect(text).toContain('つづきから');
  });

  it('知らない章番号でも壊れない（先頭章へ倒す）', () => {
    const text = buildOpenMaterialMessage({ unitNo: '99', firstTime: false });
    expect(text).toContain('https://tsudumon.jp/wb/01/');
  });
});

describe('buildOpenMaterialLockedMessage（未登録・期限切れ）', () => {
  const text = buildOpenMaterialLockedMessage();

  it('体験の入口を出す', () => {
    expect(text).toContain('https://tsudumon.jp/account/?do=trial');
    expect(text).toContain('3日間無料でためす');
  });

  it('教材トップと常時無料の節も出す（押し損にしない）', () => {
    expect(text).toContain('https://tsudumon.jp/map/');
    expect(text).toContain(`https://tsudumon.jp/ref/${TSUDUMON_FREE_UNIT_NO}/`);
  });

  it('無料なのは「1節」と書く（第4章まるごとではない）', () => {
    // 第4章は8節あり、常時無料は「律令国家と奈良時代」だけ。
    // 「1単元ぜんぶ無料」と書くと、開いた先が鍵だらけで嘘になる。
    expect(text).toContain(`1節（${TSUDUMON_FREE_WORKBOOK_TOPICS[0]}）`);
    expect(text).not.toContain('1単元');
  });

  it('価格は書かない（改定時に文言が古くなる）', () => {
    expect(text).not.toMatch(/1,?280|円/);
  });
});
