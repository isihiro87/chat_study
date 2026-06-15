import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

type Difficulty = 'basic' | 'standard' | 'advanced';

interface WordEntry {
  word: string;
  meaning: string;
  difficulty?: Difficulty;
  note?: string;
}

interface LessonSpec {
  lesson: number;
  topicId: string;
  chatId: string;
  name: string;
  subtitle: string;
  icon: string;
  order: number;
  sections: {
    title: string;
    content: string;
    keyPoints: string[];
  }[];
  words: WordEntry[];
  quiz: {
    question: string;
    options: [string, string, string, string];
    correctIndex: 0 | 1 | 2 | 3;
    explanation: string;
    difficulty?: Difficulty;
  }[];
}

interface FormEntry {
  form: string;
  meaning: string;
}

const REPO_ROOT = resolve(import.meta.dirname, '..');
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content', 'english', '01-english-grade1');
const LINE_QUESTIONS_FILE = join(REPO_ROOT, 'data', 'line-questions', 'english-g1.json');
const LEGACY_HELLO_DIR = join(REPO_ROOT, 'data', 'content', 'english', '01-hello');

const important = new Set([
  'favorite',
  'character',
  'symbol',
  'usually',
  'practice',
  'How many ...?',
  'a lot of',
  'one of',
  "they're",
  'nervous',
  'right',
  'front',
  'turn',
  "blog",
  "guide",
  "met",
]);

function word(word: string, meaning: string, note?: string): WordEntry {
  return {
    word,
    meaning,
    note,
    difficulty: important.has(word) ? 'standard' : 'basic',
  };
}

