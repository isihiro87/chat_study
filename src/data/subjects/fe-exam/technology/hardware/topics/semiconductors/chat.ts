import type { HistoryChat } from '../../../../../../history-chat/types';

export const semiconductorsChat: HistoryChat = {
  id: 'fe-semiconductors',
  icon: '⚡',
  title: '半導体と電子回路',
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
    // ── セクション1: 半導体素子 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'コンピュータの心臓部を支える<strong>半導体素子</strong>の基本を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '半導体ってニュースでよく聞きますが、何がすごいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '半導体は<strong>導体（電気を通す）と絶縁体（通さない）の中間</strong>の性質を持つ物質だよ。代表的なのが<strong>シリコン</strong>（Si）だ。電気の流れをコントロールできるから、スイッチの役割を果たすんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '半導体で作られる基本素子が<strong>トランジスタ</strong>。微小なスイッチとして0と1を表現する。CPUの中には<strong>数十億個</strong>のトランジスタが集積されているよ。この集積回路を<strong>IC</strong>（Integrated Circuit）というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '数十億個のスイッチ！それで複雑な計算ができるんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'ICの集積度でSSI（小規模）→MSI（中規模）→LSI（大規模）→VLSI（超大規模）→ULSI（極超大規模）と分類されるよ。CPUやメモリはVLSI以上の集積度だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">半導体</span> = 導体と絶縁体の中間 / <span class="keyword">トランジスタ</span> = 微小なスイッチ / <span class="keyword">IC</span> = 集積回路（SSI→MSI→LSI→VLSI→ULSI）',
    },
    {
      type: 'quiz',
      question: 'ICの集積度を小さい順に並べた正しいものはどれか。',
      options: [
        { letter: 'A', text: 'LSI → MSI → SSI → VLSI', correct: false },
        { letter: 'B', text: 'SSI → MSI → LSI → VLSI', correct: true },
        { letter: 'C', text: 'MSI → SSI → VLSI → LSI', correct: false },
        { letter: 'D', text: 'VLSI → LSI → MSI → SSI', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。SSI（小規模）→MSI（中規模）→LSI（大規模）→VLSI（超大規模）の順に集積度が上がります。',
    },

    // ── セクション2: センサとA/D変換 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '現実世界のデータをコンピュータに取り込む<strong>センサ</strong>と<strong>A/D変換</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'コンピュータはどうやって温度や光を測っているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>センサ</strong>で物理量を電気信号に変換するんだ。温度センサ、光センサ（フォトダイオード）、加速度センサ、ジャイロセンサなどがある。これらのセンサが出力するのは<strong>アナログ信号</strong>（連続的な値）だよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'コンピュータはデジタル（離散的な値）しか扱えないから、アナログ信号を<strong>A/D変換器</strong>（ADコンバータ）でデジタルに変換する。逆に、デジタルからアナログに戻すのが<strong>D/A変換器</strong>（DAコンバータ）で、スピーカーの音声出力に使われるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'A/D変換の精度はどうやって決まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>分解能</strong>（ビット数）で決まるよ。例えば8ビットのA/D変換器なら2の8乗=256段階で表現できる。ビット数が多いほど精度が高いんだ。<strong>サンプリング周波数</strong>（1秒あたりの変換回数）も重要で、CDは44.1kHzだね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">センサ</span> = 物理量→電気信号 / <span class="keyword">A/D変換</span> = アナログ→デジタル / <span class="keyword">D/A変換</span> = デジタル→アナログ / 精度は<span class="keyword">分解能</span>（ビット数）で決定',
    },
    {
      type: 'quiz',
      question: 'アナログ信号をデジタル信号に変換する装置はどれか。',
      options: [
        { letter: 'A', text: 'D/A変換器', correct: false },
        { letter: 'B', text: 'A/D変換器', correct: true },
        { letter: 'C', text: 'エンコーダ', correct: false },
        { letter: 'D', text: 'デコーダ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。A/D変換器（ADコンバータ）はアナログ信号をデジタル信号に変換します。D/A変換器は逆にデジタルからアナログへ変換します。',
    },

    // ── セクション3: LED・ディスプレイ技術 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '半導体を使った<strong>表示装置</strong>の技術を確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'LEDも半導体なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そう！<strong>LED</strong>（発光ダイオード）は電流を流すと光を発する半導体素子だよ。省電力で長寿命なため、照明やディスプレイのバックライトに広く使われている',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'ディスプレイ技術では<strong>液晶</strong>（LCD）と<strong>有機EL</strong>（OLED）を覚えておこう。液晶はバックライトが必要で薄型化に限界がある。有機ELは<strong>自発光</strong>でバックライト不要、薄型で黒が鮮やかだけどコストが高いんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'スマホの画面が有機ELだと色がきれいなのは自発光だからなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！試験では各デバイスの特徴を<strong>比較して選ぶ問題</strong>が多いから、それぞれの長所・短所をセットで覚えておくといいよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">LED</span> = 省電力・長寿命の発光素子 / <span class="keyword">液晶</span> = バックライト必要 / <span class="keyword">有機EL</span> = 自発光・薄型・黒鮮明',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>半導体</strong>：導体と絶縁体の中間。シリコンが代表的材料',
        '<strong>トランジスタ</strong>：微小なスイッチ。CPUには数十億個が集積',
        '<strong>IC集積度</strong>：SSI→MSI→LSI→VLSI→ULSI',
        '<strong>A/D変換</strong>：アナログ→デジタル。分解能（ビット数）で精度が決まる',
        '<strong>D/A変換</strong>：デジタル→アナログ。スピーカー出力等に使用',
        '<strong>有機EL</strong>：自発光でバックライト不要。液晶より薄型・高コントラスト',
      ],
    },
  ],
};
