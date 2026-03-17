import type { Topic } from '../../../../../../../../data/types';

export const linearFuncApplications: Topic = {
  id: 'math-g2-linear-func-apps',
  eraId: 'math-g2-linear-func',
  name: '一次関数の利用',
  subtitle: 'グラフを読み解く力',
  icon: '🚶',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '距離・時間・速さのグラフ',
          content:
            '横軸に時間、縦軸に距離をとったグラフから、移動のようすを読み取ることができるよ。グラフの傾きが速さ、水平な部分は「止まっている」ことを表すんだ。',
          keyPoints: [
            'グラフの傾き＝速さ（傾きが大きいほど速い）',
            'グラフが水平（横に一直線）→ 止まっている',
            '右下がりのグラフ → 引き返している（出発地に戻る方向）',
            '傾きが途中で変わる → 速さが変わった',
          ],
        },
        {
          title: '2人のグラフの読みとり',
          content:
            '2人の移動のようすを同じグラフに表すと、グラフの交点が「出会う時刻と場所」を表すよ。交点の x 座標が出会う時刻、y 座標が出会う場所だ。',
          keyPoints: [
            '2つのグラフの交点 ＝ 2人が出会う（同じ時刻に同じ場所）',
            '交点の x 座標 → 出会う時刻',
            '交点の y 座標 → 出会う場所（出発地からの距離）',
            '2つの式を連立方程式として解けば交点が求まる',
          ],
        },
        {
          title: '水量と一次関数',
          content:
            '水そうに水を入れたり抜いたりする問題も一次関数で表せるよ。毎分一定量ずつ変化するとき、時間と水量の関係は一次関数になるんだ。',
          keyPoints: [
            '水を入れる → 傾きが正（毎分の増加量が傾き）',
            '水を抜く → 傾きが負（毎分の減少量の絶対値が傾き）',
            '最初の水量が切片 b になる',
            'y = 0 になるとき → 水そうが空になる時刻',
          ],
        },
        {
          title: '動く点と面積の変化',
          content:
            '長方形の辺上を動く点があるとき、三角形の面積は点の位置によって変わるよ。点がどの辺の上にあるかで式が変わるので、変域ごとに場合分けして考えよう。',
          keyPoints: [
            '点がどの辺にいるかで変域を分ける',
            '各変域で底辺と高さを x の式で表す',
            '面積 = 1/2 × 底辺 × 高さ で y を求める',
            'グラフは折れ線になる（変域ごとに傾きが違う）',
          ],
        },
        {
          title: 'グラフから式を立てるコツ',
          content:
            '実際の問題では、グラフの特徴的な2点（始点と終点など）を読み取って式を立てるのがコツだよ。傾きと1点がわかれば式が求まるね。',
          keyPoints: [
            'グラフの2点を読み取る → 傾きを計算',
            '傾きと通る1点から y = ax + b を求める',
            '変域の境目で値がつながるか確認する',
            '交点は連立方程式を解いて求める',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-lfapps-fc1',
        front: '速さを表す。傾き＝距離の変化÷時間の変化＝速さ', back: '距離と時間のグラフで、傾きは何を表す？',
      },
      {
        id: 'math-g2-lfapps-fc2',
        front: '止まっている（移動していない）ことを意味する', back: '距離と時間のグラフで、水平な部分は何を意味する？',
      },
      {
        id: 'math-g2-lfapps-fc3',
        front: '引き返している（出発地に向かって戻っている）', back: '距離と時間のグラフで、右下がりの部分は？',
      },
      {
        id: 'math-g2-lfapps-fc4',
        front: '2人が出会う時刻と場所を表す', back: '2人の移動グラフで、交点は何を表す？',
      },
      {
        id: 'math-g2-lfapps-fc5',
        front: '出会う時刻（出発してからの時間）', back: '2人のグラフの交点の x 座標は？',
      },
      {
        id: 'math-g2-lfapps-fc6',
        front: '出会う場所（出発地からの距離）', back: '2人のグラフの交点の y 座標は？',
      },
      {
        id: 'math-g2-lfapps-fc7',
        front: '2人の間の距離 ÷（2人の速さの和）', back: '向かい合って進む2人が出会うまでの時間は？',
      },
      {
        id: 'math-g2-lfapps-fc8',
        front: '2人の間の距離 ÷（速い人の速さ − 遅い人の速さ）', back: '追いかける問題で追いつくまでの時間は？',
      },
      {
        id: 'math-g2-lfapps-fc9',
        front: 'a（正の値）。水を入れるので右上がりのグラフ', back: '水そうに毎分 a L ずつ水を入れるとき、傾きは？',
      },
      {
        id: 'math-g2-lfapps-fc10',
        front: '−b（負の値）。水を抜くので右下がりのグラフ', back: '水そうから毎分 b L ずつ水を抜くとき、傾きは？',
      },
      {
        id: 'math-g2-lfapps-fc11',
        front: 'y = 3x + 20', back: '初期水量 20L、毎分 3L 入れるとき、x 分後の水量 y は？',
      },
      {
        id: 'math-g2-lfapps-fc12',
        front: '点がどの辺の上にあるかで変域を分ける（場合分け）', back: '動く点の問題で、まず何を考える？',
      },
      {
        id: 'math-g2-lfapps-fc13',
        front: '変域ごとに異なる一次関数になるため、傾きが変わる', back: '動く点の問題で、グラフが折れ線になる理由は？',
      },
      {
        id: 'math-g2-lfapps-fc14',
        front: '面積 = 1/2 × 底辺 × 高さ', back: '三角形の面積の公式は？',
      },
      {
        id: 'math-g2-lfapps-fc15',
        front: '傾き a を計算し、1点を代入して切片 b を求める', back: 'グラフから式を立てるとき、2点を読み取ったら次は？',
      },
      {
        id: 'math-g2-lfapps-fc16',
        front: '2つの式を連立方程式として解く', back: '2つの一次関数のグラフの交点を求める方法は？',
      },
      {
        id: 'math-g2-lfapps-fc17',
        front: '80 × 15 = 1200m', back: '分速 80m で 15 分歩いたときの距離は？',
      },
      {
        id: 'math-g2-lfapps-fc18',
        front: '面積は一定（変化しない）。底辺も高さも変わらないから', back: '点 P が底辺に平行な辺の上を動くとき、三角形の面積はどうなる？',
      },
      { id: 'math-g2-lfapps-fc19', front: '2つの一次関数の式を連立方程式として解く', back: '2つのグラフの交点をどうやって求める？' },
      { id: 'math-g2-lfapps-fc20', front: '速さが変わったことを表す（傾きが変わる）', back: '距離と時間のグラフで折れ線になる部分は？' },
      { id: 'math-g2-lfapps-fc21', front: '出発地点の距離が切片、速さが傾き', back: '移動のグラフの式を立てるには？' },
      { id: 'math-g2-lfapps-fc22', front: '$\dfrac{距離}{時間}$ で求める。グラフの傾きと同じ。', back: 'グラフから速さを求めるには？' },
      { id: 'math-g2-lfapps-fc23', front: '向かい合い→速さの和、追いかけ→速さの差', back: '出会う問題と追いかける問題の違いは？' },
      { id: 'math-g2-lfapps-fc24', front: '$y = 0$ になる $x$ の値', back: '水そうが空になる時刻は？' },
      { id: 'math-g2-lfapps-fc25', front: '点が辺を曲がるところで傾きが変わる', back: '動く点の問題でグラフが折れ線になる理由は？' },
      { id: 'math-g2-lfapps-fc26', front: '底辺に平行な辺の上を動くとき面積は一定', back: '動く点の問題で面積が変化しない区間は？' },
      { id: 'math-g2-lfapps-fc27', front: 'グラフの2点を読み取り、傾きと切片から式を求める', back: '実際のグラフから式を立てる手順は？' },
      { id: 'math-g2-lfapps-fc28', front: '各変域の境目で $y$ の値がつながるか確認する', back: '場合分けの式で確認すべきことは？' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-lfapps-q1',
          question:
            '距離と時間のグラフで、グラフが水平になっている部分は何を意味する？',
          options: [
            '止まっている（移動していない）',
            '速さが最大になっている',
            '一定の速さで進んでいる',
            '引き返している',
          ],
          correctIndex: 0,
          explanation:
            'グラフが水平＝時間が経過しても距離が変わらない＝止まっているということだよ。',
        },
        {
          id: 'math-g2-lfapps-q2',
          question:
            '分速 $60$ m で歩く人が家から $300$ m の地点を出発した。$x$ 分後の家からの距離 $y$ m は？',
          options: [
            '$y = 60x$',
            '$y = 60x - 300$',
            '$y = 60x + 300$',
            '$y = 300x + 60$',
          ],
          correctIndex: 2,
          explanation:
            '初期位置 $300$ m が切片、分速 $60$ m が傾きなので $y = 60x + 300$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q3',
          question:
            'Aさんは $y = 80x$、Bさんは $y = -60x + 2100$ で表される移動をしている。2人が出会う時刻は出発から何分後？',
          options: [
            '$10$ 分後',
            '$15$ 分後',
            '$12$ 分後',
            '$20$ 分後',
          ],
          correctIndex: 1,
          explanation:
            '$80x = -60x + 2100 \\rightarrow 140x = 2100 \\rightarrow x = 15$。$15$ 分後に出会うよ。',
        },
        {
          id: 'math-g2-lfapps-q4',
          question:
            '空の水そうに毎分 $5$ L ずつ水を入れる。$8$ 分後の水量は何 L？',
          options: ['$35$ L', '$50$ L', '$45$ L', '$40$ L'],
          correctIndex: 3,
          explanation: '$y = 5 \\times 8 = 40$。$40$ L だよ。',
        },
        {
          id: 'math-g2-lfapps-q5',
          question:
            '$50$ L の水が入った水そうから毎分 $2$ L ずつ水を抜く。水そうが空になるのは何分後？',
          options: [
            '$20$ 分後',
            '$50$ 分後',
            '$30$ 分後',
            '$25$ 分後',
          ],
          correctIndex: 3,
          explanation:
            '$-2x + 50 = 0 \\rightarrow 2x = 50 \\rightarrow x = 25$。$25$ 分後に空になるよ。',
        },
        {
          id: 'math-g2-lfapps-q6',
          question:
            '長方形 ABCD で AB $= 6$, AD $= 4$ のとき、点 P が A から B に向かって動く。AP $= x$ のとき、$\\triangle APD$ の面積 $y$ は？',
          options: [
            '$y = 4x$',
            '$y = 3x$',
            '$y = 2x$',
            '$y = 6x$',
          ],
          correctIndex: 2,
          explanation:
            '底辺 AP $= x$、高さ AD $= 4$ なので $y = \\dfrac{1}{2} \\times x \\times 4 = 2x$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q7',
          question:
            '動く点の問題で、グラフが折れ線になる理由は？',
          options: [
            '点の速さが変わるから',
            '変域ごとに式が変わるから',
            '三角形の形が変わらないから',
            'グラフが曲線になるから',
          ],
          correctIndex: 1,
          explanation:
            '点がどの辺の上にあるかで式が変わるため、変域の境目でグラフの傾きが変わり折れ線になるよ。',
        },
        {
          id: 'math-g2-lfapps-q8',
          question:
            'グラフが $(0, 10)$ と $(5, 40)$ を通る。このグラフの傾きは？',
          options: ['$6$', '$5$', '$4$', '$8$'],
          correctIndex: 0,
          explanation:
            '傾き $= \\dfrac{40 - 10}{5 - 0} = \\dfrac{30}{5} = 6$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q9',
          question:
            '2人が $3000$ m 離れた地点から向かい合って歩く。Aは分速 $80$ m、Bは分速 $70$ m。出会うまで何分？',
          options: [
            '$15$ 分',
            '$30$ 分',
            '$25$ 分',
            '$20$ 分',
          ],
          correctIndex: 3,
          explanation:
            '$3000 \\div (80 + 70) = 3000 \\div 150 = 20$。$20$ 分後に出会うよ。',
        },
        {
          id: 'math-g2-lfapps-q10',
          question:
            '水そうに $20$ L の水がある。毎分 $4$ L ずつ入れて、水量が $52$ L になるのは何分後？',
          options: [
            '$6$ 分後',
            '$8$ 分後',
            '$7$ 分後',
            '$13$ 分後',
          ],
          correctIndex: 1,
          explanation:
            '$4x + 20 = 52 \\rightarrow 4x = 32 \\rightarrow x = 8$。$8$ 分後だよ。',
        },
        {
          id: 'math-g2-lfapps-q11',
          question: '距離と時間のグラフで傾きが大きいほどどうなる？',
          options: ['速さが遅い', '速さが速い', '距離が短い', '時間が長い'],
          correctIndex: 1,
          explanation: '傾き $=$ 速さ。傾きが大きいほど速いよ。',
        },
        {
          id: 'math-g2-lfapps-q12',
          question: '初期水量 $30$ L、毎分 $2$ L 入れる。$x$ 分後の水量 $y$ は？',
          options: ['$y = 30x + 2$', '$y = 2x + 30$', '$y = 32x$', '$y = 2x - 30$'],
          correctIndex: 1,
          explanation: '毎分 $2$ L が傾き、$30$ L が切片。$y = 2x + 30$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q13',
          question: '$60$ L の水を毎分 $3$ L 抜く。空になるのは何分後？',
          options: ['$15$ 分', '$20$ 分', '$30$ 分', '$18$ 分'],
          correctIndex: 1,
          explanation: '$-3x + 60 = 0$ → $x = 20$ 分後だよ。',
        },
        {
          id: 'math-g2-lfapps-q14',
          question: 'グラフの右下がり部分は？（距離と時間）',
          options: ['速さが上がった', '引き返している', '止まっている', '速さが一定'],
          correctIndex: 1,
          explanation: '距離が減る $=$ 出発地に向かっているよ。',
        },
        {
          id: 'math-g2-lfapps-q15',
          question: 'A: $y = 100x$、B: $y = -80x + 3600$。出会う時刻は？',
          options: ['$10$ 分後', '$20$ 分後', '$15$ 分後', '$25$ 分後'],
          correctIndex: 1,
          explanation: '$100x = -80x + 3600$ → $180x = 3600$ → $x = 20$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q16',
          question: 'AB $= 10$、AD $= 6$。P が A→B を毎秒 $2$ cm。$\triangle APD$ の面積は？',
          options: ['$y = 6x$', '$y = 12x$', '$y = 3x$', '$y = 10x$'],
          correctIndex: 0,
          explanation: '$y = \dfrac{1}{2} \times 2x \times 6 = 6x$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q17',
          question: 'グラフが $(0, 20)$ と $(10, 50)$ を通る。$x = 15$ のとき $y$ は？',
          options: ['$55$', '$60$', '$65$', '$70$'],
          correctIndex: 2,
          explanation: '傾き $3$。$y = 3(15) + 20 = 65$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q18',
          question: '同じ地点から同方向に分速 $60$ m と $80$ m。$10$ 分後の距離差は？',
          options: ['$100$ m', '$200$ m', '$300$ m', '$400$ m'],
          correctIndex: 1,
          explanation: '$(80-60) \times 10 = 200$ m だよ。',
        },
        {
          id: 'math-g2-lfapps-q19',
          question: '水そう $10$ L、毎分 $5$ L 入れる。$60$ L で満水は何分後？',
          options: ['$8$ 分', '$10$ 分', '$12$ 分', '$6$ 分'],
          correctIndex: 1,
          explanation: '$5x + 10 = 60$ → $x = 10$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q20',
          question: '傾き $0$ の区間の意味は？（距離と時間のグラフ）',
          options: ['最高速度', '止まっている', '一定速度', '加速中'],
          correctIndex: 1,
          explanation: '距離が変わらない $=$ 止まっているよ。',
        },
        {
          id: 'math-g2-lfapps-q21',
          question: '分速 $80$ m で $x$ 分、分速 $120$ m で $y$ 分。合計 $1600$ m の式は？',
          options: ['$80x + 120y = 1600$', '$200xy = 1600$', '$\dfrac{x}{80} + \dfrac{y}{120} = 1600$', '$80 + 120 = 1600$'],
          correctIndex: 0,
          explanation: '$80x + 120y = 1600$ だよ。',
        },
        {
          id: 'math-g2-lfapps-q22',
          question: '分速 $150$ m で $8$ 分後に兄が分速 $250$ m で追う。追いつくまで何分？',
          options: ['$10$ 分', '$12$ 分', '$8$ 分', '$15$ 分'],
          correctIndex: 1,
          explanation: '先行: $1200$ m。差: $100$ m/分。$12$ 分後だよ。',
        },
        {
          id: 'math-g2-lfapps-q23',
          question: '動く点が底辺に平行な辺を動くとき面積は？',
          options: ['増加する', '減少する', '変化しない', '$0$ になる'],
          correctIndex: 2,
          explanation: '底辺も高さも変わらないので面積は一定だよ。',
        },
        {
          id: 'math-g2-lfapps-q24',
          question: '$4000$ m 離れて向かい合い、分速 $120$ m と $80$ m。出会うのは？',
          options: ['$15$ 分', '$20$ 分', '$25$ 分', '$30$ 分'],
          correctIndex: 1,
          explanation: '$4000 \div 200 = 20$ 分だよ。',
        },
        {
          id: 'math-g2-lfapps-q25',
          question: '水量 $0$ L、毎分 $4$ L。$15$ 分後は？',
          options: ['$40$ L', '$50$ L', '$60$ L', '$45$ L'],
          correctIndex: 2,
          explanation: '$4 \times 15 = 60$ L だよ。',
        },
        {
          id: 'math-g2-lfapps-q26',
          question: 'グラフの折れ目は何を表す？',
          options: ['計算ミス', '速さや条件の変化', 'グラフの終わり', '原点'],
          correctIndex: 1,
          explanation: '傾きが変わった地点だよ。',
        },
        {
          id: 'math-g2-lfapps-q27',
          question: 'Aが分速 $60$ m で出発。$5$ 分後にBが分速 $100$ m で追う。追いつくのは？',
          options: ['$7.5$ 分後', '$5$ 分後', '$10$ 分後', '$3$ 分後'],
          correctIndex: 0,
          explanation: '先行: $300$ m。差: $40$ m/分。$7.5$ 分後だよ。',
        },
        {
          id: 'math-g2-lfapps-q28',
          question: '変域の境目で両方の式に $x$ を代入すると $y$ はどうなるべき？',
          options: ['異なる値', '同じ値（つながる）', '$0$', '計算不能'],
          correctIndex: 1,
          explanation: '変域の境目で $y$ の値がつながる（連続する）はずだよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-lfapps-ex1',
          question:
            'みきさんは家を出て分速 60m で図書館に向かった。途中で 5 分間休憩し、その後分速 80m で歩いた。出発してから 10 分後に休憩を始め、25 分後に図書館に着いた。家から図書館までの距離を求めよう。',
          steps: [
            {
              title: 'Step 1: 休憩前の距離を求める',
              content:
                '分速 60m で 10 分歩いたので、$60 \\times 10 = 600$ m 進んだよ。',
              highlight: '休憩前: $600$ m',
            },
            {
              title: 'Step 2: 休憩後の時間を求める',
              content:
                '10 分歩いて 5 分休憩したので、再出発は 15 分後。図書館到着が 25 分後だから、休憩後に歩いた時間は $25 - 15 = 10$ 分。',
              highlight: '休憩後の歩行時間: $10$ 分',
            },
            {
              title: 'Step 3: 休憩後の距離を求める',
              content:
                '分速 80m で 10 分歩いたので、$80 \\times 10 = 800$ m 進んだよ。',
              highlight: '休憩後: $800$ m',
            },
            {
              title: 'Step 4: 合計を求める',
              content:
                '$600 + 800 = 1400$ m。家から図書館までは 1400m だ！',
              highlight: '家から図書館まで $1400$ m',
            },
          ],
          answer: '家から図書館までの距離は $1400$ m',
        },
        {
          id: 'math-g2-lfapps-ex2',
          question:
            'さおりさんは A 地点から B 地点に向かって分速 70m で歩き、ゆかりさんは同時に B 地点から A 地点に向かって分速 80m で歩いた。AB 間の距離が 2250m のとき、2 人が出会うのは出発から何分後か。',
          steps: [
            {
              title: 'Step 1: それぞれの式を立てる',
              content:
                'さおり: $y = 70x$、ゆかり: $y = -80x + 2250$（B から A に向かうので傾きは負）',
              highlight: '$y = 70x$、$y = -80x + 2250$',
            },
            {
              title: 'Step 2: 交点を求める（連立方程式）',
              content:
                '$70x = -80x + 2250 \\rightarrow 150x = 2250 \\rightarrow x = 15$',
              highlight: '$x = 15$',
            },
            {
              title: 'Step 3: 出会う場所も確認',
              content:
                '$y = 70 \\times 15 = 1050$。A 地点から 1050m の場所で出会うよ！',
              highlight: '15 分後、A から $1050$ m の地点',
            },
          ],
          answer:
            '出発から $15$ 分後に、A 地点から $1050$ m の地点で出会う',
        },
        {
          id: 'math-g2-lfapps-ex3',
          question:
            '容量 60L の水そうに 15L の水が入っている。毎分 3L ずつ水を入れるとき、満水になるのは何分後か。また、x 分後の水量 y L の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を立てる',
              content:
                '初期水量 15L、毎分 3L 増えるので $y = 3x + 15$',
              highlight: '$y = 3x + 15$',
            },
            {
              title: 'Step 2: 満水の条件を設定',
              content:
                '容量 60L で満水になるので $y = 60$ とおく。$3x + 15 = 60$',
              highlight: '$3x + 15 = 60$',
            },
            {
              title: 'Step 3: x を求める',
              content:
                '$3x = 45 \\rightarrow x = 15$。15 分後に満水になるよ！',
              highlight: '$x = 15$（15 分後）',
            },
          ],
          answer: '$y = 3x + 15$、$15$ 分後に満水になる',
        },
        {
          id: 'math-g2-lfapps-ex4',
          question:
            '長方形 ABCD で AB = 8cm、AD = 5cm。点 P が A を出発して辺 AB 上を B まで毎秒 2cm で動く。x 秒後の △APD の面積 y cm² を x の式で表そう。',
          steps: [
            {
              title: 'Step 1: 変域を確認する',
              content:
                'AB = 8cm、毎秒 2cm なので P が B に達するまで $8 \\div 2 = 4$ 秒。変域は $0 \\leqq x \\leqq 4$。',
              highlight: '$0 \\leqq x \\leqq 4$',
            },
            {
              title: 'Step 2: 底辺と高さを x で表す',
              content:
                '底辺 AP $= 2x$ cm、高さ AD $= 5$ cm（一定）',
              highlight: '底辺 $= 2x$、高さ $= 5$',
            },
            {
              title: 'Step 3: 面積を計算する',
              content:
                '$y = \\dfrac{1}{2} \\times 2x \\times 5 = 5x$',
              highlight: '$y = 5x$',
            },
            {
              title: 'Step 4: 確認する',
              content:
                '$x = 4$ のとき $y = 20$。底辺 $8$ cm、高さ $5$ cm の三角形の面積 $= \\dfrac{1}{2} \\times 8 \\times 5 = 20$。合ってるね！',
              highlight: '$x = 4$ で $y = 20$ ✓',
            },
          ],
          answer:
            '$y = 5x$（$0 \\leqq x \\leqq 4$）',
        },
        {
          id: 'math-g2-lfapps-ex5',
          question:
            'けんじさんは家を出て分速 200m で自転車を走らせた。10 分後にお兄さんが家を出て分速 300m で追いかけた。お兄さんがけんじさんに追いつくのはお兄さんが出発してから何分後か。',
          steps: [
            {
              title: 'Step 1: けんじさんの先行距離を求める',
              content:
                'けんじさんは 10 分先に出発。$200 \\times 10 = 2000$ m 先にいる。',
              highlight: '先行距離: $2000$ m',
            },
            {
              title: 'Step 2: 差が縮まる速さを求める',
              content:
                'お兄さんの速さ − けんじさんの速さ $= 300 - 200 = 100$ m/分ずつ差が縮まる。',
              highlight: '差の縮まり: 毎分 $100$ m',
            },
            {
              title: 'Step 3: 追いつく時間を求める',
              content:
                '$2000 \\div 100 = 20$。お兄さんが出発してから 20 分後に追いつくよ！',
              highlight: '$20$ 分後',
            },
          ],
          answer: 'お兄さんが出発してから $20$ 分後に追いつく',
        },
      ],
    },
    chatId: 'math-g2-linear-func-apps',
  },
};
