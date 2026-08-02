/**
 * AI のツール実行（function calling）。
 *
 * AI は「この関数を呼びたい」と申告するだけで、**実行はコード側が検証してから**行う。
 * AI が Firestore を直接触ることはない（`ai-capabilities.md` §4-2）。
 *
 * ## 実装しているツール
 * | ツール | できること | 検証 |
 * |---|---|---|
 * | `remember`  | テスト日・目標・忙しさ・呼び方・メモを覚える | 項目ホワイトリスト＋個人情報フィルタ＋日付妥当性 |
 * | `savePlan`  | テスト日から逆算した学習プランを保存 | 単元キーを教材索引と完全一致で照合 |
 * | `getStats`  | 学習分析の照会（読み取りのみ） | — |
 *
 * ## 実装していないツール（設計から意図的に外した）
 * - `openReference` … **不要**。単元解決＋Quick Reply で決定論的にリンクを出しており、
 *   ツール往復させるほうが遅く・不確実になる（`aiTopicResolver`）。
 * - `applyScope` / `askQuestion` … **つづもんBotに対応する機能が無い**。
 *   出題範囲（`testScope`）と「1問解く」は一問一答Botの毎日配信のための仕組みで、
 *   つづもんはワーク演習・参考書が学習の本体。つづもんの日次プッシュが実装された段階で再検討する。
 *
 * ## 規律
 * - **1ターンに実行するツールは1つだけ**（レイテンシと副作用の予測可能性のため）
 * - 検証に落ちたら**実行せず**、AI に理由を返して言い直させる
 * - 書き込みは失敗しても throw しない（会話は続ける）
 */

import type { LlmToolCall, LlmToolDef } from './llmProvider';
import {
  validateMemoryPatch,
  applyMemoryPatch,
  buildMemoryAckText,
  type AiMemory,
} from './aiMemoryCore';
import {
  validatePlan,
  buildPlanAckText,
  type StudyPlan,
} from './studyPlanCore';
import {
  validateProfilePatch,
  applyProfilePatch,
  describeProfile,
  type AiProfile,
} from './aiProfileCore';
import {
  buildScheduleAckText,
  validateSchedulePatch,
  type PushSchedulePatch,
} from './tsudumonSchedule';
import {
  buildExamAckText,
  validateExam,
  type TsudumonExam,
} from './tsudumonExamCore';
import {
  MODE_LABELS,
  isModeSetting,
  type TsudumonModeSetting,
} from './tsudumonModeCore';
import {
  ESCALATION_REASONS,
  buildEscalationAckText,
  validateEscalation,
  type OperatorHandling,
} from './operatorHandoffCore';

/** ツール名（この3つ以外は実行しない）。 */
export const TOOL_NAMES = [
  'remember',
  'savePlan',
  'getStats',
  'setProfile',
  'escalate',
  'setExamScope',
  'setPushSchedule',
  'setStudyMode',
  'searchWeb',
] as const;
export type ToolName = (typeof TOOL_NAMES)[number];

/**
 * Gemini / OpenAI へ渡すツール定義。
 *
 * `savePlan` の `topicKeys` は**教材の単元キー**（例 `08-edo-bakufu`）。
 * 説明文で「候補から選ぶこと」を明示し、自由作文を抑止する
 * （最終的にはコード側の照合で弾くので、ここは一次防御）。
 */
