import type { Topic } from '../../../../../../types';

export const aiIot: Topic = {
  id: 'fe-ai-iot',
  eraId: 'fe-business-industry',
  name: 'AI・ビッグデータ・IoT',
  subtitle: '機械学習・ディープラーニング・ビッグデータ・IoT',
  icon: '🤖',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'AI（人工知能）の基本',
          content:
            'AI（Artificial Intelligence：人工知能）は、人間の知能をコンピュータで再現する技術です。第1次AIブーム（探索と推論）、第2次AIブーム（知識表現・エキスパートシステム）を経て、現在は第3次AIブーム（機械学習・ディープラーニング）です。強いAI（汎用人工知能：AGI）は人間と同等の知能を持つAI、弱いAI（特化型AI）は特定タスクに特化したAIです。',
          keyPoints: [
            '第3次AIブーム: 機械学習・ディープラーニングが中心',
            '強いAI（AGI）: 汎用的な知能。現時点では未実現',
            '弱いAI: 特定タスクに特化（画像認識・音声認識など）',
          ],
        },
        {
          title: '機械学習とディープラーニング',
          content:
            '機械学習は、大量のデータからパターンやルールを自動的に学習する技術です。教師あり学習（正解ラベル付きデータで学習）、教師なし学習（ラベルなしデータからパターン発見）、強化学習（試行錯誤で最適な行動を学習）に分類されます。ディープラーニング（深層学習）は、多層のニューラルネットワークを用いた機械学習の手法で、画像認識や自然言語処理で高い精度を実現しています。',
          keyPoints: [
            '教師あり学習: 正解ラベル付きデータで学習',
            '教師なし学習: ラベルなしデータからパターン発見',
            '強化学習: 試行錯誤で最適行動を学習',
            'ディープラーニング: 多層ニューラルネットワーク',
          ],
        },
        {
          title: 'ビッグデータ',
          content:
            'ビッグデータは、Volume（量）・Variety（多様性）・Velocity（速度）の3Vで特徴づけられる大規模データです。構造化データ（表形式のデータ）だけでなく、非構造化データ（テキスト・画像・動画・SNS投稿など）も含みます。データ分析手法として、データマイニング（大量データからパターン発見）やテキストマイニング（テキストデータから知見抽出）があります。',
          keyPoints: [
            '3V: Volume（量）・Variety（多様性）・Velocity（速度）',
            '構造化データと非構造化データ',
            'データマイニング・テキストマイニングで知見を抽出',
          ],
        },
        {
          title: 'IoT（Internet of Things）',
          content:
            'IoT（モノのインターネット）は、さまざまな「モノ」がインターネットに接続され、情報を収集・交換する仕組みです。センサーで温度・湿度・位置・振動などのデータを収集し、クラウドで分析・活用します。スマート家電、ウェアラブルデバイス、スマート工場（Industry 4.0）、スマート農業などが応用例です。エッジコンピューティングは、IoT端末に近い場所でデータ処理を行い、通信遅延を削減する技術です。',
          keyPoints: [
            'IoT: モノがインターネットに接続され情報を交換',
            'センサーでデータ収集→クラウドで分析',
            'エッジコンピューティング: 端末近くでデータ処理し遅延削減',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-ai-iot-fc1', front: '大量のデータからパターンやルールを自動的に学習する技術', back: '機械学習とは？', explanation: '教師あり学習・教師なし学習・強化学習に分類されます。', difficulty: 'basic' },
      { id: 'fe-ai-iot-fc2', front: '多層のニューラルネットワークを用いた機械学習の手法', back: 'ディープラーニング（深層学習）とは？', explanation: '画像認識や自然言語処理で高い精度を実現しています。', difficulty: 'basic' },
      { id: 'fe-ai-iot-fc3', front: '正解ラベル付きのデータを使って学習する手法', back: '教師あり学習とは？', explanation: '分類や回帰などのタスクで使われます。スパムメール判定などが例です。', difficulty: 'basic' },
      { id: 'fe-ai-iot-fc4', front: '試行錯誤を繰り返しながら最適な行動を学習する手法', back: '強化学習とは？', explanation: '囲碁AIのAlphaGoなどが代表例です。報酬を最大化する行動を学びます。', difficulty: 'standard' },
      { id: 'fe-ai-iot-fc5', front: 'さまざまなモノがインターネットに接続され情報を収集・交換する仕組み', back: 'IoT（Internet of Things）とは？', explanation: 'センサーでデータを収集し、クラウドで分析・活用します。', difficulty: 'basic' },
      { id: 'fe-ai-iot-fc6', front: 'Volume（量）・Variety（多様性）・Velocity（速度）', back: 'ビッグデータの3Vとは？', explanation: 'ビッグデータを特徴づける3つの要素です。', difficulty: 'standard' },
      { id: 'fe-ai-iot-fc7', front: '大量のデータから隠れたパターンや規則性を発見する手法', back: 'データマイニングとは？', explanation: '統計学や機械学習の技術を使って知見を抽出します。', difficulty: 'standard' },
      { id: 'fe-ai-iot-fc8', front: 'IoT端末に近い場所でデータ処理を行い通信遅延を削減する技術', back: 'エッジコンピューティングとは？', explanation: '全データをクラウドに送らず、端末近くで処理することで高速化します。', difficulty: 'standard' },
      { id: 'fe-ai-iot-fc9', front: 'ラベルなしデータからパターンや構造を発見する手法', back: '教師なし学習とは？', explanation: 'クラスタリング（グループ分け）などが代表的なタスクです。', difficulty: 'standard' },
      { id: 'fe-ai-iot-fc10', front: 'テキストデータから有用な知見やパターンを抽出する手法', back: 'テキストマイニングとは？', explanation: 'SNS投稿や問い合わせ履歴の分析などに活用されます。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-ai-iot-q1',
          question: '大量のデータからパターンやルールを自動的に学習する技術はどれか。',
          options: ['データマイニング', '機械学習', 'ナレッジマネジメント', 'RPA'],
          correctIndex: 1,
          explanation: '機械学習はデータから自動的にパターンを学習する技術です。データマイニングはデータ分析手法です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ai-iot-q2',
          question: '機械学習の分類で、正解ラベル付きのデータを使って学習する手法はどれか。',
          options: ['教師なし学習', '強化学習', '教師あり学習', '転移学習'],
          correctIndex: 2,
          explanation: '教師あり学習は正解ラベル付きデータで学習します。教師なし学習はラベルなし、強化学習は報酬ベースです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ai-iot-q3',
          question: 'IoTの説明として最も適切なものはどれか。',
          options: [
            'インターネットを使った電子商取引',
            'さまざまなモノがインターネットに接続され情報を収集・交換する仕組み',
            'AIが人間の知能を超えること',
            'クラウド上でデータを分析するサービス',
          ],
          correctIndex: 1,
          explanation: 'IoT（Internet of Things）はモノがインターネットに接続され情報を交換する仕組みです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ai-iot-q4',
          question: 'ビッグデータの特徴を表す3Vに含まれるものはどれか。',
          options: ['Value（価値）', 'Velocity（速度）', 'Validity（妥当性）', 'Vision（ビジョン）'],
          correctIndex: 1,
          explanation: '3VはVolume（量）・Variety（多様性）・Velocity（速度）です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ai-iot-q5',
          question: 'IoT端末に近い場所でデータ処理を行い、通信遅延を削減する技術はどれか。',
          options: ['クラウドコンピューティング', 'エッジコンピューティング', 'フォグコンピューティング', 'グリッドコンピューティング'],
          correctIndex: 1,
          explanation: 'エッジコンピューティングは端末近くでデータ処理し、遅延削減と通信量軽減を実現します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ai-iot-q6',
          question: '多層のニューラルネットワークを用いた機械学習の手法で、画像認識などで高い精度を実現しているものはどれか。',
          options: ['エキスパートシステム', 'ディープラーニング', '遺伝的アルゴリズム', 'ファジー理論'],
          correctIndex: 1,
          explanation: 'ディープラーニング（深層学習）は多層ニューラルネットワークで高精度な認識を実現しています。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ai-iot-q7',
          question: '大量のデータから隠れたパターンや規則性を発見する分析手法はどれか。',
          options: ['データマイニング', '機械学習', 'データクレンジング', 'ETL'],
          correctIndex: 0,
          explanation: 'データマイニングは大量データから隠れたパターンを発見する分析手法です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ai-iot-q8',
          question: '強化学習の説明として最も適切なものはどれか。',
          options: [
            '正解データを教師として与えて学習する',
            'データのクラスタリングでパターンを発見する',
            '試行錯誤を繰り返し報酬を最大化する行動を学習する',
            '過去の学習モデルを別のタスクに転用する',
          ],
          correctIndex: 2,
          explanation: '強化学習は環境との相互作用で試行錯誤し、累積報酬を最大化する行動を学習します。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
