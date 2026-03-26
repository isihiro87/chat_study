import type { Topic } from '../../../../../../types';

export const isStrategy: Topic = {
  id: 'fe-is-strategy',
  eraId: 'fe-system-strategy',
  name: '情報システム戦略',
  subtitle: 'IS戦略・業務プロセス・SoR/SoE',
  icon: '📊',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '情報システム戦略とは',
          content:
            '情報システム戦略（IS戦略）とは、経営戦略に基づいてITをどのように活用するかを定めた方針です。経営目標の達成に向けて、どの業務にどのようなシステムを導入するかを計画します。全体最適化計画では、個別システムの乱立を防ぎ、企業全体で整合性のとれたIT投資を実現します。',
          keyPoints: [
            '経営戦略に基づくIT活用方針',
            '全体最適化計画で企業全体の整合性を確保',
            'エンタープライズアーキテクチャ（EA）で業務・データ・技術を整理',
          ],
        },
        {
          title: '業務プロセスの改善',
          content:
            'BPR（Business Process Reengineering）は業務プロセスを根本的に見直し、抜本的に再設計する手法です。一方、BPM（Business Process Management）は業務プロセスを継続的にモニタリングし、段階的に改善していく手法です。BPRが「壊して作り直す」のに対し、BPMは「PDCAで回し続ける」イメージです。',
          keyPoints: [
            'BPR: 業務プロセスの抜本的な再設計',
            'BPM: 業務プロセスの継続的な改善・管理',
            'BPRは一度きりの改革、BPMは継続的な改善',
          ],
        },
        {
          title: 'ソリューションビジネス',
          content:
            'ソリューションビジネスとは、顧客の経営課題をITで解決するサービスです。SaaS（Software as a Service）はインターネット経由でソフトウェアを提供する形態で、利用者はインストール不要です。ASP（Application Service Provider）はアプリケーションをネットワーク経由で提供する事業者です。SOA（Service Oriented Architecture）はシステムの機能をサービスとして部品化し、組み合わせてシステムを構築する設計思想です。',
          keyPoints: [
            'SaaS: ネット経由でソフトウェアを提供',
            'ASP: アプリケーションをネットワーク経由で提供する事業者',
            'SOA: 機能をサービスとして部品化し組み合わせる設計思想',
          ],
        },
        {
          title: 'SoR/SoE',
          content:
            'SoR（System of Record）は記録のためのシステムで、基幹系システム（会計・人事・在庫管理など）が該当します。正確性・信頼性が重要で、安定稼働が求められます。SoE（System of Engagement）は顧客との関係構築を目的としたシステムで、ECサイトやSNS連携、モバイルアプリなどが該当します。スピードと柔軟性が重要で、アジャイル開発と相性が良いです。',
          keyPoints: [
            'SoR: 記録のためのシステム（基幹系）。正確性・安定性重視',
            'SoE: 顧客との関係構築システム。スピード・柔軟性重視',
            'SoRはウォーターフォール、SoEはアジャイルと相性が良い',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-is-strategy-fc1', front: '経営戦略に基づいてITをどのように活用するかを定めた方針', back: '情報システム戦略（IS戦略）とは？', explanation: '経営目標達成に向けて、業務にどのようなシステムを導入するかを計画します。', difficulty: 'basic' },
      { id: 'fe-is-strategy-fc2', front: '業務プロセスを根本的に見直し、抜本的に再設計する手法', back: 'BPR（Business Process Reengineering）とは？', explanation: '既存の業務のやり方を白紙から見直し、効率化・最適化を図ります。', difficulty: 'basic' },
      { id: 'fe-is-strategy-fc3', front: '業務プロセスを継続的にモニタリングし改善する手法', back: 'BPM（Business Process Management）とは？', explanation: 'PDCAサイクルで業務プロセスを段階的に改善し続けます。', difficulty: 'basic' },
      { id: 'fe-is-strategy-fc4', front: 'インターネット経由でソフトウェアを提供するサービス形態', back: 'SaaS（Software as a Service）とは？', explanation: '利用者はブラウザなどからアクセスするだけで、インストール不要です。', difficulty: 'basic' },
      { id: 'fe-is-strategy-fc5', front: '機能をサービスとして部品化し組み合わせる設計思想', back: 'SOA（Service Oriented Architecture）とは？', explanation: 'システムを独立したサービスの組み合わせとして構築します。', difficulty: 'standard' },
      { id: 'fe-is-strategy-fc6', front: '記録のためのシステム（基幹系）', back: 'SoR（System of Record）とは？', explanation: '会計・人事・在庫管理など、正確性と安定稼働が求められるシステムです。', difficulty: 'standard' },
      { id: 'fe-is-strategy-fc7', front: '顧客との関係構築を目的としたシステム', back: 'SoE（System of Engagement）とは？', explanation: 'ECサイト・SNS連携・モバイルアプリなど、スピードと柔軟性が重要です。', difficulty: 'standard' },
      { id: 'fe-is-strategy-fc8', front: '業務・データ・技術を体系的に整理する手法', back: 'エンタープライズアーキテクチャ（EA）とは？', explanation: '政策・業務・データ・適用処理・技術の4つの体系で企業全体を整理します。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-is-strategy-q1',
          question: '業務プロセスを根本的に見直し、抜本的に再設計することで業務の効率化を図る手法はどれか。',
          options: ['BPM', 'BPR', 'SCM', 'ERP'],
          correctIndex: 1,
          explanation: 'BPR（Business Process Reengineering）は業務プロセスを根本的に見直し、再設計する手法です。BPMは継続的改善、SCMは供給連鎖管理、ERPは統合基幹業務パッケージです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-is-strategy-q2',
          question: 'インターネット経由でソフトウェアの機能を提供し、利用者がインストールなしで利用できるサービス形態はどれか。',
          options: ['SOA', 'SaaS', 'BPR', 'ERP'],
          correctIndex: 1,
          explanation: 'SaaS（Software as a Service）はインターネット経由でソフトウェアを提供する形態です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-is-strategy-q3',
          question: '会計や在庫管理など、正確な記録を目的とした基幹系システムを指す用語はどれか。',
          options: ['SoE', 'SoR', 'SaaS', 'SOA'],
          correctIndex: 1,
          explanation: 'SoR（System of Record）は記録のためのシステムで、基幹系が該当します。SoEは顧客との関係構築システムです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-is-strategy-q4',
          question: 'システムの機能をサービスとして部品化し、それらを組み合わせてシステムを構築する設計思想はどれか。',
          options: ['BPR', 'ERP', 'SOA', 'CRM'],
          correctIndex: 2,
          explanation: 'SOA（Service Oriented Architecture）は機能をサービスとして部品化し、組み合わせて構築する設計思想です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-is-strategy-q5',
          question: '業務プロセスを継続的にモニタリングし、PDCAサイクルで段階的に改善していく手法はどれか。',
          options: ['BPR', 'BPM', 'BSC', 'BCM'],
          correctIndex: 1,
          explanation: 'BPM（Business Process Management）は業務プロセスの継続的な改善・管理手法です。BPRは抜本的な再設計です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-is-strategy-q6',
          question: 'エンタープライズアーキテクチャ（EA）を説明したものはどれか。',
          options: [
            '業務プロセスを根本的に見直す手法',
            '組織全体の業務・データ・技術を体系的に整理するフレームワーク',
            '顧客との関係を管理するシステム',
            'ソフトウェアをインターネット経由で提供する形態',
          ],
          correctIndex: 1,
          explanation: 'EAは業務体系・データ体系・適用処理体系・技術体系の4つで企業全体のITを整理するフレームワークです。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
