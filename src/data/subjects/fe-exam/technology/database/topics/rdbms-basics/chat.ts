import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const rdbmsBasicsChat: HistoryChat = {
  id: 'fe-rdbms-basics',
  icon: '📋',
  title: 'データベース設計',
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
    // ── セクション1: データベースの種類と関係モデル ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'まずは<strong>データベースの種類</strong>と<strong>関係モデル</strong>の基本用語を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'データベースにはどんな種類があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '大きく3つあるよ。<strong>階層型</strong>は木構造で親子関係、<strong>ネットワーク型</strong>は網構造で多対多、そして<strong>関係（リレーショナル）型</strong>は二次元の表でデータを管理するんだ。今一番使われているのが関係型だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '関係データベースの「表」にはどんな用語がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '表は<strong>リレーション</strong>、行は<strong>タプル</strong>、列は<strong>属性（アトリビュート）</strong>と呼ぶよ。行の数を<strong>基数（カーディナリティ）</strong>、列の数を<strong>次数（ディグリー）</strong>という。試験でよく問われるから正確に覚えよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '主キーと外部キーの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>主キー</strong>は各行を一意に識別する属性で、<strong>NULL値は不可</strong>（エンティティ整合性制約）。<strong>外部キー</strong>は他の表の主キーを参照する属性で、参照先に存在しない値は設定できない（<strong>参照整合性制約</strong>）だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">タプル</span> = 行 / <span class="keyword">属性</span> = 列 / <span class="keyword">主キー</span> = 一意識別（NULL不可） / <span class="keyword">外部キー</span> = 他表の主キーを参照',
    },
    {
      type: 'quiz',
      question: '関係データベースにおいて、表の「行」を表す用語はどれか。',
      options: [
        { letter: 'A', text: '属性', correct: false },
        { letter: 'B', text: 'タプル', correct: true },
        { letter: 'C', text: 'ドメイン', correct: false },
        { letter: 'D', text: 'スキーマ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。タプル（tuple）は関係データベースの表における行を表す用語です。列は属性（アトリビュート）と呼びます。',
    },

    // ── セクション2: E-R図と正規化 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '次に<strong>E-R図</strong>の読み方と<strong>正規化</strong>の3段階を学びましょう。試験頻出のテーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'E-R図ってどういう図ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>E-R図</strong>はデータベースの概念設計で使う図だよ。<strong>エンティティ（実体）</strong>を四角形、<strong>リレーションシップ（関連）</strong>をひし形、<strong>属性</strong>を楕円形で表す。エンティティ間の数量関係を<strong>カーディナリティ（多重度）</strong>と呼び、1:1、1:N、M:Nがある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'M:N（多対多）はそのまま実装できるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'いい質問！M:Nは直接テーブルにできないから、<strong>中間テーブル（連関エンティティ）</strong>を作って1:Nの関係に分解するんだ。両方の主キーを外部キーとして持たせるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '正規化って何のためにするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>正規化</strong>はデータの<strong>冗長性を排除</strong>して<strong>更新時異常</strong>を防ぐためにテーブルを分割する作業だよ。3段階あって覚えやすい。<strong>第1正規形</strong>は繰り返し項目を排除、<strong>第2正規形</strong>は部分関数従属を排除、<strong>第3正規形</strong>は推移的関数従属を排除する',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">第1正規形</span> = 繰り返し排除 / <span class="keyword">第2正規形</span> = 部分関数従属排除 / <span class="keyword">第3正規形</span> = 推移的関数従属排除',
    },
    {
      type: 'quiz',
      question: '第2正規形にするために排除すべきものはどれか。',
      options: [
        { letter: 'A', text: '繰り返し項目', correct: false },
        { letter: 'B', text: '部分関数従属', correct: true },
        { letter: 'C', text: '推移的関数従属', correct: false },
        { letter: 'D', text: '結合従属性', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。第2正規形は第1正規形から部分関数従属（複合主キーの一部だけで決まる非キー属性）を排除した状態です。',
    },

    // ── セクション3: 候補キーと整合性制約 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '最後に<strong>候補キー</strong>や<strong>整合性制約</strong>の詳細を確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '候補キーと主キーの関係がよく分からないです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>候補キー</strong>は行を一意に識別できる<strong>最小の属性の組み合わせ</strong>で、テーブルに複数存在することがある。その中から1つを<strong>主キー</strong>として選び、選ばれなかったものは<strong>代替キー</strong>と呼ぶんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '正規化しすぎると問題はないですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '正規化を進めるとテーブルが増えて<strong>結合（JOIN）</strong>が多くなり性能が低下することがある。だからあえて正規化を崩す<strong>非正規化</strong>を行う場合もあるんだ。整合性と性能のバランスが大切だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">候補キー</span> = 一意識別の最小属性群 / <span class="keyword">非正規化</span> = 性能向上のためにあえて正規化を崩す',
    },
    {
      type: 'quiz',
      question: '正規化の目的として最も適切なものはどれか。',
      options: [
        { letter: 'A', text: 'データの検索速度を向上させること', correct: false },
        { letter: 'B', text: 'テーブル数を減らすこと', correct: false },
        { letter: 'C', text: 'データの冗長性を排除し更新時の矛盾を防ぐこと', correct: true },
        { letter: 'D', text: 'データベースの容量を削減すること', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。正規化の主目的はデータの冗長性を排除し、更新時異常（挿入異常・削除異常・更新異常）を防止することです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>関係データベース</strong>：二次元の表でデータを管理（表=リレーション、行=タプル、列=属性）',
        '<strong>主キー</strong>：各行を一意に識別（NULL不可） / <strong>外部キー</strong>：他表の主キーを参照',
        '<strong>E-R図</strong>：四角形=エンティティ、ひし形=リレーションシップ。M:Nは中間テーブルで分解',
        '<strong>正規化3段階</strong>：1NF（繰り返し排除）→2NF（部分関数従属排除）→3NF（推移的関数従属排除）',
        '<strong>候補キー</strong>：一意識別の最小属性群。主キー＋代替キー',
      ],
    },
  ],
};
