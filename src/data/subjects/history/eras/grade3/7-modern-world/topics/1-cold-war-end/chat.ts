import type { HistoryChat } from '../../../../../../../history-chat/types';

export const coldWarEndChat: HistoryChat = {
  id: 'cold-war-end',
  icon: '🕊️',
  title: '冷戦の終結',
  subtitle: '〜現代〜 新しい世界秩序へ',
  characters: [
    {
      id: 'researcher',
      name: '先生',
      emoji: '👨‍🏫',
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
      text: '1985年〜1989年',
    },
    {
      type: 'narrator',
      text: '1985年、ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby>の新しい<ruby>指導者<rp>(</rp><rt>しどうしゃ</rt><rp>)</rp></ruby>として<strong><span class="keyword"><ruby>ゴルバチョフ<rp>(</rp><rt>ごるばちょふ</rt><rp>)</rp></ruby></span></strong>が<ruby>登場<rp>(</rp><rt>とうじょう</rt><rp>)</rp></ruby>しました。彼は<strong><span class="keyword"><ruby>ペレストロイカ<rp>(</rp><rt>ぺれすとろいか</rt><rp>)</rp></ruby></span></strong>（<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>）や<strong><span class="keyword"><ruby>グラスノスチ<rp>(</rp><rt>ぐらすのすち</rt><rp>)</rp></ruby></span></strong>（<ruby>情報公開<rp>(</rp><rt>じょうほうこうかい</rt><rp>)</rp></ruby>）を<ruby>掲<rp>(</rp><rt>かか</rt><rp>)</rp></ruby>げ、ソ連の<ruby>立<rp>(</rp><rt>た</rt><rp>)</rp></ruby>て<ruby>直<rp>(</rp><rt>なお</rt><rp>)</rp></ruby>しを<ruby>図<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>ります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '<span data-tooltip="ソビエト社会主義共和国連邦。1922年に成立した社会主義国家">ソ連</span>は<ruby>長<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>い<ruby>間<rp>(</rp><rt>あいだ</rt><rp>)</rp></ruby>アメリカと<ruby>軍拡競争<rp>(</rp><rt>ぐんかくきょうそう</rt><rp>)</rp></ruby>を<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>けてきたんだけど、<strong>ゴルバチョフ</strong>が「<ruby>対話<rp>(</rp><rt>たいわ</rt><rp>)</rp></ruby>で<ruby>解決<rp>(</rp><rt>かいけつ</rt><rp>)</rp></ruby>しよう」と<ruby>方針<rp>(</rp><rt>ほうしん</rt><rp>)</rp></ruby>を<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>は<ruby>東<rp>(</rp><rt>ひがし</rt><rp>)</rp></ruby>ヨーロッパにも<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: 'そう！<ruby>東<rp>(</rp><rt>ひがし</rt><rp>)</rp></ruby>ヨーロッパでも<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>の<ruby>波<rp>(</rp><rt>なみ</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がって、1989年にはついに<strong><span class="keyword">ベルリンの<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby></span></strong>が<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>されたんだ！これは<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby><ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>の<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<span data-tooltip="第二次世界大戦後に東西に分かれていたドイツの首都ベルリンを隔てていた壁">ベルリンの壁</span>って、<ruby>東西<rp>(</rp><rt>とうざい</rt><rp>)</rp></ruby>ドイツを<ruby>隔<rp>(</rp><rt>へだ</rt><rp>)</rp></ruby>てていた壁ですよね！それが<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>されたなんてすごい！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: 'そして<ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じ1989年12月、<span data-tooltip="地中海のマルタ島で行われた米ソ首脳会談"><strong><span class="keyword">マルタ<ruby>会談<rp>(</rp><rt>かいだん</rt><rp>)</rp></ruby></span></strong></span>で<ruby>米<rp>(</rp><rt>べい</rt><rp>)</rp></ruby>ソ<ruby>首脳<rp>(</rp><rt>しゅのう</rt><rp>)</rp></ruby>が<strong><span class="keyword"><ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby>の<ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby></span></strong>を<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ゴルバチョフ</span>がペレストロイカ・グラスノスチで改革 → <span class="keyword">ベルリンの壁</span>崩壊（1989年） → <span class="keyword">マルタ会談</span>で冷戦終結を宣言！',
    },
    {
      type: 'quiz',
      question: '1989年に取り壊された冷戦の象徴は何？',
      options: [
        { letter: 'A', text: 'ベルリンの壁', correct: true },
        { letter: 'B', text: 'ブランデンブルク門', correct: false },
        { letter: 'C', text: '鉄のカーテン', correct: false },
        { letter: 'D', text: '万里の長城', correct: false },
      ],
      explanation:
        '<strong>正解はA「ベルリンの<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby>」</strong>です。<ruby>東西<rp>(</rp><rt>とうざい</rt><rp>)</rp></ruby>ドイツを<ruby>隔<rp>(</rp><rt>へだ</rt><rp>)</rp></ruby>てていた<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby>が<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>され、<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby><ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>の<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'date',
      text: '1991年〜2003年',
    },
    {
      type: 'narrator',
      text: '1991年、<strong><span class="keyword">ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby></span></strong>が<ruby>解体<rp>(</rp><rt>かいたい</rt><rp>)</rp></ruby>し、<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>くの<ruby>共和国<rp>(</rp><rt>きょうわこく</rt><rp>)</rp></ruby>が<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>しました。<strong>冷戦</strong>は<ruby>完全<rp>(</rp><rt>かんぜん</rt><rp>)</rp></ruby>に<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わりましたが、<ruby>新<rp>(</rp><rt>あら</rt><rp>)</rp></ruby>たな<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>が<ruby>生<rp>(</rp><rt>う</rt><rp>)</rp></ruby>まれます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby>が<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わったのに、<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '1991年には<span data-tooltip="イラクがクウェートに侵攻したことをきっかけに、多国籍軍がイラクを攻撃した戦争"><strong><span class="keyword"><ruby>湾岸戦争<rp>(</rp><rt>わんがんせんそう</rt><rp>)</rp></ruby></span></strong></span>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こったんだ。また1993年には<span data-tooltip="ヨーロッパの経済・政治の統合を目指す国際組織"><strong><span class="keyword">ヨーロッパ<ruby>連合<rp>(</rp><rt>れんごう</rt><rp>)</rp></ruby>（EU）</span></strong></span>が<ruby>発足<rp>(</rp><rt>ほっそく</rt><rp>)</rp></ruby>して、<ruby>共通通貨<rp>(</rp><rt>きょうつうつうか</rt><rp>)</rp></ruby><strong><span class="keyword">ユーロ</span></strong>も<ruby>導入<rp>(</rp><rt>どうにゅう</rt><rp>)</rp></ruby>されたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>中国<rp>(</rp><rt>ちゅうごく</rt><rp>)</rp></ruby>でも何か<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きな<ruby>出来事<rp>(</rp><rt>できごと</rt><rp>)</rp></ruby>があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: '1989年に<ruby>中国<rp>(</rp><rt>ちゅうごく</rt><rp>)</rp></ruby>では<span data-tooltip="1989年に北京の天安門広場で起きた民主化運動とその弾圧事件"><strong><span class="keyword"><ruby>天安門事件<rp>(</rp><rt>てんあんもんじけん</rt><rp>)</rp></ruby></span></strong></span>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>きて、<ruby>民主化運動<rp>(</rp><rt>みんしゅかうんどう</rt><rp>)</rp></ruby>が<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>されたんだ。<ruby>世界<rp>(</rp><rt>せかい</rt><rp>)</rp></ruby>のあちこちで<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>きがあった<ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '2001年のアメリカの<ruby>同時多発<rp>(</rp><rt>どうじたはつ</rt><rp>)</rp></ruby>テロも<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きな<ruby>事件<rp>(</rp><rt>じけん</rt><rp>)</rp></ruby>でしたよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: 'そうだね。2001年の<strong><span class="keyword">アメリカ<ruby>同時多発<rp>(</rp><rt>どうじたはつ</rt><rp>)</rp></ruby>テロ</span></strong>を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>けて、2003年には<strong><span class="keyword"><ruby>イラク戦争<rp>(</rp><rt>いらくせんそう</rt><rp>)</rp></ruby></span></strong>が<ruby>始<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>まった。また、アジア<ruby>太平洋<rp>(</rp><rt>たいへいよう</rt><rp>)</rp></ruby><ruby>地域<rp>(</rp><rt>ちいき</rt><rp>)</rp></ruby>では<span data-tooltip="アジア太平洋経済協力会議。アジア太平洋地域の経済協力を推進する枠組み"><strong><span class="keyword">APEC</span></strong></span>が<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>され、<span data-tooltip="主要国首脳会議。主要先進国の首脳が国際的な課題を話し合う会議"><strong><span class="keyword">サミット</span></strong></span>など<ruby>国際協調<rp>(</rp><rt>こくさいきょうちょう</rt><rp>)</rp></ruby>の<ruby>枠組<rp>(</rp><rt>わくぐ</rt><rp>)</rp></ruby>みも<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ソ連解体</span>（1991年） → <span class="keyword">EU発足</span>・<span class="keyword">ユーロ</span>導入 → <span class="keyword">アメリカ同時多発テロ</span>（2001年）・<span class="keyword">イラク戦争</span>（2003年）',
    },
    {
      type: 'quiz',
      question: '米ソ首脳が冷戦の終結を宣言した1989年の会談は？',
      options: [
        { letter: 'A', text: 'ポツダム会談', correct: false },
        { letter: 'B', text: 'マルタ会談', correct: true },
        { letter: 'C', text: 'ヤルタ会談', correct: false },
        { letter: 'D', text: 'ジュネーブ会談', correct: false },
      ],
      explanation:
        '<strong>正解はB「マルタ<ruby>会談<rp>(</rp><rt>かいだん</rt><rp>)</rp></ruby>」</strong>です。1989年12月、アメリカのブッシュ<ruby>大統領<rp>(</rp><rt>だいとうりょう</rt><rp>)</rp></ruby>とソ連の<strong>ゴルバチョフ</strong>が<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby>の<ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>を<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>ゴルバチョフ<rp>(</rp><rt>ごるばちょふ</rt><rp>)</rp></ruby></strong>（1985年〜）が<ruby>ペレストロイカ<rp>(</rp><rt>ぺれすとろいか</rt><rp>)</rp></ruby>で<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>を<ruby>推進<rp>(</rp><rt>すいしん</rt><rp>)</rp></ruby>',
        '<strong>ベルリンの<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby></strong>（1989年）が<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>され<ruby>東西統一<rp>(</rp><rt>とうざいとういつ</rt><rp>)</rp></ruby>へ',
        '<strong>マルタ<ruby>会談<rp>(</rp><rt>かいだん</rt><rp>)</rp></ruby></strong>（1989年）で<ruby>米<rp>(</rp><rt>べい</rt><rp>)</rp></ruby>ソが<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby><ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>を<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>',
        '<strong>ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby><ruby>解体<rp>(</rp><rt>かいたい</rt><rp>)</rp></ruby></strong>（1991年）・<strong>EU<ruby>発足<rp>(</rp><rt>ほっそく</rt><rp>)</rp></ruby></strong>（1993年）で<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>秩序<rp>(</rp><rt>ちつじょ</rt><rp>)</rp></ruby>へ',
        '<strong>アメリカ<ruby>同時多発<rp>(</rp><rt>どうじたはつ</rt><rp>)</rp></ruby>テロ</strong>（2001年）・<strong><ruby>イラク戦争<rp>(</rp><rt>いらくせんそう</rt><rp>)</rp></ruby></strong>（2003年）など<ruby>新<rp>(</rp><rt>あら</rt><rp>)</rp></ruby>たな<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
