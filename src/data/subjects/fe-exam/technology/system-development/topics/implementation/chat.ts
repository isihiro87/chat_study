import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const implementationChat: HistoryChat = {
  id: 'fe-implementation',
  icon: '💻',
  title: 'ソフトウェア開発手法',
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
    // ── セクション1: ウォーターフォールとアジャイル ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>ウォーターフォールモデル</strong>と<strong>アジャイル開発</strong>の違いは必出テーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ウォーターフォールモデルとは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '開発工程を<strong>要件定義→設計→実装→テスト→運用</strong>の順に<strong>前の工程に戻らない</strong>前提で進める手法だよ。大規模で要件が明確なプロジェクトに向いている。ただし後から要件変更に対応しにくいのが弱点',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'アジャイル開発はどう違いますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>アジャイル</strong>は短い反復（<strong>イテレーション</strong>）で少しずつ開発を進める。<strong>要件変更に柔軟</strong>に対応でき、動くソフトウェアを早期に提供できる。代表的な手法が<strong>スクラム</strong>と<strong>XP（エクストリームプログラミング）</strong>だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ウォーターフォール</span> = 順序通り・後戻りなし / <span class="keyword">アジャイル</span> = 短い反復・変更に柔軟',
    },
    {
      type: 'quiz',
      question: 'ウォーターフォールモデルの特徴として適切なものはどれか。',
      options: [
        { letter: 'A', text: '短い反復で段階的に開発する', correct: false },
        { letter: 'B', text: '各工程を順番に進め、原則として前工程に戻らない', correct: true },
        { letter: 'C', text: '要件変更に柔軟に対応できる', correct: false },
        { letter: 'D', text: 'プロトタイプを繰り返し作成する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ウォーターフォールモデルは各工程を順番に進め、原則として前工程に戻らない開発手法です。',
    },

    // ── セクション2: スクラムとXP ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'アジャイルの代表手法、<strong>スクラム</strong>と<strong>XP</strong>の特徴を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'スクラムにはどんな役割がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3つの役割がある。<strong>プロダクトオーナー</strong>（要件の優先順位を決定）、<strong>スクラムマスター</strong>（チームの障害を取り除く）、<strong>開発チーム</strong>（実際に開発する）。作業単位は<strong>スプリント</strong>（1〜4週間）で、毎日<strong>デイリースクラム</strong>（15分の朝会）を行う',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'XPの特徴的なプラクティスは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>ペアプログラミング</strong>（2人1組でコーディング）、<strong>テスト駆動開発（TDD）</strong>（テストを先に書く）、<strong>リファクタリング</strong>（機能を変えずにコードを改善）、<strong>継続的インテグレーション（CI）</strong>（頻繁にビルド・テスト）が代表的だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">スクラム</span>: PO/SM/開発チーム、スプリント / <span class="keyword">XP</span>: ペアプロ・TDD・リファクタリング・CI',
    },
    {
      type: 'quiz',
      question: 'スクラムでチームの障害を取り除く役割はどれか。',
      options: [
        { letter: 'A', text: 'プロダクトオーナー', correct: false },
        { letter: 'B', text: 'スクラムマスター', correct: true },
        { letter: 'C', text: '開発チーム', correct: false },
        { letter: 'D', text: 'プロジェクトマネージャ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。スクラムマスターはチームが効率的に作業できるよう障害を取り除く役割です。',
    },

    // ── セクション3: その他の開発手法 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>プロトタイピング</strong>、<strong>スパイラルモデル</strong>、<strong>DevOps</strong>も押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '他にどんな開発手法がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>プロトタイピング</strong>は試作品を作ってユーザに確認してもらう手法。<strong>スパイラルモデル</strong>はウォーターフォールの各工程を繰り返しながら段階的に完成度を高める。<strong>RAD</strong>は短期間で開発ツールを活用して素早く開発する手法だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'DevOpsとは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>DevOps</strong>は開発（Dev）と運用（Ops）が<strong>連携して迅速にリリース</strong>する文化・手法だよ。<strong>CI/CD</strong>（継続的インテグレーション/デリバリー）で自動化し、リリースサイクルを短縮するんだ',
    },
    {
      type: 'quiz',
      question: 'DevOpsの説明として適切なものはどれか。',
      options: [
        { letter: 'A', text: '開発工程を順番に進める手法', correct: false },
        { letter: 'B', text: '開発と運用が連携して迅速にリリースする文化・手法', correct: true },
        { letter: 'C', text: '試作品を繰り返し作成する手法', correct: false },
        { letter: 'D', text: '2人1組でプログラミングする手法', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。DevOpsは開発（Dev）と運用（Ops）が連携してCI/CDで迅速にリリースする文化・手法です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>ウォーターフォール</strong>：工程順に進行、後戻りなし。大規模・要件明確向き',
        '<strong>アジャイル</strong>：短い反復で段階開発、変更に柔軟',
        '<strong>スクラム</strong>：PO/SM/開発チーム、スプリント、デイリースクラム',
        '<strong>XP</strong>：ペアプログラミング、TDD、リファクタリング、CI',
        '<strong>DevOps</strong>：開発＋運用の連携、CI/CDで迅速リリース',
      ],
    },
  ],
};
