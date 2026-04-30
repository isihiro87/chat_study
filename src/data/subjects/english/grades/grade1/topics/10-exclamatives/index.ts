import type { Topic } from '../../../../../../../data/types';

export const exclamatives: Topic = {
  id: 'eng-exclamatives',
  eraId: 'english-grade1',
  name: '感嘆文',
  subtitle: 'How ~! / What a ~!',
  icon: '❗',
  order: 12,
  content: {
    explanation: {
      sections: [
        {
          title: '感嘆文ってなに？',
          content:
            '「なんて〜なのでしょう！」のように、おどろきや感動を表す文を感嘆文というよ。中1英語では、How で始める形と What で始める2つの形を覚えよう。',
          keyPoints: [
            'How + 形容詞！ = 「なんて〜！」（短い感嘆）',
            'What + a/an + 形容詞 + 名詞！ = 「なんて〜な…でしょう！」',
            '文末には「!」（感嘆符・エクスクラメーションマーク）をつける',
          ],
        },
        {
          title: '主語 + be動詞 を最後につける完成形',
          content:
            '「この犬はなんてかわいいのでしょう」のように、何のことかを具体的に言うときは、後ろに「主語 + be動詞」をつけるよ。',
          keyPoints: [
            'How + 形容詞 + 主語 + be動詞！ → How cute this dog is!',
            'What + a/an + 形容詞 + 名詞 + 主語 + be動詞！ → What an old house this is!',
            'be動詞は主語に合わせる（this/he/she → is、these/they → are）',
          ],
        },
        {
          title: 'a / an のつけ方と複数名詞の注意',
          content:
            'What の後ろの a / an は、a/an の使い方と同じルール。形容詞の最初の音が母音なら an、子音なら a。複数名詞のときは a / an をつけない。',
          keyPoints: [
            'a nice bag（nice の n は子音）',
            'an interesting book / an old house（母音で始まる形容詞の前は an）',
            'What cute cats these are!（cats は複数なので a なし）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // 例文ベース 基本（fc1〜4）
      {
        id: 'eng-exc-fc1',
        front: 'How',
        back: '(　　) big!\n（なんて大きいのでしょう。）',
        hint: '形容詞だけを強調する感嘆文の最初の語は？',
        explanation: '「なんて〜！」と形容詞を強めるときは How + 形容詞！。',
        difficulty: 'basic',
      },
      {
        id: 'eng-exc-fc2',
        front: 'How',
        back: '(　　) beautiful!\n（なんて美しいのでしょう。）',
        hint: '形容詞だけを強める感嘆文の形は？',
        explanation: 'How + 形容詞！の形。文末には「!」をつける。',
        difficulty: 'basic',
      },
      {
        id: 'eng-exc-fc3',
        front: 'a',
        back: 'What (　　) nice bag!\n（なんてすてきなかばんでしょう。）',
        hint: 'bag は1つの数えられる名詞。子音 n で始まる nice の前は？',
        explanation: 'What + 冠詞 + 形容詞 + 名詞！。nice は子音 n で始まるので a を使う。',
        difficulty: 'basic',
      },
      {
        id: 'eng-exc-fc4',
        front: 'an',
        back: 'What (　　) interesting book!\n（なんておもしろい本でしょう。）',
        hint: 'interesting は母音 i で始まる。a と an どちら？',
        explanation: 'interesting は母音の音で始まるので an を使う。an interesting book。',
        difficulty: 'basic',
      },
      // 例文ベース 標準（fc5〜8）
      {
        id: 'eng-exc-fc5',
        front: 'is',
        back: 'How cute this dog (　　)!\n（この犬はなんてかわいいのでしょう。）',
        hint: 'this dog は単数。be動詞は？',
        explanation: 'How + 形容詞 + 主語 + be動詞！の形。this dog は単数なので is。',
        difficulty: 'standard',
      },
      {
        id: 'eng-exc-fc6',
        front: 'an',
        back: 'What (　　) old house this is!\n（これはなんて古い家でしょう。）',
        hint: 'old は母音 o で始まる。a と an どちら？',
        explanation: 'old は母音の音で始まるので an を使う。What an old house this is!',
        difficulty: 'standard',
      },
      {
        id: 'eng-exc-fc7',
        front: 'What',
        back: '(　　) a good tennis player he is!\n（彼はなんて上手なテニス選手でしょう。）',
        hint: '名詞 tennis player を含めた感嘆文の最初の語は？',
        explanation: 'What + a + 形容詞 + 名詞 + 主語 + be動詞！。「彼は」を後ろにつけて完成。',
        difficulty: 'standard',
      },
      {
        id: 'eng-exc-fc8',
        front: 'How',
        back: '(　　) beautiful that flower is!\n（その花はなんて美しいのでしょう。）',
        hint: '形容詞 beautiful を強めて、後ろに主語と be動詞をつけるよ。最初の語は？',
        explanation: 'How + 形容詞 + 主語 + be動詞！の形。that flower は単数なので is。',
        difficulty: 'standard',
      },
      // 例文ベース 発展（fc9〜10）
      {
        id: 'eng-exc-fc9',
        front: 'are',
        back: 'What cute cats these (　　)!\n（これらはなんてかわいい猫たちでしょう。）',
        hint: 'these は複数。be動詞は？ また cats は複数なので a/an はつけない',
        explanation: 'What + 形容詞 + 複数名詞 + 主語 + be動詞！。cats は複数なので a/an なし、these は複数なので are。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-exc-fc10',
        front: 'a',
        back: 'What (　　) wonderful singer she is!\n（彼女はなんてすばらしい歌手でしょう。）',
        hint: 'wonderful は子音 w で始まる単数名詞 singer の前。a と an どちら？',
        explanation: 'wonderful は子音 w で始まるので a を使う。singer は単数名詞。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        // 4択 基本（q1〜2）
        {
          id: 'eng-exc-q1',
          question: '「なんて大きいのでしょう。」に合う英文を選びなさい。',
          options: [
            'What big!',
            'What a big!',
            'How a big!',
            'How big!',
          ],
          correctIndex: 3,
          explanation: '形容詞だけを強く言うときは How + 形容詞！。',
          difficulty: 'basic',
        },
        {
          id: 'eng-exc-q2',
          question: '「なんてすてきなペンでしょう。」に合う英文を選びなさい。',
          options: [
            'What a nice pen!',
            'How a nice pen!',
            'What nice!',
            'How pen nice!',
          ],
          correctIndex: 0,
          explanation: '名詞 pen があるので What + a + 形容詞 + 名詞！の形にする。',
          difficulty: 'basic',
        },
        // 4択 標準（q3〜5）
        {
          id: 'eng-exc-q3',
          question: '空欄に入る語として正しいものを選びなさい。\n(　　) an interesting story!',
          options: ['How', 'What', 'Is', 'This'],
          correctIndex: 1,
          explanation: 'an interesting story という名詞のまとまりがあるので What を使う。',
          difficulty: 'standard',
        },
        {
          id: 'eng-exc-q4',
          question: '「この車はなんて古いのでしょう。」に合う英文を選びなさい。',
          options: [
            'What old this car is!',
            'How old this car is!',
            'What an old this car is!',
            'How an old car is!',
          ],
          correctIndex: 1,
          explanation: 'old という形容詞を強めているので How old this car is!。後ろに主語 + be動詞。',
          difficulty: 'standard',
        },
        {
          id: 'eng-exc-q5',
          question: '「これはなんて美しい絵でしょう。」に合う英文を選びなさい。',
          options: [
            'How beautiful picture this is!',
            'What beautiful this picture is!',
            'What a beautiful picture this is!',
            'How a beautiful picture this is!',
          ],
          correctIndex: 2,
          explanation: 'a beautiful picture という名詞のまとまりがあるので What を使う。What + a + 形容詞 + 名詞 + 主語 + be動詞！',
          difficulty: 'standard',
        },
        // 4択 発展（q6）
        {
          id: 'eng-exc-q6',
          question: '「これらはなんてかわいい犬たちでしょう。」に合う英文を選びなさい。',
          options: [
            'What cute dogs these are!',
            'What a cute dogs these are!',
            'How cute dogs these are!',
            'What cute dog these are!',
          ],
          correctIndex: 0,
          explanation: 'dogs は複数名詞なので a/an はつけない。What + 形容詞 + 複数名詞 + 主語 + be動詞！',
          difficulty: 'advanced',
        },
        // 並べ替え 基本（q7〜8）
        {
          id: 'eng-exc-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「なんて小さいのでしょう。」という英文を作ろう。',
          words: ['small', 'how'],
          correctOrder: [1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「How small!」が正解。How + 形容詞！の語順。文末は実際には「!」だが、UI上は「.」と表示される点に注意。',
          difficulty: 'basic',
        },
        {
          id: 'eng-exc-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「なんてよい考えでしょう。」という英文を作ろう。',
          words: ['a', 'idea', 'good', 'what'],
          correctOrder: [3, 0, 2, 1],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「What a good idea!」が正解。What + a + 形容詞 + 名詞！の語順。idea は単数名詞なので a を使う。',
          difficulty: 'basic',
        },
        // 並べ替え 標準（q9〜11）
        {
          id: 'eng-exc-q9',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「この花はなんて美しいのでしょう。」という英文を作ろう。',
          words: ['beautiful', 'is', 'this flower', 'how'],
          correctOrder: [3, 0, 2, 1],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「How beautiful this flower is!」が正解。How + 形容詞 + 主語 + be動詞！の語順。',
          difficulty: 'standard',
        },
        {
          id: 'eng-exc-q10',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「これはなんておもしろい映画でしょう。」という英文を作ろう。',
          words: ['movie', 'this', 'interesting', 'what', 'an', 'is'],
          correctOrder: [3, 4, 2, 0, 1, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「What an interesting movie this is!」が正解。interesting は母音の音で始まるので an を使う。',
          difficulty: 'standard',
        },
        {
          id: 'eng-exc-q11',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼はなんて親切な先生でしょう。」という英文を作ろう。',
          words: ['teacher', 'kind', 'he', 'what', 'a', 'is'],
          correctOrder: [3, 4, 1, 0, 2, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「What a kind teacher he is!」が正解。teacher は単数名詞なので a kind teacher。',
          difficulty: 'standard',
        },
        // 並べ替え 発展（q12）
        {
          id: 'eng-exc-q12',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「これらはなんて美しい鳥たちでしょう。」という英文を作ろう。',
          words: ['birds', 'beautiful', 'these', 'what', 'are'],
          correctOrder: [3, 1, 0, 2, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「What beautiful birds these are!」が正解。birds は複数名詞なので a/an は使わない。these は複数なので are。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-exc-ex1',
          question: '次の日本語を英語にしよう。\n「なんてすてきなかばんでしょう。」',
          steps: [
            {
              title: 'Step 1: 名詞があるので What を使う',
              content: '「すてきなかばん」=「すてきな」+「かばん」。名詞があるので What で始める。',
              highlight: 'What',
            },
            {
              title: 'Step 2: a / an の使い分けを判断',
              content: 'nice は子音 n で始まるので a を使う。',
              highlight: 'a nice',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: '「!」を最後につけるのを忘れずに。',
              highlight: 'What a nice bag!',
            },
          ],
          answer: 'What a nice bag!（なんてすてきなかばんでしょう。）',
        },
        {
          id: 'eng-exc-ex2',
          question: '次の日本語を英語にしよう。\n「この犬はなんてかわいいのでしょう。」',
          steps: [
            {
              title: 'Step 1: 形容詞だけを強めるので How',
              content: '「なんてかわいい」=「かわいい」だけを強めるので How を使う。',
              highlight: 'How cute',
            },
            {
              title: 'Step 2: 主語 + be動詞 を後ろにつける',
              content: '「この犬は」= this dog、be動詞は単数なので is。',
              highlight: 'this dog is',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'How + 形容詞 + 主語 + be動詞！の語順。',
              highlight: 'How cute this dog is!',
            },
          ],
          answer: 'How cute this dog is!（この犬はなんてかわいいのでしょう。）',
        },
        {
          id: 'eng-exc-ex3',
          question: '次の日本語を英語にしよう。\n「これらはなんて美しい鳥たちでしょう。」',
          steps: [
            {
              title: 'Step 1: 名詞があるので What',
              content: '「美しい鳥たち」と名詞 birds があるので What で始める。',
              highlight: 'What',
            },
            {
              title: 'Step 2: 複数名詞には a/an をつけない',
              content: 'birds は複数名詞。a/an はつけずに What beautiful birds とする。',
              highlight: 'What beautiful birds',
            },
            {
              title: 'Step 3: 主語 + be動詞 を後ろにつける',
              content: '「これらは」= these、複数なので are。',
              highlight: 'these are',
            },
          ],
          answer: 'What beautiful birds these are!（これらはなんて美しい鳥たちでしょう。）',
        },
      ],
    },
    chatId: 'eng-exclamatives',
  },
};