export const TOOL_DEFINITIONS: LlmToolDef[] = [
  {
    name: 'remember',
    description:
      '生徒が教えてくれた「テストの日」「目標」「部活などの忙しさ」「呼ばれ方の好み」を覚える。' +
      '生徒が自分から教えてくれたときだけ呼ぶ。推測で埋めない。' +
      '個人情報（本名・住所・学校名・電話番号・パスワード）は絶対に渡さない。' +
      '渡しても保存されず、やり直しになる。',
    parameters: {
      type: 'object',
      properties: {
        nextTestDate: {
          type: 'string',
          description: '次のテストの日。YYYY-MM-DD 形式（例 2026-09-10）',
        },
        testSubjects: {
          type: 'array',
          items: { type: 'string' },
          description: 'テストの範囲や教科（例 ["歴史", "数学"]）',
        },
        goal: {
          type: 'string',
          description: '目標（60文字まで。例「次は80点」）',
        },
        busyNote: {
          type: 'string',
          description: '部活や習い事などの忙しさ（80文字まで）',
        },
        callStyle: {
          type: 'string',
          description: '呼ばれ方の好み（20文字まで）',
        },
        notes: {
          type: 'array',
          items: { type: 'string' },
          description: 'そのほか覚えておくとよいこと（1件80文字まで）',
        },
      },
    },
  },
  {
    name: 'savePlan',
    description:
      'テストの日から逆算した学習プランを保存する。週ごとの範囲と、その週にやる単元を決める。' +
      '**単元は必ずシステムプロンプトに書かれている「使える単元キー」から選ぶこと。' +
      '自分で単元名を作ってはいけない。**',
    parameters: {
      type: 'object',
      properties: {
        testDate: {
          type: 'string',
          description: 'テストの日。YYYY-MM-DD 形式',
        },
        weeks: {
          type: 'array',
          description: '週ごとの予定（8週まで）',
          items: {
            type: 'object',
            properties: {
              fromDate: {
                type: 'string',
                description: '週の開始日 YYYY-MM-DD',
              },
              toDate: { type: 'string', description: '週の終了日 YYYY-MM-DD' },
              topicKeys: {
                type: 'array',
                items: { type: 'string' },
                description:
                  'その週に取り組む単元キー（1週5個まで）。使える単元キーの一覧から選ぶ',
              },
              note: { type: 'string', description: 'ひとこと（60文字まで）' },
            },
            required: ['fromDate', 'toDate', 'topicKeys'],
          },
        },
      },
      required: ['testDate', 'weeks'],
    },
  },
  {
    name: 'setProfile',
    description:
      '生徒が「呼び名を変えたい」「もっと元気な感じで話して」などと言ったときに、' +
      '話し方のタイプ・お互いの呼び名・好きなこと・目標を設定する。' +
      '生徒が自分から希望したときだけ呼ぶ。' +
      '呼び名は**ニックネーム**であって本名ではない。本名・学校名などの個人情報は渡さない。',
    parameters: {
      type: 'object',
      properties: {
        persona: {
          type: 'string',
          enum: ['friendly', 'cheerful', 'calm', 'buddy'],
          description:
            '話し方のタイプ。friendly=やさしいお姉さん/お兄さん、cheerful=元気な応援団、' +
            'calm=おちついた先生、buddy=タメ口の相棒',
        },
        aiName: {
          type: 'string',
          description:
            'あなた（AI）の呼び名。生徒が決めたニックネーム（12文字まで）',
        },
        studentName: {
          type: 'string',
          description: '生徒の呼び名。ニックネーム（12文字まで・本名は不可）',
        },
        likes: {
          type: 'string',
          description: '好きなこと・興味（60文字まで）',
        },
        dream: {
          type: 'string',
          description: '目標・なりたい姿（60文字まで）',
        },
        note: {
          type: 'string',
          description: 'そのほか知っておいてほしいこと（100文字まで）',
        },
      },
    },
  },
  {
    name: 'getStats',
    description:
      '生徒の学習状況（解いた問題数・正答率・得意/ニガテな単元）を確認する。' +
      'システムプロンプトに既に学習分析が載っている場合は呼ぶ必要はない。',
    parameters: { type: 'object', properties: {} },
  },
  {
    name: 'setExamScope',
    description:
      'テストの日と出題範囲を登録する。**生徒は範囲を正確に知らないことが多いので、' +
      '会話で目星をつけたら confidence="estimated" で登録してよい**（完璧を待たない）。' +
      '「学校でいまどのあたり？」「前のテストはどこまで？」と単元名を出して聞き、' +
      'だいたい決まったら「たぶんこのあたりでいい？」と確認してから呼ぶ。' +
      '範囲が変わったと言われたら、そのつど呼び直して上書きする。',
    parameters: {
      type: 'object',
      properties: {
        testDate: {
          type: 'string',
          description: 'テストの初日。YYYY-MM-DD 形式',
        },
        unitNos: {
          type: 'array',
          items: { type: 'string' },
          description:
            'テスト範囲の章番号（"01"〜"19"）。システムプロンプトの単元一覧から選ぶ。1つでもよい。' +
            'topicIds を渡すときは省略してよい',
        },
        topicIds: {
          type: 'array',
          items: { type: 'string' },
          description:
            '範囲を**節まで**絞れたときの節ID（例 "08-edo-bakufu"）。' +
            'システムプロンプトの単元一覧に出ている節IDから選ぶ。' +
            '章まるごとより正確なので、「江戸幕府の成立から享保の改革まで」のように' +
            '途中までと分かったら必ずこちらを使う。章の一部だけのときに unitNos で' +
            '章ごと登録すると、習っていないところまで出題される',
        },
        confidence: {
          type: 'string',
          enum: ['confirmed', 'estimated'],
          description:
            'confirmed=範囲表などで本人が確認ずみ / estimated=会話でつけた目星',
        },
        note: {
          type: 'string',
          description:
            '目星の根拠（例:「学校は江戸幕府の途中まで進んでいる」）120文字まで',
        },
      },
      // unitNos は必須にしない。節まで絞れたときは topicIds だけで足り、
      // 両方を要求すると AI が章と節の食い違うペアを作る（validateExam は
      // topicIds を正として章を計算し直すので、渡されても害は無い）。
      required: ['testDate'],
    },
  },
  {
    name: 'setPushSchedule',
    description:
      'LINEに届くメッセージの曜日・時刻を変更する。「平日だけにして」「土曜の朝がいい」' +
      '「もう毎日はいらない」「おつかれさまは夜だけにして」などと言われたら呼ぶ。' +
      'つづもんが送るのは①今日の1単元（決まった時刻）と②学習後のおつかれさま（時間帯の中で）の' +
      '**1日最大2通**。変えたい項目だけ渡せばよい（渡さない項目はそのまま）。',
    parameters: {
      type: 'object',
      properties: {
        days: {
          type: 'array',
          items: { type: 'number' },
          description:
            '「今日の1単元」を送る曜日。0=日,1=月,…,6=土。平日だけなら [1,2,3,4,5]、送らないなら []',
        },
        weekdayHour: {
          type: 'number',
          description: '平日に届く時刻（6〜21のいずれか。例: 17）',
        },
        weekendHour: {
          type: 'number',
          description: '土日に届く時刻（6〜21のいずれか。例: 8）',
        },
        recapDays: {
          type: 'array',
          items: { type: 'number' },
          description:
            'おつかれさまメッセージを送る曜日（同じ形式）。送らないなら []',
        },
        recapFrom: {
          type: 'number',
          description: 'おつかれさまを送ってよい時間帯の開始（例: 16）',
        },
        recapTo: {
          type: 'number',
          description: 'おつかれさまを送ってよい時間帯の終わり（例: 22）',
        },
      },
    },
  },
  {
    name: 'setStudyMode',
    description:
      '「いま何に力を入れたいか」を変える。「入試の勉強がしたい」「受験対策メインで」' +
      '「定期テストだけでいい」「テスト前だけ切り替えて」などと言われたら呼ぶ。' +
      '**「今日の1単元」の選び方が変わる**。生徒が何も言っていないのに勝手に変えない。' +
      'ふだんは auto（中1・中2は定期テスト／中3は両立）で問題ない。',
    parameters: {
      type: 'object',
      properties: {
        mode: {
          type: 'string',
          description:
            'auto=学年におまかせ / exam=定期テスト対策（範囲の中から出す） / ' +
            'entrance=入試対策（全19単元を弱点から回す） / ' +
            'both=両立（テスト14日前だけ定期テストに切り替わる）',
        },
      },
      required: ['mode'],
    },
  },
  {
    name: 'searchWeb',
    description:
      'インターネットで調べる。**教材（中学歴史の参考書）に無いことを聞かれたときだけ**使う。' +
      '例: 最近のニュース、人物や場所の細かい情報、教科書の範囲外の一般常識。' +
      '**歴史の学習内容そのものは検索しない**（教材の説明のほうが正確で、生徒の学習と噛み合う）。' +
      '雑談・相談・使い方の質問でも使わない。',
    parameters: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            '検索する言葉（100文字まで）。生徒の名前や住所などの個人情報は絶対に含めない',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'escalate',
    description:
      '運営（人）に取り次ぐ。**返金・請求・二重課金・解約がうまくいかない・不具合で教材が開けない**' +
      'など、AIが推測で答えると事故になることを言われたら必ずこれを呼ぶ。' +
      '呼ぶと運営へ通知が飛び、生徒には「運営から連絡が行くから待っててね」と伝わる。' +
      '**勉強の質問・使い方の質問では呼ばない**（それは自分で答える）。',
    parameters: {
      type: 'object',
      properties: {
        reason: {
          type: 'string',
          enum: [...ESCALATION_REASONS],
          description:
            '種別。refund=返金 / billing=請求・課金 / cancel=解約 / bug=不具合 / account=アカウント・端末 / other=その他',
        },
        summary: {
          type: 'string',
          description:
            '運営が読んで状況が分かる要約（200文字まで）。生徒の言葉をそのまま要約する',
        },
      },
      required: ['reason', 'summary'],
    },
  },
];