const lessons: LessonSpec[] = [
  {
    lesson: 1,
    topicId: 'vocab-lesson1',
    chatId: 'eng-vocab-lesson1',
    name: 'Hello, Everyone! の単語',
    subtitle: '自己紹介・好きなもの・学校生活の語彙',
    icon: '👋',
    order: 0,
    sections: [
      {
        title: '自己紹介で使うことば',
        content:
          '名前・出身・好きなものを伝える基本語が中心です。call me、from、Japanese sweets のように、短い自己紹介でそのまま使える形で覚えます。',
        keyPoints: [
          'Call me Eddy. の call は「電話する」ではなく「呼ぶ」。me は「私を」。',
          "I'm from South Africa. の from は「出身」を表す。",
          'Japanese は「日本の」「日本語の」。国名由来の語なので大文字で始める。',
        ],
      },
      {
        title: '好きなもの・趣味のことば',
        content:
          'love、watch、fan、rugby、comic、anime など、好きなものや趣味を話す語をまとめます。too、with、often も文を自然に広げる重要語です。',
        keyPoints: [
          'I often watch rugby with my friends. は often、watch、with をまとめて確認。',
          "don't は do not の短縮形。一般動詞の否定で使う。",
          'too は文末に置いて「〜もまた」を表す。',
        ],
      },
      {
        title: '学校生活のことば',
        content:
          'school、art、English、math、lunch、lesson など、学校生活で使う語を確認します。take は「取る」だけでなく「授業を受ける」にも使います。',
        keyPoints: [
          'take art lessons で「美術の授業を受ける」。',
          'English は教科名・言語名なので大文字で始める。',
          'How about you? の about は「〜について」のイメージ。',
        ],
      },
    ],
    words: [
      word('love', '〜が大好きである、〜を愛している'),
      word('watch', '〜を見る'),
      word('call', '〜を…と呼ぶ、名づける'),
      word('number', '数、数字'),
      word('Japanese', '日本の、日本人の、日本語の'),
      word('want to', '〜したい'),
      word('join', '〜に加わる、参加する'),
      word('club', 'クラブ、部'),
      word('and', '〜と…'),
      word('from', '〜から、〜出身の'),
      word('everyone', 'みなさん、みんな、だれでも'),
      word('me', '私を、私に'),
      word('too', '〜もまた、そのうえ'),
      word('South Africa', '南アフリカ共和国'),
      word('sweet(s)', '甘い菓子、キャンディー／和菓子'),
      word('with', '〜といっしょに'),
      word('often', 'しばしば、よく'),
      word('but', 'しかし、けれども'),
      word("don’t", 'do not の短縮形'),
      word('great', 'すばらしい、とても楽しい'),
      word('friend', '友達'),
      word('no', 'いいえ、いや、だめだ'),
      word('not', '〜でない、〜しない'),
      word('oh', 'まあ、あら、ああ、おや'),
      word('fan', 'ファン'),
      word('rugby', 'ラグビー'),
      word('about', '〜について、〜に関する'),
      word('draw', '線画をかく'),
      word('so', 'だから、それで、では'),
      word('school', '学校'),
      word('art', '芸術、美術'),
      word('how', 'どのように、どんなようす'),
      word('take', '〜を受ける、〜を利用する'),
      word('swimming', '水泳'),
      word('English', '英語'),
      word('bike', '自転車'),
      word('math', '数学'),
      word('lunch', '昼食'),
      word('anime', '日本のアニメ'),
      word('lesson', '授業、レッスン'),
      word('comic', 'マンガ'),
    ],
    quiz: [
      {
        question: '「Call me Eddy.」の call の意味として正しいものは？',
        options: ['電話する', '呼ぶ', '見る', '参加する'],
        correctIndex: 1,
        explanation: 'Call me Eddy. は「私をエディと呼んで」。この call は「呼ぶ」の意味です。',
      },
      {
        question: "I'm from South Africa. の from の意味は？",
        options: ['〜について', '〜といっしょに', '〜出身の', '〜もまた'],
        correctIndex: 2,
        explanation: "I'm from ... は「私は…出身です」。from は出発点・出身を表します。",
      },
      {
        question: '「私はよく友達とラグビーを見る」に合う語の組み合わせは？',
        options: ['often / with', 'too / from', 'not / about', 'so / no'],
        correctIndex: 0,
        explanation: 'I often watch rugby with my friends. の形で、often は「よく」、with は「〜といっしょに」。',
      },
      {
        question: '「do not」の短縮形は？',
        options: ["can't", "don't", "it's", "who's"],
        correctIndex: 1,
        explanation: "do not は don't。' は省略された文字がある場所を示す印です。",
      },
    ],
  },
  {
    lesson: 2,
    topicId: 'vocab-lesson2',
    chatId: 'eng-vocab-lesson2',
    name: '身の回り・教室・できることの単語',
    subtitle: '身の回り・教室・できることの語彙',
    icon: '🎒',
    order: 1,
    sections: [
      {
        title: '身の回りのもの',
        content:
          'notebook、fruit、food、train など、身近なものを表す名詞を確認します。our、your、it などの代名詞まわりも重要です。',
        keyPoints: [
          'our は「私たちの」、your は「あなたの／あなたたちの」。',
          'it は「それは／それが」。前に出たものを受ける。',
          'some は「いくつかの／少しの」。数えられる名詞にも数えられない名詞にも使う。',
        ],
      },
      {
        title: '人・学校・生活の語',
        content:
          'teacher、father、parent(s)、class、team など、人や学校生活に関する語をまとめます。Mr. と Ms. は敬称としてテストにも出やすい表記です。',
        keyPoints: [
          'Mr. は男性、Ms. は女性に使う敬称。ピリオドを忘れない。',
          'teacher は「先生」、parent(s) は「親／両親」。',
          'class は「学級・組・クラス」。lesson とは区別する。',
        ],
      },
      {
        title: 'できることを言う語',
        content:
          'can、can’t、speak、read、cook、make、drink など、できることや行動を表す語を確認します。',
        keyPoints: [
          'can は「〜できる」。後ろの動詞は原形。',
          "can't は cannot の短縮形で「〜できない」。",
          'speak Chinese / speak English のように、言語を話すときは speak を使う。',
        ],
      },
    ],
    words: [
      word('our', '私たちの'),
      word('your', 'あなたの、あなたたちの'),
      word('parent(s)', '親、両親'),
      word('some', 'いくつかの、いくらかの、少しの'),
      word("can’t", 'cannot の短縮形、〜できない'),
      word('class', '学級、組、クラス'),
      word('it', 'それは、それが'),
      word('fruit', '果物、果実'),
      word('rainy', '雨の、雨の多い'),
      word('train', '列車、電車'),
      word('today', '今日、現在では'),
      word('notebook', 'ノート'),
      word('new', '新しい、新任の'),
      word('team', 'チーム、組'),
      word('well', 'じょうずに、うまく、よく'),
      word('read', '〜を読む、読んで知る'),
      word('teacher', '先生、教師'),
      word('very', '非常に、とても'),
      word('father', '父、お父さん'),
      word('food', '食べ物'),
      word('make', '〜を作る、得る'),
      word('thank', '〜に感謝する'),
      word('Ms.', '〜さん、〜先生 ※女性に使う'),
      word('Mr.', '〜さん、〜先生 ※男性に使う'),
      word('speak', '言語を話す'),
      word('sea', '海、海洋'),
      word('drink', '〜を飲む'),
      word('cook', '〜を料理する'),
      word('China', '中国'),
      word('Chinese', '中国の、中国人の、中国語の'),
      word('can', '〜できる'),
    ],
    quiz: [
      {
        question: '「〜できる」を表す語は？',
        options: ['can', 'some', 'well', 'it'],
        correctIndex: 0,
        explanation: 'can は「〜できる」。can speak English のように使います。',
      },
      {
        question: 'cannot の短縮形は？',
        options: ["don't", "can't", "they're", "it's"],
        correctIndex: 1,
        explanation: "cannot は can't。can not と分けず、cannot と書く形も確認します。",
      },
      {
        question: '女性に使う「〜さん、〜先生」の敬称は？',
        options: ['Mr.', 'Ms.', 'our', 'your'],
        correctIndex: 1,
        explanation: 'Ms. は女性に使う敬称です。Mr. は男性に使います。',
      },
      {
        question: '「中国語を話す」を英語で表すときに使う動詞は？',
        options: ['read', 'drink', 'speak', 'make'],
        correctIndex: 2,
        explanation: '言語を話すときは speak を使います。speak Chinese で「中国語を話す」。',
      },
    ],
  },
  {
    lesson: 3,
    topicId: 'vocab-lesson3',
    chatId: 'eng-vocab-lesson3',
    name: 'Our School の単語',
    subtitle: '学校紹介・疑問詞・曜日や場所の語彙',
    icon: '🏫',
    order: 2,
    sections: [
      {
        title: '学校紹介で使うことば',
        content:
          'character、favorite、symbol、interesting、brave など、学校や人物を紹介するときの語を確認します。favorite と character はテストで狙われやすい語です。',
        keyPoints: [
          'favorite は「いちばん好きな／お気に入りの」。つづりに注意。',
          'character は「登場人物」。chara で止めない。',
          'symbol は「シンボル／象徴」。発音とつづりをセットで確認。',
        ],
      },
      {
        title: '疑問詞と短縮形',
        content:
          'who、what、where、how と、who’s、what’s、where’s、when’s をまとめます。意味だけでなく、短縮前の形も確認します。',
        keyPoints: [
          "who's = who is、what's = what is。",
          'where は「どこに／どこで／どこへ」、when は「いつ」。',
          'how は「どのように」。自己紹介の語彙とあわせて復習。',
        ],
      },
      {
        title: '放課後・予定のことば',
        content:
          'after school、practice、usually、Tuesday、next、near、good luck など、予定や活動を話す語を学びます。',
        keyPoints: [
          'usually は「いつも／たいてい」。頻度を表す副詞。',
          'practice は「練習する」。名詞「練習」としても使う。',
          'good luck は「幸運を祈ります」。応援の表現。',
        ],
      },
    ],
    words: [
      word('character', '登場人物'),
      word('wow', 'うわあ'),
      word('favorite', 'いちばん好きな、お気に入りの'),
      word("who’s", 'who is の短縮形'),
      word('family', '家族、一族'),
      word('for', '〜のかわりに、〜に相当する'),
      word("what’s", 'what is の短縮形'),
      word('also', '〜もまた、そのうえ'),
      word('symbol', 'シンボル、象徴、記号'),
      word('who', 'だれ'),
      word('interesting', 'おもしろい、興味深い'),
      word('what', '何'),
      word('brave', '勇敢な'),
      word('online', 'オンラインで'),
      word('week', '週、1週間'),
      word('around', '〜の近くに'),
      word('after school', '放課後に'),
      word('live', '住む、住んでいる'),
      word('about', '約、およそ、〜について'),
      word('study', '勉強する'),
      word('Tuesday', '火曜日'),
      word('usually', 'いつも、たいてい'),
      word('how', 'どのように'),
      word('where', 'どこに、どこで、どこへ'),
      word("where’s", 'where is の短縮形'),
      word("when’s", 'when is の短縮形'),
      word('date', '日付'),
      word('hallway', 'ろうか'),
      word('luck', '運、幸運'),
      word('month', '月、1か月'),
      word('win', '勝つ'),
      word('next', '次の、今度の、となりの'),
      word('near', '〜の近くに、〜の近くで'),
      word('good luck', '幸運を祈ります'),
      word('practice', '練習する'),
      word('hard', '一生懸命に、熱心に'),
      word('park', '公園'),
      word('game', '試合、ゲーム'),
    ],
    quiz: [
      {
        question: 'favorite の意味として正しいものは？',
        options: ['勇敢な', 'いちばん好きな', '近くの', 'オンラインで'],
        correctIndex: 1,
        explanation: 'favorite は「いちばん好きな／お気に入りの」。favorite character で「お気に入りの登場人物」。',
        difficulty: 'standard',
      },
      {
        question: 'character の意味は？',
        options: ['登場人物', '日付', 'ろうか', '幸運'],
        correctIndex: 0,
        explanation: 'character は物語やアニメなどの「登場人物」を表します。',
        difficulty: 'standard',
      },
      {
        question: '「いつも、たいてい」を表す語は？',
        options: ['usually', 'around', 'hard', 'next'],
        correctIndex: 0,
        explanation: 'usually は頻度を表す副詞で「いつも、たいてい」。',
        difficulty: 'standard',
      },
      {
        question: "where's の短縮前は？",
        options: ['where are', 'where is', 'when is', 'what is'],
        correctIndex: 1,
        explanation: "where's は where is の短縮形です。",
      },
    ],
  },
  {
    lesson: 4,
    topicId: 'vocab-lesson4',
    chatId: 'eng-vocab-lesson4',
    name: 'Friends in New Zealand の単語',
    subtitle: 'ニュージーランド・数・時刻・気持ちの語彙',
    icon: '🇳🇿',
    order: 3,
    sections: [
      {
        title: 'New Zealand と動物のことば',
        content:
          'New Zealand、puppy、animal、sheep、kiwi など、ニュージーランドに関係する語を確認します。国名は大文字で始めます。',
        keyPoints: [
          'New Zealand は国名なので N と Z を大文字にする。',
          'sheep は単数形も複数形も sheep。',
          'kiwi は鳥・果物・ニュージーランドに関係する語として出やすい。',
        ],
      },
      {
        title: '数・量をたずねる表現',
        content:
          'How many ...?、a lot of、one of、they、they’re など、数や量を表す表現をまとめます。',
        keyPoints: [
          'How many ...? は「いくつの〜／何人の〜」。後ろは複数名詞。',
          'a lot of は「たくさんの」。数えられる名詞にも数えられない名詞にも使える。',
          'one of は「〜の1つ／1人」。後ろは複数名詞にする。',
        ],
      },
      {
        title: '時刻・気持ち・位置のことば',
        content:
          'noon、o’clock、morning、afternoon、p.m.、worry、nervous、front、right、turn など、会話で使う基本語を整理します。',
        keyPoints: [
          'nervous は「緊張して」。テストで意味を問われやすい。',
          'front は「前、正面」。in front of の形も意識する。',
          'right は「正しい」のほか「右」の意味もあるので文脈で判断する。',
        ],
      },
    ],
    words: [
      word('New Zealand', 'ニュージーランド'),
      word('puppy', '子犬'),
      word('someday', 'いつか'),
      word('they', '彼らは、彼女らは、それらは'),
      word("they’re", 'they are の短縮形'),
      word('of', '〜の、〜の中の、〜のうちの'),
      word('a lot of', 'たくさんの、多くの'),
      word('one of', '〜の1つ、〜の1人'),
      word('How many ...?', 'いくつの〜、何人の〜'),
      word('Japan', '日本'),
      word('visit', '人・場所を訪ねる'),
      word('animal', '動物'),
      word('like', '〜のような、〜に似た、〜らしい'),
      word('last', '最後の、最終の'),
      word('noon', '正午、真昼'),
      word("o’clock", '〜時'),
      word('sports', 'スポーツ'),
      word('basketball', 'バスケットボール'),
      word('time', '時刻、時間'),
      word('morning', '午前、朝'),
      word('afternoon', '午後'),
      word('p.m.', '午後'),
      word('be', '〜である、〜になる'),
      word('worry', '心配する、悩む'),
      word('yourself', 'あなた自身を、あなた自身に'),
      word('front', '前、正面'),
      word('right', '正しい、正確な'),
      word('turn', '順番、番'),
      word('fun', '楽しいこと'),
      word('boy', '男の子'),
      word('man', '男性、男の人'),
      word('sad', '悲しい'),
      word('picture', '絵、絵画、写真'),
      word('long', '長い'),
      word('nervous', '緊張して'),
      word('sheep', '羊'),
      word('kiwi', 'キーウィ'),
      word('table', 'テーブル'),
      word('song', '歌'),
      word('kitchen', '台所、キッチン'),
    ],
    quiz: [
      {
        question: 'How many ...? の意味は？',
        options: ['どのくらい長い', 'いくつの〜、何人の〜', 'いつか', '〜のような'],
        correctIndex: 1,
        explanation: 'How many ...? は数をたずねる表現です。後ろには複数名詞を置きます。',
        difficulty: 'standard',
      },
      {
        question: 'a lot of の意味は？',
        options: ['最後の', 'たくさんの', '正午', '正しい'],
        correctIndex: 1,
        explanation: 'a lot of は「たくさんの、多くの」。',
        difficulty: 'standard',
      },
      {
        question: "they're の短縮前は？",
        options: ['they is', 'they are', 'there are', 'they were'],
        correctIndex: 1,
        explanation: "they're は they are の短縮形です。",
        difficulty: 'standard',
      },
      {
        question: 'nervous の意味として正しいものは？',
        options: ['悲しい', '楽しい', '緊張して', '長い'],
        correctIndex: 2,
        explanation: 'nervous は発表や試合の前などの「緊張して」を表します。',
        difficulty: 'standard',
      },
    ],
  },
  {
    lesson: 5,
    topicId: 'vocab-lesson5',
    chatId: 'eng-vocab-lesson5',
    name: 'My Brother in Hawaii の単語',
    subtitle: 'ハワイ・生活・三人称単数現在の語彙',
    icon: '🌺',
    order: 4,
    sections: [
      {
        title: '5-1: ハワイ紹介のことば',
        content:
          'blog、guide、spot、local、tour、beautiful など、場所を紹介するときの語を確認します。Hawaii と Honolulu は地名なので大文字で始めます。',
        keyPoints: [
          'his は「彼の」。he とは使う位置が違う。',
          '... year(s) old は「〜歳で」。年齢を言う形として覚える。',
          'enjoy ...ing は「〜して楽しむ」。後ろは ing 形にする。',
        ],
      },
      {
        title: '5-2: 生活と習慣のことば',
        content:
          'life、surf、every、weekend、sometimes、usually など、日常生活や習慣を表す語をまとめます。has、does、doesn’t は三人称単数現在の形として重要です。',
        keyPoints: [
          'has は have の三人称単数現在形。',
          'does は do の三人称単数現在形、doesn’t は does not の短縮形。',
          'sometimes は「ときどき」、usually は「ふつう、たいてい」。頻度の違いを意識する。',
        ],
      },
      {
        title: '5-3: 店や食べ物のことば',
        content:
          'cafe、owner、website、popular、fried egg、on top of など、店や食べ物を説明する語を確認します。',
        keyPoints: [
          'on top of は「〜の上に」。位置を表すまとまりで覚える。',
          'friendly は「親しみやすい」。人や雰囲気を説明できる。',
          'Japanese は「日本語」「日本の」「日本人の」と文脈で意味が変わる。',
        ],
      },
    ],
    words: [
      word('blog', 'ブログ'),
      word('guide', 'ガイド、案内人'),
      word('spot', '場所、地点'),
      word('local', '地元の、地方の'),
      word('tour', '旅行、ツアー、見学'),
      word('beautiful', '美しい'),
      word('his', '彼の'),
      word('any', 'いくつかの、何かの'),
      word('... year(s) old', '〜歳で'),
      word('old', '古い、年齢が〜'),
      word('nature', '自然'),
      word('enjoy ...ing', '〜して楽しむ'),
      word('Hawaii', 'ハワイ'),
      word('Honolulu', 'ホノルル'),
      word('work', '働く'),
      word('live', '住む、暮らす'),
      word('play', '〜をする、〜を演奏する'),
      word('make', '〜を作る'),
      word('practice', '〜を練習する'),
      word('watch', '〜を見る'),
      word('study', '〜を勉強する'),
      word('read', '〜を読む'),
      word('life', '生活、暮らし'),
      word('has', 'have の三人称単数現在形'),
      word('surf', 'サーフィンをする'),
      word('every', '毎〜'),
      word('question', '質問'),
      word('dolphin', 'イルカ'),
      word('does', 'do の三人称単数現在形'),
      word('doesn’t', 'does not の短縮形'),
      word('weekend', '週末'),
      word('sometimes', 'ときどき'),
      word('where', 'どこに、どこで、どこへ'),
      word('how', 'どのように、どれくらい'),
      word('near', '〜の近くに'),
      word('beach', '浜、浜辺'),
      word('usually', 'ふつう、たいてい'),
      word('after', '〜のあとに'),
      word('lunch', '昼食'),
      word('cafe', '喫茶店、カフェ'),
      word('owner', '所有者、持ち主'),
      word('patty', 'パティ'),
      word('top', '上部、てっぺん'),
      word('website', 'ウェブサイト'),
      word('popular', '人気のある'),
      word('wonderful', 'すばらしい、すてきな'),
      word('fried egg', '目玉焼き'),
      word('friendly', '親しみやすい'),
      word('on top of', '〜の上に'),
      word('know', '知っている、わかる'),
      word('restaurant', 'レストラン'),
      word('rice', '米、ごはん'),
      word('speak', '〜を話す'),
      word('Japanese', '日本語、日本の、日本人の'),
      word('not', '〜でない、〜しない'),
    ],
    quiz: [
      { question: 'enjoy ...ing の意味は？', options: ['〜して楽しむ', '〜する必要がある', '〜の上に', '〜の近くに'], correctIndex: 0, explanation: 'enjoy ...ing は「〜して楽しむ」。後ろは動詞の ing 形にします。', difficulty: 'standard' },
      { question: 'has は何の形？', options: ['have の三人称単数現在形', 'do の三人称単数現在形', 'be の過去形', 'child の複数形'], correctIndex: 0, explanation: 'has は have の三人称単数現在形です。', difficulty: 'standard' },
      { question: 'doesn’t の短縮前は？', options: ['do not', 'does not', 'did not', 'is not'], correctIndex: 1, explanation: 'doesn’t は does not の短縮形です。', difficulty: 'standard' },
      { question: 'on top of の意味は？', options: ['〜のあとに', '〜の上に', '〜の近くに', '〜のように'], correctIndex: 1, explanation: 'on top of は「〜の上に」。位置を表す表現です。', difficulty: 'standard' },
    ],
  },
  {
    lesson: 6,
    topicId: 'vocab-lesson6',
    chatId: 'eng-vocab-lesson6',
    name: 'A Rakugo Performer from the U.K. の単語',
    subtitle: '演芸・持ち物・服装の語彙',
    icon: '🎭',
    order: 5,
    sections: [
      { title: '6-1: 人を紹介することば', content: 'show、performer、the U.K.、him、her、say、together など、人や活動を紹介する語を確認します。', keyPoints: ['him は「彼を／彼に」、her は「彼女を／彼女に」「彼女の」。', 'let’s は let us の短縮形で「〜しましょう」。', 'Why don’t we ...? は「〜しませんか。」という提案の表現。'] },
      { title: '6-2: 時間・持ち物のことば', content: 'minute、history、whose、yours、mine、ticket など、時間や持ち物をたずねる語をまとめます。', keyPoints: ['whose は「だれの／だれのもの」。', 'mine は「私のもの」、yours は「あなたのもの」。', 'be careful with は「〜のあつかいに気をつける」。'] },
      { title: '6-3: 道具・服装のことば', content: 'cushion、role、prop、collection、which、wear など、演技や服装に関係する語を確認します。', keyPoints: ['which は「どちら／どちらの」。選択肢から選ぶときに使う。', 'different は「いろいろな／異なった」。', 'wear は「着ている／身につけている」。'] },
    ],
    words: [
      word('show', 'ショー'), word('performer', '演技者、演者'), word('the U.K.', '英国、イギリス'), word('everything', '何でも、全てのもの・こと'), word('him', '彼を、彼に'), word('her', '彼女を、彼女に／彼女の'), word('say', '〜を言う、〜だと言う'), word('together', 'いっしょに、ともに'), word('let’s', '〜しましょう'), word('how’s', 'how is の短縮形'), word('Why don’t we ...?', '〜しませんか。'), word('know', '知っている'), word('visit', '〜を訪れる'), word('tell', '〜を話す、伝える'), word('see', '〜に会う、〜を見る'),
      word('minute', '分'), word('history', '歴史'), word('whose', 'だれの、だれのもの'), word('yours', 'あなたのもの、あなたたちのもの'), word('mine', '私のもの'), word('wait', '待つ'), word('careful', '注意深い'), word('crowded', 'こみ合った、満員の'), word('still', 'まだ、今でも'), word('maybe', 'たぶん、もしかすると'), word('over', '〜より多く、〜をこえて'), word('ticket', '切符、チケット'), word('start', '始まる、出発する'), word('Thanks.', 'ありがとう。'), word('be careful with', '〜のあつかいに気をつける'), word('How old ...?', '何歳で、作られてからどれくらいで'),
      word('cushion', 'クッション、ざぶとん'), word('role', '役、役割'), word('prop', '小道具'), word('collection', '収集したもの、コレクション'), word('which', 'どちら、どちらの人・もの'), word('use', '〜を使う、利用する'), word('different', 'いろいろな、異なった'), word('large', '大きい、多数の'), word('casual', 'カジュアルな、ふだん着の'), word('only', 'ただ〜だけ'), word('or', '〜かまたは〜、〜や〜'), word('hand', '手'), word('towel', 'タオル、手ぬぐい'), word('clothes', '衣服、服'), word('wear', '〜を着ている、身につけている'),
    ],
    quiz: [
      { question: 'Why don’t we ...? の意味は？', options: ['なぜ〜しないのですか', '〜しませんか', '何歳ですか', 'どちらですか'], correctIndex: 1, explanation: 'Why don’t we ...? は相手を誘う「〜しませんか。」の表現です。', difficulty: 'standard' },
      { question: 'mine の意味は？', options: ['私のもの', 'あなたのもの', '彼のもの', '彼女のもの'], correctIndex: 0, explanation: 'mine は「私のもの」。', difficulty: 'standard' },
      { question: 'whose の意味は？', options: ['だれの、だれのもの', 'どちらの', 'いつの', 'どこで'], correctIndex: 0, explanation: 'whose は所有者をたずねる疑問詞です。', difficulty: 'standard' },
      { question: 'be careful with の意味は？', options: ['〜といっしょに行く', '〜のあつかいに気をつける', '〜の上に置く', '〜を楽しみに待つ'], correctIndex: 1, explanation: 'be careful with は「〜のあつかいに気をつける」。', difficulty: 'standard' },
    ],
  },
  {
    lesson: 7,
    topicId: 'vocab-lesson7',
    chatId: 'eng-vocab-lesson7',
    name: 'An Online Tour of the U.K. の単語',
    subtitle: '予定・観光・写真の語彙',
    icon: '🇬🇧',
    order: 6,
    sections: [
      { title: '7-1: 予定を話すことば', content: 'tomorrow、free、plan、What’s up?、sound like、look forward to など、予定や気持ちを話す表現を確認します。', keyPoints: ['look forward to は「〜を楽しみに待つ」。to の後ろは名詞や ing 形が来る。', 'sound like は「〜のように聞こえる／思える」。', 'What’s up? は「どうしたのですか。」という会話表現。'] },
      { title: '7-2: 観光地と人々のことば', content: 'place、souvenir、market、those、people、Welcome to ... など、観光や場所紹介の語をまとめます。', keyPoints: ['those は「あれらの／それらの」。this、that、these とセットで確認。', 'people は「人々」。person の複数の意味で使う。', 'Welcome to ... は「〜へようこそ。」'] },
      { title: '7-3: 家族・写真・気持ちのことば', content: 'mom、dad、palace、angry、funny、I’m sorry.、take pictures、look at などを確認します。', keyPoints: ['we’re は we are の短縮形。', 'take pictures は「写真を撮る」。', 'look at は「〜を見る」。watch との違いも意識する。'] },
    ],
    words: [
      word('tomorrow', '明日、明日は'), word('free', '空いている、ひまな'), word('talk', '話す'), word('plan', '計画、予定'), word('What’s up?', 'どうしたのですか。'), word('sound like', '〜のように聞こえる、〜のように思える'), word('look forward to', '〜を楽しみに待つ'), word('mean', '〜を意味する'), word('busy', '忙しい'), word('now', '今'), word('party', 'パーティー'), word('online tour', 'オンラインツアー'), word('next', '次の、今度の'), word('game', '試合、ゲーム'),
      word('place', '場所、ところ'), word('souvenir', 'おみやげ'), word('market', '市場'), word('appear', '現れる、姿を現す'), word('those', 'あれらの、それらの'), word('people', '人々'), word('Welcome to ...', '〜へようこそ。'), word('buy', '〜を買う'), word('food', '食べ物'), word('movie', '映画'), word('Harry Potter', 'ハリー・ポッター'), word('John', 'ジョン'), word('London', 'ロンドン'), word('Peter Rabbit', 'ピーター・ラビット'), word('the Lake District', '湖水地方'),
      word('mom', 'お母さん'), word('dad', 'お父さん'), word('palace', '宮殿'), word('angry', '怒った、腹を立てた'), word('funny', 'おかしな、こっけいな'), word('OK', 'わかった、だいじょうぶ'), word('I’m sorry.', 'ごめんなさい。すみません。'), word('Buckingham Palace', 'バッキンガム宮殿'), word('travel', '旅行する'), word('still', 'まだ'), word('we’re', 'we are の短縮形'), word('picture', '写真、絵'), word('take pictures', '写真を撮る'), word('look at', '〜を見る'), word('don’t', 'do not の短縮形'),
    ],
    quiz: [
      { question: 'look forward to の意味は？', options: ['〜を楽しみに待つ', '〜を見る', '〜を買う', '〜へようこそ'], correctIndex: 0, explanation: 'look forward to は「〜を楽しみに待つ」。', difficulty: 'standard' },
      { question: 'those の意味は？', options: ['これらの', 'あれらの、それらの', 'この', 'あの'], correctIndex: 1, explanation: 'those は「あれらの／それらの」。', difficulty: 'standard' },
      { question: 'take pictures の意味は？', options: ['絵を見る', '写真を撮る', '場所を訪れる', '市場で買う'], correctIndex: 1, explanation: 'take pictures は「写真を撮る」。', difficulty: 'standard' },
      { question: 'we’re の短縮前は？', options: ['we is', 'we are', 'we were', 'we do'], correctIndex: 1, explanation: 'we’re は we are の短縮形です。', difficulty: 'basic' },
    ],
  },
  {
    lesson: 8,
    topicId: 'vocab-lesson8',
    chatId: 'eng-vocab-lesson8',
    name: 'Think Globally, Act Locally の単語',
    subtitle: 'ボランティア・環境・支援活動の語彙',
    icon: '🌍',
    order: 7,
    sections: [
      { title: '8-1: 支援や目標のことば', content: 'volunteer、need、best、teach、try、become、respect など、支援活動や目標を話す語を確認します。', keyPoints: ['in need は「困っている」。', 'do one’s best は「最善を尽くす」。one’s は my / your / his などに変わる。', 'try to ...、need to ...、want to ... は to + 動詞の原形で覚える。'] },
      { title: '8-2: 環境と食べ物のことば', content: 'paper、waste、straw、reduce、plastic、reusable、soup、meat、curry など、環境や食べ物に関する語をまとめます。', keyPoints: ['reusable は「再利用できる」。re- は「再び」のイメージ。', 'of course は「もちろん」。', 'What do you want to ...? は「あなたは何を〜したいですか。」'] },
      { title: '8-3: 村と水に関することば', content: 'village、group、money、well、collect、build、river、clean など、生活インフラや支援に関係する語を確認します。', keyPoints: ['on the other hand は「他方では」。対比で使う。', 'for a long time は「長い間」。', 'look + 形容詞 は「〜に見える」。look happy / look busy などで覚える。'] },
    ],
    words: [
      word('volunteer', 'ボランティア'), word('need', '困っている状態、貧困／〜を必要とする'), word('best', '最もよいもの、最善'), word('Africa', 'アフリカ'), word('Kenya', 'ケニア'), word('teach', '〜に〜を教える'), word('try', '〜を試す、やってみる'), word('become', '〜になる'), word('respect', '〜を尊敬する、尊重する'), word('ethnic', '民族特有の'), word('children', 'child の複数形、子供たち'), word('child', '子供'), word('country', '国'), word('cousin', 'いとこ'), word('always', 'いつも、常に'), word('in need', '困っている'), word('do one’s best', '最善を尽くす'), word('want to ...', '〜したい'), word('try to ...', '〜しようとする'), word('need to ...', '〜する必要がある'), word('want to be / become ...', '〜になりたい'),
      word('paper', '紙の'), word('waste', 'ごみ、廃棄物'), word('straw', 'ストロー'), word('reduce', '数量などを減らす'), word('African', 'アフリカ人の、アフリカの'), word('plastic', 'プラスチック製の、ビニール製の'), word('original', '独創的な、独自の'), word('reusable', '再利用できる'), word('soup', 'スープ'), word('meat', '肉'), word('pie', 'パイ'), word('bean', '豆'), word('chicken', 'とり肉、チキン'), word('curry', 'カレー料理'), word('of course', 'もちろん'), word('eat', '食べる'), word('drink', '飲む'), word('What do you want to ...?', 'あなたは何を〜したいですか。'), word('I want to ...', '私は〜したいです。'), word('don’t want to ...', '〜したくありません'),
      word('village', '村'), word('group', 'グループ、団体'), word('money', '金、通貨、お金'), word('well', '井戸'), word('these', 'これら、この人たち'), word('collect', '〜を集める'), word('build', '〜を建てる'), word('other', 'もう1つの、もう一方の'), word('far', '遠くに、遠くへ'), word('river', '川'), word('get', '〜を得る、受け取る'), word('clean', 'きれいな、清潔な'), word('happy', '幸せな、うれしい'), word('on the other hand', '他方では、これに反して'), word('for a long time', '長い間'), word('look + 形容詞', '〜に見える'), word('look happy', '幸せそうに見える'), word('look busy', '忙しそうに見える'), word('look nervous', '緊張しているように見える'), word('look sad', '悲しそうに見える'),
    ],
    quiz: [
      { question: 'in need の意味は？', options: ['困っている', '長い間', 'もちろん', '他方では'], correctIndex: 0, explanation: 'in need は「困っている」。', difficulty: 'standard' },
      { question: 'try to ... の意味は？', options: ['〜する必要がある', '〜しようとする', '〜になりたい', '〜を楽しみに待つ'], correctIndex: 1, explanation: 'try to ... は「〜しようとする」。', difficulty: 'standard' },
      { question: 'reusable の意味は？', options: ['再利用できる', '独創的な', '民族特有の', '清潔な'], correctIndex: 0, explanation: 'reusable は「再利用できる」。', difficulty: 'standard' },
      { question: 'look + 形容詞 の意味は？', options: ['〜を探す', '〜に見える', '〜を見上げる', '〜を楽しみに待つ'], correctIndex: 1, explanation: 'look + 形容詞 は「〜に見える」。look happy で「幸せそうに見える」。', difficulty: 'standard' },
    ],
  },
  {
    lesson: 9,
    topicId: 'vocab-lesson9',
    chatId: 'eng-vocab-lesson9',
    name: 'Winter Vacation の単語',
    subtitle: '冬休み・新年・過去形の語彙',
    icon: '❄️',
    order: 11,
    sections: [
      {
        title: '9-1: 冬休みと旅行のことば',
        content: 'snowboarding、relax、during、stay、go back など、休み中の行動を表す語を確認します。played、used、watched など、規則動詞の過去形もまとめて覚えます。',
        keyPoints: [
          'during は「〜の間」。期間を表す語と一緒に使う。',
          'go back は「戻る、帰る」。go の過去形は went。',
          'study → studied、try → tried、stop → stopped のつづり変化に注意。',
        ],
      },
      {
        title: '9-2: 新年と疑問文のことば',
        content: 'New Year、special、rice cake、grandparent、traditional など、新年に関係する語を確認します。did、didn’t、did not は過去の疑問文・否定文の中心です。',
        keyPoints: [
          'did は do の過去形。Did you ...? で「あなたは〜しましたか」。',
          'didn’t は did not の短縮形で「〜しませんでした」。',
          'wrote は write の過去形。write とセットで覚える。',
        ],
      },
      {
        title: '9-3: 願い・おみくじ・日付表現',
        content: 'wish、fortune slip、spend、bought、got、said など、初詣や日記で使える語を確認します。last month、last year、yesterday など過去を表す語も重要です。',
        keyPoints: [
          'spend → spent、buy → bought、get → got、say → said は不規則変化。',
          'on New Year’s Day は「元日に」、on New Year’s Eve は「大みそかに」。',
          'have a ... time は「〜な時を過ごす」。',
        ],
      },
    ],
    words: [
      word('snowboarding', 'スノーボード'), word('relax', 'くつろぐ'), word('during', '〜の間、〜の間じゅう'), word('stay', '滞在する、泊まる'), word('go back', '戻る、帰る'), word('Christmas Day', 'クリスマス'), word('ice hockey', 'アイスホッケー'), word('vacation', '休暇、休み'), word('met', 'meet の過去形、会った'), word('meet', '〜に会う'), word('at home', '家で、在宅して'), word('back', '戻って、返して'), word('Vancouver', 'バンクーバー'), word('Whistler Village', 'ウィスラー・ビレッジ'), word('play', '〜をする'), word('played', 'play の過去形'), word('use', '〜を使う'), word('used', 'use の過去形'), word('watch', '〜を見る'), word('watched', 'watch の過去形'), word('study', '〜を勉強する'), word('studied', 'study の過去形'), word('try', '〜を試す、やってみる'), word('tried', 'try の過去形'), word('live', '住む'), word('lived', 'live の過去形'), word('stop', '止まる、止める'), word('stopped', 'stop の過去形'), word('go', '行く'), word('went', 'go の過去形'), word('see', '見る、会う'), word('saw', 'see の過去形'), word('eat', '食べる'), word('ate', 'eat の過去形'), word('come', '来る'), word('came', 'come の過去形'),
      word('New Year', '新年'), word('special', '特別な'), word('did', 'do の過去形'), word('rice cake', 'もち'), word('grandparent', '祖父、祖母、祖父母'), word('card', 'カード'), word('wrote', 'write の過去形、書いた'), word('write', '書く'), word('New Year’s Eve', '大みそか'), word('Good for you!', 'よくやったね。'), word('didn’t', 'did not の短縮形'), word('did not', '〜しませんでした'), word('question', '質問'), word('traditional', '伝統的な'), word('visit', '〜を訪れる'), word('clean', '〜を掃除する、きれいにする'), word('enjoy', '〜を楽しむ'), word('help', '〜を手伝う'), word('go skiing', 'スキーに行く'), word('snowboard', 'スノーボードをする'),
      word('wish', '願い'), word('bad', '悪い、よくない'), word('fortune slip', 'おみくじ'), word('spend', '過ごす、費やす'), word('spent', 'spend の過去形'), word('tablet', 'タブレット'), word('wooden', '木でできた、木製の'), word('New Year’s Day', '元日'), word('board game', 'ボードゲーム'), word('charm', 'お守り'), word('bought', 'buy の過去形、買った'), word('buy', '〜を買う'), word('have a ... time', '〜な時を過ごす'), word('got', 'get の過去形'), word('get', '〜を得る、受け取る'), word('read', 'read の過去形／読む'), word('said', 'say の過去形'), word('say', '〜と言う'), word('shrine', '神社'), word('fortune', '運、運勢'), word('future', '未来、将来'), word('notebook', 'ノート'), word('blue', '青い'), word('shirt', 'シャツ'), word('window', '窓'), word('open', '〜を開ける'), word('Japanese food', '日本食'), word('on New Year’s Day', '元日に'), word('on New Year’s Eve', '大みそかに'), word('last month', '先月'), word('last year', '昨年'), word('last weekend', '先週末'), word('yesterday', '昨日'),
    ],
    quiz: [
      { question: 'go の過去形は？', options: ['goed', 'went', 'gone', 'goes'], correctIndex: 1, explanation: 'go の過去形は went です。', difficulty: 'standard' },
      { question: 'didn’t の短縮前は？', options: ['do not', 'does not', 'did not', 'was not'], correctIndex: 2, explanation: 'didn’t は did not の短縮形です。', difficulty: 'standard' },
      { question: 'spend の過去形は？', options: ['spended', 'spent', 'spend', 'spented'], correctIndex: 1, explanation: 'spend の過去形は spent です。', difficulty: 'standard' },
      { question: 'last weekend の意味は？', options: ['来週末', '先週末', '毎週末', '週末の間'], correctIndex: 1, explanation: 'last weekend は「先週末」。過去を表す語句です。', difficulty: 'basic' },
    ],
  },
  {
    lesson: 95,
    topicId: 'vocab-postcard-travel',
    chatId: 'eng-vocab-postcard-travel',
    name: '旅先からの便り・絵はがきの単語',
    subtitle: '絵はがき・旅先・あいさつの語彙',
    icon: '✉️',
    order: 9,
    sections: [
      {
        title: '絵はがきで使うことば',
        content: 'Dear ...、Love,、postcard、hotel、city など、旅先からの便りに出やすい語を確認します。',
        keyPoints: [
          'Dear ... は手紙の書き出しで「親愛なる〜へ、〜様」。',
          'Love, は結びの表現で「愛をこめて、親しみをこめて」。',
          'take care of oneself は「体に気をつける」。oneself は相手に合わせて変わる。',
        ],
      },
      {
        title: '雪やスキーのことば',
        content: 'snow、fell、ski、outside、down、for the first time など、旅先での出来事を伝える語をまとめます。',
        keyPoints: [
          'fell は fall の過去形。',
          'for the first time は「初めて」。',
          'miss は「〜がいなくてさびしいと思う」「〜を逃す」。文脈で意味を判断する。',
        ],
      },
    ],
    words: [
      word('Dear ...', '親愛なる〜へ、〜様'), word('snow', '雪'), word('grandpa', 'おじいちゃん'), word('grandma', 'おばあちゃん'), word('Mt.', '山、〜山'), word('fell', 'fall の過去形、倒れた、落ちた'), word('miss', '〜がいなくてさびしいと思う、〜を逃す'), word('ski', 'スキーをする'), word('outside', '外で、外へ'), word('down', '下へ'), word('care', '世話、注意'), word('for the first time', '初めて'), word('take care of oneself', '体に気をつける'), word('postcard', '絵はがき'), word('hotel', 'ホテル'), word('city', '市、都市'), word('great', 'すばらしい'), word('picture', '写真、絵'), word('card', 'カード'), word('Love,', '愛をこめて、親しみをこめて'),
    ],
    quiz: [
      { question: 'fell は何の過去形？', options: ['feel', 'fall', 'find', 'fly'], correctIndex: 1, explanation: 'fell は fall の過去形です。', difficulty: 'standard' },
      { question: 'for the first time の意味は？', options: ['初めて', '長い間', 'すぐに', '下へ'], correctIndex: 0, explanation: 'for the first time は「初めて」。', difficulty: 'standard' },
      { question: 'Dear ... はどんな表現？', options: ['手紙の書き出し', '手紙の結び', '場所の名前', '過去形'], correctIndex: 0, explanation: 'Dear ... は手紙や絵はがきの書き出しで使います。', difficulty: 'basic' },
      { question: 'take care of oneself の意味は？', options: ['写真を撮る', '体に気をつける', '初めて行く', '下へ落ちる'], correctIndex: 1, explanation: 'take care of oneself は「体に気をつける」。', difficulty: 'standard' },
    ],
  },
  {
    lesson: 10,
    topicId: 'vocab-lesson10',
    chatId: 'eng-vocab-lesson10',
    name: 'This Year’s Memories の単語',
    subtitle: '思い出・学校生活・There is/are の語彙',
    icon: '📸',
    order: 10,
    sections: [
      {
        title: '10-1: 思い出を話すことば',
        content: 'mistake、realize、remember、were、won、bored、wasn’t、weren’t など、過去の出来事や気持ちを表す語を確認します。',
        keyPoints: [
          'were は are の過去形。am / is の過去形は was。',
          'wasn’t は was not、weren’t は were not の短縮形。',
          'won は win の過去形。win first place で「1位を取る」。',
        ],
      },
      {
        title: '10-2: アルバムと思い出のことば',
        content: 'break、then、way、heart、album、look for、talk about、bring back など、思い出をふり返る語をまとめます。',
        keyPoints: [
          'on one’s way to は「〜へ行く途中で」。',
          'bring back は「〜を思い出させる」。',
          'bring back a lot of memories は「たくさんの思い出をよみがえらせる」。',
        ],
      },
      {
        title: '10-3: 旅行・キャンプ・存在を表す表現',
        content: 'trip、tent、campground、hot spring、There is ...、There are ... など、場所にあるものを説明する語と表現を確認します。',
        keyPoints: [
          'There is ... は単数、There are ... は複数に使う。',
          'There isn’t ... / There aren’t ... は「〜がありません、〜がいません」。',
          'for two nights は「2泊の間」。',
        ],
      },
    ],
    words: [
      word('mistake', '誤り、まちがい'), word('realize', '〜だと気づく'), word('remember', '〜を思い出す、覚えている'), word('were', 'are の過去形'), word('won', 'win の過去形、勝った'), word('bored', '退屈した、うんざりした'), word('anyone', 'だれでも／だれも'), word('at first', '最初は、はじめは'), word('liked', 'like の過去形'), word('wasn’t', 'was not の短縮形'), word('weren’t', 'were not の短縮形'), word('anyway', 'とにかく、それでも'), word('contest', 'コンテスト、コンクール'), word('chorus', '合唱'), word('made', 'make の過去形'), word('sorry', 'すまなく思って、残念で'), word('performance', '演技、演奏、発表'), word('strong', '強い'), word('nervous', '緊張した'), word('rainy', '雨の、雨が降っている'), word('famous', '有名な'), word('singer', '歌手'), word('vacation', '休暇'), word('how', 'どのように、どんな'), word('win first place', '1位を取る'), word('school life', '学校生活'),
      word('break', '休憩'), word('then', 'そのとき、それから'), word('way', '道、方法'), word('beat', 'どきどきする、打つ'), word('bring back', '〜を思い出させる'), word('heart', '心臓、心'), word('each', 'それぞれの、各自の'), word('hey', 'やあ、おい、ちょっと'), word('album', 'アルバム'), word('on one’s way to', '〜へ行く途中で'), word('during', '〜の間'), word('lunch break', '昼休み'), word('next game', '次の試合'), word('memories', '思い出'), word('look for', '〜を探す'), word('picture', '写真、絵'), word('help', '〜を助ける、手伝う'), word('talk about', '〜について話す'), word('make an album', 'アルバムを作る'), word('bring back a lot of memories', 'たくさんの思い出をよみがえらせる'),
      word('trip', '旅行'), word('tent', 'テント'), word('near', '〜の近くに'), word('campground', 'キャンプ場'), word('hot spring', '温泉'), word('event', '行事、イベント'), word('night', '夜、夜間'), word('camping', 'キャンプ'), word('is not', '〜ではない、〜がない'), word('isn’t', 'is not の短縮形'), word('are not', '〜ではない、〜がない'), word('aren’t', 'are not の短縮形'), word('set up', '〜を設置する、組み立てる'), word('main', '主な、主要な'), word('There is ...', '〜があります、〜がいます'), word('There are ...', '〜があります、〜がいます'), word('There isn’t ...', '〜がありません、〜がいません'), word('There aren’t ...', '〜がありません、〜がいません'), word('lake', '湖'), word('bench', 'ベンチ'), word('gym', '体育館'), word('cap', '帽子'), word('desk', '机'), word('restaurant', 'レストラン'), word('station', '駅'), word('zoo', '動物園'), word('monkey', 'サル'), word('child', '子ども'), word('children', '子どもたち'), word('river', '川'), word('mountain', '山'), word('campfire', 'キャンプファイヤー'), word('clean', 'きれいな、清潔な'), word('large', '大きい'), word('beautiful', '美しい'), word('hot', '熱い、暑い'), word('main event', '主な行事'), word('for two nights', '2泊の間'),
    ],
    quiz: [
      { question: 'were は何の過去形？', options: ['am / is', 'are', 'do', 'go'], correctIndex: 1, explanation: 'were は are の過去形です。', difficulty: 'standard' },
      { question: 'won は何の過去形？', options: ['win', 'want', 'work', 'write'], correctIndex: 0, explanation: 'won は win の過去形です。', difficulty: 'standard' },
      { question: 'look for の意味は？', options: ['〜を探す', '〜を見る', '〜を思い出させる', '〜を設置する'], correctIndex: 0, explanation: 'look for は「〜を探す」。', difficulty: 'standard' },
      { question: 'There are ... の意味は？', options: ['〜がありました', '〜があります、〜がいます', '〜がありません', '〜でした'], correctIndex: 1, explanation: 'There are ... は複数のものについて「〜があります、〜がいます」と言う表現です。', difficulty: 'standard' },
    ],
  },
];

