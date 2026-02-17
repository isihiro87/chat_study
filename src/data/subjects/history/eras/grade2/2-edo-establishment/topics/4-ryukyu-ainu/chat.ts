import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ryukyuAinuChat: HistoryChat = {
  id: 'ryukyu-ainu',
  icon: '🌺',
  title: '琉球とアイヌ',
  subtitle: '〜江戸時代〜 周辺地域との関係',
  characters: [
    {
      id: 'ryukyu-king',
      name: '琉球王',
      emoji: '🌺',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
    {
      id: 'ainu',
      name: 'アイヌ',
      emoji: '🏔️',
      colorFrom: '#059669',
      colorTo: '#34d399',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '江戸時代、<strong>琉球王国</strong>と<strong>蝦夷地</strong>（北海道）のアイヌの人々は、それぞれ独自の文化を持ちながらも日本との関係を持っていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      text: '琉球は薩摩藩に支配されているが、清との中継貿易も続けている',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ainu',
      text: '私たちは蝦夷地で松前藩と交易をしています',
    },
    {
      type: 'narrator',
      text: '<strong>琉球王国</strong>は1609年に<strong>薩摩藩</strong>に征服されましたが、形式上は独立国として清との<strong>中継貿易</strong>を続けました。将軍の代替わりには<strong>琉球使節</strong>が江戸に派遣されました。',
    },
    {
      type: 'quiz',
      question: '琉球王国を支配下に置いた藩は？',
      options: [
        { letter: 'A', text: '薩摩藩', correct: true },
        { letter: 'B', text: '対馬藩', correct: false },
        { letter: 'C', text: '松前藩', correct: false },
        { letter: 'D', text: '長州藩', correct: false },
      ],
      explanation:
        '<strong>正解はA「薩摩藩」</strong>です。1609年に薩摩藩が琉球に侵攻し、以後支配下に置きました。琉球は薩摩藩と清の両方に属する形となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ainu',
      text: '松前藩との不公平な交易に怒り、シャクシャインが立ち上がったのです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      text: 'アイヌの人々も厳しい状況にあるのですね…',
    },
    {
      type: 'narrator',
      text: '<strong>蝦夷地</strong>では<strong>松前藩</strong>がアイヌとの交易を独占し、不公平な取引を行いました。1669年、アイヌの首長<strong>シャクシャイン</strong>が蜂起しましたが、鎮圧されました。',
    },
    {
      type: 'quiz',
      question: '1669年、松前藩の不公平な交易に対して蜂起したアイヌの首長は？',
      options: [
        { letter: 'A', text: '天草四郎', correct: false },
        { letter: 'B', text: 'ラクスマン', correct: false },
        { letter: 'C', text: 'コシャマイン', correct: false },
        { letter: 'D', text: 'シャクシャイン', correct: true },
      ],
      explanation:
        '<strong>正解はD「シャクシャイン」</strong>です。松前藩の不公平な交易に対し、アイヌの人々を率いて蜂起しましたが鎮圧されました。',
    },
    {
      type: 'end',
      points: [
        '<strong>琉球王国</strong>は<strong>薩摩藩</strong>の支配下で清との<strong>中継貿易</strong>を継続',
        '将軍の代替わりに<strong>琉球使節</strong>が江戸に派遣',
        '<strong>蝦夷地</strong>では<strong>松前藩</strong>がアイヌとの交易を独占',
        '<strong>シャクシャイン</strong>の蜂起（1669年）が鎮圧された',
      ],
    },
  ],
};