// ---------------------------------------------------------------------------
// 実行
// ---------------------------------------------------------------------------

/** ツール実行の結果。AI に返して最終応答を作らせる。 */
export interface ToolOutcome {
  /** AI に渡す実行結果（成功/失敗と理由） */
  resultForModel: string;
  /** ユーザーへ添える定型文（あれば）。AI の作文に任せない確認用 */
  ackText?: string;
  /** Firestore に書き込む内容（呼び出し側が実行する） */
  write?:
    | { kind: 'memory'; value: AiMemory }
    | { kind: 'plan'; value: StudyPlan }
    | { kind: 'profile'; value: AiProfile }
    | { kind: 'operator'; value: OperatorHandling }
    | { kind: 'exam'; value: TsudumonExam }
    | { kind: 'schedule'; value: PushSchedulePatch }
    | { kind: 'mode'; value: TsudumonModeSetting };
  /** 検証に落ちたか（計測用） */
  rejected: boolean;
}

export interface ToolContext {
  existingMemory: AiMemory | undefined;
  existingProfile?: AiProfile | undefined;
  /** 教材に実在する単元キー */
  validTopicKeys: ReadonlySet<string>;
  /** 単元キー → 表示名 */
  topicName: (key: string) => string | null;
  /** 学習分析の要約テキスト（`getStats` の戻り値に使う） */
  analysisSummary: string;
  /** いまの配信設定（`tsudumonDaily/{uid}`）。差分更新の土台にする */
  currentSchedule?: Record<string, unknown>;
  now: Date;
}

