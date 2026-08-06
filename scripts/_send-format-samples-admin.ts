/**
 * 公式LINE（一問一答 @824cebif）で出せる**出題フォーマットの見本**を、管理人にだけ push する。
 *
 * 本番の `selectAndSendQuestion` をそのまま呼ぶので、**ユーザーが受け取るのと同一のカード**が届く
 * （見本用に作り直したモックではない）。未実装の形式（carousel）だけはこのスクリプト内で組む。
 *
 * 使い方:
 *   cd functions && npm run build && cd ..
 *   gcloud auth application-default login
 *   npx tsx scripts/_send-format-samples-admin.ts           # dry-run（何を送るかだけ表示）
 *   npx tsx scripts/_send-format-samples-admin.ts --send    # 実送信（管理人のみ）
 *   npx tsx scripts/_send-format-samples-admin.ts --send --admin2   # 2人目の管理人へ
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SEND = process.argv.includes('--send');
const ADMIN2 = process.argv.includes('--admin2');
const PROJECT = 'chatstudy-63477';
const ADMIN_PRIMARY = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ADMIN_SECONDARY = 'U732828c7b975479c97a104c5cbc45b7a';

function loadEnv(): void {
  const dir = dirname(fileURLToPath(import.meta.url));
  for (const line of readFileSync(
    resolve(dir, '../functions/.env'),
    'utf8'
  ).split(/\r?\n/)) {
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
}

/** 本番と同じ出題カードを1枚送る（見本ラベルを intro に載せる）。 */
interface Sample {
  label: string;
  intro: string;
  questionId: string;
  subject: 'history' | 'math' | 'science' | 'english' | 'geography';
  grade: '中1' | '中2' | '中3';
}

const SAMPLES: Sample[] = [
  {
    label: '① 4択（いまの主力・歴史）',
    intro:
      '【見本 1/6】4択（いま毎日配信しているのはこれ）\n' +
      '選択肢をタップすると、その場で正誤＋解説が1通で返るよ。\n' +
      'カードの下の「まだ習ってない」もタップできる👇',
    questionId: 'q-history-america-expansion-q1',
    subject: 'history',
    grade: '中2',
  },
  {
    label: '② 図つき問題（数学・円と扇形）',
    intro:
      '【見本 2/6】図つき問題\n' +
      '問題文の下に図を出せる（questions.imageUrl）。図形・グラフ・統計・地図むけ👇',
    questionId: 'q-math-math-g1-circle-fan-math-g1-circle-fan-q17',
    subject: 'math',
    grade: '中1',
  },
  {
    label: '③ 数式ハイブリッド（数学・加法と減法）',
    intro:
      '【見本 3/6】数式つき問題（math-hybrid）\n' +
      '日本語＝テキスト／数式＝MathJax画像を1枚のカードに混ぜている。\n' +
      '選択肢も解説も数式画像で出せる👇',
    questionId: 'q-math-math-g1-add-sub-math-g1-add-sub-q1',
    subject: 'math',
    grade: '中1',
  },
];

/** 未実装の形式の見本: Flex carousel（横スワイプで複数カード）。 */
function buildCarouselSample(): unknown {
  const card = (title: string, body: string, color: string) => ({
    type: 'bubble',
    size: 'kilo',
    header: {
      type: 'box',
      layout: 'vertical',
      backgroundColor: color,
      paddingAll: '12px',
      contents: [
        {
          type: 'text',
          text: title,
          color: '#FFFFFF',
          weight: 'bold',
          size: 'sm',
          wrap: true,
        },
      ],
    },
    body: {
      type: 'box',
      layout: 'vertical',
      paddingAll: '12px',
      contents: [{ type: 'text', text: body, wrap: true, size: 'sm' }],
    },
  });
  return {
    type: 'flex',
    altText: '見本: 横スワイプのカード（carousel）',
    contents: {
      type: 'carousel',
      contents: [
        card(
          '旧石器・縄文',
          '横にスワイプすると次のカードが出るよ。',
          '#F59E0B'
        ),
        card('弥生時代', '単元選びをこの形にすると一覧性が上がる。', '#0EA5E9'),
        card(
          '古墳と大和政権',
          'いまは未実装。技術的にはすぐ出せる。',
          '#16A34A'
        ),
      ],
    },
  };
}

