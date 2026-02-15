import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kamakuraCultureChat: HistoryChat = {
  id: 'kamakura-culture',
  icon: '🙏',
  title: '鎌倉文化と新しい仏教',
  subtitle: '〜鎌倉時代〜 力強い文化と鎌倉新仏教',
  characters: [
    {
      id: 'monk',
      name: '僧侶',
      emoji: '🙏',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'bushi',
      name: '武士',
      emoji: '⚔️',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
  ],
  content: [
    {
      type: 'date',
      text: '鎌倉時代',
    },
    {
      type: 'narrator',
      text: '鎌倉時代には武士の気風を反映した力強い文化が生まれ、わかりやすい教えの<strong>鎌倉新仏教</strong>が民衆に広まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'bushi',
      text: '東大寺南大門の<strong>金剛力士像</strong>は<strong>運慶</strong>らが作った力強い彫刻だ。まさに武士の時代にふさわしい迫力がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'bushi',
      text: '<strong>平家物語</strong>は平氏の栄華と滅亡を描いた軍記物だ。<strong>琵琶法師</strong>が琵琶を弾きながら語り広めている。「祇園精舎の鐘の声…」',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'monk',
      text: '随筆文学も盛んです。鴨長明の<strong>方丈記</strong>や兼好法師の<strong>徒然草</strong>は、無常観を表した名作ですね',
    },
    {
      type: 'quiz',
      question: '東大寺南大門の金剛力士像を作った仏師は？',
      options: [
        { letter: 'A', text: '快慶', correct: false },
        { letter: 'B', text: '運慶', correct: true },
        { letter: 'C', text: '定朝', correct: false },
        { letter: 'D', text: '行基', correct: false },
      ],
      explanation: '<strong>正解はB「運慶」</strong>です。運慶は快慶らとともに東大寺南大門の金剛力士像を制作しました。力強く写実的な作風が特徴です。',
    },
    {
      type: 'narrator',
      text: '鎌倉時代には、念仏や題目を唱えるだけで救われるという<strong>鎌倉新仏教</strong>が広まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'monk',
      text: '<strong>法然</strong>は「南無阿弥陀仏」と念仏を唱えれば救われると<strong>浄土宗</strong>を開きました。弟子の<strong>親鸞</strong>はさらに信仰を深め<strong>浄土真宗</strong>を広めました',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'monk',
      text: '<strong>日蓮</strong>は「南無妙法蓮華経」と唱える<strong>日蓮宗</strong>（法華宗）を開き、<strong>一遍</strong>は踊り念仏で全国を巡り<strong>時宗</strong>を広めました',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'bushi',
      text: '我々武士には<strong>禅宗</strong>が人気だ。座禅で自らを鍛える教えが武士の精神に合っている。臨済宗と曹洞宗が広まった',
    },
    {
      type: 'quiz',
      question: '「南無阿弥陀仏」と念仏を唱えて救われると説き、浄土宗を開いたのは？',
      options: [
        { letter: 'A', text: '親鸞', correct: false },
        { letter: 'B', text: '日蓮', correct: false },
        { letter: 'C', text: '法然', correct: true },
        { letter: 'D', text: '一遍', correct: false },
      ],
      explanation: '<strong>正解はC「法然」</strong>です。法然は念仏を唱えれば誰でも極楽浄土に行けると説き、浄土宗を開きました。弟子の親鸞は浄土真宗を広めました。',
    },
    {
      type: 'end',
      points: [
        '<strong>金剛力士像</strong>：<strong>運慶</strong>らによる力強い彫刻（東大寺南大門）',
        '<strong>平家物語</strong>：<strong>琵琶法師</strong>が語り広めた軍記物。<strong>方丈記</strong>・<strong>徒然草</strong>も有名',
        '<strong>浄土宗</strong>（<strong>法然</strong>）・<strong>浄土真宗</strong>（<strong>親鸞</strong>）・<strong>日蓮宗</strong>（<strong>日蓮</strong>）・<strong>時宗</strong>（<strong>一遍</strong>）',
        '<strong>禅宗</strong>（臨済宗・曹洞宗）：座禅を重視し、武士に広まる',
      ],
    },
  ],
};
