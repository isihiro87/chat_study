import type { Topic } from '../../../../../../../types';

export const russiaExpansion: Topic = {
  id: 'russia-expansion',
  eraId: 'modern-era',
  name: 'ロシアの拡大と発展',
  subtitle: '凍らない港を求めて',
  icon: '🐻',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '南下政策',
          content:
            '広大な領土を持つロシアの弱点は、冬に凍ってしまう港が多いことでした。そこで、一年中使える「不凍港」を求めて南へ勢力を広げようとする南下政策を推し進めました。',
          keyPoints: [
            '不凍港を求めて南へ拡大',
            '黒海・地中海への進出を目指す',
            'イギリス・フランスとの対立',
          ],
        },
        {
          title: 'クリミア戦争',
          content:
            'ロシアの南下政策は、地中海やアジアでの利権を守りたいイギリスやフランスとの間で激しい対立を生みました。1853年、クリミア半島をめぐってクリミア戦争が勃発し、ロシアは敗北しました。',
          keyPoints: [
            'クリミア戦争（1853-1856年）',
            'イギリス・フランス・オスマン帝国と対立',
            'ロシアの敗北と近代化の必要性',
          ],
        },
        {
          title: 'ロシアの改革',
          content:
            'クリミア戦争での敗北後、ロシアは近代化の必要性を痛感しました。農奴解放令を出すなど改革を進めましたが、西ヨーロッパとの差は大きく、後にロシア革命へとつながる社会問題を抱えていました。',
          keyPoints: [
            '農奴解放令（1861年）',
            '近代化の遅れ',
            '社会的矛盾の蓄積',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '南下政策',
        back: 'ロシアが不凍港を求めて南へ勢力を広げようとした政策は？',
        explanation: '冬に凍らない港を求めて、黒海や地中海への進出を目指した。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '不凍港',
        back: '冬でも凍らず一年中使える港を何という？',
        explanation: 'ロシアが南下政策で獲得を目指した重要な戦略拠点。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: 'クリミア戦争',
        back: 'ロシアの南下政策に対抗してイギリス・フランスなどと戦った戦争は？',
        explanation: '1853〜1856年、クリミア半島を舞台に戦われた。ロシアは敗北した。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '農奴解放令',
        back: 'クリミア戦争後、ロシアで出された農奴を解放する命令は？',
        explanation: '1861年、アレクサンドル2世が出した。ロシア近代化の第一歩。',
        difficulty: 'standard',
      },
      {
        id: 'fc5',
        front: 'オスマン帝国',
        back: 'ロシアの南下を阻止しようとした、トルコを中心とする帝国は？',
        explanation: 'イギリス・フランスと協力してクリミア戦争でロシアと戦った。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '黒海',
        back: 'ロシアが南下政策で目指した、トルコとの間にある海は？',
        explanation: 'ここから地中海へ出ることがロシアの悲願だった。',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'ロシアが不凍港を求めて南へ進出しようとした政策を何という？',
          options: ['鉄血政策', '開国政策', '南下政策', '植民地政策'],
          correctIndex: 2,
          explanation:
            '南下政策は、冬でも凍らない港を求めてロシアが進めた拡大政策です。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: 'ロシアが南下政策で獲得を目指した、冬でも凍らない港を何という？',
          options: ['軍港', '不凍港', '貿易港', '自由港'],
          correctIndex: 1,
          explanation:
            '不凍港とは冬でも凍らず一年中使える港のことで、ロシアにとって戦略的に重要でした。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: 'ロシアの南下政策に対抗して、1853年に起きた戦争は？',
          options: ['クリミア戦争', '南北戦争', 'アヘン戦争', '独立戦争'],
          correctIndex: 0,
          explanation:
            'クリミア戦争ではイギリス・フランス・オスマン帝国がロシアと戦い、ロシアは敗北しました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: 'クリミア戦争でロシアと戦った国の組み合わせとして正しいのは？',
          options: [
            'アメリカ・ドイツ・中国',
            'スペイン・ポルトガル・オランダ',
            'プロイセン・オーストリア・イタリア',
            'イギリス・フランス・オスマン帝国',
          ],
          correctIndex: 3,
          explanation:
            'ロシアの南下を阻止するため、イギリス・フランス・オスマン帝国が連合して戦いました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: 'クリミア戦争での敗北後、ロシアで出された改革は？',
          options: ['普通選挙の導入', '義務教育の開始', '三権分立の確立', '農奴解放令'],
          correctIndex: 3,
          explanation:
            '1861年、アレクサンドル2世が農奴解放令を出し、ロシア近代化の第一歩としました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'russia-expansion',
  },
};
