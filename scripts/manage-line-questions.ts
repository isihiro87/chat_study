/**
 * LINE 一問一答の問題マスタを管理する CLI ツール。
 *
 * 前提:
 * - gcloud auth application-default login 済み
 * - gcloud config set project chatstudy-63477（または ADC で同等の設定）
 *
 * 使い方:
 *   npx tsx scripts/manage-line-questions.ts upload                  # data/line-questions/*.json 全部 upsert
 *   npx tsx scripts/manage-line-questions.ts upload <file>           # 特定ファイルのみ upsert
 *   npx tsx scripts/manage-line-questions.ts upload --prune          # upload 後、ローカルにない ID を削除
 *   npx tsx scripts/manage-line-questions.ts list                    # 全問題を一覧表示
 *   npx tsx scripts/manage-line-questions.ts list --subject=history --grade=中1
 *   npx tsx scripts/manage-line-questions.ts diff                    # ローカル vs Firestore 差分
 *   npx tsx scripts/manage-line-questions.ts delete <id>             # 単発削除（確認プロンプト付き）
 */
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { resolve, isAbsolute } from "node:path";
import { createInterface } from "node:readline/promises";

const PROJECT_ID = "chatstudy-63477";
const QUESTIONS_DIR = resolve(import.meta.dirname, "../data/line-questions");

const VALID_SUBJECTS = ["history", "english"] as const;
const VALID_GRADES = ["中1", "中2", "中3"] as const;
const SUBJECT_LABEL: Record<string, string> = {
  history: "歴史",
  english: "英語",
};

interface QuestionFile {
  id: string;
  subject: string;
  grade: string;
  topic: string;
  text: string;
  choices: [string, string, string, string];
  correctChoiceId: 0 | 1 | 2 | 3;
  explanation: string;
}

const COMPARE_FIELDS: (keyof QuestionFile)[] = [
  "subject",
  "grade",
  "topic",
  "text",
  "choices",
  "correctChoiceId",
  "explanation",
];

async function main() {
  const [, , subcommand, ...args] = process.argv;
  if (!subcommand) {
    printUsage();
    process.exit(1);
  }

  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });

  switch (subcommand) {
    case "upload":
      await runUpload(args);
      break;
    case "list":
      await runList(args);
      break;
    case "diff":
      await runDiff();
      break;
    case "delete":
      await runDelete(args[0]);
      break;
    default:
      printUsage();
      process.exit(1);
  }
}

function printUsage(): void {
  console.log(`Usage:
  upload [file] [--prune]   Upload local JSON to Firestore (merge: true)
  list [--subject=X] [--grade=Y]   List all questions with accuracy
  diff                       Show diff between local files and Firestore
  delete <id>                Delete one question (confirm prompt)

Examples:
  npx tsx scripts/manage-line-questions.ts upload
  npx tsx scripts/manage-line-questions.ts upload data/line-questions/history-g1.json
  npx tsx scripts/manage-line-questions.ts upload --prune
  npx tsx scripts/manage-line-questions.ts list --subject=history
  npx tsx scripts/manage-line-questions.ts diff
  npx tsx scripts/manage-line-questions.ts delete q-history-g1-001`);
}

function readQuestionFiles(specificFile?: string): QuestionFile[] {
  let files: string[];
  if (specificFile) {
    const path = isAbsolute(specificFile) ? specificFile : resolve(specificFile);
    files = [path];
  } else {
    files = readdirSync(QUESTIONS_DIR)
      .filter((f) => f.endsWith(".json"))
      .map((f) => resolve(QUESTIONS_DIR, f));
  }

  const all: QuestionFile[] = [];
  for (const file of files) {
    if (!statSync(file).isFile()) {
      throw new Error(`Not a file: ${file}`);
    }
    const content = readFileSync(file, "utf8");
    let parsed: unknown;
    try {
      parsed = JSON.parse(content);
    } catch (err) {
      throw new Error(`Failed to parse ${file}: ${(err as Error).message}`);
    }
    if (!Array.isArray(parsed)) {
      throw new Error(`Expected array in ${file}, got ${typeof parsed}`);
    }
    parsed.forEach((q: unknown, idx: number) => {
      const validated = validateQuestion(q, `${file}[${idx}]`);
      all.push(validated);
    });
  }
  return all;
}

