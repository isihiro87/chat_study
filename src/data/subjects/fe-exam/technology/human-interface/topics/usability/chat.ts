import type { HistoryChat } from '../../../../../../history-chat/types';

export const usabilityChat: HistoryChat = {
  id: 'fe-usability',
  icon: '👁️',
  title: 'ユーザビリティとUX',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: { explaining: '🧑‍🏫', happy: '😊', thinking: '🤔', excited: '🤩' },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋', surprised: '😲', thinking: '🤔', happy: '😄', confused: '😵' },
    },
  ],
  content: [
    // ── セクション1: ユーザビリティの定義 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'ISO規格で定義される<strong>ユーザビリティ</strong>の3つの要素を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ユーザビリティって「使いやすさ」ですよね？もう少し厳密な定義はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ISO 9241-11</strong>で定義されているよ。「特定のユーザが特定の利用状況で、特定の目標を達成する際の<strong>有効さ</strong>・<strong>効率</strong>・<strong>満足度</strong>の度合い」だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '3つの要素をもう少し詳しく教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>有効さ</strong>（Effectiveness）はユーザが目標を正確・完全に達成できる度合い。<strong>効率</strong>（Efficiency）は目標達成に費やす時間や労力の少なさ。<strong>満足度</strong>（Satisfaction）は不快さがなく肯定的に使えることだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'ポイントは「<strong>特定の</strong>」という修飾語だ。万人にとって使いやすいものではなく、<strong>対象ユーザ・利用状況・目標</strong>を明確にした上で評価するんだ。試験でもこの定義が問われるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ユーザビリティ</span>（ISO 9241-11）= <span class="keyword">有効さ</span>（目標達成度）＋ <span class="keyword">効率</span>（資源の少なさ）＋ <span class="keyword">満足度</span>（肯定的態度）',
    },
    {
      type: 'quiz',
      question: 'ISO 9241-11で定義されるユーザビリティの3つの要素に含まれないものはどれか。',
      options: [
        { letter: 'A', text: '有効さ', correct: false },
        { letter: 'B', text: '効率', correct: false },
        { letter: 'C', text: '安全性', correct: true },
        { letter: 'D', text: '満足度', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。ユーザビリティは有効さ・効率・満足度の3要素で定義されます。安全性はセキュリティの分野です。',
    },

    // ── セクション2: ニールセンのユーザビリティ原則 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'UI設計の実践ガイドとして有名な<strong>ニールセンの10原則</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '具体的にどうすればユーザビリティを高められるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ニールセンのユーザビリティ10原則</strong>が参考になるよ。特に重要なのは<strong>システム状態の視認性</strong>（今何が起きているか表示する）と<strong>一貫性と標準</strong>（同じ操作は同じ結果）だ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>エラーの防止</strong>（そもそもエラーを起こさせない設計）と<strong>エラーからの回復支援</strong>（エラーが起きたら具体的な対処法を示す）も大切だ。「記憶よりも認知」は、ユーザに覚えさせるのではなく<strong>選択肢を見せる</strong>設計だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'フールプルーフの考え方と通じるところがありますね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'まさにそう！他にも<strong>ユーザのコントロールと自由</strong>（やり直しができる）、<strong>柔軟性と効率性</strong>（初心者にも上級者にも対応）、<strong>美的で最小限のデザイン</strong>（不要な情報を表示しない）があるよ',
    },
    {
      type: 'summary-point',
      text: 'ニールセン10原則: <span class="keyword">状態の視認性</span> / <span class="keyword">一貫性</span> / <span class="keyword">エラー防止</span> / <span class="keyword">記憶より認知</span> / <span class="keyword">やり直し可能</span>',
    },
    {
      type: 'quiz',
      question: 'ニールセンのユーザビリティ原則で、ユーザに情報を記憶させるのではなく選択肢を表示する設計原則はどれか。',
      options: [
        { letter: 'A', text: 'システム状態の視認性', correct: false },
        { letter: 'B', text: '一貫性と標準', correct: false },
        { letter: 'C', text: '記憶よりも認知', correct: true },
        { letter: 'D', text: 'エラーの防止', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。「記憶よりも認知」は、ユーザに覚えさせるのではなく必要な情報や選択肢を画面上に表示して認知的負荷を減らす原則です。',
    },

    // ── セクション3: UXとアクセシビリティ ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'ユーザビリティを超える<strong>UX</strong>の概念と<strong>アクセシビリティ</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'UXってユーザビリティと何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>UX</strong>（User Experience）はユーザが製品やサービスを通じて得る<strong>体験全体</strong>のことだよ。ユーザビリティは「使いやすさ」だけど、UXは使う前の期待、使用中の感情、使った後の印象まで<strong>全てを含む</strong>んだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>アクセシビリティ</strong>は<strong>障害の有無や年齢に関わらずアクセスできる度合い</strong>だ。視覚障害者がスクリーンリーダーで操作できるか、高齢者が文字サイズを変更できるか、といった観点だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ユーザビリティ評価の方法も気になります',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '代表的な評価方法は<strong>ヒューリスティック評価</strong>（専門家がガイドラインに基づいて評価）と<strong>ユーザビリティテスト</strong>（実際のユーザに操作してもらい観察）だよ。<strong>思考発話法</strong>（操作しながら考えを声に出す）も有名だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">UX</span> = 体験全体（ユーザビリティより広い） / <span class="keyword">アクセシビリティ</span> = 誰でもアクセスできる度合い / <span class="keyword">ヒューリスティック評価</span> = 専門家評価',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>ユーザビリティ</strong>（ISO 9241-11）：有効さ＋効率＋満足度',
        '<strong>ニールセン10原則</strong>：状態の視認性・一貫性・エラー防止・記憶より認知など',
        '<strong>UX</strong>：製品・サービスを通じたユーザ体験全体（ユーザビリティより広い概念）',
        '<strong>アクセシビリティ</strong>：障害・年齢に関わらずアクセスできる度合い',
        '<strong>評価方法</strong>：ヒューリスティック評価（専門家）・ユーザビリティテスト（実ユーザ）',
      ],
    },
  ],
};