const forms: FormEntry[] = [
  { form: "doesn’t", meaning: 'does not の短縮形' },
  { form: "let’s", meaning: 'let us の短縮形、〜しましょう' },
  { form: "how’s", meaning: 'how is の短縮形' },
  { form: "we’re", meaning: 'we are の短縮形' },
  { form: "I’m", meaning: 'I am の短縮形' },
  { form: "don’t", meaning: 'do not の短縮形' },
  { form: "didn’t", meaning: 'did not の短縮形' },
  { form: "wasn’t", meaning: 'was not の短縮形' },
  { form: "weren’t", meaning: 'were not の短縮形' },
  { form: "isn’t", meaning: 'is not の短縮形' },
  { form: "aren’t", meaning: 'are not の短縮形' },
  { form: 'does', meaning: 'do の三人称単数現在形' },
  { form: 'has', meaning: 'have の三人称単数現在形' },
  { form: 'did', meaning: 'do の過去形' },
  { form: 'children', meaning: 'child の複数形' },
  { form: 'mine', meaning: '私のもの' },
  { form: 'yours', meaning: 'あなたのもの、あなたたちのもの' },
  { form: 'his', meaning: '彼のもの／彼の' },
  { form: 'hers', meaning: '彼女のもの' },
  { form: 'ours', meaning: '私たちのもの' },
  { form: 'theirs', meaning: '彼ら・彼女ら・それらのもの' },
  { form: 'him', meaning: '彼を、彼に' },
  { form: 'her', meaning: '彼女を、彼女に' },
  { form: 'them', meaning: '彼らを、彼女らを、それらを' },
  { form: 'played', meaning: 'play の過去形' },
  { form: 'used', meaning: 'use の過去形' },
  { form: 'watched', meaning: 'watch の過去形' },
  { form: 'studied', meaning: 'study の過去形' },
  { form: 'tried', meaning: 'try の過去形' },
  { form: 'lived', meaning: 'live の過去形' },
  { form: 'stopped', meaning: 'stop の過去形' },
  { form: 'went', meaning: 'go の過去形' },
  { form: 'saw', meaning: 'see の過去形' },
  { form: 'met', meaning: 'meet の過去形' },
  { form: 'ate', meaning: 'eat の過去形' },
  { form: 'came', meaning: 'come の過去形' },
  { form: 'wrote', meaning: 'write の過去形' },
  { form: 'bought', meaning: 'buy の過去形' },
  { form: 'got', meaning: 'get の過去形' },
  { form: 'read', meaning: 'read の過去形／読む' },
  { form: 'said', meaning: 'say の過去形' },
  { form: 'spent', meaning: 'spend の過去形' },
  { form: 'made', meaning: 'make の過去形' },
  { form: 'won', meaning: 'win の過去形' },
  { form: 'fell', meaning: 'fall の過去形' },
  { form: 'was', meaning: 'am / is の過去形' },
  { form: 'were', meaning: 'are の過去形' },
  { form: 'Did you ...?', meaning: 'あなたは〜しましたか。' },
  { form: 'Yes, I did.', meaning: 'はい、しました。' },
  { form: "No, I didn’t.", meaning: 'いいえ、しませんでした。' },
  { form: 'Were you ...?', meaning: 'あなたは〜でしたか。' },
  { form: 'Yes, I was.', meaning: 'はい、そうでした。' },
  { form: "No, I wasn’t.", meaning: 'いいえ、ちがいました。' },
  { form: 'What did you do ...?', meaning: 'あなたは…に何をしましたか。' },
  { form: 'How was ...?', meaning: '〜はどうでしたか。' },
  { form: 'How many times ...?', meaning: '何回〜ですか。' },
  { form: 'There is ...', meaning: '〜があります、〜がいます。' },
  { form: 'There are ...', meaning: '〜があります、〜がいます。' },
  { form: "it's", meaning: 'it is の短縮形' },
  { form: "who's", meaning: 'who is の短縮形' },
  { form: "what's", meaning: 'what is の短縮形' },
  { form: "where's", meaning: 'where is の短縮形' },
  { form: "when's", meaning: 'when is の短縮形' },
  { form: "can't", meaning: 'cannot の短縮形' },
  { form: "they're", meaning: 'they are の短縮形' },
];

