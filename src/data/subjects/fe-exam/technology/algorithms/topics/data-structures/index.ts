import type { Topic } from '../../../../../../types';

export const dataStructures: Topic = {
  id: 'fe-data-structures',
  eraId: 'fe-algorithms',
  name: 'データ構造',
  subtitle: '配列・リスト・スタック・キュー・木構造',
  icon: '📊',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '配列',
          content:
            '配列は、同じ型のデータを連続したメモリ領域に格納するデータ構造です。1次元配列は一列にデータを並べたもので、2次元配列は行と列の表形式でデータを管理します。各要素には添字（インデックス）を使って直接アクセスできるため、特定の位置の要素を高速（O(1)）に読み書きできます。ただし、途中への挿入や削除はデータの移動が必要なため効率が悪くなります。',
          keyPoints: [
            '1次元配列: データを一列に並べた構造',
            '2次元配列: 行と列の表形式でデータを管理',
            '添字（インデックス）で要素に直接アクセス（O(1)）',
          ],
        },
        {
          title: 'リスト',
          content:
            'リスト（連結リスト）は、各要素がデータと次の要素へのポインタ（参照）を持つデータ構造です。単方向リストは次の要素への参照のみ、双方向リストは前後の要素への参照を持ちます。環状リスト（循環リスト）は最後の要素が先頭を指す構造です。配列と異なり、途中への挿入・削除がポインタの付け替えだけで済むため効率的ですが、特定位置へのアクセスには先頭から順にたどる必要があります。',
          keyPoints: [
            '単方向リスト: 次の要素への参照のみ持つ',
            '双方向リスト: 前後両方の要素への参照を持つ',
            '環状リスト: 最後の要素が先頭を指す',
            'ポインタの付け替えで挿入・削除が効率的',
          ],
        },
        {
          title: 'スタック',
          content:
            'スタックは、LIFO（Last In First Out: 後入れ先出し）の原則でデータを管理するデータ構造です。データの追加（push）と取り出し（pop）は常にスタックの一番上（トップ）に対して行います。皿を積み重ねるイメージで、最後に載せた皿が最初に取り出されます。関数の呼び出し履歴管理や、括弧の対応チェック、逆ポーランド記法の計算などに使われます。',
          keyPoints: [
            'LIFO: 後入れ先出し（Last In First Out）',
            'push: データを積む / pop: データを取り出す',
            '関数呼び出しの管理や括弧の対応チェックに利用',
          ],
        },
        {
          title: 'キュー',
          content:
            'キュー（待ち行列）は、FIFO（First In First Out: 先入れ先出し）の原則でデータを管理するデータ構造です。データの追加（enqueue）は末尾に、取り出し（dequeue）は先頭から行います。レジの行列のイメージで、先に並んだ人が先にサービスを受けます。プリンタの印刷ジョブ管理やOSのタスクスケジューリングなどに使われます。',
          keyPoints: [
            'FIFO: 先入れ先出し（First In First Out）',
            'enqueue: 末尾にデータ追加 / dequeue: 先頭からデータ取り出し',
            '印刷ジョブ管理やタスクスケジューリングに利用',
          ],
        },
        {
          title: '木構造',
          content:
            '木構造（ツリー）は、階層的な親子関係でデータを管理する構造です。最上位のノードを根（ルート）、子を持たないノードを葉（リーフ）と呼びます。2分木は各ノードが最大2つの子を持つ木で、2分探索木は左の子＜親＜右の子の大小関係を維持します。ヒープは親が子より常に大きい（または小さい）という条件を満たす完全2分木です。木の走査には先行順（根→左→右）、中間順（左→根→右）、後行順（左→右→根）の3種類があります。',
          keyPoints: [
            '根（ルート）: 最上位ノード / 葉（リーフ）: 子なしノード',
            '2分探索木: 左の子 < 親 < 右の子',
            'ヒープ: 親が子より常に大きい（または小さい）完全2分木',
            '走査: 先行順・中間順・後行順',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-ds-fc1', front: 'LIFO（後入れ先出し）', back: 'スタックのデータ取り出し順序は？', explanation: 'スタックはLast In First Outで、最後に入れたデータを最初に取り出します。', difficulty: 'basic' },
      { id: 'fe-ds-fc2', front: 'FIFO（先入れ先出し）', back: 'キューのデータ取り出し順序は？', explanation: 'キューはFirst In First Outで、最初に入れたデータを最初に取り出します。', difficulty: 'basic' },
      { id: 'fe-ds-fc3', front: 'push / pop', back: 'スタックのデータ追加・取り出し操作の名称は？', explanation: 'pushでデータを積み、popでデータを取り出します。', difficulty: 'basic' },
      { id: 'fe-ds-fc4', front: 'enqueue / dequeue', back: 'キューのデータ追加・取り出し操作の名称は？', explanation: 'enqueueで末尾に追加、dequeueで先頭から取り出します。', difficulty: 'basic' },
      { id: 'fe-ds-fc5', front: 'ポインタ（参照）で次の要素を連結する', back: '連結リストの要素同士のつながり方は？', explanation: '各要素がデータと次の要素へのポインタを持ち、鎖のようにつながります。', difficulty: 'basic' },
      { id: 'fe-ds-fc6', front: '双方向リスト', back: '前後両方の要素への参照を持つリストは？', explanation: '双方向リストは前の要素と次の要素の両方へのポインタを持ちます。', difficulty: 'standard' },
      { id: 'fe-ds-fc7', front: '左の子 < 親 < 右の子', back: '2分探索木のノードの大小関係は？', explanation: '2分探索木はこの性質により、効率的な探索が可能です。', difficulty: 'standard' },
      { id: 'fe-ds-fc8', front: '根（ルート）', back: '木構造の最上位のノードを何と呼ぶ？', explanation: '木構造の頂点にあるノードが根（ルート）で、ここから枝分かれしていきます。', difficulty: 'basic' },
      { id: 'fe-ds-fc9', front: '先行順: 根→左→右 / 中間順: 左→根→右 / 後行順: 左→右→根', back: '2分木の3つの走査順序は？', explanation: '根をいつ訪れるかで分類されます。先行順は根が先、中間順は根が中間、後行順は根が最後です。', difficulty: 'advanced' },
      { id: 'fe-ds-fc10', front: 'ヒープ', back: '親が子より常に大きい（または小さい）条件を満たす完全2分木は？', explanation: 'ヒープは優先度付きキューの実装に利用され、最大値・最小値の取得が高速です。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-ds-q1',
          question: 'データを後入れ先出し（LIFO）で管理するデータ構造はどれか。',
          options: ['キュー', 'スタック', 'リスト', 'ヒープ'],
          correctIndex: 1,
          explanation: 'スタックはLIFO（Last In First Out）で、最後に追加したデータを最初に取り出します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ds-q2',
          question: 'キューにおいて、データを追加する操作を何と呼ぶか。',
          options: ['push', 'pop', 'enqueue', 'dequeue'],
          correctIndex: 2,
          explanation: 'キューではenqueueでデータを末尾に追加し、dequeueで先頭から取り出します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ds-q3',
          question: '配列の特徴として最も適切なものはどれか。',
          options: [
            '途中への挿入・削除が効率的である',
            '添字を使って任意の要素に直接アクセスできる',
            '要素数を動的に増減できる',
            '各要素がポインタで次の要素を指す',
          ],
          correctIndex: 1,
          explanation: '配列は添字（インデックス）で要素に直接アクセスでき、アクセス時間はO(1)です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ds-q4',
          question: '単方向リストの特徴として正しいものはどれか。',
          options: [
            '各要素は前後の要素へのポインタを持つ',
            '各要素は次の要素へのポインタのみを持つ',
            '添字でランダムアクセスできる',
            '最後の要素が先頭要素を指す',
          ],
          correctIndex: 1,
          explanation: '単方向リストは各要素が次の要素へのポインタだけを持ちます。前後への参照を持つのは双方向リストです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ds-q5',
          question: '2分探索木の性質として正しいものはどれか。',
          options: [
            '親ノードは必ず2つの子ノードを持つ',
            '左の子の値 < 親の値 < 右の子の値',
            '葉ノードは全て同じ深さにある',
            '親ノードの値は子ノードの値より常に大きい',
          ],
          correctIndex: 1,
          explanation: '2分探索木は左の子 < 親 < 右の子の大小関係を満たす2分木です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ds-q6',
          question: 'スタックに対してpush(A), push(B), push(C), pop, push(D), pop の操作を順に行ったとき、2回目のpopで取り出されるデータはどれか。',
          options: ['A', 'B', 'C', 'D'],
          correctIndex: 3,
          explanation: 'push(A),push(B),push(C)でスタック=[A,B,C]。popでC取出し=[A,B]。push(D)で[A,B,D]。popでDが取り出されます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ds-q7',
          question: '木構造において、子ノードを持たないノードを何と呼ぶか。',
          options: ['根（ルート）', '葉（リーフ）', '枝（ブランチ）', '節（ノード）'],
          correctIndex: 1,
          explanation: '子を持たない末端のノードを葉（リーフ）と呼びます。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ds-q8',
          question: 'ヒープの説明として正しいものはどれか。',
          options: [
            '先入れ先出しでデータを管理する構造',
            '左の子 < 親 < 右の子を満たす2分木',
            '親が子より常に大きい（または小さい）完全2分木',
            'ポインタで要素を連結するリスト構造',
          ],
          correctIndex: 2,
          explanation: 'ヒープは親子間の大小関係を維持する完全2分木で、優先度付きキューの実装に使われます。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