async function main(): Promise<void> {
  loadEnv();
  const to = ADMIN2 ? ADMIN_SECONDARY : ADMIN_PRIMARY;
  process.env.GOOGLE_CLOUD_PROJECT ||= PROJECT;
  process.env.GCLOUD_PROJECT ||= PROJECT;

  console.log(
    `\n=== 出題フォーマット見本 ${SEND ? '【送信】' : '(DRY RUN)'} ===`
  );
  console.log(`宛先: ${to.slice(0, 10)}…`);
  SAMPLES.forEach((s) => console.log(`  ${s.label}  (${s.questionId})`));
  console.log(
    '  ④ ワーク種別選択カード（用語入力・記述AI採点をその場で体験できる）'
  );
  console.log('  ⑤ carousel の見本（未実装の形式）');
  console.log('  ⑥ しめの説明テキスト');
  if (!SEND) {
    console.log('\n▶ DRY RUN。--send で実送信します。');
    return;
  }

  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  if (getApps().length === 0) {
    initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  }
  const mod = await import('../functions/lib/lineWebhook.js');
  const client = await mod.getLineClient();
  const uid = `line:${to}`;

  // ①〜③: 本番の出題経路をそのまま使う（＝ユーザーと同じカードが届く）
  for (const s of SAMPLES) {
    try {
      await mod.selectAndSendQuestion(client, uid, {
        introText: s.intro,
        questionIdOverride: s.questionId,
        subjectOverride: s.subject,
        gradeOverride: s.grade,
        bypassDailyLimit: true,
        source: 'extra',
      });
      console.log(`  ✅ ${s.label}`);
    } catch (e) {
      console.log(`  ❌ ${s.label}: ${(e as Error).message}`);
    }
  }

  // ④ ワーク種別選択カード（タップすると用語入力・記述AI採点が実際に始まる）
  const TOPIC = '古代文明の誕生'; // terms 14問 / written 3問がある単元
  try {
    await client.pushMessage({
      to,
      messages: [
        {
          type: 'text',
          text:
            '【見本 4/6】用語入力と記述式（AI採点）\n' +
            'この下のカードで形式を選ぶと、その場で始まります。実際に答えを打ち込んで試してみて。\n\n' +
            '🔤 用語入力 … 表記ゆれ・読み仮名を吸収して自動判定。外れたら「これも正解では？」ボタンでAIが再採点\n' +
            '✍️ 記述・AI採点 … Geminiが10点満点で採点して、フィードバックと採点基準を返す',
        },
        mod.buildWorkbookKindSelectFlex(TOPIC) as never,
      ],
    });
    console.log('  ✅ ④ ワーク種別選択カード');
  } catch (e) {
    console.log(`  ❌ ④: ${(e as Error).message}`);
  }

  // ⑤ 未実装形式の見本（carousel）
  try {
    await client.pushMessage({
      to,
      messages: [
        {
          type: 'text',
          text:
            '【見本 5/6】まだ使っていない形式：横スワイプのカード（carousel）\n' +
            '単元選びをこの形にすると一覧性が上がる。実装は軽い👇',
        },
        buildCarouselSample() as never,
      ],
    });
    console.log('  ✅ ⑤ carousel');
  } catch (e) {
    console.log(`  ❌ ⑤: ${(e as Error).message}`);
  }

  // ⑥ しめ（受信側のデモ依頼＋できないことの明示）
  try {
    await client.pushMessage({
      to,
      messages: [
        {
          type: 'text',
          text:
            '【見本 6/6】ここからは「送ってもらう側」も試せます。\n\n' +
            '📷 写真を送ってみて → AIが画像を読んで答えます（問題の写真でもOK）\n' +
            '🎤 音声を送ってみて → AIが聞き取って答えます（60秒まで）\n' +
            '😀 スタンプを送ってみて → 内容を踏まえて返します\n' +
            '🎬 動画は非対応 → 定型文が返るだけです\n\n' +
            'まだ使っていない形式は他に2つあります。\n' +
            '・動画メッセージ（解説動画をトークに直接送る。いまはムビスタへのリンクのみ）\n' +
            '・imagemap（1枚の画像の一部をタップさせる。地図問題・年表の位置当て向き。' +
            '専用の画像ホスティングが要るので、これだけは準備が必要）',
        },
      ],
    });
    console.log('  ✅ ⑥ しめ');
  } catch (e) {
    console.log(`  ❌ ⑥: ${(e as Error).message}`);
  }

  console.log('\n完了。LINEを確認してください。');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