function firstMeaning(meaning: string): string {
  return meaning.split('、')[0].split('／')[0].replace(/。$/, '');
}

function isLikelyName(word: string): boolean {
  return /^[A-Z]/.test(word) && !word.includes('...') && !word.includes('?') && !word.includes(',');
}

function includesAny(text: string, values: string[]): boolean {
  return values.some((value) => text.includes(value));
}

function makeWordHint(entry: WordEntry): string {
  const { word, meaning } = entry;
  if (meaning.includes('過去形')) {
    return '過去の話で使う形だよ。原形からどう変わったかを思い出そう。';
  }
  if (meaning.includes('短縮形')) {
    return "短くした形だよ。' は、省略された文字がある場所の印。";
  }
  if (meaning.includes('三人称単数現在形')) {
    return 'he / she / it などが主語のときに出やすい形だよ。';
  }
  if (meaning.includes('複数形')) {
    return '1つではなく、いくつかあるときの形だよ。';
  }
  if (word.includes('...')) {
    return '空いている部分に言葉を入れて使う表現だよ。';
  }
  if (word.endsWith('?')) {
    return '会話で相手にたずねるときの表現だよ。';
  }
  if (word.endsWith('.') || word.endsWith(',')) {
    return '文や手紙の中で、そのまま使える表現だよ。';
  }
  if (word.includes(' ') || word.includes('’') || word.includes("'")) {
    return '2語以上をひとまとまりで読むと意味を思い出しやすいよ。';
  }
  if (isLikelyName(word)) {
    return '大文字で始まる名前・地名・国名などの言葉だよ。';
  }
  if (meaning.includes('のもの')) {
    return 'だれのものかを表すときに使う語だよ。';
  }
  if (meaning.includes('彼を') || meaning.includes('彼女を') || meaning.includes('彼らを')) {
    return '人を指す語だよ。文の後ろで使うことが多いよ。';
  }
  if (meaning.startsWith('〜を') || meaning.startsWith('〜に')) {
    return '動作を表すことが多い語だよ。何をする場面か考えよう。';
  }
  if (
    includesAny(meaning, [
      '場所',
      '地点',
      '市',
      '都市',
      '国',
      '村',
      '山',
      '川',
      '湖',
      '海',
      '公園',
      '浜',
      '駅',
      '宮殿',
      '台所',
    ])
  ) {
    return '場所や位置を思い浮かべると意味に近づきやすい語だよ。';
  }
  if (
    includesAny(meaning, [
      '食べ物',
      '昼食',
      '朝',
      '午後',
      '菓子',
      '米',
      'ごはん',
      '肉',
      'もち',
      'スープ',
      'カレー',
      '豆',
      'パイ',
      '飲む',
      '食べる',
    ])
  ) {
    return '食事や飲み物の場面を思い出すと考えやすい語だよ。';
  }
  if (
    includesAny(meaning, [
      '父',
      '母',
      '親',
      '祖父',
      '祖母',
      '先生',
      '友達',
      '男',
      '人々',
      '子供',
      'いとこ',
      '演者',
      '歌手',
    ])
  ) {
    return '人や家族の場面で使う語だよ。だれのことか考えよう。';
  }
  if (
    includesAny(meaning, [
      '今日',
      '明日',
      '昨日',
      '週',
      '月',
      '年',
      '休暇',
      '週末',
      '正午',
      '時',
      '間',
      '大みそか',
      '元日',
    ])
  ) {
    return 'いつのことかを表す場面で出やすい語だよ。';
  }
  if (
    includesAny(meaning, [
      '美しい',
      '新しい',
      '古い',
      '大きい',
      '長い',
      '有名な',
      '忙しい',
      '悲しい',
      '怒った',
      '緊張',
      '楽しい',
      'すばらしい',
      '人気',
      '清潔',
      '特別',
      '伝統',
      '注意深い',
    ])
  ) {
    return '人やものの様子を説明する場面で使う語だよ。';
  }
  if (
    /^[ァ-ヶー・]+$/.test(meaning.replace(/[、。]/g, '')) ||
    includesAny(meaning, ['ブログ', 'ガイド', 'ツアー', 'スポーツ', 'ゲーム', 'カード'])
  ) {
    return '日本語でも聞くことがある音から、意味を思い出してみよう。';
  }
  return '使われる場面をイメージして、意味を思い出そう。';
}

