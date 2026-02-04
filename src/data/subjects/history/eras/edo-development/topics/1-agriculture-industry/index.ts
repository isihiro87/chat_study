import type { Topic } from '../../../../../../types';

export const agricultureIndustry: Topic = {
  id: 'agriculture-industry',
  eraId: 'edo-development',
  name: '新田開発と産業の発展',
  subtitle: '農業技術の進歩と商工業の成長',
  icon: '🌾',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '農業の発展',
          content: '江戸時代には新田開発が盛んに行われ、耕地面積が大幅に増加しました。備中ぐわや千歯こきなどの農具の改良、干鰯などの金肥の使用により、農業生産力が飛躍的に向上しました。',
          keyPoints: [
            '新田開発で耕地面積が倍増',
            '備中ぐわ・千歯こきなど農具の改良',
            '干鰯・油かすなどの金肥の普及',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '新田開発',
        back: '江戸幕府や藩が年貢増収のために進めた農地開発は？',
        explanation: '用水路の整備や干拓により、耕地面積は秀吉時代の約2倍に拡大した。',
      },
      {
        id: 'fc2',
        front: '備中ぐわ',
        back: '鉄製で土を深く耕すことができる農具は？',
        explanation: '先が分かれた形状で、従来の平ぐわより効率よく深く耕せた。',
      },
      {
        id: 'fc3',
        front: '千歯こき',
        back: '稲からもみを効率的に取り外すための農具は？',
        explanation: '従来のこきばしに代わって用いられ、脱穀作業を大幅に効率化した。',
      },
      {
        id: 'fc4',
        front: '干鰯',
        back: 'いわしを原料とする肥料は？',
        explanation: '商品作物の栽培を支えた、江戸時代を代表する高い効果をもつ肥料。',
      },
      {
        id: 'fc5',
        front: '商品作物',
        back: '現金を得るために栽培された作物を何という？',
        explanation: '木綿や菜種などが代表で、農家の貨幣収入源となった。',
      },
      {
        id: 'fc6',
        front: 'いわし漁',
        back: '千葉県九十九里浜で盛んに行われた漁は？',
        explanation: '地引き網漁が広まり、干鰯の原料となるいわしが大量に水揚げされた。',
      },
      {
        id: 'fc7',
        front: '佐渡金山',
        back: '17世紀に世界一の産出量を誇った新潟県の金山は？',
        explanation: '幕府の直轄領として、坑道の掘削や精錬技術が発達した。',
      },
      {
        id: 'fc8',
        front: '金座',
        back: '金貨を鋳造するために江戸幕府が設置した組織は？',
        explanation: '江戸などの要地に置かれ、慶長小判などの貨幣を鋳造した。',
      },
      {
        id: 'fc9',
        front: '寛永通宝',
        back: '幕府が全国に流通させた統一的な銅銭は？',
        explanation: '銭貨の国内自給を可能にし、それまで多く使われていた明銭に代わって流通した。',
      },
      {
        id: 'fc10',
        front: '農書',
        back: '農業の知識や技術がまとめられ出版された書物は？',
        explanation: '17世紀末から出版が盛んになり、最新技術が全国に広まった。',
      },
      {
        id: 'fc11',
        front: '塩田',
        back: '海水を利用して塩を生産するための施設は？',
        explanation: '海水を利用して塩を生産する施設として塩田が各地に作られた。',
      },
      {
        id: 'fc12',
        front: '唐箕',
        back: 'もみともみがらを選別するために使われた農具は？',
        explanation: '風を起こして重さの違いで選別する、効率的な選別用具。',
      },
      {
        id: 'fc13',
        front: '南部鉄器',
        back: '17世紀後半に盛岡藩が奨励した伝統工芸品は？',
        explanation: '岩手県の特産物で、現在も国の伝統的工芸品に指定されている。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '江戸時代に稲の脱穀を効率化した農具は？',
          options: ['備中ぐわ', '千歯こき', '唐箕', '水車'],
          correctIndex: 1,
          explanation: '千歯こきは、歯の間に稲穂を通して脱穀する道具です。',
        },
      ],
    },
    chatId: 'agriculture-industry',
  },
};