/** ツール名が実行可能なものか。 */
export function isKnownTool(name: string): name is ToolName {
  return (TOOL_NAMES as readonly string[]).includes(name);
}

/**
 * ツール呼び出しを1件実行する。
 *
 * **副作用は起こさない**（Firestore への書き込み内容を `write` として返すだけ）。
 * 実際の書き込みは呼び出し側（`aiPaidChat`）が行う——テストしやすくするため。
 */
export function executeTool(call: LlmToolCall, ctx: ToolContext): ToolOutcome {
  if (!isKnownTool(call.name)) {
    return {
      resultForModel: `エラー: "${call.name}" は使えないツールです。`,
      rejected: true,
    };
  }

  switch (call.name) {
    case 'remember':
      return executeRemember(call.args, ctx);
    case 'savePlan':
      return executeSavePlan(call.args, ctx);
    case 'setProfile':
      return executeSetProfile(call.args, ctx);
    case 'getStats':
      return {
        resultForModel:
          ctx.analysisSummary ||
          'まだ学習の記録が少なくて、分析できる段階じゃないよ。',
        rejected: false,
      };
    case 'escalate':
      return executeEscalate(call.args, ctx);
    case 'setExamScope':
      return executeSetExamScope(call.args, ctx);
    case 'setPushSchedule':
      return executeSetPushSchedule(call.args, ctx);
    case 'setStudyMode':
      return executeSetStudyMode(call.args);
    case 'searchWeb':
      // 実際の検索は非同期なので呼び出し側（aiPaidChat）が行う。
      // ここではプレースホルダを返し、置き換えてもらう。
      return {
        resultForModel: '（検索中）',
        rejected: false,
      };
  }
}