function validateQuestion(q: unknown, location: string): QuestionFile {
  if (!q || typeof q !== "object") {
    throw new Error(`${location}: not an object`);
  }
  const obj = q as Record<string, unknown>;

  const id = obj.id;
  if (typeof id !== "string" || !/^q-[a-z]+-g[1-3]-\d{3}$/.test(id)) {
    throw new Error(`${location}: invalid id (expected q-{subject}-g{1-3}-{NNN}): ${String(id)}`);
  }
  if (typeof obj.subject !== "string" || !VALID_SUBJECTS.includes(obj.subject as typeof VALID_SUBJECTS[number])) {
    throw new Error(`${location}: invalid subject: ${String(obj.subject)}`);
  }
  if (typeof obj.grade !== "string" || !VALID_GRADES.includes(obj.grade as typeof VALID_GRADES[number])) {
    throw new Error(`${location}: invalid grade: ${String(obj.grade)}`);
  }
  if (typeof obj.topic !== "string" || obj.topic.trim() === "") {
    throw new Error(`${location}: topic must be non-empty string`);
  }
  if (typeof obj.text !== "string" || obj.text.trim() === "") {
    throw new Error(`${location}: text must be non-empty string`);
  }
  if (!Array.isArray(obj.choices) || obj.choices.length !== 4) {
    throw new Error(`${location}: choices must be array of length 4`);
  }
  obj.choices.forEach((c, i) => {
    if (typeof c !== "string" || c.trim() === "") {
      throw new Error(`${location}: choices[${i}] must be non-empty string`);
    }
  });
  if (typeof obj.correctChoiceId !== "number" || ![0, 1, 2, 3].includes(obj.correctChoiceId)) {
    throw new Error(`${location}: correctChoiceId must be 0|1|2|3`);
  }
  if (typeof obj.explanation !== "string" || obj.explanation.trim() === "") {
    throw new Error(`${location}: explanation must be non-empty string`);
  }
  return obj as unknown as QuestionFile;
}

