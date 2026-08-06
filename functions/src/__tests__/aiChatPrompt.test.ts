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
import {
  buildPushPauseContext,
  buildAugResumeContext,
  buildSystemPrompt,
  buildUserStateContext,
} from '../aiChatPrompt';
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

  it('配信頻度: 初期は毎日→週2回（月・木）', () => {
    expect(prompt).toContain('週2回（月・木）');
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
    expect(prompt).toContain('https://tsudumon.jp/');
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

  it('8日以降は週2期間・木曜は配信がある日', () => {
    // 2026-07-16 は木曜（週2配信＝月・木の配信日）。
    const thu = new Date('2026-07-16T12:00:00+09:00');
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, thu);
    expect(ctx).toContain('週2回（月・木）');
    expect(ctx).toContain('配信がある日');
  });

  it('水曜は週2（月・木）の非配信日になった', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, wed);
    expect(ctx).toContain('配信が無い日');
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

describe('配信一時停止中（2026-07 配信枠ひっ迫）の案内', () => {
  const ts = (d: Date) => ({ toDate: () => d });
  // 停止期間内（PUSH_SUSPENSION_START=7/26 〜 END=8/1）の日時
  const duringPause = new Date('2026-07-28T12:00:00+09:00');

  it('停止対象ユーザーには「自動配信おやすみ中」の知識が入る', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildPushPauseContext(
      user as unknown as Record<string, unknown>,
      duringPause
    );
    expect(ctx).toContain('自動でとどく問題配信');
    expect(ctx).toContain('配信ワク');
    expect(ctx).toContain('1問解く');
    expect(ctx).toContain('来月');
  });

  it('登録3日以内の新規ユーザーには入らない（まだ配信が届くため）', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-07-27T12:00:00+09:00')),
    } as unknown as UserDoc;
    expect(
      buildPushPauseContext(
        user as unknown as Record<string, unknown>,
        duringPause
      )
    ).toBe('');
  });

  it('停止期間外は入らない（8月に自動復帰）', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    expect(
      buildPushPauseContext(
        user as unknown as Record<string, unknown>,
        new Date('2026-08-05T12:00:00+09:00')
      )
    ).toBe('');
  });

  it('停止中は状態文脈でも「毎日／週2」と言わない', () => {
    const user = {
      onboardingStartedAt: ts(new Date('2026-05-01T12:00:00+09:00')),
    } as unknown as UserDoc;
    const ctx = buildUserStateContext(user, duringPause);
    expect(ctx).toContain('自動配信をおやすみ中');
    expect(ctx).not.toContain('週2回（月・木）の期間');
  });
});

