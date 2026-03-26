import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const securityManagementChat: HistoryChat = {
  id: 'fe-security-management',
  icon: '🛡️',
  title: '情報セキュリティ管理',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: { explaining: '🧑‍🏫', happy: '😊', thinking: '🤔', excited: '🤩' },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋', surprised: '😲', thinking: '🤔', happy: '😄', confused: '😵' },
    },
  ],
  content: [
    // ── セクション1: CIA ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '情報セキュリティの3要素<strong>CIA</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '情報セキュリティの「CIA」って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '情報セキュリティの<strong>3大要素</strong>だよ。<strong>C（機密性）</strong>: 許可された人だけがアクセスできること。<strong>I（完全性）</strong>: 情報が正確で改ざんされていないこと。<strong>A（可用性）</strong>: 必要なときに情報を使えること。この3つのバランスを保つのがセキュリティ管理の基本だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '他にも要素はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '追加の4要素もあるよ。<strong>真正性</strong>（なりすまし防止）、<strong>責任追跡性</strong>（誰が何をしたか追跡可能）、<strong>否認防止</strong>（行為を後から否定できない）、<strong>信頼性</strong>（システムが正しく動作する）だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">C</span>(機密性) / <span class="keyword">I</span>(完全性) / <span class="keyword">A</span>(可用性) + 真正性・責任追跡性・否認防止・信頼性',
    },
    {
      type: 'quiz',
      question: '情報セキュリティにおける「完全性」の説明として適切なものはどれか。',
      options: [
        { letter: 'A', text: '許可された人だけが情報にアクセスできること', correct: false },
        { letter: 'B', text: '情報が正確で改ざんされていないこと', correct: true },
        { letter: 'C', text: '必要なときに情報が利用できること', correct: false },
        { letter: 'D', text: '行為を後から否定できないこと', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。完全性（Integrity）は情報が正確で改ざんされていないことを保証する要素です。',
    },

    // ── セクション2: ISMS ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>ISMS</strong>と<strong>セキュリティポリシー</strong>の体系を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ISMSって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ISMS（情報セキュリティマネジメントシステム）</strong>は組織全体で情報セキュリティを管理する仕組みだよ。国際規格<strong>ISO/IEC 27001</strong>に基づき、<strong>PDCAサイクル</strong>（Plan→Do→Check→Act）で継続的に改善する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'セキュリティポリシーの構成はどうなっていますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '3層構造だよ。<strong>基本方針</strong>（経営陣が策定する最上位の方針）、<strong>対策基準</strong>（具体的なルール・基準）、<strong>実施手順</strong>（日常の作業手順）。上から順に抽象度が下がっていくんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ISMS</span> = ISO 27001に基づく情報セキュリティ管理 / ポリシー = <span class="keyword">基本方針</span> → <span class="keyword">対策基準</span> → <span class="keyword">実施手順</span>',
    },
    {
      type: 'quiz',
      question: 'ISMSの国際規格はどれか。',
      options: [
        { letter: 'A', text: 'ISO 9001', correct: false },
        { letter: 'B', text: 'ISO/IEC 27001', correct: true },
        { letter: 'C', text: 'ISO 14001', correct: false },
        { letter: 'D', text: 'ISO/IEC 20000', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ISMSの国際規格はISO/IEC 27001です。ISO 9001は品質管理、ISO 14001は環境管理の規格です。',
    },

    // ── セクション3: リスクマネジメント ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>リスクマネジメント</strong>の4つの対応方法を覚えましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'リスクにはどう対応すればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '4つの方法がある。<strong>リスク回避</strong>（リスクのある活動をやめる）、<strong>リスク軽減</strong>（対策でリスクを下げる）、<strong>リスク転嫁</strong>（保険や外部委託でリスクを移す）、<strong>リスク受容</strong>（コストに見合わない場合は受け入れる）だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'リスクアセスメントとは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>リスク特定</strong>（どんなリスクがあるか洗い出し）→<strong>リスク分析</strong>（影響度と発生確率を評価）→<strong>リスク評価</strong>（優先順位をつける）の3ステップだよ。これに基づいて対応方法を選ぶんだ',
    },
    {
      type: 'summary-point',
      text: 'リスク対応: <span class="keyword">回避</span> / <span class="keyword">軽減</span> / <span class="keyword">転嫁</span> / <span class="keyword">受容</span> / アセスメント = 特定→分析→評価',
    },
    {
      type: 'quiz',
      question: 'リスク対応のうち、保険加入や外部委託でリスクを移す方法はどれか。',
      options: [
        { letter: 'A', text: 'リスク回避', correct: false },
        { letter: 'B', text: 'リスク軽減', correct: false },
        { letter: 'C', text: 'リスク転嫁', correct: true },
        { letter: 'D', text: 'リスク受容', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。リスク転嫁は保険加入や業務の外部委託によってリスクを第三者に移す方法です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>CIA</strong>：機密性・完全性・可用性の3大要素',
        '<strong>ISMS</strong>：ISO/IEC 27001に基づく情報セキュリティ管理（PDCAサイクル）',
        'セキュリティポリシー：<strong>基本方針 → 対策基準 → 実施手順</strong>の3層構造',
        'リスク対応：<strong>回避・軽減・転嫁・受容</strong>の4方法',
        'リスクアセスメント：<strong>特定 → 分析 → 評価</strong>の3ステップ',
      ],
    },
  ],
};
