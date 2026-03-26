import type { Topic } from '../../../../../../types';

export const markupLanguages: Topic = {
  id: 'fe-markup-languages',
  eraId: 'fe-algorithms',
  name: 'マークアップ言語',
  subtitle: 'HTML・XML・JSON・CSS',
  icon: '📄',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: 'HTML',
          content:
            'HTML（HyperText Markup Language）は、Webページの構造を記述するためのマークアップ言語です。タグ（<h1>, <p>, <div>, <a>など）を使って文書の見出し、段落、リンク、画像などの要素を定義します。HTMLはWebブラウザが解釈してページを表示する基盤技術で、最新バージョンはHTML5です。HTML5ではvideoタグやcanvasタグなどマルチメディア対応が強化されています。',
          keyPoints: [
            'Webページの構造を記述するマークアップ言語',
            'タグ（<h1>, <p>, <a>など）で要素を定義',
            'HTML5: マルチメディア対応が強化された最新版',
          ],
        },
        {
          title: 'CSS',
          content:
            'CSS（Cascading Style Sheets）は、Webページのデザインやレイアウトを指定するためのスタイルシート言語です。HTMLが文書の構造を定義するのに対し、CSSは色、フォント、余白、配置などの見た目を制御します。HTMLと分離することで、構造とデザインを独立して管理でき、保守性が向上します。',
          keyPoints: [
            'Webページのデザイン・レイアウトを指定',
            'HTML（構造）とCSS（見た目）を分離',
            '色・フォント・余白・配置などを制御',
          ],
        },
        {
          title: 'XML',
          content:
            'XML（eXtensible Markup Language）は、データを構造化して記述するための拡張可能なマークアップ言語です。HTMLと異なり、タグを自分で自由に定義できるため、さまざまな分野でのデータ交換に使われます。XMLは厳密な文法ルール（整形式）を持ち、開始タグと終了タグの対応が必須です。関連技術としてXSLT（変換）、XPath（検索）、DTD/XMLスキーマ（構造定義）があります。',
          keyPoints: [
            'データ交換用の拡張可能なマークアップ言語',
            'タグを自分で自由に定義できる',
            '厳密な文法ルール（開始タグと終了タグの対応が必須）',
          ],
        },
        {
          title: 'JSON',
          content:
            'JSON（JavaScript Object Notation）は、軽量なデータ交換フォーマットです。キーと値のペア（"name": "太郎"）やリスト（配列）でデータを表現します。XMLと比較してデータ量が少なく、人間にも読みやすいのが特徴です。Web APIでのデータ通信で広く利用されており、JavaScriptとの親和性が高いですが、多くのプログラミング言語で利用可能です。',
          keyPoints: [
            '軽量なデータ交換フォーマット',
            'キーと値のペアでデータを表現',
            'XMLより軽量で可読性が高い',
          ],
        },
        {
          title: 'その他のマークアップ言語・データ形式',
          content:
            'YAML（YAML Ain\'t Markup Language）はインデントで構造を表現する人間に読みやすいデータ形式で、設定ファイルによく使われます。Markdownは簡易的な記法で文書を装飾できる軽量マークアップ言語で、READMEやドキュメントの記述に利用されます。SGML（Standard Generalized Markup Language）はHTMLやXMLの元になった国際標準のマークアップ言語です。',
          keyPoints: [
            'YAML: インデントで構造化、設定ファイルに利用',
            'Markdown: 簡易記法の軽量マークアップ言語',
            'SGML: HTMLやXMLの元となった国際標準',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-ml-fc1', front: 'HTML', back: 'Webページの構造を記述するマークアップ言語は？', explanation: 'HTML（HyperText Markup Language）はタグを使ってWebページの構造を定義します。', difficulty: 'basic' },
      { id: 'fe-ml-fc2', front: 'CSS', back: 'Webページのデザインやレイアウトを指定するスタイルシート言語は？', explanation: 'CSS（Cascading Style Sheets）は色・フォント・配置などの見た目を制御します。', difficulty: 'basic' },
      { id: 'fe-ml-fc3', front: 'XML', back: 'タグを自分で定義でき、データ交換に使われる拡張可能なマークアップ言語は？', explanation: 'XML（eXtensible Markup Language）はHTMLと異なり、独自のタグを定義できます。', difficulty: 'basic' },
      { id: 'fe-ml-fc4', front: 'JSON', back: 'キーと値のペアでデータを表現する軽量データ交換フォーマットは？', explanation: 'JSON（JavaScript Object Notation）はXMLより軽量で、Web APIで広く利用されています。', difficulty: 'basic' },
      { id: 'fe-ml-fc5', front: 'タグを自由に定義できる', back: 'XMLとHTMLの最大の違いは？', explanation: 'HTMLは定義済みのタグを使いますが、XMLではデータに合わせたタグを自由に定義できます。', difficulty: 'standard' },
      { id: 'fe-ml-fc6', front: 'SGML', back: 'HTMLやXMLの元になった国際標準のマークアップ言語は？', explanation: 'SGML（Standard Generalized Markup Language）からHTMLやXMLが派生しました。', difficulty: 'standard' },
      { id: 'fe-ml-fc7', front: 'YAML', back: 'インデントで構造を表現し、設定ファイルによく使われるデータ形式は？', explanation: 'YAML（YAML Ain\'t Markup Language）は人間に読みやすいデータ記述形式です。', difficulty: 'standard' },
      { id: 'fe-ml-fc8', front: 'Markdown', back: '簡易的な記法で文書を装飾できる軽量マークアップ言語は？', explanation: 'MarkdownはREADMEやドキュメント作成で広く使われる記法です。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-ml-q1',
          question: 'Webページの構造を記述するために使用される言語はどれか。',
          options: ['CSS', 'HTML', 'JSON', 'SQL'],
          correctIndex: 1,
          explanation: 'HTMLはタグを使ってWebページの構造（見出し、段落、リンクなど）を記述します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ml-q2',
          question: 'CSSの役割として正しいものはどれか。',
          options: [
            'Webページの構造を定義する',
            'Webページのデザインやレイアウトを指定する',
            'サーバとのデータ通信を行う',
            'データベースに問い合わせを行う',
          ],
          correctIndex: 1,
          explanation: 'CSSはWebページの色、フォント、余白、配置などの見た目を制御するスタイルシート言語です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ml-q3',
          question: 'XMLの特徴として正しいものはどれか。',
          options: [
            'あらかじめ決められたタグのみ使用できる',
            'タグを自分で自由に定義できる',
            'スタイルシートとして利用される',
            'プログラムの実行を制御する',
          ],
          correctIndex: 1,
          explanation: 'XMLは拡張可能なマークアップ言語で、利用者がタグを自由に定義できます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ml-q4',
          question: 'JSONの説明として正しいものはどれか。',
          options: [
            'Webページの見た目を定義するスタイルシート',
            'データベース操作用の問い合わせ言語',
            'キーと値のペアでデータを表現する軽量データ交換フォーマット',
            'プログラムの論理構造を記述するフローチャート',
          ],
          correctIndex: 2,
          explanation: 'JSONはキーと値のペアでデータを表現し、XMLより軽量なデータ交換フォーマットです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ml-q5',
          question: 'HTMLやXMLの元になった国際標準のマークアップ言語はどれか。',
          options: ['YAML', 'SGML', 'JSON', 'Markdown'],
          correctIndex: 1,
          explanation: 'SGML（Standard Generalized Markup Language）はHTMLやXMLの基となった言語です。',
          difficulty: 'advanced',
        },
        {
          id: 'fe-ml-q6',
          question: 'Web APIでのデータ通信に最も広く利用されているデータ形式はどれか。',
          options: ['XML', 'CSV', 'JSON', 'YAML'],
          correctIndex: 2,
          explanation: 'JSONは軽量で扱いやすく、現在のWeb APIで最も広く利用されているデータ形式です。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
