import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const animalBodyChat: HistoryChat = {
  id: 'sci2-animal-body',
  icon: '🫀',
  title: '動物のからだのつくりとはたらき',
  subtitle: '〜中2生物〜 消化・吸収・呼吸・血液循環・排出',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '<ruby>消化<rp>(</rp><rt>しょうか</rt><rp>)</rp></ruby>のしくみ',
    },
    {
      type: 'narrator',
      text: '食べたものが<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>に<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>まれるまでの<strong><span class="keyword"><ruby>消化<rp>(</rp><rt>しょうか</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby></span></strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '食べたものは<strong><span class="keyword"><ruby>消化管<rp>(</rp><rt>しょうかかん</rt><rp>)</rp></ruby></span></strong>を通るよ。<ruby>口<rp>(</rp><rt>くち</rt><rp>)</rp></ruby>→<ruby>食道<rp>(</rp><rt>しょくどう</rt><rp>)</rp></ruby>→<ruby>胃<rp>(</rp><rt>い</rt><rp>)</rp></ruby>→<ruby>小腸<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>→<ruby>大腸<rp>(</rp><rt>だいちょう</rt><rp>)</rp></ruby>→<ruby>肛門<rp>(</rp><rt>こうもん</rt><rp>)</rp></ruby>の1<ruby>本<rp>(</rp><rt>ぽん</rt><rp>)</rp></ruby>の長い<ruby>管<rp>(</rp><rt>くだ</rt><rp>)</rp></ruby>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'その<ruby>途中<rp>(</rp><rt>とちゅう</rt><rp>)</rp></ruby>で食べ物はどう変わるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>消化酵素<rp>(</rp><rt>しょうかこうそ</rt><rp>)</rp></ruby></span></strong>が<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を小さく<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>するんだ！<br/>・<strong>アミラーゼ</strong>（だ<ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>）：デンプン → <ruby>麦芽糖<rp>(</rp><rt>ばくがとう</rt><rp>)</rp></ruby><br/>・<strong>ペプシン</strong>（<ruby>胃液<rp>(</rp><rt>いえき</rt><rp>)</rp></ruby>）：タンパク<ruby>質<rp>(</rp><rt>しつ</rt><rp>)</rp></ruby>を<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby><br/>・<strong>トリプシン</strong>（すい<ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>）：タンパク<ruby>質<rp>(</rp><rt>しつ</rt><rp>)</rp></ruby> → アミノ<ruby>酸<rp>(</rp><rt>さん</rt><rp>)</rp></ruby><br/>・<strong>リパーゼ</strong>（すい<ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>）：<ruby>脂肪<rp>(</rp><rt>しぼう</rt><rp>)</rp></ruby> → <ruby>脂肪酸<rp>(</rp><rt>しぼうさん</rt><rp>)</rp></ruby>＋モノグリセリド',
    },
    {
      type: 'image',
      src: '/images/science/digestive-system.svg',
      alt: '消化管と消化酵素',
      caption: '消化管の流れと各消化酵素のはたらき',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>胆汁<rp>(</rp><rt>たんじゅう</rt><rp>)</rp></ruby>って<ruby>消化酵素<rp>(</rp><rt>しょうかこうそ</rt><rp>)</rp></ruby>じゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>！<strong><span class="keyword"><ruby>胆汁<rp>(</rp><rt>たんじゅう</rt><rp>)</rp></ruby></span></strong>は<strong><ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby></strong>で作られて<ruby>胆<rp>(</rp><rt>たん</rt><rp>)</rp></ruby>のうにためられるけど、<ruby>消化酵素<rp>(</rp><rt>しょうかこうそ</rt><rp>)</rp></ruby>は<strong><ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>まない</strong>んだ。リパーゼのはたらきを<ruby>助<rp>(</rp><rt>たす</rt><rp>)</rp></ruby>ける<ruby>役割<rp>(</rp><rt>やくわり</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">消化酵素</span>：アミラーゼ（デンプン）、ペプシン・トリプシン（タンパク質）、リパーゼ（脂肪）。<span class="keyword">胆汁</span>は酵素を含まないがリパーゼを助ける',
    },
    {
      type: 'date',
      text: '<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>のしくみ',
    },
    {
      type: 'narrator',
      text: '<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>された<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>が<ruby>体内<rp>(</rp><rt>たいない</rt><rp>)</rp></ruby>に取り<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>まれるしくみを見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>小腸<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>の<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby>にはたくさんの<strong><span class="keyword"><ruby>柔毛<rp>(</rp><rt>じゅうもう</rt><rp>)</rp></ruby></span></strong>という小さな<ruby>突起<rp>(</rp><rt>とっき</rt><rp>)</rp></ruby>があるよ。これで<ruby>表面積<rp>(</rp><rt>ひょうめんせき</rt><rp>)</rp></ruby>を大きくして<ruby>効率<rp>(</rp><rt>こうりつ</rt><rp>)</rp></ruby>よく<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>された<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>はどこへ行くんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong>ブドウ<ruby>糖<rp>(</rp><rt>とう</rt><rp>)</rp></ruby></strong>と<strong>アミノ<ruby>酸<rp>(</rp><rt>さん</rt><rp>)</rp></ruby></strong>は<ruby>柔毛<rp>(</rp><rt>じゅうもう</rt><rp>)</rp></ruby>の<strong><ruby>毛細<rp>(</rp><rt>もうさい</rt><rp>)</rp></ruby><ruby>血管<rp>(</rp><rt>けっかん</rt><rp>)</rp></ruby></strong>に入って<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>へ。<ruby>脂肪酸<rp>(</rp><rt>しぼうさん</rt><rp>)</rp></ruby>とモノグリセリドは<ruby>柔毛<rp>(</rp><rt>じゅうもう</rt><rp>)</rp></ruby>で再び<ruby>脂肪<rp>(</rp><rt>しぼう</rt><rp>)</rp></ruby>になって<strong>リンパ<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby></strong>に入るよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">柔毛</span>で表面積を大きくして吸収。ブドウ糖・アミノ酸→毛細血管→肝臓。脂肪→リンパ管',
    },
    {
      type: 'quiz',
      question: '小腸の柔毛で吸収されたブドウ糖は最初にどこへ運ばれる？',
      options: [
        { letter: 'A', text: '腎臓', correct: false },
        { letter: 'B', text: '肺', correct: false },
        { letter: 'C', text: '肝臓', correct: true },
        { letter: 'D', text: '心臓', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>」</strong>です。ブドウ<ruby>糖<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>とアミノ<ruby>酸<rp>(</rp><rt>さん</rt><rp>)</rp></ruby>は<ruby>柔毛<rp>(</rp><rt>じゅうもう</rt><rp>)</rp></ruby>の<ruby>毛細<rp>(</rp><rt>もうさい</rt><rp>)</rp></ruby><ruby>血管<rp>(</rp><rt>けっかん</rt><rp>)</rp></ruby>に入り、まず<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>へ運ばれます。',
    },
    {
      type: 'date',
      text: '<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>と<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>の<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>での<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby><ruby>交換<rp>(</rp><rt>こうかん</rt><rp>)</rp></ruby>と<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>の<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby>のしくみを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>の中には<strong><span class="keyword"><ruby>肺胞<rp>(</rp><rt>はいほう</rt><rp>)</rp></ruby></span></strong>という小さなふくろがたくさんあるよ。ここで<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>が<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>に取り<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>まれ、CO<sub>2</sub>が<ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>されるんだ。たくさんの<ruby>肺胞<rp>(</rp><rt>はいほう</rt><rp>)</rp></ruby>で<ruby>表面積<rp>(</rp><rt>ひょうめんせき</rt><rp>)</rp></ruby>を大きくして<ruby>効率<rp>(</rp><rt>こうりつ</rt><rp>)</rp></ruby>を上げているよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>心臓<rp>(</rp><rt>しんぞう</rt><rp>)</rp></ruby>は<strong>4つの<ruby>部屋<rp>(</rp><rt>へや</rt><rp>)</rp></ruby></strong>（<ruby>右心房<rp>(</rp><rt>うしんぼう</rt><rp>)</rp></ruby>・<ruby>右心室<rp>(</rp><rt>うしんしつ</rt><rp>)</rp></ruby>・<ruby>左心房<rp>(</rp><rt>さしんぼう</rt><rp>)</rp></ruby>・<ruby>左心室<rp>(</rp><rt>さしんしつ</rt><rp>)</rp></ruby>）があり、ポンプのように<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>を送り出しているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>は<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>のなかをどう<ruby>回<rp>(</rp><rt>まわ</rt><rp>)</rp></ruby>っているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '2つのルートがあるよ！<br/><strong><span class="keyword"><ruby>体循環<rp>(</rp><rt>たいじゅんかん</rt><rp>)</rp></ruby></span></strong>：<ruby>左心室<rp>(</rp><rt>さしんしつ</rt><rp>)</rp></ruby>→<ruby>全身<rp>(</rp><rt>ぜんしん</rt><rp>)</rp></ruby>→<ruby>右心房<rp>(</rp><rt>うしんぼう</rt><rp>)</rp></ruby>（O<sub>2</sub>を届けCO<sub>2</sub>を回収）<br/><strong><span class="keyword"><ruby>肺循環<rp>(</rp><rt>はいじゅんかん</rt><rp>)</rp></ruby></span></strong>：<ruby>右心室<rp>(</rp><rt>うしんしつ</rt><rp>)</rp></ruby>→<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>→<ruby>左心房<rp>(</rp><rt>さしんぼう</rt><rp>)</rp></ruby>（CO<sub>2</sub>を<ruby>捨<rp>(</rp><rt>す</rt><rp>)</rp></ruby>てO<sub>2</sub>を取り<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>む）',
    },
    {
      type: 'image',
      src: '/images/science/blood-circulation.svg',
      alt: '体循環と肺循環',
      caption: '2つの循環ルート',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">肺胞</span>で気体交換。<span class="keyword">体循環</span>＝左心室→全身→右心房。<span class="keyword">肺循環</span>＝右心室→肺→左心房',
    },
    {
      type: 'date',
      text: '<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>の<ruby>成分<rp>(</rp><rt>せいぶん</rt><rp>)</rp></ruby>と<ruby>排出<rp>(</rp><rt>はいしゅつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>の<ruby>成分<rp>(</rp><rt>せいぶん</rt><rp>)</rp></ruby>と<ruby>不要物<rp>(</rp><rt>ふようぶつ</rt><rp>)</rp></ruby>の<ruby>排出<rp>(</rp><rt>はいしゅつ</rt><rp>)</rp></ruby>のしくみを<ruby>整理<rp>(</rp><rt>せいり</rt><rp>)</rp></ruby>しましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>の<ruby>成分<rp>(</rp><rt>せいぶん</rt><rp>)</rp></ruby>を<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう！<br/>・<strong><span class="keyword"><ruby>赤血球<rp>(</rp><rt>せっけっきゅう</rt><rp>)</rp></ruby></span></strong>：ヘモグロビンでO<sub>2</sub>を<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ぶ<br/>・<strong><ruby>白血球<rp>(</rp><rt>はっけっきゅう</rt><rp>)</rp></ruby></strong>：<ruby>細菌<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>を<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby><br/>・<strong><ruby>血小板<rp>(</rp><rt>けっしょうばん</rt><rp>)</rp></ruby></strong>：<ruby>出血<rp>(</rp><rt>しゅっけつ</rt><rp>)</rp></ruby>を止める<br/>・<strong><span class="keyword"><ruby>血<rp>(</rp><rt>けっ</rt><rp>)</rp></ruby>しょう</span></strong>：<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>や<ruby>不要物<rp>(</rp><rt>ふようぶつ</rt><rp>)</rp></ruby>を<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ぶ<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>の中の<ruby>不要物<rp>(</rp><rt>ふようぶつ</rt><rp>)</rp></ruby>はどうやって<ruby>外<rp>(</rp><rt>そと</rt><rp>)</rp></ruby>に出されるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby></span></strong>が<ruby>有害<rp>(</rp><rt>ゆうがい</rt><rp>)</rp></ruby>な<strong>アンモニア</strong>を<ruby>無害<rp>(</rp><rt>むがい</rt><rp>)</rp></ruby>な<strong><ruby>尿素<rp>(</rp><rt>にょうそ</rt><rp>)</rp></ruby></strong>に変えて、<strong><span class="keyword"><ruby>腎臓<rp>(</rp><rt>じんぞう</rt><rp>)</rp></ruby></span></strong>が<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>から<ruby>不要物<rp>(</rp><rt>ふようぶつ</rt><rp>)</rp></ruby>をこし出して<strong><ruby>尿<rp>(</rp><rt>にょう</rt><rp>)</rp></ruby></strong>を作るんだ。<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>は「<ruby>化学工場<rp>(</rp><rt>かがくこうじょう</rt><rp>)</rp></ruby>」、<ruby>腎臓<rp>(</rp><rt>じんぞう</rt><rp>)</rp></ruby>は「フィルター」とイメージしよう！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>で<ruby>無害化<rp>(</rp><rt>むがいか</rt><rp>)</rp></ruby>→<ruby>腎臓<rp>(</rp><rt>じんぞう</rt><rp>)</rp></ruby>で<ruby>排出<rp>(</rp><rt>はいしゅつ</rt><rp>)</rp></ruby>、って流れですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">赤血球</span>（ヘモグロビン）でO₂を運ぶ。<span class="keyword">肝臓</span>：アンモニア→尿素。<span class="keyword">腎臓</span>：不要物をこし出して尿を作る',
    },
    {
      type: 'quiz',
      question: '有害なアンモニアを無害な尿素に変える器官はどれ？',
      options: [
        { letter: 'A', text: '腎臓', correct: false },
        { letter: 'B', text: '心臓', correct: false },
        { letter: 'C', text: '肝臓', correct: true },
        { letter: 'D', text: '肺', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>」</strong>です。<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>は<ruby>有害<rp>(</rp><rt>ゆうがい</rt><rp>)</rp></ruby>なアンモニアを<ruby>無害<rp>(</rp><rt>むがい</rt><rp>)</rp></ruby>な<ruby>尿素<rp>(</rp><rt>にょうそ</rt><rp>)</rp></ruby>に変えます。<ruby>腎臓<rp>(</rp><rt>じんぞう</rt><rp>)</rp></ruby>は<ruby>血液<rp>(</rp><rt>けつえき</rt><rp>)</rp></ruby>から<ruby>不要物<rp>(</rp><rt>ふようぶつ</rt><rp>)</rp></ruby>をこし出して<ruby>尿<rp>(</rp><rt>にょう</rt><rp>)</rp></ruby>を作ります。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>消化管<rp>(</rp><rt>しょうかかん</rt><rp>)</rp></ruby></strong>：<ruby>口<rp>(</rp><rt>くち</rt><rp>)</rp></ruby>→<ruby>食道<rp>(</rp><rt>しょくどう</rt><rp>)</rp></ruby>→<ruby>胃<rp>(</rp><rt>い</rt><rp>)</rp></ruby>→<ruby>小腸<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>→<ruby>大腸<rp>(</rp><rt>だいちょう</rt><rp>)</rp></ruby>→<ruby>肛門<rp>(</rp><rt>こうもん</rt><rp>)</rp></ruby>。<strong><ruby>消化酵素<rp>(</rp><rt>しょうかこうそ</rt><rp>)</rp></ruby></strong>で<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>',
        '<strong><ruby>柔毛<rp>(</rp><rt>じゅうもう</rt><rp>)</rp></ruby></strong>で<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>。ブドウ<ruby>糖<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>・アミノ<ruby>酸<rp>(</rp><rt>さん</rt><rp>)</rp></ruby>→<ruby>毛細<rp>(</rp><rt>もうさい</rt><rp>)</rp></ruby><ruby>血管<rp>(</rp><rt>けっかん</rt><rp>)</rp></ruby>→<ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby>、<ruby>脂肪<rp>(</rp><rt>しぼう</rt><rp>)</rp></ruby>→リンパ<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>',
        '<strong><ruby>肺胞<rp>(</rp><rt>はいほう</rt><rp>)</rp></ruby></strong>で<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby><ruby>交換<rp>(</rp><rt>こうかん</rt><rp>)</rp></ruby>。<strong><ruby>体循環<rp>(</rp><rt>たいじゅんかん</rt><rp>)</rp></ruby></strong>＝<ruby>左心室<rp>(</rp><rt>さしんしつ</rt><rp>)</rp></ruby>→<ruby>全身<rp>(</rp><rt>ぜんしん</rt><rp>)</rp></ruby>→<ruby>右心房<rp>(</rp><rt>うしんぼう</rt><rp>)</rp></ruby>、<strong><ruby>肺循環<rp>(</rp><rt>はいじゅんかん</rt><rp>)</rp></ruby></strong>＝<ruby>右心室<rp>(</rp><rt>うしんしつ</rt><rp>)</rp></ruby>→<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>→<ruby>左心房<rp>(</rp><rt>さしんぼう</rt><rp>)</rp></ruby>',
        '<strong><ruby>肝臓<rp>(</rp><rt>かんぞう</rt><rp>)</rp></ruby></strong>：アンモニア→<ruby>尿素<rp>(</rp><rt>にょうそ</rt><rp>)</rp></ruby>。<strong><ruby>腎臓<rp>(</rp><rt>じんぞう</rt><rp>)</rp></ruby></strong>：<ruby>不要物<rp>(</rp><rt>ふようぶつ</rt><rp>)</rp></ruby>をこし出して<ruby>尿<rp>(</rp><rt>にょう</rt><rp>)</rp></ruby>を作る',
      ],
    },
  ],
};
