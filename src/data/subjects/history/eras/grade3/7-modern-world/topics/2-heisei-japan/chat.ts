import type { HistoryChat } from '../../../../../../../history-chat/types';

export const heiseiJapanChat: HistoryChat = {
  id: 'heisei-japan',
  icon: '🗾',
  title: '平成の日本',
  subtitle: '〜現代〜 変化する社会と政治',
  characters: [
    {
      id: 'politician',
      name: '政治家',
      emoji: '👨‍💼',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'citizen',
      name: '国民',
      emoji: '🧑',
      colorFrom: '#059669',
      colorTo: '#34d399',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1992年〜1993年',
    },
    {
      type: 'narrator',
      text: '冷戦が終わり、日本の国際貢献のあり方が問われる時代になりました。1992年、<strong>国際平和協力法（PKO協力法）</strong>が成立し、自衛隊の海外派遣が認められました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'politician',
      text: '自衛隊をカンボジアのPKO活動に派遣する。日本も国際社会で責任を果たさなければならない',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '自衛隊が海外に行くのか…。平和憲法との関係はどうなるんだろう',
    },
    {
      type: 'narrator',
      text: '<strong>カンボジア</strong>へのPKO部隊派遣が初の実績となりました。国内では1993年に<strong>55年体制</strong>が崩壊し、非自民連立政権が誕生。長く続いた自民党一党支配の時代が終わりを迎えました。',
    },
    {
      type: 'quiz',
      question: '1992年に成立した自衛隊の海外派遣を認める法律は？',
      options: [
        { letter: 'A', text: '自衛隊法', correct: false },
        { letter: 'B', text: '国際平和協力法（PKO協力法）', correct: true },
        { letter: 'C', text: '日米安保条約', correct: false },
        { letter: 'D', text: '安全保障条約', correct: false },
      ],
      explanation:
        '<strong>正解はB「国際平和協力法（PKO協力法）」</strong>です。この法律により自衛隊の国連平和維持活動への参加が可能になりました。',
    },
    {
      type: 'date',
      text: '1980年代後半〜2000年代',
    },
    {
      type: 'narrator',
      text: '1980年代後半、日本では<strong>バブル経済</strong>と呼ばれる異常な好景気が起こりました。株価や地価が急上昇し、人々は豊かさを実感しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '土地の値段がどんどん上がっている！株も買えば儲かる！…でもこの好景気、本当にいつまで続くの？',
    },
    {
      type: 'narrator',
      text: '1990年代にバブルが崩壊し、<strong>平成不況</strong>と呼ばれる長期的な不景気に入りました。政府は<strong>規制緩和</strong>を進めましたが、景気回復には時間がかかりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'politician',
      text: '2009年、ついに政権交代だ。民主党が政権を担うことになった。国民の期待に応えなければ',
    },
    {
      type: 'narrator',
      text: '2009年には<strong>民主党</strong>が自民党から政権を奪いました。社会面では1999年に<strong>男女共同参画社会基本法</strong>が制定され、北朝鮮による<strong>拉致問題</strong>も大きな外交課題となりました。',
    },
    {
      type: 'quiz',
      question: '1993年に崩壊した自民党と社会党の長期的な政治体制は？',
      options: [
        { letter: 'A', text: '大政翼賛体制', correct: false },
        { letter: 'B', text: '護憲体制', correct: false },
        { letter: 'C', text: '55年体制', correct: true },
        { letter: 'D', text: '二大政党制', correct: false },
      ],
      explanation:
        '<strong>正解はC「55年体制」</strong>です。1955年から続いた自民党の長期政権体制が、1993年に非自民連立政権の誕生で崩壊しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>PKO協力法</strong>（1992年）で自衛隊が<strong>カンボジア</strong>へ初派遣',
        '<strong>55年体制</strong>が1993年に崩壊し、非自民連立政権が誕生',
        '<strong>バブル経済</strong>崩壊後、<strong>平成不況</strong>に突入',
        '2009年に<strong>民主党</strong>が政権を獲得',
        '<strong>男女共同参画社会基本法</strong>（1999年）の制定、<strong>拉致問題</strong>が外交課題',
      ],
    },
  ],
};
