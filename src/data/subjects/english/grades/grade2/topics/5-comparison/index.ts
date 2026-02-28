import type { Topic } from '../../../../../../../data/types';

export const comparison: Topic = {
  id: 'eng-comparison',
  eraId: 'english-grade2',
  name: '比較',
  subtitle: '比較級 / 最上級 / as〜as',
  icon: '⚖️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '比較級（〜より…だ）',
          content:
            '2つのものを比べて「AはBより〜だ」と言いたいとき、比較級を使うよ。短いことばには -er をつけ、長いことばの前には more をつけるよ。',
          keyPoints: [
            '短いことば: tall → taller / old → older',
            '長いことば: beautiful → more beautiful / interesting → more interesting',
            'A is taller than B. = AはBより背が高い。',
            'This book is more interesting than that one. = この本はあの本よりおもしろい。',
            'than 〜 =「〜より」',
          ],
        },
        {
          title: '最上級（いちばん〜だ）と as〜as（同じくらい〜だ）',
          content:
            '3つ以上の中で「いちばん〜だ」と言いたいときは最上級を使うよ。短いことばには -est をつけ、長いことばの前には most をつけるよ。「同じくらい〜だ」は as〜as で表すよ。',
          keyPoints: [
            '短いことば: tall → tallest / old → oldest',
            '長いことば: beautiful → most beautiful / interesting → most interesting',
            'He is the tallest in his class. = 彼はクラスでいちばん背が高い。',
            '最上級の前にはふつう the をつける',
            'as〜as: She is as tall as her mother. = 彼女はお母さんと同じくらいの背の高さだ。',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-comp-fc1',
        front: 'taller',
        back: 'Tom is (　　) than Ken.\n（トムはケンより背が高い。）',
        hint: 'tall の比較級は…？',
        explanation: '短いことばの比較級は -er をつけるよ。tall → taller',
      },
      {
        id: 'eng-comp-fc2',
        front: 'more interesting',
        back: 'This book is (　　) than that one.\n（この本はあの本よりおもしろい。）',
        hint: 'interesting は長いことばだから、前に何かをつけるよ',
        explanation: '長いことばの比較級は前に more をつけるよ。more interesting',
      },
      {
        id: 'eng-comp-fc3',
        front: 'tallest',
        back: 'He is the (　　) in his class.\n（彼はクラスでいちばん背が高い。）',
        hint: 'tall の最上級は…？',
        explanation: '短いことばの最上級は -est をつけるよ。tall → tallest',
      },
      {
        id: 'eng-comp-fc4',
        front: 'most beautiful',
        back: 'This is the (　　) flower.\n（これはいちばん美しい花です。）',
        hint: 'beautiful は長いことばだから…？',
        explanation: '長いことばの最上級は前に most をつけるよ。most beautiful',
      },
      {
        id: 'eng-comp-fc5',
        front: 'as tall as',
        back: 'She is (　　) her mother.\n（彼女はお母さんと同じくらいの背の高さだ。）',
        hint: '「同じくらい〜だ」は…？',
        explanation: '「同じくらい〜だ」は as〜as で表すよ。as tall as',
      },
      {
        id: 'eng-comp-fc6',
        front: 'bigger',
        back: 'This box is (　　) than that one.\n（この箱はあの箱より大きい。）',
        hint: 'big の比較級は？ つづりに注意！',
        explanation: 'big → bigger。最後の文字を重ねて er をつけるよ。',
      },
      {
        id: 'eng-comp-fc7',
        front: 'better',
        back: 'This plan is (　　) than that one.\n（この計画はあの計画よりいい。）',
        hint: 'good の比較級はとくべつな形だよ',
        explanation: 'good → better。とくべつな形だから覚えよう。',
      },
      {
        id: 'eng-comp-fc8',
        front: 'best',
        back: 'She is the (　　) singer in our school.\n（彼女は私たちの学校でいちばん歌がうまい。）',
        hint: 'good の最上級はとくべつな形だよ',
        explanation: 'good → best。better → best のセットで覚えよう。',
      },
      {
        id: 'eng-comp-fc9',
        front: 'than',
        back: 'She is older (　　) he.\n（彼女は彼より年上だ。）',
        hint: '「〜より」を表すことばは…？',
        explanation: '「〜より」は than だよ。比較級 + than 〜 の形！',
      },
      {
        id: 'eng-comp-fc10',
        front: 'the',
        back: 'He is (　　) fastest runner.\n（彼はいちばん速い走者だ。）',
        hint: '最上級の前につけることばは…？',
        explanation: '最上級の前にはふつう the をつけるよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-comp-q1',
          question: '「Tom is (　　) than Ken.（トムはケンより背が高い。）」\nの (　　) に入るのは？',
          options: ['tall', 'taller', 'tallest', 'more tall'],
          correctIndex: 1,
          explanation: '「〜より背が高い」は比較級。短いことばだから -er をつけて taller だよ。',
        },
        {
          id: 'eng-comp-q2',
          question: '「This book is (　　) than that one.（この本はあの本よりおもしろい。）」\nの (　　) に入るのは？',
          options: ['interesting', 'interestinger', 'more interesting', 'most interesting'],
          correctIndex: 2,
          explanation: 'interesting は長いことばだから、前に more をつけるよ。more interesting',
        },
        {
          id: 'eng-comp-q3',
          question: '「She is the (　　) student in our class.（彼女はクラスでいちばん背が高い生徒だ。）」\nの (　　) に入るのは？',
          options: ['taller', 'tall', 'tallest', 'most tall'],
          correctIndex: 2,
          explanation: '「いちばん〜」は最上級。短いことばだから -est をつけて tallest だよ。前に the もわすれずに！',
        },
        {
          id: 'eng-comp-q4',
          question: '「She is (　　) old (　　) her sister.（彼女はお姉さんと同じくらいの年齢だ。）」\nの (　　) に入る組み合わせは？',
          options: ['more ... than', 'as ... as', 'the ... in', '-er ... than'],
          correctIndex: 1,
          explanation: '「同じくらい〜だ」は as〜as で表すよ。as old as だね。',
        },
        {
          id: 'eng-comp-q5',
          question: 'good の比較級・最上級として正しい組み合わせは？',
          options: [
            'gooder — goodest',
            'more good — most good',
            'better — best',
            'weller — wellest',
          ],
          correctIndex: 2,
          explanation: 'good の比較級は better、最上級は best。とくべつな形だから覚えよう！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-comp-ex1',
          question: '次の日本語を英語にしよう。\n「トムはケンより背が高い。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「トムは」→ 英語で Tom だね。',
              highlight: 'Tom',
            },
            {
              title: 'Step 2: 「〜より背が高い」を比較級にしよう',
              content: '「背が高い」= tall。2つを比べて「〜より」だから比較級にするよ。tall は短いことばだから -er をつけて taller だね。',
              highlight: 'is taller',
            },
            {
              title: 'Step 3: 「〜より」を表す than をつけよう',
              content: '「ケンより」→ than Ken をうしろにつけるよ。',
              highlight: 'than Ken',
            },
          ],
          answer: 'Tom is taller than Ken.（トムはケンより背が高い。）',
        },
        {
          id: 'eng-comp-ex2',
          question: '次の日本語を英語にしよう。\n「彼はクラスでいちばん背が高い。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼は」→ 英語で He だね。',
              highlight: 'He',
            },
            {
              title: 'Step 2: 「いちばん背が高い」を最上級にしよう',
              content: '「いちばん〜」だから最上級。tall は短いことばだから -est をつけて tallest。最上級の前には the をつけるよ。',
              highlight: 'is the tallest',
            },
            {
              title: 'Step 3: 「クラスで」をつけよう',
              content: '「クラスで」= in his class。「〜の中で」には in を使うよ。',
              highlight: 'in his class',
            },
          ],
          answer: 'He is the tallest in his class.（彼はクラスでいちばん背が高い。）',
        },
        {
          id: 'eng-comp-ex3',
          question: '次の日本語を英語にしよう。\n「この本はあの本と同じくらいおもしろい。」',
          steps: [
            {
              title: 'Step 1: 「何が？」をさがそう',
              content: '「この本は」→ 英語で This book だね。',
              highlight: 'This book',
            },
            {
              title: 'Step 2: 「同じくらいおもしろい」を as〜as にしよう',
              content: '「同じくらい〜だ」は as〜as で表すよ。as interesting as だね。',
              highlight: 'is as interesting as',
            },
            {
              title: 'Step 3: 比べる相手をつけよう',
              content: '「あの本」= that one。2つ目の as のうしろに置くよ。',
              highlight: 'that one',
            },
          ],
          answer: 'This book is as interesting as that one.（この本はあの本と同じくらいおもしろい。）',
        },
      ],
    },
    chatId: 'eng-comparison',
  },
};