describe('aiChatPrompt: Bot種別分岐（フェーズ5b）', () => {
  it('一問一答（既定・引数省略）は従来のプロンプトと完全に同一', () => {
    // buildSystemPrompt(undefined) は第2引数を渡さない既存呼び出しパターン。
    // 既定値 'ichimon' と明示的に 'ichimon' を渡した場合が完全一致すること、
    // かつファイル先頭の `prompt`（この変更前から使われている既存定数）とも
    // 一致することを保証し、「一問一答側は無変更」を機械的に検証する。
    const withoutArg = buildSystemPrompt(undefined);
    const withIchimon = buildSystemPrompt(undefined, 'ichimon');
    expect(withoutArg).toBe(prompt);
    expect(withIchimon).toBe(prompt);
  });

  it('つづもん用プロンプトは「全機能無料」を断言しない（むしろ禁止を明示する）', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    // 一問一答プロンプトが使う断言フレーズ（無料と言い切る文）が入っていないこと。
    expect(p).not.toContain('この公式LINEの機能はすべて無料');
    expect(p).not.toContain('お金はかからないから安心してね');
    expect(p).not.toContain('この公式LINEはぜんぶ無料で使えるよ');
    // 「全機能無料」という言い回し自体は、それを言うなという禁止指示として
    // 含まれてよい（断言ではなく禁止）。ここでは禁止指示があることを確認する。
    expect(p).toContain('絶対に言わない');
    expect(p).toContain('全機能無料');
  });

  it('つづもん用プロンプトは月額1,280円・3日間無料お試しに言及する', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    expect(p).toContain('1,280円');
    expect(p).toContain('サブスク');
    expect(p).toContain('3日間');
    expect(p).toContain('お試し');
  });

  it('つづもん用プロンプトは参考書・問題集・QR・AI採点・理解度チェックを説明する', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    expect(p).toContain('参考書');
    expect(p).toContain('問題集');
    expect(p).toContain('QRコード');
    expect(p).toContain('採点');
    expect(p).toContain('理解度チェック');
  });

  it('つづもん用プロンプトは一問一答固有の機能をつづもんの機能として案内しない', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    expect(p).toContain('つづもんには無い');
    expect(p).toContain('出題範囲設定');
    expect(p).toContain('成績・記録');
  });

  // 2026-07-26 実機事故の回帰テスト:
  // users/{uid} は両Botで共有しているため、一問一答の登録教科（この人は地理）が
  // つづもんのプロンプトに混ざり、「まずは地理の範囲を確認して、ワークのページを
  // 分けて…」と、つづもんに存在しない教科の助言が返った。
  it('つづもん用プロンプトに一問一答の登録教科・配信設定を混ぜない', () => {
    const user = {
      grade: '中2',
      subject: 'geography',
      preferredHour: 20,
      testScope: { topics: ['世界の姿'] },
    } as unknown as UserDoc;
    const p = buildSystemPrompt(user, 'tsudumon');
    expect(p).toContain('学年: 中2'); // 学年は共有情報として使ってよい
    expect(p).not.toContain('登録教科'); // 一問一答の登録教科ブロックを注入しない
    expect(p).not.toContain('夜8時'); // 一問一答の配信時刻
    expect(p).not.toContain('世界の姿'); // 一問一答の出題範囲
    expect(p).toContain('中学歴史');
    // 他教科は「つづもんには無い」と明示する側で登場する（案内するためではない）
    expect(p).toContain('教材はまだ無く');
    expect(p).toContain('存在しない教材を前提にした具体案は出さない');
  });

  it('一問一答用プロンプトには従来どおり登録教科が入る（無改修の確認）', () => {
    const p = buildSystemPrompt(
      { grade: '中2', subject: 'geography' } as unknown as UserDoc,
      'ichimon'
    );
    expect(p).toContain('登録教科: 地理');
  });

  // 2026-07-26: つづもんに「今日の1単元」日次配信を実装したため、
  // 「毎日配信はつづもんに無い」と教えていた記述を撤去した。AIが自社の中心機能を
  // 否定しないよう、逆に「毎日届く」ことを知っている状態を固定する。
  it('つづもん用プロンプトは「今日の1単元」が毎日届くことを知っている', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    expect(p).toContain('今日の1単元');
    expect(p).toContain('https://tsudumon.jp/map/');
    expect(p).not.toContain('毎日決まった時刻に1問届く「毎日配信」');
  });

  it('つづもん用プロンプトと一問一答用プロンプトは別内容', () => {
    const ichimon = buildSystemPrompt(undefined, 'ichimon');
    const tsudumon = buildSystemPrompt(undefined, 'tsudumon');
    expect(tsudumon).not.toBe(ichimon);
  });

  // AIペルソナの名前はBotごとに違う（2026-07-26 改名）。
  // つづもん＝「つづ先生」／一問一答・ムビスタ＝「スタ先生」。取り違えると
  // 生徒から見て別サービスの先生が名乗ることになるので、両方向を固定する。
  it('つづもん用プロンプトのペルソナは「つづ先生」（スタ先生と名乗らない）', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    expect(p).toContain('つづ先生');
    expect(p).toContain('「つづ先生だよ」');
    expect(p).not.toContain('「スタ先生だよ」');
  });
});

describe('つづもん: 教材リンクの説明（2026-07-26 実機事故の回帰）', () => {
  // 単元が特定できた回はシステムがボタンを付けているのに、AIが
  // 「個別のリンクを送る機能はない」と否定してしまった。仕組みを教える文が
  // 消えると同じことが起きるので固定する。
  const p = buildSystemPrompt(undefined, 'tsudumon');

  it('「ボタンが付く」ことを知っている', () => {
    expect(p).toContain('システムがこの返信にボタンを付けて');
  });

  it('「リンクは送れない」と言ってはいけない、と明示されている', () => {
    expect(p).toContain('言ってはいけない');
    expect(p).toContain('実際には出せる');
  });

  it('章番号つきURLを推測で書かないよう禁じている', () => {
    expect(p).toContain('推測で作らない');
    expect(p).toContain('https://tsudumon.jp/map/');
  });
});

