import type { HistoryChat } from '../../../../../../history-chat/types';

export const systemConfigChat: HistoryChat = {
  id: 'fe-system-config',
  icon: '🏗️',
  title: 'システム構成',
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
    // ── セクション1: ミッションクリティカルとデュプレックス ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '企業の基幹システムはなぜ止まってはいけないのか？<strong>システム構成</strong>の基本から学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'システム構成って、サーバを何台並べるかみたいな話ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'まさにそう！まず大前提として<strong>ミッションクリティカルシステム</strong>という考え方があるんだ。銀行のオンラインバンキングや航空管制のように、<strong>止まると社会に深刻な影響を与えるシステム</strong>のことだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '確かに銀行のシステムが止まったら大変ですね！どうやって守るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '基本は<strong>冗長構成</strong>だね。その代表が<strong>デュプレックスシステム</strong>で、<strong>現用系</strong>と<strong>待機系</strong>の二系統で構成されるんだ。普段は現用系が動いて、障害が起きたら待機系に切り替える',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '待機系はずっと待っているだけなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '待ち方に2種類あるんだ！<strong>ホットスタンバイ</strong>は待機系でも同じ業務を起動しておいて<strong>即座に切替え</strong>可能。<strong>コールドスタンバイ</strong>は待機系で別の業務（バッチ処理など）を動かしていて、切替えに<strong>時間がかかる</strong>方式だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">デュプレックス</span> = 現用系＋待機系の二系統 / <span class="keyword">ホットスタンバイ</span> = 即時切替え / <span class="keyword">コールドスタンバイ</span> = 切替えに時間がかかる',
    },
    {
      type: 'quiz',
      question: 'デュプレックスシステムにおいて、待機系でも現用系と同じ業務を起動しておき、障害時に即座に切り替える方式はどれか。',
      options: [
        { letter: 'A', text: 'コールドスタンバイ', correct: false },
        { letter: 'B', text: 'ホットスタンバイ', correct: true },
        { letter: 'C', text: 'ロードバランシング', correct: false },
        { letter: 'D', text: 'デュアルシステム', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ホットスタンバイは待機系でも同じ業務システムを起動しておくため、障害発生時に即座に切り替えることができます。',
    },

    // ── セクション2: デュアルシステムとクラスタ ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'さらに信頼性を高める構成として、<strong>デュアルシステム</strong>と<strong>クラスタ</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'デュプレックス以外にも構成方式はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'あるよ！<strong>デュアルシステム</strong>は2つのシステムで<strong>同じ処理を同時に実行</strong>して結果を照合する方式だ。片方が故障しても、もう片方がそのまま処理を継続できるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'デュプレックスとの違いは、両方同時に同じ仕事をしているかどうかですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！次に<strong>クラスタシステム</strong>。複数のコンピュータをネットワークで結合して、<strong>あたかも1台のシステム</strong>のように動かす構成だよ。<strong>HAクラスタ</strong>（高可用性クラスタ）は障害時に自動で別ノードに切り替えるフェールオーバ型が代表的だね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '負荷分散の仕組みとして<strong>ロードバランサ</strong>もある。複数のサーバに処理を分散して<strong>スケーラビリティ</strong>（拡張性）を高めるんだ。<strong>スケールアウト</strong>はサーバの台数を増やす方法、<strong>スケールアップ</strong>は1台の性能を上げる方法だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">デュアル</span> = 同じ処理を2系統で同時実行・照合 / <span class="keyword">クラスタ</span> = 複数台を1台のように運用 / <span class="keyword">スケールアウト</span> = 台数増 / <span class="keyword">スケールアップ</span> = 性能増',
    },
    {
      type: 'quiz',
      question: '2つのシステムで同じ処理を同時に実行し、結果を照合することで高い信頼性を実現する構成はどれか。',
      options: [
        { letter: 'A', text: 'デュプレックスシステム', correct: false },
        { letter: 'B', text: 'デュアルシステム', correct: true },
        { letter: 'C', text: 'クラスタシステム', correct: false },
        { letter: 'D', text: 'シンクライアントシステム', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。デュアルシステムは2つのシステムで同時に同じ処理を実行して結果を照合し、片方が故障してももう片方で処理を継続します。',
    },

    // ── セクション3: バックアップとBCP ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '災害対策としての<strong>バックアップサイト</strong>の考え方を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '地震とかの大規模な災害が起きたら、いくらサーバを冗長化してもダメですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい視点だね！だから<strong>バックアップサイト</strong>を遠隔地に用意するんだ。3種類あるよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ホットサイト</strong>は本番と同等の環境を常時稼働させて即座に切替え可能。<strong>ウォームサイト</strong>は機材を準備してあるがデータ同期に少し時間がかかる。<strong>コールドサイト</strong>は場所と電源のみ確保して、災害時に機材を搬入する方式だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ホットが一番速いけどコストが高い、コールドは安いけど復旧に時間がかかる、というトレードオフですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '完璧な理解だね！これらは<strong>BCP</strong>（事業継続計画）の一環として検討されるよ。<strong>RPO</strong>（目標復旧時点）はどの時点までデータを戻すか、<strong>RTO</strong>（目標復旧時間）は何時間以内に復旧するかの指標だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ホットサイト</span> = 即時切替え / <span class="keyword">ウォームサイト</span> = 短時間で復旧 / <span class="keyword">コールドサイト</span> = 低コストだが復旧に時間',
    },
    {
      type: 'quiz',
      question: 'バックアップサイトのうち、本番と同等の環境を常時稼働させ、災害時に即座に切り替え可能な方式はどれか。',
      options: [
        { letter: 'A', text: 'コールドサイト', correct: false },
        { letter: 'B', text: 'ウォームサイト', correct: false },
        { letter: 'C', text: 'ホットサイト', correct: true },
        { letter: 'D', text: 'ミラーサイト', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。ホットサイトは本番環境と同等のシステムを常時稼働させており、災害時に即座に切り替えることができます。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>デュプレックスシステム</strong>：現用系＋待機系（ホットスタンバイ / コールドスタンバイ）',
        '<strong>デュアルシステム</strong>：同じ処理を2系統で同時実行・結果照合',
        '<strong>クラスタシステム</strong>：複数台をネットワーク結合して1台のように運用',
        '<strong>スケールアウト</strong>：台数を増やす / <strong>スケールアップ</strong>：1台の性能を上げる',
        '<strong>バックアップサイト</strong>：ホット（即時）＞ウォーム（短時間）＞コールド（低コスト）',
        '<strong>BCP</strong>：RPO（目標復旧時点）＋RTO（目標復旧時間）',
      ],
    },
  ],
};
