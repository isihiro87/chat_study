import type { HistoryChat } from '../../../../../../../history-chat/types';

export const fallOfBakufuChat: HistoryChat = {
  id: 'fall-of-bakufu',
  icon: '🏯',
  title: '江戸幕府の滅亡',
  subtitle: '〜幕末〜 薩長同盟から大政奉還へ',
  characters: [
    {
      id: 'teacher',
      name: '幕末先生',
      emoji: '🧑‍🏫',
      colorFrom: '#b45309',
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
      text: '1860年代の日本',
    },
    {
      type: 'narrator',
      text: '<ruby>長州藩<rp>(</rp><rt>ちょうしゅうはん</rt><rp>)</rp></ruby>と<ruby>薩摩藩<rp>(</rp><rt>さつまはん</rt><rp>)</rp></ruby>は外国と<ruby>戦<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>い（<span data-tooltip="1863〜64年、長州藩が外国船を砲撃し、報復を受けた戦争"><ruby>下関戦争<rp>(</rp><rt>しものせきせんそう</rt><rp>)</rp></ruby></span>・<span data-tooltip="1863年、生麦事件をきっかけにイギリスと薩摩藩が戦った戦争"><ruby>薩英戦争<rp>(</rp><rt>さつえいせんそう</rt><rp>)</rp></ruby></span>）、<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の強さを思い知りました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>下関戦争<rp>(</rp><rt>しものせきせんそう</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>薩英戦争<rp>(</rp><rt>さつえいせんそう</rt><rp>)</rp></ruby></span></strong>で<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の<ruby>軍事力<rp>(</rp><rt>ぐんじりょく</rt><rp>)</rp></ruby>の強さを思い知った<ruby>薩摩<rp>(</rp><rt>さつま</rt><rp>)</rp></ruby>と<ruby>長州<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>は、「<ruby>攘夷<rp>(</rp><rt>じょうい</rt><rp>)</rp></ruby>は<ruby>無理<rp>(</rp><rt>むり</rt><rp>)</rp></ruby>だ。<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>を<ruby>倒<rp>(</rp><rt>たお</rt><rp>)</rp></ruby>して新しい国を作ろう」と考えるようになったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'でも<ruby>薩摩<rp>(</rp><rt>さつま</rt><rp>)</rp></ruby>と<ruby>長州<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>って、もともと<ruby>仲<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>が悪かったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいところに気づいたね！そこで<ruby>登場<rp>(</rp><rt>とうじょう</rt><rp>)</rp></ruby>するのが<strong><span class="keyword"><span data-tooltip="土佐藩出身の志士。対立する薩摩藩と長州藩を仲介し同盟を結ばせた"><ruby>坂本龍馬<rp>(</rp><rt>さかもとりょうま</rt><rp>)</rp></ruby></span></span></strong>だよ。<ruby>土佐藩<rp>(</rp><rt>とさはん</rt><rp>)</rp></ruby>出身の<ruby>龍馬<rp>(</rp><rt>りょうま</rt><rp>)</rp></ruby>が<ruby>仲<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>を取り持って、1866年に<strong><span class="keyword"><span data-tooltip="1866年、薩摩藩と長州藩が倒幕のために結んだ同盟"><ruby>薩長同盟<rp>(</rp><rt>さっちょうどうめい</rt><rp>)</rp></ruby></span></span></strong>が結ばれたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>坂本龍馬<rp>(</rp><rt>さかもとりょうま</rt><rp>)</rp></ruby>が<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>する<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>を結びつけたんですね！すごい！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">坂本龍馬</span>の<ruby>仲立<rp>(</rp><rt>なかだ</rt><rp>)</rp></ruby>ちで<span class="keyword">薩長同盟</span>（1866年）が成立。<ruby>倒幕<rp>(</rp><rt>とうばく</rt><rp>)</rp></ruby>の中心勢力に！',
    },
    {
      type: 'quiz',
      question: '1866年、薩摩藩と長州藩を仲介して同盟を結ばせた人物は？',
      options: [
        { letter: 'A', text: '高杉晋作', correct: false },
        { letter: 'B', text: '西郷隆盛', correct: false },
        { letter: 'C', text: '木戸孝允', correct: false },
        { letter: 'D', text: '坂本龍馬', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>坂本龍馬<rp>(</rp><rt>さかもとりょうま</rt><rp>)</rp></ruby>」</strong>です。<ruby>土佐藩<rp>(</rp><rt>とさはん</rt><rp>)</rp></ruby>出身の<ruby>龍馬<rp>(</rp><rt>りょうま</rt><rp>)</rp></ruby>が<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>していた両<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>を結びつけました。',
    },
    {
      type: 'narrator',
      text: '<ruby>民衆<rp>(</rp><rt>みんしゅう</rt><rp>)</rp></ruby>の間では「<strong><span class="keyword"><span data-tooltip="幕末に民衆の間で流行した踊り。世直しへの期待が込められていた">ええじゃないか</span></span></strong>」という<ruby>踊<rp>(</rp><rt>おど</rt><rp>)</rp></ruby>りが<ruby>流行<rp>(</rp><rt>りゅうこう</rt><rp>)</rp></ruby>し、<ruby>世直<rp>(</rp><rt>よなお</rt><rp>)</rp></ruby>しへの<ruby>期待<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>が高まっていました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>倒幕<rp>(</rp><rt>とうばく</rt><rp>)</rp></ruby>の<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>きに対して、<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>はどうしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1867年、15<ruby>代<rp>(</rp><rt>だい</rt><rp>)</rp></ruby><ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>の<strong><span class="keyword"><span data-tooltip="江戸幕府の最後の将軍。大政奉還を行い、政権を朝廷に返した"><ruby>徳川慶喜<rp>(</rp><rt>とくがわよしのぶ</rt><rp>)</rp></ruby></span></span></strong>は<strong><span class="keyword"><span data-tooltip="1867年、将軍が政権を朝廷に返すこと。約260年続いた江戸幕府の政権が終わった"><ruby>大政奉還<rp>(</rp><rt>たいせいほうかん</rt><rp>)</rp></ruby></span></span></strong>を行い、<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>を<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>に返したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '約260年<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いた<ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby>の<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>が終わったんですね...！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">徳川慶喜</span>が<span class="keyword">大政奉還</span>（1867年）で<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>を<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>に返上！',
    },
    {
      type: 'quiz',
      question: '1867年、徳川慶喜が政権を朝廷に返したことを何という？',
      options: [
        { letter: 'A', text: '大政奉還', correct: true },
        { letter: 'B', text: '版籍奉還', correct: false },
        { letter: 'C', text: '廃藩置県', correct: false },
        { letter: 'D', text: '王政復古', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>大政奉還<rp>(</rp><rt>たいせいほうかん</rt><rp>)</rp></ruby>」</strong>です。約260年<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いた<ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby>の<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>が終わりました。',
    },
    {
      type: 'narrator',
      text: 'しかし<ruby>倒幕<rp>(</rp><rt>とうばく</rt><rp>)</rp></ruby>派は<strong><span class="keyword"><span data-tooltip="天皇中心の新政府を作ることを宣言した命令"><ruby>王政復古の大号令<rp>(</rp><rt>おうせいふっこのだいごうれい</rt><rp>)</rp></ruby></span></span></strong>を出し、<strong><span class="keyword"><span data-tooltip="1868〜69年、旧幕府軍と新政府軍が戦った内戦。新政府軍が勝利した"><ruby>戊辰戦争<rp>(</rp><rt>ぼしんせんそう</rt><rp>)</rp></ruby></span></span></strong>が始まります。<ruby>新政府軍<rp>(</rp><rt>しんせいふぐん</rt><rp>)</rp></ruby>が<ruby>勝利<rp>(</rp><rt>しょうり</rt><rp>)</rp></ruby>し、<ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby>は完全に終わりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>下関戦争<rp>(</rp><rt>しものせきせんそう</rt><rp>)</rp></ruby></strong>・<strong><ruby>薩英戦争<rp>(</rp><rt>さつえいせんそう</rt><rp>)</rp></ruby></strong>で<ruby>攘夷<rp>(</rp><rt>じょうい</rt><rp>)</rp></ruby>を<ruby>断念<rp>(</rp><rt>だんねん</rt><rp>)</rp></ruby>、<ruby>倒幕<rp>(</rp><rt>とうばく</rt><rp>)</rp></ruby>へ',
        '<strong><ruby>坂本龍馬<rp>(</rp><rt>さかもとりょうま</rt><rp>)</rp></ruby></strong>の<ruby>仲立<rp>(</rp><rt>なかだ</rt><rp>)</rp></ruby>ちで<strong><ruby>薩長同盟<rp>(</rp><rt>さっちょうどうめい</rt><rp>)</rp></ruby></strong>（1866年）',
        '<strong><ruby>大政奉還<rp>(</rp><rt>たいせいほうかん</rt><rp>)</rp></ruby></strong>（1867年）：<ruby>慶喜<rp>(</rp><rt>よしのぶ</rt><rp>)</rp></ruby>が<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>を返上',
        '<strong><ruby>戊辰戦争<rp>(</rp><rt>ぼしんせんそう</rt><rp>)</rp></ruby></strong>で<ruby>新政府軍<rp>(</rp><rt>しんせいふぐん</rt><rp>)</rp></ruby>が<ruby>勝利<rp>(</rp><rt>しょうり</rt><rp>)</rp></ruby>、<ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby>の終わり',
      ],
    },
  ],
};
