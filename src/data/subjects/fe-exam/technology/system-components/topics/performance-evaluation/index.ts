import type { Topic } from '../../../../../../types';

export const performanceEvaluation: Topic = {
  id: 'fe-performance-evaluation',
  eraId: 'fe-system-components',
  name: 'システムの性能評価',
  subtitle: 'スループット・MIPS・稼働率・MTBF/MTTR',
  icon: '📈',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'システムの性能指標',
          content:
            'システムの性能を評価する代表的な指標には、スループット、ターンアラウンドタイム、レスポンスタイムがあります。スループットは単位時間あたりに処理できるジョブの量を表します。ターンアラウンドタイムは利用者がジョブを依頼してから全ての結果の出力が完了するまでの時間で、バッチ処理の評価に適しています。レスポンスタイム（応答時間）は利用者が処理を依頼してから最初の結果が返り始めるまでの時間で、リアルタイム処理やオンライン処理の評価に用いられます。',
          keyPoints: [
            'スループット: 単位時間あたりの処理量（仕事量）',
            'ターンアラウンドタイム: 依頼→出力完了までの時間（バッチ処理向け）',
            'レスポンスタイム: 依頼→結果が返り始めるまでの時間（リアルタイム処理向け）',
          ],
        },
        {
          title: 'ベンチマークテスト',
          content:
            'ベンチマークテストとは、標準的なプログラム（ベンチマークプログラム）を実行して、コンピュータの処理性能を相対的に評価する方法です。代表的なベンチマークとして、SPECint（整数演算性能の評価）、SPECfp（浮動小数点演算性能の評価）、TPCベンチマーク（トランザクション処理性能の評価）があります。ベンチマークテストは異なるシステム間の性能比較に有効ですが、実際の業務処理の性能とは異なる場合がある点に注意が必要です。',
          keyPoints: [
            'SPECint: 整数演算の性能を評価するベンチマーク',
            'SPECfp: 浮動小数点演算の性能を評価するベンチマーク',
            'TPCベンチマーク: トランザクション処理の性能を評価するベンチマーク',
          ],
        },
        {
          title: 'MIPS',
          content:
            'MIPS（Million Instructions Per Second）は、1秒間に実行できる命令数を百万単位で表した性能指標です。例えば、1命令の実行に平均0.5マイクロ秒かかるプロセッサは、1秒間に200万命令を実行できるので2MIPSとなります。実際のプログラムでは加算・乗算・分岐など様々な命令が混在するため、命令ミックス（各命令種別の実行速度と出現頻度の加重平均）を用いてMIPS値を算出します。MIPS値 = 1 ÷（平均命令実行時間（秒）） ÷ 10^6 で求められます。',
          keyPoints: [
            'MIPS = 1秒間に実行できる命令数（百万単位）',
            '命令ミックス: 命令種別ごとの実行速度と出現頻度の加重平均',
            'MIPS = 1 ÷ 平均命令実行時間（秒） ÷ 10^6',
          ],
        },
        {
          title: '稼働率',
          content:
            'システムの稼働率は、MTBF（Mean Time Between Failures：平均故障間隔）とMTTR（Mean Time To Repair：平均修復時間）を用いて計算します。稼働率 = MTBF ÷（MTBF + MTTR）です。複数の装置を組み合わせた場合、直列接続では各装置の稼働率の積が全体の稼働率になります。並列接続（冗長構成）では、全体の稼働率 = 1 −（1 − 各装置の稼働率）^n で計算します（n は並列台数）。並列接続にすると個々の装置より全体の稼働率が高くなり、信頼性が向上します。',
          keyPoints: [
            '稼働率 = MTBF ÷（MTBF + MTTR）',
            '直列接続の稼働率 = 各装置の稼働率の積',
            '並列接続の稼働率 = 1 −（1 − 稼働率）^n',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fe-pe-fc1',
        front: '単位時間あたりに処理できるジョブの量',
        back: 'スループットとは？',
        explanation: 'スループットはシステムが単位時間あたりに処理できる仕事量を表す性能指標です。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc2',
        front: 'ジョブの依頼から全結果の出力完了までの時間',
        back: 'ターンアラウンドタイムとは？',
        explanation: 'バッチ処理システムの性能評価に用いられる指標で、処理の開始待ちや出力時間も含みます。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc3',
        front: '処理依頼から最初の応答が返り始めるまでの時間',
        back: 'レスポンスタイム（応答時間）とは？',
        explanation: 'オンライン処理やリアルタイム処理の性能評価に適した指標です。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc4',
        front: '標準的なプログラムを実行して処理性能を相対的に評価する方法',
        back: 'ベンチマークテストとは？',
        explanation: '異なるシステム間の性能比較に有効な手法で、SPECやTPCなどが代表的です。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc5',
        front: 'SPECint',
        back: '整数演算の性能を評価するベンチマークは？',
        explanation: 'SPEC（Standard Performance Evaluation Corporation）が策定した整数演算ベンチマークです。',
        difficulty: 'standard',
      },
      {
        id: 'fe-pe-fc6',
        front: 'Million Instructions Per Second',
        back: 'MIPSの正式名称は？',
        explanation: '1秒間に実行できる命令数を百万単位で表したプロセッサの性能指標です。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc7',
        front: '命令種別ごとの実行速度と出現頻度の加重平均',
        back: '命令ミックスとは？',
        explanation: '実際のプログラムでは様々な命令が混在するため、加重平均でMIPS値を算出します。',
        difficulty: 'standard',
      },
      {
        id: 'fe-pe-fc8',
        front: 'MTBF（Mean Time Between Failures）',
        back: '平均故障間隔を表す略称は？',
        explanation: 'システムが故障してから次に故障するまでの平均稼働時間のことです。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc9',
        front: 'MTTR（Mean Time To Repair）',
        back: '平均修復時間を表す略称は？',
        explanation: '故障が発生してから修理が完了するまでの平均時間のことです。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc10',
        front: '稼働率 = MTBF ÷（MTBF + MTTR）',
        back: 'MTBFとMTTRから稼働率を求める式は？',
        explanation: '全運用時間のうち、システムが正常に稼働している時間の割合を表します。',
        difficulty: 'basic',
      },
      {
        id: 'fe-pe-fc11',
        front: '各装置の稼働率の積',
        back: '直列接続システムの全体の稼働率の求め方は？',
        explanation: '直列接続では1つでも故障するとシステム全体が停止するため、稼働率は個々より低くなります。',
        difficulty: 'standard',
      },
      {
        id: 'fe-pe-fc12',
        front: '1 −（1 − 稼働率）^n',
        back: '並列接続（n台）の全体の稼働率の求め方は？',
        explanation: '並列接続では全台が同時に故障しない限り動作するため、稼働率は個々より高くなります。',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-pe-q1',
          question: 'バッチ処理システムの性能評価に最も適した指標はどれか。',
          options: [
            'レスポンスタイム',
            'ターンアラウンドタイム',
            'スループット',
            'MIPS',
          ],
          correctIndex: 1,
          explanation:
            'ターンアラウンドタイムはジョブの依頼から全結果の出力完了までの時間で、バッチ処理の評価に適しています。レスポンスタイムはオンライン処理向けの指標です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pe-q2',
          question: '標準的なプログラムを実行してコンピュータの処理性能を相対的に評価する手法はどれか。',
          options: [
            'シミュレーションテスト',
            'ベンチマークテスト',
            'ストレステスト',
            'モニタリング',
          ],
          correctIndex: 1,
          explanation:
            'ベンチマークテストは、標準的なベンチマークプログラムを実行して処理性能を測定・比較する手法です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pe-q3',
          question: 'トランザクション処理の性能を評価するベンチマークはどれか。',
          options: [
            'SPECint',
            'SPECfp',
            'TPC',
            'LINPACK',
          ],
          correctIndex: 2,
          explanation:
            'TPCベンチマークはトランザクション処理の性能評価に特化したベンチマークです。SPECintは整数演算、SPECfpは浮動小数点演算の評価に使われます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pe-q4',
          question: '1命令の実行に平均0.2マイクロ秒かかるプロセッサのMIPS値はどれか。',
          options: [
            '2 MIPS',
            '5 MIPS',
            '20 MIPS',
            '50 MIPS',
          ],
          correctIndex: 1,
          explanation:
            '0.2マイクロ秒 = 0.2×10^-6秒。MIPS = 1 ÷ (0.2×10^-6) ÷ 10^6 = 5。よって5MIPSです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pe-q5',
          question: 'あるプロセッサの命令ミックスが次のとおりのとき、MIPS値はどれか。\n命令A: 実行時間100ナノ秒、出現頻度60%\n命令B: 実行時間200ナノ秒、出現頻度30%\n命令C: 実行時間400ナノ秒、出現頻度10%',
          options: [
            '5 MIPS',
            '6.25 MIPS',
            '8 MIPS',
            '10 MIPS',
          ],
          correctIndex: 1,
          explanation:
            '平均実行時間 = 100×0.6 + 200×0.3 + 400×0.1 = 60+60+40 = 160ナノ秒 = 160×10^-9秒。MIPS = 1 ÷ (160×10^-9) ÷ 10^6 = 6.25。',
          difficulty: 'advanced',
        },
        {
          id: 'fe-pe-q6',
          question: 'MTBFが900時間、MTTRが100時間のシステムの稼働率はどれか。',
          options: [
            '0.80',
            '0.85',
            '0.90',
            '0.95',
          ],
          correctIndex: 2,
          explanation:
            '稼働率 = MTBF ÷ (MTBF + MTTR) = 900 ÷ (900 + 100) = 900 ÷ 1000 = 0.90',
          difficulty: 'basic',
        },
        {
          id: 'fe-pe-q7',
          question: '稼働率0.9の装置2台を直列に接続したシステム全体の稼働率はどれか。',
          options: [
            '0.81',
            '0.90',
            '0.95',
            '0.99',
          ],
          correctIndex: 0,
          explanation:
            '直列接続の稼働率 = 各装置の稼働率の積 = 0.9 × 0.9 = 0.81',
          difficulty: 'standard',
        },
        {
          id: 'fe-pe-q8',
          question: '稼働率0.8の装置2台を並列に接続したシステム全体の稼働率はどれか。',
          options: [
            '0.64',
            '0.80',
            '0.90',
            '0.96',
          ],
          correctIndex: 3,
          explanation:
            '並列接続の稼働率 = 1 - (1 - 0.8)^2 = 1 - 0.2^2 = 1 - 0.04 = 0.96',
          difficulty: 'standard',
        },
        {
          id: 'fe-pe-q9',
          question: '稼働率0.9の装置Aと稼働率0.8の装置Bが直列に接続され、その全体と稼働率0.9の装置Cが並列に接続されているシステムの稼働率はどれか。',
          options: [
            '0.72',
            '0.828',
            '0.928',
            '0.972',
          ],
          correctIndex: 3,
          explanation:
            '直列部分（A×B）: 0.9 × 0.8 = 0.72。これと装置C（0.9）の並列接続: 1 - (1-0.72)×(1-0.9) = 1 - 0.28×0.1 = 1 - 0.028 = 0.972',
          difficulty: 'advanced',
        },
        {
          id: 'fe-pe-q10',
          question: 'レスポンスタイムの説明として適切なものはどれか。',
          options: [
            'ジョブの依頼から全ての結果の出力が完了するまでの時間',
            '処理を依頼してから最初の応答が返り始めるまでの時間',
            '単位時間あたりに処理できるジョブの件数',
            'システムが連続して稼働できる平均時間',
          ],
          correctIndex: 1,
          explanation:
            'レスポンスタイム（応答時間）は処理を依頼してから最初の応答が返り始めるまでの時間です。選択肢アはターンアラウンドタイム、ウはスループット、エはMTBFの説明です。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
