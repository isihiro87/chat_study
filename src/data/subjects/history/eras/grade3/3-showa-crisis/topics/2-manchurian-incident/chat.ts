import type { HistoryChat } from '../../../../../../../history-chat/types';

export const manchurianIncidentChat: HistoryChat = {
  id: 'manchurian-incident',
  icon: '🔥',
  title: '満州事変と軍部の暴走',
  subtitle: '〜昭和〜 政党政治の崩壊',
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
      text: '1931年〜1936年',
    },
    {
      type: 'narrator',
      text: '<strong><ruby>昭和恐慌<rp>(</rp><rt>しょうわきょうこう</rt><rp>)</rp></ruby></strong>で<ruby>農村<rp>(</rp><rt>のうそん</rt><rp>)</rp></ruby>は<ruby>困窮<rp>(</rp><rt>こんきゅう</rt><rp>)</rp></ruby>し、社会<ruby>不安<rp>(</rp><rt>ふあん</rt><rp>)</rp></ruby>が広がる中、<ruby>軍部<rp>(</rp><rt>ぐんぶ</rt><rp>)</rp></ruby>は中国大陸への<ruby>進出<rp>(</rp><rt>しんしゅつ</rt><rp>)</rp></ruby>を<ruby>企<rp>(</rp><rt>くわだ</rt><rp>)</rp></ruby>てていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1931年、中国の<ruby>東北部<rp>(</rp><rt>とうほくぶ</rt><rp>)</rp></ruby>に<ruby>駐留<rp>(</rp><rt>ちゅうりゅう</rt><rp>)</rp></ruby>していた日本の<span data-tooltip="中国の満州（東北部）に駐留していた日本陸軍の部隊"><strong><ruby>関東軍<rp>(</rp><rt>かんとうぐん</rt><rp>)</rp></ruby></strong></span>が、<strong><span class="keyword"><ruby>柳条湖事件<rp>(</rp><rt>りゅうじょうこじけん</rt><rp>)</rp></ruby></span></strong>を<ruby>自作自演<rp>(</rp><rt>じさくじえん</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '自作自演ってことは、自分たちで<ruby>南満州鉄道<rp>(</rp><rt>みなみまんしゅうてつどう</rt><rp>)</rp></ruby>の<ruby>線路<rp>(</rp><rt>せんろ</rt><rp>)</rp></ruby>を<ruby>爆破<rp>(</rp><rt>ばくは</rt><rp>)</rp></ruby>したのに、中国のせいにしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。それを口実にして<ruby>軍事<rp>(</rp><rt>ぐんじ</rt><rp>)</rp></ruby>行動を開始し、<strong><span class="keyword"><ruby>満州事変<rp>(</rp><rt>まんしゅうじへん</rt><rp>)</rp></ruby></span></strong>が起きた。政府の方針を無視して中国東北部を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>してしまったんだよ',
    },
    {
      type: 'narrator',
      text: '1932年、<strong>関東軍</strong>は<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の最後の<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>・<ruby>溥儀<rp>(</rp><rt>ふぎ</rt><rp>)</rp></ruby>を<ruby>元首<rp>(</rp><rt>げんしゅ</rt><rp>)</rp></ruby>にして<strong><span class="keyword"><ruby>満州国<rp>(</rp><rt>まんしゅうこく</rt><rp>)</rp></ruby></span></strong>を<ruby>建国<rp>(</rp><rt>けんこく</rt><rp>)</rp></ruby>しました。しかし<ruby>実際<rp>(</rp><rt>じっさい</rt><rp>)</rp></ruby>の<ruby>支配者<rp>(</rp><rt>しはいしゃ</rt><rp>)</rp></ruby>は日本でした。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">柳条湖事件</span>（関東軍の自作自演）→ <span class="keyword">満州事変</span> → <span class="keyword">満州国</span>建国（溥儀が元首）',
    },
    {
      type: 'quiz',
      question: '1931年に満州事変のきっかけとなった事件は？',
      options: [
        { letter: 'A', text: '柳条湖事件', correct: true },
        { letter: 'B', text: 'サラエボ事件', correct: false },
        { letter: 'C', text: '甲午農民戦争', correct: false },
        { letter: 'D', text: '盧溝橋事件', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>柳条湖事件<rp>(</rp><rt>りゅうじょうこじけん</rt><rp>)</rp></ruby>」</strong>です。<ruby>関東軍<rp>(</rp><rt>かんとうぐん</rt><rp>)</rp></ruby>が<ruby>南満州鉄道<rp>(</rp><rt>みなみまんしゅうてつどう</rt><rp>)</rp></ruby>の<ruby>線路<rp>(</rp><rt>せんろ</rt><rp>)</rp></ruby>を自ら<ruby>爆破<rp>(</rp><rt>ばくは</rt><rp>)</rp></ruby>し、中国のせいにして<ruby>軍事<rp>(</rp><rt>ぐんじ</rt><rp>)</rp></ruby>行動を開始しました。',
    },
    {
      type: 'narrator',
      text: '<span data-tooltip="第一次世界大戦後に設立された国際平和機関。本部はスイスのジュネーブ"><ruby>国際連盟<rp>(</rp><rt>こくさいれんめい</rt><rp>)</rp></ruby></span>は<strong><span class="keyword"><ruby>リットン調査団<rp>(</rp><rt>リットンちょうさだん</rt><rp>)</rp></ruby></span></strong>を<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>して<ruby>調査<rp>(</rp><rt>ちょうさ</rt><rp>)</rp></ruby>。<strong>満州国</strong>を認めず、日本に<ruby>撤退<rp>(</rp><rt>てったい</rt><rp>)</rp></ruby>を<ruby>勧告<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日本は<strong>リットン調査団</strong>の<ruby>勧告<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>を受け入れたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いいや、日本はこれを<ruby>不服<rp>(</rp><rt>ふふく</rt><rp>)</rp></ruby>として、1933年に<strong><span class="keyword"><ruby>国際連盟<rp>(</rp><rt>こくさいれんめい</rt><rp>)</rp></ruby>を<ruby>脱退<rp>(</rp><rt>だったい</rt><rp>)</rp></ruby></span></strong>したんだ。これで日本は<ruby>国際的<rp>(</rp><rt>こくさいてき</rt><rp>)</rp></ruby>に<ruby>孤立<rp>(</rp><rt>こりつ</rt><rp>)</rp></ruby>していったんだよ',
    },
    {
      type: 'narrator',
      text: '1932年、<strong><span class="keyword"><ruby>五・一五事件<rp>(</rp><rt>ごいちごじけん</rt><rp>)</rp></ruby></span></strong>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>。<ruby>海軍<rp>(</rp><rt>かいぐん</rt><rp>)</rp></ruby>の<ruby>青年将校<rp>(</rp><rt>せいねんしょうこう</rt><rp>)</rp></ruby>らが<ruby>首相官邸<rp>(</rp><rt>しゅしょうかんてい</rt><rp>)</rp></ruby>を<ruby>襲<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>い、<strong><span class="keyword"><ruby>犬養毅<rp>(</rp><rt>いぬかいつよし</rt><rp>)</rp></ruby></span></strong><ruby>首相<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>を<ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '「話せばわかる」という言葉が有名な<strong>犬養毅</strong><ruby>首相<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>ですよね。この事件のあと<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'この事件で<strong><span class="keyword"><ruby>政党内閣<rp>(</rp><rt>せいとうないかく</rt><rp>)</rp></ruby></span></strong>は<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わりを<ruby>迎<rp>(</rp><rt>むか</rt><rp>)</rp></ruby>えたんだ。<ruby>軍部<rp>(</rp><rt>ぐんぶ</rt><rp>)</rp></ruby>が<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>への<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>をどんどん強めていったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">国際連盟脱退</span>（1933年）→ 国際的孤立 ／ <span class="keyword">五・一五事件</span>（1932年）→ <span class="keyword">政党内閣</span>の終わり',
    },
    {
      type: 'quiz',
      question: '五・一五事件で暗殺された首相は誰？',
      options: [
        { letter: 'A', text: '原敬', correct: false },
        { letter: 'B', text: '犬養毅', correct: true },
        { letter: 'C', text: '伊藤博文', correct: false },
        { letter: 'D', text: '大隈重信', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>犬養毅<rp>(</rp><rt>いぬかいつよし</rt><rp>)</rp></ruby>」</strong>です。「話せばわかる」の言葉が有名で、この事件で<strong>政党内閣</strong>の時代が終わりました。',
    },
    {
      type: 'narrator',
      text: '1936年には<ruby>陸軍<rp>(</rp><rt>りくぐん</rt><rp>)</rp></ruby>の<ruby>青年将校<rp>(</rp><rt>せいねんしょうこう</rt><rp>)</rp></ruby>が約1400名の<ruby>兵<rp>(</rp><rt>へい</rt><rp>)</rp></ruby>を<ruby>率<rp>(</rp><rt>ひき</rt><rp>)</rp></ruby>いて<strong><span class="keyword"><ruby>二・二六事件<rp>(</rp><rt>にいにいろくじけん</rt><rp>)</rp></ruby></span></strong>を起こしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>五・一五事件</strong>の次にまた大きな事件が起きたんですね。<strong>二・二六事件</strong>のあとはどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '事件後、<ruby>軍部<rp>(</rp><rt>ぐんぶ</rt><rp>)</rp></ruby>の<ruby>発言力<rp>(</rp><rt>はつげんりょく</rt><rp>)</rp></ruby>はさらに強まり、日本は<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>への道を<ruby>突<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>き<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>んでいくんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">二・二六事件</span>（1936年）→ 軍部の政治的発言力がさらに強化',
    },
    {
      type: 'quiz',
      question: '1936年に陸軍の青年将校がクーデターを起こした事件は？',
      options: [
        { letter: 'A', text: '五・一五事件', correct: false },
        { letter: 'B', text: '西南戦争', correct: false },
        { letter: 'C', text: '二・二六事件', correct: true },
        { letter: 'D', text: '甲午農民戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>二・二六事件<rp>(</rp><rt>にいにいろくじけん</rt><rp>)</rp></ruby>」</strong>です。<ruby>陸軍<rp>(</rp><rt>りくぐん</rt><rp>)</rp></ruby><ruby>青年将校<rp>(</rp><rt>せいねんしょうこう</rt><rp>)</rp></ruby>によるクーデターで、事件後は<ruby>軍部<rp>(</rp><rt>ぐんぶ</rt><rp>)</rp></ruby>の<ruby>政治的<rp>(</rp><rt>せいじてき</rt><rp>)</rp></ruby><ruby>発言力<rp>(</rp><rt>はつげんりょく</rt><rp>)</rp></ruby>がさらに強まりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>柳条湖事件<rp>(</rp><rt>りゅうじょうこじけん</rt><rp>)</rp></ruby></strong>（1931年）：<ruby>関東軍<rp>(</rp><rt>かんとうぐん</rt><rp>)</rp></ruby>の<ruby>自作自演<rp>(</rp><rt>じさくじえん</rt><rp>)</rp></ruby>で<strong><ruby>満州事変<rp>(</rp><rt>まんしゅうじへん</rt><rp>)</rp></ruby></strong>が始まる',
        '<strong><ruby>満州国<rp>(</rp><rt>まんしゅうこく</rt><rp>)</rp></ruby></strong><ruby>建国<rp>(</rp><rt>けんこく</rt><rp>)</rp></ruby>（1932年）：<ruby>溥儀<rp>(</rp><rt>ふぎ</rt><rp>)</rp></ruby>を<ruby>元首<rp>(</rp><rt>げんしゅ</rt><rp>)</rp></ruby>にしたが日本が<ruby>実質<rp>(</rp><rt>じっしつ</rt><rp>)</rp></ruby><ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>',
        '<strong><ruby>国際連盟<rp>(</rp><rt>こくさいれんめい</rt><rp>)</rp></ruby><ruby>脱退<rp>(</rp><rt>だったい</rt><rp>)</rp></ruby></strong>（1933年）：<strong><ruby>リットン調査団<rp>(</rp><rt>リットンちょうさだん</rt><rp>)</rp></ruby></strong>の<ruby>勧告<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>を<ruby>拒否<rp>(</rp><rt>きょひ</rt><rp>)</rp></ruby>し<ruby>孤立<rp>(</rp><rt>こりつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>五・一五事件<rp>(</rp><rt>ごいちごじけん</rt><rp>)</rp></ruby></strong>（1932年）：<strong><ruby>犬養毅<rp>(</rp><rt>いぬかいつよし</rt><rp>)</rp></ruby></strong><ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>で<strong><ruby>政党内閣<rp>(</rp><rt>せいとうないかく</rt><rp>)</rp></ruby></strong>が<ruby>終焉<rp>(</rp><rt>しゅうえん</rt><rp>)</rp></ruby>',
        '<strong><ruby>二・二六事件<rp>(</rp><rt>にいにいろくじけん</rt><rp>)</rp></ruby></strong>（1936年）：<ruby>軍部<rp>(</rp><rt>ぐんぶ</rt><rp>)</rp></ruby>の<ruby>政治的<rp>(</rp><rt>せいじてき</rt><rp>)</rp></ruby><ruby>発言力<rp>(</rp><rt>はつげんりょく</rt><rp>)</rp></ruby>がさらに<ruby>強化<rp>(</rp><rt>きょうか</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
