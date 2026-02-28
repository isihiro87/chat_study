import type { Topic } from '../../../../../../../data/types';

export const presentParticipleModifier: Topic = {
  id: 'eng-present-participle-modifier',
  eraId: 'english-grade3',
  name: '現在分詞による後置修飾',
  subtitle: '名詞のうしろから「〜している…」と説明を加える形',
  icon: '🏷️',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '〜ingで名詞をうしろから説明しよう',
          content:
            '現在分詞（〜ing）を使うと、名詞のうしろから「〜している」という説明を加えることができるよ。過去分詞の「〜された」とセットで覚えよう！',
          keyPoints: [
            'the boy running in the park = 公園で走っている男の子',
            'the girl playing the piano = ピアノを弾いている女の子',
            'the man standing over there = あそこに立っている男の人',
          ],
        },
        {
          title: '〜ingと過去分詞のちがい',
          content:
            '〜ing は「〜している」、過去分詞は「〜された」。説明される名詞が自分で動いているなら 〜ing、誰かにされているなら過去分詞を使うよ。',
          keyPoints: [
            '〜ing →「〜している」（自分で動いている）: the girl singing a song = 歌を歌っている女の子',
            '過去分詞 →「〜された」（誰かにされている）: the song sung by the girl = その女の子に歌われた歌',
            '迷ったら「自分で動いてる？」「誰かにされてる？」で判断しよう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-prpm-fc1',
        front: 'the boy running in the park',
        back: '「公園で走っている男の子」を英語にすると？',
        hint: '「走っている」は run の〜ing形 running だよ',
        explanation: 'boy のうしろに running in the park を置いて説明するよ。',
      },
      {
        id: 'eng-prpm-fc2',
        front: 'the girl playing the piano',
        back: '「ピアノを弾いている女の子」を英語にすると？',
        hint: '「弾いている」は play の〜ing形 playing だよ',
        explanation: 'girl のうしろに playing the piano を置くよ。',
      },
      {
        id: 'eng-prpm-fc3',
        front: 'the man standing over there',
        back: '「あそこに立っている男の人」を英語にすると？',
        hint: '「立っている」は stand の〜ing形 standing だよ',
        explanation: 'man のうしろに standing over there を置くよ。',
      },
      {
        id: 'eng-prpm-fc4',
        front: 'the girl singing a song',
        back: '「歌を歌っている女の子」を英語にすると？',
        hint: '「歌っている」は sing の〜ing形 singing だよ',
        explanation: 'girl のうしろに singing a song を置くよ。',
      },
      {
        id: 'eng-prpm-fc5',
        front: 'the cat sleeping on the sofa',
        back: '「ソファで寝ている猫」を英語にすると？',
        hint: '「寝ている」は sleep の〜ing形 sleeping だよ',
        explanation: 'cat のうしろに sleeping on the sofa を置くよ。',
      },
      {
        id: 'eng-prpm-fc6',
        front: 'the woman talking on the phone',
        back: '「電話で話している女の人」を英語にすると？',
        hint: '「話している」は talk の〜ing形 talking だよ',
        explanation: 'woman のうしろに talking on the phone を置くよ。',
      },
      {
        id: 'eng-prpm-fc7',
        front: '〜ing（現在分詞）',
        back: '名詞が「自分で動いている」とき使うのは？\n（〜ingと過去分詞のどっち？）',
        hint: '「〜している」を表す形は…？',
        explanation: '「〜している」= 自分で動いている → 〜ing（現在分詞）を使うよ。',
      },
      {
        id: 'eng-prpm-fc8',
        front: '過去分詞',
        back: '名詞が「誰かにされている」とき使うのは？\n（〜ingと過去分詞のどっち？）',
        hint: '「〜された」を表す形は…？',
        explanation: '「〜された」= 誰かにされている → 過去分詞を使うよ。',
      },
      {
        id: 'eng-prpm-fc9',
        front: 'the children swimming in the pool',
        back: '「プールで泳いでいる子どもたち」を英語にすると？',
        hint: '「泳いでいる」は swim の〜ing形 swimming だよ',
        explanation: 'children のうしろに swimming in the pool を置くよ。',
      },
      {
        id: 'eng-prpm-fc10',
        front: 'the dog sitting by the door',
        back: '「ドアのそばに座っている犬」を英語にすると？',
        hint: '「座っている」は sit の〜ing形 sitting だよ',
        explanation: 'dog のうしろに sitting by the door を置くよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-prpm-q1',
          question: '「ピアノを弾いている女の子はユキです。」を英語にすると？',
          options: [
            'The girl playing the piano is Yuki.',
            'The playing the piano girl is Yuki.',
            'The girl played the piano is Yuki.',
            'The girl play the piano is Yuki.',
          ],
          correctIndex: 0,
          explanation: '「弾いている」は〜ing形 playing。girl のうしろに playing the piano を置くよ。',
        },
        {
          id: 'eng-prpm-q2',
          question: '「あそこに立っている男の人」を英語にすると？',
          options: [
            'the man stood over there',
            'the standing over there man',
            'the man standing over there',
            'the man stand over there',
          ],
          correctIndex: 2,
          explanation: '「立っている」は〜ing形 standing。man のうしろに standing over there を置くよ。',
        },
        {
          id: 'eng-prpm-q3',
          question: '「ソファで寝ている猫を見て。」を英語にすると？',
          options: [
            'Look at the cat slept on the sofa.',
            'Look at the cat sleeping on the sofa.',
            'Look at the sleeping on the sofa cat.',
            'Look at the cat sleep on the sofa.',
          ],
          correctIndex: 1,
          explanation: '猫は自分で寝ているから〜ing形を使うよ。cat のうしろに sleeping on the sofa を置くよ。',
        },
        {
          id: 'eng-prpm-q4',
          question: '「ボールで壊された窓」を英語にすると？（〜ingと過去分詞のどちら？）',
          options: [
            'the window breaking by the ball',
            'the window broken by the ball',
            'the window broke by the ball',
            'the window breaks by the ball',
          ],
          correctIndex: 1,
          explanation: '窓は「壊された」もの（誰かにされている）だから過去分詞 broken を使うよ。',
        },
        {
          id: 'eng-prpm-q5',
          question: '次のうち、〜ing（現在分詞）を使うべき文はどれ？',
          options: [
            '英語で書かれた本',
            '彼女に歌われた歌',
            '公園で走っている男の子',
            'お母さんに作られたケーキ',
          ],
          correctIndex: 2,
          explanation: '「走っている」は自分で動いているから〜ing を使うよ。ほかは全部「〜された」だから過去分詞を使うよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-prpm-ex1',
          question: '次の日本語を英語にしよう。\n「公園で走っている男の子はケンです。」',
          steps: [
            {
              title: 'Step 1: 「男の子はケンです」を英語にしよう',
              content: '「男の子はケンです」は The boy is Ken. だね。',
              highlight: 'The boy is Ken.',
            },
            {
              title: 'Step 2: 「公園で走っている」を〜ingで作ろう',
              content: '「走っている」は自分で動いているから〜ing形を使うよ。run → running。「公園で」は in the park だよ。',
              highlight: 'running in the park',
            },
            {
              title: 'Step 3: boy のうしろに入れよう',
              content: 'running in the park を boy のうしろに入れると完成！',
              highlight: 'The boy running in the park',
            },
          ],
          answer: 'The boy running in the park is Ken.\n（公園で走っている男の子はケンです。）',
        },
        {
          id: 'eng-prpm-ex2',
          question: '次の日本語を英語にしよう。\n「電話で話している女の人は私の母です。」',
          steps: [
            {
              title: 'Step 1: 「女の人は私の母です」を英語にしよう',
              content: '「女の人」は the woman、「私の母です」は is my mother だよ。',
              highlight: 'The woman is my mother.',
            },
            {
              title: 'Step 2: 「電話で話している」を〜ingで作ろう',
              content: '「話している」は自分で動いているから〜ing形。talk → talking。「電話で」は on the phone だよ。',
              highlight: 'talking on the phone',
            },
            {
              title: 'Step 3: woman のうしろに入れよう',
              content: 'talking on the phone を woman のうしろに入れると完成！',
              highlight: 'The woman talking on the phone',
            },
          ],
          answer: 'The woman talking on the phone is my mother.\n（電話で話している女の人は私の母です。）',
        },
        {
          id: 'eng-prpm-ex3',
          question: '〜ingと過去分詞のどちらを使う？\n「歌を歌っている女の子」と「その女の子に歌われた歌」',
          steps: [
            {
              title: 'Step 1: 「歌を歌っている女の子」を考えよう',
              content: '女の子は自分で歌っている → 〜ing を使うよ。the girl singing a song だね。',
              highlight: 'the girl singing a song',
            },
            {
              title: 'Step 2: 「その女の子に歌われた歌」を考えよう',
              content: '歌は「歌われた」もの（誰かにされている） → 過去分詞を使うよ。the song sung by the girl だね。',
              highlight: 'the song sung by the girl',
            },
            {
              title: 'Step 3: 判断のコツ',
              content: '「自分で動いてる？」→ 〜ing ／「誰かにされてる？」→ 過去分詞。名詞が主役で動いているかどうかで判断しよう！',
              highlight: '〜ing / 過去分詞',
            },
          ],
          answer: '歌を歌っている女の子 = the girl singing a song\nその女の子に歌われた歌 = the song sung by the girl',
        },
      ],
    },
    chatId: 'eng-present-participle-modifier',
  },
};
