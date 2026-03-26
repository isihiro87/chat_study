import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const requirementsChat: HistoryChat = {
  id: 'fe-requirements',
  icon: '📋',
  title: '情報システム戦略と企画',
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
    // ── セクション1: EA ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>EA（エンタープライズアーキテクチャ）</strong>と<strong>IS戦略</strong>の基本を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'EAって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>EA（エンタープライズアーキテクチャ）</strong>は組織全体のIT構造を4つの体系で整理する手法だよ。<strong>ビジネスアーキテクチャ</strong>（業務）、<strong>データアーキテクチャ</strong>（データ）、<strong>アプリケーションアーキテクチャ</strong>（ソフト）、<strong>テクノロジアーキテクチャ</strong>（技術基盤）の4層構造だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'SLCPとは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>SLCP（ソフトウェアライフサイクルプロセス）</strong>はソフトウェアの<strong>企画から運用・廃棄まで</strong>のプロセスを標準化したものだよ。<strong>共通フレーム</strong>としてJIS X 0160で規格化されている。企画→要件定義→開発→運用→保守の流れだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">EA</span> = ビジネス/データ/アプリ/テクノロジの4体系 / <span class="keyword">SLCP</span> = 企画〜廃棄までのプロセス標準',
    },
    {
      type: 'quiz',
      question: 'EAの4つの体系に含まれないものはどれか。',
      options: [
        { letter: 'A', text: 'ビジネスアーキテクチャ', correct: false },
        { letter: 'B', text: 'データアーキテクチャ', correct: false },
        { letter: 'C', text: 'セキュリティアーキテクチャ', correct: true },
        { letter: 'D', text: 'テクノロジアーキテクチャ', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。EAの4体系はビジネス、データ、アプリケーション、テクノロジアーキテクチャです。',
    },

    // ── セクション2: 要件定義 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>要件定義</strong>のプロセスと<strong>機能要件・非機能要件</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '要件定義では何を決めますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'システムに<strong>何を実現させるか</strong>を明確にする工程だよ。<strong>機能要件</strong>は「何ができるか」（業務処理、画面、帳票など）。<strong>非機能要件</strong>は「どのくらい」（性能、可用性、セキュリティ、運用条件など）を定義する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '要件定義の具体的な成果物は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>要件定義書</strong>だね。業務要件、システム要件、機能要件、非機能要件をまとめたもの。ユーザと開発者が<strong>合意形成</strong>するための重要なドキュメントだよ。ここが曖昧だとプロジェクトが迷走する',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">機能要件</span> = 何ができるか / <span class="keyword">非機能要件</span> = 性能・可用性・セキュリティ等 / 成果物は<span class="keyword">要件定義書</span>',
    },
    {
      type: 'quiz',
      question: '非機能要件に該当するものはどれか。',
      options: [
        { letter: 'A', text: '商品検索機能', correct: false },
        { letter: 'B', text: '注文処理機能', correct: false },
        { letter: 'C', text: 'レスポンスタイム3秒以内', correct: true },
        { letter: 'D', text: '在庫管理機能', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。レスポンスタイムは性能に関する非機能要件です。A、B、Dは機能要件です。',
    },

    // ── セクション3: 調達 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'システム開発の<strong>調達プロセス</strong>（RFI/RFP）を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'RFIとRFPの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>RFI（情報提供依頼書）</strong>はベンダーに<strong>技術情報や実績</strong>の提供を求める文書。<strong>RFP（提案依頼書）</strong>は要件を示して<strong>具体的な提案</strong>を求める文書だよ。RFIで情報収集→RFPで提案依頼→<strong>提案書を評価</strong>してベンダーを選定する流れだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ベンダー選定後はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '選定後は<strong>契約</strong>を結ぶ。<strong>請負契約</strong>は成果物の完成に責任を持つ。<strong>準委任契約</strong>は作業の遂行に責任を持つ（成果物の完成義務なし）。<strong>SLA（サービスレベル合意書）</strong>でサービスの品質基準を明確にすることも重要だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">RFI</span>(情報提供依頼) → <span class="keyword">RFP</span>(提案依頼) → 評価・選定 / <span class="keyword">請負</span>(成果物責任) vs <span class="keyword">準委任</span>(作業遂行責任)',
    },
    {
      type: 'quiz',
      question: 'RFP（提案依頼書）の説明として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'ベンダーに技術情報の提供を求める文書', correct: false },
        { letter: 'B', text: '要件を示してベンダーに具体的な提案を求める文書', correct: true },
        { letter: 'C', text: '契約条件を定めた文書', correct: false },
        { letter: 'D', text: 'プロジェクト計画を記した文書', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。RFP（Request For Proposal）はシステム要件を示してベンダーに具体的な提案を求める文書です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>EA</strong>：ビジネス/データ/アプリ/テクノロジの4体系で組織ITを整理',
        '<strong>SLCP</strong>：ソフトウェアの企画〜廃棄までのプロセス標準（共通フレーム）',
        '要件定義：<strong>機能要件</strong>（何ができるか）＋<strong>非機能要件</strong>（性能・可用性等）',
        '調達：<strong>RFI</strong>（情報収集）→<strong>RFP</strong>（提案依頼）→評価・選定',
        '契約：<strong>請負</strong>（成果物責任）vs <strong>準委任</strong>（作業遂行責任）',
      ],
    },
  ],
};
