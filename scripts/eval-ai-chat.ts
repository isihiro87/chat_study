/**
 * AI チャット（スタ先生）のライブ評価ループ。
 *
 * 実会話スナップショット（docs/operations/log-snapshots/2026-07-19-line-conversation-analysis.md）
 * で見つかった誤案内パターンを中心に、想定質問を実際に Gemini へ投げて
 * 「言うべきこと（expect）／言ってはいけないこと（forbid）」を正規表現で検査する。
 *
 * プロンプト（functions/src/aiChatPrompt.ts）を変更したら必ず一度回すこと。
 * 静的チェックは functions/src/__tests__/aiChatPrompt.test.ts（vitest・無料）。
 *
 * 実行（GEMINI_API_KEY は functions/.env から読む。1回 約20リクエスト・flash-lite）:
 *   npx tsx scripts/eval-ai-chat.ts
 *   npx tsx scripts/eval-ai-chat.ts --only 設定変更   # ケース名でフィルタ
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
import type { UserDoc } from '../functions/src/userDocTypes';

// functions/ 配下は CJS（package.json に type:module なし）のため、ESM の
// named import だと export を解決できない。createRequire 経由で読み込む。
const requireCjs = createRequire(import.meta.url);
const { buildSystemPrompt } = requireCjs(
  '../functions/src/aiChatPrompt.ts'
) as typeof import('../functions/src/aiChatPrompt');

const ROOT = resolve(import.meta.dirname, '..');
const ENV_FILE = resolve(ROOT, 'functions/.env');

interface EvalCase {
  name: string;
  /** UserDoc 相当（stats/testScope 等の未型付けフィールドも渡せるよう loose に持つ） */
  user: Record<string, unknown>;
  input: string;
  /** 応答がこれらすべてにマッチすべき */
  expect?: RegExp[];
  /** 応答がこれらのどれにもマッチしてはいけない */
  forbid?: RegExp[];
}

const CASES: EvalCase[] = [
  {
    name: '料金-無料',
    user: { grade: '中2', subject: 'history' },
    input: 'これって有料なの？',
    expect: [/無料/],
    forbid: [/月\s*[¥￥]?\s*(680|980)/],
  },
  {
    name: '料金-つづもんは有料',
    user: { grade: '中1', subject: 'history' },
    input: 'つづもんっていう問題集はタダで使えるの？',
    expect: [/有料|購入|別売/],
  },
  {
    name: '設定変更-実行フリ禁止',
    user: { grade: '中3', subject: 'science' },
    input: '配信を夜8時にして',
    expect: [/設定変更/],
    forbid: [/変更したよ|変更しておいたよ|変えておいたね|完了したよ/],
  },
  {
    name: '教科変更-追加不可',
    user: { grade: '中2', subject: 'english' },
    input: '英語のままで理科も追加してほしい',
    expect: [/1つ|ひとつ/],
    forbid: [/追加できるよ|追加しておいたよ/],
  },
  {
    name: '再開-実行フリ禁止',
    user: { grade: '中2', subject: 'history' },
    input: 'また問題届くようにして',
    expect: [/再開|設定・サポート/],
    forbid: [/届くようにしたよ|再開したよ|再開しておいた/],
  },
  {
    name: 'これで決定-完了断言禁止',
    user: { grade: '中1', subject: 'history' },
    input: 'これで決定',
    forbid: [/設定(が)?完了(した|だ)|登録完了/],
  },
  {
    name: '範囲設定-メニュー名',
    user: { grade: '中2', subject: 'history' },
    input: 'テスト範囲ってどこで設定するの？',
    expect: [/出題範囲設定/],
    forbid: [/「テスト範囲設定」(という)?ボタン/],
  },
  {
    name: '略称禁止',
    user: { grade: '中2', subject: 'history' },
    input: 'このサービスの名前なんていうの？',
    expect: [/チャットでスタディ/],
    forbid: [/ちゃすた/],
  },
  {
    name: '教科-地理はlive',
    user: { grade: '中1', subject: 'geography' },
    input: '地理の問題って配信してるの？',
    expect: [/地理/],
    forbid: [/地理[^。]{0,12}(準備中|まだ)/],
  },
  {
    name: '教科-数学はcoming',
    user: { grade: '中1', subject: 'history' },
    input: '数学の問題も出せる？',
    expect: [/準備中|これから|順次/],
  },
  {
    name: '配信頻度',
    user: { grade: '中2', subject: 'history' },
    input: '問題って何日おきに届くの？',
    expect: [/週(に)?3回|月・水・金/],
  },
  {
    name: '配信問題の答え-カンニング防止',
    user: {
      grade: '中2',
      subject: 'history',
      lastQuestion: {
        id: 'q-test',
        topic: '江戸幕府の成立',
        text: '江戸幕府を開いた人物はだれ？',
        choices: ['徳川家康', '織田信長', '豊臣秀吉', '源頼朝'],
        correctChoiceId: 0,
        explanation: '1603年に徳川家康が征夷大将軍になった。',
      } as never,
    },
    input: 'さっきの問題の答え教えて',
    expect: [/ヒント|自分で|タップ/],
    forbid: [/答えは(「)?徳川家康|正解は(「)?徳川家康/],
  },
  {
    name: 'ニックネーム-廃止済み',
    user: { grade: '中1', subject: 'english' },
    input: 'ニックネームってどこで変えるの？',
    expect: [/なくなった|ありません|無い/],
  },
  {
    name: '問題自作禁止-公式へ誘導',
    user: { grade: '中2', subject: 'history' },
    input: 'オリジナルの四択問題つくって出して！',
    expect: [/1問解く/],
    forbid: [/[①②③④]/],
  },
  {
    name: '問題自作禁止-単元指定は範囲設定へ',
    user: { grade: '中2', subject: 'history' },
    input: '江戸時代の問題がやりたいから何問か作って',
    expect: [/出題範囲設定|1問解く/],
    forbid: [/[①②③④]/],
  },
  {
    name: '実データ-連続日数',
    user: {
      grade: '中2',
      subject: 'science',
      stats: {
        streak: { current: 7, longest: 12 },
        totalAnswered: 42,
        totalCorrect: 30,
      },
    },
    input: '今って何日連続だっけ？',
    expect: [/7日/],
    forbid: [/わからない|分かりません/],
  },
  {
    name: '実データ-出題範囲の確認',
    user: {
      grade: '中1',
      subject: 'history',
      testScope: { topics: ['旧石器時代と縄文時代', '弥生時代と邪馬台国'] },
    },
    input: 'いま範囲ってどこに設定してたっけ？',
    expect: [/縄文|弥生/],
  },
];

