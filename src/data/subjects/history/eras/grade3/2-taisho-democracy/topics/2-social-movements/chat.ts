import type { HistoryChat } from '../../../../../../../history-chat/types';

export const socialMovementsChat: HistoryChat = {
  id: 'social-movements',
  icon: '✊',
  title: '社会運動の広がり',
  subtitle: '〜大正〜 差別との闘いと権利の主張',
  characters: [
    {
      id: 'teacher',
      name: '大正博士',
      emoji: '🎓',
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
      text: '大正時代',
    },
    {
      type: 'narrator',
      text: '<ruby>大正<rp>(</rp><rt>たいしょう</rt><rp>)</rp></ruby>時代、政治の<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>だけでなく、さまざまな人々が自分たちの<ruby>権利<rp>(</rp><rt>けんり</rt><rp>)</rp></ruby>を<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>し始めました。<strong><ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby></strong>や<strong><ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby></strong>、<strong><ruby>被差別部落<rp>(</rp><rt>ひさべつぶらく</rt><rp>)</rp></ruby>の人々</strong>、<strong><ruby>女性<rp>(</rp><rt>じょせい</rt><rp>)</rp></ruby></strong>たちが声を上げたのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '大正時代にはいろんな人たちが声を上げたんですね。<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>たちはどんな運動をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>工場<rp>(</rp><rt>こうじょう</rt><rp>)</rp></ruby>で<ruby>働<rp>(</rp><rt>はたら</rt><rp>)</rp></ruby>く労働者たちは<ruby>賃上<rp>(</rp><rt>ちんあ</rt><rp>)</rp></ruby>げや<ruby>労働条件<rp>(</rp><rt>ろうどうじょうけん</rt><rp>)</rp></ruby>の<ruby>改善<rp>(</rp><rt>かいぜん</rt><rp>)</rp></ruby>を求めて<strong><span class="keyword"><ruby>労働争議<rp>(</rp><rt>ろうどうそうぎ</rt><rp>)</rp></ruby></span></strong>を起こしたんだ。<ruby>農村<rp>(</rp><rt>のうそん</rt><rp>)</rp></ruby>では<span data-tooltip="地主から土地を借りて農業をする農民。収穫の一部を地主に納めなければならなかった"><strong><span class="keyword"><ruby>小作農<rp>(</rp><rt>こさくのう</rt><rp>)</rp></ruby></span></strong></span>が<ruby>地主<rp>(</rp><rt>じぬし</rt><rp>)</rp></ruby>に<strong><span class="keyword"><ruby>小作争議<rp>(</rp><rt>こさくそうぎ</rt><rp>)</rp></ruby></span></strong>を起こしたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '労働者も農民も立ち上がったんですね！組織的な運動もあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '1920年には日本初の<strong><span class="keyword">メーデー</span></strong>が行われたよ。<span data-tooltip="1921年に結成された日本最大の労働組合の全国組織"><strong><span class="keyword"><ruby>日本労働総同盟<rp>(</rp><rt>にほんろうどうそうどうめい</rt><rp>)</rp></ruby></span></strong></span>や<span data-tooltip="1922年に結成された小作農の全国組織。小作料の引き下げなどを求めた"><strong><span class="keyword"><ruby>日本農民組合<rp>(</rp><rt>にほんのうみんくみあい</rt><rp>)</rp></ruby></span></strong></span>が<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>されて、運動は<ruby>組織的<rp>(</rp><rt>そしきてき</rt><rp>)</rp></ruby>になっていったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">労働争議</span>・<span class="keyword">小作争議</span>が各地で発生。1920年に日本初の<span class="keyword">メーデー</span>、<span class="keyword">日本労働総同盟</span>・<span class="keyword">日本農民組合</span>が結成！',
    },
    {
      type: 'quiz',
      question: '日本で初めてメーデーが行われたのは何年？',
      options: [
        { letter: 'A', text: '1918年', correct: false },
        { letter: 'B', text: '1925年', correct: false },
        { letter: 'C', text: '1920年', correct: true },
        { letter: 'D', text: '1922年', correct: false },
      ],
      explanation:
        '<strong>正解はC「1920年」</strong>です。<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>が<ruby>団結<rp>(</rp><rt>だんけつ</rt><rp>)</rp></ruby>して<ruby>権利<rp>(</rp><rt>けんり</rt><rp>)</rp></ruby>を<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>する日本初のメーデーが行われました。',
    },
    {
      type: 'narrator',
      text: '1922年、<strong><ruby>被差別部落<rp>(</rp><rt>ひさべつぶらく</rt><rp>)</rp></ruby></strong>の人々は<strong><span class="keyword"><ruby>全国水平社<rp>(</rp><rt>ぜんこくすいへいしゃ</rt><rp>)</rp></ruby></span></strong>を<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>しました。「人の世に<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>あれ、人間に<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>あれ」という<strong><span class="keyword"><ruby>水平社宣言<rp>(</rp><rt>すいへいしゃせんげん</rt><rp>)</rp></ruby></span></strong>は、日本初の<ruby>人権宣言<rp>(</rp><rt>じんけんせんげん</rt><rp>)</rp></ruby>と言われています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「人の世に熱あれ、人間に光あれ」…すごく力強い言葉ですね。<ruby>差別<rp>(</rp><rt>さべつ</rt><rp>)</rp></ruby>に<ruby>苦<rp>(</rp><rt>くる</rt><rp>)</rp></ruby>しんでいた人たちの<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>いが<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わってきます',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<span data-tooltip="部落差別からの解放を目指して1922年に京都で創立された団体。自らの力で差別と闘うことを宣言した"><strong>全国水平社</strong></span>は、<ruby>差別<rp>(</rp><rt>さべつ</rt><rp>)</rp></ruby>されてきた人たちが自らの力で<ruby>立<rp>(</rp><rt>た</rt><rp>)</rp></ruby>ち上がった<ruby>画期的<rp>(</rp><rt>かっきてき</rt><rp>)</rp></ruby>な運動だったんだよ',
    },
    {
      type: 'narrator',
      text: '<ruby>女性<rp>(</rp><rt>じょせい</rt><rp>)</rp></ruby>の<ruby>権利<rp>(</rp><rt>けんり</rt><rp>)</rp></ruby>を求める運動も<ruby>活発<rp>(</rp><rt>かっぱつ</rt><rp>)</rp></ruby>になりました。<strong><span class="keyword"><ruby>平塚<rp>(</rp><rt>ひらつか</rt><rp>)</rp></ruby>らいてう</span></strong>は「<ruby>元始<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>、女性は<ruby>太陽<rp>(</rp><rt>たいよう</rt><rp>)</rp></ruby>であった」と<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>新婦人協会<rp>(</rp><rt>しんふじんきょうかい</rt><rp>)</rp></ruby></span></strong>を<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>して女性の<ruby>政治参加<rp>(</rp><rt>せいじさんか</rt><rp>)</rp></ruby>を求めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '「元始、女性は太陽であった」ってどういう意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="文芸雑誌「青鞜」の発刊の辞。かつて女性は太陽のように自ら輝いていたが、今は月のように他の光で輝く存在になってしまったという意味">「元始、女性は太陽であった」</span>というのは、かつて女性は自ら<ruby>輝<rp>(</rp><rt>かがや</rt><rp>)</rp></ruby>く<ruby>存在<rp>(</rp><rt>そんざい</rt><rp>)</rp></ruby>だったのに、今は<ruby>力<rp>(</rp><rt>ちから</rt><rp>)</rp></ruby>を<ruby>奪<rp>(</rp><rt>うば</rt><rp>)</rp></ruby>われてしまった、もう一度<ruby>太陽<rp>(</rp><rt>たいよう</rt><rp>)</rp></ruby>に戻ろう！という<ruby>力強<rp>(</rp><rt>ちからづよ</rt><rp>)</rp></ruby>い<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">全国水平社</span>が<span class="keyword">水平社宣言</span>を発表。<span class="keyword">平塚らいてう</span>が<span class="keyword">新婦人協会</span>を設立して女性解放を訴えた！',
    },
    {
      type: 'quiz',
      question: '全国水平社を結成した人々は？',
      options: [
        { letter: 'A', text: '被差別部落の人々', correct: true },
        { letter: 'B', text: '小作農', correct: false },
        { letter: 'C', text: '労働者', correct: false },
        { letter: 'D', text: '女性', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>被差別部落<rp>(</rp><rt>ひさべつぶらく</rt><rp>)</rp></ruby>の人々」</strong>です。<ruby>差別<rp>(</rp><rt>さべつ</rt><rp>)</rp></ruby>からの<ruby>解放<rp>(</rp><rt>かいほう</rt><rp>)</rp></ruby>を<ruby>目指<rp>(</rp><rt>めざ</rt><rp>)</rp></ruby>して1922年に<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>され、<ruby>水平社宣言<rp>(</rp><rt>すいへいしゃせんげん</rt><rp>)</rp></ruby>を発表しました。',
    },
    {
      type: 'narrator',
      text: 'しかし<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>は1925年に<strong><span class="keyword"><ruby>治安維持法<rp>(</rp><rt>ちあんいじほう</rt><rp>)</rp></ruby></span></strong>を<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>し、<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>運動を<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しく<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>締<rp>(</rp><rt>し</rt><rp>)</rp></ruby>まりました。<strong><ruby>普通選挙法<rp>(</rp><rt>ふつうせんきょほう</rt><rp>)</rp></ruby></strong>で<ruby>参政権<rp>(</rp><rt>さんせいけん</rt><rp>)</rp></ruby>を広げる一方、<ruby>思想<rp>(</rp><rt>しそう</rt><rp>)</rp></ruby>を<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>する「<strong>アメとムチ</strong>」の<ruby>政策<rp>(</rp><rt>せいさく</rt><rp>)</rp></ruby>がとられたのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>を広げたのに、思想は<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>するなんて<ruby>矛盾<rp>(</rp><rt>むじゅん</rt><rp>)</rp></ruby>してますね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">治安維持法</span>で社会主義運動を弾圧。普通選挙法との「アメとムチ」政策！',
    },
    {
      type: 'quiz',
      question: '新婦人協会を設立した女性解放運動の指導者は？',
      options: [
        { letter: 'A', text: '平塚らいてう', correct: true },
        { letter: 'B', text: '与謝野晶子', correct: false },
        { letter: 'C', text: '樋口一葉', correct: false },
        { letter: 'D', text: '津田梅子', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>平塚<rp>(</rp><rt>ひらつか</rt><rp>)</rp></ruby>らいてう」</strong>です。「<ruby>元始<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>、<ruby>女性<rp>(</rp><rt>じょせい</rt><rp>)</rp></ruby>は<ruby>太陽<rp>(</rp><rt>たいよう</rt><rp>)</rp></ruby>であった」と<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>し、女性の<ruby>政治参加<rp>(</rp><rt>せいじさんか</rt><rp>)</rp></ruby>を求める運動を<ruby>展開<rp>(</rp><rt>てんかい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>労働争議<rp>(</rp><rt>ろうどうそうぎ</rt><rp>)</rp></ruby></strong>・<strong><ruby>小作争議<rp>(</rp><rt>こさくそうぎ</rt><rp>)</rp></ruby></strong>が各地で発生、<strong>メーデー</strong>も始まった',
        '<strong><ruby>日本労働総同盟<rp>(</rp><rt>にほんろうどうそうどうめい</rt><rp>)</rp></ruby></strong>・<strong><ruby>日本農民組合<rp>(</rp><rt>にほんのうみんくみあい</rt><rp>)</rp></ruby></strong>が<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>された',
        '<strong><ruby>全国水平社<rp>(</rp><rt>ぜんこくすいへいしゃ</rt><rp>)</rp></ruby></strong>が<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>され、<strong><ruby>水平社宣言<rp>(</rp><rt>すいへいしゃせんげん</rt><rp>)</rp></ruby></strong>が発表された',
        '<strong><ruby>平塚<rp>(</rp><rt>ひらつか</rt><rp>)</rp></ruby>らいてう</strong>が<strong><ruby>新婦人協会<rp>(</rp><rt>しんふじんきょうかい</rt><rp>)</rp></ruby></strong>を<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>し<ruby>女性解放<rp>(</rp><rt>じょせいかいほう</rt><rp>)</rp></ruby>を<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えた',
        '<strong><ruby>治安維持法<rp>(</rp><rt>ちあんいじほう</rt><rp>)</rp></ruby></strong>で<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>運動が<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>された',
      ],
    },
  ],
};
