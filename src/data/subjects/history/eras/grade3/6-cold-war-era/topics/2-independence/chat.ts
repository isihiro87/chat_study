import type { HistoryChat } from '../../../../../../../history-chat/types';

export const japanIndependenceChat: HistoryChat = {
  id: 'japan-independence',
  icon: '🗾',
  title: '日本の独立回復',
  subtitle: '〜戦後〜 占領からの脱却と安保体制',
  characters: [
    {
      id: 'yoshida',
      name: '吉田茂',
      emoji: '🎩',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'citizen',
      name: '国民',
      emoji: '👤',
      colorFrom: '#6b7280',
      colorTo: '#9ca3af',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1951年〜1952年',
    },
    {
      type: 'narrator',
      text: '1951年、<strong>吉田茂</strong>首相は<strong>サンフランシスコ平和条約</strong>に調印しました。翌年条約が発効し、日本はついに主権を回復しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshida',
      text: 'これで日本は再び独立国だ。同時に日米安全保障条約も結んだ。アメリカとの協力で安全を守る。',
    },
    {
      type: 'narrator',
      text: '<strong>日米安全保障条約</strong>によりアメリカ軍が日本に駐留を続けることになりました。一方、<strong>朝鮮戦争</strong>の<strong>特需景気</strong>で日本経済は大きく復興しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '軍需物資の注文が殺到して工場はフル稼働です！景気が良くなってきました！',
    },
    {
      type: 'narrator',
      text: '1954年には<strong>自衛隊</strong>が発足しました。しかし同年、<strong>第五福竜丸</strong>がアメリカの水爆実験で被ばくする事件が起き、反核運動が広がりました。',
    },
    {
      type: 'quiz',
      question: '1951年に日本が主権を回復した条約は？',
      options: [
        { letter: 'A', text: 'ポーツマス条約', correct: false },
        { letter: 'B', text: 'サンフランシスコ平和条約', correct: true },
        { letter: 'C', text: '日米安全保障条約', correct: false },
        { letter: 'D', text: '日ソ共同宣言', correct: false },
      ],
      explanation:
        '<strong>正解はB「サンフランシスコ平和条約」</strong>です。吉田茂首相が調印し、日本は独立を回復しました。',
    },
    {
      type: 'date',
      text: '1955年〜1965年',
    },
    {
      type: 'narrator',
      text: '1955年に<strong>自由民主党</strong>が結成され、社会党と対立する<strong>55年体制</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshida',
      text: '保守合同で自由民主党が誕生した。安定した政治体制で日本を発展させるのだ。',
    },
    {
      type: 'narrator',
      text: '<strong>岸信介</strong>首相が日米安全保障条約の改定を進めると、これに反対する<strong>安保闘争</strong>が起こりました。国会周辺には大規模なデモ隊が押し寄せました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '安保改定反対！戦争に巻き込まれたくない！',
    },
    {
      type: 'narrator',
      text: '1956年の<strong>日ソ共同宣言</strong>でソ連との国交が回復し、日本の<strong>国際連合</strong>加盟が実現しました。政府は<strong>非核三原則</strong>を掲げ、<strong>沖縄</strong>の返還を求めました。1965年には<strong>日韓基本条約</strong>で韓国との国交を正常化しました。',
    },
    {
      type: 'quiz',
      question: '日米安保条約の改定に反対する大規模な国民運動は？',
      options: [
        { letter: 'A', text: '自由民権運動', correct: false },
        { letter: 'B', text: '大正デモクラシー', correct: false },
        { letter: 'C', text: '安保闘争', correct: true },
        { letter: 'D', text: '米騒動', correct: false },
      ],
      explanation:
        '<strong>正解はC「安保闘争」</strong>です。1960年に岸信介首相のもとで安保条約改定に反対する大規模な運動が起こりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>サンフランシスコ平和条約</strong>（1951年）で日本が主権を回復',
        '<strong>日米安全保障条約</strong>でアメリカ軍が日本に駐留',
        '<strong>特需景気</strong>で経済復興、<strong>自衛隊</strong>が発足',
        '<strong>55年体制</strong>：自由民主党と社会党の対立構造',
        '<strong>安保闘争</strong>：日米安保条約改定への大規模な反対運動',
        '<strong>日ソ共同宣言</strong>で国連加盟、<strong>非核三原則</strong>を表明',
      ],
    },
  ],
};
