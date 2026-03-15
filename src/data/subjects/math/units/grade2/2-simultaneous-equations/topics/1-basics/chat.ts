import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const simulEqBasicsChat: HistoryChat = {
  id: 'math-g2-simul-eq-basics',
  icon: '🔗',
  title: '連立方程式の基本を学ぼう',
  subtitle: '〜中2数学〜 2つの式で解を求める',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👩‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        encouraging: '💪',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵‍💫',
      },
    },
  ],
  content: [
    // ── セクション1: 二元一次方程式ってなに？ ──
    {
      type: 'date',
      text: '<ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>では <strong>x</strong> が1つだったけど、<ruby>今度<rt>こんど</rt></ruby>は <strong>x と y の2つ</strong>が<ruby>登場<rt>とうじょう</rt></ruby>するよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まずは<ruby>言葉<rt>ことば</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>から！<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った $2x + 3 = 7$ のような<ruby>式<rt>しき</rt></ruby>は、<ruby>文字<rt>もじ</rt></ruby>が $x$ の1つだけだよね。これを「<span class="keyword"><ruby>一元<rt>いちげん</rt></ruby></span>一次方程式」と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<ruby>一元<rt>いちげん</rt></ruby>」の「<ruby>元<rt>げん</rt></ruby>」って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！「<ruby>元<rt>げん</rt></ruby>」は<span class="keyword"><ruby>未知数<rt>みちすう</rt></ruby></span>（わからない<ruby>数<rt>かず</rt></ruby>）のこと。「<ruby>一元<rt>いちげん</rt></ruby>」は<ruby>未知数<rt>みちすう</rt></ruby>が1つ、「<ruby>二元<rt>にげん</rt></ruby>」は<ruby>未知数<rt>みちすう</rt></ruby>が2つという<ruby>意味<rt>いみ</rt></ruby>だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'じゃあ $x + y = 5$ みたいに $x$ と $y$ の2つの<ruby>文字<rt>もじ</rt></ruby>がある<ruby>式<rt>しき</rt></ruby>は「<ruby>二元<rt>にげん</rt></ruby>一次方程式」ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！ただし<ruby>注意<rt>ちゅうい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だよ。$x^2 + y = 5$ は $x^2$ があるから「一次」じゃない。$xy = 6$ も $xy$ が<ruby>二次<rt>にじ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>だからダメ。<strong><ruby>各文字<rt>かくもじ</rt></ruby>が1<ruby>次<rt>じ</rt></ruby></strong>であることが<ruby>条件<rt>じょうけん</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$x + y = 5$ ← ✓ <ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby>',
          annotation: '$x$ と $y$ の2つの<ruby>文字<rt>もじ</rt></ruby>、どちらも1<ruby>次<rt>じ</rt></ruby>',
        },
        {
          formula: '$2x - 3y = 1$ ← ✓ <ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby>',
          annotation: '$x$ と $y$ の2つの<ruby>文字<rt>もじ</rt></ruby>、どちらも1<ruby>次<rt>じ</rt></ruby>',
        },
        {
          formula: '$x^2 + y = 4$ ← ✗ <ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby>ではない',
          annotation: '$x^2$ があるので「一次」ではない',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ところで、$x + y = 5$ の<ruby>答<rt>こた</rt></ruby>えは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'それがポイント！$x + y = 5$ を<ruby>満<rt>み</rt></ruby>たす $(x, y)$ の<ruby>組<rt>くみ</rt></ruby>は、$(1, 4)$、$(2, 3)$、$(3, 2)$、$(0, 5)$、$(-1, 6)$…と<strong><ruby>無限<rt>むげん</rt></ruby>にある</strong>んだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'え〜！<ruby>答<rt>こた</rt></ruby>えが<ruby>決<rt>き</rt></ruby>まらないんですか？<ruby>困<rt>こま</rt></ruby>りますね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword"><ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby></span>：$x$ と $y$ の2つの<ruby>文字<rt>もじ</rt></ruby>をふくむ<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>。1つの<ruby>式<rt>しき</rt></ruby>だけでは<ruby>解<rt>かい</rt></ruby>は<ruby>無限<rt>むげん</rt></ruby>にある！',
    },

    // ── セクション2: 連立方程式と解の意味 ──
    {
      type: 'date',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>と<ruby>解<rt>かい</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1つの<ruby>式<rt>しき</rt></ruby>だけだと<ruby>答<rt>こた</rt></ruby>えが<ruby>決<rt>き</rt></ruby>まらないよね。そこで、<strong>もう1つ<ruby>式<rt>しき</rt></ruby>を<ruby>追加<rt>ついか</rt></ruby></strong>するんだ！こんな<ruby>問題<rt>もんだい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「りんごとみかんを<ruby>合<rt>あ</rt></ruby>わせて 5<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>いました。りんごはみかんより 1<ruby>個<rt>こ</rt></ruby><ruby>多<rt>おお</rt></ruby>いです。」りんごを $x$<ruby>個<rt>こ</rt></ruby>、みかんを $y$<ruby>個<rt>こ</rt></ruby>としてみて。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>合<rt>あ</rt></ruby>わせて5<ruby>個<rt>こ</rt></ruby>だから $x + y = 5$、りんごがみかんより1<ruby>個<rt>こ</rt></ruby><ruby>多<rt>おお</rt></ruby>いから $x - y = 1$ ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！こうやって <strong>2つの<ruby>式<rt>しき</rt></ruby></strong>を<ruby>立<rt>た</rt></ruby>てることができるね。この2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせたものを<strong>「<span class="keyword"><ruby>連立方程式<rt>れんりつほうていしき</rt></ruby></span>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 5 \\quad \\cdots \\textcircled{1} \\\\ x - y = 1 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>左<rt>ひだり</rt></ruby>の $\\{$ は「2つの<ruby>式<rt>しき</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>える」という<ruby>意味<rt>いみ</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせると、<ruby>答<rt>こた</rt></ruby>えは<ruby>決<rt>き</rt></ruby>まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>決<rt>き</rt></ruby>まるよ！$x + y = 5$ の<ruby>解<rt>かい</rt></ruby>は $(1,4), (2,3), (3,2)$…。$x - y = 1$ の<ruby>解<rt>かい</rt></ruby>は $(1,0), (2,1), (3,2)$…。<strong><ruby>両方<rt>りょうほう</rt></ruby>に<ruby>共通<rt>きょうつう</rt></ruby></strong>するのは $(3, 2)$ だけ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>満<rt>み</rt></ruby>たす $(x, y)$ を<ruby>探<rt>さが</rt></ruby>すんですね。これが<span class="keyword"><ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby></span>！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword"><ruby>連立方程式<rt>れんりつほうていしき</rt></ruby></span>：2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせたもの。<ruby>解<rt>かい</rt></ruby>は<strong>2つの<ruby>式<rt>しき</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>満<rt>み</rt></ruby>たす</strong> $(x, y)$ の<ruby>組<rt>くみ</rt></ruby>！',
    },

    // ── セクション3: 解の確かめ方 ──
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>確<rt>たし</rt></ruby>かめ<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>が<ruby>正<rt>ただ</rt></ruby>しいかどうか<ruby>確<rt>たし</rt></ruby>かめる<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>練習<rt>れんしゅう</rt></ruby>しよう。<ruby>やり方<rt>やりかた</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>！<ruby>求<rt>もと</rt></ruby>めた $x, y$ を <strong>2つの<ruby>式<rt>しき</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby></strong> するんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>するのがポイントですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！<ruby>実際<rt>じっさい</rt></ruby>にやってみよう。$\\begin{cases} 2x + y = 11 \\\\ x - y = 1 \\end{cases}$ で $x = 4, y = 3$ が<ruby>解<rt>かい</rt></ruby>かどうか<ruby>確<rt>たし</rt></ruby>かめるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>かい</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>の<ruby>手順<rt>てじゅん</rt></ruby>',
      steps: [
        {
          formula: '$\\textcircled{1}$ に<ruby>代入<rt>だいにゅう</rt></ruby>: $2 \\times 4 + 3 = 8 + 3 = 11$ ✓',
          annotation: '<ruby>左辺<rt>さへん</rt></ruby> $= 11 =$ <ruby>右辺<rt>うへん</rt></ruby>で<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つ',
        },
        {
          formula: '$\\textcircled{2}$ に<ruby>代入<rt>だいにゅう</rt></ruby>: $4 - 3 = 1$ ✓',
          annotation: '<ruby>左辺<rt>さへん</rt></ruby> $= 1 =$ <ruby>右辺<rt>うへん</rt></ruby>で<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つ',
        },
        {
          formula: '<ruby>両方<rt>りょうほう</rt></ruby>とも ✓ → $x = 4, y = 3$ は<ruby>解<rt>かい</rt></ruby>！',
          isResult: true,
          animateInsert: true,
          annotation: '2つの<ruby>式<rt>しき</rt></ruby>を<ruby>両方<rt>りょうほう</rt></ruby><ruby>満<rt>み</rt></ruby>たすから<ruby>解<rt>かい</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'もし<ruby>片方<rt>かたほう</rt></ruby>だけ<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>ったらどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！$\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ で $x = 6, y = 4$ を<ruby>確<rt>たし</rt></ruby>かめてみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>かい</rt></ruby>ではない<ruby>場合<rt>ばあい</rt></ruby>',
      steps: [
        {
          formula: '$\\textcircled{1}$: $6 + 4 = 10$ ✓',
          annotation: '<ruby>式<rt>しき</rt></ruby>①は<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つ',
        },
        {
          formula: '$\\textcircled{2}$: $6 - 4 = 2 \\neq 4$ ✗',
          annotation: '<ruby>式<rt>しき</rt></ruby>②は<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たない！',
        },
        {
          formula: '<ruby>片方<rt>かたほう</rt></ruby>が ✗ → $x = 6, y = 4$ は<ruby>解<rt>かい</rt></ruby>ではない',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>両方<rt>りょうほう</rt></ruby><ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たなければ<ruby>解<rt>かい</rt></ruby>とは<ruby>言<rt>い</rt></ruby>えない',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>片方<rt>かたほう</rt></ruby>だけ ✓ でもダメなんですね。<strong><ruby>両方<rt>りょうほう</rt></ruby>とも ✓</strong> じゃないと<ruby>解<rt>かい</rt></ruby>じゃない！',
    },
    {
      type: 'summary-point',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>確<rt>たし</rt></ruby>かめ<ruby>方<rt>かた</rt></ruby>：$x, y$ を<strong>2つの<ruby>式<rt>しき</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby></strong>して、どちらも<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つか<ruby>確認<rt>かくにん</rt></ruby>する！',
    },

    // ── セクション4: 表を使って解を見つけよう ──
    {
      type: 'date',
      text: '<ruby>表<rt>ひょう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>解<rt>かい</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける<ruby>方法<rt>ほうほう</rt></ruby>の1つが「<span class="keyword"><ruby>表<rt>ひょう</rt></ruby></span>」を<ruby>使<rt>つか</rt></ruby>う<ruby>方法<rt>ほうほう</rt></ruby>だよ。$\\begin{cases} x + y = 7 \\\\ x - y = 1 \\end{cases}$ で<ruby>試<rt>ため</rt></ruby>してみよう！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>表<rt>ひょう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うってどういうことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず $x + y = 7$ を<ruby>満<rt>み</rt></ruby>たす $(x, y)$ の<ruby>組<rt>くみ</rt></ruby>を<ruby>表<rt>ひょう</rt></ruby>にするよ。$x$ に1, 2, 3…と<ruby>入<rt>い</rt></ruby>れて $y$ を<ruby>計算<rt>けいさん</rt></ruby>するんだ。',
    },
    {
      type: 'whiteboard',
      title: '$x + y = 7$ の<ruby>表<rt>ひょう</rt></ruby>',
      steps: [
        {
          formula: '$x = 1 \\rightarrow y = 6$、$x = 2 \\rightarrow y = 5$、$x = 3 \\rightarrow y = 4$',
          annotation: '$y = 7 - x$ で<ruby>計算<rt>けいさん</rt></ruby>',
        },
        {
          formula: '$x = 4 \\rightarrow y = 3$、$x = 5 \\rightarrow y = 2$、$x = 6 \\rightarrow y = 1$',
          annotation: '<ruby>続<rt>つづ</rt></ruby>き',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>に $x - y = 1$ を<ruby>満<rt>み</rt></ruby>たす $(x, y)$ の<ruby>表<rt>ひょう</rt></ruby>も<ruby>作<rt>つく</rt></ruby>るよ。',
    },
    {
      type: 'whiteboard',
      title: '$x - y = 1$ の<ruby>表<rt>ひょう</rt></ruby>',
      steps: [
        {
          formula: '$x = 1 \\rightarrow y = 0$、$x = 2 \\rightarrow y = 1$、$x = 3 \\rightarrow y = 2$',
          annotation: '$y = x - 1$ で<ruby>計算<rt>けいさん</rt></ruby>',
        },
        {
          formula: '$x = 4 \\rightarrow y = 3$、$x = 5 \\rightarrow y = 4$、$x = 6 \\rightarrow y = 5$',
          annotation: '<ruby>続<rt>つづ</rt></ruby>き',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あ！$x = 4$ のとき、<ruby>両方<rt>りょうほう</rt></ruby>とも $y = 3$ ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>大正解<rt>だいせいかい</rt></ruby>！2つの<ruby>表<rt>ひょう</rt></ruby>で <strong>$(x, y)$ が<ruby>一致<rt>いっち</rt></ruby></strong>する<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す。$(4, 3)$ が<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>共通<rt>きょうつう</rt></ruby>するから、これが<ruby>解<rt>かい</rt></ruby>だね！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>確<rt>たし</rt></ruby>かめてみます。$4 + 3 = 7$ ✓、$4 - 3 = 1$ ✓ … <ruby>両方<rt>りょうほう</rt></ruby><ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>ちます！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>素晴<rt>すばら</rt></ruby>しい！<ruby>解<rt>かい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めたら<ruby>必<rt>かなら</rt></ruby>ず<ruby>確<rt>たし</rt></ruby>かめる<ruby>習慣<rt>しゅうかん</rt></ruby>をつけよう。ちなみに<ruby>表<rt>ひょう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>方法<rt>ほうほう</rt></ruby>は、<ruby>解<rt>かい</rt></ruby>が<ruby>整数<rt>せいすう</rt></ruby>のときは<ruby>便利<rt>べんり</rt></ruby>だけど、<ruby>整数<rt>せいすう</rt></ruby>じゃないときは<ruby>見<rt>み</rt></ruby>つけにくいんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'じゃあ<ruby>整数<rt>せいすう</rt></ruby>じゃないときはどうするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>次<rt>つぎ</rt></ruby>のトピックで<ruby>習<rt>なら</rt></ruby>う「<ruby>加減法<rt>かげんほう</rt></ruby>」や「<ruby>代入法<rt>だいにゅうほう</rt></ruby>」を<ruby>使<rt>つか</rt></ruby>えば、どんな<ruby>場合<rt>ばあい</rt></ruby>でも<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>解<rt>と</rt></ruby>けるよ！お<ruby>楽<rt>たの</rt></ruby>しみに！',
    },
    {
      type: 'summary-point',
      text: '<ruby>表<rt>ひょう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>方法<rt>ほうほう</rt></ruby>：<ruby>各式<rt>かくしき</rt></ruby>を<ruby>満<rt>み</rt></ruby>たす $(x, y)$ を<ruby>表<rt>ひょう</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べて、<strong><ruby>両方<rt>りょうほう</rt></ruby>で<ruby>一致<rt>いっち</rt></ruby></strong>する<ruby>組<rt>くみ</rt></ruby>が<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>！',
    },

    {
      type: 'quiz',
      question: '$\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ のとき、$x$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 3$', correct: false },
        { letter: 'B', text: '$x = 5$', correct: false },
        { letter: 'C', text: '$x = 7$', correct: true },
        { letter: 'D', text: '$x = 10$', correct: false },
      ],
      explanation:
        '<ruby>表<rt>ひょう</rt></ruby>で<ruby>調<rt>しら</rt></ruby>べると、$x + y = 10$ で $x = 7$ → $y = 3$。$x - y = 4$ で $x = 7$ → $y = 3$。<ruby>一致<rt>いっち</rt></ruby>！よって $x = \\textcolor{#D97706}{7}$。',
    },
    {
      type: 'end',
      points: [
        '<span class="keyword"><ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby></span>：$x$ と $y$ の2つの<ruby>文字<rt>もじ</rt></ruby>をふくむ<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>（1つの<ruby>式<rt>しき</rt></ruby>だけでは<ruby>解<rt>かい</rt></ruby>は<ruby>無限<rt>むげん</rt></ruby>）',
        '<span class="keyword"><ruby>連立方程式<rt>れんりつほうていしき</rt></ruby></span>：2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせたもの（<ruby>解<rt>かい</rt></ruby>は<ruby>通常<rt>つうじょう</rt></ruby>1<ruby>組<rt>くみ</rt></ruby>に<ruby>決<rt>き</rt></ruby>まる）',
        '<ruby>解<rt>かい</rt></ruby>の<ruby>確<rt>たし</rt></ruby>かめ<ruby>方<rt>かた</rt></ruby>：$x, y$ を <strong>2つの<ruby>式<rt>しき</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby></strong> して<ruby>確認<rt>かくにん</rt></ruby>',
        '<ruby>表<rt>ひょう</rt></ruby>で<ruby>解<rt>かい</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける：<ruby>各式<rt>かくしき</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>り、<ruby>一致<rt>いっち</rt></ruby>する $(x, y)$ を<ruby>探<rt>さが</rt></ruby>す',
      ],
    },
  ],
};