function makeWordExplanation(entry: WordEntry): string {
  const { word, meaning } = entry;
  if (meaning.includes('過去形')) {
    const base = meaning.split(' の過去形')[0];
    return `${word} は ${base} の過去形です。「昨日」「先週」「冬休み」など、もう終わったことを話すときに使います。`;
  }
  if (meaning.includes('短縮形')) {
    const base = meaning.split(' の短縮形')[0];
    return `${word} は ${base} を短くした形です。アポストロフィ（'）は、なくなった文字の場所を示す印です。たとえば don't では o が省略されています。`;
  }
  if (word.includes('...')) {
    return `${word} は「${meaning}」という表現です。... の部分に動作や名詞を入れて、自分の文にできます。`;
  }
  if (word.includes(' ')) {
    return `${word} は「${meaning}」というまとまりの表現です。1語ずつ分けず、かたまりで読めると意味を取りやすくなります。`;
  }
  if (word.endsWith('?') || word.endsWith('.')) {
    return `${word} は「${meaning}」という会話表現です。短い文なので、声に出してそのまま覚えましょう。`;
  }
  if (isLikelyName(word)) {
    return `${word} は「${meaning}」を表します。名前・地名・国名などは、文の途中でも大文字で始めます。`;
  }
  if (meaning.includes('三人称単数現在形')) {
    return `${word} は「${meaning}」です。主語が he / she / it などのときに出やすい形です。`;
  }
  if (meaning.includes('複数形')) {
    return `${word} は「${meaning}」です。単数形と形が変わるので、セットで覚えましょう。`;
  }
  if (meaning.startsWith('〜を') || meaning.startsWith('〜に')) {
    return `${word} は「${meaning}」という動作を表します。主語のあとに置いて、何をするかを伝えるときに使います。`;
  }
  if (meaning.includes('のもの') || meaning.includes('彼を') || meaning.includes('彼女を')) {
    return `${word} は「${meaning}」を表します。人を指す語は、文の中での役割によって形が変わります。`;
  }
  return `${word} は「${meaning}」という意味です。日本語を見て英語を言う練習と、英語を見て意味を言う練習の両方をしましょう。`;
}

