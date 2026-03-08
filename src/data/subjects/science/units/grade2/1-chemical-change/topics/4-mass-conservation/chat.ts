import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const massConservationChat: HistoryChat = {
  id: 'sci2-mass-conservation',
  icon: '⚖️',
  title: '化学変化と物質の質量',
  subtitle: '〜中2化学〜 質量保存の法則・質量比',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '<ruby>質量保存<rp>(</rp><rt>しつりょうほぞん</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>の前と後で、<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>全体の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>はどう変わるのでしょうか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>硫酸<rp>(</rp><rt>りゅうさん</rt><rp>)</rp></ruby>と<ruby>塩化<rp>(</rp><rt>えんか</rt><rp>)</rp></ruby>バリウム<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>を<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜると白い<ruby>沈殿<rp>(</rp><rt>ちんでん</rt><rp>)</rp></ruby>ができるよ。<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>の前と後で全体の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>を<ruby>測<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>ると…？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>沈殿<rp>(</rp><rt>ちんでん</rt><rp>)</rp></ruby>ができたから<ruby>重<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>くなりそう…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '実は<strong><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は変わらない</strong>んだ！これが<strong><span class="keyword"><ruby>質量保存<rp>(</rp><rt>しつりょうほぞん</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></span></strong>だよ',
    },
    {
      type: 'image',
      src: '/images/science/mass-conservation.svg',
      alt: '質量保存の法則',
      caption: '化学変化の前後で物質全体の質量は変わらない',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'でも<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>が出る<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>だと<ruby>軽<rp>(</rp><rt>かる</rt><rp>)</rp></ruby>くなりませんか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>開放<rp>(</rp><rt>かいほう</rt><rp>)</rp></ruby><ruby>容器<rp>(</rp><rt>ようき</rt><rp>)</rp></ruby>だと<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>が<ruby>逃<rp>(</rp><rt>に</rt><rp>)</rp></ruby>げるから<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>かけ<ruby>上<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>が<ruby>減<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>るよ。でも<strong><ruby>密閉<rp>(</rp><rt>みっぺい</rt><rp>)</rp></ruby><ruby>容器<rp>(</rp><rt>ようき</rt><rp>)</rp></ruby></strong>で実験すれば<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は変わらない。<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>はちゃんと成り立っているんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>理由<rp>(</rp><rt>りゆう</rt><rp>)</rp></ruby>は<ruby>簡単<rp>(</rp><rt>かんたん</rt><rp>)</rp></ruby>。<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>で<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>が<strong>新しくできたり</strong>、<strong>なくなったり</strong>しないからだよ。<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の<ruby>組<rp>(</rp><rt>く</rt><rp>)</rp></ruby>み合わせが変わるだけ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">質量保存の法則</span>：化学変化の前後で物質全体の質量は変わらない。原子が新しくできたり、なくなったりしないから',
    },
    {
      type: 'quiz',
      question: '開放容器で炭酸水素ナトリウムと塩酸を混ぜると質量が減ったように見えるのはなぜ？',
      options: [
        { letter: 'A', text: '原子がなくなったから', correct: false },
        { letter: 'B', text: '発生した気体が逃げたから', correct: true },
        { letter: 'C', text: '質量保存の法則が成り立たないから', correct: false },
        { letter: 'D', text: '水が蒸発したから', correct: false },
      ],
      explanation:
        '<strong>正解はB「発生した<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>が<ruby>逃<rp>(</rp><rt>に</rt><rp>)</rp></ruby>げたから」</strong>です。<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>が空気中に<ruby>逃<rp>(</rp><rt>に</rt><rp>)</rp></ruby>げたため<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>かけ<ruby>上<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>が<ruby>減<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>りました。<ruby>密閉<rp>(</rp><rt>みっぺい</rt><rp>)</rp></ruby><ruby>容器<rp>(</rp><rt>ようき</rt><rp>)</rp></ruby>なら<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>されます。',
    },
    {
      type: 'date',
      text: '<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>する<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>の<ruby>比<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '2種類の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつくとき、<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に<strong>一定の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>の<ruby>比<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby></strong>で<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>の<ruby>粉<rp>(</rp><rt>こな</rt><rp>)</rp></ruby>を加熱して<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>させる<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>をくり<ruby>返<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>すと、<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつく<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>の<ruby>比<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>はいつも<strong>4:1</strong>になるよ',
    },
    {
      type: 'image',
      src: '/images/science/mass-ratio-graph.svg',
      alt: '金属と酸素の質量比のグラフ',
      caption: '銅:酸素=4:1、マグネシウム:酸素=3:2',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'マグネシウムもですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>マグネシウム<rp>(</rp><rt>まぐねしうむ</rt><rp>)</rp></ruby>と<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>の<ruby>質量比<rp>(</rp><rt>しつりょうひ</rt><rp>)</rp></ruby>は<strong>3:2</strong>だよ。これらの<ruby>比<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>は<ruby>量<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>を変えても<strong>いつも<ruby>一定<rp>(</rp><rt>いってい</rt><rp>)</rp></ruby></strong>なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>2gに<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>2gを<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>させたらどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>！<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>2gに<ruby>必要<rp>(</rp><rt>ひつよう</rt><rp>)</rp></ruby>な<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>は4:1の<ruby>比<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>から<strong>0.5g</strong>だけ。<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>2gのうち0.5gだけ<ruby>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>われて、<strong>1.5gの<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>が<ruby>余<rp>(</rp><rt>あま</rt><rp>)</rp></ruby>る</strong>よ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">銅:酸素 = 4:1</span>、<span class="keyword">Mg:酸素 = 3:2</span>。質量比は常に一定。余った物質はそのまま残る',
    },
    {
      type: 'quiz',
      question: '銅4gを完全に酸化させると酸化銅は何gできる？（銅:酸素=4:1）',
      options: [
        { letter: 'A', text: '4g', correct: false },
        { letter: 'B', text: '4.5g', correct: false },
        { letter: 'C', text: '5g', correct: true },
        { letter: 'D', text: '8g', correct: false },
      ],
      explanation:
        '<strong>正解はC「5g」</strong>です。<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>:<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>=4:1なので、<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>4gに<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>1gが<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつきます。<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>=4+1=<strong>5g</strong>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>質量保存<rp>(</rp><rt>しつりょうほぞん</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></strong>：<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>の前後で<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>全体の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は変わらない（<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>がなくならない・増えないから）',
        '<ruby>密閉<rp>(</rp><rt>みっぺい</rt><rp>)</rp></ruby><ruby>容器<rp>(</rp><rt>ようき</rt><rp>)</rp></ruby>なら<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>が出ても<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby><ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>。<ruby>開放<rp>(</rp><rt>かいほう</rt><rp>)</rp></ruby>だと<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>かけ<ruby>上<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby><ruby>減<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>る',
        '<strong><ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>:<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby> = 4:1</strong>、<strong>Mg:<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby> = 3:2</strong>（<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に一定の<ruby>質量比<rp>(</rp><rt>しつりょうひ</rt><rp>)</rp></ruby>で<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつく）',
        '<ruby>余<rp>(</rp><rt>あま</rt><rp>)</rp></ruby>った<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>はそのまま残る（<ruby>比<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>を<ruby>超<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>えた分は<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>しない）',
      ],
    },
  ],
};