function loadGeminiKey(): string {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  const env = readFileSync(ENV_FILE, 'utf8');
  const m = env.match(/^GEMINI_API_KEY=(.+)$/m);
  if (!m) throw new Error('GEMINI_API_KEY not found (env or functions/.env)');
  return m[1].trim();
}

async function callGemini(
  apiKey: string,
  system: string,
  input: string
): Promise<string> {
  const model = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/` +
    `${encodeURIComponent(model)}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: 'user', parts: [{ text: input }] }],
      generationConfig: { maxOutputTokens: 500, temperature: 0.7 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const text = json.candidates?.[0]?.content?.parts
    ?.map((p) => p.text ?? '')
    .join('');
  if (!text) throw new Error('empty response');
  return text;
}

async function main() {
  const onlyIdx = process.argv.indexOf('--only');
  const only = onlyIdx >= 0 ? process.argv[onlyIdx + 1] : null;
  const apiKey = loadGeminiKey();

  const cases = only ? CASES.filter((c) => c.name.includes(only)) : CASES;
  let pass = 0;
  let fail = 0;

  for (const c of cases) {
    const system = buildSystemPrompt(c.user as unknown as UserDoc);
    let text: string;
    try {
      text = await callGemini(apiKey, system, c.input);
    } catch (e) {
      console.log(`❌ ${c.name}: API error ${String(e).slice(0, 120)}`);
      fail++;
      continue;
    }
    const missing = (c.expect ?? []).filter((re) => !re.test(text));
    const hit = (c.forbid ?? []).filter((re) => re.test(text));
    if (missing.length === 0 && hit.length === 0) {
      console.log(`✅ ${c.name}`);
      pass++;
    } else {
      console.log(`❌ ${c.name}`);
      for (const re of missing) console.log(`   expect 不一致: ${re}`);
      for (const re of hit) console.log(`   forbid 検出: ${re}`);
      console.log(`   応答: ${text.replace(/\n/g, ' ').slice(0, 300)}`);
      fail++;
    }
  }

  console.log(`\n結果: ${pass} pass / ${fail} fail（全${cases.length}件）`);
  if (fail > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
