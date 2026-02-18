import type { HistoryChat } from '../../../../../../../history-chat/types';

export const freedomMovementChat: HistoryChat = {
  id: 'freedom-movement',
  icon: '✊',
  title: '自由民権運動',
  subtitle: '〜明治〜 国民の権利を求めて',
  characters: [
    {
      id: 'teacher',
      name: '民権博士',
      emoji: '✊',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '1874年',
    },
    {
      type: 'narrator',
      text: '政府が一方的に<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>を進める中、国民の間から「<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>に<ruby>参加<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>したい！」という声が高まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>薩摩<rp>(</rp><rt>さつま</rt><rp>)</rp></ruby>・<ruby>長州<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>の出身者だけが<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>する<ruby>藩閥政治<rp>(</rp><rt>はんばつせいじ</rt><rp>)</rp></ruby>に<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><span data-tooltip="土佐藩出身の政治家。自由民権運動の指導者で、自由党を結成した"><ruby>板垣退助<rp>(</rp><rt>いたがきたいすけ</rt><rp>)</rp></ruby></span></span></strong>らが立ち上がったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>板垣退助<rp>(</rp><rt>いたがきたいすけ</rt><rp>)</rp></ruby>は何をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1874年に<strong><span class="keyword"><span data-tooltip="国民が選んだ議員による国会の開設を政府に求めた文書"><ruby>民撰議院設立<rp>(</rp><rt>みんせんぎいんせつりつ</rt><rp>)</rp></ruby>の<ruby>建白書<rp>(</rp><rt>けんぱくしょ</rt><rp>)</rp></ruby></span></span></strong>を<ruby>提出<rp>(</rp><rt>ていしゅつ</rt><rp>)</rp></ruby>したんだ！国民が選んだ<ruby>議員<rp>(</rp><rt>ぎいん</rt><rp>)</rp></ruby>による国会を開くべきだと<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えたんだよ。これが<strong><span class="keyword"><span data-tooltip="国会の開設や憲法の制定など、国民の政治参加を求めた運動"><ruby>自由民権運動<rp>(</rp><rt>じゆうみんけんうんどう</rt><rp>)</rp></ruby></span></span></strong>の始まりだね',
    },
    {
      type: 'summary-point',
      text: '1874年、<span class="keyword">板垣退助</span>が<span class="keyword">民撰議院設立の建白書</span>を提出 → <span class="keyword">自由民権運動</span>のはじまり！',
    },
    {
      type: 'quiz',
      question: '1874年に板垣退助らが提出した、国会開設を求める文書は？',
      options: [
        { letter: 'A', text: '五箇条の御誓文', correct: false },
        { letter: 'B', text: '民撰議院設立の建白書', correct: true },
        { letter: 'C', text: '大日本帝国憲法', correct: false },
        { letter: 'D', text: '教育勅語', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>民撰議院設立<rp>(</rp><rt>みんせんぎいんせつりつ</rt><rp>)</rp></ruby>の<ruby>建白書<rp>(</rp><rt>けんぱくしょ</rt><rp>)</rp></ruby>」</strong>です。<ruby>国会開設<rp>(</rp><rt>こっかいかいせつ</rt><rp>)</rp></ruby>を求める<ruby>自由民権運動<rp>(</rp><rt>じゆうみんけんうんどう</rt><rp>)</rp></ruby>の始まりとなりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>言論<rp>(</rp><rt>げんろん</rt><rp>)</rp></ruby>だけでなく、<ruby>武力<rp>(</rp><rt>ぶりょく</rt><rp>)</rp></ruby>で<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>した人もいたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1877年、<strong><span class="keyword"><ruby>西郷隆盛<rp>(</rp><rt>さいごうたかもり</rt><rp>)</rp></ruby></span></strong>を中心に<strong><span class="keyword"><span data-tooltip="西郷隆盛を中心に鹿児島の士族が起こした日本最後の内戦"><ruby>西南戦争<rp>(</rp><rt>せいなんせんそう</rt><rp>)</rp></ruby></span></span></strong>が起きたんだ。でも<span class="keyword"><ruby>徴兵制<rp>(</rp><rt>ちょうへいせい</rt><rp>)</rp></ruby></span>の政府<ruby>軍<rp>(</rp><rt>ぐん</rt><rp>)</rp></ruby>が勝利して、<ruby>武力<rp>(</rp><rt>ぶりょく</rt><rp>)</rp></ruby>による<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>は終わったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>武力<rp>(</rp><rt>ぶりょく</rt><rp>)</rp></ruby>がダメなら、その後はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>言論<rp>(</rp><rt>げんろん</rt><rp>)</rp></ruby>による運動が中心になったんだ。政府は10年後の<ruby>国会開設<rp>(</rp><rt>こっかいかいせつ</rt><rp>)</rp></ruby>を<ruby>約束<rp>(</rp><rt>やくそく</rt><rp>)</rp></ruby>したよ。そこで国会に備えて<ruby>政党<rp>(</rp><rt>せいとう</rt><rp>)</rp></ruby>が作られたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな<ruby>政党<rp>(</rp><rt>せいとう</rt><rp>)</rp></ruby>ができたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>板垣退助<rp>(</rp><rt>いたがきたいすけ</rt><rp>)</rp></ruby>の<strong><span class="keyword"><span data-tooltip="板垣退助を党首として1881年に結成された日本初の政党。フランス流の自由主義を主張"><ruby>自由党<rp>(</rp><rt>じゆうとう</rt><rp>)</rp></ruby></span></span></strong>と、<strong><span class="keyword"><span data-tooltip="大隈重信を党首として結成された政党。イギリス流の立憲政治を主張"><ruby>大隈重信<rp>(</rp><rt>おおくましげのぶ</rt><rp>)</rp></ruby></span></span></strong>の<strong><span class="keyword"><ruby>立憲改進党<rp>(</rp><rt>りっけんかいしんとう</rt><rp>)</rp></ruby></span></strong>だよ。日本初の<ruby>政党<rp>(</rp><rt>せいとう</rt><rp>)</rp></ruby>が<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>したんだ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">西南戦争</span>で武力抵抗が終結 → 国会開設の約束 → <span class="keyword">自由党</span>（板垣）・<span class="keyword">立憲改進党</span>（大隈）が誕生！',
    },
    {
      type: 'quiz',
      question: '1881年に板垣退助を党首として結成された政党は？',
      options: [
        { letter: 'A', text: '自由党', correct: true },
        { letter: 'B', text: '立憲改進党', correct: false },
        { letter: 'C', text: '立憲政友会', correct: false },
        { letter: 'D', text: '国民党', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>自由党<rp>(</rp><rt>じゆうとう</rt><rp>)</rp></ruby>」</strong>です。フランス<ruby>流<rp>(</rp><rt>りゅう</rt><rp>)</rp></ruby>の<ruby>急進的<rp>(</rp><rt>きゅうしんてき</rt><rp>)</rp></ruby>な<ruby>自由主義<rp>(</rp><rt>じゆうしゅぎ</rt><rp>)</rp></ruby>を<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>板垣退助<rp>(</rp><rt>いたがきたいすけ</rt><rp>)</rp></ruby></strong>が<strong><ruby>民撰議院設立<rp>(</rp><rt>みんせんぎいんせつりつ</rt><rp>)</rp></ruby>の<ruby>建白書<rp>(</rp><rt>けんぱくしょ</rt><rp>)</rp></ruby></strong>を<ruby>提出<rp>(</rp><rt>ていしゅつ</rt><rp>)</rp></ruby>（1874年）',
        '<strong><ruby>西南戦争<rp>(</rp><rt>せいなんせんそう</rt><rp>)</rp></ruby></strong>（1877年）で<ruby>武力抵抗<rp>(</rp><rt>ぶりょくていこう</rt><rp>)</rp></ruby>が<ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>',
        '<ruby>国会開設<rp>(</rp><rt>こっかいかいせつ</rt><rp>)</rp></ruby>の<ruby>約束<rp>(</rp><rt>やくそく</rt><rp>)</rp></ruby>（1881年）',
        '<strong><ruby>自由党<rp>(</rp><rt>じゆうとう</rt><rp>)</rp></ruby></strong>（<ruby>板垣<rp>(</rp><rt>いたがき</rt><rp>)</rp></ruby>）、<strong><ruby>立憲改進党<rp>(</rp><rt>りっけんかいしんとう</rt><rp>)</rp></ruby></strong>（<ruby>大隈<rp>(</rp><rt>おおくま</rt><rp>)</rp></ruby>）の<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
