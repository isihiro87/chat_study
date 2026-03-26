import type { Topic } from '../../../../../../types';

export const busIo: Topic = {
  id: 'fe-bus-io',
  eraId: 'fe-computer-architecture',
  name: 'バスと入出力',
  subtitle: '内部バス・入出力インタフェース・USB',
  icon: '🔌',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'バス',
          content:
            'バスとは、コンピュータ内部でデータをやり取りするための共通の伝送路です。バスには3種類あり、データの送受信を行う「データバス」、メモリやI/Oのアドレスを指定する「アドレスバス」、読み書きの制御信号を送る「制御バス」があります。また、CPU内部の信号伝送を行う「内部バス」と、CPUと周辺機器を接続する「外部バス（拡張バス）」に分けられます。バスの幅（ビット数）が大きいほど一度に多くのデータを転送でき、バスクロック周波数が高いほど転送速度が上がります。',
          keyPoints: [
            'データバス: データの送受信',
            'アドレスバス: メモリやI/Oのアドレス指定',
            '制御バス: 読み書きなどの制御信号',
            '内部バス（CPU内）と外部バス（CPU-周辺機器間）',
          ],
        },
        {
          title: '入出力インタフェース',
          content:
            '入出力インタフェースは、コンピュータと周辺機器を接続するための規格です。USB（Universal Serial Bus）は最も普及しているシリアルインタフェースで、ホットプラグ（電源を入れたまま接続・取外し）に対応しています。USB 2.0は最大480Mbps、USB 3.0は最大5Gbpsの転送速度です。HDMI（High-Definition Multimedia Interface）は映像と音声をデジタルで伝送します。Bluetoothは近距離無線通信規格で、キーボードやイヤホンなどの接続に使われます。',
          keyPoints: [
            'USB: シリアル接続、ホットプラグ対応、給電可能',
            'HDMI: 映像・音声をデジタルで伝送',
            'Bluetooth: 近距離無線通信（数m〜数十m）',
            'USB 2.0=480Mbps、USB 3.0=5Gbps',
          ],
        },
        {
          title: '入出力制御',
          content:
            'CPUが周辺機器との入出力を制御する方式には主に3つあります。「プログラム制御方式」はCPUが直接入出力装置の状態を確認しながらデータ転送を行う方式で、CPU負荷が高くなります。「割込み制御方式」は入出力装置の処理完了時に割込みで通知する方式で、CPUは待ち時間を他の処理に使えます。「DMA（Direct Memory Access）制御方式」はCPUを介さず、DMAコントローラが直接主記憶と入出力装置間でデータ転送を行う方式で、大量データの転送に適しています。',
          keyPoints: [
            'プログラム制御: CPUが直接制御（CPU負荷が高い）',
            '割込み制御: 完了時に割込みで通知（CPUは他の処理可能）',
            'DMA: CPUを介さず直接データ転送（大量データ向き）',
            'DMAコントローラがメモリと入出力装置間を制御',
          ],
        },
        {
          title: '補助記憶装置',
          content:
            '補助記憶装置は、主記憶よりも大容量でデータを永続的に保存する装置です。HDD（ハードディスクドライブ）は磁気ディスクにデータを記録し、アクセス時間は「シーク時間（ヘッド移動）＋回転待ち時間＋データ転送時間」で計算します。平均回転待ち時間はディスクが1回転する時間の半分です。SSD（Solid State Drive）はフラッシュメモリを使用し、機械的な駆動部がないためHDDより高速で衝撃に強いです。光ディスク（CD/DVD/Blu-ray）はレーザー光でデータを読み書きします。',
          keyPoints: [
            'HDD: 磁気記録、大容量だが低速',
            'SSD: フラッシュメモリ使用、高速で衝撃に強い',
            'HDDのアクセス時間 = シーク時間 + 回転待ち時間 + データ転送時間',
            '平均回転待ち時間 = 1回転の時間 ÷ 2',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-bio-fc1', front: 'データバス・アドレスバス・制御バス', back: 'コンピュータのバスの3種類は？', explanation: 'データの送受信、アドレスの指定、制御信号の伝送をそれぞれ担当します。', difficulty: 'basic' },
      { id: 'fe-bio-fc2', front: 'USB', back: 'ホットプラグ対応で最も普及しているシリアルインタフェースは？', explanation: 'Universal Serial Busの略で、電源供給も可能な万能インタフェースです。', difficulty: 'basic' },
      { id: 'fe-bio-fc3', front: 'DMA（Direct Memory Access）', back: 'CPUを介さずに主記憶と入出力装置間でデータを直接転送する方式は？', explanation: 'DMAコントローラが転送を制御するため、CPUは他の処理を行えます。', difficulty: 'standard' },
      { id: 'fe-bio-fc4', front: 'シーク時間 + 回転待ち時間 + データ転送時間', back: 'HDDのアクセス時間の計算式は？', explanation: 'ヘッドの移動、ディスクの回転待ち、データ読出しにそれぞれ時間がかかります。', difficulty: 'standard' },
      { id: 'fe-bio-fc5', front: 'SSD', back: 'フラッシュメモリを使用し、HDDより高速で衝撃に強い補助記憶装置は？', explanation: '機械的な駆動部がないため、高速アクセス・低消費電力・耐衝撃性に優れます。', difficulty: 'basic' },
      { id: 'fe-bio-fc6', front: 'Bluetooth', back: 'キーボードやイヤホンなどの接続に使われる近距離無線通信規格は？', explanation: '数m〜数十mの範囲で低消費電力のワイヤレス通信を実現します。', difficulty: 'basic' },
      { id: 'fe-bio-fc7', front: 'HDMI', back: '映像と音声をデジタルで1本のケーブルで伝送するインタフェースは？', explanation: 'High-Definition Multimedia Interfaceの略で、テレビやモニタの接続に使われます。', difficulty: 'basic' },
      { id: 'fe-bio-fc8', front: '1回転の時間 ÷ 2', back: 'HDDの平均回転待ち時間の求め方は？', explanation: '目的のデータがディスク上のどこにあるかは均等に分布するため、平均すると半回転分の待ち時間になります。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-bio-q1',
          question: 'メモリのアドレスを指定するために使用されるバスはどれか。',
          options: ['データバス', 'アドレスバス', '制御バス', '拡張バス'],
          correctIndex: 1,
          explanation: 'アドレスバスはメモリやI/O装置のアドレスを指定するためのバスです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-bio-q2',
          question: 'USBの特徴として適切でないものはどれか。',
          options: [
            'ホットプラグに対応している',
            '周辺機器への電源供給が可能',
            'パラレル伝送方式である',
            '複数の機器を接続できる',
          ],
          correctIndex: 2,
          explanation: 'USBはシリアル（直列）伝送方式です。パラレル伝送ではありません。',
          difficulty: 'basic',
        },
        {
          id: 'fe-bio-q3',
          question: 'CPUを介さず、主記憶と入出力装置間で直接データ転送を行う方式はどれか。',
          options: ['プログラム制御', '割込み制御', 'DMA制御', 'チャネル制御'],
          correctIndex: 2,
          explanation: 'DMA（Direct Memory Access）制御はDMAコントローラが主記憶と入出力装置間を直接データ転送し、CPUの負荷を軽減します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-bio-q4',
          question: 'HDDの平均アクセス時間の計算で、平均回転待ち時間はどのように求めるか。',
          options: [
            'ディスク1回転の時間と同じ',
            'ディスク1回転の時間の半分',
            'ディスク1回転の時間の4分の1',
            'シーク時間と同じ',
          ],
          correctIndex: 1,
          explanation: '目的データの位置は平均的にディスク半周分の位置にあるため、平均回転待ち時間は1回転の時間の半分です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-bio-q5',
          question: 'SSDの特徴として適切でないものはどれか。',
          options: [
            'フラッシュメモリを使用している',
            '機械的な駆動部がない',
            'HDDより消費電力が大きい',
            '衝撃に強い',
          ],
          correctIndex: 2,
          explanation: 'SSDは機械的な駆動部がないため、HDDより消費電力が小さいのが特徴です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-bio-q6',
          question: 'ディスクの回転数が6,000回転/分のHDDにおいて、平均回転待ち時間は何ミリ秒か。',
          options: ['5', '10', '15', '20'],
          correctIndex: 0,
          explanation: '1回転 = 60秒 ÷ 6,000 = 0.01秒 = 10ミリ秒。平均回転待ち時間はその半分で5ミリ秒です。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