async function runUpload(args: string[]): Promise<void> {
  const prune = args.includes("--prune");
  const fileArg = args.find((a) => !a.startsWith("--"));

  const local = readQuestionFiles(fileArg);
  console.log(`Uploading ${local.length} questions to ${PROJECT_ID}...`);

  const db = getFirestore();
  for (const q of local) {
    const { id, ...data } = q;
    await db
      .collection("questions")
      .doc(id)
      .set(
        {
          ...data,
          lastUploadedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    console.log(`  ✓ ${id}`);
  }
  console.log(`Upload complete: ${local.length} questions`);

  if (prune) {
    await runPrune(local.map((q) => q.id));
  }
}

async function runList(args: string[]): Promise<void> {
  const subjectFilter = args.find((a) => a.startsWith("--subject="))?.split("=")[1];
  const gradeFilter = args.find((a) => a.startsWith("--grade="))?.split("=")[1];

  const db = getFirestore();
  let query: FirebaseFirestore.Query = db.collection("questions");
  if (subjectFilter) query = query.where("subject", "==", subjectFilter);
  if (gradeFilter) query = query.where("grade", "==", gradeFilter);
  const snap = await query.get();

  if (snap.empty) {
    console.log("(no questions)");
    return;
  }

  const sorted = snap.docs.sort((a, b) => a.id.localeCompare(b.id));
  const rows = sorted.map((d) => {
    const data = d.data();
    const total = typeof data.totalAnswered === "number" ? data.totalAnswered : 0;
    const correct = typeof data.totalCorrect === "number" ? data.totalCorrect : 0;
    const accuracy =
      total > 0 ? `${((correct / total) * 100).toFixed(1)}% (${correct}/${total})` : "未回答";
    return {
      id: d.id,
      subject: SUBJECT_LABEL[String(data.subject)] ?? String(data.subject ?? ""),
      grade: String(data.grade ?? ""),
      topic: String(data.topic ?? ""),
      text: truncate(String(data.text ?? ""), 30),
      accuracy,
    };
  });

  printTable(
    ["ID", "教科", "学年", "単元", "問題", "正答率"],
    rows.map((r) => [r.id, r.subject, r.grade, r.topic, r.text, r.accuracy])
  );
  console.log(`\nTotal: ${rows.length} questions`);
}

async function runDiff(): Promise<void> {
  const local = readQuestionFiles();
  const localIds = new Set(local.map((q) => q.id));
  const localById = new Map(local.map((q) => [q.id, q]));

  const db = getFirestore();
  const snap = await db.collection("questions").get();
  const remoteById = new Map(snap.docs.map((d) => [d.id, d.data()]));

  const adds: QuestionFile[] = [];
  const updates: { id: string; fields: string[] }[] = [];
  const onlyRemote: string[] = [];

  for (const q of local) {
    const remote = remoteById.get(q.id);
    if (!remote) {
      adds.push(q);
    } else {
      const changed = COMPARE_FIELDS.filter((field) => {
        return JSON.stringify(remote[field]) !== JSON.stringify(q[field]);
      });
      if (changed.length > 0) updates.push({ id: q.id, fields: changed });
    }
  }
  for (const id of remoteById.keys()) {
    if (!localIds.has(id)) onlyRemote.push(id);
  }

  console.log(`追加予定 (${adds.length}):`);
  adds.forEach((q) =>
    console.log(`  + ${q.id} (${SUBJECT_LABEL[q.subject] ?? q.subject}/${q.grade}/${q.topic})`)
  );
  console.log(`変更予定 (${updates.length}):`);
  updates.forEach((u) => console.log(`  ~ ${u.id} (${u.fields.join(", ")} 更新)`));
  console.log(`ローカルにない (--prune で削除可) (${onlyRemote.length}):`);
  onlyRemote.forEach((id) => console.log(`  - ${id}`));

  // 表示で localById を参照する将来の拡張用に保持（現在は使用しない）
  void localById;
}

async function runDelete(id: string | undefined): Promise<void> {
  if (!id) {
    console.error("Usage: delete <id>");
    process.exit(1);
  }
  const answer = await prompt(`本当に ${id} を削除しますか？ (y/N): `);
  if (answer.toLowerCase() !== "y") {
    console.log("キャンセルしました。");
    return;
  }
  const db = getFirestore();
  await db.collection("questions").doc(id).delete();
  console.log(`✓ Deleted: ${id}`);
}

async function runPrune(localIds: string[]): Promise<void> {
  const db = getFirestore();
  const snap = await db.collection("questions").get();
  const targets = snap.docs.filter((d) => !localIds.includes(d.id)).map((d) => d.id);

  if (targets.length === 0) {
    console.log("\nPruning: nothing to delete.");
    return;
  }

  console.log(`\nローカルにない以下の問題を削除します (${targets.length}件):`);
  targets.forEach((id) => console.log(`  - ${id}`));
  const answer = await prompt("実行しますか？ (y/N): ");
  if (answer.toLowerCase() !== "y") {
    console.log("キャンセルしました。");
    return;
  }
  await Promise.all(targets.map((id) => db.collection("questions").doc(id).delete()));
  console.log(`✓ Deleted ${targets.length} questions.`);
}

async function prompt(message: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    return (await rl.question(message)).trim();
  } finally {
    rl.close();
  }
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n) + "…" : s;
}

function printTable(headers: string[], rows: string[][]): void {
  const widths = headers.map((h, i) =>
    Math.max(displayWidth(h), ...rows.map((r) => displayWidth(r[i] ?? "")))
  );
  const formatRow = (cells: string[]) =>
    cells.map((c, i) => padRight(c, widths[i])).join(" | ");
  console.log(formatRow(headers));
  console.log(widths.map((w) => "-".repeat(w)).join("-+-"));
  rows.forEach((r) => console.log(formatRow(r)));
}

function displayWidth(s: string): number {
  // CJK 文字は概ね2幅、それ以外は1幅として計算（簡易実装）
  let width = 0;
  for (const c of s) {
    const code = c.codePointAt(0) ?? 0;
    width += code >= 0x1100 && (code <= 0x115f || (code >= 0x3000 && code <= 0x9fff) || (code >= 0xac00 && code <= 0xd7a3) || (code >= 0xf900 && code <= 0xfaff) || (code >= 0xff00 && code <= 0xff60)) ? 2 : 1;
  }
  return width;
}

function padRight(s: string, width: number): string {
  const pad = width - displayWidth(s);
  return pad > 0 ? s + " ".repeat(pad) : s;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
