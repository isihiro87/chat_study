import type { HistoryChat } from '../../../../../../../history-chat/types';

export const russiaExpansionChat: HistoryChat = {
  id: 'russia-expansion',
  icon: '🐻',
  title: 'ロシアの拡大と発展',
  subtitle: '〜近代〜 凍らない港を求めて',
  characters: [
    {
      id: 'russia',
      name: 'ロシア',
      emoji: '🇷🇺',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'britain',
      name: 'イギリス',
      emoji: '🇬🇧',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '19世紀のロシア',
    },
    {
      type: 'narrator',
      text: '広大な領土を持つロシアには、冬に凍ってしまう港が多いという弱点がありました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'russia',
      text: '一年中使える港が欲しい！南へ進出して不凍港を手に入れるぞ！',
    },
    {
      type: 'narrator',
      text: 'ロシアは<strong>不凍港</strong>を求めて<strong>南下政策</strong>を進め、黒海・地中海への進出を目指しました。',
    },
    {
      type: 'quiz',
      question: 'ロシアが不凍港を求めて南へ進出しようとした政策は？',
      options: [
        { letter: 'A', text: '南下政策', correct: true },
        { letter: 'B', text: '鉄血政策', correct: false },
        { letter: 'C', text: '開国政策', correct: false },
        { letter: 'D', text: '植民地政策', correct: false },
      ],
      explanation:
        '<strong>正解はA「南下政策」</strong>です。冬でも凍らない港を求めて南へ勢力を広げようとしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'britain',
      text: 'ロシアの南下は認められない！地中海やアジアの利権を守らねば！',
    },
    {
      type: 'narrator',
      text: '1853年、<strong>クリミア戦争</strong>が勃発。イギリス・フランス・オスマン帝国と戦ったロシアは敗北しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'russia',
      text: '敗北した...近代化を進めなければ。まずは農奴を解放しよう',
    },
    {
      type: 'narrator',
      text: '1861年、<strong>農奴解放令</strong>が出されました。ロシア近代化の第一歩でしたが、西ヨーロッパとの差は大きいままでした。',
    },
    {
      type: 'quiz',
      question: 'クリミア戦争後、ロシアで出された改革は？',
      options: [
        { letter: 'A', text: '徴兵制', correct: false },
        { letter: 'B', text: '農奴解放令', correct: true },
        { letter: 'C', text: '義務教育', correct: false },
        { letter: 'D', text: '普通選挙', correct: false },
      ],
      explanation:
        '<strong>正解はB「農奴解放令」</strong>です。1861年、アレクサンドル2世がロシア近代化のために出しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>南下政策</strong>：不凍港を求めて南へ拡大',
        '<strong>クリミア戦争</strong>（1853-1856年）でロシア敗北',
        '<strong>農奴解放令</strong>（1861年）でロシア近代化の開始',
        '西ヨーロッパとの差は依然として大きかった',
      ],
    },
  ],
};
