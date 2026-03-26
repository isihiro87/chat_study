import type { HistoryChat } from '../../../../../../history-chat/types';

export const middlewareChat: HistoryChat = {
  id: 'fe-middleware',
  icon: '🔧',
  title: 'ミドルウェア',
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
    // ── セクション1: ミドルウェアとは ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'OSとアプリケーションの間に位置する<strong>ミドルウェア</strong>の役割を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ミドルウェアってOSでもアプリでもないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'その通り！<strong>ミドルウェア</strong>はOSとアプリケーションの<strong>中間</strong>に位置するソフトウェアだよ。OSだけでは提供しきれない<strong>共通的な機能</strong>を提供して、アプリ開発を効率化するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '具体的にはどんなものがあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的なのが<strong>DBMS</strong>（データベース管理システム）だ。データの検索・追加・更新・削除を効率的に行い、<strong>排他制御</strong>で複数ユーザの同時アクセスを管理するよ。Oracle Database、MySQL、PostgreSQLなどが有名だね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'もう一つ重要なのが<strong>Webサーバ</strong>。クライアントからのHTTPリクエストを受け取って、HTMLや画像などのコンテンツを返すミドルウェアだ。ApacheやNginxが代表例だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ミドルウェア</span> = OSとアプリの中間 / <span class="keyword">DBMS</span> = DB管理・排他制御 / <span class="keyword">Webサーバ</span> = HTTPリクエスト処理',
    },
    {
      type: 'quiz',
      question: 'ミドルウェアの説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'ハードウェアを直接制御するソフトウェア', correct: false },
        { letter: 'B', text: 'OSとアプリケーションの中間に位置し共通機能を提供するソフトウェア', correct: true },
        { letter: 'C', text: 'エンドユーザが直接操作するアプリケーション', correct: false },
        { letter: 'D', text: 'OSのカーネル部分のこと', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ミドルウェアはOSとアプリケーションの間に位置し、DBMSやWebサーバなどの共通機能を提供します。',
    },

    // ── セクション2: APIとAPI連携 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'ソフトウェア間の連携を実現する<strong>API</strong>の仕組みを理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'APIってよく聞くんですけど、何の略ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>API</strong>（Application Programming Interface）は、ソフトウェアが他のソフトウェアの機能を<strong>呼び出すための窓口</strong>だよ。内部の仕組みを知らなくても、決められた手順で機能を利用できるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'Web上で使われる<strong>Web API</strong>（REST APIなど）は、HTTPでリクエストを送るとJSON形式でデータが返ってくる仕組みだ。天気予報アプリが気象データAPIを呼び出すような使い方が代表的だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、外部サービスの機能を自分のアプリに組み込めるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'そう！そしてたくさんのAPIを管理するために<strong>APIゲートウェイ</strong>がある。クライアントからのリクエストを一元的に受け付けて、適切なバックエンドサービスに振り分ける<strong>入口</strong>の役割だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">API</span> = ソフトウェア間の呼出し窓口 / <span class="keyword">Web API</span> = HTTPでJSON形式のデータ交換 / <span class="keyword">APIゲートウェイ</span> = APIの一元管理窓口',
    },
    {
      type: 'quiz',
      question: 'APIの説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'データベースを管理するソフトウェア', correct: false },
        { letter: 'B', text: 'ソフトウェアが他のソフトウェアの機能を呼び出すための窓口', correct: true },
        { letter: 'C', text: 'ネットワーク通信プロトコルの一種', correct: false },
        { letter: 'D', text: 'OSのカーネル機能を拡張するモジュール', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。API（Application Programming Interface）は、ソフトウェア間で機能を呼び出すためのインタフェースです。',
    },

    // ── セクション3: トランザクション処理モニタ ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '大量のトランザクション処理を支える<strong>TPモニタ</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '銀行のATMのように大量のアクセスを処理するには何が必要ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>TPモニタ</strong>（トランザクション処理モニタ）だよ。大量のトランザクションを効率的に管理して、<strong>負荷分散</strong>や<strong>キュー管理</strong>を行うミドルウェアなんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'ソフトウェアの階層をまとめると、<strong>ハードウェア → OS → ミドルウェア → アプリケーション</strong>の順だ。下の層が上の層に機能を提供する形になっている。この階層構造を理解しておくと試験で迷わないよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ミドルウェアは「縁の下の力持ち」なんですね！アプリケーションが楽にDBやWebの機能を使えるのはミドルウェアのおかげだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'いい理解だね！試験ではミドルウェアの<strong>具体例を問う問題</strong>が出るから、DBMS・Webサーバ・TPモニタの3つは確実に覚えておこう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">TPモニタ</span> = トランザクションの負荷分散・キュー管理 / 階層: HW → OS → <span class="keyword">ミドルウェア</span> → アプリ',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>ミドルウェア</strong>：OSとアプリの中間に位置し、共通機能を提供',
        '<strong>DBMS</strong>：データベース管理、排他制御、トランザクション管理',
        '<strong>Webサーバ</strong>：HTTPリクエスト処理（Apache、Nginx）',
        '<strong>API</strong>：ソフトウェア間の機能呼出し窓口 / Web APIはHTTP＋JSON',
        '<strong>APIゲートウェイ</strong>：複数APIを一元管理する入口',
        '<strong>TPモニタ</strong>：大量トランザクションの負荷分散・キュー管理',
      ],
    },
  ],
};
