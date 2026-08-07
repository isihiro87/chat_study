/**
 * 無料AIのモデル切替を判断するための、実応答の横並び比較。
 *
 * `eval-ai-chat.ts` は「プロンプトの決まりを守るか」の回帰テストで、
 * **答えの質は測れない**（両モデルとも 22/22 pass）。
 * ここでは中学生が実際に聞きそうな質問を投げ、応答そのものと所要時間を並べる。
 * 良し悪しは人が読んで決める。
 *
 *   node scripts/_compare-models.mjs
 */
import { readFileSync } from 'node:fs';

for (const line of readFileSync('functions/.env', 'utf8').split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const eq = t.indexOf('=');
  if (eq < 0) continue;
  const k = t.slice(0, eq).trim();
  let v = t.slice(eq + 1).trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1);
  }
  if (!(k in process.env)) process.env[k] = v;
}

const SYSTEM =
  'あなたは中学生向け学習サービス「チャットでスタディ」の学習サポーター「スタ先生」です。' +
  'LINEのトークで中学生に答えます。やさしく短く、中学生が読んで分かる言葉で。' +
  '絵文字は多くても1〜2個。長くなりすぎないこと。';

/** 中学生が実際に聞きそうで、かつモデルの地力が出る質問。 */
const PROMPTS = [
  '参勤交代ってなんのためにやったの？',
  '一次関数と比例のちがいがわかりません',
  'be動詞と一般動詞って何がちがうの？わかりやすく',
  '天気図の低気圧のとこで雨がふるのはなんで？',
  'テスト前なのに全然やる気が出ない…どうしたらいい？',
];

async function gemini(model, input) {
  const t0 = Date.now();
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents: [{ role: 'user', parts: [{ text: input }] }],
        generationConfig: { maxOutputTokens: 700, temperature: 0.7 },
      }),
    }
  );
  const j = await res.json();
  const text =
    j.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ??
    '(空)';
  return { text: text.trim(), ms: Date.now() - t0 };
}

async function openai(model, input) {
  const t0 = Date.now();
  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      instructions: SYSTEM,
      input,
      max_output_tokens: 700,
      store: false,
      reasoning: { effort: 'none' },
    }),
  });
  const j = await res.json();
  const text =
    (j.output ?? [])
      .filter((i) => i.type === 'message')
      .flatMap((i) => i.content ?? [])
      .map((c) => c.text ?? '')
      .join('')
      .trim() || `(空 ${JSON.stringify(j).slice(0, 200)})`;
  return { text, ms: Date.now() - t0 };
}

const totals = { gemini: 0, luna: 0 };
for (const p of PROMPTS) {
  console.log('\n' + '='.repeat(70));
  console.log(`Q: ${p}`);
  console.log('='.repeat(70));
  const [g, o] = await Promise.all([
    gemini('gemini-3.1-flash-lite', p).catch((e) => ({
      text: 'ERR ' + e.message,
      ms: 0,
    })),
    openai('gpt-5.6-luna', p).catch((e) => ({
      text: 'ERR ' + e.message,
      ms: 0,
    })),
  ]);
  totals.gemini += g.ms;
  totals.luna += o.ms;
  console.log(
    `\n--- gemini-3.1-flash-lite (${g.ms}ms / ${g.text.length}字) ---`
  );
  console.log(g.text);
  console.log(`\n--- gpt-5.6-luna (${o.ms}ms / ${o.text.length}字) ---`);
  console.log(o.text);
}
console.log('\n' + '='.repeat(70));
console.log(
  `平均応答時間: gemini ${Math.round(totals.gemini / PROMPTS.length)}ms / luna ${Math.round(totals.luna / PROMPTS.length)}ms`
);
