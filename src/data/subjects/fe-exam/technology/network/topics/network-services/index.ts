import type { Topic } from '../../../../../../types';

export const networkServices: Topic = {
  id: 'fe-network-services',
  eraId: 'fe-network',
  name: 'ネットワーク応用',
  subtitle: 'メール・Web・クラウド・ネットワーク機器',
  icon: '🖧',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'ネットワーク機器',
          content:
            'ネットワーク機器はOSI参照モデルの各層で動作します。リピータ（第1層・物理層）は電気信号を増幅・中継して伝送距離を延長します。ブリッジ（第2層・データリンク層）はMACアドレスを基にフレームを中継・フィルタリングし、コリジョンドメインを分割します。スイッチングハブ（L2スイッチ）もデータリンク層で動作し、ブリッジの高性能版です。ルータ（第3層・ネットワーク層）はIPアドレスを基にパケットを転送し、異なるネットワーク間を接続します。レイヤ3スイッチ（L3スイッチ）はルータ機能をハードウェアで実現した高速スイッチです。ゲートウェイ（第4層以上）は異なるプロトコルのネットワーク間を接続し、プロトコル変換を行います。ロードバランサ（負荷分散装置）は複数のサーバにアクセスを分散し、システムの可用性と応答速度を向上させます。',
          keyPoints: [
            'リピータ（L1）: 信号を増幅・中継',
            'ブリッジ/L2スイッチ（L2）: MACアドレスでフレームを転送',
            'ルータ/L3スイッチ（L3）: IPアドレスでパケットをルーティング',
            'ゲートウェイ（L4以上）: 異なるプロトコル間を変換・接続',
            'ロードバランサ: 複数サーバへのアクセスを分散',
          ],
        },
        {
          title: '電子メールの仕組みとセキュリティ',
          content:
            '電子メールの送信にはSMTP（Simple Mail Transfer Protocol、ポート25）が使われます。受信にはPOP3（Post Office Protocol version 3、ポート110）とIMAP4（Internet Message Access Protocol version 4、ポート143）があります。POP3はサーバからメールをダウンロードする方式、IMAP4はサーバ上でメールを管理する方式です。メールのセキュリティ対策として、S/MIME（Secure/MIME）はデジタル署名と暗号化により、メールの改ざん防止・送信者確認・盗聴防止を実現します。SPF（Sender Policy Framework）は送信元のIPアドレスをDNSで検証し、なりすましメールを検出します。DKIM（DomainKeys Identified Mail）は送信者がメールに電子署名を付与し、受信側がDNSで公開鍵を取得して署名を検証する方式です。DMARC（Domain-based Message Authentication, Reporting and Conformance）はSPFとDKIMの認証結果に基づき、認証に失敗したメールの処理方法を送信者が指定できる仕組みです。',
          keyPoints: [
            'SMTP（25）: メール送信プロトコル',
            'POP3（110）: メール受信（サーバからダウンロード）',
            'IMAP4（143）: メール受信（サーバ上で管理、複数端末対応）',
            'S/MIME: メールの暗号化とデジタル署名',
            'SPF: 送信元IPアドレスをDNSで検証（なりすまし防止）',
            'DKIM: メールに電子署名を付与して改ざんを検出',
          ],
        },
        {
          title: 'Web技術',
          content:
            'HTTP（HyperText Transfer Protocol）はWebサーバとブラウザ間の通信プロトコルです。HTTPS（HTTP over SSL/TLS）はHTTPにSSL/TLSによる暗号化を加えたもので、通信内容の盗聴・改ざん・なりすましを防ぎます。HTTPはステートレス（状態を保持しない）プロトコルのため、Cookie（クッキー）を使ってセッション管理を行います。Cookieはサーバがブラウザに送る小さなデータで、ログイン状態の維持やショッピングカートの管理などに使われます。URLフィルタリングは、業務に関係のないWebサイトや有害サイトへのアクセスを制限する技術です。ブラックリスト方式（指定サイトをブロック）とホワイトリスト方式（許可サイトのみアクセス可能）があります。プロキシサーバはクライアントの代理としてWebサーバにアクセスし、キャッシュによる高速化やアクセスログの管理、フィルタリングを行います。',
          keyPoints: [
            'HTTP: Web通信プロトコル / HTTPS: 暗号化されたHTTP',
            'Cookie: ステートレスなHTTPでセッション管理を実現',
            'URLフィルタリング: 不適切なWebサイトへのアクセスを制限',
            'プロキシサーバ: 代理アクセス、キャッシュ、アクセスログ管理',
          ],
        },
        {
          title: 'クラウドサービス',
          content:
            'クラウドサービスは、インターネット経由でコンピュータ資源を提供するサービスです。提供範囲により3つに分類されます。SaaS（Software as a Service）はソフトウェアをサービスとして提供するもので、Gmail、Microsoft 365、Salesforceなどが例です。利用者はソフトウェアを利用するだけで、インフラやプラットフォームの管理は不要です。PaaS（Platform as a Service）はアプリケーションの開発・実行環境を提供するもので、Google App Engine、Heroku、AWS Elastic Beanstalkなどが例です。利用者はアプリケーションの開発に集中でき、OSやミドルウェアの管理は不要です。IaaS（Infrastructure as a Service）はサーバ、ストレージ、ネットワークなどのインフラを仮想的に提供するもので、AWS EC2、Google Compute Engine、Microsoft Azureなどが例です。利用者はOSやミドルウェアの選択・管理も行います。管理範囲は SaaS < PaaS < IaaS の順に広くなります。',
          keyPoints: [
            'SaaS: ソフトウェアを提供（Gmail、Office 365等）、管理不要',
            'PaaS: 開発・実行環境を提供（GAE、Heroku等）、OSの管理不要',
            'IaaS: インフラを提供（AWS EC2等）、OS以上は利用者が管理',
            '利用者の管理範囲: SaaS（最小）< PaaS < IaaS（最大）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-ns2-fc1', front: 'ルータ（第3層・ネットワーク層）', back: 'IPアドレスを基にパケットを転送し、異なるネットワークを接続する機器は？', explanation: 'ルータはOSI第3層で動作し、IPアドレスを見て最適な経路にパケットを転送します。', difficulty: 'basic' },
      { id: 'fe-ns2-fc2', front: 'ブリッジ/L2スイッチ（第2層・データリンク層）', back: 'MACアドレスを基にフレームを中継・フィルタリングする機器は？', explanation: 'データリンク層で動作し、MACアドレステーブルに基づいて適切なポートにフレームを転送します。', difficulty: 'basic' },
      { id: 'fe-ns2-fc3', front: 'ゲートウェイ（第4層以上）', back: '異なるプロトコルのネットワーク間を接続し、プロトコル変換を行う機器は？', explanation: 'ゲートウェイはOSI第4層以上で動作し、異なるプロトコル体系間の通信を可能にします。', difficulty: 'standard' },
      { id: 'fe-ns2-fc4', front: 'S/MIME', back: '電子メールの暗号化とデジタル署名を実現する規格は？', explanation: 'Secure/MIMEの略。公開鍵暗号を使い、メールの機密性・完全性・送信者認証を実現します。', difficulty: 'standard' },
      { id: 'fe-ns2-fc5', front: 'SPF', back: '送信元のIPアドレスをDNSで検証して、なりすましメールを検出する仕組みは？', explanation: 'Sender Policy Framework。ドメインの管理者がDNSにメール送信を許可するIPアドレスを登録します。', difficulty: 'standard' },
      { id: 'fe-ns2-fc6', front: 'Cookie', back: 'ステートレスなHTTPでセッション管理を実現するために使われるデータは？', explanation: 'サーバがブラウザに送る小さなデータで、ログイン状態の維持やカート管理などに使われます。', difficulty: 'basic' },
      { id: 'fe-ns2-fc7', front: 'SaaS（Software as a Service）', back: 'Gmail やOffice 365のように、ソフトウェアをサービスとして提供するクラウドの形態は？', explanation: '利用者はアプリケーションを使うだけで、インフラやOSの管理は不要です。', difficulty: 'basic' },
      { id: 'fe-ns2-fc8', front: 'IaaS（Infrastructure as a Service）', back: 'サーバやストレージなどのインフラを仮想的に提供するクラウドの形態は？', explanation: 'AWS EC2などが例で、利用者はOSやミドルウェアの選択・管理も行います。管理範囲が最も広いです。', difficulty: 'basic' },
      { id: 'fe-ns2-fc9', front: 'ロードバランサ（負荷分散装置）', back: '複数のサーバにアクセスを分散して可用性と応答速度を向上させる装置は？', explanation: 'ラウンドロビンや最少接続数など様々なアルゴリズムでトラフィックを分散します。', difficulty: 'standard' },
      { id: 'fe-ns2-fc10', front: 'DKIM', back: 'メールに電子署名を付与し、受信側がDNSの公開鍵で検証するなりすまし対策は？', explanation: 'DomainKeys Identified Mailの略。送信者のドメインの正当性とメールの改ざんを検出できます。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-ns2-q1',
          question: 'OSI参照モデルの第3層（ネットワーク層）で動作し、IPアドレスを基にパケットを転送する機器はどれか。',
          options: ['リピータ', 'ブリッジ', 'ルータ', 'ゲートウェイ'],
          correctIndex: 2,
          explanation: 'ルータは第3層（ネットワーク層）で動作し、IPアドレスを基にパケットの最適な転送先を決定します。リピータは第1層、ブリッジは第2層、ゲートウェイは第4層以上で動作します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ns2-q2',
          question: '電子メールの送信に使われるプロトコルはどれか。',
          options: ['POP3', 'IMAP4', 'SMTP', 'SNMP'],
          correctIndex: 2,
          explanation: 'SMTP（Simple Mail Transfer Protocol）はメール送信用のプロトコルです。POP3とIMAP4はメール受信用、SNMPはネットワーク管理用のプロトコルです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ns2-q3',
          question: 'S/MIMEの機能として、適切でないものはどれか。',
          options: [
            'メールの暗号化',
            'デジタル署名による送信者の確認',
            'メールの改ざん検出',
            '送信元IPアドレスの検証',
          ],
          correctIndex: 3,
          explanation: 'S/MIMEはメールの暗号化、デジタル署名（送信者確認・改ざん検出）を実現する規格です。送信元IPアドレスの検証はSPFの機能です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ns2-q4',
          question: 'HTTPがステートレスであることを補い、ログイン状態の維持などに使われる仕組みはどれか。',
          options: ['プロキシ', 'Cookie', 'キャッシュ', 'URLフィルタリング'],
          correctIndex: 1,
          explanation: 'Cookie（クッキー）はサーバがブラウザに送る小さなデータで、セッションIDを保持することでログイン状態の維持やショッピングカートの管理を実現します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ns2-q5',
          question: 'クラウドサービスにおいて、利用者の管理範囲が最も広いものはどれか。',
          options: ['SaaS', 'PaaS', 'IaaS', 'どれも同じ'],
          correctIndex: 2,
          explanation: 'IaaS（Infrastructure as a Service）はインフラのみ提供されるため、OS・ミドルウェア・アプリケーションの管理は利用者が行います。PaaSはアプリのみ、SaaSは管理不要です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-ns2-q6',
          question: '異なるプロトコルのネットワーク間を接続し、プロトコル変換を行う機器はどれか。',
          options: ['ルータ', 'ブリッジ', 'リピータ', 'ゲートウェイ'],
          correctIndex: 3,
          explanation: 'ゲートウェイはOSI参照モデルの第4層以上で動作し、異なるプロトコル体系のネットワークを接続してプロトコル変換を行います。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ns2-q7',
          question: 'SPF（Sender Policy Framework）の説明として、適切なものはどれか。',
          options: [
            'メールを暗号化して盗聴を防止する',
            'メールに電子署名を付与して改ざんを検出する',
            '送信元のIPアドレスをDNSで検証してなりすましを検出する',
            'メールサーバ間の通信をSSL/TLSで暗号化する',
          ],
          correctIndex: 2,
          explanation: 'SPFはドメインの管理者がDNSに正当な送信元IPアドレスを登録し、受信側がそれを検証することでメールのなりすましを検出する仕組みです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-ns2-q8',
          question: 'PaaS（Platform as a Service）の説明として、適切なものはどれか。',
          options: [
            'ソフトウェアをサービスとして提供し、利用者は設定のみ行う',
            'アプリケーションの開発・実行環境を提供し、利用者はアプリ開発に集中できる',
            'サーバやストレージなどのインフラを仮想的に提供する',
            'ネットワーク回線のみを提供するサービスである',
          ],
          correctIndex: 1,
          explanation: 'PaaSはアプリケーションの開発・実行環境（OS、ミドルウェア、データベースなど）を提供するサービスです。利用者はOSやミドルウェアの管理不要で、アプリケーション開発に集中できます。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
