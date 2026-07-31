// @vitest-environment node
/**
 * 運営（人）への取り次ぎと「人対応中」状態。
 *
 * 前提（LINE仕様）: 運営がLINE公式アカウントマネージャーのチャットから送った
 * メッセージは Webhook に届かない。したがって「運営の発言をAIが読む」ことはできず、
 * この仕組みは **AI側から取り次ぎ、その後しばらくAIが引き下がる** 方向にだけ倒している。
 */
import { describe, it, expect } from 'vitest';

import {
  OPERATOR_HANDLING_TTL_MS,
  buildEscalationAckText,
  buildOperatorHandlingContext,
  buildOperatorNotice,
  isOperatorHandling,
  validateEscalation,
} from '../operatorHandoffCore';

const NOW = new Date('2026-07-26T15:00:00+09:00').getTime();

describe('validateEscalation', () => {
  it('カテゴリと要約がそろっていれば通る', () => {
    const r = validateEscalation(
      { reason: 'refund', summary: '先月ぶんの返金をしてほしいと言っている' },
      NOW
    );
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.value.reason).toBe('refund');
      expect(r.value.startedAt).toBe(NOW);
    }
  });

  it('カテゴリ外は弾く（AIの作文を許さない）', () => {
    const r = validateEscalation({ reason: '返金したい', summary: 'x' }, NOW);
    expect(r.ok).toBe(false);
  });

  it('要約が空なら弾く', () => {
    const r = validateEscalation({ reason: 'bug', summary: '   ' }, NOW);
    expect(r.ok).toBe(false);
  });

  it('長すぎる要約は200文字に切り詰める', () => {
    const r = validateEscalation(
      { reason: 'other', summary: 'あ'.repeat(500) },
      NOW
    );
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.value.summary).toHaveLength(200);
  });
});

describe('人対応中の判定', () => {
  const handling = {
    reason: 'billing' as const,
    summary: '二重に請求されたと言っている',
    startedAt: NOW,
  };

  it('TTL内は対応中、超えたら解除される', () => {
    expect(isOperatorHandling(handling, NOW + 60 * 1000)).toBe(true);
    expect(
      isOperatorHandling(handling, NOW + OPERATOR_HANDLING_TTL_MS + 1)
    ).toBe(false);
  });

  it('未設定・壊れた値は対応中とみなさない', () => {
    expect(isOperatorHandling(undefined, NOW)).toBe(false);
    expect(isOperatorHandling({}, NOW)).toBe(false);
  });

  it('対応中はプロンプトに「答えを出すな」の指示が入る', () => {
    const ctx = buildOperatorHandlingContext(handling, NOW);
    expect(ctx).toContain('運営（人）が対応中');
    expect(ctx).toContain('あなたが答えを出さない');
    expect(ctx).toContain('待ってね');
    // 学習の話は止めない（対応中でも勉強はできる）
    expect(ctx).toContain('勉強の質問');
  });

  it('対応中でなければプロンプトは1文字も変わらない', () => {
    expect(buildOperatorHandlingContext(undefined, NOW)).toBe('');
    expect(
      buildOperatorHandlingContext(handling, NOW + OPERATOR_HANDLING_TTL_MS + 1)
    ).toBe('');
  });
});

describe('文面', () => {
  const handling = {
    reason: 'refund' as const,
    summary: '返金してほしい',
    startedAt: NOW,
  };

  it('生徒への返事は「運営から連絡が行く」と伝え、見通しを断定しない', () => {
    const t = buildEscalationAckText(handling);
    expect(t).toContain('運営');
    expect(t).toContain('待っていてね');
    expect(t).not.toContain('返金されます');
    expect(t).not.toContain('返金できます');
  });

  it('運営への通知に、誰の・何の件かとuidが入る', () => {
    const t = buildOperatorNotice('line:U123', 'いしもと', handling);
    expect(t).toContain('返金のご相談');
    expect(t).toContain('いしもと');
    expect(t).toContain('line:U123');
    expect(t).toContain('返金してほしい');
  });

  it('表示名が無くても通知は壊れない', () => {
    expect(buildOperatorNotice('line:U123', undefined, handling)).toContain(
      '(表示名なし)'
    );
  });
});
