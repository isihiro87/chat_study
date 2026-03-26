import type { Topic } from '../../../../../../types';

export const logicCircuits: Topic = {
  id: 'fe-logic-circuits',
  eraId: 'fe-hardware',
  name: '論理回路',
  subtitle: 'AND・OR・NOT・フリップフロップ・組合せ回路',
  icon: '🔲',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '論理ゲート',
          content:
            '論理ゲートは、論理演算を行う電子回路の基本要素です。AND（論理積）は両方の入力が1のときだけ出力が1になります。OR（論理和）はどちらか一方でも入力が1なら出力が1になります。NOT（否定）は入力を反転させます。NAND（NOT AND）はANDの出力を反転したもので、両方1のときだけ0を出力します。NOR（NOT OR）はORの出力を反転したものです。XOR（排他的論理和）は2つの入力が異なるときに1を出力します。NANDゲートだけですべての論理回路を構成できるため「万能ゲート」と呼ばれます。',
          keyPoints: [
            'AND: 両方1のとき1（論理積）',
            'OR: どちらか1のとき1（論理和）',
            'NOT: 入力の反転（否定）',
            'XOR: 入力が異なるとき1（排他的論理和）',
          ],
        },
        {
          title: '組合せ回路',
          content:
            '組合せ回路は、現在の入力だけで出力が決まる回路です。記憶機能を持ちません。代表的な組合せ回路として、半加算器と全加算器があります。半加算器はXORゲートとANDゲートで構成され、2つの1ビットの加算を行い、和（Sum）と桁上げ（Carry）を出力します。全加算器は下位からの桁上げも含めた3入力の加算を行います。エンコーダは複数の入力信号を少ないビット数に符号化し、デコーダはその逆に復号します。マルチプレクサは複数の入力から1つを選択して出力する回路です。',
          keyPoints: [
            '組合せ回路: 記憶機能なし、入力のみで出力が決まる',
            '半加算器: 2入力の1ビット加算（XOR + AND）',
            '全加算器: 桁上げ入力を含む3入力の加算',
            'マルチプレクサ: 複数入力から1つを選択して出力',
          ],
        },
        {
          title: '順序回路',
          content:
            '順序回路は、現在の入力に加えて過去の状態（記憶）によって出力が決まる回路です。記憶機能を持つ回路であるフリップフロップ（FF）が基本要素です。RS-FFは Set（セット）とReset（リセット）の2入力を持ち、1ビットの情報を保持します。JK-FFはRS-FFの改良版で、両方の入力が1のとき出力が反転します。D-FF（Data FF）はクロック信号に同期して入力データを記憶します。フリップフロップを複数組み合わせてレジスタ（複数ビットの記憶）やカウンタ（計数回路）を構成します。',
          keyPoints: [
            '順序回路: 記憶機能あり、過去の状態も出力に影響',
            'フリップフロップ（FF）: 1ビットを記憶する基本素子',
            'RS-FF: Set/Resetで制御、JK-FF: RS-FFの改良版',
            'D-FF: クロック同期で入力を記憶',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-lc-fc1', front: 'AND（論理積）', back: '2つの入力が両方1のときだけ出力が1になる論理ゲートは？', explanation: '掛け算のイメージで、1×1=1、それ以外は0です。', difficulty: 'basic' },
      { id: 'fe-lc-fc2', front: 'OR（論理和）', back: '2つの入力のどちらか一方でも1なら出力が1になる論理ゲートは？', explanation: '足し算のイメージで、入力に1が1つでもあれば出力は1です。', difficulty: 'basic' },
      { id: 'fe-lc-fc3', front: 'XOR（排他的論理和）', back: '2つの入力が異なるときに1を出力する論理ゲートは？', explanation: '入力が同じ（00または11）なら0、異なる（01または10）なら1を出力します。', difficulty: 'basic' },
      { id: 'fe-lc-fc4', front: 'NAND', back: 'ANDの出力を反転させた論理ゲートで、万能ゲートとも呼ばれるのは？', explanation: 'NANDゲートだけですべての論理回路を構成できるため万能ゲートと呼ばれます。', difficulty: 'standard' },
      { id: 'fe-lc-fc5', front: 'フリップフロップ（FF）', back: '1ビットの情報を記憶する順序回路の基本素子は？', explanation: 'RS-FF、JK-FF、D-FFなどの種類があり、レジスタやカウンタの構成要素です。', difficulty: 'standard' },
      { id: 'fe-lc-fc6', front: '半加算器', back: 'XORとANDゲートで構成され、2つの1ビットを加算する組合せ回路は？', explanation: '和（Sum）と桁上げ（Carry）の2出力を持ちますが、下位からの桁上げ入力はありません。', difficulty: 'standard' },
      { id: 'fe-lc-fc7', front: '組合せ回路', back: '記憶機能を持たず、現在の入力だけで出力が決まる回路は？', explanation: '加算器、エンコーダ、デコーダ、マルチプレクサなどが含まれます。', difficulty: 'basic' },
      { id: 'fe-lc-fc8', front: '順序回路', back: '記憶機能を持ち、現在の入力と過去の状態で出力が決まる回路は？', explanation: 'フリップフロップを基本素子とし、レジスタやカウンタが代表例です。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-lc-q1',
          question: '入力A=1、B=0のとき、AND回路の出力はどれか。',
          options: ['0', '1', '不定', 'エラー'],
          correctIndex: 0,
          explanation: 'AND回路は両方の入力が1のときだけ1を出力します。A=1、B=0なので出力は0です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-lc-q2',
          question: '入力A=1、B=0のとき、XOR回路の出力はどれか。',
          options: ['0', '1', '不定', 'エラー'],
          correctIndex: 1,
          explanation: 'XOR（排他的論理和）は2つの入力が異なるとき1を出力します。A=1、B=0なので出力は1です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-lc-q3',
          question: '全ての論理回路を構成できることから「万能ゲート」と呼ばれる論理ゲートはどれか。',
          options: ['AND', 'OR', 'NAND', 'XOR'],
          correctIndex: 2,
          explanation: 'NANDゲートを組み合わせるだけで、AND、OR、NOTなどすべての論理回路を構成できます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-lc-q4',
          question: '記憶機能を持たず、現在の入力だけで出力が決まる回路はどれか。',
          options: ['組合せ回路', '順序回路', 'フリップフロップ', 'カウンタ'],
          correctIndex: 0,
          explanation: '組合せ回路は記憶機能を持たず、入力の組合せだけで出力が決まります。順序回路は記憶機能を持ちます。',
          difficulty: 'basic',
        },
        {
          id: 'fe-lc-q5',
          question: 'フリップフロップの説明として適切なものはどれか。',
          options: [
            '複数の入力から1つを選択する回路',
            '1ビットの情報を記憶する順序回路の基本素子',
            '2つの1ビットを加算する組合せ回路',
            '入力信号を符号化する回路',
          ],
          correctIndex: 1,
          explanation: 'フリップフロップは1ビットの情報を記憶する素子で、レジスタやカウンタの基本構成要素です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-lc-q6',
          question: '半加算器を構成する2つの論理ゲートの組合せはどれか。',
          options: ['ANDとOR', 'XORとAND', 'NANDとNOR', 'ORとNOT'],
          correctIndex: 1,
          explanation: '半加算器はXORゲートで和（Sum）を、ANDゲートで桁上げ（Carry）を出力します。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
