import type { Topic } from '../../../../../../types';

export const requirements: Topic = {
  id: 'fe-requirements',
  eraId: 'fe-system-development',
  name: '情報システム戦略と企画',
  subtitle: 'IS戦略・EA・SLCP・要件定義・調達',
  icon: '📋',
  order: 1,
  content: {
    explanation: {
      slides: [
        {
          id: 'fe-req-slide1',
          title: 'EA（エンタープライズアーキテクチャ）って何？',
          slides: [
            { type: 'question', question: '組織全体のシステムを「見える化」する手法は？', subtext: '4つのアーキテクチャで整理します', emoji: '🏛️' },
            { type: 'reason', headline: 'EA（エンタープライズアーキテクチャ）', points: ['ビジネス・データ・アプリケーション・テクノロジの4体系', 'As-Is（現状）とTo-Be（理想）のモデルを作成', 'ギャップ分析で段階的な改善計画を策定'] },
            { type: 'conclusion', conclusion: 'EAは組織のシステムを4層で整理し、理想への道筋を描く手法', keywords: [{ text: 'EA', isImportant: true }, { text: '4体系', isImportant: true }, { text: 'As-Is / To-Be', isImportant: false }], nextHint: '次はSLCPについて学ぼう' },
          ],
        },
        {
          id: 'fe-req-slide2',
          title: '共通フレーム（SLCP）とは？',
          slides: [
            { type: 'question', question: '発注者と受注者が「同じ言葉」で話すためのフレームワークは？', subtext: 'ソフトウェア開発の工程を標準化', emoji: '📜' },
            { type: 'reason', headline: '共通フレーム2013（SLCP）', points: ['企画→要件定義→開発→運用→保守の流れ', 'ISO/IEC 12207を日本向けに策定', '作業内容・範囲・役割分担を明確化'] },
            { type: 'conclusion', conclusion: '共通フレームは発注者・受注者間の認識のずれを防ぐ共通言語', keywords: [{ text: 'SLCP', isImportant: true }, { text: '共通フレーム2013', isImportant: true }, { text: '工程の標準化', isImportant: false }], nextHint: '次は調達プロセスを学ぼう' },
          ],
        },
        {
          id: 'fe-req-slide3',
          title: 'RFI・RFP・NDAの違いは？',
          slides: [
            { type: 'question', question: 'システム開発を外部に頼むとき、どんな文書が必要？', subtext: '調達プロセスの3つの重要文書', emoji: '📨' },
            { type: 'reason', headline: '調達の3つの文書', points: ['RFI（情報提供依頼書）: ベンダから情報を収集', 'RFP（提案依頼書）: ベンダに提案を依頼', 'NDA（秘密保持契約）: 情報漏洩を防止'] },
            { type: 'conclusion', conclusion: 'RFI→RFP→NDAの順で調達が進む', keywords: [{ text: 'RFI', isImportant: true }, { text: 'RFP', isImportant: true }, { text: 'NDA', isImportant: true }], nextHint: '次のトピックへ進もう' },
          ],
        },
      ],
      sections: [
        {
          title: '情報システム戦略',
          content:
            '情報システム戦略とは、経営戦略に基づいて情報システムの方向性を定める戦略です。CIO（最高情報責任者）が中心となり、ITガバナンス（IT統治）を確立して、情報システムの企画・開発・運用・保守を適切に管理します。システム管理基準は、経済産業省が策定した情報システムの管理に関するガイドラインで、情報システムの企画段階から運用・保守に至るまでの管理項目を体系的にまとめたものです。',
          keyPoints: [
            'CIO（Chief Information Officer）: 情報システム戦略の最高責任者',
            'ITガバナンス: 経営戦略に沿ったIT活用の仕組みづくり',
            'システム管理基準: 経済産業省策定のIS管理ガイドライン',
          ],
        },
        {
          title: 'EA（エンタープライズアーキテクチャ）',
          content:
            'EA（エンタープライズアーキテクチャ）は、組織全体の業務とシステムを4つの体系で整理・最適化する手法です。ビジネスアーキテクチャ（業務の構造）、データアーキテクチャ（データの構造）、アプリケーションアーキテクチャ（アプリケーションの構造）、テクノロジアーキテクチャ（技術基盤の構造）の4層で構成されます。現状（As-Is）と理想（To-Be）のモデルを作成し、そのギャップ分析を行うことで、段階的な改善計画を策定します。',
          keyPoints: [
            'EA の4体系: ビジネス・データ・アプリケーション・テクノロジアーキテクチャ',
            'As-Is モデル: 現状の姿 / To-Be モデル: あるべき姿',
            'ギャップ分析: As-Is と To-Be の差異を分析し改善計画を策定',
          ],
        },
        {
          title: 'SLCP（共通フレーム）',
          content:
            'SLCP（Software Life Cycle Process）は、ソフトウェアの開発から廃棄までの工程を標準化したものです。日本では「共通フレーム2013」として策定されており、企画プロセス→要件定義プロセス→開発プロセス→運用プロセス→保守プロセスの流れで構成されます。発注者と受注者が共通の用語・枠組みで意思疎通を行うための基盤となるフレームワークです。',
          keyPoints: [
            'SLCP: ソフトウェアライフサイクルプロセスの標準化',
            '共通フレーム2013: 日本独自のSLCP規格',
            '工程: 企画→要件定義→開発→運用→保守',
          ],
        },
        {
          title: '企画プロセスと要件定義プロセス',
          content:
            '企画プロセスは、システム化構想の立案とシステム化計画の立案から成ります。システム化構想では経営上の課題を分析し、システム化の方針を決定します。システム化計画では具体的な開発範囲やスケジュール、費用を計画します。要件定義プロセスでは、業務要件定義（業務フローの明確化）、機能要件定義（システムが実現すべき機能）、非機能要件定義（性能・信頼性・セキュリティなどの品質要件）を行います。',
          keyPoints: [
            '企画プロセス: システム化構想の立案 + システム化計画の立案',
            '機能要件: システムが実現すべき機能（画面・帳票・処理など）',
            '非機能要件: 性能・信頼性・セキュリティ・移行性などの品質要件',
          ],
        },
        {
          title: '調達',
          content:
            '調達とは、システム開発を外部に委託する際の一連のプロセスです。まず発注者がRFI（情報提供依頼書）をベンダに送付して情報を収集し、次にRFP（提案依頼書）を作成・送付します。ベンダはRFPに基づいて提案書と見積書を提出します。契約時にはNDA（秘密保持契約）を締結し、情報漏洩を防止します。近年はCSR（企業の社会的責任）やグリーン購入（環境に配慮した調達）も重視されています。',
          keyPoints: [
            'RFI（情報提供依頼書）: ベンダから情報を収集するための依頼書',
            'RFP（提案依頼書）: ベンダに提案を求めるための依頼書',
            'NDA（秘密保持契約）: 情報漏洩防止のための契約',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-req-fc1', front: '経営戦略に基づいてIT活用の方向性を決め、適切に管理する仕組み', back: 'ITガバナンスとは？', explanation: 'ITガバナンスは、経営戦略と整合したIT戦略を策定・実行し、組織全体のIT投資・リスク・成果を統治する仕組みです。', difficulty: 'basic' },
      { id: 'fe-req-fc2', front: '情報システム戦略の最高責任者の役職名（英語略称）', back: 'CIO（Chief Information Officer）', explanation: 'CIOは最高情報責任者とも呼ばれ、経営戦略に基づくIT戦略の策定・推進を統括します。', difficulty: 'basic' },
      { id: 'fe-req-fc3', front: '組織全体を4つのアーキテクチャ（BA・DA・AA・TA）で整理・最適化する手法', back: 'EA（エンタープライズアーキテクチャ）', explanation: 'ビジネス・データ・アプリケーション・テクノロジの4体系で組織の業務とシステムを可視化し最適化します。', difficulty: 'basic' },
      { id: 'fe-req-fc4', front: 'EAで「現状の姿」を表すモデル', back: 'As-Is モデル', explanation: 'As-Isは「現状」を意味し、理想の姿であるTo-Beモデルとの差異をギャップ分析で明らかにします。', difficulty: 'basic' },
      { id: 'fe-req-fc5', front: 'ソフトウェア開発から廃棄までの工程を標準化した日本のフレームワーク（2013年版）', back: '共通フレーム2013（SLCP）', explanation: 'SLCP-JCF2013とも呼ばれ、企画→要件定義→開発→運用→保守の各プロセスを標準化しています。', difficulty: 'basic' },
      { id: 'fe-req-fc6', front: 'システム化構想の立案とシステム化計画の立案を行うプロセス', back: '企画プロセス', explanation: '経営上の課題を分析しシステム化の方針を決め、具体的な開発範囲・スケジュール・費用を計画します。', difficulty: 'basic' },
      { id: 'fe-req-fc7', front: 'システムが実現すべき画面・帳票・処理などの要件', back: '機能要件', explanation: '機能要件はシステムが「何をするか」を定義するもので、画面設計・帳票設計・処理ロジックなどが含まれます。', difficulty: 'basic' },
      { id: 'fe-req-fc8', front: '性能・信頼性・セキュリティなど、機能以外の品質に関する要件', back: '非機能要件', explanation: '非機能要件にはレスポンスタイム、可用性、セキュリティ、移行性、保守性などが含まれます。', difficulty: 'standard' },
      { id: 'fe-req-fc9', front: 'ベンダに対して技術動向や製品情報などの提供を求める文書', back: 'RFI（情報提供依頼書）', explanation: 'RFI（Request For Information）はRFP作成前にベンダの情報を収集するために送付します。', difficulty: 'basic' },
      { id: 'fe-req-fc10', front: 'ベンダに対してシステム提案を求める際に送付する文書', back: 'RFP（提案依頼書）', explanation: 'RFP（Request For Proposal）には、システムの目的・要件・制約条件・評価基準などを記載します。', difficulty: 'basic' },
      { id: 'fe-req-fc11', front: '契約時に機密情報の漏洩を防止するために締結する契約', back: 'NDA（秘密保持契約）', explanation: 'NDA（Non-Disclosure Agreement）は、取引先との間で機密情報を第三者に開示しないことを約束する契約です。', difficulty: 'basic' },
      { id: 'fe-req-fc12', front: '環境負荷の少ない製品やサービスを優先的に購入する取り組み', back: 'グリーン購入（グリーン調達）', explanation: 'グリーン購入法に基づき、環境への負荷が少ない製品・サービスを積極的に選択する調達方針です。', difficulty: 'standard' },
      { id: 'fe-req-fc13', front: 'EAで「あるべき姿（理想の姿）」を表すモデル', back: 'To-Be モデル', explanation: 'As-Is（現状）モデルとTo-Be（理想）モデルのギャップを分析し、改善計画を策定します。', difficulty: 'basic' },
      { id: 'fe-req-fc14', front: 'EAのビジネスアーキテクチャで用いられる代表的な図法', back: 'DFD（データフローダイアグラム）やビジネスプロセスモデル', explanation: 'ビジネスアーキテクチャでは業務の流れ（プロセス）を可視化します。', difficulty: 'standard' },
      { id: 'fe-req-fc15', front: 'EAのデータアーキテクチャで用いられる代表的な手法', back: 'E-R図（実体関連図）', explanation: 'データの構造と関連をE-R図で整理し、データベースの論理設計に活用します。', difficulty: 'standard' },
      { id: 'fe-req-fc16', front: 'EAのアプリケーションアーキテクチャで管理するもの', back: 'アプリケーション間の連携やデータの流れ', explanation: 'DFDを用いて各アプリケーションの機能と入出力データの関係を整理します。', difficulty: 'standard' },
      { id: 'fe-req-fc17', front: 'EAのテクノロジアーキテクチャで管理するもの', back: 'ハードウェア・ソフトウェア・ネットワークなどの技術基盤', explanation: 'サーバ構成やネットワーク構成などのインフラ設計を体系化します。', difficulty: 'standard' },
      { id: 'fe-req-fc18', front: 'As-IsモデルとTo-Beモデルの差異を分析すること', back: 'ギャップ分析', explanation: '現状と理想の差分を明らかにして、段階的な改善計画を立案します。', difficulty: 'basic' },
      { id: 'fe-req-fc19', front: '経済産業省が策定したIS管理のガイドライン', back: 'システム管理基準', explanation: '情報システムの企画から運用・保守までの管理項目を体系的にまとめたものです。', difficulty: 'standard' },
      { id: 'fe-req-fc20', front: '要件定義で定義する3つの要件', back: '業務要件・機能要件・非機能要件', explanation: '業務フローの明確化、システム機能、性能・信頼性などの品質要件をそれぞれ定義します。', difficulty: 'standard' },
      { id: 'fe-req-fc21', front: 'ベンダがRFPに基づいて提出する2つの文書', back: '提案書と見積書', explanation: 'RFPの要件に対する解決策の提案と、それに伴う費用の見積もりを提出します。', difficulty: 'basic' },
      { id: 'fe-req-fc22', front: '企業の社会的責任を意味する略称', back: 'CSR（Corporate Social Responsibility）', explanation: '環境・社会・ガバナンスに配慮した経営活動を行う責任です。', difficulty: 'standard' },
      { id: 'fe-req-fc23', front: 'SLCP（共通フレーム）の国際標準規格の元になった規格', back: 'ISO/IEC 12207', explanation: '共通フレーム2013はISO/IEC 12207を日本の商慣習に合わせて策定されました。', difficulty: 'advanced' },
      { id: 'fe-req-fc24', front: 'システム化計画で具体的に計画する内容', back: '開発範囲・スケジュール・費用', explanation: 'システム化構想で決めた方針に基づき、具体的な計画を立案します。', difficulty: 'basic' },
      { id: 'fe-req-fc25', front: '調達プロセスの文書の発行順序', back: 'RFI → RFP → 提案書/見積書 → NDA/契約', explanation: 'まず情報収集（RFI）、次に提案依頼（RFP）、ベンダの提案を評価し、契約へ進みます。', difficulty: 'standard' },
      { id: 'fe-req-fc26', front: '複数のベンダの提案を比較評価するために使うもの', back: '提案評価基準（評価項目と配点）', explanation: 'RFPに記載した評価基準に基づいて客観的にベンダを選定します。', difficulty: 'advanced' },
      { id: 'fe-req-fc27', front: '企画プロセスのうち、経営課題の分析とシステム化方針の決定を行う活動', back: 'システム化構想の立案', explanation: '経営戦略に基づいて、どの業務をシステム化するかの方針を決めます。', difficulty: 'standard' },
      { id: 'fe-req-fc28', front: 'CIOの日本語訳', back: '最高情報責任者', explanation: 'Chief Information Officerの日本語訳で、IT戦略の策定・推進を統括する経営幹部です。', difficulty: 'basic' },
      { id: 'fe-req-fc29', front: '非機能要件の具体例を4つ挙げよ', back: 'レスポンスタイム・可用性・セキュリティ・移行性', explanation: '他にも保守性、拡張性、運用性などがあります。', difficulty: 'advanced' },
      { id: 'fe-req-fc30', front: 'ITガバナンスとITマネジメントの違い', back: 'ガバナンスは「統治・方向付け」、マネジメントは「管理・実行」', explanation: 'ガバナンスは経営層の視点での統制、マネジメントは現場での管理活動です。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        { id: 'fe-req-q1', question: 'EA（エンタープライズアーキテクチャ）を構成する4つのアーキテクチャに含まれないものはどれか。', options: ['ビジネスアーキテクチャ', 'セキュリティアーキテクチャ', 'データアーキテクチャ', 'テクノロジアーキテクチャ'], correctIndex: 1, explanation: 'EAの4体系はビジネス・データ・アプリケーション・テクノロジアーキテクチャです。セキュリティアーキテクチャは含まれません。', difficulty: 'basic' },
        { id: 'fe-req-q2', question: 'EAにおいて、現状の業務やシステムの姿を表すモデルはどれか。', options: ['To-Be モデル', 'As-Is モデル', 'Can-Be モデル', 'Should-Be モデル'], correctIndex: 1, explanation: 'As-Is モデルは「現状の姿」を表し、To-Be モデルは「あるべき姿（理想の姿）」を表します。', difficulty: 'basic' },
        { id: 'fe-req-q3', question: 'ベンダにシステムの提案を依頼するために発注者が作成する文書はどれか。', options: ['RFI（情報提供依頼書）', 'NDA（秘密保持契約）', 'RFP（提案依頼書）', 'SLA（サービスレベル合意書）'], correctIndex: 2, explanation: 'RFP（Request For Proposal）は、発注者がベンダに対してシステムの提案を求めるために作成・送付する文書です。', difficulty: 'basic' },
        { id: 'fe-req-q4', question: '共通フレーム2013における開発プロセスの正しい順序はどれか。', options: ['企画→開発→要件定義→運用→保守', '要件定義→企画→開発→保守→運用', '企画→要件定義→開発→運用→保守', '開発→要件定義→企画→運用→保守'], correctIndex: 2, explanation: '共通フレーム2013では、企画→要件定義→開発→運用→保守の順にプロセスが進みます。', difficulty: 'basic' },
        { id: 'fe-req-q5', question: '非機能要件に該当するものはどれか。', options: ['受注データを登録する画面を設ける', '月次売上レポートを出力する', 'レスポンスタイムを3秒以内にする', '在庫数が基準値を下回ったら自動発注する'], correctIndex: 2, explanation: 'レスポンスタイムは性能に関する品質要件であり、非機能要件に分類されます。他の選択肢は機能要件です。', difficulty: 'standard' },
        { id: 'fe-req-q6', question: 'ITガバナンスの説明として最も適切なものはどれか。', options: ['システム開発の外部委託先を選定するプロセス', '経営戦略と整合したIT活用の仕組みを確立し統制すること', 'プロジェクトの進捗・品質・コストを管理すること', 'ITインフラの障害を検知し復旧する運用管理'], correctIndex: 1, explanation: 'ITガバナンスは、経営戦略に沿ったIT戦略の策定・実行と、IT投資・リスク・成果の統治を行う仕組みです。', difficulty: 'basic' },
        { id: 'fe-req-q7', question: 'RFPを発行する前に、ベンダの技術動向や製品情報を収集するために送付する文書はどれか。', options: ['RFP（提案依頼書）', 'RFI（情報提供依頼書）', 'SLA（サービスレベル合意書）', 'NDA（秘密保持契約）'], correctIndex: 1, explanation: 'RFI（Request For Information）は、RFP作成に先立ちベンダから情報を収集するために発行する文書です。', difficulty: 'basic' },
        { id: 'fe-req-q8', question: 'EAのデータアーキテクチャで用いられる代表的な手法はどれか。', options: ['DFD（データフローダイアグラム）', 'E-R図（実体関連図）', 'ガントチャート', 'PERT図'], correctIndex: 1, explanation: 'データアーキテクチャではE-R図を用いてデータの構造や関連を整理します。DFDはアプリケーションアーキテクチャで使用されます。', difficulty: 'standard' },
        { id: 'fe-req-q9', question: 'システム化構想の立案とシステム化計画の立案を行うプロセスはどれか。', options: ['要件定義プロセス', '企画プロセス', '開発プロセス', '運用プロセス'], correctIndex: 1, explanation: '企画プロセスでは、経営課題に基づくシステム化構想と、具体的な開発計画であるシステム化計画を立案します。', difficulty: 'basic' },
        { id: 'fe-req-q10', question: 'グリーン購入の説明として最も適切なものはどれか。', options: ['最も安価な製品を優先的に購入すること', '国産の製品やサービスを優先的に調達すること', '環境負荷の少ない製品やサービスを優先的に購入すること', '最新技術を用いた製品を優先的に導入すること'], correctIndex: 2, explanation: 'グリーン購入は、環境への負荷が少ない製品・サービスを積極的に選択する調達方針で、グリーン購入法に基づいています。', difficulty: 'basic' },
        { id: 'fe-req-q11', question: 'CIOの役割として最も適切なものはどれか。', options: ['会計・財務の最高責任者', '経営戦略に基づくIT戦略の策定・推進を統括する', '技術研究開発を統括する', '人事・労務管理の最高責任者'], correctIndex: 1, explanation: 'CIO（Chief Information Officer）は最高情報責任者として、経営戦略に沿ったIT戦略の策定と推進を統括します。', difficulty: 'basic' },
        { id: 'fe-req-q12', question: 'EAのギャップ分析の説明として正しいものはどれか。', options: ['組織間のコミュニケーション差を分析する', 'As-IsモデルとTo-Beモデルの差異を分析し改善計画を策定する', '売上と費用のギャップを分析する', 'テスト結果と要件の差異を分析する'], correctIndex: 1, explanation: 'ギャップ分析は現状（As-Is）と理想（To-Be）の差異を明らかにし、段階的な改善計画を策定するものです。', difficulty: 'standard' },
        { id: 'fe-req-q13', question: '共通フレーム（SLCP）の主な目的はどれか。', options: ['プログラミング言語を統一すること', '発注者と受注者の間で作業内容・役割分担を明確化すること', 'セキュリティ対策を標準化すること', 'データベースの設計を統一すること'], correctIndex: 1, explanation: '共通フレームの目的は、発注者と受注者が共通の用語・枠組みで意思疎通を行い、認識のずれを防ぐことです。', difficulty: 'standard' },
        { id: 'fe-req-q14', question: '業務要件定義で行う活動はどれか。', options: ['画面レイアウトの設計', '業務フローの明確化', 'プログラムのコーディング', 'テストケースの作成'], correctIndex: 1, explanation: '業務要件定義では業務の流れ（業務フロー）を明確にし、システム化すべき範囲を決定します。', difficulty: 'standard' },
        { id: 'fe-req-q15', question: 'NDA（秘密保持契約）を締結する主な目的はどれか。', options: ['開発費用を確定させるため', '機密情報の第三者への漏洩を防止するため', 'サービスレベルを合意するため', '開発スケジュールを約束するため'], correctIndex: 1, explanation: 'NDA（Non-Disclosure Agreement）は取引先との間で機密情報を第三者に開示しないことを約束する契約です。', difficulty: 'basic' },
        { id: 'fe-req-q16', question: 'システム化計画で策定する内容に含まれないものはどれか。', options: ['開発範囲', 'スケジュール', '費用', 'ソースコード'], correctIndex: 3, explanation: 'システム化計画では開発範囲・スケジュール・費用を計画しますが、ソースコードは実装工程で作成するものです。', difficulty: 'basic' },
        { id: 'fe-req-q17', question: 'EAの4つのアーキテクチャのうち、業務プロセスの構造を対象とするものはどれか。', options: ['データアーキテクチャ', 'アプリケーションアーキテクチャ', 'ビジネスアーキテクチャ', 'テクノロジアーキテクチャ'], correctIndex: 2, explanation: 'ビジネスアーキテクチャは組織の業務プロセスの構造を対象とし、業務の流れを体系化します。', difficulty: 'standard' },
        { id: 'fe-req-q18', question: 'システム管理基準を策定した組織はどれか。', options: ['総務省', '経済産業省', '文部科学省', '内閣府'], correctIndex: 1, explanation: 'システム管理基準は経済産業省が策定した情報システムの管理に関するガイドラインです。', difficulty: 'standard' },
        { id: 'fe-req-q19', question: '可用性99.9%はどの種類の要件に分類されるか。', options: ['機能要件', '非機能要件', '業務要件', '調達要件'], correctIndex: 1, explanation: '可用性は性能・信頼性に関する品質要件であり、非機能要件に分類されます。', difficulty: 'standard' },
        { id: 'fe-req-q20', question: '調達における提案書の評価方法として最も適切なものはどれか。', options: ['最も安価な提案を自動的に採用する', '先着順で最初に提出されたものを採用する', 'RFPに記載した評価基準に基づいて客観的に評価する', 'ベンダの知名度だけで判断する'], correctIndex: 2, explanation: 'RFPに記載された評価基準（技術力・実績・コスト・体制など）に基づいて客観的に複数の提案を比較評価します。', difficulty: 'advanced' },
      ],
    },
  },
};
