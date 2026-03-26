import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const projectPlanningChat: HistoryChat = {
  id: 'fe-project-planning',
  icon: '📅',
  title: 'プロジェクトマネジメント基礎',
  subtitle: 'PMBOK・プロセス群・知識エリア',
  characters: [
    {
      id: 'pm-senpai',
      name: 'PM先輩',
      emoji: '👨‍💼',
      colorFrom: '#D97706',
      colorTo: '#F59E0B',
      expressions: {
        explaining: '🧐',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍🎓',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    // ── セクション1: プロジェクトとは ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'まずは<strong>プロジェクト</strong>の基本的な考え方を押さえましょう。日常業務とは何が違うのでしょうか？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'プロジェクトって、普通の仕事と何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: 'いい質問だね！<strong>プロジェクト</strong>は「<strong>期限付き</strong>で<strong>独自の目標</strong>を達成する取り組み」なんだ。毎日繰り返すルーチンワーク（定常業務）とは違って、<strong>開始と終了</strong>が明確に決まっているのが特徴だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なるほど。じゃあプロジェクトを率いる人は誰になるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'happy',
      text: '<strong>プロジェクトマネージャ（PM）</strong>だね。PMはメンバを率いて目標達成を目指す責任者だよ。そしてプロジェクトには色々な<strong>ステークホルダ</strong>がいる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ステークホルダって誰のことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: 'プロジェクトに<strong>影響を与える、または影響を受ける利害関係者</strong>のことだよ。発注者・経営者・利用者・開発者など、関わる人すべてが含まれるんだ。PMはこのステークホルダの期待をうまく管理する必要があるんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">プロジェクト</span> = 期限付き＋独自の目標 / <span class="keyword">PM</span> = 責任者 / <span class="keyword">ステークホルダ</span> = 利害関係者全員',
    },
    {
      type: 'quiz',
      question: 'プロジェクトの特徴として最も適切なものはどれか。',
      options: [
        { letter: 'A', text: '定常的に繰り返される業務である', correct: false },
        { letter: 'B', text: '期限が定められた独自の取り組みである', correct: true },
        { letter: 'C', text: '終了時期が定められていない継続的な活動である', correct: false },
        { letter: 'D', text: '既存の手順に従って行うルーチンワークである', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。プロジェクトは期限付きで独自の目標を達成する取り組みであり、定常業務（ルーチンワーク）とは異なります。',
    },

    // ── セクション2: プロジェクト憲章とPMBOK ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '次に、プロジェクトの正式なスタートに必要な文書と、管理の世界標準について見ていきましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'プロジェクトを始めるとき、何か公式な手続きってあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: 'あるよ！<strong>プロジェクト憲章</strong>という文書を作るんだ。これはプロジェクトの<strong>目標や期待される効果</strong>を盛り込んで、プロジェクトを<strong>公に認可</strong>するための文書なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '認可するということは、PMに「やっていいよ」と権限を与える意味もあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'happy',
      text: 'その通り！プロジェクト憲章によって、PMに<strong>正式な権限が付与</strong>されるんだ。では次に、プロジェクト管理の教科書的存在を紹介するよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'excited',
      text: 'それが<strong>PMBOK</strong>（Project Management Body of Knowledge）だ！プロジェクト管理の<strong>知識体系をまとめたガイド</strong>で、世界中で使われている<strong>デファクトスタンダード</strong>（事実上の標準）なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'デファクトスタンダードということは、国の機関が決めた規格じゃないんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: 'そう！公的機関による認定（デジュールスタンダード）ではなく、<strong>市場での広い普及</strong>によって事実上の標準になったものだね。PMBOKはベストプラクティスの体系であって、特定の手法を強制するものではないよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">プロジェクト憲章</span> = プロジェクトを公に認可する文書 / <span class="keyword">PMBOK</span> = PM知識体系（デファクトスタンダード）',
    },
    {
      type: 'quiz',
      question: 'PMBOKの説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'プロジェクト管理ソフトウェアの名称', correct: false },
        { letter: 'B', text: 'プロジェクト管理の国際規格（デジュールスタンダード）', correct: false },
        { letter: 'C', text: 'プロジェクト管理の知識体系（デファクトスタンダード）', correct: true },
        { letter: 'D', text: 'プロジェクトメンバの資格認定制度', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。PMBOKはプロジェクト管理の知識体系をまとめたガイドで、デファクトスタンダード（事実上の標準）です。',
    },

    // ── セクション3: 5つのプロセス群 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'PMBOKではプロジェクトの流れを<strong>5つのプロセス群</strong>で定義しています。試験でもよく出る重要ポイントです！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'excited',
      text: 'PMBOKでは、プロジェクトの流れを<strong>5つのプロセス群</strong>に分けているんだ。順番に見ていこう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: '① <strong>立上げ</strong>：プロジェクト憲章を作って正式に開始\n② <strong>計画</strong>：スコープ・スケジュール・コストなどの計画を策定\n③ <strong>実行</strong>：計画に基づいて作業を実施\n④ <strong>監視・コントロール</strong>：進捗や品質を監視し是正措置\n⑤ <strong>終結</strong>：成果物を引き渡し、プロジェクトを正式に完了',
    },
    {
      type: 'image',
      src: '/images/fe-exam/management/project-management/process-groups-flow.svg',
      alt: 'PMBOKの5つのプロセス群',
      caption: '立上げ→計画→実行→終結の流れ。監視・コントロールは全期間を通じて実施',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '監視・コントロールだけ他と違って、ずっと続くんですね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'happy',
      text: 'いいところに気づいたね！<strong>監視・コントロール</strong>はプロジェクトの<strong>全期間を通じて</strong>継続的に実施されるんだ。問題が起きたらすぐに是正措置を取るためだね。試験では「全期間を通じて実施されるプロセス群は？」という問題が出るよ',
    },
    {
      type: 'summary-point',
      text: '5つのプロセス群: <span class="keyword">立上げ</span> → <span class="keyword">計画</span> → <span class="keyword">実行</span> → <span class="keyword">終結</span>（<span class="keyword">監視・コントロール</span>は全期間）',
    },
    {
      type: 'quiz',
      question: 'プロジェクトの全期間を通じて継続的に実施されるプロセス群はどれか。',
      options: [
        { letter: 'A', text: '立上げプロセス群', correct: false },
        { letter: 'B', text: '計画プロセス群', correct: false },
        { letter: 'C', text: '実行プロセス群', correct: false },
        { letter: 'D', text: '監視・コントロールプロセス群', correct: true },
      ],
      explanation: '<strong>正解はD</strong>です。監視・コントロールプロセス群はプロジェクトの進捗や品質を全期間にわたって監視し、必要に応じて是正措置を取ります。',
    },

    // ── セクション4: 10の知識エリア ──
    {
      type: 'date',
      text: 'セクション4',
    },
    {
      type: 'narrator',
      text: '最後に、PMBOKの<strong>10の知識エリア</strong>を学びましょう。プロジェクト管理で「何を管理するか」の全体像です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: 'PMBOKでは<strong>10の知識エリア</strong>が定義されているんだ。最も重要なのは<strong>統合マネジメント</strong>で、他の9エリアを統合的に管理する最上位のエリアだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '9つのエリアってどんなものがありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: 'まず「<strong>何を</strong>」系の3つ：\n・<strong>スコープ</strong>：作業範囲の管理\n・<strong>タイム</strong>：スケジュール管理\n・<strong>コスト</strong>：予算管理',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: '次に「<strong>どのように</strong>」系の3つ：\n・<strong>品質</strong>：成果物の品質確保\n・<strong>資源</strong>：チームメンバや物的資源の管理\n・<strong>コミュニケーション</strong>：情報伝達の管理',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'happy',
      text: '最後に「<strong>外部要因</strong>」系の3つ：\n・<strong>リスク</strong>：リスクの特定・分析・対応\n・<strong>調達</strong>：外部からの購入や委託の管理\n・<strong>ステークホルダ</strong>：利害関係者の期待の管理',
    },
    {
      type: 'image',
      src: '/images/fe-exam/management/project-management/knowledge-areas.svg',
      alt: 'PMBOKの10の知識エリア',
      caption: '統合マネジメントを中心に9つのエリアが連携',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '構成管理ってどこに入るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'pm-senpai',
      expression: 'explaining',
      text: '<strong>構成管理</strong>は<strong>統合マネジメント</strong>の重要な活動の一つだよ。成果物の<strong>バージョン管理</strong>や<strong>変更管理</strong>を行うことだね。どの版が最新か、誰がいつ変更したかを把握するために欠かせないんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">統合マネジメント</span>（構成管理を含む）が9エリアを統合管理 / 覚え方: 何を＋どのように＋外部要因',
    },
    {
      type: 'quiz',
      question: 'PMBOKの10の知識エリアのうち、他の9つのエリアを統合的に管理するものはどれか。',
      options: [
        { letter: 'A', text: 'スコープマネジメント', correct: false },
        { letter: 'B', text: 'プロジェクト統合マネジメント', correct: true },
        { letter: 'C', text: 'コミュニケーションマネジメント', correct: false },
        { letter: 'D', text: 'ステークホルダマネジメント', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。プロジェクト統合マネジメントは他の9つの知識エリアを統合的に管理する最上位のエリアです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>プロジェクト</strong>：期限付きで独自の目標を達成する取り組み',
        '<strong>PM</strong>：プロジェクトの責任者 / <strong>ステークホルダ</strong>：利害関係者全員',
        '<strong>プロジェクト憲章</strong>：プロジェクトを公に認可し、PMに権限を付与する文書',
        '<strong>PMBOK</strong>：プロジェクト管理の知識体系（デファクトスタンダード）',
        '5つのプロセス群：<strong>立上げ → 計画 → 実行 → 終結</strong>（<strong>監視・コントロール</strong>は全期間）',
        '10の知識エリア：<strong>統合</strong>（構成管理含む）が他の9エリアを統合管理',
      ],
    },
  ],
};
