import type { Topic } from '../../../../../../../data/types';

export const pastTense: Topic = {
  id: 'eng-past-tense',
  eraId: 'english-grade1',
  name: '過去形と過去進行形',
  subtitle: 'was / were / played / was playing',
  icon: '⏪',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: 'be動詞と一般動詞の過去形',
          content:
            '「昔のこと」を言うときは動詞の形を過去形（昔のことを表す形）にするよ。be動詞は am/is → was、are → were にかわるよ。一般動詞はおしりに ed をつけるのが基本だけど、go → went のように特別な形もあるよ。',
          keyPoints: [
            'be動詞: am/is → was / are → were',
            'I was busy yesterday. = 私は昨日忙しかったです。',
            '一般動詞: play → played / like → liked / study → studied',
            'I played tennis yesterday. = 私は昨日テニスをしました。',
            '特別な形: go → went / have → had / eat → ate / see → saw',
          ],
        },
        {
          title: '過去の否定文・疑問文と過去進行形',
          content:
            "一般動詞の過去の「〜しなかった」は didn't + もとの形、「〜しましたか？」は Did をいちばん最初に置くよ。過去進行形（昔〜していた）は was/were + ing の形だよ。",
          keyPoints: [
            "「〜しなかった」: I didn't play tennis. = 私はテニスをしませんでした。",
            '「〜しましたか？」: Did you play tennis? — Yes, I did.',
            '過去進行形: I was watching TV at 8. = 8時にテレビを見ていました。',
            'They were playing soccer then. = そのときサッカーをしていました。',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-past-fc1',
        front: 'was',
        back: 'I (　　) busy yesterday.\n（私は昨日忙しかったです。）',
        hint: '「昔のこと」だから am の過去形は…？',
        explanation: 'am の過去形は was だよ。I was busy.',
      },
      {
        id: 'eng-past-fc2',
        front: 'were',
        back: 'They (　　) happy yesterday.\n（彼らは昨日うれしかったです。）',
        hint: 'They のbe動詞 are の過去形は…？',
        explanation: 'are の過去形は were だよ。They were happy.',
      },
      {
        id: 'eng-past-fc3',
        front: 'played',
        back: 'I (　　) tennis yesterday.\n（私は昨日テニスをしました。）',
        hint: '昨日のことだから play の過去形は…？',
        explanation: 'play + ed = played。ふつうは ed をつけるよ。',
      },
      {
        id: 'eng-past-fc4',
        front: 'studied',
        back: 'She (　　) English last night.\n（彼女は昨夜英語を勉強しました。）',
        hint: 'study は y で終わるから…？',
        explanation: 'y を i にかえて ed をつけるよ。study → studied',
      },
      {
        id: 'eng-past-fc5',
        front: 'went',
        back: 'I (　　) to the park.\n（私は公園に行きました。）',
        hint: 'go の過去形はとくべつな形だよ',
        explanation: 'go → went。とくべつな形なので覚えよう。',
      },
      {
        id: 'eng-past-fc6',
        front: 'had',
        back: 'She (　　) a dog.\n（彼女はイヌを飼っていました。）',
        hint: 'have の過去形はとくべつな形だよ',
        explanation: 'have → had。とくべつな形なので覚えよう。',
      },
      {
        id: 'eng-past-fc7',
        front: "didn't",
        back: 'I (　　) play tennis yesterday.\n（私は昨日テニスをしませんでした。）',
        hint: '過去の「〜しなかった」は…？',
        explanation: "don't の過去は didn't だよ。動詞はもとの形にもどるよ。",
      },
      {
        id: 'eng-past-fc8',
        front: 'Did',
        back: '(　　) you study last night?\n（あなたは昨夜勉強しましたか？）',
        hint: '過去の「〜しましたか？」は…？',
        explanation: 'Do の過去は Did だよ。いちばん前に置くよ。',
      },
      {
        id: 'eng-past-fc9',
        front: 'was watching',
        back: 'I (　　) TV at 9.\n（私は9時にテレビを見ていました。）',
        hint: '「そのとき〜していた」は was/were + ing だよ',
        explanation: '過去進行形は was/were + ing。I was watching.',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-past-q1',
          question: '「I (　　) busy yesterday.（私は昨日忙しかったです。）」\nの (　　) に入るのは？',
          options: ['am', 'is', 'was', 'were'],
          correctIndex: 2,
          explanation: 'I のbe動詞 am の過去形は was だよ。I was busy.',
        },
        {
          id: 'eng-past-q2',
          question: '「She (　　) English last night.（彼女は昨夜英語を勉強しました。）」\nの (　　) に入るのは？',
          options: ['study', 'studies', 'studied', 'studying'],
          correctIndex: 2,
          explanation: '昨夜のことだから過去形にするよ。study → studied（y を i にかえて ed）',
        },
        {
          id: 'eng-past-q3',
          question: 'go の過去形として正しいのは？',
          options: ['goed', 'gos', 'went', 'going'],
          correctIndex: 2,
          explanation: 'go の過去形はとくべつで went だよ。覚えてしまおう。',
        },
        {
          id: 'eng-past-q4',
          question: '「Did you play tennis yesterday?（あなたは昨日テニスをしましたか？）」に「はい」で答えるとき、正しいのは？',
          options: [
            'Yes, I played.',
            'Yes, I did.',
            'Yes, I do.',
            'Yes, I was.',
          ],
          correctIndex: 1,
          explanation: 'Did で聞かれたら did で答えるよ。Yes, I did.',
        },
        {
          id: 'eng-past-q5',
          question: '「He (　　) reading a book at 8 last night.（彼は昨夜8時に本を読んでいました。）」\nの (　　) に入るのは？',
          options: ['is', 'was', 'were', 'did'],
          correctIndex: 1,
          explanation: '「そのとき〜していた」は過去進行形。He だから was + ing だよ。He was reading.',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-past-ex1',
          question: '次の日本語を英語にしよう。\n「私は昨日テニスをしました。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は」→ 英語で I だね。',
              highlight: 'I',
            },
            {
              title: 'Step 2: 「どうした？」を過去形にしよう',
              content: '「テニスをした」→ 「する」は play。昨日のことだから ed をつけて played だよ。',
              highlight: 'played',
            },
            {
              title: 'Step 3: のこりをつけよう',
              content: '「テニスを」は tennis、「昨日」は yesterday。文のおわりにつけるよ。',
              highlight: 'tennis yesterday',
            },
          ],
          answer: 'I played tennis yesterday.（私は昨日テニスをしました。）',
        },
        {
          id: 'eng-past-ex2',
          question: '次の文を「〜しなかった」の文にしよう。\nHe watched TV last night.（彼は昨夜テレビを見ました。）',
          steps: [
            {
              title: 'Step 1: 「だれが？」をたしかめよう',
              content: '「だれが？」→ He（彼）だね。',
              highlight: 'He',
            },
            {
              title: "Step 2: didn't を入れよう",
              content: "過去の「〜しなかった」は didn't を使うよ。watched → watch にもどすのをわすれずに！",
              highlight: "didn't watch",
            },
            {
              title: 'Step 3: 完成！',
              content: "didn't に過去の意味が入っているから、動詞はもとの形にもどるよ。",
              highlight: "He didn't watch TV last night.",
            },
          ],
          answer: "He didn't watch TV last night.（彼は昨夜テレビを見ませんでした。）",
        },
        {
          id: 'eng-past-ex3',
          question: '次の日本語を英語にしよう。\n「彼女はそのとき音楽を聴いていました。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼女は」→ 英語で She だね。「そのとき〜していた」は過去進行形だよ。',
              highlight: 'She was',
            },
            {
              title: 'Step 2: 動詞を ing 形にしよう',
              content: '「聴く」は listen。そのまま ing をつけて listening だよ。',
              highlight: 'listening',
            },
            {
              title: 'Step 3: のこりをつけよう',
              content: '「音楽を」は to music。「そのとき」は then で文のおわりにつけるよ。',
              highlight: 'to music then',
            },
          ],
          answer: 'She was listening to music then.（彼女はそのとき音楽を聴いていました。）',
        },
      ],
    },
    chatId: 'eng-past-tense',
  },
};