function executeRemember(
  args: Record<string, unknown>,
  ctx: ToolContext
): ToolOutcome {
  const validated = validateMemoryPatch(args, ctx.now);
  if (!validated.ok) {
    return {
      // AI には理由を返して言い直させる（勝手に保存しない）。
      resultForModel: `保存できませんでした: ${validated.reason}。生徒にやさしく聞き直してください。`,
      rejected: true,
    };
  }
  const next = applyMemoryPatch(ctx.existingMemory, validated.value);
  return {
    resultForModel: '覚えました。生徒に短く「覚えたよ」と伝えてください。',
    ackText: buildMemoryAckText(validated.value),
    write: { kind: 'memory', value: next },
    rejected: false,
  };
}

function executeSetProfile(
  args: Record<string, unknown>,
  ctx: ToolContext
): ToolOutcome {
  const validated = validateProfilePatch(args);
  if (!validated.ok) {
    return {
      resultForModel: `設定できませんでした: ${validated.reason}。生徒にやさしく聞き直してください。`,
      rejected: true,
    };
  }
  const next = applyProfilePatch(ctx.existingProfile, validated.value);
  return {
    resultForModel:
      '設定しました。次の返事から新しい話し方・呼び名を使ってください。',
    ackText: `⚙️ 設定を変えたよ
${describeProfile(next)}`,
    write: { kind: 'profile', value: next },
    rejected: false,
  };
}

function executeSavePlan(
  args: Record<string, unknown>,
  ctx: ToolContext
): ToolOutcome {
  const validated = validatePlan(args, ctx.validTopicKeys, ctx.now);
  if (!validated.ok) {
    const unknown = validated.unknownTopics?.length
      ? `（使えない単元: ${validated.unknownTopics.join('、')}）` +
        'システムプロンプトの「使える単元キー」から選び直してください。'
      : '';
    return {
      resultForModel: `プランを保存できませんでした: ${validated.reason}${unknown}`,
      rejected: true,
    };
  }
  return {
    resultForModel:
      'プランを保存しました。生徒に短く伝えてください（詳細は別途送られます）。',
    ackText: buildPlanAckText(validated.value, ctx.now, ctx.topicName),
    write: { kind: 'plan', value: validated.value },
    rejected: false,
  };
}

/**
 * ツール実行の結果を、2回目の LLM 呼び出しへ渡す文脈にする。
 * （プロバイダ非依存にするため、ツール応答の専用ロールは使わず文脈へ足す）
 */
export function buildToolResultContext(
  call: LlmToolCall,
  outcome: ToolOutcome
): string {
  return (
    `\n\n# ツール実行の結果\n` +
    `あなたが呼んだ「${call.name}」を実行した。結果は次のとおり。\n` +
    `${outcome.resultForModel}\n` +
    `この結果を踏まえて、生徒への返事を書いて。**同じツールをもう一度呼ばないこと。**`
  );
}

/**
 * プロンプトに「使える単元キーの一覧」を載せる。
 * これが無いと AI は単元キーを作文してしまう（検証で弾かれるが往復が無駄になる）。
 *
 * 92単元すべてを載せるとトークンを食うので、**話題に関係する範囲だけ**渡す想定。
 */
export function buildTopicKeyCatalog(
  topics: Array<{ key: string; name: string; volume: string }>
): string {
  if (topics.length === 0) return '';
  const lines = topics.map((t) => `- ${t.key} … ${t.volume} ${t.name}`);
  return (
    `\n\n# 使える単元キー（プラン作成用）\n` +
    `\`savePlan\` の \`topicKeys\` には**必ず下のキーをそのまま**使う。` +
    `ここに無い単元名を作らない。\n` +
    lines.join('\n')
  );
}

