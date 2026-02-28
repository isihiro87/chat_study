import type { Topic } from '../../../../../../../data/types';

export const modalVerbs: Topic = {
  id: 'eng-modal-verbs',
  eraId: 'english-grade2',
  name: '助動詞',
  subtitle: 'can / must / have to / may / should',
  icon: '💪',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'can / must / have to のつかい方',
          content:
            '助動詞は動詞にいろいろな意味をプラスすることばだよ。助動詞のうしろの動詞はもとの形（何もつけない形）になるのがポイント！',
          keyPoints: [
            'can = 〜できる：I can swim. = 私は泳ぐことができます。',
            'must = 〜しなければならない：You must study. = あなたは勉強しなければなりません。',
            'have to = 〜しなければならない：I have to go. = 私は行かなければなりません。',
            'must と have to はほぼ同じ意味だけど、否定文の意味がちがう！',
            '助動詞のうしろの動詞は、いつでももとの形（何もつけない形）！',
          ],
        },
        {
          title: 'may / should のつかい方',
          content:
            'may は「〜してもよい」（許可）と「〜かもしれない」（推量）の2つの意味があるよ。should は「〜すべき」「〜したほうがいい」というアドバイスの意味だよ。',
          keyPoints: [
            'may（許可）= 〜してもよい：You may sit down. = 座ってもいいですよ。',
            'may（推量）= 〜かもしれない：It may rain tomorrow. = 明日雨が降るかもしれない。',
            'should = 〜すべき・〜したほうがいい：You should eat breakfast. = 朝ごはんを食べたほうがいいよ。',
          ],
        },
        {
          title: '助動詞の否定文・疑問文',
          content:
            '助動詞の否定文は助動詞のうしろに not をつけるだけ。疑問文は助動詞を文のいちばん最初にもってくるよ。',
          keyPoints: [
            "否定文：You must not run here. = ここで走ってはいけません。（must not = 〜してはいけない）",
            "否定文：You don't have to run. = 走らなくてもよい。（don't have to = 〜しなくてもよい）",
            'must not と don\'t have to は意味がちがうから注意！',
            '疑問文：Can you swim? = あなたは泳げますか？ — Yes, I can. / No, I can\'t.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-modal-fc1',
        front: 'can swim',
        back: 'I (　　).\n（私は泳ぐことができます。）',
        hint: '「〜できる」を表す助動詞は…？',
        explanation: 'can = 〜できる。I can swim.',
      },
      {
        id: 'eng-modal-fc2',
        front: 'must study',
        back: 'You (　　).\n（あなたは勉強しなければなりません。）',
        hint: '「〜しなければならない」を表す助動詞は…？',
        explanation: 'must = 〜しなければならない。You must study.',
      },
      {
        id: 'eng-modal-fc3',
        front: 'have to go',
        back: 'I (　　).\n（私は行かなければなりません。）',
        hint: 'must とほぼ同じ意味の表現は…？',
        explanation: 'have to = 〜しなければならない。must とほぼ同じ意味だよ。',
      },
      {
        id: 'eng-modal-fc4',
        front: 'may',
        back: 'You (　　) sit down.\n（座ってもいいですよ。）',
        hint: '「〜してもよい」は…？',
        explanation: 'may = 〜してもよい（許可の意味）。You may sit down.',
      },
      {
        id: 'eng-modal-fc5',
        front: 'may rain',
        back: 'It (　　) tomorrow.\n（明日雨が降るかもしれない。）',
        hint: '「〜かもしれない」は…？',
        explanation: 'may = 〜かもしれない（推量の意味）。It may rain.',
      },
      {
        id: 'eng-modal-fc6',
        front: 'should eat',
        back: 'You (　　) breakfast.\n（朝ごはんを食べたほうがいいよ。）',
        hint: '「〜したほうがいい」は…？',
        explanation: 'should = 〜すべき・〜したほうがいい。You should eat breakfast.',
      },
      {
        id: 'eng-modal-fc7',
        front: 'must not',
        back: 'You (　　) run here.\n（ここで走ってはいけません。）',
        hint: '「〜してはいけない」は must + not で…？',
        explanation: 'must not = 〜してはいけない。禁止の意味だよ。',
      },
      {
        id: 'eng-modal-fc8',
        front: "don't have to",
        back: 'You (　　) come tomorrow.\n（明日は来なくてもいいよ。）',
        hint: '「〜しなくてもよい」は…？',
        explanation: "don't have to = 〜しなくてもよい。must not（〜してはいけない）とは意味がちがうよ！",
      },
      {
        id: 'eng-modal-fc9',
        front: 'Can',
        back: '(　　) you play the piano?\n（あなたはピアノを弾けますか？）',
        hint: '「〜できますか？」と聞くには can を文の最初に…？',
        explanation: '助動詞の疑問文は、助動詞を文のいちばん最初にもってくるよ。',
      },
      {
        id: 'eng-modal-fc10',
        front: 'swim',
        back: 'She can (　　).\n（彼女は泳ぐことができます。）',
        hint: '助動詞のうしろの動詞はもとの形（何もつけない形）！',
        explanation: '助動詞のうしろは、いつでも動詞のもとの形だよ。swims ではなく swim！',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-modal-q1',
          question: '「You (　　) study hard.（あなたは一生懸命勉強しなければなりません。）」\nの (　　) に入るのは？',
          options: ['can', 'must', 'may', 'are'],
          correctIndex: 1,
          explanation: '「〜しなければならない」は must だよ。You must study hard.',
        },
        {
          id: 'eng-modal-q2',
          question: '「She can (　　) English.（彼女は英語を話すことができます。）」\nの (　　) に入るのは？',
          options: ['speaks', 'speaking', 'speak', 'spoke'],
          correctIndex: 2,
          explanation: '助動詞のうしろの動詞は、いつでももとの形（何もつけない形）だよ。speaks ではなく speak！',
        },
        {
          id: 'eng-modal-q3',
          question: '「You must not swim here.」の意味として正しいのは？',
          options: [
            'ここで泳がなくてもよい。',
            'ここで泳いではいけません。',
            'ここで泳ぐことができます。',
            'ここで泳ぐべきです。',
          ],
          correctIndex: 1,
          explanation: 'must not = 〜してはいけない。禁止の意味だよ。',
        },
        {
          id: 'eng-modal-q4',
          question: '「It (　　) rain tomorrow.（明日雨が降るかもしれない。）」\nの (　　) に入るのは？',
          options: ['can', 'must', 'may', 'should'],
          correctIndex: 2,
          explanation: '「〜かもしれない」は may だよ。It may rain tomorrow.',
        },
        {
          id: 'eng-modal-q5',
          question: '「You don\'t have to come.」の意味として正しいのは？',
          options: [
            '来てはいけません。',
            '来なくてもいいよ。',
            '来ることができます。',
            '来るべきです。',
          ],
          correctIndex: 1,
          explanation: "don't have to = 〜しなくてもよい。must not（〜してはいけない）とは意味がちがうから注意！",
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-modal-ex1',
          question: '次の日本語を英語にしよう。\n「私はピアノを弾くことができます。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は」→ 英語で I だね。',
              highlight: 'I',
            },
            {
              title: 'Step 2: 「〜できる」を表す助動詞をえらぼう',
              content: '「〜できる」は can だよ。',
              highlight: 'can',
            },
            {
              title: 'Step 3: 動詞はもとの形（何もつけない形）！',
              content: '「弾く」は play。助動詞のうしろだから、もとの形のままでOK！「ピアノを」は the piano だよ。',
              highlight: 'play the piano',
            },
          ],
          answer: 'I can play the piano.（私はピアノを弾くことができます。）',
        },
        {
          id: 'eng-modal-ex2',
          question: '次の日本語を英語にしよう。\n「あなたは朝ごはんを食べたほうがいいよ。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「あなたは」→ 英語で You だね。',
              highlight: 'You',
            },
            {
              title: 'Step 2: 「〜したほうがいい」の助動詞をえらぼう',
              content: '「〜したほうがいい」「〜すべき」は should だよ。',
              highlight: 'should',
            },
            {
              title: 'Step 3: のこりをつけよう',
              content: '「食べる」は eat、「朝ごはん」は breakfast だよ。',
              highlight: 'eat breakfast',
            },
          ],
          answer: 'You should eat breakfast.（あなたは朝ごはんを食べたほうがいいよ。）',
        },
        {
          id: 'eng-modal-ex3',
          question: 'must not と don\'t have to の意味のちがいを説明しよう。\nYou must not run here. と You don\'t have to run. はどうちがう？',
          steps: [
            {
              title: 'Step 1: must not の意味を確認しよう',
              content: 'You must not run here. = ここで走っては<strong>いけません</strong>。（禁止）',
              highlight: '〜してはいけない（禁止）',
            },
            {
              title: 'Step 2: don\'t have to の意味を確認しよう',
              content: "You don't have to run. = 走ら<strong>なくてもよい</strong>。（しなくてもいい）",
              highlight: '〜しなくてもよい',
            },
            {
              title: 'Step 3: ちがいをまとめよう',
              content: "must not は「ダメ！」（禁止）、don't have to は「しなくてもいいよ」（不要）。意味がまったくちがうので注意！",
              highlight: "must not = 禁止 ≠ don't have to = 不要",
            },
          ],
          answer: "must not = 〜してはいけない（禁止）、don't have to = 〜しなくてもよい（不要）。意味がまったくちがう！",
        },
      ],
    },
    chatId: 'eng-modal-verbs',
  },
};
