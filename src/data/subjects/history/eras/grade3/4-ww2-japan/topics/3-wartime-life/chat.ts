import type { HistoryChat } from '../../../../../../../history-chat/types';

export const wartimeLifeChat: HistoryChat = {
  id: 'wartime-life',
  icon: '🏭',
  title: '銃後の苦しみと総動員',
  subtitle: '〜昭和〜 戦時下の暮らし',
  characters: [
    {
      id: 'teacher',
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
      text: '1943年〜1945年',
    },
    {
      type: 'narrator',
      text: '<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>が長引くにつれ、日本の<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>生活は<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しさを増していきました。<strong><span class="keyword"><ruby>国家総動員<rp>(</rp><rt>こっかそうどういん</rt><rp>)</rp></ruby></span></strong>のもと、すべての国民が戦争に巻き込まれていきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="国のすべての人と物を戦争のために動員する体制"><strong>国家総動員</strong></span>の<ruby>体制<rp>(</rp><rt>たいせい</rt><rp>)</rp></ruby>のもとで、<ruby>兵力<rp>(</rp><rt>へいりょく</rt><rp>)</rp></ruby>も<ruby>労働力<rp>(</rp><rt>ろうどうりょく</rt><rp>)</rp></ruby>も足りなくなっていったんだ。1943年からは<strong><span class="keyword"><ruby>学徒出陣<rp>(</rp><rt>がくとしゅつじん</rt><rp>)</rp></ruby></span></strong>が始まったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>学徒出陣<rp>(</rp><rt>がくとしゅつじん</rt><rp>)</rp></ruby>って、<ruby>大学生<rp>(</rp><rt>だいがくせい</rt><rp>)</rp></ruby>が戦場に行くということですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうだよ。<ruby>兵力<rp>(</rp><rt>へいりょく</rt><rp>)</rp></ruby>不足を<ruby>補<rp>(</rp><rt>おぎな</rt><rp>)</rp></ruby>うために、<ruby>大学生<rp>(</rp><rt>だいがくせい</rt><rp>)</rp></ruby>が<ruby>学業<rp>(</rp><rt>がくぎょう</rt><rp>)</rp></ruby>を<ruby>中断<rp>(</rp><rt>ちゅうだん</rt><rp>)</rp></ruby>して<ruby>出征<rp>(</rp><rt>しゅっせい</rt><rp>)</rp></ruby>したんだ。さらに<ruby>中学生<rp>(</rp><rt>ちゅうがくせい</rt><rp>)</rp></ruby>や<ruby>女学生<rp>(</rp><rt>じょがくせい</rt><rp>)</rp></ruby>も<strong><span class="keyword"><ruby>勤労動員<rp>(</rp><rt>きんろうどういん</rt><rp>)</rp></ruby></span></strong>で<ruby>軍需工場<rp>(</rp><rt>ぐんじゅこうじょう</rt><rp>)</rp></ruby>に<ruby>駆<rp>(</rp><rt>か</rt><rp>)</rp></ruby>り出されたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '中学生まで<ruby>工場<rp>(</rp><rt>こうじょう</rt><rp>)</rp></ruby>で<ruby>働<rp>(</rp><rt>はたら</rt><rp>)</rp></ruby>かされたんですか…！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>空襲<rp>(</rp><rt>くうしゅう</rt><rp>)</rp></ruby>が<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しくなると、<ruby>都市部<rp>(</rp><rt>としぶ</rt><rp>)</rp></ruby>の子どもたちは<span data-tooltip="空襲を避けるため、都市部の子どもたちが地方に移り住むこと"><strong><span class="keyword"><ruby>疎開<rp>(</rp><rt>そかい</rt><rp>)</rp></ruby></span></strong></span>として<ruby>地方<rp>(</rp><rt>ちほう</rt><rp>)</rp></ruby>に送られたんだ。親と<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れた生活は<ruby>辛<rp>(</rp><rt>つら</rt><rp>)</rp></ruby>いものだったよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">学徒出陣</span>で大学生が戦場へ、<span class="keyword">勤労動員</span>で中学生も軍需工場へ。<span class="keyword">疎開</span>で子どもが親元を離れた',
    },
    {
      type: 'quiz',
      question: '1943年から大学生が戦場に送られたことを何という？',
      options: [
        { letter: 'A', text: '学徒出陣', correct: true },
        { letter: 'B', text: '徴兵制', correct: false },
        { letter: 'C', text: '疎開', correct: false },
        { letter: 'D', text: '勤労動員', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>学徒出陣<rp>(</rp><rt>がくとしゅつじん</rt><rp>)</rp></ruby>」</strong>です。<ruby>兵力<rp>(</rp><rt>へいりょく</rt><rp>)</rp></ruby>不足を<ruby>補<rp>(</rp><rt>おぎな</rt><rp>)</rp></ruby>うため、<ruby>大学生<rp>(</rp><rt>だいがくせい</rt><rp>)</rp></ruby>が<ruby>学業<rp>(</rp><rt>がくぎょう</rt><rp>)</rp></ruby>を<ruby>中断<rp>(</rp><rt>ちゅうだん</rt><rp>)</rp></ruby>して<ruby>出征<rp>(</rp><rt>しゅっせい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '家庭からは<ruby>鍋<rp>(</rp><rt>なべ</rt><rp>)</rp></ruby>やヤカン、<ruby>寺<rp>(</rp><rt>てら</rt><rp>)</rp></ruby>の<ruby>鐘<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>まで<strong><span class="keyword"><ruby>金属供出<rp>(</rp><rt>きんぞくきょうしゅつ</rt><rp>)</rp></ruby></span></strong>として<ruby>回収<rp>(</rp><rt>かいしゅう</rt><rp>)</rp></ruby>されました。<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>を作るための<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>が足りなくなったのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>鍋<rp>(</rp><rt>なべ</rt><rp>)</rp></ruby>やお<ruby>寺<rp>(</rp><rt>てら</rt><rp>)</rp></ruby>の<ruby>鐘<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>まで持っていかれたんですか！？<ruby>生活<rp>(</rp><rt>せいかつ</rt><rp>)</rp></ruby>がすごく大変そう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>食料<rp>(</rp><rt>しょくりょう</rt><rp>)</rp></ruby>も<strong><span class="keyword"><ruby>配給制<rp>(</rp><rt>はいきゅうせい</rt><rp>)</rp></ruby></span></strong>になって、<ruby>配給<rp>(</rp><rt>はいきゅう</rt><rp>)</rp></ruby><ruby>切符<rp>(</rp><rt>きっぷ</rt><rp>)</rp></ruby>がなければ<ruby>米<rp>(</rp><rt>こめ</rt><rp>)</rp></ruby>も<ruby>味噌<rp>(</rp><rt>みそ</rt><rp>)</rp></ruby>も手に入らなかったんだ。<ruby>配給<rp>(</rp><rt>はいきゅう</rt><rp>)</rp></ruby>の量もどんどん減っていったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '当時、国民に対してどんなメッセージが出されていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<strong><span class="keyword"><ruby>欲<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>しがりません<ruby>勝<rp>(</rp><rt>か</rt><rp>)</rp></ruby>つまでは</span></strong>」というスローガンで、国民に<ruby>我慢<rp>(</rp><rt>がまん</rt><rp>)</rp></ruby>を<ruby>強<rp>(</rp><rt>し</rt><rp>)</rp></ruby>いたんだ。<ruby>深刻<rp>(</rp><rt>しんこく</rt><rp>)</rp></ruby>な<ruby>食糧難<rp>(</rp><rt>しょくりょうなん</rt><rp>)</rp></ruby>の中でも<ruby>耐<rp>(</rp><rt>た</rt><rp>)</rp></ruby>えるよう求めたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">金属供出</span>で鍋や寺の鐘まで回収。<span class="keyword">配給制</span>で食糧難に',
    },
    {
      type: 'quiz',
      question: '家庭の鍋や寺の鐘が政府に回収されたことを何という？',
      options: [
        { letter: 'A', text: '灯火管制', correct: false },
        { letter: 'B', text: '配給制', correct: false },
        { letter: 'C', text: '金属供出', correct: true },
        { letter: 'D', text: '勤労動員', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>金属供出<rp>(</rp><rt>きんぞくきょうしゅつ</rt><rp>)</rp></ruby>」</strong>です。<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>の<ruby>材料<rp>(</rp><rt>ざいりょう</rt><rp>)</rp></ruby>として、あらゆる<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>が<ruby>回収<rp>(</rp><rt>かいしゅう</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'narrator',
      text: '<ruby>戦時下<rp>(</rp><rt>せんじか</rt><rp>)</rp></ruby>の日本では、<strong><span class="keyword"><ruby>隣組<rp>(</rp><rt>となりぐみ</rt><rp>)</rp></ruby></span></strong>による<ruby>相互監視<rp>(</rp><rt>そうごかんし</rt><rp>)</rp></ruby>も行われ、戦争に<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>する声を上げることはできませんでした。国民は自由も食料も<ruby>奪<rp>(</rp><rt>うば</rt><rp>)</rp></ruby>われ、苦しい生活を<ruby>強<rp>(</rp><rt>し</rt><rp>)</rp></ruby>いられました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>隣組<rp>(</rp><rt>となりぐみ</rt><rp>)</rp></ruby>って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="10世帯程度で構成され、配給の受け取りや防空活動、相互監視を行った組織"><strong>隣組</strong></span>は10<ruby>世帯<rp>(</rp><rt>せたい</rt><rp>)</rp></ruby>くらいで作られた組織で、<ruby>配給<rp>(</rp><rt>はいきゅう</rt><rp>)</rp></ruby>の受け取りや<ruby>防空<rp>(</rp><rt>ぼうくう</rt><rp>)</rp></ruby><ruby>活動<rp>(</rp><rt>かつどう</rt><rp>)</rp></ruby>のほか、お<ruby>互<rp>(</rp><rt>たが</rt><rp>)</rp></ruby>いを<ruby>監視<rp>(</rp><rt>かんし</rt><rp>)</rp></ruby>する<ruby>役割<rp>(</rp><rt>やくわり</rt><rp>)</rp></ruby>もあったんだよ',
    },
    {
      type: 'summary-point',
      text: '「<span class="keyword">欲しがりません勝つまでは</span>」のスローガンで国民に我慢を強いた',
    },
    {
      type: 'quiz',
      question: '戦時中の国民への我慢を求めたスローガンは？',
      options: [
        { letter: 'A', text: '欲しがりません勝つまでは', correct: true },
        { letter: 'B', text: '富国強兵', correct: false },
        { letter: 'C', text: '八紘一宇', correct: false },
        { letter: 'D', text: '殖産興業', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>欲<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>しがりません<ruby>勝<rp>(</rp><rt>か</rt><rp>)</rp></ruby>つまでは」</strong>です。<ruby>食糧難<rp>(</rp><rt>しょくりょうなん</rt><rp>)</rp></ruby>のなか、国民に<ruby>耐乏<rp>(</rp><rt>たいぼう</rt><rp>)</rp></ruby>を求めたスローガンでした。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>学徒出陣<rp>(</rp><rt>がくとしゅつじん</rt><rp>)</rp></ruby></strong>（1943年〜）で<ruby>大学生<rp>(</rp><rt>だいがくせい</rt><rp>)</rp></ruby>が戦場に送られた',
        '<strong><ruby>勤労動員<rp>(</rp><rt>きんろうどういん</rt><rp>)</rp></ruby></strong>で<ruby>中学生<rp>(</rp><rt>ちゅうがくせい</rt><rp>)</rp></ruby>・<ruby>女学生<rp>(</rp><rt>じょがくせい</rt><rp>)</rp></ruby>も<ruby>軍需工場<rp>(</rp><rt>ぐんじゅこうじょう</rt><rp>)</rp></ruby>で働いた',
        '<strong><ruby>疎開<rp>(</rp><rt>そかい</rt><rp>)</rp></ruby></strong>で子どもたちが親元を<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れ<ruby>地方<rp>(</rp><rt>ちほう</rt><rp>)</rp></ruby>に移った',
        '<strong><ruby>金属供出<rp>(</rp><rt>きんぞくきょうしゅつ</rt><rp>)</rp></ruby></strong>で家庭の<ruby>鍋<rp>(</rp><rt>なべ</rt><rp>)</rp></ruby>や<ruby>寺<rp>(</rp><rt>てら</rt><rp>)</rp></ruby>の<ruby>鐘<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>まで<ruby>回収<rp>(</rp><rt>かいしゅう</rt><rp>)</rp></ruby>された',
        '<strong><ruby>配給制<rp>(</rp><rt>はいきゅうせい</rt><rp>)</rp></ruby></strong>と<ruby>食糧難<rp>(</rp><rt>しょくりょうなん</rt><rp>)</rp></ruby>で国民生活は<ruby>極度<rp>(</rp><rt>きょくど</rt><rp>)</rp></ruby>に苦しくなった',
      ],
    },
  ],
};
