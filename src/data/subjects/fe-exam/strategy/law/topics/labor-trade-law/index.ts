import type { Topic } from '../../../../../../types';

export const laborTradeLaw: Topic = {
  id: 'fe-labor-trade-law',
  eraId: 'fe-law',
  name: '労働・取引関連法規',
  subtitle: '労働基準法・中小受託取引適正化法・契約',
  icon: '📜',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '労働関連法規',
          content:
            '労働基準法は、労働条件の最低基準を定めた法律です。労働時間は1日8時間・週40時間が原則で、これを超える場合は36協定の締結と割増賃金の支払いが必要です。労働者派遣法は、派遣労働者の保護と適正な派遣事業の運営を目的とした法律です。派遣元が雇用し、派遣先の指揮命令を受けて働く形態です。請負や準委任との違いは、指揮命令権の所在にあります。',
          keyPoints: [
            '労働基準法: 労働条件の最低基準。1日8時間・週40時間',
            '労働者派遣法: 派遣先が指揮命令。派遣元が雇用',
            '請負との違い: 請負は受注者が指揮命令',
          ],
        },
        {
          title: '下請法（下請代金支払遅延等防止法）',
          content:
            '下請法は、親事業者と下請事業者の取引を公正にし、下請事業者を保護する法律です。親事業者には、発注書面の交付義務、下請代金の支払期日（物品等の受領後60日以内）、買いたたきの禁止、不当な返品の禁止などの義務が課されます。IT業界では、ソフトウェア開発の外注で適用されることが多いです。',
          keyPoints: [
            '下請事業者を保護する法律',
            '支払期日: 受領後60日以内',
            '発注書面の交付義務・買いたたき禁止',
          ],
        },
        {
          title: '契約関連の法律',
          content:
            '民法では契約の基本原則が定められています。契約自由の原則により、当事者間で自由に契約内容を決められます。2020年の民法改正で「瑕疵担保責任」が「契約不適合責任」に変わりました。契約の内容に適合しない場合、買主は修補・代替物引渡し・代金減額・損害賠償・契約解除を請求できます。',
          keyPoints: [
            '契約自由の原則: 当事者間で内容を自由に決定',
            '契約不適合責任: 旧「瑕疵担保責任」。2020年民法改正',
            '修補・代金減額・損害賠償・契約解除が可能',
          ],
        },
        {
          title: '独占禁止法と公正取引',
          content:
            '独占禁止法（独禁法）は、公正で自由な競争を促進するための法律です。私的独占（市場支配）、不当な取引制限（カルテル：競合同士の価格協定）、不公正な取引方法（抱き合わせ販売・優越的地位の濫用等）を禁止します。公正取引委員会が運用・監視を行います。',
          keyPoints: [
            '私的独占・カルテル・不公正な取引方法を禁止',
            'カルテル: 競合同士の価格協定',
            '公正取引委員会が運用・監視',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-labor-trade-law-fc1', front: '労働条件の最低基準を定めた法律（1日8時間・週40時間）', back: '労働基準法とは？', explanation: '超過勤務には36協定の締結と割増賃金の支払いが必要です。', difficulty: 'basic' },
      { id: 'fe-labor-trade-law-fc2', front: '派遣元が雇用し、派遣先の指揮命令で働く労働形態', back: '労働者派遣とは？', explanation: '請負・準委任とは指揮命令権の所在が異なります。', difficulty: 'basic' },
      { id: 'fe-labor-trade-law-fc3', front: '親事業者と下請事業者の取引を公正にし、下請事業者を保護する法律', back: '下請法とは？', explanation: '支払期日は物品等の受領後60日以内です。', difficulty: 'basic' },
      { id: 'fe-labor-trade-law-fc4', front: '契約の内容に適合しない場合に負う責任（旧・瑕疵担保責任）', back: '契約不適合責任とは？', explanation: '2020年民法改正で名称が変わりました。修補・代金減額等を請求できます。', difficulty: 'standard' },
      { id: 'fe-labor-trade-law-fc5', front: '競合企業同士が価格や生産量を協定する独禁法違反行為', back: 'カルテルとは？', explanation: '不当な取引制限として独占禁止法で禁止されています。', difficulty: 'standard' },
      { id: 'fe-labor-trade-law-fc6', front: '独占禁止法の運用・監視を行う機関', back: '公正取引委員会とは？', explanation: 'カルテルや不公正な取引を調査・排除する権限を持ちます。', difficulty: 'standard' },
      { id: 'fe-labor-trade-law-fc7', front: '物品等の受領後60日以内', back: '下請法における下請代金の支払期日は？', explanation: '60日を超えての支払いは下請法違反となります。', difficulty: 'standard' },
      { id: 'fe-labor-trade-law-fc8', front: '労働時間超過時に必要な労使間の協定', back: '36協定とは？', explanation: '労働基準法第36条に基づく、時間外・休日労働に関する協定です。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-labor-trade-law-q1',
          question: '労働基準法で定められた1日の法定労働時間はどれか。',
          options: ['6時間', '7時間', '8時間', '10時間'],
          correctIndex: 2,
          explanation: '労働基準法では1日8時間・週40時間が法定労働時間です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-labor-trade-law-q2',
          question: '労働者派遣において、労働者に対する指揮命令権を持つのはどちらか。',
          options: ['派遣元', '派遣先', '労働者本人', '労働基準監督署'],
          correctIndex: 1,
          explanation: '労働者派遣では、雇用関係は派遣元にありますが、指揮命令権は派遣先が持ちます。',
          difficulty: 'basic',
        },
        {
          id: 'fe-labor-trade-law-q3',
          question: '下請法で定められた下請代金の支払期日として正しいものはどれか。',
          options: ['受領後30日以内', '受領後60日以内', '受領後90日以内', '受領後120日以内'],
          correctIndex: 1,
          explanation: '下請法では物品等の受領後60日以内に支払うことが義務づけられています。',
          difficulty: 'standard',
        },
        {
          id: 'fe-labor-trade-law-q4',
          question: '2020年の民法改正で「瑕疵担保責任」に代わって導入された概念はどれか。',
          options: ['不法行為責任', '契約不適合責任', '製造物責任', '管理責任'],
          correctIndex: 1,
          explanation: '民法改正で「瑕疵担保責任」が「契約不適合責任」に変わりました。',
          difficulty: 'standard',
        },
        {
          id: 'fe-labor-trade-law-q5',
          question: '独占禁止法で禁止されている行為に該当するものはどれか。',
          options: [
            '正当な価格競争',
            '競合企業との合法的な提携',
            '競合企業間での価格協定（カルテル）',
            '新規事業への参入',
          ],
          correctIndex: 2,
          explanation: 'カルテルは不当な取引制限として独占禁止法で禁止されています。',
          difficulty: 'standard',
        },
        {
          id: 'fe-labor-trade-law-q6',
          question: '派遣契約と請負契約の最大の違いとして最も適切なものはどれか。',
          options: [
            '契約期間の長さ',
            '指揮命令権の所在',
            '報酬の支払方法',
            '労働者の雇用形態',
          ],
          correctIndex: 1,
          explanation: '派遣は発注者（派遣先）に指揮命令権がありますが、請負は受注者に指揮命令権があります。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
