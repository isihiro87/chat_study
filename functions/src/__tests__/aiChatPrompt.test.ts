// @vitest-environment node
/**
 * AI チャットシステムプロンプトの静的一貫性テスト。
 *
 * 2026-07 の実会話スナップショット分析で、プロンプトの記述漏れ・名称ゆれが
 * そのまま AI の誤案内（偽の実行確認・メニュー名違い・略称捏造 等）になることが
 * 判明した。ここでは「プロンプトが正しい知識・禁止事項を含み続けること」を
 * ビルド時に保証する。文言を変えるときはこのテストも意図的に更新すること。
 *
 * ライブ評価（実際に Gemini に回答させて期待パターンと突き合わせる）は
 * scripts/eval-ai-chat.ts（要 GEMINI_API_KEY・手動実行）。
 */
import { describe, it, expect } from 'vitest';
import { buildSystemPrompt, buildUserStateContext } from '../aiChatPrompt';
import type { UserDoc } from '../userDocTypes';

const prompt = buildSystemPrompt(undefined);

describe('aiChatPrompt: サービス知識の正本', () => {
  it('サービス名と略称禁止', () => {
    expect(prompt).toContain('チャットでスタディ');
    expect(prompt).toContain('略したり');
    expect(prompt).toContain('ちゃすた'); // 禁止例として明記されている
  });

  it('ペルソナ: スタ先生・一人称わたし', () => {
    expect(prompt).toContain('スタ先生');
    expect(prompt).toContain('一人称は「わたし」');
  });

  it('メニューのボタン名は「出題範囲設定」（テスト範囲設定というボタンは無い）', () => {
    expect(prompt).toContain('メニューのボタン名は「出題範囲設定」');
    expect(prompt).toContain('「テスト範囲設定」というボタンは無い');
  });

  it('配信頻度: 初期は毎日→週3回（月・水・金）', () => {
    expect(prompt).toContain('週3回（月・水・金）');
  });

  it('「できないこと」ガード（実行したフリ禁止）', () => {
    expect(prompt).toContain('実行したフリをしない');
    expect(prompt).toContain(
      '「変更したよ」「再開したよ」と実行済みのように言ってはいけない'
    );
    expect(prompt).toContain('「設定が完了したよ」と根拠なく言わない');
  });

  it('教科は1つだけ（追加不可）', () => {
    expect(prompt).toContain('登録できる教科は1つだけ');
  });

  it('料金: 公式LINEは無料・つづもんだけ有料', () => {
    expect(prompt).toContain('この公式LINEの機能はすべて無料');
    expect(prompt).toContain('つづもん');
    expect(prompt).toContain('TZM-');
    expect(prompt).toContain('継続希望');
    expect(prompt).toContain('https://www.chatstudy.jp/tsudumon/');
  });

  it('カンニング防止（配信問題の答えは教えない）が残っている', () => {
    expect(prompt).toContain('答えそのもの');
    expect(prompt).toContain('ヒント');
  });

  it('AI自作問題の禁止（公式の1問へ誘導）', () => {
    expect(prompt).toContain('四択問題やクイズを自作して出題しない');
    expect(prompt).toContain('自作の問題は出さず');
  });

  it('few-shot応対例セクションがある', () => {
    expect(prompt).toContain('# 応対例');
  });
});

describe('buildUserStateContext: 実データ注入', () => {
  const ts = (d: Date) => ({ toDate: () => d });
  // 2026-07-15 は水曜日
  const wed = new Date('2026-07-15T12:00:00+09:00');

  it('配信時刻・範囲・学習記録が入る', () => {
    const user = {
      preferredHour: 20,
      testScope: { topics: ['旧石器時代と縄文時代', '弥生時代'] },
      stats: {
        streak: { current: 7, longest: 10 },
        totalAnswered: 42,
        totalCorrect: 30,
      },
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, wed);
    expect(ctx).toContain('夜8時');
    expect(ctx).toContain('2単元');
    expect(ctx).toContain('旧石器時代と縄文時代');
    expect(ctx).toContain('連続学習 7日');
    expect(ctx).toContain('累計 42問');
    expect(ctx).toContain('正答率71%');
  });

  it('登録7日以内は毎日配信期間と伝える', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-07-12T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, wed);
    expect(ctx).toContain('はじめの毎日配信');
  });

  it('8日以降は週3期間・水曜は配信がある日', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, wed);
    expect(ctx).toContain('週3回（月・水・金）');
    expect(ctx).toContain('配信がある日');
  });

  it('火曜（非配信日）は「配信が無い日」と伝える', () => {
    const tue = new Date('2026-07-14T12:00:00+09:00');
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, tue);
    expect(ctx).toContain('配信が無い日');
  });

  it('範囲未設定は「学年ぜんぶ」と伝える', () => {
    const ctx = buildUserStateContext({} as UserDoc, wed);
    expect(ctx).toContain('学年ぜんぶから出題中');
  });
});

describe('aiChatPrompt: ユーザー文脈の差し込み', () => {
  it('学年・教科が入る', () => {
    const p = buildSystemPrompt({
      grade: '中2',
      subject: 'history',
    } as UserDoc);
    expect(p).toContain('学年: 中2');
    expect(p).toContain('登録教科: 歴史');
  });

  it('配信おやすみ中の注記が入る', () => {
    const p = buildSystemPrompt({ deliveryPaused: true } as UserDoc);
    expect(p).toContain('配信をおやすみ中');
  });
});
