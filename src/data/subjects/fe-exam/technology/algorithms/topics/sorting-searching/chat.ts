import type { HistoryChat } from '../../../../../../history-chat/types';

export const sortingSearchingChat: HistoryChat = {
  id: 'fe-sorting-searching',
  icon: '🔍',
  title: '整列と探索',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        thinking: '🤔',
        excited: '🤩',
      },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵',
      },
    },
  ],
  content: [
    // ── セクション1: 探索アルゴリズム ──
    {
      type: 'date',
      text: 'セクション1: 探索アルゴリズム',
    },
    {
      type: 'narrator',
      text: 'まずは<strong>探索アルゴリズム</strong>から。データの中から目的の値を見つけ出す方法を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '探索って、データから目的のものを探す方法ですよね？どんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '基本は<strong>線形探索</strong>と<strong>二分探索</strong>の2つだよ。線形探索は先頭から順番に比較していく方法で、計算量は<strong>O(n)</strong>。データが未整列でも使えるのが利点だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '二分探索はもっと速いんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'ずっと速い！<strong>二分探索</strong>は中央の値と比較して、探索範囲を<strong>毎回半分に絞る</strong>から計算量は<strong>O(log n)</strong>。1000件のデータでも最大約10回の比較で見つかるんだ。ただし<strong>ソート済みデータが前提</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '1000件で10回！線形探索だと最大1000回なのに、すごい差ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'ちなみに線形探索には<strong>番兵法</strong>というテクニックがあるよ。配列の末尾に探索値を置いておくことで、ループの境界チェックを省略して効率化するんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">線形探索</span>: O(n)・未整列OK・番兵法で効率化 / <span class="keyword">二分探索</span>: O(log n)・ソート済み必須',
    },
    {
      type: 'quiz',
      question: '1000個のソート済みデータに対して二分探索を行う場合、最大何回の比較で結果が得られるか。',
      options: [
        { letter: 'A', text: '5回', correct: false },
        { letter: 'B', text: '10回', correct: true },
        { letter: 'C', text: '100回', correct: false },
        { letter: 'D', text: '500回', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。二分探索は毎回探索範囲を半分にするため、log2(1000)で約10回の比較で見つかります。',
    },

    // ── セクション2: 基本的なソート ──
    {
      type: 'date',
      text: 'セクション2: 基本的なソート',
    },
    {
      type: 'narrator',
      text: '次は<strong>O(n2)の基本ソート</strong>です。バブル・選択・挿入の3つを比較しながら学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'まず<strong>バブルソート</strong>。隣接する2つの要素を比較して、順序が逆なら交換する操作を繰り返すよ。小さい値が泡のように浮かんでくるイメージだね。計算量は<strong>O(n2)</strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '選択ソートと挿入ソートはどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>選択ソート</strong>は未整列部分から最小値を「選んで」先頭に配置する方式。<strong>挿入ソート</strong>は要素を整列済み部分の適切な位置に「挿入」していく方式だよ。トランプの手札を整理するイメージが挿入ソートだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '全部O(n2)なら、どれを使っても同じですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '実は違いがあるんだ。挿入ソートはほぼ整列済みのデータなら<strong>O(n)に近い</strong>性能が出る。バブルソートと挿入ソートは<strong>安定ソート</strong>（同じ値の順序を保持）だけど、選択ソートは<strong>不安定</strong>なんだよ',
    },
    {
      type: 'summary-point',
      text: 'O(n2)ソート: <span class="keyword">バブル</span>（安定）/ <span class="keyword">選択</span>（不安定・交換少）/ <span class="keyword">挿入</span>（安定・ほぼ整列済みに強い）',
    },

    // ── セクション3: 高速なソート ──
    {
      type: 'date',
      text: 'セクション3: 高速なソート',
    },
    {
      type: 'narrator',
      text: '大量データには<strong>O(n log n)</strong>の高速ソートが不可欠です。クイックソートとマージソートを見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>クイックソート</strong>は<strong>ピボット（基準値）</strong>を選んで、それより小さい要素と大きい要素に分割し、再帰的に繰り返すアルゴリズムだ。平均計算量は<strong>O(n log n)</strong>で、実用上最も速いソートの一つだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'クイックソートに弱点はないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'あるよ！すでに整列済みのデータでピボットが偏ると、最悪<strong>O(n2)</strong>になることがある。それと<strong>不安定ソート</strong>だね。一方、<strong>マージソート</strong>は常に<strong>O(n log n)</strong>が保証されて<strong>安定ソート</strong>だけど、<strong>追加メモリO(n)</strong>が必要なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、どちらも分割統治法を使うけど、特徴が異なるんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">クイックソート</span>: 平均O(n log n)・最悪O(n2)・不安定 / <span class="keyword">マージソート</span>: 常にO(n log n)・安定・追加メモリ必要',
    },
    {
      type: 'quiz',
      question: '安定ソートであるアルゴリズムの組合せとして正しいものはどれか。',
      options: [
        { letter: 'A', text: 'クイックソートと選択ソート', correct: false },
        { letter: 'B', text: 'バブルソートとマージソート', correct: true },
        { letter: 'C', text: 'ヒープソートとクイックソート', correct: false },
        { letter: 'D', text: '選択ソートとヒープソート', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。安定ソートはバブルソート、挿入ソート、マージソートです。クイック・選択・ヒープは不安定ソートです。',
    },
    {
      type: 'quiz',
      question: 'クイックソートの最悪計算量はどれか。',
      options: [
        { letter: 'A', text: 'O(log n)', correct: false },
        { letter: 'B', text: 'O(n)', correct: false },
        { letter: 'C', text: 'O(n log n)', correct: false },
        { letter: 'D', text: 'O(n2)', correct: true },
      ],
      explanation: '<strong>正解はD</strong>です。クイックソートはピボットの選び方が偏ると最悪O(n2)になります。平均はO(n log n)です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>線形探索</strong>: O(n)、未整列OK、番兵法で効率化',
        '<strong>二分探索</strong>: O(log n)、ソート済みが前提',
        '<strong>バブル・選択・挿入ソート</strong>: O(n2)の基本ソート',
        '<strong>クイックソート</strong>: 平均O(n log n)、最悪O(n2)、不安定',
        '<strong>マージソート</strong>: 常にO(n log n)、安定、追加メモリ必要',
        '<strong>安定ソート</strong>: 同じ値の順序を保持（バブル・挿入・マージ）',
      ],
    },
  ],
};
