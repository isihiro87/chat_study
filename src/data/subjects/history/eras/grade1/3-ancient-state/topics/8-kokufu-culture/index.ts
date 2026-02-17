import type { Topic } from '../../../../../../../types';

export const kokufuCulture: Topic = {
  id: 'kokufu-culture',
  eraId: 'ancient-state',
  name: '国風文化',
  subtitle: '仮名文字と日本独自の文化',
  icon: '📖',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '国風文化の特色',
          content:
            '遣唐使の停止後、唐の影響をもとに日本独自の国風文化が発達しました。仮名文字が生まれ、紫式部の源氏物語や清少納言の枕草子などの優れた文学作品が書かれました。',
          keyPoints: [
            '仮名文字：日本語を書き表す文字',
            '源氏物語：紫式部の長編物語',
            '枕草子：清少納言の随筆',
          ],
        },
        {
          title: '浄土信仰と芸術',
          content:
            '念仏を唱えて極楽浄土へ行くことを願う浄土信仰が広まり、藤原頼通が平等院鳳凰堂を建立しました。大和絵や十二単など日本風の文化が花開きました。',
          keyPoints: [
            '浄土信仰：極楽浄土への往生を願う',
            '平等院鳳凰堂：1053年に建立',
            '大和絵・十二単：日本風の美',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '国風文化', back: '唐の影響をもとに日本独自に発達した文化を何という？' },
      { id: 'fc2', front: '仮名文字', back: '日本語を書き表すために作られた文字は？' },
      { id: 'fc3', front: '浄土信仰', back: '念仏を唱えて極楽浄土へ行くことを願う信仰は？' },
      { id: 'fc4', front: '平等院鳳凰堂', back: '1053年に頼通が宇治に建立した建物は？' },
      { id: 'fc5', front: '日宋貿易', back: '平安時代に行われた、中国の商人との貿易は？' },
      { id: 'fc6', front: '源氏物語', back: '紫式部が書いた、貴族社会を描いた長編物語は？' },
      { id: 'fc7', front: '枕草子', back: '清少納言が宮中での生活などを綴った作品は？' },
      { id: 'fc8', front: '古今和歌集', back: '天皇の命令でえらんで作られた、最初の和歌集は？' },
      { id: 'fc9', front: '十二単', back: '平安貴族の女性が身に付けた正装は？' },
      { id: 'fc10', front: '大和絵', back: '国風文化において描かれた日本風の絵画は？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '紫式部が書いた、貴族社会を描いた長編物語は？',
          options: ['枕草子', '古事記', '源氏物語', '万葉集'],
          correctIndex: 2,
          explanation: '源氏物語は世界最古の長編小説ともいわれる紫式部の代表作です。',
        },
        {
          id: 'q2',
          question: '日本語を書き表すために作られた文字は？',
          options: ['漢字', '甲骨文字', '仮名文字', 'くさび形文字'],
          correctIndex: 2,
          explanation: '仮名文字（ひらがな・カタカナ）は漢字をもとに日本で作られました。',
        },
        {
          id: 'q3',
          question: '1053年に藤原頼通が宇治に建立した建物は？',
          options: ['東大寺', '唐招提寺', '法隆寺', '平等院鳳凰堂'],
          correctIndex: 3,
          explanation: '平等院鳳凰堂は浄土信仰に基づいて建立された美しい建物です。',
        },
      ],
    },
    chatId: 'kokufu-culture',
  },
};
