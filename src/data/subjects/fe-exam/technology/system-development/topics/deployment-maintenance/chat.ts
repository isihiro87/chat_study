import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const deploymentMaintenanceChat: HistoryChat = {
  id: 'fe-deployment-maintenance',
  icon: '🚀',
  title: '導入・運用・保守',
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
    // ── セクション1: 移行方式 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'システムの<strong>移行方式</strong>と<strong>受入テスト</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'システムの移行方式にはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3つの方式がある。<strong>一斉移行</strong>は旧システムを一度に新システムに切り替える。移行期間は短いがリスクが高い。<strong>段階移行</strong>は機能や部門ごとに順次切り替える。<strong>並行運用</strong>は新旧システムを同時に動かして結果を比較する。リスクは低いがコストが高い',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '受入テストでは何を確認しますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>受入テスト</strong>はユーザが<strong>要件通りにシステムが動作するか</strong>を最終確認するテストだよ。業務シナリオに沿って実施し、問題なければ<strong>検収</strong>（納品を認める）となる',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">一斉移行</span>(リスク高・短期) / <span class="keyword">段階移行</span>(順次切替) / <span class="keyword">並行運用</span>(リスク低・コスト高)',
    },
    {
      type: 'quiz',
      question: '新旧システムを同時に稼働させて結果を比較する移行方式はどれか。',
      options: [
        { letter: 'A', text: '一斉移行', correct: false },
        { letter: 'B', text: '段階移行', correct: false },
        { letter: 'C', text: '並行運用', correct: true },
        { letter: 'D', text: 'パイロット移行', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。並行運用は新旧システムを同時に動かして結果を比較し、問題がなければ旧システムを停止する方式です。',
    },

    // ── セクション2: 運用管理 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>ITIL</strong>に基づく<strong>サービスマネジメント</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ITILとは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ITIL</strong>はITサービスマネジメントの<strong>ベストプラクティス集</strong>だよ。代表的なプロセスとして<strong>インシデント管理</strong>（障害の迅速な復旧）、<strong>問題管理</strong>（根本原因の究明）、<strong>変更管理</strong>（変更のリスク評価と承認）、<strong>構成管理</strong>（IT資産の把握）がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'インシデント管理と問題管理の違いは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>インシデント管理</strong>は<strong>サービスの迅速な復旧</strong>が目的。原因追究は後回しにしてとにかく直す。<strong>問題管理</strong>は<strong>根本原因を究明</strong>して再発を防止する。この違いは試験でよく問われるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ITIL</span> = ITサービス管理のベストプラクティス / <span class="keyword">インシデント管理</span>(迅速復旧) vs <span class="keyword">問題管理</span>(根本原因究明)',
    },
    {
      type: 'quiz',
      question: 'インシデント管理の目的として適切なものはどれか。',
      options: [
        { letter: 'A', text: '障害の根本原因を究明する', correct: false },
        { letter: 'B', text: 'サービスを迅速に復旧する', correct: true },
        { letter: 'C', text: 'IT資産を正確に把握する', correct: false },
        { letter: 'D', text: '変更のリスクを評価する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。インシデント管理はサービスの迅速な復旧が目的です。根本原因の究明は問題管理の役割です。',
    },

    // ── セクション3: 保守の種類 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'ソフトウェア<strong>保守の4種類</strong>を正確に覚えましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '保守にはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '4種類ある。<strong>是正保守</strong>（発見されたバグの修正）、<strong>適応保守</strong>（OS変更など環境変化への対応）、<strong>完全化保守</strong>（機能追加や性能改善）、<strong>予防保守</strong>（将来の問題を未然に防ぐ改善）だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '運用時のバックアップについても教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>フルバックアップ</strong>（全データ）、<strong>差分バックアップ</strong>（前回フルからの変更分）、<strong>増分バックアップ</strong>（前回バックアップからの変更分）の3種類。増分は毎回のバックアップが小さいが復旧に時間がかかる。差分はその逆だよ',
    },
    {
      type: 'summary-point',
      text: '保守4種: <span class="keyword">是正</span>(バグ修正) / <span class="keyword">適応</span>(環境変化) / <span class="keyword">完全化</span>(機能追加) / <span class="keyword">予防</span>(未然防止)',
    },
    {
      type: 'quiz',
      question: 'OS変更やハードウェア更新に対応するための保守はどれか。',
      options: [
        { letter: 'A', text: '是正保守', correct: false },
        { letter: 'B', text: '適応保守', correct: true },
        { letter: 'C', text: '完全化保守', correct: false },
        { letter: 'D', text: '予防保守', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。適応保守はOSの変更やハードウェア更新など、動作環境の変化に対応するための保守です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '移行方式：<strong>一斉</strong>（短期・リスク高）/ <strong>段階</strong>（順次）/ <strong>並行運用</strong>（リスク低・コスト高）',
        '<strong>ITIL</strong>：ITサービス管理のベストプラクティス集',
        '<strong>インシデント管理</strong>（迅速復旧）vs <strong>問題管理</strong>（根本原因究明）',
        '保守4種：<strong>是正</strong>（バグ修正）/ <strong>適応</strong>（環境変化）/ <strong>完全化</strong>（機能追加）/ <strong>予防</strong>（未然防止）',
        'バックアップ：<strong>フル / 差分 / 増分</strong>の3種類',
      ],
    },
  ],
};
