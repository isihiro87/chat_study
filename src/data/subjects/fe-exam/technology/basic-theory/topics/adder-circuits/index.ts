import type { Topic } from '../../../../../../types';

export const adderCircuits: Topic = {
  id: 'fe-adder-circuits',
  eraId: 'fe-basic-theory',
  name: '半加算器と全加算器',
  subtitle: '加算回路・半加算器・全加算器の仕組み',
  icon: '➕',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '加算器とは',
          content:
            '加算器とは、2進数の加算（足し算）を行う論理回路です。コンピュータ内部ではすべての計算が2進数で行われるため、加算器はCPUの演算装置（ALU）の基本構成要素です。加算器には半加算器（Half Adder）と全加算器（Full Adder）の2種類があり、これらを組み合わせることで多桁の2進数の加算を実現します。',
          keyPoints: [
            '加算器は2進数の足し算を行う論理回路',
            '半加算器と全加算器の2種類がある',
            'CPUの演算装置（ALU）の基本構成要素',
          ],
        },
        {
          title: '半加算器（Half Adder）',
          content:
            '半加算器は、2つの1ビットの2進数（AとB）を入力として受け取り、同桁の和（S: Sum）と桁上がり（C: Carry）の2つを出力する回路です。和SはXOR（排他的論理和）で実現され、桁上がりCはAND（論理積）で実現されます。半加算器は下位桁からの桁上がりを考慮できないため、最下位桁の加算にのみ使用されます。例えば、A=1, B=1のとき、S=0（XOR）、C=1（AND）となり、結果は10(2)=2(10)です。',
          keyPoints: [
            '入力: A, B（2つの1ビット）',
            '出力: S（和）= A XOR B、C（桁上がり）= A AND B',
            '下位桁からの桁上がりを考慮しない → 最下位桁で使用',
          ],
        },
        {
          title: '全加算器（Full Adder）',
          content:
            '全加算器は、2つの1ビットの2進数（AとB）に加えて、下位桁からの桁上がり（C\': Carry In）も入力として受け取ります。出力は同桁の和（S）と上位桁への桁上がり（C: Carry Out）です。全加算器は半加算器2つとOR回路1つで構成されます。まず半加算器1でAとBを加算し、その和と下位桁からの桁上がりC\'を半加算器2で加算します。2つの半加算器の桁上がりをORで結合して最終的な桁上がりCを得ます。最下位桁以外の桁の加算に使用されます。',
          keyPoints: [
            '入力: A, B, C\'（下位桁からの桁上がり）の3つ',
            '出力: S（和）と C（上位桁への桁上がり）',
            '半加算器2つ + OR回路1つで構成される',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-add-fc1', front: '2進数の加算（足し算）を行う論理回路', back: '加算器とは何か？', explanation: 'コンピュータ内部で2進数の足し算を行う基本回路で、半加算器と全加算器があります。', difficulty: 'basic' },
      { id: 'fe-add-fc2', front: '半加算器（Half Adder）', back: '下位桁からの桁上がりを考慮せず、2つの1ビットを加算する回路は？', explanation: '入力A, Bから和Sと桁上がりCを出力します。最下位桁の加算に使います。', difficulty: 'basic' },
      { id: 'fe-add-fc3', front: 'XOR（排他的論理和）', back: '半加算器で和（S）を求めるのに使う論理演算は？', explanation: 'A XOR B: 入力が異なるとき1、同じとき0を出力します。', difficulty: 'basic' },
      { id: 'fe-add-fc4', front: 'AND（論理積）', back: '半加算器で桁上がり（C）を求めるのに使う論理演算は？', explanation: 'A AND B: 両方の入力が1のときだけ1（桁上がりあり）を出力します。', difficulty: 'basic' },
      { id: 'fe-add-fc5', front: '全加算器（Full Adder）', back: '下位桁からの桁上がりも考慮して加算を行う回路は？', explanation: '入力はA, B, C\'（下位桁からの桁上がり）の3つで、和Sと桁上がりCを出力します。', difficulty: 'basic' },
      { id: 'fe-add-fc6', front: '半加算器2つ + OR回路1つ', back: '全加算器はどのような回路で構成されるか？', explanation: '半加算器1でAとBを加算し、半加算器2でその和とC\'を加算、2つの桁上がりをORで結合します。', difficulty: 'standard' },
      { id: 'fe-add-fc7', front: '最下位桁', back: '半加算器が使われるのは何桁目か？', explanation: '最下位桁には下位からの桁上がりがないため、半加算器で十分です。', difficulty: 'basic' },
      { id: 'fe-add-fc8', front: '最下位桁以外（上位桁）', back: '全加算器が使われるのは何桁目か？', explanation: '最下位桁以外では下位桁からの桁上がりを考慮する必要があるため、全加算器を使います。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-add-q1',
          question: '半加算器の出力として正しいものはどれか。',
          options: ['和（S）のみ', '桁上がり（C）のみ', '和（S）と桁上がり（C）', '和（S）と桁上がり（C）と下位桁からの桁上がり（C\'）'],
          correctIndex: 2,
          explanation: '半加算器は2つの1ビット入力から、同桁の和（S）と桁上がり（C）の2つを出力します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-add-q2',
          question: '半加算器において、和（S）を求める論理演算はどれか。',
          options: ['AND', 'OR', 'XOR', 'NAND'],
          correctIndex: 2,
          explanation: '半加算器の和SはXOR（排他的論理和）で求めます。入力が異なるとき1、同じとき0です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-add-q3',
          question: '半加算器において、桁上がり（C）を求める論理演算はどれか。',
          options: ['AND', 'OR', 'XOR', 'NOR'],
          correctIndex: 0,
          explanation: '半加算器の桁上がりCはAND（論理積）で求めます。両方1のときだけ桁上がりが発生します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-add-q4',
          question: '全加算器の入力として正しいものはどれか。',
          options: ['A, Bの2つ', 'A, B, C\'（下位桁からの桁上がり）の3つ', 'A, B, C, C\'の4つ', 'A, Bとクロック信号の3つ'],
          correctIndex: 1,
          explanation: '全加算器は2つの1ビット入力（A, B）に加え、下位桁からの桁上がり（C\'）の計3つを入力とします。',
          difficulty: 'basic',
        },
        {
          id: 'fe-add-q5',
          question: '全加算器を構成する回路の組合せとして正しいものはどれか。',
          options: ['半加算器1つとAND回路1つ', '半加算器2つとOR回路1つ', '半加算器2つとAND回路1つ', '半加算器3つ'],
          correctIndex: 1,
          explanation: '全加算器は半加算器2つとOR回路1つで構成されます。2つの半加算器の桁上がりをORで結合します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-add-q6',
          question: '4ビットの2進数同士を加算する回路を構成するとき、必要な半加算器と全加算器の数の組合せとして正しいものはどれか。',
          options: ['半加算器4つ', '全加算器4つ', '半加算器1つと全加算器3つ', '半加算器2つと全加算器2つ'],
          correctIndex: 2,
          explanation: '最下位桁は下位からの桁上がりがないため半加算器1つ、残り3桁は桁上がりを考慮するため全加算器3つが必要です。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
