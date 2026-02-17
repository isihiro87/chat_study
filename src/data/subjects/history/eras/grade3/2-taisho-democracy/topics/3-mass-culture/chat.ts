import type { HistoryChat } from '../../../../../../../history-chat/types';

export const massCultureChat: HistoryChat = {
  id: 'mass-culture',
  icon: '📻',
  title: '大衆文化の成熟',
  subtitle: '〜大正〜 メディアと生活の近代化',
  characters: [
    {
      id: 'akutagawa',
      name: '芥川龍之介',
      emoji: '✒️',
      colorFrom: '#4338ca',
      colorTo: '#6366f1',
    },
    {
      id: 'citizen',
      name: '大正の市民',
      emoji: '🎩',
      colorFrom: '#0f766e',
      colorTo: '#14b8a6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '大正時代',
    },
    {
      type: 'narrator',
      text: '大正時代、日本の文化は大きく変わりました。<strong>新聞</strong>や<strong>雑誌</strong>が広く読まれるようになり、情報が多くの人に届くようになったのです。',
    },
    {
      type: 'narrator',
      text: '1925年には<strong>ラジオ放送</strong>が始まりました。全国の家庭にニュースや音楽、娯楽が届けられる画期的な出来事でした。<strong>映画</strong>も大衆の娯楽として人気を集め、<strong>野球</strong>は国民的スポーツとして定着しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: 'ラジオが家に来た！ニュースも音楽も家にいながら聴ける時代になったんだ。映画も面白いし、野球の応援も楽しい',
    },
    {
      type: 'quiz',
      question: '日本でラジオ放送が始まったのは何年？',
      options: [
        { letter: 'A', text: '1920年', correct: false },
        { letter: 'B', text: '1923年', correct: false },
        { letter: 'C', text: '1927年', correct: false },
        { letter: 'D', text: '1925年', correct: true },
      ],
      explanation:
        '<strong>正解はD「1925年」</strong>です。ラジオ放送の開始により、全国の家庭に情報や娯楽が届けられるようになりました。',
    },
    {
      type: 'narrator',
      text: '都市部では<strong>文化住宅</strong>と呼ばれる洋風の住宅が広まりました。<strong>洋食</strong>（カレーライスやコロッケ）が庶民に定着し、<strong>バスガール</strong>など女性の社会進出を象徴する職業も登場しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '文化住宅に引っ越して、今日の夕飯はカレーライスだ。街ではバスガールが元気に働いている。暮らしがどんどん変わっていくなあ',
    },
    {
      type: 'narrator',
      text: '文学の世界でも新しい才能が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'akutagawa',
      text: '「羅生門」や「鼻」を書いた。人間の心の奥にある弱さや醜さを描くのが私の文学だ',
    },
    {
      type: 'narrator',
      text: '<strong>芥川龍之介</strong>は「<strong>羅生門</strong>」「<strong>鼻</strong>」など知的な短編小説を発表しました。<strong>志賀直哉</strong>は「<strong>暗夜行路</strong>」を残し、「小説の神様」と呼ばれました。',
    },
    {
      type: 'narrator',
      text: '<strong>小林多喜二</strong>は「<strong>蟹工船</strong>」で労働者の過酷な生活を描きました。これは<strong>プロレタリア文学</strong>と呼ばれ、社会の矛盾を告発するものでした。',
    },
    {
      type: 'quiz',
      question: '「蟹工船」を書いたプロレタリア文学の作家は？',
      options: [
        { letter: 'A', text: '芥川龍之介', correct: false },
        { letter: 'B', text: '志賀直哉', correct: false },
        { letter: 'C', text: '小林多喜二', correct: true },
        { letter: 'D', text: '夏目漱石', correct: false },
      ],
      explanation:
        '<strong>正解はC「小林多喜二」</strong>です。「蟹工船」で労働者の過酷な生活を描き、プロレタリア文学の代表作となりました。',
    },
    {
      type: 'narrator',
      text: '1923年9月1日、<strong>関東大震災</strong>が発生し、東京・横浜に壊滅的な被害をもたらしました。しかし復興を通じて都市の近代化はさらに進んでいきました。',
    },
    {
      type: 'quiz',
      question: '1923年に東京・横浜を襲った大災害は？',
      options: [
        { letter: 'A', text: '米騒動', correct: false },
        { letter: 'B', text: '関東大震災', correct: true },
        { letter: 'C', text: '東京大空襲', correct: false },
        { letter: 'D', text: '濃尾地震', correct: false },
      ],
      explanation:
        '<strong>正解はB「関東大震災」</strong>です。1923年9月1日に発生し、東京・横浜に壊滅的な被害をもたらしましたが、復興により都市近代化が進みました。',
    },
    {
      type: 'end',
      points: [
        '<strong>ラジオ</strong>（1925年）・<strong>映画</strong>・<strong>野球</strong>など大衆娯楽が発達',
        '<strong>文化住宅</strong>・<strong>洋食</strong>・<strong>バスガール</strong>で生活が近代化',
        '<strong>芥川龍之介</strong>「羅生門」、<strong>志賀直哉</strong>「暗夜行路」',
        '<strong>小林多喜二</strong>「蟹工船」など<strong>プロレタリア文学</strong>の登場',
        '1923年<strong>関東大震災</strong>と復興による都市近代化',
      ],
    },
  ],
};
