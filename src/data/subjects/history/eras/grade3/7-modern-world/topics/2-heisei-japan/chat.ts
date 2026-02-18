import type { HistoryChat } from '../../../../../../../history-chat/types';

export const heiseiJapanChat: HistoryChat = {
  id: 'heisei-japan',
  icon: '🗾',
  title: '平成の日本',
  subtitle: '〜現代〜 変化する社会と政治',
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
      text: '1992年〜1993年',
    },
    {
      type: 'narrator',
      text: '<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby>が<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わり、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby>国際貢献<rp>(</rp><rt>こくさいこうけん</rt><rp>)</rp></ruby>のあり<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>が<ruby>問<rp>(</rp><rt>と</rt><rp>)</rp></ruby>われる<ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>になりました。1992年、<strong><span class="keyword"><ruby>国際平和協力法<rp>(</rp><rt>こくさいへいわきょうりょくほう</rt><rp>)</rp></ruby>（PKO<ruby>協力法<rp>(</rp><rt>きょうりょくほう</rt><rp>)</rp></ruby>）</span></strong>が<ruby>成立<rp>(</rp><rt>せいりつ</rt><rp>)</rp></ruby>し、<ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby>の<ruby>海外派遣<rp>(</rp><rt>かいがいはけん</rt><rp>)</rp></ruby>が<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>められました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '<span data-tooltip="国連の平和維持活動（Peace Keeping Operations）に自衛隊が参加できるようにした法律"><ruby>国際平和協力法<rp>(</rp><rt>こくさいへいわきょうりょくほう</rt><rp>)</rp></ruby></span>によって、<ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby>が<ruby>国連<rp>(</rp><rt>こくれん</rt><rp>)</rp></ruby>の<ruby>平和維持活動<rp>(</rp><rt>へいわいじかつどう</rt><rp>)</rp></ruby>に<ruby>参加<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>できるようになったんだ。<ruby>最初<rp>(</rp><rt>さいしょ</rt><rp>)</rp></ruby>の<ruby>派遣先<rp>(</rp><rt>はけんさき</rt><rp>)</rp></ruby>は<strong><span class="keyword">カンボジア</span></strong>だったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby>が<ruby>海外<rp>(</rp><rt>かいがい</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>くことに<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>の<ruby>意見<rp>(</rp><rt>いけん</rt><rp>)</rp></ruby>はなかったんですか？<ruby>平和憲法<rp>(</rp><rt>へいわけんぽう</rt><rp>)</rp></ruby>との<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>が<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp></ruby>になります',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: 'いい<ruby>視点<rp>(</rp><rt>してん</rt><rp>)</rp></ruby>だね。<ruby>賛否<rp>(</rp><rt>さんぴ</rt><rp>)</rp></ruby>はあったけど、<ruby>国際社会<rp>(</rp><rt>こくさいしゃかい</rt><rp>)</rp></ruby>での<ruby>責任<rp>(</rp><rt>せきにん</rt><rp>)</rp></ruby>を<ruby>果<rp>(</rp><rt>は</rt><rp>)</rp></ruby>たすために<ruby>必要<rp>(</rp><rt>ひつよう</rt><rp>)</rp></ruby>だという<ruby>判断<rp>(</rp><rt>はんだん</rt><rp>)</rp></ruby>だったんだ',
    },
    {
      type: 'narrator',
      text: '<strong>カンボジア</strong>へのPKO<ruby>部隊<rp>(</rp><rt>ぶたい</rt><rp>)</rp></ruby><ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>が<ruby>初<rp>(</rp><rt>はつ</rt><rp>)</rp></ruby>の<ruby>実績<rp>(</rp><rt>じっせき</rt><rp>)</rp></ruby>となりました。<ruby>国内<rp>(</rp><rt>こくない</rt><rp>)</rp></ruby>では1993年に<strong><span class="keyword"><ruby>55年体制<rp>(</rp><rt>ごじゅうごねんたいせい</rt><rp>)</rp></ruby></span></strong>が<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>し、<span data-tooltip="自民党以外の政党が連立して作った政権。1993年に細川護熙が首相となった"><ruby>非自民連立政権<rp>(</rp><rt>ひじみんれんりつせいけん</rt><rp>)</rp></ruby></span>が<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>。<ruby>長<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>く<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いた<ruby>自民党一党支配<rp>(</rp><rt>じみんとういっとうしはい</rt><rp>)</rp></ruby>の<ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>が<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わりを<ruby>迎<rp>(</rp><rt>むか</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '1955年からずっと<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いていた<ruby>体制<rp>(</rp><rt>たいせい</rt><rp>)</rp></ruby>が<ruby>崩<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>れたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">PKO協力法</span>（1992年）で自衛隊が<span class="keyword">カンボジア</span>へ初派遣 → <span class="keyword">55年体制</span>が1993年に崩壊！',
    },
    {
      type: 'quiz',
      question: '1992年に成立した自衛隊の海外派遣を認める法律は？',
      options: [
        { letter: 'A', text: '国際平和協力法（PKO協力法）', correct: true },
        { letter: 'B', text: '自衛隊法', correct: false },
        { letter: 'C', text: '日米安保条約', correct: false },
        { letter: 'D', text: '安全保障条約', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>国際平和協力法<rp>(</rp><rt>こくさいへいわきょうりょくほう</rt><rp>)</rp></ruby>（PKO<ruby>協力法<rp>(</rp><rt>きょうりょくほう</rt><rp>)</rp></ruby>）」</strong>です。この<ruby>法律<rp>(</rp><rt>ほうりつ</rt><rp>)</rp></ruby>により<ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby>の<ruby>国連<rp>(</rp><rt>こくれん</rt><rp>)</rp></ruby><ruby>平和維持活動<rp>(</rp><rt>へいわいじかつどう</rt><rp>)</rp></ruby>への<ruby>参加<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>が<ruby>可能<rp>(</rp><rt>かのう</rt><rp>)</rp></ruby>になりました。',
    },
    {
      type: 'date',
      text: '1980年代後半〜2000年代',
    },
    {
      type: 'narrator',
      text: '1980<ruby>年代後半<rp>(</rp><rt>ねんだいこうはん</rt><rp>)</rp></ruby>、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>バブル経済<rp>(</rp><rt>ばぶるけいざい</rt><rp>)</rp></ruby></span></strong>と<ruby>呼<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>ばれる<ruby>異常<rp>(</rp><rt>いじょう</rt><rp>)</rp></ruby>な<ruby>好景気<rp>(</rp><rt>こうけいき</rt><rp>)</rp></ruby>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こりました。<ruby>株価<rp>(</rp><rt>かぶか</rt><rp>)</rp></ruby>や<ruby>地価<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>が<ruby>急上昇<rp>(</rp><rt>きゅうじょうしょう</rt><rp>)</rp></ruby>し、<ruby>人々<rp>(</rp><rt>ひとびと</rt><rp>)</rp></ruby>は<ruby>豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby>かさを<ruby>実感<rp>(</rp><rt>じっかん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<span data-tooltip="1980年代後半に株価や地価が実体経済とかけ離れて急上昇した好景気。泡（バブル）のように膨らんで弾けたことからこの名がついた"><ruby>バブル経済<rp>(</rp><rt>ばぶるけいざい</rt><rp>)</rp></ruby></span>って、どうして「バブル」っていうんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: '<ruby>泡<rp>(</rp><rt>あわ</rt><rp>)</rp></ruby>（バブル）のように<ruby>膨<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>らんで、やがて<ruby>弾<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>けてしまったからだよ。<ruby>土地<rp>(</rp><rt>とち</rt><rp>)</rp></ruby>の<ruby>値段<rp>(</rp><rt>ねだん</rt><rp>)</rp></ruby>がどんどん<ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>がって、みんな「<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>えば<ruby>儲<rp>(</rp><rt>もう</rt><rp>)</rp></ruby>かる」と<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>っていたんだ',
    },
    {
      type: 'narrator',
      text: '1990<ruby>年代<rp>(</rp><rt>ねんだい</rt><rp>)</rp></ruby>に<strong>バブル</strong>が<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>平成不況<rp>(</rp><rt>へいせいふきょう</rt><rp>)</rp></ruby></span></strong>と<ruby>呼<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>ばれる<ruby>長期的<rp>(</rp><rt>ちょうきてき</rt><rp>)</rp></ruby>な<ruby>不景気<rp>(</rp><rt>ふけいき</rt><rp>)</rp></ruby>に<ruby>入<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>りました。<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>規制緩和<rp>(</rp><rt>きせいかんわ</rt><rp>)</rp></ruby></span></strong>を<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>めましたが、<ruby>景気回復<rp>(</rp><rt>けいきかいふく</rt><rp>)</rp></ruby>には<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>がかかりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>の<ruby>面<rp>(</rp><rt>めん</rt><rp>)</rp></ruby>ではその<ruby>後<rp>(</rp><rt>ご</rt><rp>)</rp></ruby>どうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '2009年には<strong><span class="keyword"><ruby>民主党<rp>(</rp><rt>みんしゅとう</rt><rp>)</rp></ruby></span></strong>が<ruby>自民党<rp>(</rp><rt>じみんとう</rt><rp>)</rp></ruby>から<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>を<ruby>奪<rp>(</rp><rt>うば</rt><rp>)</rp></ruby>ったんだ。<ruby>社会面<rp>(</rp><rt>しゃかいめん</rt><rp>)</rp></ruby>では1999年に<span data-tooltip="男女が対等に社会参画できる社会を目指す法律。1999年に制定された"><strong><span class="keyword"><ruby>男女共同参画社会基本法<rp>(</rp><rt>だんじょきょうどうさんかくしゃかいきほんほう</rt><rp>)</rp></ruby></span></strong></span>が<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>されたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>北朝鮮<rp>(</rp><rt>きたちょうせん</rt><rp>)</rp></ruby>の<ruby>拉致問題<rp>(</rp><rt>らちもんだい</rt><rp>)</rp></ruby>もこの<ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>の<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きな<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: 'そうだね。<span data-tooltip="北朝鮮が日本人を不当に連れ去った問題。日朝間の大きな外交課題となっている"><strong><span class="keyword"><ruby>拉致問題<rp>(</rp><rt>らちもんだい</rt><rp>)</rp></ruby></span></strong></span>は<ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>も<ruby>解決<rp>(</rp><rt>かいけつ</rt><rp>)</rp></ruby>していない<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きな<ruby>外交課題<rp>(</rp><rt>がいこうかだい</rt><rp>)</rp></ruby>なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">バブル経済</span>崩壊 → <span class="keyword">平成不況</span> → 2009年に<span class="keyword">民主党</span>が政権獲得 / <span class="keyword">男女共同参画社会基本法</span>・<span class="keyword">拉致問題</span>も重要課題',
    },
    {
      type: 'quiz',
      question: '1993年に崩壊した自民党と社会党の長期的な政治体制は？',
      options: [
        { letter: 'A', text: '55年体制', correct: true },
        { letter: 'B', text: '護憲体制', correct: false },
        { letter: 'C', text: '大政翼賛体制', correct: false },
        { letter: 'D', text: '二大政党制', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>55年体制<rp>(</rp><rt>ごじゅうごねんたいせい</rt><rp>)</rp></ruby>」</strong>です。1955年から<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いた<ruby>自民党<rp>(</rp><rt>じみんとう</rt><rp>)</rp></ruby>の<ruby>長期政権体制<rp>(</rp><rt>ちょうきせいけんたいせい</rt><rp>)</rp></ruby>が、1993年に<ruby>非自民連立政権<rp>(</rp><rt>ひじみんれんりつせいけん</rt><rp>)</rp></ruby>の<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>で<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>PKO<ruby>協力法<rp>(</rp><rt>きょうりょくほう</rt><rp>)</rp></ruby></strong>（1992年）で<ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby>が<strong>カンボジア</strong>へ<ruby>初派遣<rp>(</rp><rt>はつはけん</rt><rp>)</rp></ruby>',
        '<strong><ruby>55年体制<rp>(</rp><rt>ごじゅうごねんたいせい</rt><rp>)</rp></ruby></strong>が1993年に<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>し、<ruby>非自民連立政権<rp>(</rp><rt>ひじみんれんりつせいけん</rt><rp>)</rp></ruby>が<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>',
        '<strong><ruby>バブル経済<rp>(</rp><rt>ばぶるけいざい</rt><rp>)</rp></ruby></strong><ruby>崩壊後<rp>(</rp><rt>ほうかいご</rt><rp>)</rp></ruby>、<strong><ruby>平成不況<rp>(</rp><rt>へいせいふきょう</rt><rp>)</rp></ruby></strong>に<ruby>突入<rp>(</rp><rt>とつにゅう</rt><rp>)</rp></ruby>',
        '2009年に<strong><ruby>民主党<rp>(</rp><rt>みんしゅとう</rt><rp>)</rp></ruby></strong>が<ruby>政権<rp>(</rp><rt>せいけん</rt><rp>)</rp></ruby>を<ruby>獲得<rp>(</rp><rt>かくとく</rt><rp>)</rp></ruby>',
        '<strong><ruby>男女共同参画社会基本法<rp>(</rp><rt>だんじょきょうどうさんかくしゃかいきほんほう</rt><rp>)</rp></ruby></strong>（1999年）の<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>、<strong><ruby>拉致問題<rp>(</rp><rt>らちもんだい</rt><rp>)</rp></ruby></strong>が<ruby>外交課題<rp>(</rp><rt>がいこうかだい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