/**
 * 運営（人）への取り次ぎ。
 *
 * ここは「AIが答えてはいけない話題」の出口なので、**AIの作文に委ねない**:
 *   - 生徒への文面は `buildEscalationAckText` の定型文（推測を混ぜさせない）
 *   - 運営への通知と `operatorHandling` の書き込みは呼び出し側（`aiPaidChat`）が行う
 */
function executeEscalate(
  args: Record<string, unknown>,
  ctx: ToolContext
): ToolOutcome {
  const validated = validateEscalation(args, ctx.now.getTime());
  if (!validated.ok) {
    return {
      resultForModel: `取り次げませんでした: ${validated.reason}。生徒に状況をもう一度やさしく聞いてください。`,
      rejected: true,
    };
  }
  return {
    resultForModel:
      '運営に取り次ぎました。生徒への案内文はこちらで用意したので、' +
      '**あなたは料金・返金・解約・不具合の見通しを一切書かないこと**。' +
      'ひとこと寄り添う言葉だけ添えてください。',
    ackText: buildEscalationAckText(validated.value),
    write: { kind: 'operator', value: validated.value },
    rejected: false,
  };
}

/**
 * テストの日・範囲を登録する。
 *
 * 範囲があいまいなまま登録できることが要点（`confidence='estimated'`）。
 * 生徒への確認文はこちらで用意し、AI には「範囲を勝手に足さない」ことだけ守らせる。
 */
function executeSetExamScope(
  args: Record<string, unknown>,
  ctx: ToolContext
): ToolOutcome {
  const validated = validateExam(args, ctx.now.getTime());
  if (!validated.ok) {
    return {
      resultForModel: `登録できませんでした: ${validated.reason}。生徒にやさしく聞き直してください。`,
      rejected: true,
    };
  }
  return {
    resultForModel:
      'テストの予定を登録しました。生徒への確認文はこちらで用意したので、' +
      'あなたは「範囲はあとで直せる」ことを一言そえるだけでよいです。' +
      '登録していない単元を勝手に付け足して話さないこと。',
    ackText: buildExamAckText(validated.value, ctx.now.getTime()),
    write: { kind: 'exam', value: validated.value },
    rejected: false,
  };
}

/**
 * 学習モードの変更。値は4つのいずれかだけ受け付ける
 *（AIが 'juken' などと作文しても弾く）。確認文はコード側で作り、
 * 「変えたつもりで変わっていない」を防ぐ。
 */
function executeSetStudyMode(args: Record<string, unknown>): ToolOutcome {
  const mode = args.mode;
  if (!isModeSetting(mode)) {
    return {
      resultForModel:
        'モードの指定が正しくありません。auto / exam / entrance / both のいずれかで呼び直してください。',
      rejected: true,
    };
  }
  return {
    resultForModel: `学習モードを ${mode} にしました。生徒に短く伝えてください。`,
    ackText: `「今日の1単元」の出し方を《${MODE_LABELS[mode]}》に変えたよ📖`,
    write: { kind: 'mode', value: mode },
    rejected: false,
  };
}

/** LINEに届くメッセージの曜日・時刻を変える（チャットからの要望に応える）。 */
function executeSetPushSchedule(
  args: Record<string, unknown>,
  ctx: ToolContext
): ToolOutcome {
  const validated = validateSchedulePatch(args, ctx.currentSchedule);
  if (!validated.ok) {
    return {
      resultForModel: `変更できませんでした: ${validated.reason}。どう変えたいかをもう一度聞いてください。`,
      rejected: true,
    };
  }
  return {
    resultForModel:
      '配信設定を変更しました。確認文はこちらで用意したので、あなたは一言そえるだけでよいです。',
    ackText: buildScheduleAckText(validated.summary),
    write: { kind: 'schedule', value: validated.value },
    rejected: false,
  };
}
