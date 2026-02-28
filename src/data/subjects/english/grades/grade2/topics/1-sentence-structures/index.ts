import type { Topic } from '../../../../../../../data/types';

export const sentenceStructures: Topic = {
  id: 'eng-sentence-structures',
  eraId: 'english-grade2',
  name: '5つの文構造',
  subtitle: 'SV / SVC / SVO / SVOO / SVOC',
  icon: '🏗️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'SV・SVC・SVO ってなに？',
          content:
            '英語の文には大きく分けて5つの形があるよ。まずは基本の3つ！ SV は「だれが」+「どうする」だけの文。SVC は「だれが」+「〜です」+「〜です」の後ろのことば。SVO は「だれが」+「どうする」+「〜を」にあたることば。SVC と SVO の見分けかたは「S = C になるかどうか」だよ！',
          keyPoints: [
            'SV: I run. = 私は走ります。（「だれが」+「どうする」だけ！）',
            'SVC: She is kind. = 彼女はやさしいです。（She = kind が成り立つ！）',
            'SVO: I play tennis. = 私はテニスをします。（I = tennis にはならない！）',
          ],
        },
        {
          title: 'SVOO・SVOC ってなに？',
          content:
            'SVOO は「〜に」にあたることばと「〜を」にあたることばの2つが並ぶ形。SVOC は「〜を」にあたることばを説明することばが続く形だよ。見分けかたは「後ろの2つが =（イコール）になるかどうか」！',
          keyPoints: [
            'SVOO: He gives me a book. = 彼は私に本をくれます。（me ≠ a book → SVOO）',
            'SVOC: They call him Ken. = 彼らは彼をケンと呼びます。（him = Ken → SVOC）',
            'SVOO でよく使う動詞: give（あげる）、teach（教える）、show（見せる）',
          ],
        },
        {
          title: '5つの形の見分けかた まとめ',
          content:
            '動詞の後ろに何があるかで形が決まるよ。何もなければ SV、「〜です」の後ろのことば（S=C）があれば SVC、「〜を」にあたることばがあれば SVO。2つ並んでいたら、= になれば SVOC、ならなければ SVOO だよ！',
          keyPoints: [
            '動詞の後ろに何もない → SV（I run.）',
            'S = C になる → SVC（She is kind.）',
            '後ろの2つが = にならない → SVOO（He gives me a book.）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-ss-fc1',
        front: 'SV',
        back: 'I run.（私は走ります。）\nこの文の形は？',
        hint: '「だれが」+「どうする」だけの文だよ',
        explanation: '動詞の後ろに何もないから SV だよ。',
      },
      {
        id: 'eng-ss-fc2',
        front: 'SVC',
        back: 'She is kind.（彼女はやさしいです。）\nこの文の形は？',
        hint: 'She = kind になるかな？',
        explanation: 'She = kind が成り立つから SVC だよ。',
      },
      {
        id: 'eng-ss-fc3',
        front: 'SVO',
        back: 'I play tennis.（私はテニスをします。）\nこの文の形は？',
        hint: 'I = tennis になる？ならない？',
        explanation: 'I = tennis にはならないから SVO だよ。',
      },
      {
        id: 'eng-ss-fc4',
        front: 'SVOO',
        back: 'He gives me a book.（彼は私に本をくれます。）\nこの文の形は？',
        hint: '「〜に」と「〜を」の2つがあるよ。me = a book になる？',
        explanation: 'me ≠ a book なので SVOO だよ。「〜に」「〜を」が並んでいるね。',
      },
      {
        id: 'eng-ss-fc5',
        front: 'SVOC',
        back: 'They call him Ken.（彼らは彼をケンと呼びます。）\nこの文の形は？',
        hint: 'him = Ken になる？',
        explanation: 'him = Ken が成り立つから SVOC だよ。',
      },
      {
        id: 'eng-ss-fc6',
        front: 'SVC',
        back: 'He became a doctor.（彼は医者になりました。）\nこの文の形は？',
        hint: 'He = a doctor になるかな？',
        explanation: 'He = a doctor が成り立つから SVC。become（〜になる）は SVC で使うよ。',
      },
      {
        id: 'eng-ss-fc7',
        front: 'SVOO',
        back: 'She teaches us English.（彼女は私たちに英語を教えます。）\nこの文の形は？',
        hint: 'us（私たちに）と English（英語を）の2つがあるよ',
        explanation: 'us ≠ English なので SVOO。teach は SVOO でよく使う動詞だよ。',
      },
      {
        id: 'eng-ss-fc8',
        front: 'SVOC',
        back: 'The news made her happy.（そのニュースは彼女をうれしくさせた。）\nこの文の形は？',
        hint: 'her = happy になる？',
        explanation: 'her = happy が成り立つから SVOC。make は SVOC でよく使う動詞だよ。',
      },
      {
        id: 'eng-ss-fc9',
        front: 'SV',
        back: 'Birds sing.（鳥たちは歌います。）\nこの文の形は？',
        hint: '動詞の後ろに何かある？',
        explanation: '動詞 sing の後ろに何もないから SV だよ。',
      },
      {
        id: 'eng-ss-fc10',
        front: 'SVO',
        back: 'She likes cats.（彼女はネコが好きです。）\nこの文の形は？',
        hint: 'She = cats になる？',
        explanation: 'She ≠ cats なので SVO だよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-ss-q1',
          question: '「I run.（私は走ります。）」はどの形？',
          options: ['SV', 'SVC', 'SVO', 'SVOO'],
          correctIndex: 0,
          explanation: '動詞の後ろに何もないから SV だよ。',
        },
        {
          id: 'eng-ss-q2',
          question: '「He is a student.（彼は生徒です。）」はどの形？',
          options: ['SV', 'SVC', 'SVO', 'SVOC'],
          correctIndex: 1,
          explanation: 'He = a student が成り立つから SVC だよ。',
        },
        {
          id: 'eng-ss-q3',
          question: '「She gave him a present.（彼女は彼にプレゼントをあげた。）」はどの形？',
          options: ['SVC', 'SVO', 'SVOO', 'SVOC'],
          correctIndex: 2,
          explanation: 'him（彼に）と a present（プレゼントを）の2つがあって、him ≠ a present なので SVOO だよ。',
        },
        {
          id: 'eng-ss-q4',
          question: '「We call her Yuki.（私たちは彼女をユキと呼びます。）」はどの形？',
          options: ['SVO', 'SVC', 'SVOO', 'SVOC'],
          correctIndex: 3,
          explanation: 'her = Yuki が成り立つから SVOC だよ。',
        },
        {
          id: 'eng-ss-q5',
          question: '「I like music.（私は音楽が好きです。）」はどの形？',
          options: ['SV', 'SVC', 'SVO', 'SVOO'],
          correctIndex: 2,
          explanation: 'I ≠ music なので SVO だよ。「〜を」にあたることばがあるね。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-ss-ex1',
          question: '次の文の形（SV / SVC / SVO / SVOO / SVOC）を答えよう。\n「She looks happy.（彼女はうれしそうです。）」',
          steps: [
            {
              title: 'Step 1: 主語と動詞をさがそう',
              content: 'S = She（彼女は）、V = looks（〜に見える）だね。',
              highlight: 'She looks',
            },
            {
              title: 'Step 2: 動詞の後ろのことばをチェック',
              content: '動詞 looks の後ろに happy があるね。',
              highlight: 'happy',
            },
            {
              title: 'Step 3: S = C になるかたしかめよう',
              content: 'She = happy（彼女 = うれしい）が成り立つ！ だから SVC だよ。look は「〜に見える」という意味のとき SVC になるんだ。',
              highlight: 'SVC',
            },
          ],
          answer: 'SVC（She = happy が成り立つので SVC）',
        },
        {
          id: 'eng-ss-ex2',
          question: '次の文の形（SV / SVC / SVO / SVOO / SVOC）を答えよう。\n「My mother made me a cake.（お母さんは私にケーキを作ってくれた。）」',
          steps: [
            {
              title: 'Step 1: 主語と動詞をさがそう',
              content: 'S = My mother（お母さんは）、V = made（作った）だね。',
              highlight: 'My mother made',
            },
            {
              title: 'Step 2: 動詞の後ろのことばをチェック',
              content: 'made の後ろに me（私に）と a cake（ケーキを）の2つがあるね。',
              highlight: 'me a cake',
            },
            {
              title: 'Step 3: 後ろの2つが = になるかたしかめよう',
              content: 'me = a cake？ 私 = ケーキ…？ ならないね！ だから SVOO だよ。「〜に」「〜を」が並んでいるパターン！',
              highlight: 'SVOO',
            },
          ],
          answer: 'SVOO（me ≠ a cake なので SVOO）',
        },
        {
          id: 'eng-ss-ex3',
          question: '次の文の形（SV / SVC / SVO / SVOO / SVOC）を答えよう。\n「The story made me sad.（その話は私を悲しくさせた。）」',
          steps: [
            {
              title: 'Step 1: 主語と動詞をさがそう',
              content: 'S = The story（その話は）、V = made（〜させた）だね。',
              highlight: 'The story made',
            },
            {
              title: 'Step 2: 動詞の後ろのことばをチェック',
              content: 'made の後ろに me（私を）と sad（悲しい）の2つがあるね。',
              highlight: 'me sad',
            },
            {
              title: 'Step 3: 後ろの2つが = になるかたしかめよう',
              content: 'me = sad？ 私 = 悲しい → なるね！ だから SVOC だよ。make は SVOO にも SVOC にもなるから、= になるかどうかで見分けよう！',
              highlight: 'SVOC',
            },
          ],
          answer: 'SVOC（me = sad が成り立つので SVOC）',
        },
      ],
    },
    chatId: 'eng-sentence-structures',
  },
};
