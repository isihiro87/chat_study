import type { Topic } from '../../../../../../../data/types';

export const beVerbs: Topic = {
  id: 'eng-be-verbs',
  eraId: 'english-grade1',
  name: 'be動詞',
  subtitle: 'am / is / are の使い分けをマスター',
  icon: '🔤',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'am / is / are ってなに？',
          content:
            '英語で「〜です」「〜にいる」と言いたいとき、am・is・are を使うよ。この3つをまとめて「be動詞」と呼ぶんだ。どれを使うかは「だれが」で決まるよ！',
          keyPoints: [
            'I（私）のとき → am をつかう（I am a student. = 私は生徒です。）',
            'he / she / it（1人のとき）→ is をつかう（She is kind. = 彼女はやさしいです。）',
            'you / we / they（あなた・2人いじょう）→ are をつかう（They are happy. = 彼らはうれしいです。）',
          ],
        },
        {
          title: '「〜じゃない」「〜ですか？」の言い方',
          content:
            '「〜じゃない」は、am / is / are のうしろに not をつけるだけでOK！「〜ですか？」と聞きたいときは、am / is / are を文のいちばん最初にもってくるよ。',
          keyPoints: [
            "「〜じゃない」の例: She is not a teacher. = 彼女は先生じゃないです。（短く言うと She isn't a teacher.）",
            '「〜ですか？」の例: Is she a teacher? = 彼女は先生ですか？',
            "答え方: Yes, she is.（はい） / No, she isn't.（いいえ）",
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-be-fc1',
        front: 'am',
        back: 'I (　　) a student.\n（私は生徒です。）',
        hint: '「私 = I」のときのbe動詞は…？',
        explanation: 'I のときは、いつも am だよ。',
      },
      {
        id: 'eng-be-fc2',
        front: 'is',
        back: 'She (　　) kind.\n（彼女はやさしいです。）',
        hint: '彼女は1人だよね。1人のときは…？',
        explanation: 'he / she / it（1人・1つ）のときは is だよ。',
      },
      {
        id: 'eng-be-fc3',
        front: 'are',
        back: 'They (　　) happy.\n（彼らはうれしいです。）',
        hint: '「彼ら」は何人もいるよね。2人いじょうのときは…？',
        explanation: 'you / we / they（あなた・2人いじょう）のときは are だよ。',
      },
      {
        id: 'eng-be-fc4',
        front: "I'm not",
        back: 'I am not をみじかく言うと？',
        hint: "I am は I'm になるよ。そこに not をつけると…？",
        explanation: "I am not → I'm not とみじかくできるよ。",
      },
      {
        id: 'eng-be-fc5',
        front: "isn't",
        back: 'is not をみじかく言うと？',
        hint: 'is と not をくっつけてみよう',
        explanation: "is not → isn't",
      },
      {
        id: 'eng-be-fc6',
        front: "aren't",
        back: 'are not をみじかく言うと？',
        hint: 'are と not をくっつけてみよう',
        explanation: "are not → aren't",
      },
      {
        id: 'eng-be-fc7',
        front: 'Are',
        back: '(　　) you a student?\n（あなたは生徒ですか？）',
        hint: '「〜ですか？」のときは be動詞をいちばん前に！you のときのbe動詞は…？',
        explanation: 'you のbe動詞は are。「〜ですか？」だから Are をいちばん前に出すよ。',
      },
      {
        id: 'eng-be-fc8',
        front: 'Is',
        back: '(　　) he from Japan?\n（彼は日本しゅっしんですか？）',
        hint: '「彼」は1人だよね。1人のときのbe動詞を、いちばん前に出そう！',
        explanation: 'he は1人なので is。「〜ですか？」だから Is をいちばん前に出すよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-be-q1',
          question: '「I (　　) a student.（私は生徒です。）」\nの (　　) に入るのは？',
          options: ['am', 'is', 'are', 'do'],
          correctIndex: 0,
          explanation: '「私 = I」のときは、いつも am だよ。',
        },
        {
          id: 'eng-be-q2',
          question: '「She (　　) from Tokyo.（彼女は東京しゅっしんです。）」\nの (　　) に入るのは？',
          options: ['am', 'is', 'are', 'do'],
          correctIndex: 1,
          explanation: 'She（彼女）は1人だから is を使うよ。',
        },
        {
          id: 'eng-be-q3',
          question: '「(　　) you happy?（あなたはうれしいですか？）」\nの (　　) に入るのは？',
          options: ['Am', 'Is', 'Are', 'Do'],
          correctIndex: 2,
          explanation: 'you のbe動詞は are。「〜ですか？」だからいちばん前に出して Are you happy? だよ。',
        },
        {
          id: 'eng-be-q4',
          question: '「He is not tall.（彼はせが高くない。）」をみじかくした形で正しいのは？',
          options: ["He's not tall.", "He amn't tall.", "He aren't tall.", "He don't tall."],
          correctIndex: 0,
          explanation: "He is not は He's not や He isn't とみじかくできるよ。",
        },
        {
          id: 'eng-be-q5',
          question: '「Are they students?（彼らは生徒ですか？）」に「はい」で答えるとき、正しいのは？',
          options: [
            'Yes, they are.',
            'Yes, they is.',
            'Yes, they do.',
            'Yes, it is.',
          ],
          correctIndex: 0,
          explanation: '「彼ら = they」のbe動詞は are だから、Yes, they are. だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-be-ex1',
          question: '次の日本語を英語にしよう。\n「私は生徒です。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は 生徒です」の中で「だれが？」にあたるのは「私」だね。英語で「私」は I だよ。',
              highlight: 'I',
            },
            {
              title: 'Step 2: I に合う「〜です」をえらぼう',
              content: '「〜です」は英語でbe動詞を使うよ。I のときは am だったね！',
              highlight: 'am',
            },
            {
              title: 'Step 3: のこりのことばをつけよう',
              content: '「生徒」は英語で student。「1人の生徒」だから a をつけて a student にするよ。',
              highlight: 'a student',
            },
          ],
          answer: 'I am a student.（私は生徒です。）',
        },
        {
          id: 'eng-be-ex2',
          question: '次の文を「〜じゃない」の文にしよう。\nShe is a teacher.（彼女は先生です。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'She is a teacher. の中で、be動詞（am/is/are のどれか）をさがすと… is があるね！',
              highlight: 'is',
            },
            {
              title: 'Step 2: is のうしろに not をつけよう',
              content: '「〜じゃない」にするには、is のうしろに not を入れるだけだよ。',
              highlight: 'is not',
            },
            {
              title: 'Step 3: みじかい形も覚えよう！',
              content: "is not は isn't とみじかくできるよ。テストではどっちでもOK！",
              highlight: "isn't",
            },
          ],
          answer: "She is not a teacher. = She isn't a teacher.\n（彼女は先生ではありません。）",
        },
        {
          id: 'eng-be-ex3',
          question: '次の文を「〜ですか？」の文にして、Yes で答えよう。\nYou are from Japan.（あなたは日本出身です。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'You are from Japan. の中で、be動詞をさがすと… are があるね！',
              highlight: 'are',
            },
            {
              title: 'Step 2: are を文のいちばん最初にもっていこう',
              content: 'are を You の前にもってきて、おわりに ？ をつければ「〜ですか？」の完成！',
              highlight: 'Are you',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: '「あなたは〜？」と聞かれたら「私は〜」と答えるよね。だから you → I にかえて答えるよ。',
              highlight: 'Yes, I am.',
            },
          ],
          answer: 'Are you from Japan? — Yes, I am.\n（あなたは日本しゅっしんですか？ — はい、そうです。）',
        },
      ],
    },
    chatId: 'eng-be-verbs',
  },
};
