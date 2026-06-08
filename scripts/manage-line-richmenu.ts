/**
 * LINE 公式アカウントのリッチメニューを管理する CLI ツール。
 *
 * 前提:
 * - functions/.env に LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が設定されていること
 *   （docs/operations/line-webhook-deploy.md §2 を参照）
 * - data/line-richmenu/{free,premium}-richmenu.json が存在すること
 *
 * 作成・割当・削除すると data/line-richmenu/state.json に richMenuId が記録される。
 *
 * 使い方:
 *   npx tsx scripts/manage-line-richmenu.ts list
 *   npx tsx scripts/manage-line-richmenu.ts create <free|premium>
 *   npx tsx scripts/manage-line-richmenu.ts upload <free|premium> <imagePath>
 *   npx tsx scripts/manage-line-richmenu.ts set-default <free|premium>
 *   npx tsx scripts/manage-line-richmenu.ts link <free|premium> <lineUserId>
 *   npx tsx scripts/manage-line-richmenu.ts unlink <lineUserId>
 *   npx tsx scripts/manage-line-richmenu.ts delete <richMenuId>
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const ENV_FILE = resolve(ROOT, "functions/.env");
const RICHMENU_DIR = resolve(ROOT, "data/line-richmenu");
const STATE_FILE = resolve(RICHMENU_DIR, "state.json");

// "default" は 2026-06 トライアル廃止後の全ユーザー共通メニュー。
// free / trial / premium は dormant（残置）。sync-plan は plan 概念があるため
// "default" を受け付けない（PLAN_TARGETS でガード）。
const TARGETS = ["default", "free", "trial", "premium"] as const;
type Target = (typeof TARGETS)[number];
const PLAN_TARGETS = ["free", "trial", "premium"] as const;
type Plan = (typeof PLAN_TARGETS)[number];
const FIREBASE_PROJECT_ID = "chatstudy-63477";

interface StateEntry {
  richMenuId: string;
  createdAt: string;
  imageUploaded: boolean;
}
type State = Partial<Record<Target, StateEntry>>;

const API_BASE = "https://api.line.me";
const API_DATA_BASE = "https://api-data.line.me";

async function main(): Promise<void> {
  const [, , subcommand, ...args] = process.argv;
  if (!subcommand || subcommand === "--help" || subcommand === "-h") {
    printUsage();
    process.exit(subcommand ? 0 : 1);
  }

  const token = loadAccessToken();

  switch (subcommand) {
    case "list":
      await runList(token);
      return;
    case "create":
      await runCreate(token, requireTarget(args[0]));
      return;
    case "upload":
      await runUpload(token, requireTarget(args[0]), requireArg(args[1], "imagePath"));
      return;
    case "set-default":
      await runSetDefault(token, requireTarget(args[0]));
      return;
    case "link":
      await runLink(
        token,
        requireTarget(args[0]),
        requireArg(args[1], "lineUserId")
      );
      return;
    case "unlink":
      await runUnlink(token, requireArg(args[0], "lineUserId"));
      return;
    case "delete":
      await runDelete(token, requireArg(args[0], "richMenuId"));
      return;
    case "sync-plan":
      await runSyncPlan(token, args);
      return;
    default:
      console.error(`Unknown subcommand: ${subcommand}`);
      printUsage();
      process.exit(1);
  }
}

function printUsage(): void {
  console.log(`Usage:
  list                                                     現在 LINE に存在する richmenu 一覧を表示
  create <default|free|trial|premium>                      data/line-richmenu/<target>-richmenu.json から本体を作成
  upload <default|free|trial|premium> <imagePath>          作成済みの richMenu に PNG をアップロード
  set-default <default|free|trial|premium>                 デフォルトリッチメニューに設定（全ユーザー共通は default）
  link <default|free|trial|premium> <lineUserId>           特定ユーザーに割り当て（LINE 側のみ。Firestore は更新しない）
  unlink <lineUserId>                                      ユーザーから割当解除（デフォルトに戻る）
  delete <richMenuId>                                      指定 richMenu を削除
  sync-plan <lineUserId> <free|trial|premium> [--until <ISO>]
                                                           LINE リンク変更 + Firestore の plan/richMenuType/lastRichMenuUpdatedAt 更新を一気通貫で実行
                                                           （trial 指定時は内部的に plan="premium"+richMenuType="trial"+planSource="trial" に展開）

Examples:
  npx tsx scripts/manage-line-richmenu.ts list
  npx tsx scripts/manage-line-richmenu.ts create default
  npx tsx scripts/manage-line-richmenu.ts upload default ./data/line-richmenu/default.png
  npx tsx scripts/manage-line-richmenu.ts set-default default
  npx tsx scripts/manage-line-richmenu.ts create free
  npx tsx scripts/manage-line-richmenu.ts upload free ./richmenu_free.png
  npx tsx scripts/manage-line-richmenu.ts set-default free
  npx tsx scripts/manage-line-richmenu.ts link premium U0123456789abcdef
  npx tsx scripts/manage-line-richmenu.ts unlink U0123456789abcdef
  npx tsx scripts/manage-line-richmenu.ts sync-plan U0123456789abcdef trial   --until 2026-06-02T00:00:00+09:00
  npx tsx scripts/manage-line-richmenu.ts sync-plan U0123456789abcdef premium --until 2026-06-09T00:00:00+09:00
  npx tsx scripts/manage-line-richmenu.ts sync-plan U0123456789abcdef free`);
}

function loadAccessToken(): string {
  let raw: string;
  try {
    raw = readFileSync(ENV_FILE, "utf8");
  } catch (error) {
    throw new Error(
      `Cannot read ${ENV_FILE}. ${(error as Error).message}\n` +
        "docs/operations/line-webhook-deploy.md §2 に従って functions/.env を作成してください。"
    );
  }
  const map = parseDotenv(raw);
  const token = map.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) {
    throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が functions/.env に設定されていません。");
  }
  return token;
}

function parseDotenv(text: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

function readState(): State {
  try {
    const raw = readFileSync(STATE_FILE, "utf8");
    const parsed = JSON.parse(raw) as State;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw error;
  }
}

function writeState(state: State): void {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n", "utf8");
}

function requireArg(value: string | undefined, name: string): string {
  if (!value) {
    console.error(`引数 ${name} が必要です。`);
    printUsage();
    process.exit(1);
  }
  return value;
}

function requireTarget(value: string | undefined): Target {
  if (!value || !(TARGETS as readonly string[]).includes(value)) {
    console.error(`第1引数は ${TARGETS.join(" | ")} のいずれかを指定してください。`);
    printUsage();
    process.exit(1);
  }
  return value as Target;
}

interface LineErrorBody {
  message?: string;
  details?: Array<{ message?: string; property?: string }>;
}

async function callLineApi<T = unknown>(
  token: string,
  method: string,
  path: string,
  body?: unknown
): Promise<T> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
  };
  const init: RequestInit = { method, headers };
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
    init.body = JSON.stringify(body);
  }
  const res = await fetch(API_BASE + path, init);
  const requestId = res.headers.get("x-line-request-id") ?? "(no x-line-request-id)";
  if (!res.ok) {
    const text = await res.text();
    let parsed: LineErrorBody | null = null;
    try {
      parsed = text ? (JSON.parse(text) as LineErrorBody) : null;
    } catch {
      parsed = null;
    }
    const detailLines = parsed?.details
      ?.map((d) => `    - ${d.property ?? ""}: ${d.message ?? ""}`)
      .join("\n");
    throw new Error(
      `LINE API ${method} ${path} failed: ${res.status} ${res.statusText}\n` +
        `  requestId: ${requestId}\n` +
        `  message: ${parsed?.message ?? text}\n` +
        (detailLines ? `  details:\n${detailLines}\n` : "")
    );
  }
  if (res.status === 200) {
    const text = await res.text();
    if (!text) return {} as T;
    return JSON.parse(text) as T;
  }
  return {} as T;
}

async function uploadRichMenuImage(
  token: string,
  richMenuId: string,
  imagePath: string
): Promise<void> {
  const buffer = readFileSync(imagePath);
  const lower = imagePath.toLowerCase();
  let contentType: string;
  if (lower.endsWith(".png")) contentType = "image/png";
  else if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) contentType = "image/jpeg";
  else throw new Error(`サポートされていない画像形式です（.png または .jpg のみ）: ${imagePath}`);
  const res = await fetch(
    `${API_DATA_BASE}/v2/bot/richmenu/${richMenuId}/content`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
      body: new Uint8Array(buffer),
    }
  );
  const requestId = res.headers.get("x-line-request-id") ?? "(no x-line-request-id)";
  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `LINE API image upload failed: ${res.status} ${res.statusText}\n` +
        `  requestId: ${requestId}\n` +
        `  body: ${text}`
    );
  }
}

interface RichMenuListResponse {
  richmenus: Array<{
    richMenuId: string;
    name: string;
    size: { width: number; height: number };
    chatBarText: string;
    selected: boolean;
  }>;
}

async function runList(token: string): Promise<void> {
  const data = await callLineApi<RichMenuListResponse>(
    token,
    "GET",
    "/v2/bot/richmenu/list"
  );
  if (data.richmenus.length === 0) {
    console.log("(現在 LINE 上に richmenu はありません)");
    return;
  }
  console.log(`Total: ${data.richmenus.length} richmenu(s)`);
  for (const rm of data.richmenus) {
    console.log(
      `  - ${rm.richMenuId}  name=${rm.name}  size=${rm.size.width}x${rm.size.height}  chatBar=${rm.chatBarText}  selected=${rm.selected}`
    );
  }
  const state = readState();
  console.log("\nstate.json:");
  for (const target of TARGETS) {
    const entry = state[target];
    if (entry) {
      console.log(
        `  - ${target}: ${entry.richMenuId} (created=${entry.createdAt}, imageUploaded=${entry.imageUploaded})`
      );
    } else {
      console.log(`  - ${target}: (未作成)`);
    }
  }
}

async function runCreate(token: string, target: Target): Promise<void> {
  const definitionPath = resolve(RICHMENU_DIR, `${target}-richmenu.json`);
  const definition = JSON.parse(readFileSync(definitionPath, "utf8"));
  const result = await callLineApi<{ richMenuId: string }>(
    token,
    "POST",
    "/v2/bot/richmenu",
    definition
  );
  const state = readState();
  state[target] = {
    richMenuId: result.richMenuId,
    createdAt: new Date().toISOString(),
    imageUploaded: false,
  };
  writeState(state);
  console.log(`✓ Created ${target} richmenu: ${result.richMenuId}`);
  console.log(`  state.json updated.`);
  console.log(`  次のステップ: upload ${target} <imagePath>`);
}

async function runUpload(
  token: string,
  target: Target,
  imagePath: string
): Promise<void> {
  const state = readState();
  const entry = state[target];
  if (!entry) {
    throw new Error(
      `state.json に ${target} の richMenuId がありません。先に \`create ${target}\` を実行してください。`
    );
  }
  await uploadRichMenuImage(token, entry.richMenuId, imagePath);
  state[target] = { ...entry, imageUploaded: true };
  writeState(state);
  console.log(`✓ Uploaded ${imagePath} to ${target} richmenu (${entry.richMenuId})`);
}

async function runSetDefault(token: string, target: Target): Promise<void> {
  const state = readState();
  const entry = state[target];
  if (!entry) {
    throw new Error(
      `state.json に ${target} の richMenuId がありません。先に \`create ${target}\` を実行してください。`
    );
  }
  await callLineApi(
    token,
    "POST",
    `/v2/bot/user/all/richmenu/${entry.richMenuId}`
  );
  console.log(`✓ Set default richmenu to ${target} (${entry.richMenuId})`);
}

async function runLink(
  token: string,
  target: Target,
  lineUserId: string
): Promise<void> {
  validateLineUserId(lineUserId);
  const state = readState();
  const entry = state[target];
  if (!entry) {
    throw new Error(
      `state.json に ${target} の richMenuId がありません。先に \`create ${target}\` を実行してください。`
    );
  }
  await callLineApi(
    token,
    "POST",
    `/v2/bot/user/${lineUserId}/richmenu/${entry.richMenuId}`
  );
  console.log(`✓ Linked ${target} richmenu to ${lineUserId} (${entry.richMenuId})`);
}

async function runUnlink(token: string, lineUserId: string): Promise<void> {
  validateLineUserId(lineUserId);
  await callLineApi(token, "DELETE", `/v2/bot/user/${lineUserId}/richmenu`);
  console.log(`✓ Unlinked richmenu from ${lineUserId}（デフォルトに戻ります）`);
}

async function runDelete(token: string, richMenuId: string): Promise<void> {
  await callLineApi(token, "DELETE", `/v2/bot/richmenu/${richMenuId}`);
  const state = readState();
  let removedFromState: Target | null = null;
  for (const target of TARGETS) {
    if (state[target]?.richMenuId === richMenuId) {
      delete state[target];
      removedFromState = target;
      break;
    }
  }
  writeState(state);
  console.log(
    `✓ Deleted richmenu ${richMenuId}${
      removedFromState ? ` (state.json から ${removedFromState} を除去)` : ""
    }`
  );
}

function validateLineUserId(value: string): void {
  if (!/^U[0-9a-f]{32}$/.test(value)) {
    throw new Error(
      `lineUserId は 'U' で始まる33文字（U + 32桁の小文字16進）でなければなりません: ${value}`
    );
  }
}

async function runSyncPlan(token: string, args: string[]): Promise<void> {
  const lineUserId = requireArg(args[0], "lineUserId");
  const planArg = requireArg(args[1], "<free|trial|premium>");
  validateLineUserId(lineUserId);
  if (!(PLAN_TARGETS as readonly string[]).includes(planArg)) {
    throw new Error(`第2引数は ${PLAN_TARGETS.join(" | ")} のいずれかでなければなりません: ${planArg}`);
  }
  const plan = planArg as Plan;

  // --until <ISO> オプション
  let premiumUntil: Date | null = null;
  const untilFlagIdx = args.findIndex((a) => a === "--until");
  if (untilFlagIdx !== -1) {
    const value = args[untilFlagIdx + 1];
    if (!value) {
      throw new Error("--until には ISO8601 形式の日時を指定してください。");
    }
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      throw new Error(`--until をパースできませんでした: ${value}`);
    }
    premiumUntil = parsed;
  }

  // state.json から richMenuId を取得（ENV ではなく state.json を真実とする）
  const state = readState();
  const entry = state[plan];
  if (!entry) {
    throw new Error(
      `state.json に ${plan} の richMenuId がありません。先に \`create ${plan}\` を実行してください。`
    );
  }

  // ① LINE API でリッチメニューをリンク（既存の link 相当）
  await callLineApi(
    token,
    "POST",
    `/v2/bot/user/${lineUserId}/richmenu/${entry.richMenuId}`
  );
  console.log(
    `✓ LINE: ${plan} richmenu (${entry.richMenuId}) を ${lineUserId} にリンクしました`
  );

  // ② Firestore（admin SDK）の users/line:{uid} を更新
  const { initializeApp, applicationDefault, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue, Timestamp } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  }
  const db = getFirestore();
  const uid = `line:${lineUserId}`;
  // users.plan は "free" | "premium" の 2 値しか持たないため、
  // trial は内部的に plan="premium" + richMenuType="trial" + planSource="trial" に分解する。
  const planField: "free" | "premium" = plan === "free" ? "free" : "premium";
  const update: Record<string, unknown> = {
    plan: planField,
    richMenuType: plan,
    lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
  if (plan === "trial") {
    update.planSource = "trial";
  }
  if (premiumUntil !== null) {
    update.premiumUntil = Timestamp.fromDate(premiumUntil);
  }
  await db.doc(`users/${uid}`).set(update, { merge: true });
  console.log(
    `✓ Firestore: users/${uid} を更新しました (plan=${planField}, richMenuType=${plan}${
      plan === "trial" ? ", planSource=trial" : ""
    }${premiumUntil ? `, premiumUntil=${premiumUntil.toISOString()}` : ""})`
  );
  const buttonCount = plan === "free" ? "4ボタン" : "6ボタン";
  console.log(`\n→ 数秒以内にスマホの LINE メニューが ${buttonCount} に切り替わります。`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
