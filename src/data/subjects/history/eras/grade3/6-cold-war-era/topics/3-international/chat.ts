import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarInternationalChat: HistoryChat = {
  id: 'postwar-international',
  icon: '🤝',
  title: '国際社会への復帰',
  subtitle: '〜戦後〜 日本外交の展開',
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
      text: '1955年〜1960年代',
    },
    {
      type: 'narrator',
      text: '1955年、インドネシアのバンドンで<strong><span class="keyword"><span data-tooltip="1955年にインドネシアで開かれた、植民地からの独立国が平和共存を訴えた国際会議"><ruby>アジア・アフリカ<ruby>会議<rp>(</rp><rt>かいぎ</rt><rp>)</rp></ruby><rp>(</rp><rt>あじああふりかかいぎ</rt><rp>)</rp></ruby></span></span></strong>が開かれ、<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>からの<ruby>独立国<rp>(</rp><rt>どくりつこく</rt><rp>)</rp></ruby>が<ruby>平和共存<rp>(</rp><rt>へいわきょうぞん</rt><rp>)</rp></ruby>を<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '米ソの<strong>冷戦</strong>が<ruby>激化<rp>(</rp><rt>げきか</rt><rp>)</rp></ruby>しているなかで、どちらにも<ruby>属<rp>(</rp><rt>ぞく</rt><rp>)</rp></ruby>さない国もあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: 'そうだよ。<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>したばかりの国々は<ruby>第三世界<rp>(</rp><rt>だいさんせかい</rt><rp>)</rp></ruby>と呼ばれて、米ソどちらにもつかない<ruby>立場<rp>(</rp><rt>たちば</rt><rp>)</rp></ruby>で<ruby>平和<rp>(</rp><rt>へいわ</rt><rp>)</rp></ruby>を<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えたんだ',
    },
    {
      type: 'narrator',
      text: '1962年、ソ連がキューバにミサイル<ruby>基地<rp>(</rp><rt>きち</rt><rp>)</rp></ruby>を<ruby>建設<rp>(</rp><rt>けんせつ</rt><rp>)</rp></ruby>しようとし、<strong><span class="keyword"><span data-tooltip="ソ連がキューバにミサイル基地を建設しようとし、米ソが核戦争の瀬戸際に立った事件"><ruby>キューバ<ruby>危機<rp>(</rp><rt>きき</rt><rp>)</rp></ruby><rp>(</rp><rt>きゅーばきき</rt><rp>)</rp></ruby></span></span></strong>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>。米ソは<ruby>核戦争<rp>(</rp><rt>かくせんそう</rt><rp>)</rp></ruby>の<ruby>瀬戸際<rp>(</rp><rt>せとぎわ</rt><rp>)</rp></ruby>に立ちました。この<ruby>危機<rp>(</rp><rt>きき</rt><rp>)</rp></ruby>をきっかけに<strong><span class="keyword"><ruby>部分的核実験禁止条約<rp>(</rp><rt>ぶぶんてきかくじっけんきんしじょうやく</rt><rp>)</rp></ruby></span></strong>が結ばれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>核戦争<rp>(</rp><rt>かくせんそう</rt><rp>)</rp></ruby>の<ruby>瀬戸際<rp>(</rp><rt>せとぎわ</rt><rp>)</rp></ruby>まで行ったんですか…！<ruby>怖<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>いですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: 'だからこそ<ruby>核軍縮<rp>(</rp><rt>かくぐんしゅく</rt><rp>)</rp></ruby>の動きが始まったんだ。その後<strong><span class="keyword"><span data-tooltip="アメリカが南ベトナムを支援して介入した東南アジアの戦争。世界中で反戦運動が広がった"><ruby>ベトナム<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby><rp>(</rp><rt>べとなむせんそう</rt><rp>)</rp></ruby></span></span></strong>ではアメリカが<ruby>介入<rp>(</rp><rt>かいにゅう</rt><rp>)</rp></ruby>を深め、世界中で<ruby>反戦運動<rp>(</rp><rt>はんせんうんどう</rt><rp>)</rp></ruby>が広がったよ',
    },
    {
      type: 'narrator',
      text: 'アメリカでは<strong><span class="keyword"><span data-tooltip="アメリカで人種差別撤廃を求める公民権運動を非暴力主義で指導した人物"><ruby>キング<ruby>牧師<rp>(</rp><rt>ぼくし</rt><rp>)</rp></ruby><rp>(</rp><rt>きんぐぼくし</rt><rp>)</rp></ruby></span></span></strong>が<ruby>公民権運動<rp>(</rp><rt>こうみんけんうんどう</rt><rp>)</rp></ruby>を<ruby>指導<rp>(</rp><rt>しどう</rt><rp>)</rp></ruby>しました。ヨーロッパでは<strong><span class="keyword"><ruby>ヨーロッパ共同体<rp>(</rp><rt>よーろっぱきょうどうたい</rt><rp>)</rp></ruby>（EC）</span></strong>が<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>され、<ruby>経済統合<rp>(</rp><rt>けいざいとうごう</rt><rp>)</rp></ruby>が進みました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">アジア・アフリカ会議</span>で平和共存 → <span class="keyword">キューバ危機</span>で核戦争寸前 → <span class="keyword">部分的核実験禁止条約</span> → <span class="keyword">ベトナム戦争</span>と反戦運動！',
    },
    {
      type: 'quiz',
      question: '1962年にアメリカとソ連が核戦争の瀬戸際に立った事件は？',
      options: [
        { letter: 'A', text: 'ベトナム戦争', correct: false },
        { letter: 'B', text: 'キューバ危機', correct: true },
        { letter: 'C', text: '朝鮮戦争', correct: false },
        { letter: 'D', text: 'ベルリンの壁建設', correct: false },
      ],
      explanation:
        '<strong>正解はB「キューバ<ruby>危機<rp>(</rp><rt>きき</rt><rp>)</rp></ruby>」</strong>です。ソ連がキューバにミサイル基地を<ruby>建設<rp>(</rp><rt>けんせつ</rt><rp>)</rp></ruby>しようとし、米ソが<ruby>核戦争<rp>(</rp><rt>かくせんそう</rt><rp>)</rp></ruby><ruby>寸前<rp>(</rp><rt>すんぜん</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'date',
      text: '1956年〜1978年',
    },
    {
      type: 'narrator',
      text: '1956年、<strong><span class="keyword"><ruby>日ソ共同宣言<rp>(</rp><rt>にっそきょうどうせんげん</rt><rp>)</rp></ruby></span></strong>でソ連との<ruby>国交<rp>(</rp><rt>こっこう</rt><rp>)</rp></ruby>が回復し、日本は<strong><ruby>国際連合<rp>(</rp><rt>こくさいれんごう</rt><rp>)</rp></ruby></strong>に<ruby>加盟<rp>(</rp><rt>かめい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: '<ruby>国連加盟<rp>(</rp><rt>こくれんかめい</rt><rp>)</rp></ruby>で日本は<ruby>国際社会<rp>(</rp><rt>こくさいしゃかい</rt><rp>)</rp></ruby>に正式に<ruby>復帰<rp>(</rp><rt>ふっき</rt><rp>)</rp></ruby>したんだ。次は<ruby>近隣諸国<rp>(</rp><rt>きんりんしょこく</rt><rp>)</rp></ruby>との<ruby>関係改善<rp>(</rp><rt>かんけいかいぜん</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'narrator',
      text: '1965年に<strong><ruby>日韓基本条約<rp>(</rp><rt>にっかんきほんじょうやく</rt><rp>)</rp></ruby></strong>で<ruby>韓国<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>と<ruby>国交<rp>(</rp><rt>こっこう</rt><rp>)</rp></ruby>を<ruby>正常化<rp>(</rp><rt>せいじょうか</rt><rp>)</rp></ruby>。1968年には<strong><span class="keyword"><ruby>小笠原諸島<rp>(</rp><rt>おがさわらしょとう</rt><rp>)</rp></ruby></span></strong>、1972年には<strong><span class="keyword"><ruby>沖縄<rp>(</rp><rt>おきなわ</rt><rp>)</rp></ruby></span></strong>が<ruby>返還<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>されました。<strong><ruby>非核三原則<rp>(</rp><rt>ひかくさんげんそく</rt><rp>)</rp></ruby></strong>を<ruby>掲<rp>(</rp><rt>かか</rt><rp>)</rp></ruby>げた<strong><ruby>佐藤栄作<rp>(</rp><rt>さとうえいさく</rt><rp>)</rp></ruby></strong>首相はノーベル<ruby>平和賞<rp>(</rp><rt>へいわしょう</rt><rp>)</rp></ruby>を<ruby>受賞<rp>(</rp><rt>じゅしょう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>沖縄<rp>(</rp><rt>おきなわ</rt><rp>)</rp></ruby>がついに日本に<ruby>返<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>ってきたんですね！中国との<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>はどうなりましたか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: '1972年、<strong><ruby>田中角栄<rp>(</rp><rt>たなかかくえい</rt><rp>)</rp></ruby></strong>首相が<ruby>訪中<rp>(</rp><rt>ほうちゅう</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>日中共同声明<rp>(</rp><rt>にっちゅうきょうどうせいめい</rt><rp>)</rp></ruby></span></strong>で中国との<ruby>国交<rp>(</rp><rt>こっこう</rt><rp>)</rp></ruby>が<ruby>正常化<rp>(</rp><rt>せいじょうか</rt><rp>)</rp></ruby>したんだ。1978年には<strong><span class="keyword"><ruby>日中平和友好条約<rp>(</rp><rt>にっちゅうへいわゆうこうじょうやく</rt><rp>)</rp></ruby></span></strong>も結ばれたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>はまだ<ruby>南北<rp>(</rp><rt>なんぼく</rt><rp>)</rp></ruby>に<ruby>分断<rp>(</rp><rt>ぶんだん</rt><rp>)</rp></ruby>されたままだったんですよね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: 'そうだね。<strong><ruby>朝鮮戦争<rp>(</rp><rt>ちょうせんせんそう</rt><rp>)</rp></ruby></strong>以来、<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>は南北に分かれたまま。これは今も<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いている問題なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日ソ共同宣言</span>で国連加盟 → <span class="keyword">沖縄</span>返還 → <span class="keyword">日中共同声明</span>で中国と国交正常化 → <span class="keyword">日中平和友好条約</span>！',
    },
    {
      type: 'quiz',
      question: '1972年に日本と中国の国交を正常化した声明は？',
      options: [
        { letter: 'A', text: '日中平和友好条約', correct: false },
        { letter: 'B', text: '日中共同声明', correct: true },
        { letter: 'C', text: '日ソ共同宣言', correct: false },
        { letter: 'D', text: '日韓基本条約', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>日中共同声明<rp>(</rp><rt>にっちゅうきょうどうせいめい</rt><rp>)</rp></ruby>」</strong>です。<strong>田中角栄</strong>首相が<ruby>訪中<rp>(</rp><rt>ほうちゅう</rt><rp>)</rp></ruby>し、中国との<ruby>国交<rp>(</rp><rt>こっこう</rt><rp>)</rp></ruby>が<ruby>正常化<rp>(</rp><rt>せいじょうか</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>アジア・アフリカ会議<rp>(</rp><rt>あじああふりかかいぎ</rt><rp>)</rp></ruby></strong>で<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>からの独立国が<ruby>平和共存<rp>(</rp><rt>へいわきょうぞん</rt><rp>)</rp></ruby>を<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えた',
        '<strong><ruby>キューバ危機<rp>(</rp><rt>きゅーばきき</rt><rp>)</rp></ruby></strong>で核戦争の<ruby>瀬戸際<rp>(</rp><rt>せとぎわ</rt><rp>)</rp></ruby>に、<strong><ruby>部分的核実験禁止条約<rp>(</rp><rt>ぶぶんてきかくじっけんきんしじょうやく</rt><rp>)</rp></ruby></strong>へ',
        '<strong><ruby>日ソ共同宣言<rp>(</rp><rt>にっそきょうどうせんげん</rt><rp>)</rp></ruby></strong>（1956年）で<ruby>国連加盟<rp>(</rp><rt>こくれんかめい</rt><rp>)</rp></ruby>を<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>',
        '<strong><ruby>沖縄返還<rp>(</rp><rt>おきなわへんかん</rt><rp>)</rp></ruby></strong>（1972年）と<strong><ruby>非核三原則<rp>(</rp><rt>ひかくさんげんそく</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>日中共同声明<rp>(</rp><rt>にっちゅうきょうどうせいめい</rt><rp>)</rp></ruby></strong>（1972年）・<strong><ruby>日中平和友好条約<rp>(</rp><rt>にっちゅうへいわゆうこうじょうやく</rt><rp>)</rp></ruby></strong>（1978年）で中国と<ruby>国交正常化<rp>(</rp><rt>こっこうせいじょうか</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
