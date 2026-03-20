import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const solutionPropertiesChat: HistoryChat = {
  id: 'sci1-solution-properties',
  icon: '🧫',
  title: '水溶液の性質',
  subtitle: '〜中1化学〜 溶解・質量パーセント濃度・溶解度と再結晶',
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
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が水にとけるようす',
    },
    {
      type: 'narrator',
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が水にとけるとは、どういうことでしょうか。<strong><span class="keyword"><ruby>溶解<rp>(</rp><rt>ようかい</rt><rp>)</rp></ruby></span></strong>のしくみを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>を水に入れると<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>えなくなるよね。これは<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>の<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>が<ruby>非常<rp>(</rp><rt>ひじょう</rt><rp>)</rp></ruby>に<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さくなって<ruby>均一<rp>(</rp><rt>きんいつ</rt><rp>)</rp></ruby>に<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がるからなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'なくなったわけじゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'なくなったわけじゃないよ！<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>えなくなっても<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらない。とけている<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby></span></strong>、とかしている<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>溶媒<rp>(</rp><rt>ようばい</rt><rp>)</rp></ruby></span></strong>、<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></span></strong>というんだ。<ruby>溶媒<rp>(</rp><rt>ようばい</rt><rp>)</rp></ruby>が水のときは<strong><span class="keyword"><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>にはどんな<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>の<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>は3つ！<br/>1. <strong><ruby>透明<rp>(</rp><rt>とうめい</rt><rp>)</rp></ruby></strong>である<br/>2. <ruby>濃<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>さがどこでも<strong><ruby>均一<rp>(</rp><rt>きんいつ</rt><rp>)</rp></ruby></strong><br/>3. <ruby>放置<rp>(</rp><rt>ほうち</rt><rp>)</rp></ruby>しても<ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby>が<strong><ruby>沈<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>まない</strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>純物質<rp>(</rp><rt>じゅんぶっしつ</rt><rp>)</rp></ruby>と<ruby>混合物<rp>(</rp><rt>こんごうぶつ</rt><rp>)</rp></ruby>って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>だけでできているものを<strong><span class="keyword"><ruby>純物質<rp>(</rp><rt>じゅんぶっしつ</rt><rp>)</rp></ruby></span></strong>、2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby><ruby>以上<rp>(</rp><rt>いじょう</rt><rp>)</rp></ruby>の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>じったものを<strong><span class="keyword"><ruby>混合物<rp>(</rp><rt>こんごうぶつ</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>は<ruby>純物質<rp>(</rp><rt>じゅんぶっしつ</rt><rp>)</rp></ruby>、<ruby>食塩水<rp>(</rp><rt>しょくえんすい</rt><rp>)</rp></ruby>は<ruby>混合物<rp>(</rp><rt>こんごうぶつ</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">溶質</span>（とける物質）＋<span class="keyword">溶媒</span>（とかす液体）＝<span class="keyword">溶液</span>。水溶液は透明・均一・沈まない。<span class="keyword">純物質</span>＝1種類、<span class="keyword">混合物</span>＝2種類以上',
    },
    {
      type: 'quiz',
      question: '水溶液の特徴として正しいものはどれ？',
      options: [
        { letter: 'A', text: '透明で濃さが均一', correct: true },
        { letter: 'B', text: '時間がたつと溶質が沈む', correct: false },
        { letter: 'C', text: 'にごっている', correct: false },
        { letter: 'D', text: '上のほうが濃い', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>透明<rp>(</rp><rt>とうめい</rt><rp>)</rp></ruby>で<ruby>濃<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>さが<ruby>均一<rp>(</rp><rt>きんいつ</rt><rp>)</rp></ruby>」</strong>です。<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>は<ruby>透明<rp>(</rp><rt>とうめい</rt><rp>)</rp></ruby>で<ruby>均一<rp>(</rp><rt>きんいつ</rt><rp>)</rp></ruby>、<ruby>放置<rp>(</rp><rt>ほうち</rt><rp>)</rp></ruby>しても<ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby>が<ruby>沈<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>みません。',
    },
    {
      type: 'date',
      text: '<ruby>ろ過<rp>(</rp><rt>ろか</rt><rp>)</rp></ruby>の<ruby>操作<rp>(</rp><rt>そうさ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>の中の<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>をろ<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>で<ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>する<strong><span class="keyword">ろ過</span></strong>の<ruby>正<rp>(</rp><rt>ただ</rt><rp>)</rp></ruby>しい<ruby>操作<rp>(</rp><rt>そうさ</rt><rp>)</rp></ruby>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>泥水<rp>(</rp><rt>どろみず</rt><rp>)</rp></ruby>をきれいにするとき<strong><span class="keyword">ろ過</span></strong>を使うよ。ろ<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>を<ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby>に<ruby>折<rp>(</rp><rt>お</rt><rp>)</rp></ruby>って、さらにもう<ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby>に<ruby>折<rp>(</rp><rt>お</rt><rp>)</rp></ruby>って、1<ruby>枚<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>と3<ruby>枚<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>に<ruby>開<rp>(</rp><rt>ひら</rt><rp>)</rp></ruby>いて<ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>すい<ruby>形<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>にするんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>を<ruby>注<rp>(</rp><rt>そそ</rt><rp>)</rp></ruby>ぐとき、<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>か<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp></ruby>をつけることはありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong>ガラス<ruby>棒<rp>(</rp><rt>ぼう</rt><rp>)</rp></ruby></strong>を<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わらせて<ruby>注<rp>(</rp><rt>そそ</rt><rp>)</rp></ruby>ぐよ！ろ<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>が<ruby>破<rp>(</rp><rt>やぶ</rt><rp>)</rp></ruby>れるのを<ruby>防<rp>(</rp><rt>ふせ</rt><rp>)</rp></ruby>ぐためだ。ガラス<ruby>棒<rp>(</rp><rt>ぼう</rt><rp>)</rp></ruby>はろ<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>の<strong>3<ruby>枚<rp>(</rp><rt>まい</rt><rp>)</rp></ruby><ruby>重<rp>(</rp><rt>がさ</rt><rp>)</rp></ruby>ね</strong>の<ruby>部分<rp>(</rp><rt>ぶぶん</rt><rp>)</rp></ruby>にあてる。それから、ろうとの<ruby>足<rp>(</rp><rt>あし</rt><rp>)</rp></ruby>は<strong>ビーカーの<ruby>内壁<rp>(</rp><rt>ないへき</rt><rp>)</rp></ruby></strong>につけてね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ろ過</span>：ガラス棒を伝わらせて注ぐ。ろ紙の3枚重ねにあて、ろうとの足はビーカーの内壁につける',
    },
    {
      type: 'quiz',
      question: 'ろ過でガラス棒をあてるのはろ紙のどの部分？',
      options: [
        { letter: 'A', text: '1枚の部分', correct: false },
        { letter: 'B', text: 'ろ紙の外側', correct: false },
        { letter: 'C', text: '3枚重ねの部分', correct: true },
        { letter: 'D', text: 'ろうとの先端', correct: false },
      ],
      explanation:
        '<strong>正解はC「3<ruby>枚<rp>(</rp><rt>まい</rt><rp>)</rp></ruby><ruby>重<rp>(</rp><rt>がさ</rt><rp>)</rp></ruby>ねの<ruby>部分<rp>(</rp><rt>ぶぶん</rt><rp>)</rp></ruby>」</strong>です。ろ<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>が<ruby>破<rp>(</rp><rt>やぶ</rt><rp>)</rp></ruby>れないよう、<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>い3<ruby>枚<rp>(</rp><rt>まい</rt><rp>)</rp></ruby><ruby>重<rp>(</rp><rt>がさ</rt><rp>)</rp></ruby>ねの<ruby>部分<rp>(</rp><rt>ぶぶん</rt><rp>)</rp></ruby>にガラス<ruby>棒<rp>(</rp><rt>ぼう</rt><rp>)</rp></ruby>をあてます。',
    },
    {
      type: 'date',
      text: '<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>パーセント<ruby>濃度<rp>(</rp><rt>のうど</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>の<ruby>濃<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>さを<ruby>数値<rp>(</rp><rt>すうち</rt><rp>)</rp></ruby>で<ruby>表<rp>(</rp><rt>あらわ</rt><rp>)</rp></ruby>す<ruby>方法<rp>(</rp><rt>ほうほう</rt><rp>)</rp></ruby>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>の<ruby>濃<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>さは<strong><span class="keyword"><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>パーセント<ruby>濃度<rp>(</rp><rt>のうど</rt><rp>)</rp></ruby></span></strong>で<ruby>表<rp>(</rp><rt>あらわ</rt><rp>)</rp></ruby>すよ。<ruby>公式<rp>(</rp><rt>こうしき</rt><rp>)</rp></ruby>は<br/><strong><ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>（g）÷ <ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>（g）× 100</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '水100gに<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>25gをとかしたら<ruby>何<rp>(</rp><rt>なん</rt><rp>)</rp></ruby>%ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は25g＋100g＝<strong>125g</strong>だから、<br/>25÷125×100＝<strong>20%</strong>だよ！<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>（<ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby>＋<ruby>溶媒<rp>(</rp><rt>ようばい</rt><rp>)</rp></ruby>）の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>で<ruby>割<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>るのがポイントだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '水の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>じゃなくて<ruby>溶液全体<rp>(</rp><rt>ようえきぜんたい</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>で<ruby>割<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>るんですね！',
    },
    {
      type: 'quiz',
      question: '水200gに食塩50gをとかした水溶液の質量パーセント濃度は？',
      options: [
        { letter: 'A', text: '25%', correct: false },
        { letter: 'B', text: '20%', correct: true },
        { letter: 'C', text: '50%', correct: false },
        { letter: 'D', text: '10%', correct: false },
      ],
      explanation:
        '<strong>正解はB「20%」</strong>です。<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>＝50g＋200g＝250g。<ruby>濃度<rp>(</rp><rt>のうど</rt><rp>)</rp></ruby>＝50÷250×100＝20%です。',
    },
    {
      type: 'date',
      text: '<ruby>溶解度<rp>(</rp><rt>ようかいど</rt><rp>)</rp></ruby>と<ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '水にとける<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>量<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>には<ruby>限界<rp>(</rp><rt>げんかい</rt><rp>)</rp></ruby>があります。<strong><span class="keyword"><ruby>溶解度<rp>(</rp><rt>ようかいど</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby></span></strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '水100gにとかせる<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>最大<rp>(</rp><rt>さいだい</rt><rp>)</rp></ruby>の<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>溶解度<rp>(</rp><rt>ようかいど</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>によって<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるから、その<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>をグラフにしたのが<strong><span class="keyword"><ruby>溶解度曲線<rp>(</rp><rt>ようかいどきょくせん</rt><rp>)</rp></ruby></span></strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>溶解度<rp>(</rp><rt>ようかいど</rt><rp>)</rp></ruby>いっぱいまでとかしたらどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'それを<strong><span class="keyword"><ruby>飽和水溶液<rp>(</rp><rt>ほうわすいようえき</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>高温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>の<ruby>飽和水溶液<rp>(</rp><rt>ほうわすいようえき</rt><rp>)</rp></ruby>を<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>やすと、とけきれなくなった<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<strong><ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby></strong>として出てくるんだ。これを<strong><span class="keyword"><ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>やすだけで<ruby>純粋<rp>(</rp><rt>じゅんすい</rt><rp>)</rp></ruby>な<ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby>が<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出せるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>混合物<rp>(</rp><rt>こんごうぶつ</rt><rp>)</rp></ruby>から<ruby>純粋<rp>(</rp><rt>じゅんすい</rt><rp>)</rp></ruby>な<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出す<ruby>方法<rp>(</rp><rt>ほうほう</rt><rp>)</rp></ruby>として<ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby>はとても<ruby>大切<rp>(</rp><rt>たいせつ</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/chemistry/crystal-shapes.png',
      alt: '結晶の形の比較',
      caption: '食塩（立方体）・ミョウバン（正八面体）・硝酸カリウム（針状）',
    },
    {
      type: 'image',
      src: '/images/science/grade1/chemistry/solubility-curve.svg',
      alt: '溶解度曲線',
      caption: '温度と溶解度の関係（硝酸カリウム・食塩・ミョウバン）',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">溶解度</span>＝水100gにとける最大質量。<span class="keyword">飽和水溶液</span>を冷やすと<span class="keyword">再結晶</span>で純粋な結晶が得られる',
    },
    {
      type: 'quiz',
      question: '飽和水溶液を冷やして結晶を取り出す操作を何という？',
      options: [
        { letter: 'A', text: 'ろ過', correct: false },
        { letter: 'B', text: '蒸留', correct: false },
        { letter: 'C', text: '蒸発', correct: false },
        { letter: 'D', text: '再結晶', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby>」</strong>です。<ruby>高温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>の<ruby>飽和水溶液<rp>(</rp><rt>ほうわすいようえき</rt><rp>)</rp></ruby>を<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>やしてとけきれない<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby>として<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出します。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby></strong>（とける<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>）＋<strong><ruby>溶媒<rp>(</rp><rt>ようばい</rt><rp>)</rp></ruby></strong>（とかす<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>）＝<strong><ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></strong>。<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>は<ruby>透明<rp>(</rp><rt>とうめい</rt><rp>)</rp></ruby>・<ruby>均一<rp>(</rp><rt>きんいつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>パーセント<ruby>濃度<rp>(</rp><rt>のうど</rt><rp>)</rp></ruby></strong>＝<ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby>÷<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>×100。<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>＝<ruby>溶質<rp>(</rp><rt>ようしつ</rt><rp>)</rp></ruby>＋<ruby>溶媒<rp>(</rp><rt>ようばい</rt><rp>)</rp></ruby>',
        '<strong><ruby>溶解度<rp>(</rp><rt>ようかいど</rt><rp>)</rp></ruby></strong>＝水100gにとける<ruby>最大<rp>(</rp><rt>さいだい</rt><rp>)</rp></ruby><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>。<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>で<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>する',
        '<strong><ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby></strong>＝<ruby>飽和水溶液<rp>(</rp><rt>ほうわすいようえき</rt><rp>)</rp></ruby>を<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>やして<ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby>を<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出す<ruby>操作<rp>(</rp><rt>そうさ</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
