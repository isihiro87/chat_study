// @vitest-environment node
/**
 * 保護者に子のトークを見せない、という約束を**構造**で守れているかの検査。
 *
 * 文言や運用ではなく、コードが会話・記述解答・まちがえた問題に手を伸ばせない
 * ことを固定する。ここが落ちたら、保護者向けの経路がプライバシー方針を
 * 踏み越えている合図なので、実装を直す（テストを緩めない）。
 *
 * 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §6 / §10
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, it, expect } from 'vitest';

const SRC = join(__dirname, '..');

function sourceOf(file: string): string {
  return readFileSync(join(SRC, file), 'utf8');
}

/** import 文だけを抜き出す（コメントでの言及は許す）。 */
function importedModules(source: string): string[] {
  const out: string[] = [];
  const staticRe = /^\s*import\s[^'"]*['"]([^'"]+)['"]/gm;
  const dynamicRe = /\bimport\(\s*['"]([^'"]+)['"]\s*\)/g;
  for (const re of [staticRe, dynamicRe]) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(source)) !== null) out.push(m[1]);
  }
  return out;
}

/** 保護者向けの経路が触れてはいけないモジュール。 */
const FORBIDDEN_MODULES = [
  'aiThreadStore',
  'aiMemoryCore',
  'aiRecallCore',
  'aiChat',
  'aiPaidChat',
  'gradeWritten',
  'tsudumonRecapCore',
  'tsudumonReviewCore',
];

describe('保護者ダッシュボードは会話・解答のモジュールを読まない', () => {
  const source = sourceOf('tsudumonParentDashboard.ts');
  const imports = importedModules(source);

  it.each(FORBIDDEN_MODULES)('%s を import しない', (mod) => {
    expect(imports.some((i) => i.includes(mod))).toBe(false);
  });

  it('import しているのは表示に必要なものだけ', () => {
    // 想定外の依存が増えたらここで気づけるようにする（許可リスト方式）。
    const allowed = [
      'firebase-functions/v1',
      'firebase-admin/app',
      'firebase-admin/firestore',
      'firebase-admin/auth',
      './tsudumonParentCore',
      './tsudumonParentCard',
    ];
    for (const imp of imports) {
      expect(allowed).toContain(imp);
    }
  });

  it('まちがい関連の識別子を実コードに持たない', () => {
    const code = source
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|[^:])\/\/.*$/gm, '$1');
    for (const forbidden of [
      'wrongNow',
      'wrongLeft',
      'topWrongQids',
      'unitsNeedingReview',
    ]) {
      expect(code).not.toContain(forbidden);
    }
  });
});

describe('保護者サマリの組み立ても同じ制約を満たす', () => {
  const imports = importedModules(sourceOf('tsudumonParentCore.ts'));

  it.each(FORBIDDEN_MODULES)('%s を import しない', (mod) => {
    expect(imports.some((i) => i.includes(mod))).toBe(false);
  });
});

describe('保護者モードのAIプロンプト', () => {
  const source = sourceOf('aiChatPrompt.ts');
  const block = source.slice(
    source.indexOf('const TSUDUMON_PARENT_KNOWLEDGE'),
    source.indexOf('const TSUDUMON_SERVICE_KNOWLEDGE')
  );

  it('保護者モードのブロックが存在する', () => {
    expect(block.length).toBeGreaterThan(500);
  });

  it('トーク内容・まちがえた問題を答えないと明示する', () => {
    expect(block).toContain('トークの内容');
    expect(block).toContain('まちがえた問題');
    expect(block).toContain('件数');
  });

  it('「できない」ではなく「そうしない約束」として断らせる', () => {
    // 曖昧に濁すと聞き方を変えて食い下がられ、いずれ破られる。
    expect(block).toContain('約束');
    expect(block).toContain('方針');
  });

  it('数値を推測で言わせない（持っていないため）', () => {
    expect(block).toContain('推測で数字を言わない');
    expect(block).toContain('dashboard');
  });

  it('敬語で、育て方に助言しないことを指示する', () => {
    expect(block).toContain('敬語');
    expect(block).toContain('育て方');
  });

  it('きょうだい割引の金額が正しい', () => {
    expect(block).toContain('1,280');
    expect(block).toContain('980');
  });

  it('保護者分岐が子の学習文脈を差し込まない', () => {
    // buildSystemPrompt の保護者分岐で progress / exam を混ぜていないこと。
    const branch = source.slice(
      source.indexOf("?.tsudumonRole === 'parent'"),
      source.indexOf('// ── 並び順の方針（コスト最適化・2026-07-26）──')
    );
    expect(branch).not.toContain('buildTsudumonProgressContext');
    expect(branch).not.toContain('buildExamContext');
    expect(branch).toContain('TSUDUMON_PARENT_KNOWLEDGE');
  });
});

/**
 * 保護者導線の**入口**が細くなっていないかの検査。
 *
 * 一度、連携できるのが決済完了ページだけになっており、
 *   - 決済せずに様子を見たい保護者（体験中）
 *   - 決済後にページを閉じた保護者
 * が連携できない状態になっていた。入口はコードを読んでも気づきにくく、
 * 画面を辿って初めて分かるので、ここで固定する。
 */
describe('保護者導線の入口', () => {
  const WEB = join(SRC, '..', '..', '..', 'pdf-workbook', 'web');
  const read = (p: string) => readFileSync(join(WEB, p), 'utf8');

  it('連携の実装は /parents/link/ の1箇所だけ（重複させない）', () => {
    const link = read('parents/link/index.html');
    expect(link).toContain('tsudumonParentLink');
    // 他のページは API を直接叩かず、/parents/link/ へ送るだけ
    for (const page of ['parents/index.html', 'parents/thanks/index.html']) {
      expect(read(page)).not.toContain('tsudumonParentLink');
    }
  });

  it('保護者ページから、契約状態にかかわらず連携へ行ける（体験中も含む）', () => {
    const parents = read('parents/index.html');
    // 「登録ずみ」の分岐にも、未登録の分岐にも同じ導線を出している
    expect(parents).toContain('/parents/link/');
    const seeRecord = parents.match(/var seeRecord =/g) ?? [];
    expect(seeRecord.length).toBe(1);
    // 未登録・登録ずみの両方で seeRecord を使っていること
    expect((parents.match(/seeRecord/g) ?? []).length).toBeGreaterThanOrEqual(
      3
    );
  });

  it('決済完了ページからも連携へ行ける', () => {
    expect(read('parents/thanks/index.html')).toContain('/parents/link/');
  });

  it('ダッシュボードに登録導線がある（体験終了後に行き止まりにしない）', () => {
    const dash = read('parents/dashboard/index.html');
    expect(dash).toContain('tsudumonParentCheckout');
    expect(dash).toContain('js-subscribe');
  });

  it('保護者向けページから /account/ へ誘導しない（子のログインが要るページ）', () => {
    for (const page of [
      'parents/thanks/index.html',
      'parents/dashboard/index.html',
    ]) {
      expect(read(page)).not.toMatch(/href="\/account\//);
    }
  });
});
