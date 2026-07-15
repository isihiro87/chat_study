// 参考書AI対話（質問／理解度チェック）の純粋部品:
// - メニュー／難易度選択の Flex ビルダー（副作用なし・plain object を返す）
// - Gemini に渡すシステムプロンプト生成（教材接地）
// lineWebhook.ts からこれらを呼び、実際の reply/push・Firestore は webhook 側で行う。
import {
  ReferenceTopic,
  RefLevel,
  REF_LEVEL_LABEL,
  buildReferenceContext,
  referenceTopicLabel,
  refLevelGuidance,
} from './referenceTopic';

const AMBER = '#F59E0B';
const INK = '#111827';
const SUB = '#6B7280';

/** postback data を作る小物。 */
function pb(type: string, extra: Record<string, string> = {}): string {
  return new URLSearchParams({ type, ...extra }).toString();
}

/**
 * QRを読んだ直後に出す「質問する／理解度チェック」の2択カード。
 * デザイン規約: amber アクセント・グラデ禁止・ソリッド。
 */
export function buildReferenceMenuFlex(
  topicKey: string,
  topic: ReferenceTopic
): Record<string, unknown> {
  const label = referenceTopicLabel(topic);
  return {
    type: 'flex',
    altText: `参考書「${topic.name}」— AI先生と深める`,
    contents: {
      type: 'bubble',
      size: 'kilo',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: AMBER,
        paddingAll: '12px',
        contents: [
          {
            type: 'text',
            text: '🤖 AI先生と深める',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'sm',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: topic.name,
            weight: 'bold',
            size: 'md',
            wrap: true,
            color: INK,
          },
          {
            type: 'text',
            text: label,
            size: 'xs',
            wrap: true,
            color: SUB,
          },
          {
            type: 'text',
            text: 'どっちにする？',
            size: 'sm',
            wrap: true,
            color: SUB,
            margin: 'md',
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '12px',
        contents: [
          {
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: {
              type: 'postback',
              label: '❓ わからないことを質問する',
              data: pb('ref_ask', { t: topicKey }),
              displayText: 'この単元について質問する',
            },
          },
          {
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: {
              type: 'postback',
              label: '✅ 理解度チェックを受ける',
              data: pb('ref_check', { t: topicKey }),
              displayText: '理解度チェックを受ける',
            },
          },
        ],
      },
    },
  };
}

/** 理解度チェックの難易度（やさしい／ふつう／むずかしい）選択カード。 */
export function buildRefLevelFlex(
  topicKey: string,
  topic: ReferenceTopic
): Record<string, unknown> {
  const levelBtn = (level: RefLevel, emoji: string) => ({
    type: 'button',
    style: 'secondary',
    height: 'sm',
    action: {
      type: 'postback',
      label: `${emoji} ${REF_LEVEL_LABEL[level]}`,
      data: pb('ref_level', { t: topicKey, level }),
      displayText: `理解度チェック（${REF_LEVEL_LABEL[level]}）`,
    },
  });
  return {
    type: 'flex',
    altText: `理解度チェックのむずかしさをえらんでね`,
    contents: {
      type: 'bubble',
      size: 'kilo',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: AMBER,
        paddingAll: '12px',
        contents: [
          {
            type: 'text',
            text: '✅ 理解度チェック',
            color: '#FFFFFF',
            weight: 'bold',
            size: 'sm',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '16px',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: topic.name,
            weight: 'bold',
            size: 'md',
            wrap: true,
            color: INK,
          },
          {
            type: 'text',
            text: 'むずかしさをえらんでね',
            size: 'sm',
            wrap: true,
            color: SUB,
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '12px',
        contents: [
          levelBtn('easy', '🌱'),
          levelBtn('normal', '📘'),
          levelBtn('hard', '🔥'),
        ],
      },
    },
  };
}

const TONE =
  'あなたは中学生の歴史学習を助ける、やさしくて親しみやすい「AI先生」です。' +
  '中学生にわかる言葉で、短く（長くても4〜5文）、はげますように話します。' +
  '下の【教材】に書かれていることだけを根拠にし、教材にないことは' +
  '「この単元の範囲では説明されていないよ」と正直に伝えます。むずかしい用語は言いかえます。' +
  'いじわるな引っかけはしません。';

/** 質問モードのシステムプロンプト（教材を接地）。 */
export function refAskSystemPrompt(topic: ReferenceTopic): string {
  return (
    TONE +
    '\n\n生徒がこの単元についてわからないことを質問します。教材にもとづいて、' +
    'やさしく解説してください。\n\n【教材】\n' +
    buildReferenceContext(topic)
  );
}

/** 理解度チェック: 出題のシステムプロンプト。 */
export function refCheckQuestionPrompt(
  topic: ReferenceTopic,
  level: RefLevel,
  askedCount: number,
  alreadyAsked: string[]
): string {
  const avoid =
    alreadyAsked.length > 0
      ? `\n\nすでに出した問題（重複させない）:\n${alreadyAsked
          .map((q) => `・${q}`)
          .join('\n')}`
      : '';
  return (
    TONE +
    `\n\nあなたは理解度チェックの問題を出します。難易度は「${REF_LEVEL_LABEL[level]}」。` +
    `方針: ${refLevelGuidance(level)}\n` +
    `教材の内容から、${askedCount}問目の問題を「1問だけ」出してください。` +
    '出力は問題文だけ（番号・答え・解説・ヒントの見出しは付けない）。' +
    '生徒が短く答えられる問いにする。' +
    avoid +
    '\n\n【教材】\n' +
    buildReferenceContext(topic)
  );
}

/** 理解度チェック: 採点のシステムプロンプト。 */
export function refCheckGradePrompt(
  topic: ReferenceTopic,
  level: RefLevel,
  question: string
): string {
  return (
    TONE +
    `\n\nあなたが出した問題に対する生徒の答えを、教材にもとづいて採点します。\n` +
    `出した問題:「${question}」\n\n` +
    '次の順で、みじかく返してください:\n' +
    '1行目に 🟢正解 / 🟡おしい / 🔴もう一歩 のどれか。\n' +
    '次に、正しい答えとやさしい解説（2〜3文）。\n' +
    '最後に、はげましの一言。\n' +
    '答えが合っていれば大きくほめる。間違いでも否定せず、次につながる言い方にする。' +
    '\n\n【教材】\n' +
    buildReferenceContext(topic)
  );
}
