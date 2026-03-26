import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const testingChat: HistoryChat = {
  id: 'fe-testing',
  icon: '🧪',
  title: 'テスト技法',
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
    // ── セクション1: ブラックボックスとホワイトボックス ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>ブラックボックステスト</strong>と<strong>ホワイトボックステスト</strong>の違いは試験頻出です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ブラックボックスとホワイトボックスの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ブラックボックステスト</strong>は内部構造を見ずに<strong>入力と出力</strong>だけで正しさを確認する。<strong>ホワイトボックステスト</strong>は内部のコード構造（<strong>論理パス</strong>）に着目してテストする。ブラックボックスは仕様ベース、ホワイトボックスは構造ベースだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'それぞれの具体的な技法は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'ブラックボックスは<strong>同値分割</strong>（入力を有効・無効のグループに分ける）と<strong>境界値分析</strong>（境界付近の値でテスト）。ホワイトボックスは<strong>命令網羅</strong>（全命令を最低1回実行）、<strong>分岐網羅</strong>（全分岐を最低1回通過）、<strong>条件網羅</strong>（全条件のT/Fを網羅）がある',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ブラックボックス</span>: 同値分割・境界値分析 / <span class="keyword">ホワイトボックス</span>: 命令網羅・分岐網羅・条件網羅',
    },
    {
      type: 'quiz',
      question: '内部のコード構造に着目せず、入力と出力で正しさを確認するテストはどれか。',
      options: [
        { letter: 'A', text: 'ホワイトボックステスト', correct: false },
        { letter: 'B', text: 'ブラックボックステスト', correct: true },
        { letter: 'C', text: '回帰テスト', correct: false },
        { letter: 'D', text: '単体テスト', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ブラックボックステストは内部構造を見ずに入力と出力の関係で正しさを確認するテスト手法です。',
    },

    // ── セクション2: テスト工程（V字モデル） ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>V字モデル</strong>に基づくテスト工程の対応関係を整理しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'テスト工程にはどんな段階がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'V字モデルで対応する。<strong>単体テスト</strong>（モジュール単位、内部設計に対応）→<strong>結合テスト</strong>（モジュール間の連携、外部設計に対応）→<strong>システムテスト</strong>（システム全体、要件定義に対応）→<strong>受入テスト</strong>（ユーザが最終確認）だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '結合テストのやり方にも種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>トップダウンテスト</strong>は上位モジュールから統合し、下位の代わりに<strong>スタブ</strong>を使う。<strong>ボトムアップテスト</strong>は下位から統合し、上位の代わりに<strong>ドライバ</strong>を使う。<strong>ビッグバンテスト</strong>は全モジュールを一度に統合する方法だ',
    },
    {
      type: 'summary-point',
      text: 'V字: <span class="keyword">単体</span>→<span class="keyword">結合</span>→<span class="keyword">システム</span>→<span class="keyword">受入</span> / トップダウン=<span class="keyword">スタブ</span> / ボトムアップ=<span class="keyword">ドライバ</span>',
    },
    {
      type: 'quiz',
      question: 'トップダウンテストで下位モジュールの代わりに使う仮のモジュールはどれか。',
      options: [
        { letter: 'A', text: 'ドライバ', correct: false },
        { letter: 'B', text: 'スタブ', correct: true },
        { letter: 'C', text: 'モック', correct: false },
        { letter: 'D', text: 'プロキシ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。トップダウンテストでは未完成の下位モジュールの代わりにスタブ（仮モジュール）を使います。',
    },

    // ── セクション3: その他のテスト技法 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>回帰テスト</strong>や<strong>性能テスト</strong>など、その他の重要なテストも押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '回帰テスト（リグレッションテスト）とは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '修正や変更を加えた後に、<strong>既存の機能が壊れていないか</strong>を確認するテストだよ。他にも<strong>負荷テスト</strong>（大量アクセス時の性能確認）、<strong>セキュリティテスト</strong>（脆弱性の検査）、<strong>ユーザビリティテスト</strong>（使いやすさの評価）がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'テストの信頼度曲線って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '横軸にテスト工数、縦軸に累積バグ数をとった<strong>バグ収束曲線</strong>（ゴンペルツ曲線）だよ。最初はバグが多く見つかり、テストが進むと収束する。曲線が横ばいになったら<strong>テスト終了の判断基準</strong>にできる',
    },
    {
      type: 'quiz',
      question: '修正後に既存機能が壊れていないか確認するテストはどれか。',
      options: [
        { letter: 'A', text: '単体テスト', correct: false },
        { letter: 'B', text: '負荷テスト', correct: false },
        { letter: 'C', text: '回帰テスト（リグレッションテスト）', correct: true },
        { letter: 'D', text: '受入テスト', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。回帰テストは修正や変更後に既存の機能が正しく動作するかを確認するテストです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>ブラックボックス</strong>：同値分割・境界値分析 / <strong>ホワイトボックス</strong>：命令/分岐/条件網羅',
        'V字モデル：<strong>単体→結合→システム→受入</strong>テスト',
        '結合テスト：<strong>トップダウン</strong>（スタブ使用）/ <strong>ボトムアップ</strong>（ドライバ使用）',
        '<strong>回帰テスト</strong>：修正後に既存機能の正常動作を確認',
        'バグ収束曲線が横ばいになったらテスト終了の判断基準',
      ],
    },
  ],
};
