import type { Topic } from '../../../../../../types';

export const uiDesign: Topic = {
  id: 'fe-ui-design',
  eraId: 'fe-human-interface',
  name: 'インタフェース設計',
  subtitle: 'GUI・CUI・画面設計・帳票設計・ユニバーサルデザイン',
  icon: '🖼️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'GUIとCUI',
          content:
            'GUI（Graphical User Interface）はアイコン、メニュー、ウィンドウなどのグラフィカルな要素を使い、マウスやタッチ操作でコンピュータを操作するインタフェースです。直感的で初心者にも使いやすいのが特徴です。CUI（Character User Interface）はキーボードからコマンド（文字列）を入力して操作するインタフェースです。操作に慣れが必要ですが、バッチ処理や自動化に適しています。GUIの代表的な操作にはWIMP（Window, Icon, Menu, Pointer）があります。GUIの設計ではウィジェット（ボタン、テキストボックス、チェックボックス、ラジオボタン、ドロップダウンリスト等）を適切に配置することが重要です。',
          keyPoints: ['GUI: グラフィカルな要素で操作（直感的、初心者向き）', 'CUI: コマンド入力で操作（自動化・バッチ処理向き）', 'WIMP: Window, Icon, Menu, Pointer（GUIの基本要素）', 'ウィジェット: ボタン、テキストボックス等のGUI部品'],
        },
        {
          title: '画面設計の原則',
          content:
            '良い画面設計にはいくつかの原則があります。一貫性の原則は、画面全体で操作方法・配置・色使いを統一することです。ユーザーの記憶負荷を減らすため、選択式の入力（ドロップダウン等）を活用し、入力支援（オートコンプリート、デフォルト値）を提供します。フィードバックの原則は、操作結果を即座にユーザーに通知することです。ナビゲーション設計では、現在位置の表示（パンくずリスト）、戻る操作の容易さ、操作手順の最小化が重要です。エラー処理では、エラーメッセージを分かりやすく表示し、修正方法を提示します。レイアウト設計では、重要な情報を目立つ位置に配置し、関連する項目をグループ化して近くに配置します（近接の法則）。',
          keyPoints: ['一貫性: 操作方法・配置・色使いの統一', '記憶負荷の軽減: 選択式入力・オートコンプリート・デフォルト値の活用', 'フィードバック: 操作結果の即時通知', 'ナビゲーション: パンくずリスト、戻る操作の容易さ', '近接の法則: 関連項目をグループ化して近くに配置'],
        },
        {
          title: '帳票設計',
          content:
            '帳票設計は入力帳票と出力帳票の設計を含みます。入力帳票では、入力項目の順序を自然な流れにし、必須項目と任意項目を明確に区別します。入力チェック（バリデーション）として、形式チェック（データ型）、範囲チェック（値の範囲）、桁数チェック、照合チェック（マスタとの照合）、チェックディジット（検査数字）があります。出力帳票では、データの並び順、集計方法、改ページ条件を明確にします。コード設計では、順番コード（連番）、区分コード（分類）、桁別コード（桁ごとに意味）、ニモニックコード（記憶しやすい略語）などの方式があります。',
          keyPoints: ['入力帳票: 項目の順序・必須/任意の区別・入力チェック', '入力チェック: 形式・範囲・桁数・照合・チェックディジット', '出力帳票: データの並び順・集計方法・改ページ条件', 'コード設計: 順番コード/区分コード/桁別コード/ニモニックコード'],
        },
        {
          title: 'Webデザインとユニバーサルデザイン',
          content:
            'Webデザインではレスポンシブデザイン（画面サイズに応じてレイアウトを自動調整）が重要です。モバイルファーストは小さい画面から設計を始める手法です。ユニバーサルデザインは年齢・障害の有無・文化の違いに関わらず、できるだけ多くの人が利用できるよう設計する考え方です。7つの原則として、公平性、柔軟性、単純・直感的、わかりやすい情報、ミスへの寛容さ、少ない身体的負担、十分なスペースがあります。バリアフリーは障害者や高齢者の障壁（バリア）を取り除く考え方で、ユニバーサルデザインはバリアフリーをさらに発展させ、最初から全ての人に使いやすい設計を目指します。',
          keyPoints: ['レスポンシブデザイン: 画面サイズに応じたレイアウト自動調整', 'モバイルファースト: 小さい画面から設計を始める手法', 'ユニバーサルデザイン: 全ての人が利用しやすい設計（7つの原則）', 'バリアフリー: 障壁を除去 → ユニバーサルデザイン: 最初から全員に使いやすく'],
        },
      ],
      slides: [
        {
          id: 'fe-uid-slide1', title: 'GUIとCUIの違い',
          slides: [
            { type: 'question', question: 'GUIとCUIはどう使い分ける？', subtext: 'それぞれの特徴と適用場面', emoji: '🖼️' },
            { type: 'reason', headline: 'GUIは直感的、CUIは自動化に強い', points: ['GUI＝アイコン・メニューで直感的操作（初心者向き）', 'CUI＝コマンド入力で操作（バッチ処理・自動化向き）', 'WIMP（Window/Icon/Menu/Pointer）がGUIの基本構成'] },
            { type: 'conclusion', conclusion: '用途に応じてGUIとCUIを使い分けよう！', keywords: [{ text: 'GUI', isImportant: true }, { text: 'CUI', isImportant: true }, { text: 'WIMP', isImportant: true }, { text: 'ウィジェット', isImportant: false }], nextHint: '次は画面設計の原則を学ぼう' },
          ],
        },
        {
          id: 'fe-uid-slide2', title: '画面設計の原則',
          slides: [
            { type: 'question', question: '使いやすい画面を作るための鉄則は？', subtext: '一貫性・フィードバック・近接の法則', emoji: '📐' },
            { type: 'reason', headline: '一貫性を保ち、操作結果を即座にフィードバック', points: ['一貫性＝操作方法・配置・色使いを統一', 'フィードバック＝操作結果を即座にユーザーに通知', '近接の法則＝関連項目をグループ化して近くに配置'] },
            { type: 'conclusion', conclusion: '一貫性・フィードバック・近接が画面設計の基本！', keywords: [{ text: '一貫性', isImportant: true }, { text: 'フィードバック', isImportant: true }, { text: '近接の法則', isImportant: true }, { text: 'パンくずリスト', isImportant: false }], nextHint: '次はユニバーサルデザインを理解しよう' },
          ],
        },
        {
          id: 'fe-uid-slide3', title: 'ユニバーサルデザイン',
          slides: [
            { type: 'question', question: '「全ての人に使いやすい」設計とは？', subtext: 'バリアフリーとの違い', emoji: '♿' },
            { type: 'reason', headline: '最初から全ての人に使いやすく設計する考え方', points: ['バリアフリー＝既存の障壁を取り除く（事後対応）', 'ユニバーサルデザイン＝最初から全員に使いやすく設計（事前設計）', '7原則：公平性・柔軟性・単純直感・わかりやすさ・寛容さ・低負担・スペース'] },
            { type: 'conclusion', conclusion: 'ユニバーサルデザインは最初から全員に使いやすい設計！', keywords: [{ text: 'ユニバーサルデザイン', isImportant: true }, { text: 'バリアフリー', isImportant: true }, { text: '7つの原則', isImportant: true }, { text: 'レスポンシブデザイン', isImportant: false }], nextHint: '入力チェックの種類も確認しよう' },
          ],
        },
      ],
    },
    chatId: 'fe-ui-design',
    videos: [],
    flashcards: [
      { id: 'fe-uid-fc1', front: 'GUI', back: 'アイコンやメニューなどのグラフィカル要素で操作するインタフェース', explanation: 'Graphical User Interfaceの略。直感的で初心者にも使いやすいのが特徴です。', difficulty: 'basic' },
      { id: 'fe-uid-fc2', front: 'CUI', back: 'コマンド（文字列）を入力して操作するインタフェース', explanation: 'Character User Interfaceの略。バッチ処理や自動化に適しています。', difficulty: 'basic' },
      { id: 'fe-uid-fc3', front: 'WIMP', back: 'Window, Icon, Menu, Pointer（GUIの基本4要素）', explanation: 'GUIの代表的な操作スタイルで、ウィンドウ・アイコン・メニュー・ポインタで構成されます。', difficulty: 'standard' },
      { id: 'fe-uid-fc4', front: 'ユニバーサルデザイン', back: '年齢・障害の有無に関わらず、全ての人が利用しやすい設計', explanation: 'バリアフリーが障壁の除去なのに対し、最初から全ての人に使いやすい設計を目指します。', difficulty: 'basic' },
      { id: 'fe-uid-fc5', front: 'レスポンシブデザイン', back: '画面サイズに応じてレイアウトを自動調整するWebデザイン手法', explanation: 'PC、タブレット、スマートフォンなど様々な画面サイズに対応します。', difficulty: 'basic' },
      { id: 'fe-uid-fc6', front: 'チェックディジット', back: 'コードの入力誤りを検出するための検査用数字', explanation: '元のコードから一定の計算式で算出した数字をコードの末尾に付加して検証します。', difficulty: 'standard' },
      { id: 'fe-uid-fc7', front: 'パンくずリスト', back: 'Webサイトで現在位置を階層的に表示するナビゲーション', explanation: 'ユーザが現在どのページにいるかを把握しやすくし、上位階層への移動を容易にします。', difficulty: 'basic' },
      { id: 'fe-uid-fc8', front: 'ニモニックコード', back: '対象の名前や略語を使った覚えやすいコード体系', explanation: '例えば都道府県コードで「TK=東京」のように、記憶しやすい文字列を使います。', difficulty: 'standard' },
      { id: 'fe-uid-fc9', front: '一貫性の原則', back: '画面全体で操作方法・配置・色使いを統一する設計原則', explanation: 'ユーザが一度覚えた操作を他の画面でも同じように使えるようにします。', difficulty: 'basic' },
      { id: 'fe-uid-fc10', front: 'フィードバックの原則', back: '操作結果を即座にユーザーに通知する設計原則', explanation: 'ボタン押下後の応答表示やエラーメッセージの即時表示が例です。', difficulty: 'basic' },
      { id: 'fe-uid-fc11', front: '近接の法則', back: '関連する項目をグループ化して近くに配置する設計原則', explanation: '視覚的なまとまりで情報の関連性を直感的に理解できるようにします。', difficulty: 'standard' },
      { id: 'fe-uid-fc12', front: '形式チェック', back: 'データ型が正しいか（数値、日付、メールアドレス等）を検証する入力チェック', explanation: '例えば数値項目にアルファベットが入力されていないかを確認します。', difficulty: 'basic' },
      { id: 'fe-uid-fc13', front: '範囲チェック', back: '入力値が許容範囲内にあるかを検証する入力チェック', explanation: '例えば年齢が0～150の範囲内か、日付が有効な範囲かを確認します。', difficulty: 'basic' },
      { id: 'fe-uid-fc14', front: '照合チェック', back: '入力値がマスタデータに存在するかを検証する入力チェック', explanation: '例えば入力された商品コードが商品マスタに登録されているかを確認します。', difficulty: 'standard' },
      { id: 'fe-uid-fc15', front: 'モバイルファースト', back: '小さい画面（モバイル）から設計を始めるWebデザイン手法', explanation: 'スマートフォン向けの設計を基本とし、大きな画面向けに拡張していきます。', difficulty: 'standard' },
      { id: 'fe-uid-fc16', front: '順番コード', back: 'データに連番を付けるコード体系', explanation: '最もシンプルなコード体系で、社員番号（001、002...）などに使われます。', difficulty: 'basic' },
      { id: 'fe-uid-fc17', front: '区分コード', back: 'データの分類に基づいてコードを付ける体系', explanation: '例えば性別（1=男、2=女）、血液型（A、B、O、AB）などの分類コードです。', difficulty: 'basic' },
      { id: 'fe-uid-fc18', front: '桁別コード', back: 'コードの各桁に意味を持たせるコード体系', explanation: '例えば商品コードの先頭2桁＝カテゴリ、次の3桁＝商品番号のように設計します。', difficulty: 'standard' },
      { id: 'fe-uid-fc19', front: 'オートコンプリート', back: '入力途中で候補を表示して入力を補助する機能', explanation: 'ユーザの記憶負荷を軽減し、入力速度と正確性を向上させます。', difficulty: 'basic' },
      { id: 'fe-uid-fc20', front: 'ウィジェット', back: 'GUIの構成部品（ボタン、テキストボックス、チェックボックス等）', explanation: '画面設計ではウィジェットを適切に配置し、ユーザの操作性を高めます。', difficulty: 'basic' },
      { id: 'fe-uid-fc21', front: 'ラジオボタン', back: '複数の選択肢から1つだけ選択するGUI部品', explanation: '排他的選択に使い、チェックボックス（複数選択可）と使い分けます。', difficulty: 'basic' },
      { id: 'fe-uid-fc22', front: 'チェックボックス', back: '複数の選択肢から複数を同時に選択できるGUI部品', explanation: 'ラジオボタン（1つだけ選択）と使い分けます。', difficulty: 'basic' },
      { id: 'fe-uid-fc23', front: 'ドロップダウンリスト', back: '選択肢をリスト表示して選択するGUI部品', explanation: '選択肢が多い場合に画面スペースを節約しながら入力を容易にします。', difficulty: 'basic' },
      { id: 'fe-uid-fc24', front: 'バリアフリー', back: '障害者や高齢者の障壁（バリア）を取り除く考え方', explanation: '段差の解消やスロープの設置など、既存の障壁を事後的に除去します。', difficulty: 'basic' },
      { id: 'fe-uid-fc25', front: 'アフォーダンス', back: '物のデザインが自然に操作方法を伝える性質', explanation: 'ドアの取っ手が「引く」を、押し板が「押す」を自然に示すのが例です。', difficulty: 'advanced' },
      { id: 'fe-uid-fc26', front: 'ヒューリスティック評価', back: '専門家がガイドラインに基づいてUIの問題点を評価する手法', explanation: 'ニールセンの10原則などを基準に、コストを抑えて問題点を洗い出します。', difficulty: 'advanced' },
      { id: 'fe-uid-fc27', front: 'A/Bテスト', back: '2つのデザイン案を実際のユーザに試してもらい、効果を比較する手法', explanation: 'ボタンの色や配置の違いによるコンバージョン率の差を測定します。', difficulty: 'advanced' },
      { id: 'fe-uid-fc28', front: 'ペルソナ', back: '典型的なユーザ像を名前・年齢・職業等まで具体的に設定する手法', explanation: 'UIデザインの方向性をチーム全体で共有するために使います。', difficulty: 'standard' },
      { id: 'fe-uid-fc29', front: 'プレースホルダ', back: 'テキスト入力欄に入力例やヒントを薄く表示する機能', explanation: '入力を始めると消え、何を入力すべきかをユーザに伝えます。', difficulty: 'basic' },
      { id: 'fe-uid-fc30', front: 'モーダルダイアログ', back: '確認や入力が完了するまで他の操作をブロックするウィンドウ', explanation: '削除確認など重要な操作に使いますが、多用するとユーザ体験を損ないます。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        { id: 'fe-uid-q1', question: 'GUIの説明として、適切なものはどれか。', options: ['コマンドを入力して操作するインタフェース', 'アイコンやメニューなどのグラフィカル要素で操作するインタフェース', '音声で操作するインタフェース', 'タッチ操作のみに対応したインタフェース'], correctIndex: 1, explanation: 'GUI（Graphical User Interface）はアイコン、メニュー、ウィンドウなどのグラフィカル要素を使って直感的に操作するインタフェースです。', difficulty: 'basic' },
        { id: 'fe-uid-q2', question: 'ユニバーサルデザインの説明として、適切なものはどれか。', options: ['障害者専用の特別な設計', '最低限の機能だけを提供する設計', '年齢や障害の有無に関わらず全ての人が利用しやすい設計', 'プログラマ向けの効率的な操作設計'], correctIndex: 2, explanation: 'ユニバーサルデザインは年齢・障害の有無・文化の違いに関わらず、できるだけ多くの人が利用できるよう最初から設計する考え方です。', difficulty: 'basic' },
        { id: 'fe-uid-q3', question: '入力チェックのうち、コードの入力誤りを検出するために検査用の数字を付加する方法はどれか。', options: ['形式チェック', '範囲チェック', 'チェックディジット', '照合チェック'], correctIndex: 2, explanation: 'チェックディジットは元のコードから一定の計算式で算出した検査用数字をコードの末尾に付加し、入力誤りを検出する方法です。', difficulty: 'standard' },
        { id: 'fe-uid-q4', question: '画面設計において、関連する情報を近くに配置する原則はどれか。', options: ['一貫性の原則', '近接の法則', 'フィードバックの原則', '記憶負荷軽減の原則'], correctIndex: 1, explanation: '近接の法則は、関連する項目をグループ化して近くに配置することで、ユーザーが情報の関連性を直感的に理解できるようにする原則です。', difficulty: 'standard' },
        { id: 'fe-uid-q5', question: 'レスポンシブデザインの説明として、適切なものはどれか。', options: ['操作に対して即座にフィードバックを返す設計', '画面サイズに応じてレイアウトを自動調整するWebデザイン手法', 'ユーザの操作ミスを許容する設計', '高速に画面を描画する技術'], correctIndex: 1, explanation: 'レスポンシブデザインはPC、タブレット、スマートフォンなど様々な画面サイズに対応してレイアウトを自動調整するWebデザイン手法です。', difficulty: 'basic' },
        { id: 'fe-uid-q6', question: 'WIMPの構成要素でないものはどれか。', options: ['Window', 'Icon', 'Mouse', 'Pointer'], correctIndex: 2, explanation: 'WIMPはWindow（ウィンドウ）、Icon（アイコン）、Menu（メニュー）、Pointer（ポインタ）の頭文字です。MouseではなくMenuが正しい構成要素です。', difficulty: 'standard' },
        { id: 'fe-uid-q7', question: '照合チェックの説明として適切なものはどれか。', options: ['入力値のデータ型が正しいか確認する', '入力値がマスタデータに存在するか確認する', '入力値が指定範囲内か確認する', '入力値の桁数が正しいか確認する'], correctIndex: 1, explanation: '照合チェックは入力されたコードがマスタデータ（商品マスタ等）に登録されているかを確認する入力チェックです。', difficulty: 'standard' },
        { id: 'fe-uid-q8', question: 'バリアフリーとユニバーサルデザインの違いとして適切なものはどれか。', options: ['バリアフリーは全員向け、ユニバーサルデザインは障害者向け', 'バリアフリーは既存の障壁を除去、ユニバーサルデザインは最初から全員に使いやすく設計', 'バリアフリーはWeb専用、ユニバーサルデザインは建築専用', '違いはない、同じ意味である'], correctIndex: 1, explanation: 'バリアフリーは既存の障壁を事後的に取り除く考え方、ユニバーサルデザインは最初から全ての人に使いやすいように設計する考え方です。', difficulty: 'standard' },
        { id: 'fe-uid-q9', question: 'ラジオボタンとチェックボックスの違いとして適切なものはどれか。', options: ['ラジオボタンは複数選択可、チェックボックスは1つだけ選択', 'ラジオボタンは1つだけ選択、チェックボックスは複数選択可', 'どちらも1つだけ選択', 'どちらも複数選択可'], correctIndex: 1, explanation: 'ラジオボタンは排他的選択（1つだけ）、チェックボックスは複数の選択が可能なGUI部品です。', difficulty: 'basic' },
        { id: 'fe-uid-q10', question: 'モバイルファーストの説明として適切なものはどれか。', options: ['モバイル専用サイトを別途作成する手法', '小さい画面（モバイル）から設計を始め、大きい画面に拡張する手法', 'モバイルアプリを先に開発する手法', 'モバイル通信を優先する設計'], correctIndex: 1, explanation: 'モバイルファーストは最初にスマートフォンなど小さい画面向けの設計をし、そこから大きい画面に拡張していく手法です。', difficulty: 'standard' },
        { id: 'fe-uid-q11', question: 'アフォーダンスの説明として適切なものはどれか。', options: ['画面のレイアウトを自動調整する機能', '物のデザインが自然に操作方法を伝える性質', 'ユーザの操作を記録する機能', 'エラーを自動修正する機能'], correctIndex: 1, explanation: 'アフォーダンスは物のデザインがその使い方を自然に示す性質です。ドアの取っ手は「引く」、押し板は「押す」を暗示します。', difficulty: 'advanced' },
        { id: 'fe-uid-q12', question: 'CUIがGUIより優れている点はどれか。', options: ['直感的な操作', '初心者にやさしい', 'バッチ処理や自動化に適している', 'マウスで操作できる'], correctIndex: 2, explanation: 'CUIはコマンドをスクリプトにまとめてバッチ処理や自動化ができる点でGUIより優れています。', difficulty: 'basic' },
        { id: 'fe-uid-q13', question: 'ニモニックコードの例として適切なものはどれか。', options: ['001, 002, 003...', '1=男, 2=女', 'TK=東京, OS=大阪', '商品コードの先頭2桁がカテゴリ'], correctIndex: 2, explanation: 'ニモニックコードは「TK=東京」のように対象の名前や略語を使った覚えやすいコード体系です。', difficulty: 'standard' },
        { id: 'fe-uid-q14', question: 'ヒューリスティック評価の説明として適切なものはどれか。', options: ['実際のユーザにテストしてもらう評価方法', '専門家がガイドラインに基づいてUIの問題点を評価する手法', 'システムの性能を測定する評価方法', 'コードの品質を自動チェックする手法'], correctIndex: 1, explanation: 'ヒューリスティック評価はニールセンの10原則などのガイドラインに基づき、専門家がUIの問題点を評価する手法です。', difficulty: 'advanced' },
        { id: 'fe-uid-q15', question: 'フィードバックの原則の例として適切なものはどれか。', options: ['関連項目を近くに配置する', '全画面で操作方法を統一する', 'ボタン押下後に処理中であることを表示する', '入力候補を自動表示する'], correctIndex: 2, explanation: 'フィードバックの原則は操作結果を即座にユーザーに通知することで、処理中の表示や完了メッセージが例です。', difficulty: 'basic' },
        { id: 'fe-uid-q16', question: '桁別コードの説明として適切なものはどれか。', options: ['データに連番を付けるコード', 'コードの各桁に意味を持たせるコード', '覚えやすい略語を使ったコード', 'データの分類に基づくコード'], correctIndex: 1, explanation: '桁別コードはコードの各桁に異なる意味を持たせる体系で、例えば先頭2桁がカテゴリ、次の3桁が商品番号のように設計します。', difficulty: 'standard' },
        { id: 'fe-uid-q17', question: 'ユニバーサルデザインの7原則に含まれないものはどれか。', options: ['公平性', '柔軟性', '高速性', 'ミスへの寛容さ'], correctIndex: 2, explanation: '7原則は公平性、柔軟性、単純・直感的、わかりやすい情報、ミスへの寛容さ、少ない身体的負担、十分なスペースです。高速性は含まれません。', difficulty: 'standard' },
        { id: 'fe-uid-q18', question: 'A/Bテストの説明として適切なものはどれか。', options: ['2つのデザイン案を実際のユーザに試してもらい効果を比較する手法', '専門家が2つの基準でUIを評価する手法', 'アプリケーションのA版とB版を交互にリリースする手法', 'テストのA段階とB段階を順に実施する手法'], correctIndex: 0, explanation: 'A/Bテストは2つのデザイン案（A版とB版）を実際のユーザに提示し、クリック率やコンバージョン率などの指標を比較する手法です。', difficulty: 'advanced' },
        { id: 'fe-uid-q19', question: '入力チェックの種類のうち、値が0～100の範囲内かを確認するものはどれか。', options: ['形式チェック', '範囲チェック', '桁数チェック', 'チェックディジット'], correctIndex: 1, explanation: '範囲チェックは入力値が許容される範囲内にあるかを確認します。0～100のように上限・下限を設定して検証します。', difficulty: 'basic' },
        { id: 'fe-uid-q20', question: 'モーダルダイアログの特徴として適切なものはどれか。', options: ['バックグラウンドで動作する', '確認や入力が完了するまで他の操作をブロックする', '自動的に閉じる', '複数同時に表示できる'], correctIndex: 1, explanation: 'モーダルダイアログはユーザの操作を要求し、確認や入力が完了するまで他の画面操作をブロックするウィンドウです。', difficulty: 'standard' },
      ],
    },
  },
};
