import type { HistoryChat } from '../../../../../../history-chat/types';

export const uiDesignChat: HistoryChat = {
  id: 'fe-ui-design',
  icon: '🖼️',
  title: 'インタフェース設計',
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
    // ── セクション1: GUIとCUI ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'ユーザとコンピュータの対話方式である<strong>GUI</strong>と<strong>CUI</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'GUIとCUIの違いを教えてください！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>GUI</strong>（Graphical User Interface）は<strong>アイコンやボタンなどの視覚的な要素</strong>でコンピュータを操作する方式だ。WindowsやmacOSのデスクトップがまさにGUIだね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>CUI</strong>（Character User Interface）は<strong>文字でコマンドを入力</strong>して操作する方式だ。コマンドプロンプトやターミナルがCUIだよ。直感的ではないけど、<strong>効率的に操作</strong>できて自動化にも向いているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'GUIの方が使いやすそうですが、CUIにもメリットがあるんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'GUIの構成要素も覚えておこう。<strong>WIMP</strong>（Window・Icon・Menu・Pointing device）と呼ばれる4つの要素が基本だよ。他にも<strong>プルダウンメニュー</strong>、<strong>ラジオボタン</strong>、<strong>チェックボックス</strong>、<strong>リストボックス</strong>など、GUI部品の名前も試験に出るよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">GUI</span> = 視覚的操作（アイコン・ボタン） / <span class="keyword">CUI</span> = 文字コマンド操作 / <span class="keyword">WIMP</span> = Window・Icon・Menu・Pointing device',
    },
    {
      type: 'quiz',
      question: 'GUIの基本構成要素であるWIMPに含まれないものはどれか。',
      options: [
        { letter: 'A', text: 'Window', correct: false },
        { letter: 'B', text: 'Icon', correct: false },
        { letter: 'C', text: 'Keyboard', correct: true },
        { letter: 'D', text: 'Pointing device', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。WIMPはWindow・Icon・Menu・Pointing deviceの4つで構成されます。Keyboardは含まれません。',
    },

    // ── セクション2: 画面設計と帳票設計 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '使いやすいシステムを作るための<strong>画面設計</strong>と<strong>帳票設計</strong>の原則を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '画面を設計するときのルールってあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'あるよ！<strong>画面設計の原則</strong>として、<strong>一貫性</strong>（操作方法を統一）、<strong>視認性</strong>（見やすさ）、<strong>操作性</strong>（使いやすさ）が重要だ。同じ機能のボタンは同じ位置に置く、色の意味を統一するなどだね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'データ入力画面では<strong>入力チェック</strong>（バリデーション）が重要だ。<strong>ニューメリックチェック</strong>（数値かどうか）、<strong>リミットチェック</strong>（範囲内か）、<strong>フォーマットチェック</strong>（形式が正しいか）などがあるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ユーザの入力ミスを防ぐためのチェックなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！<strong>帳票設計</strong>では、印刷物のレイアウトを設計する。ヘッダ・明細・フッタの構成、項目の配置、罫線の使い方などを定めるよ。使う人の業務フローを理解して設計することが大切だ',
    },
    {
      type: 'summary-point',
      text: '画面設計: <span class="keyword">一貫性</span>・<span class="keyword">視認性</span>・<span class="keyword">操作性</span> / 入力チェック: <span class="keyword">ニューメリック</span>（数値）・<span class="keyword">リミット</span>（範囲）・<span class="keyword">フォーマット</span>（形式）',
    },
    {
      type: 'quiz',
      question: '入力された値が指定された範囲内にあるかどうかを検査する入力チェックはどれか。',
      options: [
        { letter: 'A', text: 'ニューメリックチェック', correct: false },
        { letter: 'B', text: 'リミットチェック', correct: true },
        { letter: 'C', text: 'フォーマットチェック', correct: false },
        { letter: 'D', text: '論理チェック', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。リミットチェック（範囲チェック）は入力値が指定された上限値と下限値の範囲内にあるかを検査します。',
    },

    // ── セクション3: ユニバーサルデザイン ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '誰もが使えるデザインを目指す<strong>ユニバーサルデザイン</strong>の考え方を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ユニバーサルデザインとバリアフリーは違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問！<strong>バリアフリー</strong>は障害のある人の<strong>障壁を取り除く</strong>考え方。<strong>ユニバーサルデザイン</strong>は<strong>最初から年齢・障害の有無に関係なく誰でも使えるよう設計</strong>する考え方だよ。より広い概念なんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'Webの分野では<strong>Webアクセシビリティ</strong>が重要だ。<strong>JIS X 8341-3</strong>という規格があって、視覚障害者がスクリーンリーダーで読めるように<strong>代替テキスト</strong>を設定したり、<strong>色だけに頼らない情報伝達</strong>を行うことが求められるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '色覚の違いがある人にも配慮するということですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！<strong>カラーユニバーサルデザイン</strong>では、色だけでなく<strong>形やテキストでも区別</strong>できるようにするんだ。赤と緑だけで重要/非重要を示すのではなく、アイコンやラベルも併用するのがベストプラクティスだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ユニバーサルデザイン</span> = 最初から誰でも使える設計 / <span class="keyword">Webアクセシビリティ</span> = JIS X 8341-3 / <span class="keyword">色だけに頼らない</span>情報伝達',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>GUI</strong>：視覚的操作（WIMP） / <strong>CUI</strong>：文字コマンド操作',
        '<strong>画面設計</strong>：一貫性・視認性・操作性が原則',
        '<strong>入力チェック</strong>：ニューメリック（数値）・リミット（範囲）・フォーマット（形式）',
        '<strong>ユニバーサルデザイン</strong>：誰でも使える設計（バリアフリーより広い概念）',
        '<strong>Webアクセシビリティ</strong>：JIS X 8341-3、代替テキスト、色に頼らない情報伝達',
      ],
    },
  ],
};