describe('つづもん: Web検索の使いどころ', () => {
  const p = buildSystemPrompt(undefined, 'tsudumon');

  // 2026-07-26: 「教材に無いことだけ」と絞りすぎて天気すら検索しなかったため、
  // 「知識で確実に答えられないことは迷わず検索する」へ書き換えた。
  it('日付が絡む質問は必ず検索する、と指示している', () => {
    expect(p).toContain('迷わず検索する');
    expect(p).toContain('あなたの記憶は古い');
    expect(p).toContain('歴史の学習内容そのものは検索しない');
  });

  it('検索結果の扱い（URLを貼らない・推測で埋めない）を指示している', () => {
    expect(p).toContain('URLは貼らない');
    expect(p).toContain('推測で埋めない');
  });
});

describe('つづもん: プロンプトの出し入れ（コスト最適化 2026-07-26）', () => {
  it('ヒント無し（既存の呼び出し）は従来どおり全部入る', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon');
    expect(p).toContain('つづもんの単元一覧');
    expect(p).toContain('復習する」と言われたとき');
    expect(p).toContain('インターネットで調べるとき');
  });

  it('雑談では重いブロック（単元一覧・復習・配信設定）を入れない', () => {
    const p = buildSystemPrompt(undefined, 'tsudumon', {
      promptText: '部活がしんどい',
    });
    expect(p).not.toContain('つづもんの単元一覧');
    expect(p).not.toContain('復習する」と言われたとき');
    expect(p).not.toContain('配信の曜日・時刻を変えたい');
    // サービス知識と教科の範囲は常に入る（誤案内を防ぐため）
    expect(p).toContain('つづもん');
    expect(p).toContain('中学歴史');
  });

  it('話題に応じて必要なブロックだけ入る', () => {
    expect(
      buildSystemPrompt(undefined, 'tsudumon', {
        promptText: 'テストの範囲を登録したい',
      })
    ).toContain('つづもんの単元一覧');
    expect(
      buildSystemPrompt(undefined, 'tsudumon', { promptText: '復習する' })
    ).toContain('復習する」と言われたとき');
    expect(
      buildSystemPrompt(undefined, 'tsudumon', { promptText: '毎日はうるさい' })
    ).toContain('配信の曜日・時刻を変えたい');
    expect(
      buildSystemPrompt(undefined, 'tsudumon', { promptText: '今日の天気は？' })
    ).toContain('インターネットで調べるとき');
  });

  it('不変の知識が先頭・可変の情報が後ろ（キャッシュが効く並び）', () => {
    const p = buildSystemPrompt(
      { grade: '中2' } as unknown as UserDoc,
      'tsudumon',
      { promptText: 'テストの範囲を登録したい' }
    );
    // サービス知識（不変）→ 単元一覧（不変）→ 相手の情報（可変）の順
    expect(p.indexOf('つづもんの単元一覧')).toBeLessThan(
      p.indexOf('今話している相手の情報')
    );
    expect(p.indexOf('あなたは中学生向け教材サービス')).toBe(0);
  });
});

