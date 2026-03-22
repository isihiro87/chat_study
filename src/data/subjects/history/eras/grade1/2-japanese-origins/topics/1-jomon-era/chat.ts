import type { HistoryChat } from '../../../../../../../history-chat/types';

export const jomonEraChat: HistoryChat = {
  id: 'jomon-era',
  icon: '🏺',
  title: '旧石器時代と縄文時代',
  subtitle: '〜先史時代〜 狩猟・採集から定住生活へ',
  characters: [
    {
      id: 'archaeologist',
      name: '考古学者',
      emoji: '🧑‍🔬',
      colorFrom: '#92400e',
      colorTo: '#d97706',
      expressions: {
        explaining: '🧐',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '数万年前〜',
    },
    {
      type: 'narrator',
      text: '<ruby>数万年前<rp>(</rp><rt>すうまんねんまえ</rt><rp>)</rp></ruby>、地球は<strong><span class="keyword"><ruby>氷河時代<rp>(</rp><rt>ひょうがじだい</rt><rp>)</rp></ruby></span></strong>にあり、日本列島は大陸と<ruby>陸続<rp>(</rp><rt>りくつづ</rt><rp>)</rp></ruby>きでした。人々は<strong><span class="keyword"><ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby></span></strong>を使い、大きな動物を<ruby>狩<rp>(</rp><rt>か</rt><rp>)</rp></ruby>って暮らしていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'explaining',
      text: '<span data-tooltip="地球の気温が下がり、海面が低くなって大陸と日本がつながっていた時代"><ruby>氷期<rp>(</rp><rt>ひょうき</rt><rp>)</rp></ruby></span>には海面が低くて、日本と大陸がつながっていたんだ。<strong><span class="keyword">ナウマンゾウ</span></strong>や<strong><span class="keyword">オオツノジカ</span></strong>が大陸から渡ってきて、人々はそれらを<ruby>狩<rp>(</rp><rt>か</rt><rp>)</rp></ruby>りながら<ruby>移動生活<rp>(</rp><rt>いどうせいかつ</rt><rp>)</rp></ruby>をしていたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '石器はどうやって作っていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'happy',
      text: '石を打ち<ruby>欠<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いて作る<strong><span class="keyword"><ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby></span></strong>だよ。材料には<strong><span class="keyword"><ruby>黒曜石<rp>(</rp><rt>こくようせき</rt><rp>)</rp></ruby></span></strong>という黒いガラス質の石や、<ruby>香川県<rp>(</rp><rt>かがわけん</rt><rp>)</rp></ruby>の<strong><span class="keyword">サヌカイト</span></strong>が使われたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '日本にも旧石器時代があったことはどうやってわかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>相沢忠洋<rp>(</rp><rt>あいざわただひろ</rt><rp>)</rp></ruby></span></strong>さんが<ruby>群馬県<rp>(</rp><rt>ぐんまけん</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>岩宿遺跡<rp>(</rp><rt>いわじゅくいせき</rt><rp>)</rp></ruby></span></strong>で<ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby>を発見したんだ！これで日本にも<ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby>があったことが証明されたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">旧石器時代</span>：<span class="keyword">氷期</span>に大陸と陸続き → <span class="keyword">打製石器</span>で狩猟・移動生活。<span class="keyword">岩宿遺跡</span>（群馬県）で証明！',
    },
    {
      type: 'quiz',
      question: '群馬県で打製石器が発見され、日本の旧石器時代を証明した遺跡は？',
      options: [
        { letter: 'A', text: '岩宿遺跡', correct: true },
        { letter: 'B', text: '三内丸山遺跡', correct: false },
        { letter: 'C', text: '登呂遺跡', correct: false },
        { letter: 'D', text: '吉野ヶ里遺跡', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>岩宿遺跡<rp>(</rp><rt>いわじゅくいせき</rt><rp>)</rp></ruby>」</strong>です。<ruby>相沢忠洋<rp>(</rp><rt>あいざわただひろ</rt><rp>)</rp></ruby>が<ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby>を発見しました。',
    },
    {
      type: 'date',
      text: '約1万数千年前〜',
    },
    {
      type: 'narrator',
      text: '<ruby>氷河時代<rp>(</rp><rt>ひょうがじだい</rt><rp>)</rp></ruby>が終わり気候が<ruby>温暖<rp>(</rp><rt>おんだん</rt><rp>)</rp></ruby>になると、人々は<ruby>定住生活<rp>(</rp><rt>ていじゅうせいかつ</rt><rp>)</rp></ruby>を始めました。<strong><span class="keyword"><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></span></strong>の始まりです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'そこからどうやって定住するようになったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'happy',
      text: '気候が温かくなると森が広がり、<ruby>木<rp>(</rp><rt>き</rt><rp>)</rp></ruby>の<ruby>実<rp>(</rp><rt>み</rt><rp>)</rp></ruby>や<ruby>魚介類<rp>(</rp><rt>ぎょかいるい</rt><rp>)</rp></ruby>が<ruby>豊富<rp>(</rp><rt>ほうふ</rt><rp>)</rp></ruby>に手に入るようになったんだ。人々は<strong><span class="keyword"><ruby>たて穴住居<rp>(</rp><rt>たてあなじゅうきょ</rt><rp>)</rp></ruby></span></strong>を作って<ruby>定住<rp>(</rp><rt>ていじゅう</rt><rp>)</rp></ruby>を始めたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'この土器、<ruby>縄<rp>(</rp><rt>なわ</rt><rp>)</rp></ruby>の模様がついてる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'excited',
      text: 'それが<strong><span class="keyword"><ruby>縄文土器<rp>(</rp><rt>じょうもんどき</rt><rp>)</rp></ruby></span></strong>だよ！<span data-tooltip="食べ物を煮たり水を貯めたりするのに使った土器"><ruby>煮炊<rp>(</rp><rt>にた</rt><rp>)</rp></ruby>き</span>に使うんだ。この土器が使われた時代を<strong><span class="keyword"><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></span></strong>というんだよ',
    },
    {
      type: 'image',
      src: '/images/history/grade1/2-japanese-origins/jomon-life-scene.png',
      alt: '縄文時代の暮らし',
      caption: '竪穴住居・縄文土器・貝塚での狩猟採集生活',
    },
    {
      type: 'summary-point',
      text: '気候が<ruby>温暖<rp>(</rp><rt>おんだん</rt><rp>)</rp></ruby>に → <span class="keyword">縄文時代</span>：<span class="keyword">縄文土器</span>で煮炊き、<span class="keyword">たて穴住居</span>で定住生活！',
    },
    {
      type: 'quiz',
      question: '表面に縄目のような文様がある土器は？',
      options: [
        { letter: 'A', text: '弥生土器', correct: false },
        { letter: 'B', text: '須恵器', correct: false },
        { letter: 'C', text: '土師器', correct: false },
        { letter: 'D', text: '縄文土器', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>縄文土器<rp>(</rp><rt>じょうもんどき</rt><rp>)</rp></ruby>」</strong>です。<ruby>縄<rp>(</rp><rt>なわ</rt><rp>)</rp></ruby>を転がしてつけた<ruby>文様<rp>(</rp><rt>もんよう</rt><rp>)</rp></ruby>が特徴的です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'この人形は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>土偶<rp>(</rp><rt>どぐう</rt><rp>)</rp></ruby></span></strong>だよ。<ruby>祈<rp>(</rp><rt>いの</rt><rp>)</rp></ruby>りや<ruby>魔<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>よけのために作ったと考えられているんだ。女性の姿をしたものが多いのが特徴だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>貝殻<rp>(</rp><rt>かいがら</rt><rp>)</rp></ruby>がたくさん積まれた場所もあるみたいですけど、あれは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'happy',
      text: 'いいところに気づいたね！あれは<strong><span class="keyword"><ruby>貝塚<rp>(</rp><rt>かいづか</rt><rp>)</rp></ruby></span></strong>だよ。食べ終わった<ruby>貝殻<rp>(</rp><rt>かいがら</rt><rp>)</rp></ruby>や道具が捨てられた場所で、<ruby>縄文<rp>(</rp><rt>じょうもん</rt><rp>)</rp></ruby>人の生活を知る大切な手がかりなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '大きな<ruby>集落<rp>(</rp><rt>しゅうらく</rt><rp>)</rp></ruby>もあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'excited',
      text: '<ruby>青森県<rp>(</rp><rt>あおもりけん</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>三内丸山遺跡<rp>(</rp><rt>さんないまるやまいせき</rt><rp>)</rp></ruby></span></strong>は約1700年も続いた大きな集落だよ。クリの木を<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>したり、ヒスイの<ruby>装飾品<rp>(</rp><rt>そうしょくひん</rt><rp>)</rp></ruby>も見つかっているんだ。遠くとの<ruby>交易<rp>(</rp><rt>こうえき</rt><rp>)</rp></ruby>も行われていたことがわかるよ',
    },
    {
      type: 'image',
      src: '/images/history/grade1/2-japanese-origins/jomon-pottery-types.png',
      alt: '縄文土器と土偶',
      caption: '火焔型土器に代表される縄文土器の特徴と土偶',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">土偶</span>（祈り・魔よけ）、<span class="keyword">貝塚</span>（生活のあと）、<span class="keyword">三内丸山遺跡</span>（大規模集落・交易の証拠）が重要！',
    },
    {
      type: 'quiz',
      question: '縄文人が地面を掘り柱を立てて造った家は？',
      options: [
        { letter: 'A', text: '武家屋敷', correct: false },
        { letter: 'B', text: '書院造', correct: false },
        { letter: 'C', text: 'たて穴住居', correct: true },
        { letter: 'D', text: '高床倉庫', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>たて穴住居<rp>(</rp><rt>たてあなじゅうきょ</rt><rp>)</rp></ruby>」</strong>です。地面を<ruby>掘<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>り下げて柱を立て、屋根をかけた住居です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby></strong>で<ruby>狩猟<rp>(</rp><rt>しゅりょう</rt><rp>)</rp></ruby>・移動生活、<strong><ruby>岩宿遺跡<rp>(</rp><rt>いわじゅくいせき</rt><rp>)</rp></ruby></strong>で証明',
        '<strong><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>縄文土器<rp>(</rp><rt>じょうもんどき</rt><rp>)</rp></ruby></strong>と<strong><ruby>たて穴住居<rp>(</rp><rt>たてあなじゅうきょ</rt><rp>)</rp></ruby></strong>で定住',
        '<strong><ruby>土偶<rp>(</rp><rt>どぐう</rt><rp>)</rp></ruby></strong>：<ruby>祈<rp>(</rp><rt>いの</rt><rp>)</rp></ruby>りや<ruby>魔<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>よけ、<strong><ruby>貝塚<rp>(</rp><rt>かいづか</rt><rp>)</rp></ruby></strong>：生活のあと',
        '<strong><ruby>三内丸山遺跡<rp>(</rp><rt>さんないまるやまいせき</rt><rp>)</rp></ruby></strong>（<ruby>青森県<rp>(</rp><rt>あおもりけん</rt><rp>)</rp></ruby>）：縄文時代の大規模集落',
      ],
    },
  ],
};
