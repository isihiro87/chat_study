import type { Topic } from '../../../../../../../data/types';

export const contactClause: Topic = {
  id: 'eng-contact-clause',
  eraId: 'english-grade3',
  name: '接触節',
  subtitle: '名詞 + 主語 + 動詞 でうしろから説明する形',
  icon: '📎',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '接触節ってなに？',
          content:
            '接触節は、名詞のうしろに「主語＋動詞」をそのままくっつけて説明する形だよ。〜ingや過去分詞を使わなくても、名詞のうしろから説明を加えることができるんだ。',
          keyPoints: [
            'The book I bought yesterday was interesting. = 私がきのう買った本はおもしろかったです。',
            'The girl he likes is Yuki. = 彼が好きな女の子はユキです。',
            'The movie we watched was exciting. = 私たちが見た映画はワクワクしました。',
          ],
        },
        {
          title: 'that/whichを省略した形',
          content:
            '接触節は、that や which を省略した形とも考えられるよ。The book that I bought = The book I bought のように、thatをとっても意味は同じ。会話では省略するのがふつうだよ。',
          keyPoints: [
            'The book that I bought = The book I bought（that を省略）',
            'The movie which we watched = The movie we watched（which を省略）',
            '会話では省略するのがふつう → 接触節をよく使うよ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-cc-fc1',
        front: 'the book I bought yesterday',
        back: '「私がきのう買った本」を英語にすると？',
        hint: '名詞のうしろに「主語＋動詞」をくっつけるよ',
        explanation: 'book のうしろに I bought yesterday をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc2',
        front: 'the girl he likes',
        back: '「彼が好きな女の子」を英語にすると？',
        hint: 'girl のうしろに「彼が好きな」をくっつけよう',
        explanation: 'girl のうしろに he likes をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc3',
        front: 'the movie we watched',
        back: '「私たちが見た映画」を英語にすると？',
        hint: 'movie のうしろに「私たちが見た」をくっつけよう',
        explanation: 'movie のうしろに we watched をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc4',
        front: 'the cake she made',
        back: '「彼女が作ったケーキ」を英語にすると？',
        hint: 'cake のうしろに「彼女が作った」をくっつけよう',
        explanation: 'cake のうしろに she made をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc5',
        front: 'the song I heard on the radio',
        back: '「私がラジオで聞いた歌」を英語にすると？',
        hint: 'song のうしろに「私がラジオで聞いた」をくっつけよう',
        explanation: 'song のうしろに I heard on the radio をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc6',
        front: 'the teacher I like the best',
        back: '「私がいちばん好きな先生」を英語にすると？',
        hint: 'teacher のうしろに「私がいちばん好きな」をくっつけよう',
        explanation: 'teacher のうしろに I like the best をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc7',
        front: 'the place they visited',
        back: '「彼らが訪れた場所」を英語にすると？',
        hint: 'place のうしろに「彼らが訪れた」をくっつけよう',
        explanation: 'place のうしろに they visited をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc8',
        front: 'that / which を省略した形',
        back: '接触節は何を省略した形？',
        hint: '名詞と「主語＋動詞」の間にあった言葉は…？',
        explanation: '接触節は that / which を省略した形だよ。会話では省略するのがふつう。',
      },
      {
        id: 'eng-cc-fc9',
        front: 'the bag my mother gave me',
        back: '「お母さんがくれたカバン」を英語にすると？',
        hint: 'bag のうしろに「お母さんがくれた」をくっつけよう',
        explanation: 'bag のうしろに my mother gave me をくっつけるよ。',
      },
      {
        id: 'eng-cc-fc10',
        front: 'the picture you took',
        back: '「あなたが撮った写真」を英語にすると？',
        hint: 'picture のうしろに「あなたが撮った」をくっつけよう',
        explanation: 'picture のうしろに you took をくっつけるよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-cc-q1',
          question: '「私がきのう買った本はおもしろかった。」を英語にすると？',
          options: [
            'The book I bought yesterday was interesting.',
            'The I bought yesterday book was interesting.',
            'The book buying I yesterday was interesting.',
            'The book bought I yesterday was interesting.',
          ],
          correctIndex: 0,
          explanation: '接触節は名詞のうしろに「主語＋動詞」をくっつけるよ。the book I bought yesterday が正しいよ。',
        },
        {
          id: 'eng-cc-q2',
          question: '「彼が好きな女の子はユキです。」を英語にすると？',
          options: [
            'The girl likes he is Yuki.',
            'The girl he likes is Yuki.',
            'The he likes girl is Yuki.',
            'The girl he liking is Yuki.',
          ],
          correctIndex: 1,
          explanation: 'girl のうしろに he likes をくっつけて The girl he likes is Yuki. だよ。',
        },
        {
          id: 'eng-cc-q3',
          question: '「The movie (　　) was exciting.（私たちが見た映画はワクワクした。）」の (　　) に入るのは？',
          options: [
            'we watching',
            'watched we',
            'we watched',
            'watching we',
          ],
          correctIndex: 2,
          explanation: '名詞のうしろに「主語＋動詞」の順でくっつけるよ。we watched が正しいよ。',
        },
        {
          id: 'eng-cc-q4',
          question: '「The book that I read」と同じ意味の文はどれ？',
          options: [
            'The book I read',
            'The book reading I',
            'The I read book',
            'The book which reading I',
          ],
          correctIndex: 0,
          explanation: 'that を省略すると接触節になるよ。The book I read が正しいよ。',
        },
        {
          id: 'eng-cc-q5',
          question: '「彼女が作ったケーキはおいしかった。」を英語にすると？',
          options: [
            'The cake making she was delicious.',
            'The she made cake was delicious.',
            'The cake made she was delicious.',
            'The cake she made was delicious.',
          ],
          correctIndex: 3,
          explanation: 'cake のうしろに she made をくっつけて The cake she made was delicious. だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-cc-ex1',
          question: '次の日本語を英語にしよう。\n「私がきのう買った本はおもしろかった。」',
          steps: [
            {
              title: 'Step 1: 「本はおもしろかった」を英語にしよう',
              content: '「本」は the book、「おもしろかった」は was interesting だよ。',
              highlight: 'The book was interesting.',
            },
            {
              title: 'Step 2: 「私がきのう買った」をくっつけよう',
              content: '「私がきのう買った」は I bought yesterday。これを book のうしろにそのまま置くよ。',
              highlight: 'I bought yesterday',
            },
            {
              title: 'Step 3: 完成！',
              content: 'The book のうしろに I bought yesterday を入れるだけ！',
              highlight: 'The book I bought yesterday',
            },
          ],
          answer: 'The book I bought yesterday was interesting.\n（私がきのう買った本はおもしろかった。）',
        },
        {
          id: 'eng-cc-ex2',
          question: '次の日本語を英語にしよう。\n「彼が好きな女の子はユキです。」',
          steps: [
            {
              title: 'Step 1: 「女の子はユキです」を英語にしよう',
              content: '「女の子」は the girl、「ユキです」は is Yuki だよ。',
              highlight: 'The girl is Yuki.',
            },
            {
              title: 'Step 2: 「彼が好きな」をくっつけよう',
              content: '「彼が好きな」は he likes。これを girl のうしろに置くよ。',
              highlight: 'he likes',
            },
            {
              title: 'Step 3: 完成！',
              content: 'The girl のうしろに he likes を入れれば完成！',
              highlight: 'The girl he likes is Yuki.',
            },
          ],
          answer: 'The girl he likes is Yuki.\n（彼が好きな女の子はユキです。）',
        },
        {
          id: 'eng-cc-ex3',
          question: 'thatを省略して接触節にしよう。\n「The movie that we watched was exciting.」',
          steps: [
            {
              title: 'Step 1: thatを見つけよう',
              content: 'The movie that we watched の中の that を見つけよう。movie と we の間にあるね。',
              highlight: 'that',
            },
            {
              title: 'Step 2: thatを取ろう',
              content: 'that をそのまま取るだけでOK！ことばの並べ方はかわらないよ。',
              highlight: 'The movie we watched',
            },
            {
              title: 'Step 3: 確認しよう',
              content: '名詞（movie）のうしろに「主語＋動詞」（we watched）がそのままくっついている形になったね。これが接触節！',
              highlight: 'The movie we watched was exciting.',
            },
          ],
          answer: 'The movie we watched was exciting.\n（私たちが見た映画はワクワクした。）',
        },
      ],
    },
    chatId: 'eng-contact-clause',
  },
};