function makeFlashcard(lesson: number, entry: WordEntry, index: number) {
  return {
    id: `eng-vocab-lesson${lesson}-fc${String(index + 1).padStart(2, '0')}`,
    front: entry.word,
    back: entry.meaning,
    hint: makeWordHint(entry),
    explanation: makeWordExplanation(entry),
    difficulty: entry.difficulty ?? 'basic',
  };
}

function makeLessonTopic(lesson: LessonSpec) {
  return {
    subjectId: 'english',
    eraId: 'english-grade1',
    topicId: lesson.topicId,
    name: lesson.name,
    subtitle: lesson.subtitle,
    icon: lesson.icon,
    order: lesson.order,
    chatId: lesson.chatId,
    explanation: {
      sections: lesson.sections,
    },
    videos: [],
    flashcards: lesson.words.map((entry, index) => makeFlashcard(lesson.lesson, entry, index)),
    quiz: {
      questions: lesson.quiz.map((q, index) => ({
        id: `q${index + 1}`,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        difficulty: q.difficulty ?? 'basic',
      })),
    },
  };
}

function makeContractionsTopic() {
  return {
    subjectId: 'english',
    eraId: 'english-grade1',
    topicId: 'vocab-forms-lesson1-10',
    name: '短縮形・変化形・過去形まとめ',
    subtitle: "didn't / went / was / There is ... など",
    icon: '✂️',
    order: 8,
    chatId: 'eng-vocab-forms-lesson1-10',
    explanation: {
      sections: [
        {
          title: '短縮形・変化形・過去形はセットで覚える',
          content:
            '短縮形はもとの形、過去形は原形と変化のしかたをセットで確認します。人称代名詞の目的格・所有代名詞、There is / There are の表現もまとめて覚えます。',
          keyPoints: [
            "didn't = did not、wasn't = was not、weren't = were not。",
            'go → went、see → saw、make → made、win → won のような不規則変化に注意。',
            'There is ... / There are ... は「〜があります、〜がいます」を表す。',
          ],
        },
      ],
    },
    videos: [],
    flashcards: forms.map((entry, index) => ({
      id: 'eng-vocab-forms-fc' + String(index + 1).padStart(2, '0'),
      front: entry.form,
      back: entry.meaning,
      hint: makeWordHint({ word: entry.form, meaning: entry.meaning }),
      explanation: makeWordExplanation({ word: entry.form, meaning: entry.meaning }),
      difficulty: ['doesn’t', 'let’s', 'how’s', 'we’re', 'does', 'has', 'children', 'mine', 'yours'].includes(entry.form)
        ? 'standard'
        : 'basic',
    })),
    quiz: {
      questions: [
        { id: 'q1', question: "doesn't の短縮前は？", options: ['do not', 'does not', 'did not', 'is not'], correctIndex: 1, explanation: "doesn't は does not の短縮形です。", difficulty: 'standard' },
        { id: 'q2', question: 'has は何の形？', options: ['have の三人称単数現在形', 'do の三人称単数現在形', 'child の複数形', 'I am の短縮形'], correctIndex: 0, explanation: 'has は have の三人称単数現在形です。', difficulty: 'standard' },
        { id: 'q3', question: 'children は何の形？', options: ['child の複数形', 'child の過去形', 'children の単数形', '人称代名詞'], correctIndex: 0, explanation: 'children は child の複数形です。', difficulty: 'standard' },
        { id: 'q4', question: 'mine の意味は？', options: ['私のもの', 'あなたのもの', '彼らのもの', '彼女のもの'], correctIndex: 0, explanation: 'mine は「私のもの」を表します。', difficulty: 'standard' },
      ],
    },
  };
}

