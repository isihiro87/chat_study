import type { Topic } from '../../../../../../types';

export const networkBasics: Topic = {
  id: 'fe-network-basics',
  eraId: 'fe-network',
  name: 'ネットワーク方式',
  subtitle: 'LAN・WAN・無線LAN・VPN・5G',
  icon: '📡',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'LAN（Local Area Network）',
          content:
            'LANは、オフィスや家庭など限られた範囲内でコンピュータやプリンタなどを接続するネットワークです。有線LANの代表的な規格がイーサネット（IEEE 802.3）で、CSMA/CD（搬送波感知多重アクセス/衝突検出）方式でデータの衝突を制御します。CSMA/CDでは、各端末がケーブル上の信号を監視し、他の端末が通信していないことを確認してからデータを送信します。もし衝突が発生した場合は、ランダムな時間待ってから再送信します。現在では全二重通信対応のスイッチングハブが普及し、衝突が発生しない環境が一般的です。イーサネットの伝送速度は10Mbps（10BASE-T）から100Mbps（100BASE-TX）、1Gbps（1000BASE-T）、10Gbps（10GBASE-T）へと高速化が進んでいます。',
          keyPoints: [
            'LAN: 限られた範囲のネットワーク（オフィス・家庭など）',
            'イーサネット（IEEE 802.3）: 有線LANの標準規格',
            'CSMA/CD: 衝突検出方式（送信前に回線を監視、衝突時はランダム時間後に再送）',
            'スイッチングハブにより全二重通信が可能（衝突なし）',
          ],
        },
        {
          title: '無線LAN',
          content:
            '無線LANはIEEE 802.11シリーズで規格化されており、一般にWi-Fiと呼ばれます。接続形態にはインフラストラクチャモード（アクセスポイント経由）とアドホックモード（端末同士が直接通信）があります。ESSID（Extended Service Set Identifier）はアクセスポイントを識別するためのネットワーク名です。セキュリティ対策として、WPA2（AES暗号化）やWPA3（SAE認証で辞書攻撃に強い）による暗号化、MACアドレスフィルタリング（許可した端末のみ接続）、ESSIDのステルス機能（ネットワーク名を非公開）などがあります。主な規格として、IEEE 802.11n（Wi-Fi 4、最大600Mbps）、IEEE 802.11ac（Wi-Fi 5、最大6.9Gbps）、IEEE 802.11ax（Wi-Fi 6、最大9.6Gbps）があります。',
          keyPoints: [
            'IEEE 802.11シリーズ: 無線LANの国際規格（Wi-Fi）',
            'インフラストラクチャモード: アクセスポイント経由で通信',
            'アドホックモード: 端末同士が直接通信（AP不要）',
            'ESSID: アクセスポイントを識別するネットワーク名',
            'WPA2（AES）/ WPA3（SAE）: 無線LANの暗号化規格',
            'MACアドレスフィルタリング・ステルスESSID: 追加のセキュリティ対策',
          ],
        },
        {
          title: 'WAN（Wide Area Network）とVPN',
          content:
            'WANは、離れた拠点間を通信事業者の回線で接続する広域ネットワークです。接続方式には専用線（常時接続で安定、高コスト）、回線交換方式（通話のように通信ごとに回線を確保）、パケット交換方式（データをパケットに分割して効率的に転送）があります。VPN（Virtual Private Network）は、インターネットなどの公衆回線上に仮想的な専用線を構築する技術です。インターネットVPNはIPsecやSSL/TLSで暗号化してインターネット経由で安全に通信します。IP-VPNは通信事業者の閉域網（MPLS網）を利用するため、インターネットVPNより高い安全性と品質保証が得られます。',
          keyPoints: [
            'WAN: 離れた拠点を接続する広域ネットワーク',
            '専用線: 安定・高品質だが高コスト',
            'パケット交換: データを分割して効率的に転送（インターネットの基本方式）',
            'インターネットVPN: IPsec等で暗号化しインターネット経由で安全に通信',
            'IP-VPN: 通信事業者の閉域網（MPLS）を利用、高セキュリティ',
          ],
        },
        {
          title: 'モバイル通信とIoTネットワーク',
          content:
            'モバイル通信はLTE（4G、下り最大約1Gbps）から5G（下り最大約20Gbps）へと進化しています。5Gの特徴は高速大容量、超低遅延（1ms以下）、多数同時接続です。テザリングはスマートフォンをモバイルルータとして利用し、他の機器をインターネットに接続する機能です。MVNO（仮想移動体通信事業者）は大手キャリアの回線を借りて通信サービスを提供する事業者で、格安SIMなどが該当します。IoT向けにはLPWA（Low Power Wide Area）という低消費電力・広域通信技術があり、LoRaWANやSigfoxなどの規格があります。少量のデータを長距離伝送するセンサーネットワークなどに適しています。',
          keyPoints: [
            '5G: 高速大容量・超低遅延・多数同時接続',
            'テザリング: スマホをルータとして利用',
            'MVNO: 大手キャリアの回線を借りて提供する格安通信サービス',
            'LPWA: IoT向けの低消費電力・広域通信技術（LoRaWAN、Sigfox等）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-nb-fc1', front: 'CSMA/CD', back: 'イーサネットで使われるアクセス制御方式は？', explanation: 'Carrier Sense Multiple Access with Collision Detection。送信前に回線を監視し、衝突を検出したらランダム時間後に再送します。', difficulty: 'basic' },
      { id: 'fe-nb-fc2', front: 'IEEE 802.3', back: '有線LAN（イーサネット）の国際規格番号は？', explanation: 'イーサネットはIEEE 802.3で標準化されています。無線LANはIEEE 802.11です。', difficulty: 'basic' },
      { id: 'fe-nb-fc3', front: 'ESSID', back: '無線LANでアクセスポイントを識別するためのネットワーク名を何という？', explanation: 'Extended Service Set IDentifierの略。同一ESSIDのAPでローミングも可能です。', difficulty: 'basic' },
      { id: 'fe-nb-fc4', front: 'WPA3', back: 'WPA2の後継となる最新の無線LANセキュリティ規格は？', explanation: 'SAE（Simultaneous Authentication of Equals）認証を採用し、辞書攻撃への耐性が向上しています。', difficulty: 'standard' },
      { id: 'fe-nb-fc5', front: 'パケット交換方式', back: 'データを小さな単位に分割して効率的に伝送するWANの通信方式は？', explanation: 'データをパケットに分割し、複数の通信で回線を共有するため効率が良い方式です。インターネットの基本技術です。', difficulty: 'basic' },
      { id: 'fe-nb-fc6', front: 'IPsec', back: 'インターネットVPNで通信を暗号化するために主に使われるプロトコルは？', explanation: 'IP Security。ネットワーク層で暗号化・認証を行い、拠点間VPNに広く利用されます。', difficulty: 'standard' },
      { id: 'fe-nb-fc7', front: 'IP-VPN', back: '通信事業者の閉域網（MPLS網）を利用するVPNサービスを何という？', explanation: 'インターネットを経由しないため、インターネットVPNより高い安全性と通信品質が得られます。', difficulty: 'standard' },
      { id: 'fe-nb-fc8', front: '高速大容量・超低遅延・多数同時接続', back: '5Gの3つの特徴は？', explanation: '下り最大約20Gbps、遅延1ms以下、1km²あたり100万台の同時接続が可能です。', difficulty: 'basic' },
      { id: 'fe-nb-fc9', front: 'LPWA', back: 'IoT向けの低消費電力・広域通信技術の総称は？', explanation: 'Low Power Wide Areaの略。LoRaWAN、Sigfoxなどの規格があり、センサーネットワークに適しています。', difficulty: 'standard' },
      { id: 'fe-nb-fc10', front: 'MVNO', back: '大手キャリアの回線を借りて格安通信サービスを提供する事業者を何という？', explanation: 'Mobile Virtual Network Operatorの略。仮想移動体通信事業者とも呼ばれます。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-nb-q1',
          question: 'CSMA/CD方式に関する記述として、適切なものはどれか。',
          options: [
            '各端末に送信権を順番に与えるトークンパッシング方式である',
            '送信前に回線の使用状況を監視し、衝突を検出したらランダム時間後に再送する',
            '時分割で各端末に送信時間を割り当てる方式である',
            '無線LANで使用されるアクセス制御方式である',
          ],
          correctIndex: 1,
          explanation: 'CSMA/CDはCarrier Sense（搬送波感知）でケーブルの信号を監視し、空いていれば送信、衝突（Collision）を検出（Detection）したらランダム時間後に再送する方式です。有線LAN（イーサネット）で使われます。',
          difficulty: 'basic',
        },
        {
          id: 'fe-nb-q2',
          question: '無線LANのセキュリティ規格として最も新しいものはどれか。',
          options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
          correctIndex: 3,
          explanation: 'WEP→WPA→WPA2→WPA3の順に新しくなっています。WPA3はSAE認証を採用し、辞書攻撃に対する耐性が向上しています。WEPは脆弱性があり使用すべきではありません。',
          difficulty: 'basic',
        },
        {
          id: 'fe-nb-q3',
          question: '無線LANの接続形態のうち、アクセスポイントを介さずに端末同士が直接通信する方式はどれか。',
          options: ['インフラストラクチャモード', 'アドホックモード', 'ブリッジモード', 'リピータモード'],
          correctIndex: 1,
          explanation: 'アドホックモードはアクセスポイントを使用せず、端末同士が直接通信する方式です。インフラストラクチャモードはアクセスポイントを経由して通信します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-nb-q4',
          question: 'インターネットVPNとIP-VPNの違いに関する記述として、適切なものはどれか。',
          options: [
            'インターネットVPNは専用線を使用し、IP-VPNはインターネットを使用する',
            'IP-VPNは通信事業者の閉域網を利用するため、インターネットVPNより安全性が高い',
            'インターネットVPNはIP-VPNより通信品質が高い',
            'IP-VPNは暗号化が不要だが、インターネットVPNは暗号化が必須ではない',
          ],
          correctIndex: 1,
          explanation: 'IP-VPNは通信事業者のMPLS網（閉域網）を利用するため、インターネットを経由するインターネットVPNより高い安全性と品質保証（QoS）が得られます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-nb-q5',
          question: '5Gの特徴として、適切でないものはどれか。',
          options: [
            '下り最大約20Gbpsの高速大容量通信',
            '1ms以下の超低遅延',
            '1km²あたり100万台の多数同時接続',
            '通信距離が4Gより大幅に長い',
          ],
          correctIndex: 3,
          explanation: '5Gは高速大容量・超低遅延・多数同時接続が特徴です。高周波数帯を使用するため、4Gより通信距離はむしろ短くなる傾向があり、基地局を多く設置する必要があります。',
          difficulty: 'standard',
        },
        {
          id: 'fe-nb-q6',
          question: 'IoT機器向けの通信技術であるLPWAの特徴として、適切なものはどれか。',
          options: [
            '高速大容量の通信に適している',
            '低消費電力で広域通信が可能である',
            '動画配信に最適化されている',
            '近距離高速通信を得意としている',
          ],
          correctIndex: 1,
          explanation: 'LPWA（Low Power Wide Area）は低消費電力で広域をカバーする通信技術です。少量データの長距離伝送に適しており、IoTセンサーなどに使われます。LoRaWANやSigfoxが代表例です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-nb-q7',
          question: '無線LANにおいて、アクセスポイントのESSIDを非公開にするセキュリティ対策を何というか。',
          options: ['MACアドレスフィルタリング', 'ステルス機能', 'WPA2暗号化', 'IEEE 802.1X認証'],
          correctIndex: 1,
          explanation: 'ステルス機能（ESSIDステルス）は、アクセスポイントがESSIDをビーコン信号で公開しないようにする機能です。ただし、完全な対策ではなく暗号化と併用すべきです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-nb-q8',
          question: 'WANの接続方式のうち、データをパケットに分割して複数の通信で回線を共有する方式はどれか。',
          options: ['専用線方式', '回線交換方式', 'パケット交換方式', '時分割多重方式'],
          correctIndex: 2,
          explanation: 'パケット交換方式はデータをパケットに分割して送信し、複数の通信で回線を共有するため効率的です。インターネットの基本となる通信方式です。回線交換方式は通信ごとに回線を占有します。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
