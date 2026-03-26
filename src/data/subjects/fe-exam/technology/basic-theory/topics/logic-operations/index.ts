import type { Topic } from '../../../../../../types';

export const logicOperations: Topic = {
  id: 'fe-logic-operations',
  eraId: 'fe-basic-theory',
  name: '論理演算',
  subtitle: 'AND・OR・NOT・XOR・ド・モルガンの法則',
  icon: '🔲',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '論理演算とは',
          content:
            '論理演算とは、真（1）と偽（0）の2種類の値だけを使って行う演算です。コンピュータの内部ではすべてのデータが0と1のビットで表現されるため、論理演算はビット演算として広く使われています。条件判定や回路設計の基礎となる重要な概念です。',
          keyPoints: [
            '真（1）と偽（0）の2値で行う演算',
            'コンピュータ内部ではビット演算として使用',
            '条件判定・回路設計・データ処理の基礎',
          ],
        },
        {
          title: '基本演算（OR・AND・NOT）',
          content:
            '論理演算の基本は3つです。論理和（OR）は入力の少なくとも一方が1なら出力が1になります。論理積（AND）は入力の両方が1のときだけ出力が1になります。否定（NOT）は入力が0なら1、1なら0と、値を反転させます。これら3つの組合せであらゆる論理演算を表現できます。',
          keyPoints: [
            '論理和（OR）: 少なくとも一方が1なら出力1',
            '論理積（AND）: 両方が1のときだけ出力1',
            '否定（NOT）: 0→1、1→0 と反転',
          ],
        },
        {
          title: '組合せ演算（XOR・NOR・NAND）',
          content:
            '基本演算を組み合わせた演算もよく使われます。排他的論理和（XOR/EOR）は2つの入力が異なるとき出力が1になります。否定論理和（NOR）はORの結果を否定したもので、両方が0のときだけ出力が1です。否定論理積（NAND）はANDの結果を否定したもので、両方が1のときだけ出力が0です。',
          keyPoints: [
            '排他的論理和（XOR/EOR）: 入力が異なれば出力1',
            '否定論理和（NOR）: ORの否定。両方0のときだけ出力1',
            '否定論理積（NAND）: ANDの否定。両方1のときだけ出力0',
          ],
        },
        {
          title: 'ド・モルガンの法則',
          content:
            'ド・モルガンの法則は、論理演算の否定に関する重要な法則です。「A AND Bの否定 = Aの否定 OR Bの否定」と「A OR Bの否定 = Aの否定 AND Bの否定」の2つがあります。否定を分配するとANDとORが入れ替わるという性質で、論理式の変換や回路の簡略化に活用されます。',
          keyPoints: [
            'NOT(A AND B) = NOT A OR NOT B',
            'NOT(A OR B) = NOT A AND NOT B',
            '否定を分配するとANDとORが入れ替わる',
          ],
        },
        {
          title: 'ビット演算の応用',
          content:
            'ビット演算はデータ処理で広く応用されます。特定のビットを取り出す（マスク処理）にはAND演算を使います。取り出したいビット位置を1、それ以外を0にしたマスクパターンとANDを取ることで、目的のビットだけを抽出できます。特定のビットを反転させるにはXOR演算を使い、反転したいビット位置を1にしたパターンとXORを取ります。',
          keyPoints: [
            'ビットの取出し（マスク）: AND演算を使用',
            'ビットの反転: XOR演算を使用',
            'マスクパターンで操作対象のビットを指定',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-log-fc1', front: '少なくとも一方が1なら出力1', back: '論理和（OR）の動作は？', explanation: 'ORは入力のどちらか一方でも1であれば出力が1になります。両方0のときだけ出力が0です。', difficulty: 'basic' },
      { id: 'fe-log-fc2', front: '両方が1のときだけ出力1', back: '論理積（AND）の動作は？', explanation: 'ANDは2つの入力がともに1のときだけ出力が1になります。それ以外は0です。', difficulty: 'basic' },
      { id: 'fe-log-fc3', front: '0→1、1→0 と反転', back: '否定（NOT）の動作は？', explanation: 'NOTは入力値を反転させます。1入力1出力の演算です。', difficulty: 'basic' },
      { id: 'fe-log-fc4', front: '入力が異なれば出力1', back: '排他的論理和（XOR）の動作は？', explanation: 'XORは2つの入力が異なる（0と1、または1と0）とき出力が1になります。同じなら0です。', difficulty: 'basic' },
      { id: 'fe-log-fc5', front: 'NOT(A AND B) = NOT A OR NOT B', back: 'ド・モルガンの法則（ANDの否定）は？', explanation: 'ANDの否定を分配すると、各入力の否定のORになります。', difficulty: 'standard' },
      { id: 'fe-log-fc6', front: 'NOT(A OR B) = NOT A AND NOT B', back: 'ド・モルガンの法則（ORの否定）は？', explanation: 'ORの否定を分配すると、各入力の否定のANDになります。', difficulty: 'standard' },
      { id: 'fe-log-fc7', front: 'AND演算（論理積）', back: 'ビット列から特定のビットを取り出す（マスク処理）に使う演算は？', explanation: '取り出したいビット位置を1にしたマスクパターンとANDを取ると、その位置のビットだけが残ります。', difficulty: 'standard' },
      { id: 'fe-log-fc8', front: 'XOR演算（排他的論理和）', back: 'ビット列の特定のビットを反転させるのに使う演算は？', explanation: '反転したいビット位置を1にしたパターンとXORを取ると、そのビットだけが反転します。', difficulty: 'standard' },
      { id: 'fe-log-fc9', front: 'ORの否定。両方0のときだけ出力1', back: '否定論理和（NOR）の動作は？', explanation: 'NORはOR演算の結果をNOTで反転させたものです。', difficulty: 'standard' },
      { id: 'fe-log-fc10', front: 'ANDの否定。両方1のときだけ出力0', back: '否定論理積（NAND）の動作は？', explanation: 'NANDはAND演算の結果をNOTで反転させたものです。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-log-q1',
          question: '論理和（OR）において、入力A=1、B=0のときの出力はどれか。',
          options: ['0', '1', '不定', '演算できない'],
          correctIndex: 1,
          explanation: 'ORは少なくとも一方が1なら出力1です。A=1なので出力は1になります。',
          difficulty: 'basic',
        },
        {
          id: 'fe-log-q2',
          question: '論理積（AND）において、入力A=1、B=0のときの出力はどれか。',
          options: ['0', '1', '不定', '演算できない'],
          correctIndex: 0,
          explanation: 'ANDは両方が1のときだけ出力1です。B=0なので出力は0になります。',
          difficulty: 'basic',
        },
        {
          id: 'fe-log-q3',
          question: '排他的論理和（XOR）において、入力A=1、B=1のときの出力はどれか。',
          options: ['0', '1', '不定', '演算できない'],
          correctIndex: 0,
          explanation: 'XORは入力が異なるとき出力1です。A=1、B=1で同じなので出力は0になります。',
          difficulty: 'basic',
        },
        {
          id: 'fe-log-q4',
          question: 'ド・モルガンの法則で、NOT(A OR B) と等しいものはどれか。',
          options: ['NOT A OR NOT B', 'NOT A AND NOT B', 'A AND B', 'A OR B'],
          correctIndex: 1,
          explanation: 'ド・モルガンの法則により、NOT(A OR B) = NOT A AND NOT B です。ORの否定はANDに変わります。',
          difficulty: 'standard',
        },
        {
          id: 'fe-log-q5',
          question: 'ビット列 10110100 から上位4ビットだけを取り出すためのマスクパターンと演算の組合せはどれか。',
          options: ['11110000 とAND', '11110000 とOR', '00001111 とAND', '00001111 とOR'],
          correctIndex: 0,
          explanation: '上位4ビットを1、下位4ビットを0にしたマスク 11110000 とAND演算を行うと、上位4ビットだけが取り出せます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-log-q6',
          question: 'ビット列 10110100 の下位4ビットを反転させるために使うパターンと演算の組合せはどれか。',
          options: ['11110000 とXOR', '00001111 とXOR', '00001111 とAND', '11110000 とAND'],
          correctIndex: 1,
          explanation: '反転したいビット位置を1にしたパターン 00001111 とXOR演算を行うと、下位4ビットだけが反転します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-log-q7',
          question: 'NAND演算の説明として正しいものはどれか。',
          options: [
            '2つの入力が同じとき出力1',
            '2つの入力が異なるとき出力1',
            'AND演算の出力を反転したもの',
            'OR演算の出力を反転したもの',
          ],
          correctIndex: 2,
          explanation: 'NAND（否定論理積）はAND演算の結果をNOTで反転させたものです。両方1のときだけ出力が0になります。',
          difficulty: 'standard',
        },
        {
          id: 'fe-log-q8',
          question: 'NOT(A AND B) = NOT A OR NOT B が成り立つ法則はどれか。',
          options: ['結合法則', '分配法則', '交換法則', 'ド・モルガンの法則'],
          correctIndex: 3,
          explanation: 'ド・モルガンの法則は、ANDとORの否定に関する法則です。否定を分配するとANDとORが入れ替わります。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
