/**
 * 使い捨て: 「単元（unit）ごと」の一問一答コンテンツ生成プロンプトを
 * data/content/_prompts/{subject}-{grade}-{unit}.md として生成する。
 *
 * 各単元プロンプトに、その単元の実際の中身（src/data/subjects のトピックの
 * 解説見出し・keyPoints・既存 flashcards/quiz 件数）を埋め込み、自己完結させる。
 *
 * - science / math / geography: units/grade{N}/{unit}/ を 1 単元 = 1 プロンプト
 * - english: 単元層が無いため grade{N} を 1 プロンプト（topics 直下）
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';

const OUT_DIR = path.resolve('data/content/_prompts');

const LABEL: Record<string, string> = { science: '理科', math: '数学', geography: '地理', english: '英語' };

const SUBJECT_RULES: Record<string, string> = {
  science: `- 重要用語・現象・実験器具・法則・観察結果を網羅的にカード/クイズ化する。
- 計算系（密度・濃度・湿度・圧力・オームの法則・仕事・速さ・力 など）は**計算問題も4択に含める**。選択肢は単位・有効桁・数式表記を揃える。
- グラフ・実験装置の図に依存する問題は、必要な数値・条件を問題文に明記してテキストだけで解ける形にする。
- 難読漢字・化学物質名にはルビ \`{漢字|よみ}\` を付ける。`,
  math: `- ⚠️ **数学のフラッシュカードは「計算結果・具体値を答える問題」のみ**。定義・手順・法則名・「コツは？」型のFCは**作成禁止**。
- 数学FCは必ず \`explanation\`（途中式）を使う。\`front\`=答え、\`back\`=問題。
- LaTeX はJSON文字列なのでバックスラッシュ二重（\`\\\\frac\`, \`\\\\sqrt\`, \`\\\\times\`, \`\\\\pm\`）。式は \`$...$\` で囲む。
- 4択の数式表記（分数/小数・\`\\\\pm\` の有無・括弧）を選択肢間で統一。重複選択肢禁止。
- 解が1つでも「重解」の語は使わず \`x=3\` のように値で書く。解が2つなら \`x=\\\\pm 2\` 等。
- 問題文にヒント・解法の指示を入れない。`,
  geography: `- **クイズは短答型（一問一答）を主体**。答えが1語・1値で定まる問題を優先。説明的・列挙的な回答は原則除外。
- 4択の**地名の粒度（国名／地域名／大陸名）を統一**。並列構造の有無も揃え、正答だけ複数地域を含む形にしない。
- 統計値は解説に出典の年・機関の趣旨を添える（不明なら概数・順位を問う形に）。
- 難読地名・用語にはルビ \`{漢字|よみ}\` を付ける。`,
  english: `- クイズは2タイプ可: \`type:"choice"\`（4択）と \`type:"reorder"\`（語順並べ替え: \`words\`/\`correctOrder\`/\`punctuation\`、\`docs/reorder-question-guide.md\` 参照）。
- フラッシュカードの front/back の向き・スタイルは、対応する Web版ソース（\`index.ts\`）の既存 flashcards に合わせる。
- 4択の活用形接尾辞（-ing/-ed/to+動詞）・並列構造（A and B）の有無を選択肢間で統一。正答だけ複数要素を含む形にしない。
- 画像不要。ルビ \`{漢字|よみ}\` は使わない。文法用語は中学生に分かる平易な言い換えを使う。`,
};

async function importTopic(idxPath: string): Promise<any | null> {
  const mod: any = await import(pathToFileURL(idxPath).href);
  return Object.values(mod).find((v: any) => v && v.id && v.content) ?? null;
}
async function importEra(idxPath: string): Promise<any | null> {
  const mod: any = await import(pathToFileURL(idxPath).href);
  return Object.values(mod).find((v: any) => v && !Array.isArray(v) && v.subjectId && v.name && !v.content) ?? null;
}

function listDirs(p: string): string[] {
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();
}
function findPdf(dir: string): string[] {
  const out: string[] = [];
  const walk = (d: string) => {
    if (!fs.existsSync(d)) return;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.toLowerCase().endsWith('.pdf')) out.push(path.relative(process.cwd(), full));
    }
  };
  walk(dir);
  return out.sort();
}
function rel(p: string): string {
  return path.relative(process.cwd(), p);
}

// data/content 側の出力先 JSON を topicId で逆引き
function outJsonFor(contentGradeDir: string, topicId: string): string | null {
  let found: string | null = null;
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.json')) {
        const j = JSON.parse(fs.readFileSync(full, 'utf8'));
        if (j.topicId === topicId) found = rel(full);
      }
    }
  };
  if (fs.existsSync(contentGradeDir)) walk(contentGradeDir);
  return found;
}

// 1 トピックぶんの「知識範囲」ブロックを作る
function topicBlock(topic: any, idxPath: string, outJson: string | null): string {
  const secs = topic.content?.explanation?.sections ?? [];
  const fcN = (topic.content?.flashcards ?? []).length;
  const quizN = (topic.content?.quiz?.questions ?? []).length;
  const lines: string[] = [];
  lines.push(`### ${topic.name}${topic.subtitle ? `（${topic.subtitle}）` : ''}`);
  lines.push('');
  lines.push(`- 出力先: \`${outJson ?? '(対応JSON未検出)'}\``);
  lines.push(`- Web版ソース: \`${rel(idxPath)}\`（既存 flashcards ${fcN}件 / quiz ${quizN}件 を変換元として参照可）`);
  if (secs.length) {
    lines.push(`- 解説の構成と要点（src/data/subjects より）:`);
    for (const s of secs) {
      lines.push(`  - **${s.title}**`);
      for (const kp of s.keyPoints ?? []) lines.push(`    - ${kp}`);
    }
  }
  lines.push('');
  return lines.join('\n');
}

function header(label: string, n: string, unitName: string, subject: string, grade: string, unitDirLabel: string, pdfs: string[], srcDir: string, topicCount: number): string {
  const pdfList = pdfs.length ? pdfs.map((p) => `- \`${p}\``).join('\n') : '- （この単元のPDFは見当たりません。Web版ソースの解説・既存FC/クイズを主素材にしてください）';
  return `# 一問一答コンテンツ生成プロンプト — ${label} 中${n}：${unitName}

> **先に \`data/content/_prompts/README.md\` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = \`data/content/history/03-japanese-origins/jomon-era.json\`。

## この単元

- 教科 / 学年 / 単元: **${label} 中${n} / ${unitName}**（\`${unitDirLabel}\`）
- 出力先: \`data/content/${subject}/${grade}/${subject === 'english' ? '' : unitDirLabel + '/'}*.json\`（下記トピックの各 JSON）
- 編集対象は各 JSON の **\`flashcards\` と \`quiz.questions\` のみ**。他フィールドは変更しない。

### 教材PDF
${pdfList}

### Web版ソース（解説・既存FC/クイズの参照元）
- \`${srcDir}\`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 ${topicCount} トピック）
`;
}

const footer = (subject: string, label: string, topicCount: number) => `
## ${label}固有のルール（README の共通ルールに追加）

${SUBJECT_RULES[subject]}

## 進め方

1. \`data/content/_prompts/README.md\`・\`docs/content-analysis/${subject}.md\`・\`docs/content-quality-standards.md\` を読む。
2. 教材PDFを \`Read\`（大きければ \`pages\` 指定）。各トピックの Web版ソース \`index.ts\` の \`content\`（explanation / 既存 flashcards / quiz）も読む。
3. トピックごとに \`flashcards\` と \`quiz.questions\` を生成し、該当 JSON を \`Write\` で更新（1ファイルずつ）。
4. 難易度配分（basic40/standard40/advanced20）と **正答位置 \`correctIndex\` の均等分散**を自己チェック。
5. 検証: \`npx tsx scripts/sync-content.ts --dry-run --only=${subject}/**\`。

## 完了の目安

- 全 ${topicCount} トピックの \`flashcards\` と \`quiz.questions\` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
`;

async function genUnit(subject: string, grade: string, unitDir: string): Promise<{ file: string; topics: number } | null> {
  const n = grade.replace('grade', '');
  const label = LABEL[subject];
  const unitPath = path.resolve('src/data/subjects', subject, 'units', grade, unitDir);
  const era = await importEra(path.join(unitPath, 'index.ts'));
  const unitName = era?.name ?? unitDir;
  const topicsDir = path.join(unitPath, 'topics');
  const contentGradeDir = path.resolve('data/content', subject, grade, unitDir);

  const blocks: string[] = [];
  let topicCount = 0;
  for (const tDir of listDirs(topicsDir)) {
    const idx = path.join(topicsDir, tDir, 'index.ts');
    if (!fs.existsSync(idx)) continue;
    const topic = await importTopic(idx);
    if (!topic) continue;
    const outJson = outJsonFor(contentGradeDir, topic.id);
    blocks.push(topicBlock(topic, idx, outJson));
    topicCount++;
  }
  if (!topicCount) return null;

  const pdfs = findPdf(unitPath);
  const md =
    header(label, n, unitName, subject, grade, unitDir, pdfs, rel(topicsDir) + '/', topicCount) +
    '\n' + blocks.join('\n') +
    footer(subject, label, topicCount);

  const file = path.join(OUT_DIR, `${subject}-${grade.replace('grade', 'g')}-${unitDir}.md`);
  fs.writeFileSync(file, md, 'utf8');
  return { file: rel(file), topics: topicCount };
}

async function genEnglishGrade(grade: string): Promise<{ file: string; topics: number } | null> {
  const n = grade.replace('grade', '');
  const label = LABEL.english;
  const gradePath = path.resolve('src/data/subjects/english/grades', grade);
  const era = await importEra(path.join(gradePath, 'index.ts'));
  const unitName = era?.name ?? `英語 中${n}`;
  const topicsDir = path.join(gradePath, 'topics');
  const contentGradeDir = path.resolve('data/content/english', grade);

  const blocks: string[] = [];
  let topicCount = 0;
  for (const tDir of listDirs(topicsDir)) {
    const idx = path.join(topicsDir, tDir, 'index.ts');
    if (!fs.existsSync(idx)) continue;
    const topic = await importTopic(idx);
    if (!topic) continue;
    const outJson = outJsonFor(contentGradeDir, topic.id);
    blocks.push(topicBlock(topic, idx, outJson));
    topicCount++;
  }
  if (!topicCount) return null;

  const pdfs = findPdf(gradePath);
  const md =
    header(label, n, unitName, 'english', grade, `grade${n} 全トピック`, pdfs, rel(topicsDir) + '/', topicCount) +
    '\n' + blocks.join('\n') +
    footer('english', label, topicCount);

  const file = path.join(OUT_DIR, `english-${grade.replace('grade', 'g')}.md`);
  fs.writeFileSync(file, md, 'utf8');
  return { file: rel(file), topics: topicCount };
}

async function main() {
  // 旧 per-grade プロンプト（README以外の *.md）を一旦削除して作り直す
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.endsWith('.md') && f !== 'README.md') fs.unlinkSync(path.join(OUT_DIR, f));
  }

  const results: { file: string; topics: number }[] = [];
  for (const subject of ['science', 'math', 'geography']) {
    for (const grade of ['grade1', 'grade2', 'grade3']) {
      for (const unitDir of listDirs(path.resolve('src/data/subjects', subject, 'units', grade))) {
        const r = await genUnit(subject, grade, unitDir);
        if (r) results.push(r);
      }
    }
  }
  for (const grade of ['grade1', 'grade2', 'grade3']) {
    const r = await genEnglishGrade(grade);
    if (r) results.push(r);
  }

  for (const r of results) console.log(`✅ ${r.file}  (${r.topics} topics)`);
  console.log(`\n生成: ${results.length} 単元プロンプト / 計 ${results.reduce((a, r) => a + r.topics, 0)} トピック`);
}

await main();
