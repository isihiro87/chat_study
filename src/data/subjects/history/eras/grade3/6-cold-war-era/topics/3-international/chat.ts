import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarInternationalChat: HistoryChat = {
  id: 'postwar-international',
  icon: '🤝',
  title: '国際社会への復帰',
  subtitle: '〜戦後〜 日本外交の展開',
  characters: [
    {
      id: 'diplomat',
      name: '外交官',
      emoji: '🤝',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'journalist',
      name: '記者',
      emoji: '📰',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1955年〜1960年代',
    },
    {
      type: 'narrator',
      text: '1955年、インドネシアのバンドンで<strong>アジア・アフリカ会議</strong>が開かれ、植民地からの独立国が平和共存を訴えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'journalist',
      text: '米ソの冷戦が激化していますが、世界はどうなるのでしょうか？',
    },
    {
      type: 'narrator',
      text: '1962年、ソ連がキューバにミサイル基地を建設しようとし、<strong>キューバ危機</strong>が発生。米ソは核戦争の瀬戸際に立ちました。この危機をきっかけに<strong>部分的核実験禁止条約</strong>が結ばれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      text: '核戦争の恐怖を世界中が味わった。これを機に核軍縮の動きが始まったのです。',
    },
    {
      type: 'narrator',
      text: '<strong>ベトナム戦争</strong>ではアメリカが介入を深め、世界中で反戦運動が広がりました。アメリカでは<strong>キング牧師</strong>が公民権運動を指導しました。ヨーロッパでは<strong>ヨーロッパ共同体（EC）</strong>が結成され、経済統合が進みました。',
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
        '<strong>正解はB「キューバ危機」</strong>です。ソ連がキューバにミサイル基地を建設しようとし、米ソが核戦争寸前となりました。',
    },
    {
      type: 'date',
      text: '1956年〜1978年',
    },
    {
      type: 'narrator',
      text: '1956年、<strong>日ソ共同宣言</strong>でソ連との国交が回復し、日本は<strong>国際連合</strong>に加盟しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      text: '国連加盟で日本は国際社会に正式に復帰した。次は近隣諸国との関係改善だ。',
    },
    {
      type: 'narrator',
      text: '1965年に<strong>日韓基本条約</strong>で韓国と国交を正常化。1968年には<strong>小笠原諸島</strong>、1972年には<strong>沖縄</strong>が返還されました。<strong>非核三原則</strong>を掲げた佐藤栄作首相はノーベル平和賞を受賞しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'journalist',
      text: '沖縄がついに日本に返ってきましたね！中国との関係はどうなりますか？',
    },
    {
      type: 'narrator',
      text: '1972年、田中角栄首相が訪中し<strong>日中共同声明</strong>で中国との国交が正常化。1978年には<strong>日中平和友好条約</strong>が結ばれました。<strong>朝鮮戦争</strong>以来、朝鮮半島は南北に分断されたままでした。',
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
        '<strong>正解はB「日中共同声明」</strong>です。田中角栄首相が訪中し、中国との国交が正常化しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>アジア・アフリカ会議</strong>で植民地からの独立国が平和共存を訴えた',
        '<strong>キューバ危機</strong>で核戦争の瀬戸際に、<strong>部分的核実験禁止条約</strong>へ',
        '<strong>日ソ共同宣言</strong>（1956年）で国連加盟を実現',
        '<strong>沖縄返還</strong>（1972年）と<strong>非核三原則</strong>',
        '<strong>日中共同声明</strong>（1972年）・<strong>日中平和友好条約</strong>（1978年）で中国と国交正常化',
      ],
    },
  ],
};
