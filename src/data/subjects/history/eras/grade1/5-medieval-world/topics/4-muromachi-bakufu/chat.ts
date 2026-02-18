import type { HistoryChat } from '../../../../../../../history-chat/types';

export const muromachiBakufuChat: HistoryChat = {
  id: 'muromachi-bakufu',
  icon: '🏯',
  title: '室町幕府の成立',
  subtitle: '〜14世紀〜 南北朝の統一と守護大名',
  characters: [
    {
      id: 'takauji',
      name: '室町先生',
      emoji: '⚔️',
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
      text: '1334年〜14世紀末',
    },
    {
      type: 'narrator',
      text: '<ruby>鎌倉幕府<rp>(</rp><rt>かまくらばくふ</rt><rp>)</rp></ruby>を<ruby>倒<rp>(</rp><rt>たお</rt><rp>)</rp></ruby>した<strong><ruby>後醍醐天皇<rp>(</rp><rt>ごだいごてんのう</rt><rp>)</rp></ruby></strong>は<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>中心の政治を目指し<strong><span class="keyword"><ruby>建武<rp>(</rp><rt>けんむ</rt><rp>)</rp></ruby>の<ruby>新政<rp>(</rp><rt>しんせい</rt><rp>)</rp></ruby></span></strong>を始めましたが、武士の不満が高まり、わずか2年で<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'takauji',
      expression: 'explaining',
      text: '<span data-tooltip="後醍醐天皇が始めた天皇中心の政治。武士よりも公家を優遇したため反発を招いた"><strong>建武の新政</strong></span>は<ruby>公家<rp>(</rp><rt>くげ</rt><rp>)</rp></ruby>ばかりを<ruby>優遇<rp>(</rp><rt>ゆうぐう</rt><rp>)</rp></ruby>し、武士の<ruby>功績<rp>(</rp><rt>こうせき</rt><rp>)</rp></ruby>を正しく<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>しなかった。<strong><span class="keyword"><ruby>足利尊氏<rp>(</rp><rt>あしかがたかうじ</rt><rp>)</rp></ruby></span></strong>は<ruby>後醍醐天皇<rp>(</rp><rt>ごだいごてんのう</rt><rp>)</rp></ruby>に<ruby>反旗<rp>(</rp><rt>はんき</rt><rp>)</rp></ruby>を<ruby>翻<rp>(</rp><rt>ひるがえ</rt><rp>)</rp></ruby>し、京都に新しい天皇を立てて<strong><span class="keyword"><ruby>室町幕府<rp>(</rp><rt>むろまちばくふ</rt><rp>)</rp></ruby></span></strong>を開いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '後醍醐天皇はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'takauji',
      expression: 'thinking',
      text: '<strong>後醍醐天皇</strong>は<ruby>吉野<rp>(</rp><rt>よしの</rt><rp>)</rp></ruby>に<ruby>逃<rp>(</rp><rt>のが</rt><rp>)</rp></ruby>れて<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>を開いた。京都の<strong><span class="keyword"><ruby>北朝<rp>(</rp><rt>ほくちょう</rt><rp>)</rp></ruby></span></strong>と吉野の<strong><span class="keyword"><ruby>南朝<rp>(</rp><rt>なんちょう</rt><rp>)</rp></ruby></span></strong>、二つの朝廷が並び立つ<strong><span class="keyword"><ruby>南北朝時代<rp>(</rp><rt>なんぼくちょうじだい</rt><rp>)</rp></ruby></span></strong>が約60年間続いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '天皇が二人もいた時代があったんですか！60年も続いたなんてすごい...',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">建武の新政</span>が崩壊 → <span class="keyword">足利尊氏</span>が<span class="keyword">室町幕府</span>を開く → <span class="keyword">南北朝時代</span>（約60年間）',
    },
    {
      type: 'quiz',
      question: '後醍醐天皇が鎌倉幕府を倒した後に始めた天皇中心の政治を何という？',
      options: [
        { letter: 'A', text: '大化の改新', correct: false },
        { letter: 'B', text: '摂関政治', correct: false },
        { letter: 'C', text: '院政', correct: false },
        { letter: 'D', text: '建武の新政', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>建武<rp>(</rp><rt>けんむ</rt><rp>)</rp></ruby>の<ruby>新政<rp>(</rp><rt>しんせい</rt><rp>)</rp></ruby>」</strong>です。<ruby>後醍醐天皇<rp>(</rp><rt>ごだいごてんのう</rt><rp>)</rp></ruby>は1334年に天皇中心の政治を始めましたが、武士の不満が高まり約2年で<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '3代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><strong><span class="keyword"><ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby></span></strong>の時代に<strong>室町幕府</strong>は<ruby>全盛期<rp>(</rp><rt>ぜんせいき</rt><rp>)</rp></ruby>を<ruby>迎<rp>(</rp><rt>むか</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'takauji',
      expression: 'excited',
      text: '<strong>足利義満</strong>は<strong>南北朝</strong>を<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>し、約60年にわたる<ruby>分裂<rp>(</rp><rt>ぶんれつ</rt><rp>)</rp></ruby>に<ruby>終止符<rp>(</rp><rt>しゅうしふ</rt><rp>)</rp></ruby>を打った。京都の室町に<ruby>豪華<rp>(</rp><rt>ごうか</rt><rp>)</rp></ruby>な<ruby>邸宅<rp>(</rp><rt>ていたく</rt><rp>)</rp></ruby>（花の<ruby>御所<rp>(</rp><rt>ごしょ</rt><rp>)</rp></ruby>）を<ruby>構<rp>(</rp><rt>かま</rt><rp>)</rp></ruby>え、幕府の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>を高めたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '室町幕府のしくみはどうなっていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'takauji',
      expression: 'happy',
      text: '幕府のしくみとして、将軍を<ruby>補佐<rp>(</rp><rt>ほさ</rt><rp>)</rp></ruby>する<strong><span class="keyword"><ruby>管領<rp>(</rp><rt>かんれい</rt><rp>)</rp></ruby></span></strong>を置き、各地には<strong><span class="keyword"><ruby>守護大名<rp>(</rp><rt>しゅごだいみょう</rt><rp>)</rp></ruby></span></strong>を配置した。守護大名は<ruby>任国<rp>(</rp><rt>にんごく</rt><rp>)</rp></ruby>の軍事・<ruby>行政<rp>(</rp><rt>ぎょうせい</rt><rp>)</rp></ruby>を<ruby>担<rp>(</rp><rt>にな</rt><rp>)</rp></ruby>い、大きな力を持つようになったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '鎌倉幕府の執権と似た役割が管領なんですね。よくわかりました！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">足利義満</span>が南北朝を統一。<span class="keyword">管領</span>（将軍の補佐）と<span class="keyword">守護大名</span>（各地の統治）が幕府のしくみ',
    },
    {
      type: 'quiz',
      question: '室町幕府で将軍を補佐した役職を何という？',
      options: [
        { letter: 'A', text: '執権', correct: false },
        { letter: 'B', text: '老中', correct: false },
        { letter: 'C', text: '管領', correct: true },
        { letter: 'D', text: '関白', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>管領<rp>(</rp><rt>かんれい</rt><rp>)</rp></ruby>」</strong>です。<ruby>管領<rp>(</rp><rt>かんれい</rt><rp>)</rp></ruby>は<ruby>室町幕府<rp>(</rp><rt>むろまちばくふ</rt><rp>)</rp></ruby>で将軍を<ruby>補佐<rp>(</rp><rt>ほさ</rt><rp>)</rp></ruby>する最高職で、<ruby>細川<rp>(</rp><rt>ほそかわ</rt><rp>)</rp></ruby>・<ruby>斯波<rp>(</rp><rt>しば</rt><rp>)</rp></ruby>・<ruby>畠山<rp>(</rp><rt>はたけやま</rt><rp>)</rp></ruby>の三家が交代で<ruby>就任<rp>(</rp><rt>しゅうにん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>建武<rp>(</rp><rt>けんむ</rt><rp>)</rp></ruby>の<ruby>新政<rp>(</rp><rt>しんせい</rt><rp>)</rp></ruby></strong>：<ruby>後醍醐天皇<rp>(</rp><rt>ごだいごてんのう</rt><rp>)</rp></ruby>の天皇中心の政治（約2年で<ruby>崩壊<rp>(</rp><rt>ほうかい</rt><rp>)</rp></ruby>）',
        '<strong><ruby>南北朝時代<rp>(</rp><rt>なんぼくちょうじだい</rt><rp>)</rp></ruby></strong>：<ruby>北朝<rp>(</rp><rt>ほくちょう</rt><rp>)</rp></ruby>（京都）と<ruby>南朝<rp>(</rp><rt>なんちょう</rt><rp>)</rp></ruby>（吉野）が約60年間対立',
        '<strong><ruby>足利尊氏<rp>(</rp><rt>あしかがたかうじ</rt><rp>)</rp></ruby></strong>が<strong><ruby>室町幕府<rp>(</rp><rt>むろまちばくふ</rt><rp>)</rp></ruby></strong>を開き、<strong><ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby></strong>が南北朝を<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>管領<rp>(</rp><rt>かんれい</rt><rp>)</rp></ruby></strong>：将軍の<ruby>補佐<rp>(</rp><rt>ほさ</rt><rp>)</rp></ruby>役。<strong><ruby>守護大名<rp>(</rp><rt>しゅごだいみょう</rt><rp>)</rp></ruby></strong>が各地で大きな力を持った',
      ],
    },
  ],
};
