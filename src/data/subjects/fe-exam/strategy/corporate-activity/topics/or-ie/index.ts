import type { Topic } from '../../../../../../types';

export const orIe: Topic = {
  id: 'fe-or-ie',
  eraId: 'fe-corporate-activity',
  name: 'OR・IE',
  subtitle: '線形計画法・在庫管理・品質管理・QC7つ道具',
  icon: '📈',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'OR（オペレーションズリサーチ）',
          content:
            'OR（Operations Research）は、数学的・統計的手法を用いて経営上の意思決定を支援する技法です。線形計画法は、制約条件のもとで目的関数（利益最大化・コスト最小化など）の最適解を求める手法です。在庫管理では、経済的発注量（EOQ）を求めて在庫コストと発注コストのバランスを最適化します。待ち行列理論は、窓口の待ち時間やサービス効率を数学的に分析します。',
          keyPoints: [
            '線形計画法: 制約条件下で最適解を求める',
            '在庫管理: EOQ（経済的発注量）でコスト最適化',
            '待ち行列理論: 待ち時間やサービス効率を分析',
          ],
        },
        {
          title: 'その他のOR手法',
          content:
            'シミュレーションは、モンテカルロ法などを用いて実際の事象を模擬的に再現し分析する手法です。ゲーム理論は、複数の意思決定者（プレイヤー）がいる状況で最適な戦略を分析します。PERT（Program Evaluation and Review Technique）は、プロジェクトの作業をネットワーク図で表し、クリティカルパス（最長経路）を求めてスケジュールを管理します。',
          keyPoints: [
            'シミュレーション: モンテカルロ法で事象を模擬再現',
            'ゲーム理論: 複数プレイヤーの最適戦略を分析',
            'PERT: ネットワーク図でクリティカルパスを求める',
          ],
        },
        {
          title: 'IE（インダストリアルエンジニアリング）',
          content:
            'IE（Industrial Engineering）は、作業を科学的に分析し、効率化・最適化を図る手法です。作業分析では、作業を要素に分解して時間測定し、ムダを発見します。ワークサンプリングは、作業者の状態をランダムに観測し、作業の割合を統計的に推定する手法です。動作研究はサーブリッグ分析などで作業動作の効率化を図ります。',
          keyPoints: [
            'IE: 作業を科学的に分析し効率化',
            'ワークサンプリング: ランダム観測で作業割合を推定',
            '動作研究: 作業動作の効率化を図る',
          ],
        },
        {
          title: 'QC7つ道具',
          content:
            'QC（Quality Control：品質管理）7つ道具は、品質管理で用いる基本的な統計手法です。パレート図は項目を出現頻度順に並べた棒グラフと累積曲線で、重要な少数の原因を特定します。特性要因図（フィッシュボーン図）は原因と結果の関係を魚の骨の形で整理します。ヒストグラムはデータの分布を柱状図で表示。散布図は2つの変数の相関関係を可視化。管理図は工程の異常を検出。チェックシートはデータ収集用の表。層別はデータをグループ分けする手法です。',
          keyPoints: [
            'パレート図: 重要な少数の原因を特定',
            '特性要因図: 原因と結果の関係を魚の骨で整理',
            'ヒストグラム: データの分布を表示',
            '散布図: 2変数の相関関係を可視化',
            '管理図: 工程の異常検出',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-or-ie-fc1', front: '制約条件のもとで目的関数の最適解を求める数学的手法', back: '線形計画法とは？', explanation: '利益最大化やコスト最小化の問題を解くOR手法の一つです。', difficulty: 'basic' },
      { id: 'fe-or-ie-fc2', front: '在庫コストと発注コストのバランスが最適となる1回あたりの発注量', back: 'EOQ（経済的発注量）とは？', explanation: '発注回数を増やすと在庫コスト減・発注コスト増になるため、最適点を求めます。', difficulty: 'standard' },
      { id: 'fe-or-ie-fc3', front: '窓口の待ち時間やサービス効率を数学的に分析する理論', back: '待ち行列理論とは？', explanation: '銀行窓口やコールセンターの適正人員数の算出などに活用されます。', difficulty: 'standard' },
      { id: 'fe-or-ie-fc4', front: '項目を出現頻度順に並べた棒グラフと累積曲線で重要原因を特定する図', back: 'パレート図とは？', explanation: 'QC7つ道具の一つ。「重要な少数と些細な多数」の法則に基づきます。', difficulty: 'basic' },
      { id: 'fe-or-ie-fc5', front: '原因と結果の関係を魚の骨の形で整理する図', back: '特性要因図（フィッシュボーン図）とは？', explanation: 'QC7つ道具の一つ。問題の原因を体系的に整理できます。', difficulty: 'basic' },
      { id: 'fe-or-ie-fc6', front: '作業者の状態をランダムに観測し、作業割合を統計的に推定する手法', back: 'ワークサンプリングとは？', explanation: 'IE手法の一つで、全数観測が困難な場合に有効です。', difficulty: 'standard' },
      { id: 'fe-or-ie-fc7', front: '2つの変数の相関関係をドットで可視化する図', back: '散布図とは？', explanation: 'QC7つ道具の一つ。正の相関・負の相関・無相関を判断できます。', difficulty: 'standard' },
      { id: 'fe-or-ie-fc8', front: '工程が管理状態にあるかどうかを判断するための図', back: '管理図とは？', explanation: 'QC7つ道具の一つ。管理限界線を超えた点があれば異常と判断します。', difficulty: 'standard' },
      { id: 'fe-or-ie-fc9', front: 'データの分布状態を柱状グラフで表す図', back: 'ヒストグラムとは？', explanation: 'QC7つ道具の一つ。データのばらつきや中心値を視覚的に確認できます。', difficulty: 'basic' },
      { id: 'fe-or-ie-fc10', front: '複数プレイヤーがいる状況で最適な戦略を分析する理論', back: 'ゲーム理論とは？', explanation: '各プレイヤーの利得を考慮して最適な意思決定を分析します。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-or-ie-q1',
          question: '制約条件のもとで、利益の最大化やコストの最小化を求める数学的手法はどれか。',
          options: ['待ち行列理論', '線形計画法', 'ゲーム理論', 'シミュレーション'],
          correctIndex: 1,
          explanation: '線形計画法は、一次式の制約条件下で目的関数の最適解を求めるOR手法です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-or-ie-q2',
          question: 'QC7つ道具のうち、項目を出現頻度順に並べて重要な原因を特定する図はどれか。',
          options: ['散布図', '管理図', 'パレート図', 'ヒストグラム'],
          correctIndex: 2,
          explanation: 'パレート図は棒グラフと累積曲線で「重要な少数」の原因を特定します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-or-ie-q3',
          question: '原因と結果の関係を魚の骨の形で整理するQC7つ道具はどれか。',
          options: ['パレート図', '散布図', 'ヒストグラム', '特性要因図'],
          correctIndex: 3,
          explanation: '特性要因図（フィッシュボーン図）は原因と結果の関係を体系的に整理します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-or-ie-q4',
          question: '作業者の状態をランダムに観測し、作業の割合を統計的に推定するIE手法はどれか。',
          options: ['動作研究', 'ワークサンプリング', '標準時間設定', '連続稼働分析'],
          correctIndex: 1,
          explanation: 'ワークサンプリングはランダムな瞬間観測で作業割合を推定します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-or-ie-q5',
          question: '2つの変数の相関関係を可視化するQC7つ道具はどれか。',
          options: ['管理図', '散布図', 'パレート図', 'チェックシート'],
          correctIndex: 1,
          explanation: '散布図は2変数の関係をドットで表し、正の相関・負の相関・無相関を判断します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-or-ie-q6',
          question: '待ち行列理論を適用する場面として最も適切なものはどれか。',
          options: [
            '製品の不良原因を分析する',
            '最適な生産計画を立案する',
            '窓口の適正人員数を算出する',
            'プロジェクトのスケジュールを管理する',
          ],
          correctIndex: 2,
          explanation: '待ち行列理論は窓口やサーバーの待ち時間・稼働率を分析し、適正なリソース配分を求めます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-or-ie-q7',
          question: '工程が管理状態にあるかどうかを判断し、異常を検出するための図はどれか。',
          options: ['ヒストグラム', 'パレート図', '管理図', '散布図'],
          correctIndex: 2,
          explanation: '管理図は管理限界線を設定し、データがその範囲内にあるかで異常を検出します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-or-ie-q8',
          question: 'EOQ（経済的発注量）を求める目的として最も適切なものはどれか。',
          options: [
            '在庫切れを完全に防ぐため',
            '在庫コストと発注コストの合計を最小化するため',
            '発注回数を最大化するため',
            '在庫量を常に一定に保つため',
          ],
          correctIndex: 1,
          explanation: 'EOQは在庫コスト（保管費用）と発注コスト（発注費用）の合計が最小になる発注量です。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
