import type { HistoryChat } from '../../../../../../../history-chat/types';

export const foreignRelationsEdoChat: HistoryChat = {
  id: 'foreign-relations-edo',
  icon: '🌐',
  title: '鎖国下の対外関係',
  subtitle: '〜江戸時代〜 限られた窓口での交流',
  characters: [
    {
      id: 'merchant',
      name: '交易先生',
      emoji: '🏪',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
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
      text: '江戸時代（鎖国後）',
    },
    {
      type: 'narrator',
      text: '<ruby>鎖国<rp>(</rp><rt>さこく</rt><rp>)</rp></ruby>下でも、日本はすべての外国との関係を断ったわけではありません。<strong>オランダ</strong>と<strong><ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby></strong>（中国）とは<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby>で<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>を続けました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'explaining',
      text: 'オランダ人は<strong><span class="keyword"><ruby>出島<rp>(</rp><rt>でじま</rt><rp>)</rp></ruby></span></strong>で、<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の商人は<strong><span class="keyword"><ruby>唐人屋敷<rp>(</rp><rt>とうじんやしき</rt><rp>)</rp></ruby></span></strong>で取引していたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '鎖国なのに貿易は続けていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'happy',
      text: 'そう！完全に外国との関係を断ったわけじゃないんだよ。<span data-tooltip="長崎港に作られた人工の島。オランダ商館が置かれた"><strong>出島</strong></span>と<span data-tooltip="長崎に設けられた中国人商人の居住地"><strong>唐人屋敷</strong></span>で貿易を行い、海外の品物や情報を手に入れていたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '海外の情報はどうやって手に入れていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'excited',
      text: 'オランダ<ruby>商館長<rp>(</rp><rt>しょうかんちょう</rt><rp>)</rp></ruby>が毎年幕府に提出する<strong><span class="keyword">オランダ<ruby>風説書<rp>(</rp><rt>ふうせつがき</rt><rp>)</rp></ruby></span></strong>が、鎖国下の日本にとって<ruby>貴重<rp>(</rp><rt>きちょう</rt><rp>)</rp></ruby>な海外情報源だったんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<span data-tooltip="オランダ商館長が毎年幕府に提出した海外事情の報告書"><strong>オランダ風説書</strong></span>で世界の出来事を知っていたんですね！',
    },
    {
      type: 'summary-point',
      text: 'オランダ（<span class="keyword">出島</span>）・清（<span class="keyword">唐人屋敷</span>）と長崎で貿易 → <span class="keyword">オランダ風説書</span>で海外情報を入手',
    },
    {
      type: 'quiz',
      question: 'オランダ商館長が幕府に提出した海外情報の報告書は？',
      options: [
        { letter: 'A', text: '解体新書', correct: false },
        { letter: 'B', text: 'オランダ風説書', correct: true },
        { letter: 'C', text: '武家諸法度', correct: false },
        { letter: 'D', text: '蘭学事始', correct: false },
      ],
      explanation:
        '<strong>正解はB「オランダ<ruby>風説書<rp>(</rp><rt>ふうせつがき</rt><rp>)</rp></ruby>」</strong>です。オランダ<ruby>商館長<rp>(</rp><rt>しょうかんちょう</rt><rp>)</rp></ruby>が毎年幕府に提出した海外<ruby>情勢<rp>(</rp><rt>じょうせい</rt><rp>)</rp></ruby>の報告書で、鎖国下の日本にとって重要な情報源でした。',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby></span></strong>とは<strong><span class="keyword"><ruby>対馬藩<rp>(</rp><rt>つしまはん</rt><rp>)</rp></ruby></span></strong>を通じて外交を行いました。<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>の代替わりごとに<strong><span class="keyword"><ruby>朝鮮通信使<rp>(</rp><rt>ちょうせんつうしんし</rt><rp>)</rp></ruby></span></strong>が来日しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<span data-tooltip="朝鮮から将軍の代替わりごとに日本へ派遣された使節団"><strong>朝鮮通信使</strong></span>はどんな役割があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'explaining',
      text: '<strong>朝鮮通信使</strong>の行列は各地で歓迎されて、<ruby>文化交流<rp>(</rp><rt>ぶんかこうりゅう</rt><rp>)</rp></ruby>の場にもなったんだよ。学問や芸術の交流が行われたんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'thinking',
      text: '外交の<ruby>窓口<rp>(</rp><rt>まどぐち</rt><rp>)</rp></ruby>は<strong>対馬藩</strong>の<ruby>宗氏<rp>(</rp><rt>そうし</rt><rp>)</rp></ruby>が担当していたんだ。朝鮮半島に近い対馬ならではの役割だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '鎖国中でも朝鮮との交流は続いていたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">朝鮮</span>とは<span class="keyword">対馬藩</span>を通じて外交 → 将軍の代替わりに<span class="keyword">朝鮮通信使</span>が来日し文化交流',
    },
    {
      type: 'quiz',
      question: '鎖国下、朝鮮との外交を仲介した藩は？',
      options: [
        { letter: 'A', text: '対馬藩', correct: true },
        { letter: 'B', text: '松前藩', correct: false },
        { letter: 'C', text: '長州藩', correct: false },
        { letter: 'D', text: '薩摩藩', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>対馬藩<rp>(</rp><rt>つしまはん</rt><rp>)</rp></ruby>」</strong>です。対馬藩の<ruby>宗氏<rp>(</rp><rt>そうし</rt><rp>)</rp></ruby>が<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>との外交を担当し、<ruby>朝鮮通信使<rp>(</rp><rt>ちょうせんつうしんし</rt><rp>)</rp></ruby>の来日を取り次ぎました。',
    },
    {
      type: 'end',
      points: [
        '<strong>オランダ</strong>（<ruby>出島<rp>(</rp><rt>でじま</rt><rp>)</rp></ruby>）・<strong><ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby></strong>（<ruby>唐人屋敷<rp>(</rp><rt>とうじんやしき</rt><rp>)</rp></ruby>）と長崎で貿易',
        '<strong>オランダ<ruby>風説書<rp>(</rp><rt>ふうせつがき</rt><rp>)</rp></ruby></strong>で海外情報を入手',
        '<strong><ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby></strong>とは<strong><ruby>対馬藩<rp>(</rp><rt>つしまはん</rt><rp>)</rp></ruby></strong>を通じて外交、<strong><ruby>朝鮮通信使<rp>(</rp><rt>ちょうせんつうしんし</rt><rp>)</rp></ruby></strong>が来日',
        '鎖国下でも4つの<ruby>窓口<rp>(</rp><rt>まどぐち</rt><rp>)</rp></ruby>で対外関係を維持',
      ],
    },
  ],
};
