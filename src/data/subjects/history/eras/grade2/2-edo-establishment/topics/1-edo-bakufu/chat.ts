import type { HistoryChat } from '../../../../../../../history-chat/types';

export const edoBakufuChat: HistoryChat = {
  id: 'edo-bakufu',
  icon: '🏯',
  title: '江戸幕府の成立',
  subtitle: '〜江戸時代〜 徳川家康と幕藩体制のはじまり',
  characters: [
    {
      id: 'ieyasu',
      name: '家康先生',
      emoji: '🏯',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
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
      text: '1600年〜1603年',
    },
    {
      type: 'narrator',
      text: '<ruby>豊臣秀吉<rp>(</rp><rt>とよとみひでよし</rt><rp>)</rp></ruby>の死後、天下の<ruby>実権<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>をめぐって有力<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>が対立。<strong><span class="keyword"><ruby>関ヶ原<rp>(</rp><rt>せきがはら</rt><rp>)</rp></ruby>の<ruby>戦<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>い</span></strong>（1600年）が起こりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      expression: 'explaining',
      text: '<span data-tooltip="岐阜県関ケ原町で行われた、天下分け目の大合戦"><strong>関ヶ原の戦い</strong></span>では、<ruby>徳川家康<rp>(</rp><rt>とくがわいえやす</rt><rp>)</rp></ruby>率いる東軍と、<ruby>石田三成<rp>(</rp><rt>いしだみつなり</rt><rp>)</rp></ruby>率いる西軍がぶつかったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '東軍と西軍、どうして分かれて戦ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      expression: 'happy',
      text: '秀吉の死後、家康が力を持ちすぎることに不満を持った大名たちが西軍に集まったんだよ。結果、家康の東軍が勝利して天下を手にしたんだ',
    },
    {
      type: 'narrator',
      text: '家康率いる東軍が勝利し、1603年に<strong><span class="keyword"><ruby>征夷大将軍<rp>(</rp><rt>せいいたいしょうぐん</rt><rp>)</rp></ruby></span></strong>に任じられ、<strong><span class="keyword"><ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby></span></strong>を開きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '関ヶ原の戦いからたった3年で幕府を開いたんですね！',
    },
    {
      type: 'summary-point',
      text: '1600年 <span class="keyword">関ヶ原の戦い</span>で家康が勝利 → 1603年 <span class="keyword">征夷大将軍</span>に任じられ<span class="keyword">江戸幕府</span>を開く',
    },
    {
      type: 'quiz',
      question: '1600年、徳川家康が勝利した天下分け目の戦いは？',
      options: [
        { letter: 'A', text: '長篠の戦い', correct: false },
        { letter: 'B', text: '大坂の陣', correct: false },
        { letter: 'C', text: '関ヶ原の戦い', correct: true },
        { letter: 'D', text: '桶狭間の戦い', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>関ヶ原<rp>(</rp><rt>せきがはら</rt><rp>)</rp></ruby>の戦い」</strong>です。1600年、東軍（家康）と西軍（<ruby>石田三成<rp>(</rp><rt>いしだみつなり</rt><rp>)</rp></ruby>ら）が<ruby>激突<rp>(</rp><rt>げきとつ</rt><rp>)</rp></ruby>し、家康が勝利しました。',
    },
    {
      type: 'narrator',
      text: '幕府は大名を3種類に分けて<ruby>統制<rp>(</rp><rt>とうせい</rt><rp>)</rp></ruby>しました。<strong><span class="keyword"><ruby>親藩<rp>(</rp><rt>しんぱん</rt><rp>)</rp></ruby></span></strong>（<ruby>徳川<rp>(</rp><rt>とくがわ</rt><rp>)</rp></ruby>一族）・<strong><span class="keyword"><ruby>譜代<rp>(</rp><rt>ふだい</rt><rp>)</rp></ruby></span></strong>（古くからの家臣）・<strong><span class="keyword"><ruby>外様<rp>(</rp><rt>とざま</rt><rp>)</rp></ruby></span></strong>（関ヶ原以降に従った大名）です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<span data-tooltip="関ヶ原の戦い以降に徳川氏に従った大名"><strong>外様</strong></span>大名はどういう扱いだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      expression: 'explaining',
      text: '<strong>外様</strong>大名は信用が低いから、江戸から遠い場所に配置されたんだ。逆に<strong>譜代</strong>大名は要所に置かれたよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      expression: 'excited',
      text: 'さらに<strong><span class="keyword"><ruby>武家諸法度<rp>(</rp><rt>ぶけしょはっと</rt><rp>)</rp></ruby></span></strong>で大名のルールを定め、<strong><span class="keyword"><ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby></span></strong>で1年おきに江戸と<ruby>領地<rp>(</rp><rt>りょうち</rt><rp>)</rp></ruby>を往復させたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '参勤交代って、なんのためにあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      expression: 'thinking',
      text: '<span data-tooltip="大名が1年おきに領地と江戸を往復する制度。大名の経済力を弱め反乱を防ぐ目的があった"><strong>参勤交代</strong></span>は行列の費用が膨大だったから、大名の<ruby>経済力<rp>(</rp><rt>けいざいりょく</rt><rp>)</rp></ruby>を弱めて<ruby>反乱<rp>(</rp><rt>はんらん</rt><rp>)</rp></ruby>を防ぐ効果があったんだよ。こうして<strong><span class="keyword"><ruby>幕藩体制<rp>(</rp><rt>ばくはんたいせい</rt><rp>)</rp></ruby></span></strong>が築かれたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！お金を使わせて力を弱めたんですね！',
    },
    {
      type: 'summary-point',
      text: '大名を<span class="keyword">親藩</span>・<span class="keyword">譜代</span>・<span class="keyword">外様</span>に分類し、<span class="keyword">武家諸法度</span>・<span class="keyword">参勤交代</span>で統制 → <span class="keyword">幕藩体制</span>の確立',
    },
    {
      type: 'quiz',
      question: '大名が1年おきに江戸と領地を往復する制度は？',
      options: [
        { letter: 'A', text: '参勤交代', correct: true },
        { letter: 'B', text: '検地', correct: false },
        { letter: 'C', text: '鎖国', correct: false },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby>」</strong>です。3代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><ruby>家光<rp>(</rp><rt>いえみつ</rt><rp>)</rp></ruby>の時に制度化され、大名の経済力を弱めて反乱を防ぐ目的がありました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>関ヶ原<rp>(</rp><rt>せきがはら</rt><rp>)</rp></ruby>の戦い</strong>（1600年）で家康が天下を握る',
        '1603年に<strong><ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby></strong>を開く',
        '大名を<strong><ruby>親藩<rp>(</rp><rt>しんぱん</rt><rp>)</rp></ruby></strong>・<strong><ruby>譜代<rp>(</rp><rt>ふだい</rt><rp>)</rp></ruby></strong>・<strong><ruby>外様<rp>(</rp><rt>とざま</rt><rp>)</rp></ruby></strong>に分類して統制',
        '<strong><ruby>武家諸法度<rp>(</rp><rt>ぶけしょはっと</rt><rp>)</rp></ruby></strong>・<strong><ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby></strong>で<strong><ruby>幕藩体制<rp>(</rp><rt>ばくはんたいせい</rt><rp>)</rp></ruby></strong>を確立',
      ],
    },
  ],
};
