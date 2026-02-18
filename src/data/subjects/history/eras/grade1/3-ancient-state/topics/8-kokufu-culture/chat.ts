import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kokufuCultureChat: HistoryChat = {
  id: 'kokufu-culture',
  icon: '📖',
  title: '国風文化',
  subtitle: '〜10〜11世紀〜 かな文字と日本独自の文化',
  characters: [
    {
      id: 'murasaki',
      name: '文化の先生',
      emoji: '👩',
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
      text: '10〜11世紀',
    },
    {
      type: 'narrator',
      text: '<ruby>遣唐使<rp>(</rp><rt>けんとうし</rt><rp>)</rp></ruby>の中止後、日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>国風文化<rp>(</rp><rt>こくふうぶんか</rt><rp>)</rp></ruby></span></strong>が発展しました。<strong><span class="keyword"><ruby>仮名文字<rp>(</rp><rt>かなもじ</rt><rp>)</rp></ruby></span></strong>が生まれ、<ruby>優<rp>(</rp><rt>すぐ</rt><rp>)</rp></ruby>れた文学作品が<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'murasaki',
      expression: 'explaining',
      text: '<span data-tooltip="漢字をもとにして日本で独自に作られた文字。ひらがなとカタカナがある"><ruby>仮名文字<rp>(</rp><rt>かなもじ</rt><rp>)</rp></ruby></span>ができたことで、日本語の<ruby>繊細<rp>(</rp><rt>せんさい</rt><rp>)</rp></ruby>な<ruby>感情<rp>(</rp><rt>かんじょう</rt><rp>)</rp></ruby>を自由に表現できるようになったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '仮名文字ができて、どんな文学作品が生まれたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'murasaki',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>紫式部<rp>(</rp><rt>むらさきしきぶ</rt><rp>)</rp></ruby></span></strong>が書いた<strong><span class="keyword"><ruby>源氏物語<rp>(</rp><rt>げんじものがたり</rt><rp>)</rp></ruby></span></strong>は、<ruby>光源氏<rp>(</rp><rt>ひかるげんじ</rt><rp>)</rp></ruby>の一生を<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>いた世界最古級の<ruby>長編小説<rp>(</rp><rt>ちょうへんしょうせつ</rt><rp>)</rp></ruby>なんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '世界最古級！今から千年も前の小説がそんなにすごいんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">国風文化</span>：遣唐使中止後に発展。<span class="keyword">仮名文字</span>が生まれ、<span class="keyword">紫式部</span>の<span class="keyword">源氏物語</span>など優れた文学が誕生！',
    },
    {
      type: 'quiz',
      question: '紫式部が書いた長編物語は？',
      options: [
        { letter: 'A', text: '源氏物語', correct: true },
        { letter: 'B', text: '古事記', correct: false },
        { letter: 'C', text: '枕草子', correct: false },
        { letter: 'D', text: '万葉集', correct: false },
      ],
      explanation: '<strong>正解はA「<ruby>源氏物語<rp>(</rp><rt>げんじものがたり</rt><rp>)</rp></ruby>」</strong>です。<ruby>紫式部<rp>(</rp><rt>むらさきしきぶ</rt><rp>)</rp></ruby>が書いた世界最古級の<ruby>長編小説<rp>(</rp><rt>ちょうへんしょうせつ</rt><rp>)</rp></ruby>で、<ruby>光源氏<rp>(</rp><rt>ひかるげんじ</rt><rp>)</rp></ruby>の一生を<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>いています。',
    },
    {
      type: 'narrator',
      text: '<ruby>貴族<rp>(</rp><rt>きぞく</rt><rp>)</rp></ruby>たちは<strong><span class="keyword"><ruby>浄土信仰<rp>(</rp><rt>じょうどしんこう</rt><rp>)</rp></ruby></span></strong>を深め、来世での<ruby>極楽往生<rp>(</rp><rt>ごくらくおうじょう</rt><rp>)</rp></ruby>を<ruby>願<rp>(</rp><rt>ねが</rt><rp>)</rp></ruby>いました。<strong><span class="keyword"><ruby>大和絵<rp>(</rp><rt>やまとえ</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>十二単<rp>(</rp><rt>じゅうにひとえ</rt><rp>)</rp></ruby></span></strong>など日本独自の文化が栄えます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>源氏物語</strong>のほかにも有名な作品はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'murasaki',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>清少納言<rp>(</rp><rt>せいしょうなごん</rt><rp>)</rp></ruby></span></strong>が<ruby>宮中<rp>(</rp><rt>きゅうちゅう</rt><rp>)</rp></ruby>での暮らしや<ruby>四季<rp>(</rp><rt>しき</rt><rp>)</rp></ruby>の美しさを書いた<strong><span class="keyword"><ruby>枕草子<rp>(</rp><rt>まくらのそうし</rt><rp>)</rp></ruby></span></strong>があるよ。「春はあけぼの…」で有名だね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'murasaki',
      expression: 'explaining',
      text: 'さらに天皇の命で<strong><span class="keyword"><ruby>古今和歌集<rp>(</rp><rt>こきんわかしゅう</rt><rp>)</rp></ruby></span></strong>も<ruby>編纂<rp>(</rp><rt>へんさん</rt><rp>)</rp></ruby>されたんだ。<strong>大和絵</strong>や<strong>十二単</strong>も、日本らしい美の<ruby>表<rp>(</rp><rt>あらわ</rt><rp>)</rp></ruby>れだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '唐の文化を吸収した上で、日本独自の文化が花開いたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">清少納言</span>の<span class="keyword">枕草子</span>、<span class="keyword">古今和歌集</span>も誕生。<span class="keyword">浄土信仰</span>・<span class="keyword">大和絵</span>・<span class="keyword">十二単</span>など日本独自の文化が栄えた！',
    },
    {
      type: 'quiz',
      question: '日本語を書き表すために作られた文字は？',
      options: [
        { letter: 'A', text: '漢字', correct: false },
        { letter: 'B', text: '仮名文字', correct: true },
        { letter: 'C', text: 'くさび形文字', correct: false },
        { letter: 'D', text: '甲骨文字', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>仮名文字<rp>(</rp><rt>かなもじ</rt><rp>)</rp></ruby>」</strong>です。<ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>をもとに日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の<ruby>仮名文字<rp>(</rp><rt>かなもじ</rt><rp>)</rp></ruby>（ひらがな・カタカナ）が作られ、文学が発展しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>国風文化<rp>(</rp><rt>こくふうぶんか</rt><rp>)</rp></ruby></strong>：<ruby>遣唐使<rp>(</rp><rt>けんとうし</rt><rp>)</rp></ruby>中止後に発展した日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の文化',
        '<strong><ruby>仮名文字<rp>(</rp><rt>かなもじ</rt><rp>)</rp></ruby></strong>：<ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>から生まれた日本独自の文字',
        '<strong><ruby>源氏物語<rp>(</rp><rt>げんじものがたり</rt><rp>)</rp></ruby></strong>（<strong><ruby>紫式部<rp>(</rp><rt>むらさきしきぶ</rt><rp>)</rp></ruby></strong>）・<strong><ruby>枕草子<rp>(</rp><rt>まくらのそうし</rt><rp>)</rp></ruby></strong>（<strong><ruby>清少納言<rp>(</rp><rt>せいしょうなごん</rt><rp>)</rp></ruby></strong>）・<strong><ruby>古今和歌集<rp>(</rp><rt>こきんわかしゅう</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>浄土信仰<rp>(</rp><rt>じょうどしんこう</rt><rp>)</rp></ruby></strong>：<strong><ruby>平等院鳳凰堂<rp>(</rp><rt>びょうどういんほうおうどう</rt><rp>)</rp></ruby></strong>、<strong><ruby>大和絵<rp>(</rp><rt>やまとえ</rt><rp>)</rp></ruby></strong>・<strong><ruby>十二単<rp>(</rp><rt>じゅうにひとえ</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
