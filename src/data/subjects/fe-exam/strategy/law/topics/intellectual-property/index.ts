import type { Topic } from '../../../../../../types';

export const intellectualProperty: Topic = {
  id: 'fe-intellectual-property',
  eraId: 'fe-law',
  name: '知的財産権',
  subtitle: '著作権法・特許法・商標法・不正競争防止法',
  icon: '©️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '産業財産権',
          content:
            '産業財産権は特許庁に出願・登録して取得する知的財産権です。特許権は発明を保護し、保護期間は出願から20年です。実用新案権は物品の形状・構造の考案を保護し、出願から10年です。意匠権は製品のデザインを保護し、出願から25年です。商標権は商品やサービスのマーク（ロゴ・名称）を保護し、登録から10年で何度でも更新可能です。',
          keyPoints: [
            '特許権: 発明を保護。出願から20年',
            '実用新案権: 物品の考案を保護。出願から10年',
            '意匠権: デザインを保護。出願から25年',
            '商標権: マークを保護。10年（更新可能）',
          ],
        },
        {
          title: '著作権',
          content:
            '著作権は、著作物（思想・感情の創作的表現）を保護する権利です。特許と異なり、創作した時点で自動的に権利が発生し、登録は不要です。保護期間は原則として著作者の死後70年です。プログラムも著作物として保護されます。ただし、アルゴリズムやプログラム言語、規約（インタフェース）は著作権の対象外です。',
          keyPoints: [
            '創作と同時に発生。登録不要',
            '保護期間: 著作者の死後70年',
            'プログラムは著作物（アルゴリズム・言語・規約は対象外）',
          ],
        },
        {
          title: '不正競争防止法',
          content:
            '不正競争防止法は、不正な手段による競争行為を規制する法律です。営業秘密の不正取得・使用・開示を禁止します。営業秘密として保護されるためには3つの要件が必要です。秘密管理性（秘密として管理されていること）、有用性（事業に有用な情報であること）、非公知性（一般に知られていないこと）です。',
          keyPoints: [
            '不正な競争行為を規制する法律',
            '営業秘密の3要件: 秘密管理性・有用性・非公知性',
            '営業秘密の不正取得・使用・開示を禁止',
          ],
        },
        {
          title: '知的財産権の注意点',
          content:
            '職務発明とは、従業員が業務上行った発明のことで、原則として特許を受ける権利は発明者（従業員）に帰属しますが、契約等であらかじめ使用者に帰属させることが可能です。ソフトウェアの著作権は、法人著作の要件を満たせば法人に帰属します。オープンソースソフトウェア（OSS）はソースコードが公開され、一定のライセンス条件下で利用・改変・再配布が可能です。',
          keyPoints: [
            '職務発明: 契約等で使用者への帰属が可能',
            '法人著作: 要件を満たせばソフトウェアの著作権は法人に帰属',
            'OSS: ライセンス条件下で利用・改変・再配布可能',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-intellectual-property-fc1', front: '発明を保護する権利。出願から20年', back: '特許権とは？', explanation: '産業財産権の一つで、特許庁に出願・登録して取得します。', difficulty: 'basic' },
      { id: 'fe-intellectual-property-fc2', front: '製品のデザインを保護する権利。出願から25年', back: '意匠権とは？', explanation: '物品の形状・模様・色彩のデザインを保護します。', difficulty: 'basic' },
      { id: 'fe-intellectual-property-fc3', front: '商品やサービスのマークを保護する権利。10年（更新可能）', back: '商標権とは？', explanation: 'ロゴや名称を保護し、10年ごとに何度でも更新できます。', difficulty: 'basic' },
      { id: 'fe-intellectual-property-fc4', front: '創作した時点で自動的に発生し、登録不要。死後70年保護', back: '著作権の特徴は？', explanation: '特許と異なり出願や登録が不要で、創作と同時に権利が発生します。', difficulty: 'basic' },
      { id: 'fe-intellectual-property-fc5', front: '秘密管理性・有用性・非公知性', back: '営業秘密として保護される3つの要件は？', explanation: '不正競争防止法で保護されるための要件です。3つすべてを満たす必要があります。', difficulty: 'standard' },
      { id: 'fe-intellectual-property-fc6', front: 'アルゴリズム・プログラム言語・規約（インタフェース）', back: '著作権で保護されないプログラム関連の要素は？', explanation: 'プログラム自体は保護されますが、これらは対象外です。', difficulty: 'standard' },
      { id: 'fe-intellectual-property-fc7', front: '物品の形状・構造の考案を保護。出願から10年', back: '実用新案権とは？', explanation: '特許ほど高度な発明でなくても、実用的な考案を保護します。', difficulty: 'standard' },
      { id: 'fe-intellectual-property-fc8', front: '従業員が業務上行った発明', back: '職務発明とは？', explanation: '契約等であらかじめ使用者（会社）に権利を帰属させることが可能です。', difficulty: 'standard' },
      { id: 'fe-intellectual-property-fc9', front: '不正な手段による競争行為を規制する法律', back: '不正競争防止法とは？', explanation: '営業秘密の不正取得・使用・開示などを禁止します。', difficulty: 'standard' },
      { id: 'fe-intellectual-property-fc10', front: 'ソースコードが公開され、ライセンス条件下で利用・改変可能', back: 'OSS（オープンソースソフトウェア）とは？', explanation: 'GPL・MIT・Apacheなど様々なライセンスがあります。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-intellectual-property-q1',
          question: '特許権の保護期間として正しいものはどれか。',
          options: ['出願から10年', '出願から20年', '出願から25年', '登録から10年'],
          correctIndex: 1,
          explanation: '特許権の保護期間は出願から20年です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-intellectual-property-q2',
          question: '著作権の特徴として正しいものはどれか。',
          options: [
            '特許庁への登録が必要',
            '創作と同時に権利が発生する',
            '保護期間は出願から20年',
            'アルゴリズムも保護対象',
          ],
          correctIndex: 1,
          explanation: '著作権は創作と同時に自動的に権利が発生し、登録は不要です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-intellectual-property-q3',
          question: '営業秘密として保護されるための3要件に含まれないものはどれか。',
          options: ['秘密管理性', '有用性', '非公知性', '独創性'],
          correctIndex: 3,
          explanation: '営業秘密の3要件は秘密管理性・有用性・非公知性です。独創性は含まれません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-intellectual-property-q4',
          question: '産業財産権のうち、10年ごとに更新が可能なものはどれか。',
          options: ['特許権', '実用新案権', '意匠権', '商標権'],
          correctIndex: 3,
          explanation: '商標権は登録から10年で、何度でも更新可能です。他の権利は更新できません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-intellectual-property-q5',
          question: 'プログラムの著作権に関する説明として正しいものはどれか。',
          options: [
            'プログラム言語も著作権で保護される',
            'アルゴリズムは著作権で保護される',
            'プログラムは著作物として保護される',
            'プログラムの著作権は登録が必要',
          ],
          correctIndex: 2,
          explanation: 'プログラムは著作物として保護されますが、アルゴリズム・言語・規約は保護対象外です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-intellectual-property-q6',
          question: '意匠権の保護期間として正しいものはどれか。',
          options: ['出願から10年', '出願から15年', '出願から20年', '出願から25年'],
          correctIndex: 3,
          explanation: '意匠権の保護期間は出願から25年です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-intellectual-property-q7',
          question: '職務発明の説明として正しいものはどれか。',
          options: [
            '特許を受ける権利は常に使用者に帰属する',
            '契約等で使用者への権利帰属が可能',
            '職務外の発明も職務発明に含まれる',
            '職務発明は特許出願できない',
          ],
          correctIndex: 1,
          explanation: '職務発明は原則として発明者（従業員）に帰属しますが、契約等で使用者に帰属させることが可能です。',
          difficulty: 'advanced',
        },
        {
          id: 'fe-intellectual-property-q8',
          question: '不正競争防止法で規制される行為に該当するものはどれか。',
          options: [
            '特許の出願',
            '営業秘密の不正取得',
            'オープンソースの利用',
            '商標の正当な使用',
          ],
          correctIndex: 1,
          explanation: '不正競争防止法は営業秘密の不正取得・使用・開示などの不正競争行為を規制します。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
