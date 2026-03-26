import type { Topic } from '../../../../../../types';

export const securityManagement: Topic = {
  id: 'fe-security-management',
  eraId: 'fe-security',
  name: '情報セキュリティ管理',
  subtitle: 'CIA・ISMS・リスクマネジメント・セキュリティポリシー',
  icon: '🛡️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '情報資産と脅威・脆弱性',
          content:
            '情報セキュリティとは、組織が保有する情報資産（データ、システム、ネットワーク、紙媒体など）を様々な脅威から守ることです。脅威とは情報資産に損害を与える可能性のある要因で、地震・火災などの環境的脅威、不正アクセスなどの人為的脅威があります。脆弱性とは、脅威に対するシステムや運用の弱点のことで、ソフトウェアのバグ、設定ミス、教育不足などが該当します。脅威が脆弱性を突くことでリスクが顕在化し、インシデント（事故）が発生します。',
          keyPoints: [
            '情報資産: データ、ハードウェア、ソフトウェア、ネットワーク、人的資源など',
            '脅威: 情報資産に損害を与える可能性のある要因',
            '脆弱性: 脅威に対するシステムや運用上の弱点',
            'リスク = 脅威 × 脆弱性 × 情報資産の価値',
          ],
        },
        {
          title: '情報セキュリティの3要素（CIA）',
          content:
            '情報セキュリティの基本は機密性（Confidentiality）、完全性（Integrity）、可用性（Availability）の3要素で、頭文字をとってCIAと呼ばれます。機密性は許可された人だけが情報にアクセスできること、完全性は情報が正確で改ざんされていないこと、可用性は必要な時にいつでも情報を利用できることです。さらにJIS Q 27000では、真正性（なりすましでないこと）、信頼性（意図した動作と結果が一致すること）、責任追跡性（行為を追跡できること）、否認防止（後から否定できないこと）の4つが追加されています。',
          keyPoints: [
            '機密性（Confidentiality）: 許可された者だけがアクセスできる',
            '完全性（Integrity）: 情報が正確で改ざんされていない',
            '可用性（Availability）: 必要なときに利用できる',
            '追加要素: 真正性・信頼性・責任追跡性・否認防止',
          ],
        },
        {
          title: 'ISMS（情報セキュリティマネジメントシステム）',
          content:
            'ISMSはISO/IEC 27001（JIS Q 27001）で定められた情報セキュリティの管理体制です。組織全体でセキュリティを継続的に管理・改善するための仕組みで、PDCAサイクル（Plan計画→Do実行→Check評価→Act改善）を回して運用します。ISMS適合性評価制度により、第三者機関が組織のISMSを審査・認証します。また、セキュリティバイデザインとは、システムの企画・設計段階からセキュリティを組み込む考え方で、後付けの対策よりも効果的でコストも低くなります。',
          keyPoints: [
            'ISMS: ISO/IEC 27001に基づく情報セキュリティ管理体制',
            'PDCAサイクルで継続的に改善する',
            'ISMS適合性評価制度: 第三者が認証する仕組み',
            'セキュリティバイデザイン: 企画・設計段階からセキュリティを組み込む',
          ],
        },
        {
          title: 'リスクマネジメント',
          content:
            'リスクマネジメントはリスクを組織的に管理するプロセスです。まずリスクアセスメントとして、リスク特定（どんなリスクがあるか洗い出す）→リスク分析（リスクの大きさを見積もる）→リスク評価（対応の優先度を決める）の3段階で行います。次にリスク対応として、リスクコントロール（リスク軽減：対策を実施して被害を減らす、リスク回避：リスクのある活動自体をやめる、リスク移転：保険や外部委託でリスクを他者に移す）とリスクファイナンシング（リスク保有：許容範囲のリスクを受け入れる）があります。',
          keyPoints: [
            'リスクアセスメント: 特定→分析→評価の3段階',
            'リスク軽減: セキュリティ対策を実施して被害を小さくする',
            'リスク回避: リスクのある活動自体を行わない',
            'リスク移転: 保険加入や外部委託でリスクを第三者に移す',
            'リスク保有: 許容範囲内のリスクをそのまま受け入れる',
          ],
        },
        {
          title: '情報セキュリティポリシー',
          content:
            '情報セキュリティポリシーは組織のセキュリティに関する方針を文書化したもので、3階層構造になっています。第1階層の基本方針（セキュリティポリシー）は経営層が策定する組織の基本的な方針、第2階層の対策基準は基本方針を実現するための具体的なルール、第3階層の実施手順は対策基準に基づく具体的な操作手順です。また、CSIRT（Computer Security Incident Response Team）はセキュリティインシデント発生時に対応するための専門チームで、インシデントの検知・分析・対応・復旧を担当します。',
          keyPoints: [
            '第1階層: 基本方針（経営層が策定する基本的な方針）',
            '第2階層: 対策基準（基本方針を実現する具体的ルール）',
            '第3階層: 実施手順（対策基準に基づく操作マニュアル）',
            'CSIRT: セキュリティインシデント対応の専門チーム',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-sm-fc1', front: '機密性（Confidentiality）', back: '許可された者だけが情報にアクセスできる性質を何という？', explanation: 'CIAの「C」にあたり、アクセス制御や暗号化で確保します。', difficulty: 'basic' },
      { id: 'fe-sm-fc2', front: '完全性（Integrity）', back: '情報が正確で改ざんされていないことを保証する性質を何という？', explanation: 'CIAの「I」にあたり、デジタル署名やハッシュ関数で確保します。', difficulty: 'basic' },
      { id: 'fe-sm-fc3', front: '可用性（Availability）', back: '必要なときに情報やシステムを利用できる性質を何という？', explanation: 'CIAの「A」にあたり、冗長化やバックアップで確保します。', difficulty: 'basic' },
      { id: 'fe-sm-fc4', front: 'ISMS（情報セキュリティマネジメントシステム）', back: 'ISO/IEC 27001に基づく情報セキュリティの管理体制を何という？', explanation: '組織全体でPDCAサイクルを回してセキュリティを継続的に管理・改善します。', difficulty: 'basic' },
      { id: 'fe-sm-fc5', front: 'リスクアセスメント', back: 'リスクの特定→分析→評価の3段階で行うリスク評価プロセスを何という？', explanation: 'リスクマネジメントの最初のステップで、対応の優先度を決めるために行います。', difficulty: 'standard' },
      { id: 'fe-sm-fc6', front: 'リスク移転', back: '保険加入や外部委託によってリスクを第三者に移す対応を何という？', explanation: 'リスクコントロールの一種で、損害保険への加入が代表例です。', difficulty: 'standard' },
      { id: 'fe-sm-fc7', front: 'リスク保有', back: '許容範囲内のリスクをそのまま受け入れる対応を何という？', explanation: 'リスクファイナンシングの一種で、対策コストがリスクより大きい場合に選択します。', difficulty: 'standard' },
      { id: 'fe-sm-fc8', front: 'セキュリティバイデザイン', back: 'システムの企画・設計段階からセキュリティを組み込む考え方を何という？', explanation: '後付けの対策よりも効果的でコストも抑えられます。', difficulty: 'standard' },
      { id: 'fe-sm-fc9', front: 'CSIRT', back: 'セキュリティインシデント発生時に対応する専門チームの略称は？', explanation: 'Computer Security Incident Response Teamの略で、インシデントの検知・分析・対応・復旧を担当します。', difficulty: 'standard' },
      { id: 'fe-sm-fc10', front: '否認防止', back: '行為者が後から自分の行為を否定できないようにする性質を何という？', explanation: 'デジタル署名やログ管理によって実現されるセキュリティ特性です。', difficulty: 'standard' },
      { id: 'fe-sm-fc11', front: '基本方針・対策基準・実施手順', back: '情報セキュリティポリシーの3階層構造を上位から順に答えよ。', explanation: '基本方針は経営層が策定し、対策基準で具体的ルール、実施手順で操作マニュアルを定めます。', difficulty: 'basic' },
      { id: 'fe-sm-fc12', front: '真正性', back: 'なりすましでないことを確認できる性質を何という？', explanation: 'JIS Q 27000でCIAに追加された4要素の1つです。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-sm-q1',
          question: '情報セキュリティの3要素（CIA）に含まれないものはどれか。',
          options: ['機密性', '完全性', '可用性', '信頼性'],
          correctIndex: 3,
          explanation: 'CIAは機密性（Confidentiality）、完全性（Integrity）、可用性（Availability）の3つです。信頼性はJIS Q 27000で追加された要素です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-sm-q2',
          question: '許可された利用者が必要なときに情報にアクセスできることを保証するセキュリティ特性はどれか。',
          options: ['機密性', '完全性', '可用性', '真正性'],
          correctIndex: 2,
          explanation: '可用性（Availability）は、必要なときにいつでも情報やシステムを利用できる性質です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-sm-q3',
          question: 'ISMSの国際規格はどれか。',
          options: ['ISO 9001', 'ISO 14001', 'ISO/IEC 27001', 'ISO/IEC 20000'],
          correctIndex: 2,
          explanation: 'ISO/IEC 27001（JIS Q 27001）はISMSの要求事項を定めた国際規格です。ISO 9001は品質、ISO 14001は環境、ISO/IEC 20000はITサービスの規格です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sm-q4',
          question: 'リスクアセスメントのプロセスとして正しい順序はどれか。',
          options: ['分析→特定→評価', '特定→評価→分析', '特定→分析→評価', '評価→分析→特定'],
          correctIndex: 2,
          explanation: 'リスクアセスメントは、リスク特定（洗い出し）→リスク分析（大きさの見積もり）→リスク評価（優先度の決定）の順に行います。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sm-q5',
          question: 'リスクへの対応のうち、損害保険に加入してリスクを第三者に移すことを何というか。',
          options: ['リスク回避', 'リスク軽減', 'リスク移転', 'リスク保有'],
          correctIndex: 2,
          explanation: 'リスク移転は保険加入や業務委託によりリスクを他者に移す対応です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sm-q6',
          question: '情報セキュリティポリシーの3階層のうち、経営層が策定する最上位の文書はどれか。',
          options: ['実施手順', '対策基準', '基本方針', '運用マニュアル'],
          correctIndex: 2,
          explanation: '基本方針（セキュリティポリシー）は経営層が策定する組織の基本的なセキュリティ方針です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-sm-q7',
          question: 'セキュリティインシデント発生時に対応を行う組織内の専門チームはどれか。',
          options: ['CSIRT', 'ISMS', 'PDCA', 'CIA'],
          correctIndex: 0,
          explanation: 'CSIRT（Computer Security Incident Response Team）はインシデントの検知・分析・対応・復旧を担当する専門チームです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sm-q8',
          question: 'システムの企画・設計段階からセキュリティ対策を組み込む考え方はどれか。',
          options: ['セキュリティバイデザイン', 'ゼロトラスト', 'フォールトトレラント', 'フェールセーフ'],
          correctIndex: 0,
          explanation: 'セキュリティバイデザインは、開発の初期段階からセキュリティを考慮することで、後付けよりも効果的かつ低コストに対策を実現する考え方です。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