describe('一問一答: プロンプトの出し入れ（コスト最適化 2026-07-26）', () => {
  // 分割前は 11,322 文字を毎ターン全量送っており、入力がコストの約85%を占めていた。
  // 話題別の7ブロック（約37%）を条件付きにする。
  it('ヒント無し（既存の呼び出し・テスト）は従来どおり全部入る', () => {
    const p = buildSystemPrompt(undefined);
    expect(p).toContain('困ったときの対処');
    expect(p).toContain('タイプでスタディ');
    expect(p).toContain('別売の問題集「つづもん」について');
    expect(p).toContain('このサービスを作っている人');
    expect(p).toContain('このトークは運営');
    expect(p).toContain('AIとのじょうずな付き合い方');
    expect(p).toContain('学習の進み方・モチベーション');
  });

  it('ふつうの学習質問では話題別ブロックを入れない（入力を30%以上削る）', () => {
    const full = buildSystemPrompt(undefined);
    const scoped = buildSystemPrompt(undefined, 'ichimon', {
      promptText: '鎌倉幕府はいつできたの？',
    });
    expect(scoped).not.toContain('タイプでスタディ');
    expect(scoped).not.toContain('このサービスを作っている人');
    expect(scoped.length).toBeLessThan(full.length * 0.7);
  });

  it('常時ブロックは話題に関わらず必ず入る（誤案内を防ぐ最低限）', () => {
    const scoped = buildSystemPrompt(undefined, 'ichimon', {
      promptText: '鎌倉幕府はいつできたの？',
    });
    // キャラクター・機能案内・操作方法・できないこと・守ること・料金
    expect(scoped).toContain('スタ先生');
    expect(scoped).toContain('メニューのボタン名は「出題範囲設定」');
    expect(scoped).toContain('実行したフリをしない');
    expect(scoped).toContain('守ること');
    expect(scoped).toContain('この公式LINEの機能はすべて無料');
    expect(scoped).toContain('Markdown');
  });

  it('料金の節はつづもんブロックが無くても自己完結している', () => {
    const scoped = buildSystemPrompt(undefined, 'ichimon', {
      promptText: '鎌倉幕府はいつできたの？',
    });
    expect(scoped).not.toContain('別売の問題集「つづもん」について');
    // つづもんブロックが落ちても「有料商品がある」ことと参照先は残る
    expect(scoped).toContain('1,280円');
    expect(scoped).toContain('https://tsudumon.jp/');
    // 「下の節を参照」のような宙に浮く参照を残さない
    expect(scoped).not.toContain('下の節を参照');
    expect(scoped).not.toContain('下の「つづもん」の節');
  });

  it('話題に応じて必要なブロックだけ入る', () => {
    const has = (text: string, block: string) =>
      buildSystemPrompt(undefined, 'ichimon', { promptText: text }).includes(
        block
      );
    expect(has('ボタン押しても反応がない', '困ったときの対処')).toBe(true);
    expect(has('タイピングのゲームってなに？', 'タイプでスタディ')).toBe(true);
    expect(
      has('つづもんっていくら？', '別売の問題集「つづもん」について')
    ).toBe(true);
    expect(has('これ誰が作ってるの？', 'このサービスを作っている人')).toBe(
      true
    );
    expect(has('この会話って見られてるの？', 'このトークは運営')).toBe(true);
    expect(has('宿題の答え教えて', 'AIとのじょうずな付き合い方')).toBe(true);
    expect(has('何日連続で続いてる？', '学習の進み方・モチベーション')).toBe(
      true
    );
  });

  it('不変の知識が先頭・可変の情報が後ろ（キャッシュが効く並び）', () => {
    const p = buildSystemPrompt(
      { grade: '中2', subject: 'history' } as unknown as UserDoc,
      'ichimon',
      { promptText: 'つづもんっていくら？' }
    );
    expect(p.indexOf('あなたは中学生向け学習サービス')).toBe(0);
    // 話題別ブロック（静的）→ 相手の情報（可変）の順
    expect(p.indexOf('別売の問題集「つづもん」について')).toBeLessThan(
      p.indexOf('今話している相手の情報')
    );
  });
});

describe('一問一答: 軽量プロフィール記憶の注入（2026-07-26）', () => {
  it('プロフィールが無ければ何も足さない（未設定の3,000人にトークンを載せない）', () => {
    expect(buildSystemPrompt(undefined)).not.toContain(
      'この子の設定と、覚えていること'
    );
  });

  it('覚えていることがあれば注入する', () => {
    const p = buildSystemPrompt({
      grade: '中2',
      aiProfile: { studentName: 'ミナト', likes: 'バスケ部' },
    } as unknown as UserDoc);
    expect(p).toContain('この子の設定と、覚えていること');
    expect(p).toContain('ミナト');
    expect(p).toContain('バスケ部');
  });
});

describe('buildAugResumeContext（2026-08 の配信再開まわりの一時知識）', () => {
  const jst = (iso: string) => new Date(`${iso}+09:00`);

  it('掲出期間中はおわび・8/4先行公開・週2・17時配信の事実を含む', () => {
    const ctx = buildAugResumeContext(jst('2026-08-03T18:00:00'));
    expect(ctx).toContain('7/26');
    expect(ctx).toContain('8月4日');
    expect(ctx).toContain('週2回（月・木）');
    expect(ctx).toContain('17時');
    expect(ctx).toContain('つづもん');
  });

  it('価格を勝手に作らせない指示が入っている', () => {
    const ctx = buildAugResumeContext(jst('2026-08-03T18:00:00'));
    expect(ctx).toContain('自分で勝手に価格や条件を作らない');
  });

  it('期間を過ぎたら空文字（プロンプトを膨らませ続けない）', () => {
    expect(buildAugResumeContext(jst('2026-08-11T00:00:00'))).toBe('');
    expect(buildAugResumeContext(jst('2026-09-01T12:00:00'))).toBe('');
  });
});

