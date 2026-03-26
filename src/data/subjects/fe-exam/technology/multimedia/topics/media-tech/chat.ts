import type { HistoryChat } from '../../../../../../history-chat/types';

export const mediaTechChat: HistoryChat = {
  id: 'fe-media-tech',
  icon: '🖼️',
  title: 'マルチメディア技術',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: { explaining: '🧑‍🏫', happy: '😊', thinking: '🤔', excited: '🤩' },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋', surprised: '😲', thinking: '🤔', happy: '😄', confused: '😵' },
    },
  ],
  content: [
    // ── セクション1: 画像データ ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>画像データ</strong>の形式と特徴を整理しましょう。試験で頻出のテーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'JPEGとかPNGとか色々ありますが、何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'まず画像には<strong>ラスタ形式</strong>と<strong>ベクタ形式</strong>の2種類がある。ラスタ形式は<strong>ピクセルの集合</strong>で画像を表現し、拡大すると粗くなる。ベクタ形式は<strong>数式で図形を記述</strong>するから、拡大しても画質が劣化しないんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'ラスタ形式の代表を覚えよう。<strong>BMP</strong>は無圧縮でサイズ大。<strong>JPEG</strong>は<strong>非可逆圧縮</strong>で写真向き。<strong>PNG</strong>は<strong>可逆圧縮</strong>で透過対応。<strong>GIF</strong>は256色でアニメーション対応だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '非可逆と可逆の違いが大事なんですね。JPEGは元に戻せない！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！ベクタ形式では<strong>SVG</strong>が代表的で、Webでよく使われるよ。<strong>解像度</strong>（dpi）は1インチあたりのドット数で、値が大きいほど高精細。<strong>色深度</strong>24ビットで約1677万色（フルカラー）を表現できるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">JPEG</span> = 非可逆・写真向き / <span class="keyword">PNG</span> = 可逆・透過OK / <span class="keyword">GIF</span> = 256色・アニメ / <span class="keyword">SVG</span> = ベクタ・拡大OK',
    },
    {
      type: 'quiz',
      question: '可逆圧縮で透過に対応した画像形式はどれか。',
      options: [
        { letter: 'A', text: 'JPEG', correct: false },
        { letter: 'B', text: 'BMP', correct: false },
        { letter: 'C', text: 'PNG', correct: true },
        { letter: 'D', text: 'GIF', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。PNGは可逆圧縮で透過（アルファチャンネル）に対応しています。JPEGは非可逆圧縮で透過非対応です。',
    },

    // ── セクション2: 音声データ ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>音声データ</strong>のデジタル化と圧縮技術を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '音をデジタル化するってどういう仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3つのステップがある。①<strong>標本化</strong>（サンプリング）：一定間隔でアナログ信号の値を取得。②<strong>量子化</strong>：取得した値を離散的な数値に変換。③<strong>符号化</strong>：数値をビット列に変換。この過程を<strong>PCM</strong>（パルス符号変調）というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'CDの音質はどうやって決まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'CDは<strong>サンプリング周波数44.1kHz</strong>（1秒間に44,100回サンプリング）、<strong>量子化ビット数16ビット</strong>、<strong>ステレオ2チャンネル</strong>だ。データ量の計算式は「サンプリング周波数 × 量子化ビット数 × チャンネル数」だよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '音声圧縮では<strong>MP3</strong>（非可逆圧縮、約1/10に圧縮）が有名だ。<strong>AAC</strong>はMP3の後継で同じビットレートで高音質。<strong>FLAC</strong>は可逆圧縮で原音を完全に復元できるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">PCM</span> = 標本化→量子化→符号化 / CD: 44.1kHz・16bit・2ch / <span class="keyword">MP3</span> = 非可逆 / <span class="keyword">FLAC</span> = 可逆',
    },
    {
      type: 'quiz',
      question: 'アナログの音声信号をデジタル化する際、一定間隔で信号の値を取得する工程を何というか。',
      options: [
        { letter: 'A', text: '量子化', correct: false },
        { letter: 'B', text: '標本化', correct: true },
        { letter: 'C', text: '符号化', correct: false },
        { letter: 'D', text: '復号化', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。標本化（サンプリング）は一定間隔でアナログ信号の値を取得する工程です。標本化定理により、元の信号の最大周波数の2倍以上の周波数でサンプリングすれば再現できます。',
    },

    // ── セクション3: 動画と圧縮技術 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>動画データ</strong>の仕組みと<strong>圧縮技術</strong>の基本を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '動画の圧縮ってどうやっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '動画は「連続した静止画＋音声」だよね。1秒あたりの画像枚数を<strong>フレームレート</strong>（fps）という。30fpsなら1秒間に30枚の画像を表示するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '動画圧縮では<strong>フレーム間圧縮</strong>が重要だ。連続する画像の<strong>変化した部分だけ</strong>を記録することでデータ量を大幅に削減する。代表的な規格が<strong>MPEG</strong>シリーズで、<strong>H.264</strong>（MPEG-4 AVC）はWeb動画で広く使われているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '変化していない背景は毎回送らなくていいから効率的なんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！<strong>コーデック</strong>はデータの符号化（圧縮）と復号（再生）を行うソフトウェアだ。動画の<strong>コンテナ形式</strong>（MP4、MKV等）はコーデックで圧縮された映像と音声をまとめる入れ物だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">フレームレート</span> = 1秒の画像枚数 / <span class="keyword">フレーム間圧縮</span> = 変化部分だけ記録 / <span class="keyword">H.264</span> = Web動画の標準コーデック',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>画像</strong>：ラスタ（JPEG・PNG・GIF）とベクタ（SVG）。可逆/非可逆の区別が重要',
        '<strong>音声</strong>：PCM（標本化→量子化→符号化）でデジタル化',
        '<strong>CD品質</strong>：44.1kHz × 16bit × 2ch',
        '<strong>動画</strong>：フレームレート（fps）で滑らかさが決まる',
        '<strong>動画圧縮</strong>：フレーム間圧縮で変化部分だけ記録（H.264が標準）',
        '<strong>コーデック</strong>：圧縮・再生ソフト / コンテナ（MP4等）は入れ物',
      ],
    },
  ],
};
