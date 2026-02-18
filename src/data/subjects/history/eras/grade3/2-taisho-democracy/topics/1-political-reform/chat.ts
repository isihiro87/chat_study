import type { HistoryChat } from '../../../../../../../history-chat/types';

export const politicalReformChat: HistoryChat = {
  id: 'political-reform',
  icon: '🏛️',
  title: '政治の変革',
  subtitle: '〜大正〜 藩閥から政党へ',
  characters: [
    {
      id: 'teacher',
      name: '大正博士',
      emoji: '🎓',
      colorFrom: '#1d4ed8',
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
      text: '大正時代',
    },
    {
      type: 'narrator',
      text: '<ruby>明治<rp>(</rp><rt>めいじ</rt><rp>)</rp></ruby>以来、日本の<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>藩閥<rp>(</rp><rt>はんばつ</rt><rp>)</rp></ruby></span></strong>と呼ばれる<ruby>薩摩<rp>(</rp><rt>さつま</rt><rp>)</rp></ruby>・<ruby>長州<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>出身の政治家たちが<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>していました。しかし国民の間で「<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>に基づく政治を行え」という声が高まっていきます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>藩閥</strong>の人たちがずっと政治を動かしていたんですか？国民の意見は<ruby>反映<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>されなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうなんだ。1912年に<strong>藩閥</strong>出身の<strong><span class="keyword"><ruby>桂太郎<rp>(</rp><rt>かつらたろう</rt><rp>)</rp></ruby></span></strong>が<ruby>首相<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>になると、国民の<ruby>怒<rp>(</rp><rt>いか</rt><rp>)</rp></ruby>りが<ruby>爆発<rp>(</rp><rt>ばくはつ</rt><rp>)</rp></ruby>して<strong><span class="keyword"><ruby>第一次護憲運動<rp>(</rp><rt>だいいちじごけんうんどう</rt><rp>)</rp></ruby></span></strong>が起こったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '国民が立ち上がったんですね！それで<strong>桂太郎</strong><ruby>内閣<rp>(</rp><rt>ないかく</rt><rp>)</rp></ruby>はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>民衆<rp>(</rp><rt>みんしゅう</rt><rp>)</rp></ruby>の力で<strong>桂太郎内閣</strong>は<ruby>退陣<rp>(</rp><rt>たいじん</rt><rp>)</rp></ruby>に追い込まれたんだよ。この時代の<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>の流れを<span data-tooltip="大正時代に広がった、民主主義を求める政治・社会運動の総称"><ruby>大正<rp>(</rp><rt>たいしょう</rt><rp>)</rp></ruby>デモクラシー</span>というんだ',
    },
    {
      type: 'narrator',
      text: 'この<ruby>大正<rp>(</rp><rt>たいしょう</rt><rp>)</rp></ruby>デモクラシーを<ruby>理論的<rp>(</rp><rt>りろんてき</rt><rp>)</rp></ruby>に支えたのが、<strong><span class="keyword"><ruby>吉野作造<rp>(</rp><rt>よしのさくぞう</rt><rp>)</rp></ruby></span></strong>の<strong><span class="keyword"><ruby>民本主義<rp>(</rp><rt>みんぽんしゅぎ</rt><rp>)</rp></ruby></span></strong>と、<strong><span class="keyword"><ruby>美濃部達吉<rp>(</rp><rt>みのべたつきち</rt><rp>)</rp></ruby></span></strong>の<strong><span class="keyword"><ruby>天皇機関説<rp>(</rp><rt>てんのうきかんせつ</rt><rp>)</rp></ruby></span></strong>でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>民本主義</strong>ってどんな考え方なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="民衆の意見を政治に反映させるべきという考え。主権の所在は問わず、政治の目的は民衆のためにあるべきだと主張した"><strong>民本主義</strong></span>は、<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>は国民のためにあるべきだという考え方だよ。<span data-tooltip="天皇は国家の最高機関として憲法に基づいて統治するという学説"><strong>天皇機関説</strong></span>とあわせて、<ruby>民主的<rp>(</rp><rt>みんしゅてき</rt><rp>)</rp></ruby>な政治を求める<ruby>理論<rp>(</rp><rt>りろん</rt><rp>)</rp></ruby>になったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">第一次護憲運動</span>で<span class="keyword">桂太郎</span>内閣が退陣。<span class="keyword">吉野作造</span>の<span class="keyword">民本主義</span>・<span class="keyword">美濃部達吉</span>の<span class="keyword">天皇機関説</span>が大正デモクラシーを支えた！',
    },
    {
      type: 'quiz',
      question: '第一次護憲運動で退陣に追い込まれた藩閥出身の首相は？',
      options: [
        { letter: 'A', text: '寺内正毅', correct: false },
        { letter: 'B', text: '原敬', correct: false },
        { letter: 'C', text: '桂太郎', correct: true },
        { letter: 'D', text: '山県有朋', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>桂太郎<rp>(</rp><rt>かつらたろう</rt><rp>)</rp></ruby>」</strong>です。<ruby>民衆<rp>(</rp><rt>みんしゅう</rt><rp>)</rp></ruby>の<ruby>護憲<rp>(</rp><rt>ごけん</rt><rp>)</rp></ruby>運動により、<ruby>藩閥<rp>(</rp><rt>はんばつ</rt><rp>)</rp></ruby>政治の<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>である桂太郎内閣は退陣しました。',
    },
    {
      type: 'narrator',
      text: '<ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby>中、日本は<strong><span class="keyword"><ruby>大戦景気<rp>(</rp><rt>たいせんけいき</rt><rp>)</rp></ruby></span></strong>に<ruby>沸<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>きました。「<strong><span class="keyword"><ruby>成金<rp>(</rp><rt>なりきん</rt><rp>)</rp></ruby></span></strong>」と呼ばれる大金持ちが現れる一方、<strong><ruby>物価上昇<rp>(</rp><rt>ぶっかじょうしょう</rt><rp>)</rp></ruby></strong>で<ruby>庶民<rp>(</rp><rt>しょみん</rt><rp>)</rp></ruby>の生活は苦しくなりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<span data-tooltip="戦争による好景気で急に大金持ちになった人。札束を燃やして明かりにしたという話が有名"><strong>成金</strong></span>が出る一方で、庶民は生活が苦しかったんですか…。何か事件は起きなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1918年、<ruby>米<rp>(</rp><rt>こめ</rt><rp>)</rp></ruby>の<ruby>価格<rp>(</rp><rt>かかく</rt><rp>)</rp></ruby>が<ruby>急騰<rp>(</rp><rt>きゅうとう</rt><rp>)</rp></ruby>すると、全国で<strong><span class="keyword"><ruby>米騒動<rp>(</rp><rt>こめそうどう</rt><rp>)</rp></ruby></span></strong>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>したんだ！<span data-tooltip="陸軍出身の藩閥政治家。米騒動の対応に失敗し総辞職に追い込まれた"><ruby>寺内<rp>(</rp><rt>てらうち</rt><rp>)</rp></ruby>内閣</span>は<ruby>総辞職<rp>(</rp><rt>そうじしょく</rt><rp>)</rp></ruby>に追い込まれたよ',
    },
    {
      type: 'narrator',
      text: '<strong>米騒動</strong>の後、<strong><span class="keyword"><ruby>原敬<rp>(</rp><rt>はらたかし</rt><rp>)</rp></ruby></span></strong>が日本初の本格的な<strong><span class="keyword"><ruby>政党内閣<rp>(</rp><rt>せいとうないかく</rt><rp>)</rp></ruby></span></strong>を<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>しました。<ruby>爵位<rp>(</rp><rt>しゃくい</rt><rp>)</rp></ruby>を持たないことから「<strong><span class="keyword"><ruby>平民宰相<rp>(</rp><rt>へいみんさいしょう</rt><rp>)</rp></ruby></span></strong>」と呼ばれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '「<strong>平民宰相</strong>」ってかっこいいですね！国民の味方って感じがします！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大戦景気</span>と<span class="keyword">成金</span>の一方で物価上昇 → <span class="keyword">米騒動</span> → <span class="keyword">原敬</span>が「<span class="keyword">平民宰相</span>」として<span class="keyword">政党内閣</span>を組織！',
    },
    {
      type: 'quiz',
      question: '1918年の米騒動の後、本格的な政党内閣を組織した首相は？',
      options: [
        { letter: 'A', text: '桂太郎', correct: false },
        { letter: 'B', text: '寺内正毅', correct: false },
        { letter: 'C', text: '原敬', correct: true },
        { letter: 'D', text: '吉野作造', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>原敬<rp>(</rp><rt>はらたかし</rt><rp>)</rp></ruby>」</strong>です。「<ruby>平民宰相<rp>(</rp><rt>へいみんさいしょう</rt><rp>)</rp></ruby>」と呼ばれ、国民の<ruby>期待<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>を背負って本格的な<ruby>政党内閣<rp>(</rp><rt>せいとうないかく</rt><rp>)</rp></ruby>を<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '1925年には<strong><span class="keyword"><ruby>普通選挙法<rp>(</rp><rt>ふつうせんきょほう</rt><rp>)</rp></ruby></span></strong>が<ruby>成立<rp>(</rp><rt>せいりつ</rt><rp>)</rp></ruby>し、<strong>25<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上のすべての<ruby>男性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby></strong>に<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>が<ruby>与<rp>(</rp><rt>あた</rt><rp>)</rp></ruby>えられました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'やっとみんなが<ruby>投票<rp>(</rp><rt>とうひょう</rt><rp>)</rp></ruby>できるようになったんですね！でも女性はまだだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。<ruby>女性参政権<rp>(</rp><rt>じょせいさんせいけん</rt><rp>)</rp></ruby>はまだ<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>められていなかったんだよ。しかも同時に<strong><span class="keyword"><ruby>治安維持法<rp>(</rp><rt>ちあんいじほう</rt><rp>)</rp></ruby></span></strong>も<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>されて、<span data-tooltip="生産手段の共有や平等な社会を目指す思想。当時の政府は国体を脅かすものとして厳しく取り締まった"><ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>運動</span>は<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しく<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>締<rp>(</rp><rt>し</rt><rp>)</rp></ruby>まられたんだ',
    },
    {
      type: 'summary-point',
      text: '1925年<span class="keyword">普通選挙法</span>で25歳以上の男性に選挙権。同時に<span class="keyword">治安維持法</span>で社会主義を弾圧！',
    },
    {
      type: 'quiz',
      question: '1925年に成立した普通選挙法で選挙権を得たのは？',
      options: [
        { letter: 'A', text: '20歳以上のすべての男女', correct: false },
        { letter: 'B', text: '25歳以上のすべての男性', correct: true },
        { letter: 'C', text: '25歳以上のすべての男女', correct: false },
        { letter: 'D', text: '20歳以上のすべての男性', correct: false },
      ],
      explanation:
        '<strong>正解はB「25<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上のすべての<ruby>男性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>」</strong>です。<ruby>財産<rp>(</rp><rt>ざいさん</rt><rp>)</rp></ruby>による<ruby>制限<rp>(</rp><rt>せいげん</rt><rp>)</rp></ruby>はなくなりましたが、<ruby>女性参政権<rp>(</rp><rt>じょせいさんせいけん</rt><rp>)</rp></ruby>はまだ<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>められていませんでした。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>第一次護憲運動<rp>(</rp><rt>だいいちじごけんうんどう</rt><rp>)</rp></ruby></strong>で<strong><ruby>桂太郎<rp>(</rp><rt>かつらたろう</rt><rp>)</rp></ruby></strong>内閣が退陣',
        '<strong><ruby>大戦景気<rp>(</rp><rt>たいせんけいき</rt><rp>)</rp></ruby></strong>と「<strong><ruby>成金<rp>(</rp><rt>なりきん</rt><rp>)</rp></ruby></strong>」、<strong><ruby>米騒動<rp>(</rp><rt>こめそうどう</rt><rp>)</rp></ruby></strong>で<ruby>寺内<rp>(</rp><rt>てらうち</rt><rp>)</rp></ruby>内閣<ruby>総辞職<rp>(</rp><rt>そうじしょく</rt><rp>)</rp></ruby>',
        '<strong><ruby>原敬<rp>(</rp><rt>はらたかし</rt><rp>)</rp></ruby></strong>が本格的な<strong><ruby>政党内閣<rp>(</rp><rt>せいとうないかく</rt><rp>)</rp></ruby></strong>を<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>',
        '<strong><ruby>吉野作造<rp>(</rp><rt>よしのさくぞう</rt><rp>)</rp></ruby></strong>「<strong><ruby>民本主義<rp>(</rp><rt>みんぽんしゅぎ</rt><rp>)</rp></ruby></strong>」、<strong><ruby>美濃部達吉<rp>(</rp><rt>みのべたつきち</rt><rp>)</rp></ruby></strong>「<strong><ruby>天皇機関説<rp>(</rp><rt>てんのうきかんせつ</rt><rp>)</rp></ruby></strong>」',
        '1925年<strong><ruby>普通選挙法<rp>(</rp><rt>ふつうせんきょほう</rt><rp>)</rp></ruby></strong>と<strong><ruby>治安維持法<rp>(</rp><rt>ちあんいじほう</rt><rp>)</rp></ruby></strong>の同時<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
