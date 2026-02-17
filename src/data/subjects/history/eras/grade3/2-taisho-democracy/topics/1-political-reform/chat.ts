import type { HistoryChat } from '../../../../../../../history-chat/types';

export const politicalReformChat: HistoryChat = {
  id: 'political-reform',
  icon: '🏛️',
  title: '政治の変革',
  subtitle: '〜大正〜 藩閥から政党へ',
  characters: [
    {
      id: 'hara',
      name: '原敬',
      emoji: '👔',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'yoshino',
      name: '吉野作造',
      emoji: '📚',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '大正時代',
    },
    {
      type: 'narrator',
      text: '明治以来、日本の政治は<strong>藩閥</strong>と呼ばれる薩摩・長州出身の政治家たちが支配していました。しかし国民の間で「憲法に基づく政治を行え」という声が高まっていきます。',
    },
    {
      type: 'narrator',
      text: '1912年、藩閥出身の<strong>桂太郎</strong>が首相になると、<strong>第一次護憲運動</strong>が起こりました。民衆の力で<strong>桂太郎内閣</strong>は退陣に追い込まれたのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshino',
      text: '政治は国民のためにあるべきだ。私は「民本主義」を唱え、民衆の意見を政治に反映させることを主張する',
    },
    {
      type: 'narrator',
      text: '<strong>吉野作造</strong>は「<strong>民本主義</strong>」を、<strong>美濃部達吉</strong>は「<strong>天皇機関説</strong>」を唱え、大正デモクラシーの理論を支えました。',
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
        '<strong>正解はC「桂太郎」</strong>です。民衆の護憲運動により、藩閥政治の象徴である桂太郎内閣は退陣しました。',
    },
    {
      type: 'narrator',
      text: '第一次世界大戦中、日本は<strong>大戦景気</strong>に沸きました。「<strong>成金</strong>」と呼ばれる大金持ちが現れる一方、<strong>物価上昇</strong>で庶民の生活は苦しくなりました。',
    },
    {
      type: 'narrator',
      text: '1918年、米の価格が急騰すると、全国で<strong>米騒動</strong>が発生。<strong>寺内内閣</strong>は総辞職に追い込まれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hara',
      text: '国民の声に応えるため、私が本格的な政党内閣を作る。爵位を持たない「平民宰相」として、国民と共に歩む政治を目指す',
    },
    {
      type: 'narrator',
      text: '<strong>原敬</strong>は「<strong>平民宰相</strong>」と呼ばれ、日本初の本格的な<strong>政党内閣</strong>を組織しました。',
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
        '<strong>正解はC「原敬」</strong>です。「平民宰相」と呼ばれ、国民の期待を背負って本格的な政党内閣を組織しました。',
    },
    {
      type: 'narrator',
      text: '1925年には<strong>普通選挙法</strong>が成立し、<strong>25歳以上のすべての男性</strong>に選挙権が与えられました。しかし同時に<strong>治安維持法</strong>も制定され、社会主義運動は厳しく取り締まられました。',
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
        '<strong>正解はB「25歳以上のすべての男性」</strong>です。財産による制限はなくなりましたが、女性参政権はまだ認められていませんでした。',
    },
    {
      type: 'end',
      points: [
        '<strong>第一次護憲運動</strong>で<strong>桂太郎</strong>内閣が退陣',
        '<strong>大戦景気</strong>と「<strong>成金</strong>」、<strong>米騒動</strong>で寺内内閣総辞職',
        '<strong>原敬</strong>が本格的な<strong>政党内閣</strong>を組織',
        '<strong>吉野作造</strong>「<strong>民本主義</strong>」、<strong>美濃部達吉</strong>「<strong>天皇機関説</strong>」',
        '1925年<strong>普通選挙法</strong>と<strong>治安維持法</strong>の同時制定',
      ],
    },
  ],
};
