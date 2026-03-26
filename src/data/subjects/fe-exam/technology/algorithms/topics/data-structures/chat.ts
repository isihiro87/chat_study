import type { HistoryChat } from '../../../../../../history-chat/types';

export const dataStructuresChat: HistoryChat = {
  id: 'fe-data-structures',
  icon: '📊',
  title: 'データ構造',
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
    // ── セクション1: 配列とリスト ──
    {
      type: 'date',
      text: 'セクション1: 配列とリスト',
    },
    {
      type: 'narrator',
      text: 'まずはデータ構造の基本、<strong>配列</strong>と<strong>連結リスト</strong>の違いから押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'データ構造っていろいろあるみたいですけど、まず何から覚えればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'まずは<strong>配列</strong>からだね。配列は同じ型のデータを<strong>連続したメモリ領域</strong>に格納する構造だよ。各要素には<strong>添字（インデックス）</strong>でアクセスできて、その計算量は<strong>O(1)</strong>と非常に高速なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ配列が一番便利ってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: 'そうとも限らないんだ。配列は途中への<strong>挿入・削除</strong>が苦手で、データの移動が必要になるから<strong>O(n)</strong>かかる。一方、<strong>連結リスト</strong>はポインタの付け替えだけで挿入・削除が<strong>O(1)</strong>でできるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど、得意なことが逆なんですね！リストにも種類があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問だね！<strong>単方向リスト</strong>は次の要素への参照だけ、<strong>双方向リスト</strong>は前後両方の参照を持つ。<strong>環状リスト</strong>は最後の要素が先頭を指すリング構造だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">配列</span>: アクセスO(1)・挿入削除O(n) / <span class="keyword">連結リスト</span>: アクセスO(n)・挿入削除O(1)',
    },
    {
      type: 'quiz',
      question: '連結リストの利点として最も適切なものはどれか。',
      options: [
        { letter: 'A', text: '添字で任意の要素にO(1)でアクセスできる', correct: false },
        { letter: 'B', text: '途中への挿入・削除がポインタの付け替えで効率的に行える', correct: true },
        { letter: 'C', text: 'メモリ使用量が配列より少ない', correct: false },
        { letter: 'D', text: 'データの検索がO(log n)で行える', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。連結リストはポインタの付け替えだけで挿入・削除ができるため、配列より効率的です。ただしランダムアクセスはO(n)になります。',
    },

    // ── セクション2: スタックとキュー ──
    {
      type: 'date',
      text: 'セクション2: スタックとキュー',
    },
    {
      type: 'narrator',
      text: '次はデータの出し入れの順序が特徴的な<strong>スタック</strong>と<strong>キュー</strong>です。試験頻出のテーマです！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>スタック</strong>は<strong>LIFO（Last In First Out: 後入れ先出し）</strong>のデータ構造だよ。皿を積み重ねるイメージで、最後に載せた皿を最初に取り出す。操作は<strong>push</strong>（追加）と<strong>pop</strong>（取り出し）だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'スタックって実際にどこで使われるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>関数の呼び出し履歴管理</strong>や<strong>括弧の対応チェック</strong>、<strong>逆ポーランド記法</strong>の計算に使われるよ。関数Aが関数Bを呼ぶとスタックに積まれ、Bが終わるとpopされてAに戻る仕組みだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあキューはスタックの逆ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'そう！<strong>キュー</strong>は<strong>FIFO（First In First Out: 先入れ先出し）</strong>だ。レジの行列のイメージで、先に並んだ人が先にサービスを受ける。操作は<strong>enqueue</strong>（追加）と<strong>dequeue</strong>（取り出し）だよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'キューは<strong>プリンタの印刷ジョブ管理</strong>や<strong>OSのタスクスケジューリング</strong>に使われるんだ。先に投入されたジョブが先に処理されるからFIFOが最適なんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">スタック</span>: LIFO / push・pop / 関数呼び出し管理 / <span class="keyword">キュー</span>: FIFO / enqueue・dequeue / ジョブ管理',
    },
    {
      type: 'quiz',
      question: 'スタックに対してpush(1), push(2), pop, push(3), popの操作を行ったとき、最後のpopで取り出される値はどれか。',
      options: [
        { letter: 'A', text: '1', correct: false },
        { letter: 'B', text: '2', correct: false },
        { letter: 'C', text: '3', correct: true },
        { letter: 'D', text: 'エラー', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。push(1),push(2)で[1,2]。popで2を取出し[1]。push(3)で[1,3]。popで3が取り出されます。',
    },

    // ── セクション3: 木構造とハッシュ ──
    {
      type: 'date',
      text: 'セクション3: 木構造とハッシュ',
    },
    {
      type: 'narrator',
      text: '最後に<strong>木構造</strong>と<strong>ハッシュテーブル</strong>を学びましょう。どちらも試験で頻出です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>木構造</strong>は階層的な親子関係でデータを管理する構造だよ。最上位のノードを<strong>根（ルート）</strong>、子を持たないノードを<strong>葉（リーフ）</strong>と呼ぶんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '2分探索木とヒープの違いがよくわからないんですが...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'いいポイントだね！<strong>2分探索木</strong>は「左の子 < 親 < 右の子」という大小関係を維持するからデータの<strong>探索が高速</strong>。<strong>ヒープ</strong>は「親 >= 子」（最大ヒープ）という条件で、<strong>最大値・最小値の取得が高速</strong>なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ハッシュテーブルはどういう仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ハッシュテーブル</strong>は<strong>ハッシュ関数</strong>で格納位置を計算して、<strong>O(1)</strong>でデータにアクセスできる構造だよ。ただし異なるキーが同じ位置になる<strong>衝突（コリジョン）</strong>が起きることがある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '衝突が起きたらどうするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '解決法は2つあるよ。<strong>チェイン法</strong>は同じ位置のデータをリストで連結する方法。<strong>オープンアドレス法</strong>は別の空き位置を探して格納する方法だ。どちらも試験でよく出るから覚えておこう！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">2分探索木</span>: 左<親<右で探索向き / <span class="keyword">ヒープ</span>: 親>=子で最大値取得向き / <span class="keyword">ハッシュ</span>: O(1)アクセス、衝突対策が必要',
    },
    {
      type: 'quiz',
      question: 'ハッシュテーブルで異なるキーから同じハッシュ値が生成される現象を何と呼ぶか。',
      options: [
        { letter: 'A', text: 'オーバーフロー', correct: false },
        { letter: 'B', text: '衝突（コリジョン）', correct: true },
        { letter: 'C', text: 'デッドロック', correct: false },
        { letter: 'D', text: 'フラグメンテーション', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。異なるキーが同じハッシュ値になる現象を衝突（コリジョン）と呼びます。チェイン法やオープンアドレス法で解決します。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>配列</strong>: 添字アクセスO(1)、挿入削除O(n)',
        '<strong>連結リスト</strong>: ポインタで連結、挿入削除O(1)、アクセスO(n)',
        '<strong>スタック</strong>: LIFO（後入れ先出し）、push/pop',
        '<strong>キュー</strong>: FIFO（先入れ先出し）、enqueue/dequeue',
        '<strong>木構造</strong>: 2分探索木（探索向き）、ヒープ（最大値取得向き）',
        '<strong>ハッシュテーブル</strong>: O(1)アクセス、衝突はチェイン法・オープンアドレス法で解決',
      ],
    },
  ],
};
