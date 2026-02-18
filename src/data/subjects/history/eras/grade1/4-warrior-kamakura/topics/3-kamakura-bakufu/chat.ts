import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kamakuraBakufuChat: HistoryChat = {
  id: 'kamakura-bakufu',
  icon: '🏯',
  title: '鎌倉幕府の成立',
  subtitle: '〜1185年〜 源頼朝と御恩・奉公',
  characters: [
    {
      id: 'yoritomo',
      name: '源頼朝',
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
      text: '1185年〜',
    },
    {
      type: 'narrator',
      text: '<ruby>平氏<rp>(</rp><rt>へいし</rt><rp>)</rp></ruby>を<ruby>滅<rp>(</rp><rt>ほろ</rt><rp>)</rp></ruby>ぼした<strong><span class="keyword"><ruby>源頼朝<rp>(</rp><rt>みなもとのよりとも</rt><rp>)</rp></ruby></span></strong>は、<ruby>鎌倉<rp>(</rp><rt>かまくら</rt><rp>)</rp></ruby>を<ruby>拠点<rp>(</rp><rt>きょてん</rt><rp>)</rp></ruby>に武士による新しい政治のしくみを作りました。<strong><span class="keyword"><ruby>鎌倉幕府<rp>(</rp><rt>かまくらばくふ</rt><rp>)</rp></ruby></span></strong>の<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoritomo',
      expression: 'explaining',
      text: '私は全国に<strong><span class="keyword"><ruby>守護<rp>(</rp><rt>しゅご</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>地頭<rp>(</rp><rt>じとう</rt><rp>)</rp></ruby></span></strong>を置いた。<span data-tooltip="国ごとに置かれ、軍事や警察の仕事をする役職">守護</span>は国ごとに軍事・<ruby>警察<rp>(</rp><rt>けいさつ</rt><rp>)</rp></ruby>を担当し、<span data-tooltip="荘園や公領に置かれ、土地の管理や年貢の取り立てをする役職">地頭</span>は<ruby>荘園<rp>(</rp><rt>しょうえん</rt><rp>)</rp></ruby>・<ruby>公領<rp>(</rp><rt>こうりょう</rt><rp>)</rp></ruby>の管理や<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>の<ruby>徴収<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>を行うんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '将軍と武士たちはどんな関係だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoritomo',
      expression: 'happy',
      text: 'いい質問だ。<strong><span class="keyword"><ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby></span></strong>と呼ばれる武士たちは将軍に<ruby>忠誠<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>を<ruby>誓<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>い、戦のときに<ruby>駆<rp>(</rp><rt>か</rt><rp>)</rp></ruby>けつける<strong><span class="keyword"><ruby>奉公<rp>(</rp><rt>ほうこう</rt><rp>)</rp></ruby></span></strong>をする。その見返りとして将軍から<ruby>領地<rp>(</rp><rt>りょうち</rt><rp>)</rp></ruby>をいただく<strong><span class="keyword"><ruby>御恩<rp>(</rp><rt>ごおん</rt><rp>)</rp></ruby></span></strong>を受けるのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<strong>御恩</strong>と<strong>奉公</strong>で、将軍と<strong>御家人</strong>が結ばれていたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">鎌倉幕府</span>：<span class="keyword">守護</span>（軍事・警察）と<span class="keyword">地頭</span>（土地管理・年貢徴収）を設置。<span class="keyword">御恩</span>と<span class="keyword">奉公</span>で将軍と<span class="keyword">御家人</span>が結ばれる',
    },
    {
      type: 'quiz',
      question: '鎌倉幕府で、荘園・公領の管理や年貢の徴収を行った役職は？',
      options: [
        { letter: 'A', text: '地頭', correct: true },
        { letter: 'B', text: '守護', correct: false },
        { letter: 'C', text: '執権', correct: false },
        { letter: 'D', text: '関白', correct: false },
      ],
      explanation: '<strong>正解はA「<ruby>地頭<rp>(</rp><rt>じとう</rt><rp>)</rp></ruby>」</strong>です。<strong>地頭</strong>は<ruby>荘園<rp>(</rp><rt>しょうえん</rt><rp>)</rp></ruby>・<ruby>公領<rp>(</rp><rt>こうりょう</rt><rp>)</rp></ruby>に置かれ、土地の管理や<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>の<ruby>徴収<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>を行いました。<ruby>守護<rp>(</rp><rt>しゅご</rt><rp>)</rp></ruby>は国ごとに置かれ、軍事・<ruby>警察<rp>(</rp><rt>けいさつ</rt><rp>)</rp></ruby>を担当しました。',
    },
    {
      type: 'narrator',
      text: '<ruby>頼朝<rp>(</rp><rt>よりとも</rt><rp>)</rp></ruby>の死後、妻の<ruby>北条政子<rp>(</rp><rt>ほうじょうまさこ</rt><rp>)</rp></ruby>の一族である<strong><span class="keyword"><ruby>北条氏<rp>(</rp><rt>ほうじょうし</rt><rp>)</rp></ruby></span></strong>が<strong><span class="keyword"><ruby>執権<rp>(</rp><rt>しっけん</rt><rp>)</rp></ruby></span></strong>として<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>実権<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>を握りました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoritomo',
      expression: 'thinking',
      text: '1221年、朝廷の<ruby>後鳥羽上皇<rp>(</rp><rt>ごとばじょうこう</rt><rp>)</rp></ruby>が幕府を倒そうと<strong><span class="keyword"><ruby>承久<rp>(</rp><rt>じょうきゅう</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></span></strong>を起こしたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '朝廷が幕府に戦いを<ruby>挑<rp>(</rp><rt>いど</rt><rp>)</rp></ruby>んだんですか！？結果はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoritomo',
      expression: 'explaining',
      text: '<ruby>北条政子<rp>(</rp><rt>ほうじょうまさこ</rt><rp>)</rp></ruby>の<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えで<strong>御家人</strong>たちが<ruby>団結<rp>(</rp><rt>だんけつ</rt><rp>)</rp></ruby>し、幕府が勝利した。その後、<ruby>北条泰時<rp>(</rp><rt>ほうじょうやすとき</rt><rp>)</rp></ruby>が武士の法律である<strong><span class="keyword"><ruby>御成敗式目<rp>(</rp><rt>ごせいばいしきもく</rt><rp>)</rp></ruby></span></strong>（<ruby>貞永式目<rp>(</rp><rt>じょうえいしきもく</rt><rp>)</rp></ruby>）を定めたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<strong>御成敗式目</strong>で<ruby>裁判<rp>(</rp><rt>さいばん</rt><rp>)</rp></ruby>の基準が明確になったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">北条氏</span>が<span class="keyword">執権</span>として実権を握る。<span class="keyword">承久の乱</span>で幕府が朝廷に勝利 → <span class="keyword">御成敗式目</span>（武士の法律）を制定',
    },
    {
      type: 'quiz',
      question: '北条泰時が定めた武士の法律は？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: true },
        { letter: 'B', text: '大宝律令', correct: false },
        { letter: 'C', text: '十七条の憲法', correct: false },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はA「<ruby>御成敗式目<rp>(</rp><rt>ごせいばいしきもく</rt><rp>)</rp></ruby>」</strong>です。1232年に<ruby>北条泰時<rp>(</rp><rt>ほうじょうやすとき</rt><rp>)</rp></ruby>が制定した武士のための法律で、<ruby>裁判<rp>(</rp><rt>さいばん</rt><rp>)</rp></ruby>の基準を示しました。<ruby>貞永式目<rp>(</rp><rt>じょうえいしきもく</rt><rp>)</rp></ruby>とも呼ばれます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>鎌倉幕府<rp>(</rp><rt>かまくらばくふ</rt><rp>)</rp></ruby></strong>：<ruby>源頼朝<rp>(</rp><rt>みなもとのよりとも</rt><rp>)</rp></ruby>が<ruby>鎌倉<rp>(</rp><rt>かまくら</rt><rp>)</rp></ruby>に開いた武士の<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>',
        '<strong><ruby>守護<rp>(</rp><rt>しゅご</rt><rp>)</rp></ruby></strong>（軍事・<ruby>警察<rp>(</rp><rt>けいさつ</rt><rp>)</rp></ruby>）・<strong><ruby>地頭<rp>(</rp><rt>じとう</rt><rp>)</rp></ruby></strong>（土地管理・<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby><ruby>徴収<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>）を設置',
        '<strong><ruby>御恩<rp>(</rp><rt>ごおん</rt><rp>)</rp></ruby></strong>と<strong><ruby>奉公<rp>(</rp><rt>ほうこう</rt><rp>)</rp></ruby></strong>：将軍と<strong><ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby></strong>の<ruby>主従関係<rp>(</rp><rt>しゅじゅうかんけい</rt><rp>)</rp></ruby>',
        '<strong><ruby>執権<rp>(</rp><rt>しっけん</rt><rp>)</rp></ruby></strong>：<strong><ruby>北条氏<rp>(</rp><rt>ほうじょうし</rt><rp>)</rp></ruby></strong>が幕府の実権を握る。<strong><ruby>承久<rp>(</rp><rt>じょうきゅう</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></strong>で朝廷に勝利',
        '<strong><ruby>御成敗式目<rp>(</rp><rt>ごせいばいしきもく</rt><rp>)</rp></ruby></strong>：<ruby>北条泰時<rp>(</rp><rt>ほうじょうやすとき</rt><rp>)</rp></ruby>が定めた武士の法律',
      ],
    },
  ],
};