describe('ワーク入力問題を解いている最中の文脈（buildSystemPrompt）', () => {
  // 実データの記述問題（古代文明の誕生 第1問）
  const QID = 'q-wbw-history-02-ancient-civilizations-1';
  const withSession = {
    grade: '中1',
    subject: 'history',
    workbookSession: {
      topic: '古代文明の誕生',
      kind: 'written',
      awaiting: { qid: QID },
    },
  } as unknown as UserDoc;

  it('解答待ちのときは、いま解いている問題を文脈に入れる', () => {
    const p = buildSystemPrompt(withSession);
    expect(p).toContain('いま解いている最中の問題');
    expect(p).toContain('古代文明の誕生');
    expect(p).toContain('記述問題');
  });

  it('答えの出し方（ボタン／「答え：」）を必ず案内させる', () => {
    const p = buildSystemPrompt(withSession);
    expect(p).toContain('✏️ 答えを書く');
    expect(p).toContain('答え：');
  });

  it('模範解答はプロンプトに載せない（そもそも漏らせない状態にする）', () => {
    const p = buildSystemPrompt(withSession);
    // 模範解答の本文が混ざっていないこと
    expect(p).not.toContain('大きな川の流域では、水と肥えた土');
  });

  it('解答待ちでなければ何も足さない（平常時のプロンプトを変えない）', () => {
    const p = buildSystemPrompt({
      grade: '中1',
      subject: 'history',
    } as UserDoc);
    expect(p).not.toContain('いま解いている最中の問題');
  });

  it('未知の問題IDなら何も足さない', () => {
    const p = buildSystemPrompt({
      grade: '中1',
      workbookSession: { awaiting: { qid: 'q-wbw-does-not-exist' } },
    } as unknown as UserDoc);
    expect(p).not.toContain('いま解いている最中の問題');
  });
});

/**
 * 会話の順番（2026-08-06）。
 *
 * AI の履歴には**チャットのやり取りしか入らない**ため、
 * 〔生徒の発言①〕→〔公式LINEが問題を配信〕→〔生徒の発言②〕という流れで、
 * AI は配信に気づかず②を①の続きと誤解していた。
 */
describe('一問一答: 直近の配信との順番', () => {
  const question = {
    id: 'q1',
    topic: '江戸幕府の成立',
    text: '江戸幕府を開いたのは？',
    choices: ['徳川家康', '織田信長', '豊臣秀吉', '足利尊氏'],
    correctChoiceId: 0,
    explanation: '1603年に徳川家康が開いた。',
  };

  it('AI の返信より後に問題が届いていたら、その順番を明示する', () => {
    const prompt = buildSystemPrompt({
      lastQuestion: { ...question, sentAtMs: 2_000 },
      aiChat: { lastChatAt: { toMillis: () => 1_000 } },
    } as never);
    expect(prompt).toContain('会話の順番');
    expect(prompt).toContain('あなたが最後に返信したあとに');
  });

  it('AI の返信のほうが後なら、順番の注意は出さない（無駄なトークンを載せない）', () => {
    const prompt = buildSystemPrompt({
      lastQuestion: { ...question, sentAtMs: 1_000 },
      aiChat: { lastChatAt: { toMillis: () => 2_000 } },
    } as never);
    expect(prompt).not.toContain('会話の順番');
  });

  it('sentAtMs が無い古いデータでは順番の注意を出さない（誤った断定をしない）', () => {
    const prompt = buildSystemPrompt({
      lastQuestion: question,
      aiChat: { lastChatAt: { toMillis: () => 1_000 } },
    } as never);
    expect(prompt).not.toContain('会話の順番');
  });

  it('AI と話したことが無い人にも出さない', () => {
    const prompt = buildSystemPrompt({
      lastQuestion: { ...question, sentAtMs: 2_000 },
    } as never);
    expect(prompt).not.toContain('会話の順番');
  });

  it('{ seconds } 形式の Timestamp でも判定できる', () => {
    const prompt = buildSystemPrompt({
      lastQuestion: { ...question, sentAtMs: 5_000 },
      aiChat: { lastChatAt: { seconds: 1 } }, // = 1,000ms
    } as never);
    expect(prompt).toContain('会話の順番');
  });

  it('決めつけないよう釘を刺している', () => {
    const prompt = buildSystemPrompt({
      lastQuestion: { ...question, sentAtMs: 2_000 },
      aiChat: { lastChatAt: { toMillis: () => 1_000 } },
    } as never);
    expect(prompt).toContain('決めつけない');
  });
});