function lineQuestion(
  id: number,
  topic: string,
  text: string,
  choices: [string, string, string, string],
  correctChoiceId: 0 | 1 | 2 | 3,
  explanation: string
) {
  return {
    id: `q-english-g1-${String(id).padStart(3, '0')}`,
    subject: 'english',
    grade: '中1',
    topic,
    text,
    choices,
    correctChoiceId,
    explanation,
  };
}

function buildLineQuestions() {
  return [
    lineQuestion(1, 'be動詞', 'I ___ a student. の空欄に入る語は？', ['am', 'is', 'are', 'be'], 0, '主語が I のときの be 動詞は am です。'),
    lineQuestion(2, '三人称単数現在', 'She ___ tennis every day. の空欄に入る語は？', ['play', 'plays', 'playing', 'played'], 1, '主語が三人称単数で現在の習慣を表すときは動詞に -s をつけます。'),
    lineQuestion(3, '一般動詞の疑問文', 'Do you ___ a brother? の空欄に入る語は？', ['has', 'have', 'having', 'had'], 1, 'Do you で始まる疑問文では動詞は原形(have)のままです。'),
    lineQuestion(4, '英単語 1', 'Call me Eddy. の call の意味は？', ['電話する', '呼ぶ', '読む', '作る'], 1, 'Call me Eddy. は「私をエディと呼んで」。この call は「呼ぶ」です。'),
    lineQuestion(5, '英単語 1', "I'm from South Africa. の from の意味は？", ['〜出身の', '〜といっしょに', '〜について', '〜もまた'], 0, "I'm from ... は「私は…出身です」。"),
    lineQuestion(6, '英単語 1', '「よく、しばしば」を表す単語は？', ['often', 'about', 'great', 'sweet'], 0, 'often は頻度を表し「よく、しばしば」という意味です。'),
    lineQuestion(7, '英単語 1', '「〜といっしょに」を表す単語は？', ['from', 'with', 'but', 'so'], 1, 'with は「〜といっしょに」。with my friends で「友達といっしょに」。'),
    lineQuestion(8, '英単語 1', 'do not の短縮形は？', ["don't", "can't", "it's", "who's"], 0, "do not は don't です。"),
    lineQuestion(9, '英単語 2', '「〜できる」を表す単語は？', ['can', 'some', 'well', 'today'], 0, 'can は「〜できる」。後ろには動詞の原形を置きます。'),
    lineQuestion(10, '英単語 2', 'cannot の短縮形は？', ["don't", "can't", "they're", "it's"], 1, "cannot は can't の形に短縮できます。"),
    lineQuestion(11, '英単語 2', '「私たちの」を表す単語は？', ['your', 'our', 'it', 'some'], 1, 'our は「私たちの」。your は「あなたの／あなたたちの」です。'),
    lineQuestion(12, '英単語 2', '女性に使う敬称「〜さん、〜先生」は？', ['Mr.', 'Ms.', 'Dr.', 'Jr.'], 1, 'Ms. は女性に使う敬称です。Mr. は男性に使います。'),
    lineQuestion(13, '英単語 3', 'favorite の意味は？', ['いちばん好きな', '勇敢な', '近くの', '一生懸命に'], 0, 'favorite は「いちばん好きな、お気に入りの」。'),
    lineQuestion(14, '英単語 3', 'character の意味は？', ['登場人物', '日付', 'ろうか', '試合'], 0, 'character は「登場人物」。アニメや物語の人物に使います。'),
    lineQuestion(15, '英単語 3', 'symbol の意味は？', ['週', '家族', 'シンボル、象徴', '運'], 2, 'symbol は「シンボル、象徴、記号」。'),
    lineQuestion(16, '英単語 3', 'usually の意味は？', ['たいてい', 'オンラインで', '約', '次の'], 0, 'usually は「いつも、たいてい」を表す頻度の副詞です。'),
    lineQuestion(17, '英単語 3', 'practice の意味は？', ['住む', '練習する', '勝つ', '勉強する'], 1, 'practice は「練習する」。名詞「練習」としても使います。'),
    lineQuestion(18, '短縮形', "where's の短縮前は？", ['where are', 'where is', 'when is', 'what is'], 1, "where's は where is の短縮形です。"),
    lineQuestion(19, '英単語 4', 'How many ...? の意味は？', ['いくつの〜、何人の〜', 'たくさんの〜', '〜の1つ', 'いつか'], 0, 'How many ...? は数をたずねる表現です。'),
    lineQuestion(20, '英単語 4', 'a lot of の意味は？', ['最後の', 'たくさんの、多くの', '正午', '正しい'], 1, 'a lot of は「たくさんの、多くの」。'),
    lineQuestion(21, '英単語 4', 'one of の意味は？', ['〜のような', '〜の1つ、〜の1人', '〜時', '〜自身を'], 1, 'one of は「〜の1つ、〜の1人」。後ろは複数名詞にします。'),
    lineQuestion(22, '短縮形', "they're の短縮前は？", ['they are', 'they is', 'there are', 'their are'], 0, "they're は they are の短縮形です。"),
    lineQuestion(23, '英単語 4', 'nervous の意味は？', ['悲しい', '緊張して', '長い', '楽しい'], 1, 'nervous は「緊張して」。'),
    lineQuestion(24, '英単語 4', 'front の意味は？', ['順番', '前、正面', '午後', '台所'], 1, 'front は「前、正面」。in front of の形でもよく出ます。'),
    lineQuestion(25, '英単語 4', 'right の意味として、ここで確認するものは？', ['正しい、正確な', '悲しい', '長い', '最後の'], 0, 'right は「正しい、正確な」。文脈によって「右」の意味もあります。'),
    lineQuestion(26, '英単語 4', 'turn の意味は？', ['番、順番', '絵', '歌', '羊'], 0, 'turn は「番、順番」。Your turn. で「あなたの番」。'),
    lineQuestion(27, '英単語 5', 'enjoy ...ing の意味は？', ['〜して楽しむ', '〜する必要がある', '〜の上に', '〜の近くに'], 0, 'enjoy ...ing は「〜して楽しむ」。後ろは ing 形にします。'),
    lineQuestion(28, '英単語 5', 'has は何の形？', ['have の三人称単数現在形', 'do の三人称単数現在形', 'child の複数形', 'we are の短縮形'], 0, 'has は have の三人称単数現在形です。'),
    lineQuestion(29, '英単語 5', "doesn't の短縮前は？", ['do not', 'does not', 'did not', 'is not'], 1, "doesn't は does not の短縮形です。"),
    lineQuestion(30, '英単語 5', 'on top of の意味は？', ['〜のあとに', '〜の上に', '〜の近くに', '〜のように'], 1, 'on top of は「〜の上に」。'),
    lineQuestion(31, '英単語 6', 'Why don’t we ...? の意味は？', ['〜しませんか', '何歳ですか', 'だれのものですか', '気をつけて'], 0, 'Why don’t we ...? は相手を誘う表現です。'),
    lineQuestion(32, '英単語 6', 'whose の意味は？', ['どちらの', 'だれの、だれのもの', 'いつの', 'どこで'], 1, 'whose は所有者をたずねる疑問詞です。'),
    lineQuestion(33, '英単語 6', 'mine の意味は？', ['私のもの', 'あなたのもの', '彼のもの', '彼女のもの'], 0, 'mine は「私のもの」。'),
    lineQuestion(34, '英単語 6', 'be careful with の意味は？', ['〜の上に', '〜のあつかいに気をつける', '〜を楽しみに待つ', '〜といっしょに'], 1, 'be careful with は「〜のあつかいに気をつける」。'),
    lineQuestion(35, '英単語 7', 'look forward to の意味は？', ['〜を見る', '〜を楽しみに待つ', '〜を買う', '〜へようこそ'], 1, 'look forward to は「〜を楽しみに待つ」。'),
    lineQuestion(36, '英単語 7', 'those の意味は？', ['これらの', 'あれらの、それらの', 'この', 'あの'], 1, 'those は「あれらの、それらの」。'),
    lineQuestion(37, '英単語 7', 'take pictures の意味は？', ['写真を撮る', '絵を見る', '市場へ行く', '旅行する'], 0, 'take pictures は「写真を撮る」。'),
    lineQuestion(38, '英単語 7', "we're の短縮前は？", ['we is', 'we are', 'we were', 'we do'], 1, "we're は we are の短縮形です。"),
    lineQuestion(39, '英単語 8', 'in need の意味は？', ['もちろん', '困っている', '長い間', '他方では'], 1, 'in need は「困っている」。'),
    lineQuestion(40, '英単語 8', 'try to ... の意味は？', ['〜する必要がある', '〜になりたい', '〜しようとする', '〜を楽しみに待つ'], 2, 'try to ... は「〜しようとする」。'),
    lineQuestion(41, '英単語 8', 'reusable の意味は？', ['独創的な', '再利用できる', '民族特有の', '清潔な'], 1, 'reusable は「再利用できる」。'),
    lineQuestion(42, '英単語 8', 'look + 形容詞 の意味は？', ['〜に見える', '〜を探す', '〜を見る', '〜を楽しみに待つ'], 0, 'look + 形容詞 は「〜に見える」。'),
    lineQuestion(43, '英単語 9', 'go の過去形は？', ['goed', 'went', 'gone', 'goes'], 1, 'go の過去形は went です。'),
    lineQuestion(44, '英単語 9', "didn't の短縮前は？", ['do not', 'does not', 'did not', 'was not'], 2, "didn't は did not の短縮形です。"),
    lineQuestion(45, '英単語 9', 'spend の過去形は？', ['spended', 'spent', 'spend', 'spented'], 1, 'spend の過去形は spent です。'),
    lineQuestion(46, '英単語 9', 'last weekend の意味は？', ['来週末', '先週末', '毎週末', '週末の間'], 1, 'last weekend は「先週末」。'),
    lineQuestion(47, '旅先の便り', 'fell は何の過去形？', ['feel', 'fall', 'find', 'fly'], 1, 'fell は fall の過去形です。'),
    lineQuestion(48, '旅先の便り', 'for the first time の意味は？', ['初めて', '長い間', 'すぐに', '下へ'], 0, 'for the first time は「初めて」。'),
    lineQuestion(49, '英単語 10', 'were は何の過去形？', ['am / is', 'are', 'do', 'go'], 1, 'were は are の過去形です。'),
    lineQuestion(50, '英単語 10', 'won は何の過去形？', ['win', 'want', 'work', 'write'], 0, 'won は win の過去形です。'),
    lineQuestion(51, '英単語 10', 'look for の意味は？', ['〜を探す', '〜を見る', '〜を思い出させる', '〜を設置する'], 0, 'look for は「〜を探す」。'),
    lineQuestion(52, '英単語 10', 'There are ... の意味は？', ['〜がありました', '〜があります、〜がいます', '〜がありません', '〜でした'], 1, 'There are ... は複数のものについて「〜があります、〜がいます」と言う表現です。'),
  ];
}

function main() {
  mkdirSync(CONTENT_DIR, { recursive: true });

  for (const lesson of lessons) {
    const out = join(CONTENT_DIR, `${lesson.topicId}.json`);
    writeFileSync(out, `${JSON.stringify(makeLessonTopic(lesson), null, 2)}\n`, 'utf8');
  }

  writeFileSync(
    join(CONTENT_DIR, 'vocab-forms-lesson1-10.json'),
    `${JSON.stringify(makeContractionsTopic(), null, 2)}\n`,
    'utf8'
  );

  writeFileSync(LINE_QUESTIONS_FILE, `${JSON.stringify(buildLineQuestions(), null, 2)}\n`, 'utf8');

  try {
    rmSync(LEGACY_HELLO_DIR, { recursive: true, force: true });
  } catch {
    // Nothing to clean up.
  }

  console.log(`Generated ${lessons.length + 1} English vocab content files in ${CONTENT_DIR}`);
  console.log(`Generated ${buildLineQuestions().length} LINE questions in ${LINE_QUESTIONS_FILE}`);
}

main();
