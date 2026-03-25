import type { Topic } from '../../../../../../../types';

export const earthShape: Topic = {
  id: 'geo1-earth-shape',
  eraId: 'geo1-world-shape',
  name: '地球の姿',
  subtitle: '大陸と大洋・六つの州の区分',
  icon: '🌏',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '陸地と海洋の割合',
          content:
            '地球の表面は、陸地が約3割（約29%）、海洋が約7割（約71%）を占めています。地球は「水の惑星」ともよばれるほど、海洋の面積が大きいのが特徴です。北半球には陸地が多く、南半球には海洋が多く分布しています。宇宙から地球を見ると、太平洋側からは陸地がほとんど見えず、青い海が広がって見えます。このように、陸地と海洋の分布にはかたよりがあります。',
          image: {
            src: '/images/geography/grade1/world-shape/continents-oceans.png',
            alt: '六大陸と三大洋',
            caption: '地球の陸地と海洋の分布',
          },
          keyPoints: [
            '陸地：約3割（約29%）、海洋：約7割（約71%）',
            '北半球に陸地が多く、南半球に海洋が多い',
            '地球は「水の惑星」とよばれる',
          ],
        },
        {
          title: '六つの大陸と三つの大洋',
          content:
            '地球上の陸地は六つの大陸に分けられます。面積が大きい順に、ユーラシア大陸、アフリカ大陸、北アメリカ大陸、南アメリカ大陸、オーストラリア大陸、南極大陸です。ユーラシア大陸は最も大きく、世界の陸地面積の約3分の1を占めます。海洋は三つの大洋に分けられ、面積が大きい順に太平洋、大西洋、インド洋です。太平洋は最も広く、地球の表面積の約3分の1を占めています。',
          keyPoints: [
            '六大陸：ユーラシア・アフリカ・北アメリカ・南アメリカ・オーストラリア・南極',
            '三大洋：太平洋（最大）・大西洋・インド洋',
            'ユーラシア大陸が最大、太平洋が最も広い海洋',
          ],
        },
        {
          title: '世界の六つの州',
          content:
            '世界は六つの州（しゅう）に区分されています。アジア州、ヨーロッパ州、アフリカ州、北アメリカ州、南アメリカ州、オセアニア州の六つです。ユーラシア大陸はアジア州とヨーロッパ州に分けられています。アジア州は六つの州の中で最も面積が広く、人口も最も多い州です。オセアニア州はオーストラリア大陸と太平洋の島々からなります。日本はアジア州に属しています。州の区分は大陸の位置や文化・歴史的なまとまりをもとに分けられています。',
          keyPoints: [
            '六つの州：アジア・ヨーロッパ・アフリカ・北アメリカ・南アメリカ・オセアニア',
            'アジア州が最も面積が広く、人口も最多',
            '日本はアジア州に属する',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-es-slide1',
          title: '陸地と海洋の割合',
          slides: [
            {
              type: 'question',
              question: '地球の表面は陸地と海洋、どちらが多い？',
              subtext: '陸地と海洋の割合',
              emoji: '🌏',
              image: {
                src: '/images/geography/grade1/world-shape/continents-oceans.png',
                alt: '六大陸と三大洋',
              },
            },
            {
              type: 'reason',
              headline: '海洋が約7割を占める！',
              points: [
                '陸地は約3割（約29%）、海洋は約7割（約71%）',
                '北半球には陸地が多く、南半球には海洋が多い',
                '太平洋側から見ると陸地がほとんど見えない',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '陸地', value: '約3割（29%）', emoji: '🏔️' },
                  { label: '海洋', value: '約7割（71%）', emoji: '🌊' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '地球は海洋が約7割を占める「水の惑星」！陸地と海洋の分布にはかたよりがある。',
              keywords: [
                { text: '陸地約3割', isImportant: true },
                { text: '海洋約7割', isImportant: true },
                { text: '水の惑星' },
              ],
              nextHint: '次は六つの大陸と三つの大洋を覚えよう！',
            },
          ],
        },
        {
          id: 'geo1-es-slide2',
          title: '六大陸と三大洋',
          slides: [
            {
              type: 'question',
              question: '地球の大陸と海洋はそれぞれいくつに分けられる？',
              subtext: '六大陸と三大洋',
              emoji: '🗺️',
            },
            {
              type: 'reason',
              headline: '六つの大陸と三つの大洋！',
              points: [
                '大陸：ユーラシア・アフリカ・北アメリカ・南アメリカ・オーストラリア・南極',
                '大洋：太平洋（最大）・大西洋・インド洋',
                'ユーラシア大陸は世界の陸地面積の約3分の1を占める',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '六大陸と三大洋を覚えよう！最大の大陸はユーラシア、最大の大洋は太平洋！',
              keywords: [
                { text: '六大陸', isImportant: true },
                { text: '三大洋', isImportant: true },
                { text: 'ユーラシア大陸' },
                { text: '太平洋' },
              ],
              nextHint: '次は世界の六つの州について学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-es-slide3',
          title: '世界の六つの州',
          slides: [
            {
              type: 'question',
              question: '世界はどのように区分されている？',
              subtext: '六つの州',
              emoji: '🌐',
            },
            {
              type: 'reason',
              headline: '六つの州に区分されている！',
              points: [
                'アジア州・ヨーロッパ州・アフリカ州・北アメリカ州・南アメリカ州・オセアニア州',
                'ユーラシア大陸はアジア州とヨーロッパ州に分かれる',
                'アジア州は面積・人口ともに最大で、日本もアジア州に属する',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '最大の州', value: 'アジア州（面積・人口）', emoji: '🌏' },
                  { label: '日本', value: 'アジア州に属する', emoji: '🗾' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '世界は六つの州に区分され、日本はアジア州に属する！',
              keywords: [
                { text: '六つの州', isImportant: true },
                { text: 'アジア州', isImportant: true },
                { text: 'ヨーロッパ州' },
                { text: 'オセアニア州' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-es-fc1', front: '陸地が約3割（約29%）、海洋が約7割（約71%）', back: '地球の表面における陸地と海洋の割合はそれぞれ何割？', explanation: '「3陸7海」と覚えよう。地球は「水の惑星」とよばれる。', difficulty: 'basic' },
      { id: 'geo1-es-fc2', front: 'ユーラシア・アフリカ・北アメリカ・南アメリカ・オーストラリア・南極', back: '地球上の六つの大陸をすべて答えよ。', explanation: '最大はユーラシア大陸。', difficulty: 'basic' },
      { id: 'geo1-es-fc3', front: '太平洋・大西洋・インド洋', back: '地球上の三つの大洋をすべて答えよ。', explanation: '面積が最も大きいのは太平洋。', difficulty: 'basic' },
      { id: 'geo1-es-fc4', front: 'アジア・ヨーロッパ・アフリカ・北アメリカ・南アメリカ・オセアニア', back: '世界を構成する六つの州をすべて答えよ。', explanation: '大陸の位置や文化・歴史的なまとまりをもとに区分されている。', difficulty: 'basic' },
      { id: 'geo1-es-fc5', front: '大陸はユーラシア大陸、大洋は太平洋', back: '最も面積が大きい大陸と大洋をそれぞれ答えよ。', explanation: 'ともに世界の面積の約3分の1を占める。', difficulty: 'basic' },
      { id: 'geo1-es-fc6', front: 'アジア州とヨーロッパ州', back: 'ユーラシア大陸はどの州に分けられる？', explanation: '文化や歴史的なまとまりから二つの州に区分される。', difficulty: 'basic' },
      { id: 'geo1-es-fc7', front: 'オーストラリア大陸と太平洋の島々', back: 'オセアニア州はどのような地域から構成されるか？', explanation: 'ニュージーランド、メラネシア、ミクロネシア、ポリネシアなどを含む。', difficulty: 'basic' },
      { id: 'geo1-es-fc8', front: '定住する住民がおらず国もないため', back: '南極大陸はなぜどの州にも属さないのか？', explanation: '1年じゅう氷におおわれている。', difficulty: 'standard' },
      { id: 'geo1-es-fc9', front: '表面の約7割が海洋で覆われ、宇宙から青く見えるため', back: '地球が「水の惑星」とよばれる理由は？', explanation: '太平洋側から見ると陸地がほとんど見えないほど海洋が広い。', difficulty: 'basic' },
      { id: 'geo1-es-fc10', front: '北半球に陸地が多く、南半球に海洋が多い', back: '北半球と南半球で陸地の分布はどう異なるか？', explanation: '陸地と海洋の分布にはかたよりがある。', difficulty: 'basic' },
      { id: 'geo1-es-fc11', front: '東アジア・東南アジア・南アジア・西アジア・中央アジア', back: 'アジア州をさらに細かく分けると、どのような地域がある？（5つ）', explanation: '日本は東アジアに含まれる。', difficulty: 'standard' },
      { id: 'geo1-es-fc12', front: '日本・中国・韓国・モンゴル・北朝鮮', back: '東アジアに含まれる国を3つ以上答えよ。', explanation: '日本が属する地域で、漢字文化圏の国々が多い。', difficulty: 'basic' },
      { id: 'geo1-es-fc13', front: 'アフリカ大陸と南アメリカ大陸', back: '赤道が通る大陸を2つ答えよ。', explanation: '赤道は緯度0度の線で、この2大陸を横切っている。', difficulty: 'standard' },
      { id: 'geo1-es-fc14', front: 'ユーラシア・オーストラリアの東側と、北アメリカ・南アメリカの西側の間', back: '太平洋はどの大陸の間に広がっているか？', explanation: '三大洋の中で最も広く、地球表面積の約3分の1を占める。', difficulty: 'standard' },
      { id: 'geo1-es-fc15', front: 'ヨーロッパ・アフリカの西側と、北アメリカ・南アメリカの東側の間', back: '大西洋はどの大陸の間に広がっているか？', explanation: '三大洋の中で2番目に広い大洋。', difficulty: 'standard' },
      { id: 'geo1-es-fc16', front: 'アフリカ大陸の東側とオーストラリア大陸・南アジアの間', back: 'インド洋はどの大陸の間に広がっているか。', explanation: '三大洋の中で最も面積が小さい。', difficulty: 'standard' },
      { id: 'geo1-es-fc17', front: 'ユーラシア・アフリカ・北アメリカ・南アメリカ・南極・オーストラリア', back: '六大陸を面積の大きい順に並べよ。', explanation: '「ユアきなみなお」などの語呂合わせで覚えよう。', difficulty: 'standard' },
      { id: 'geo1-es-fc18', front: 'オーストラリア大陸', back: '六大陸のうち最も面積が小さい大陸はどこか。', explanation: 'オセアニア州に属し、一つの国がほぼ大陸全体を占める。', difficulty: 'basic' },
      { id: 'geo1-es-fc19', front: '2番目', back: 'アフリカ大陸は六大陸のうち面積が何番目に大きいか。', explanation: 'ユーラシア大陸に次ぐ広さで、多くの国がある。', difficulty: 'standard' },
      { id: 'geo1-es-fc20', front: '南アメリカ大陸・オーストラリア大陸・南極大陸', back: '南半球に位置する大陸を3つ答えよ。', explanation: '赤道より南にある大陸。南半球は海洋の割合が高い。', difficulty: 'standard' },
      { id: 'geo1-es-fc21', front: 'スエズ地峡付近（エジプト周辺）', back: 'ユーラシア大陸とアフリカ大陸を結ぶ地峡付近の地域はどこか。', explanation: 'スエズ運河が掘られ、地中海と紅海をつないでいる。', difficulty: 'standard' },
      { id: 'geo1-es-fc22', front: 'パナマ地峡', back: '北アメリカ大陸と南アメリカ大陸を結ぶ細い陸地は何とよばれるか。', explanation: 'パナマ運河が掘られ、太平洋と大西洋をつないでいる。', difficulty: 'advanced' },
      { id: 'geo1-es-fc23', front: 'アメリカ合衆国とカナダ', back: '北アメリカ大陸にある2つの大きな国を答えよ。', explanation: 'カナダは面積世界第2位、アメリカは面積世界第3位。', difficulty: 'standard' },
      { id: 'geo1-es-fc24', front: '大陸の位置や文化・歴史的なまとまり', back: '州の区分は何をもとにして分けられているか。', explanation: 'そのためユーラシア大陸は一つでもアジア州とヨーロッパ州に分かれる。', difficulty: 'advanced' },
      { id: 'geo1-es-fc25', front: '東南アジア', back: 'タイやインドネシア、ベトナムなどが含まれるアジアの地域区分は何か。', explanation: '熱帯の気候で、稲作がさかんな地域。', difficulty: 'standard' },
      { id: 'geo1-es-fc26', front: '南アジア', back: 'インドやバングラデシュが含まれるアジアの地域区分は何か。', explanation: 'インドは人口が約14億人で世界有数の人口大国。', difficulty: 'standard' },
      { id: 'geo1-es-fc27', front: '西アジア：サウジアラビア・イランなど、中央アジア：カザフスタン・ウズベキスタンなど', back: '西アジア・中央アジアに含まれる国をそれぞれ1つ答えよ。', explanation: '西アジアは石油の産出が多く、中央アジアは内陸に位置する。', difficulty: 'advanced' },
      { id: 'geo1-es-fc28', front: '南アメリカ州（オセアニア州）', back: '六つの州のうち南極大陸に最も近い州はどこか。', explanation: '南アメリカ大陸の南端から南極半島まで比較的近い。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-es-q1',
          question: '地球の表面における陸地と海洋の割合として正しいものはどれ？',
          options: [
            '陸地が約5割、海洋が約5割',
            '陸地が約1割、海洋が約9割',
            '陸地が約7割、海洋が約3割',
            '陸地が約3割、海洋が約7割',
          ],
          correctIndex: 3,
          explanation:
            '地球の表面は陸地が約3割（約29%）、海洋が約7割（約71%）です。海洋の方がはるかに大きな面積を占めています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q2',
          question: '六つの大陸のうち、最も面積が大きいのはどれ？',
          options: [
            'ユーラシア大陸',
            'アフリカ大陸',
            '北アメリカ大陸',
            '南極大陸',
          ],
          correctIndex: 0,
          explanation:
            'ユーラシア大陸は世界で最も大きい大陸で、世界の陸地面積の約3分の1を占めています。アジアとヨーロッパにまたがります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q3',
          question: '三つの大洋のうち、最も面積が広いのはどれ？',
          options: ['太平洋', 'インド洋', '北極海', '大西洋'],
          correctIndex: 0,
          explanation:
            '太平洋は三大洋の中で最も広く、地球の表面積の約3分の1を占めています。北極海は大洋には含まれません。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q4',
          question: '日本が属している州はどれ？',
          options: [
            'ヨーロッパ州',
            'アジア州',
            'オセアニア州',
            '北アメリカ州',
          ],
          correctIndex: 1,
          explanation:
            '日本はアジア州に属しています。アジア州は六つの州の中で最も面積が広く、人口も最も多い州です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q5',
          question: 'ユーラシア大陸が含まれる州の組み合わせとして正しいものはどれ？',
          options: [
            'アジア州とアフリカ州',
            'ヨーロッパ州とオセアニア州',
            'アジア州と北アメリカ州',
            'アジア州とヨーロッパ州',
          ],
          correctIndex: 3,
          explanation:
            'ユーラシア大陸は大陸としては一つですが、アジア州とヨーロッパ州の二つの州に区分されています。文化や歴史的なまとまりによる区分です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q6',
          question: 'オセアニア州に含まれるのはどれ？',
          options: [
            '南極大陸と太平洋の島々',
            'オーストラリア大陸と太平洋の島々',
            'アフリカ大陸とインド洋の島々',
            '南アメリカ大陸と大西洋の島々',
          ],
          correctIndex: 1,
          explanation:
            'オセアニア州はオーストラリア大陸と太平洋の島々（ニュージーランドなど）で構成されています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q7',
          question: '日本が含まれるアジア州の地域区分はどれ？',
          options: [
            '東南アジア',
            '南アジア',
            '西アジア',
            '東アジア',
          ],
          correctIndex: 3,
          explanation:
            '日本は東アジアに含まれます。東アジアには中国・韓国・モンゴルなども含まれます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q8',
          question: '南極大陸はどの州に属する？',
          options: [
            'いずれの州にも属さない',
            '南アメリカ州',
            'アジア州',
            'オセアニア州',
          ],
          correctIndex: 0,
          explanation:
            '南極大陸は1年じゅう氷におおわれ、定住する住民がおらず国もないため、いずれの州にも区分されていません。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q9',
          question: '1年じゅう氷におおわれている大陸はどれ？',
          options: [
            'オーストラリア大陸',
            'アフリカ大陸',
            'ユーラシア大陸',
            '南極大陸',
          ],
          correctIndex: 3,
          explanation:
            '南極大陸は南極点を含み、1年じゅう氷におおわれた大陸です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q10',
          question: 'アジア州の地域区分として正しくないものはどれ？',
          options: [
            '北アジア',
            '東アジア',
            '西アジア',
            '中央アジア',
          ],
          correctIndex: 0,
          explanation:
            'アジア州の地域区分は東アジア・東南アジア・南アジア・西アジア・中央アジアの5つです。「北アジア」は一般的な区分名ではありません。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-es-q11',
          question: '六大陸のうち最も面積が小さいのはどれ？',
          options: [
            '南極大陸',
            'オーストラリア大陸',
            '南アメリカ大陸',
            'アフリカ大陸',
          ],
          correctIndex: 1,
          explanation:
            'オーストラリア大陸は六大陸のうち最も面積が小さい大陸です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q12',
          question: '赤道が通る大陸として正しい組み合わせはどれ？',
          options: [
            'ユーラシア大陸と南極大陸',
            '北アメリカ大陸とオーストラリア大陸',
            '南極大陸とアフリカ大陸',
            'アフリカ大陸と南アメリカ大陸',
          ],
          correctIndex: 3,
          explanation:
            '赤道はアフリカ大陸と南アメリカ大陸を通っています。赤道は緯度0度の線です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q13',
          question: 'インドの南側に広がる大洋はどれ？',
          options: [
            '太平洋',
            'インド洋',
            '大西洋',
            '北極海',
          ],
          correctIndex: 1,
          explanation:
            'インド洋はインドの南側に広がる大洋です。三大洋の中では最も面積が小さいです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q14',
          question: 'タイやインドネシアが含まれるアジアの地域区分はどれ？',
          options: [
            '東アジア',
            '西アジア',
            '東南アジア',
            '中央アジア',
          ],
          correctIndex: 2,
          explanation:
            'タイやインドネシア、ベトナムなどは東南アジアに含まれます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q15',
          question: 'インドやバングラデシュが含まれるアジアの地域区分はどれ？',
          options: [
            '東アジア',
            '中央アジア',
            '南アジア',
            '西アジア',
          ],
          correctIndex: 2,
          explanation:
            'インドやバングラデシュは南アジアに含まれます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q16',
          question: 'ユーラシア大陸とアフリカ大陸を結ぶ地域はどこか？',
          options: [
            'スエズ地峡付近',
            'パナマ地峡',
            'ジブラルタル海峡',
            'マラッカ海峡',
          ],
          correctIndex: 0,
          explanation:
            'スエズ地峡付近（エジプト周辺）でユーラシア大陸とアフリカ大陸がつながっています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q17',
          question: '北アメリカ大陸と南アメリカ大陸を結ぶ細い陸地は何か？',
          options: [
            'スエズ地峡',
            'パナマ地峡',
            'マラッカ海峡',
            'ドーバー海峡',
          ],
          correctIndex: 1,
          explanation:
            'パナマ地峡は北アメリカ大陸と南アメリカ大陸を結ぶ細い陸地です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q18',
          question: '北アメリカ大陸にある2つの大きな国はどれ？',
          options: [
            'ブラジルとアルゼンチン',
            'メキシコとキューバ',
            'イギリスとフランス',
            'アメリカ合衆国とカナダ',
          ],
          correctIndex: 3,
          explanation:
            '北アメリカ大陸にはアメリカ合衆国とカナダという2つの大きな国があります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q19',
          question: 'アフリカ大陸は六大陸のうち面積が何番目に大きいか？',
          options: [
            '1番目',
            '3番目',
            '2番目',
            '4番目',
          ],
          correctIndex: 2,
          explanation:
            'アフリカ大陸は六大陸のうち、ユーラシア大陸に次いで2番目に面積が大きい大陸です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q20',
          question: '南半球に位置する大陸として正しくないものはどれ？',
          options: [
            '南アメリカ大陸',
            'オーストラリア大陸',
            '北アメリカ大陸',
            '南極大陸',
          ],
          correctIndex: 2,
          explanation:
            '北アメリカ大陸は北半球に位置しています。南アメリカ・オーストラリア・南極大陸は南半球です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-es-q21',
          question: '太平洋に多くの島が点在する地域を含む州はどこ？',
          options: [
            'アジア州',
            'オセアニア州',
            'アフリカ州',
            '北アメリカ州',
          ],
          correctIndex: 1,
          explanation:
            'オセアニア州はオーストラリア大陸と太平洋の島々で構成されています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-es-q22',
          question: 'サウジアラビアやイランが含まれるアジアの地域区分はどれ？',
          options: [
            '東アジア',
            '南アジア',
            '西アジア',
            '中央アジア',
          ],
          correctIndex: 2,
          explanation:
            'サウジアラビアやイランは西アジアに含まれます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-es-q23',
          question: 'カザフスタンやウズベキスタンが含まれるアジアの地域区分はどれ？',
          options: [
            '東アジア',
            '中央アジア',
            '西アジア',
            '東南アジア',
          ],
          correctIndex: 1,
          explanation:
            'カザフスタンやウズベキスタンは中央アジアに含まれます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-es-q24',
          question: 'アジア州とヨーロッパ州が同じ大陸上にあるのは何大陸か？',
          options: [
            'アフリカ大陸',
            '北アメリカ大陸',
            'ユーラシア大陸',
            'オーストラリア大陸',
          ],
          correctIndex: 2,
          explanation:
            'ユーラシア大陸の上にアジア州とヨーロッパ州があります。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-es-ex1',
          question:
            '地図上でA～Fの大陸名と、ア～ウの大洋名を答えなさい。また、陸地と海洋の面積の割合を答えなさい。',
          steps: [
            {
              title: 'Step 1: 六つの大陸を確認する',
              content:
                '六つの大陸は、ユーラシア大陸（最大）、アフリカ大陸、北アメリカ大陸、南アメリカ大陸、オーストラリア大陸（最小）、南極大陸です。位置と形の特徴から判別します。',
              highlight: '六大陸の位置と特徴を覚える',
            },
            {
              title: 'Step 2: 三つの大洋を確認する',
              content:
                '三つの大洋は、太平洋（最大・日本の東側に広がる）、大西洋（ヨーロッパとアメリカの間）、インド洋（インドの南側）です。',
              highlight: '三大洋の位置関係を把握する',
            },
            {
              title: 'Step 3: 陸地と海洋の割合を答える',
              content:
                '陸地は地球の表面の約3割（約29%）、海洋は約7割（約71%）を占めています。',
              highlight: '陸地：約3割、海洋：約7割',
            },
          ],
          answer:
            '六大陸：ユーラシア大陸・アフリカ大陸・北アメリカ大陸・南アメリカ大陸・オーストラリア大陸・南極大陸\n三大洋：太平洋・大西洋・インド洋\n陸地：約3割、海洋：約7割',
        },
        {
          id: 'geo1-es-ex2',
          question:
            '六つの州の名前をすべて答え、ユーラシア大陸がどのように州に区分されるか説明しなさい。また、アジア州を5つの地域に区分し、日本が含まれる地域を答えなさい。',
          steps: [
            {
              title: 'Step 1: 六つの州を答える',
              content:
                'アジア州・ヨーロッパ州・アフリカ州・北アメリカ州・南アメリカ州・オセアニア州の六つです。',
              highlight: '六つの州を正確に覚える',
            },
            {
              title: 'Step 2: ユーラシア大陸の州区分を説明する',
              content:
                'ユーラシア大陸は大陸としては一つですが、文化や歴史のまとまりが異なるため、アジア州とヨーロッパ州の二つに区分されています。',
              highlight: 'ユーラシア大陸＝アジア州＋ヨーロッパ州',
            },
            {
              title: 'Step 3: アジア州の地域区分を答える',
              content:
                'アジア州は東アジア・東南アジア・南アジア・西アジア・中央アジアの5つに区分されます。日本は東アジアに含まれます。',
              highlight: '日本は東アジアに属する',
            },
          ],
          answer:
            '六つの州：アジア州・ヨーロッパ州・アフリカ州・北アメリカ州・南アメリカ州・オセアニア州\nユーラシア大陸はアジア州とヨーロッパ州に区分される\nアジア州の地域区分：東アジア・東南アジア・南アジア・西アジア・中央アジア\n日本は東アジアに含まれる',
        },
      ],
    },
    chatId: 'geo1-earth-shape',
  },
};
