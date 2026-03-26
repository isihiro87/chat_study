import type { HistoryChat } from '../../../../../../history-chat/types';

export const markupLanguagesChat: HistoryChat = {
  id: 'fe-markup-languages',
  icon: '📄',
  title: 'マークアップ言語',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        thinking: '🤔',
        excited: '🤩',
      },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵',
      },
    },
  ],
  content: [
    // ── セクション1: HTMLとCSS ──
    {
      type: 'date',
      text: 'セクション1: HTMLとCSS',
    },
    {
      type: 'narrator',
      text: 'Webページの基盤技術、<strong>HTML</strong>と<strong>CSS</strong>の役割分担から学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'マークアップ言語っていろいろあるみたいですけど、まず何を覚えればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'まずは<strong>HTML</strong>（HyperText Markup Language）だね。Webページの<strong>構造</strong>を記述する言語で、タグを使って見出し・段落・リンク・画像などの要素を定義するんだ。最新版は<strong>HTML5</strong>で、videoタグやcanvasタグなどマルチメディア対応が強化されているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'HTMLだけでWebページの見た目も作れるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'HTMLはあくまで「構造」担当だよ。見た目は<strong>CSS</strong>（Cascading Style Sheets）が担当するんだ。色・フォント・余白・レイアウトなどのデザインをCSSで制御する。HTMLとCSSを<strong>分離</strong>することで、構造とデザインを独立して管理でき<strong>保守性が向上</strong>するんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'HTML = 構造、CSS = 見た目、ということですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">HTML</span> = Webページの構造 / <span class="keyword">CSS</span> = デザイン・レイアウト / 分離で保守性向上',
    },
    {
      type: 'quiz',
      question: 'HTMLとCSSを分離するメリットとして最も適切なものはどれか。',
      options: [
        { letter: 'A', text: 'ページの表示速度が必ず向上する', correct: false },
        { letter: 'B', text: '構造とデザインを独立して管理でき保守性が向上する', correct: true },
        { letter: 'C', text: 'JavaScriptが不要になる', correct: false },
        { letter: 'D', text: 'サーバの負荷が軽減される', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。構造（HTML）と見た目（CSS）を分離することで、それぞれを独立して変更・管理できます。',
    },

    // ── セクション2: XMLとJSON ──
    {
      type: 'date',
      text: 'セクション2: XMLとJSON',
    },
    {
      type: 'narrator',
      text: '次はデータ交換に使われる<strong>XML</strong>と<strong>JSON</strong>を比較しましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>XML</strong>（eXtensible Markup Language）はデータを構造化するための言語で、HTMLと違って<strong>タグを自由に定義できる</strong>のが特徴だよ。厳密な文法ルール（<strong>整形式</strong>）があって、開始タグと終了タグの対応が必須なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'XMLの関連技術にはどんなものがありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>XSLT</strong>はXMLを別形式に変換する言語、<strong>XPath</strong>はXML内の要素を検索する言語、<strong>DTD/XMLスキーマ</strong>はXMLの構造を定義する仕組みだよ。<strong>DOM</strong>はHTML/XML文書をツリー構造で扱うインタフェースだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'Web APIではXMLとJSON、どっちが使われているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '現在は圧倒的に<strong>JSON</strong>（JavaScript Object Notation）が主流だよ！キーと値のペアでデータを表現する軽量フォーマットで、XMLよりデータ量が少なく、JavaScriptとの親和性が高いんだ。多くの言語で扱えるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'XMLは厳密だけど重い、JSONは軽量で扱いやすい、という違いですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">XML</span>: タグ自由定義・厳密・XSLT/XPath/DTD / <span class="keyword">JSON</span>: 軽量・キーと値・Web APIの主流',
    },
    {
      type: 'quiz',
      question: 'XMLの特徴として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'あらかじめ決められたタグのみ使用できる', correct: false },
        { letter: 'B', text: 'タグを自分で自由に定義できる', correct: true },
        { letter: 'C', text: 'スタイルシートとして利用される', correct: false },
        { letter: 'D', text: 'プログラムの実行を制御する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。XMLは拡張可能（eXtensible）なマークアップ言語で、利用者がタグを自由に定義できます。',
    },

    // ── セクション3: その他の言語とWeb技術 ──
    {
      type: 'date',
      text: 'セクション3: その他の言語とWeb技術',
    },
    {
      type: 'narrator',
      text: '最後に<strong>YAML・Markdown</strong>や、<strong>AJAX・REST</strong>などのWeb関連技術を押さえましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>YAML</strong>はインデントで構造を表現する人間に読みやすいデータ形式で、設定ファイルによく使われるよ。<strong>Markdown</strong>は簡易記法の軽量マークアップ言語で、ドキュメント作成に利用されるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'AJAXって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>AJAX</strong>は、ページ遷移なしにサーバと<strong>非同期通信</strong>してWebページを<strong>部分更新</strong>する技術だよ。ページ全体を再読み込みせず、必要な部分だけ更新できるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'RESTful APIというのもよく聞きますが...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>REST</strong>はHTTPメソッド（GET/POST/PUT/DELETE）でリソースを操作するWeb API設計スタイルだよ。URIでリソースを識別し、HTTPメソッドで操作を表現する。一方、<strong>SOAP</strong>はXMLベースの厳格なプロトコルで、RESTより複雑だけど型安全なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'HTMLやXMLの元になった言語もあるんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そう、<strong>SGML</strong>（Standard Generalized Markup Language）だね。HTMLやXMLの元となった国際標準のマークアップ言語だよ。試験では「HTMLとXMLの起源は？」と聞かれることがあるから覚えておこう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">SGML</span> → HTML/XMLの元 / <span class="keyword">AJAX</span>: 非同期で部分更新 / <span class="keyword">REST</span>: HTTPメソッドでリソース操作',
    },
    {
      type: 'quiz',
      question: 'AJAXの説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'サーバサイドのプログラミング言語', correct: false },
        { letter: 'B', text: 'ページ遷移なしにサーバと非同期通信してページを部分更新する技術', correct: true },
        { letter: 'C', text: 'データベース管理システム', correct: false },
        { letter: 'D', text: 'Webサーバのソフトウェア', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。AJAXはページ全体を再読み込みせずに、必要な部分だけをサーバから取得して更新します。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>HTML</strong>: Webページの構造を記述（最新はHTML5）',
        '<strong>CSS</strong>: デザイン・レイアウトを制御（構造と分離で保守性向上）',
        '<strong>XML</strong>: タグを自由に定義できるデータ交換言語',
        '<strong>JSON</strong>: 軽量なデータ交換フォーマット（Web APIの主流）',
        '<strong>SGML</strong>: HTML/XMLの元となった国際標準',
        '<strong>AJAX</strong>: 非同期通信でページ部分更新 / <strong>REST</strong>: HTTPメソッドでAPI設計',
      ],
    },
  ],
};
