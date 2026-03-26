import type { Topic } from '../../../../../../types';

export const protocol: Topic = {
  id: 'fe-protocol',
  eraId: 'fe-network',
  name: '通信プロトコル',
  subtitle: 'OSI参照モデル・TCP/IP・主要プロトコル',
  icon: '🔗',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'OSI基本参照モデル',
          content:
            'OSI基本参照モデルは、ネットワーク通信を7つの階層（レイヤ）に分けて標準化した概念モデルです。上位層から順に、第7層アプリケーション層（ユーザーに直接サービスを提供）、第6層プレゼンテーション層（データ形式の変換・暗号化）、第5層セション層（通信の開始・終了の管理）、第4層トランスポート層（エンドツーエンドの信頼性確保）、第3層ネットワーク層（経路制御・IPアドレスによるルーティング）、第2層データリンク層（同一ネットワーク内の通信・MACアドレス）、第1層物理層（電気信号・ケーブル・コネクタ）です。覚え方は「ア・プ・セ・ト・ネ・デ・ブ」です。各層は独立しており、上位層は下位層のサービスを利用します。',
          keyPoints: [
            '第7層: アプリケーション層（HTTP, FTP, SMTPなど）',
            '第6層: プレゼンテーション層（データ形式変換、暗号化）',
            '第5層: セション層（通信の開始・終了管理）',
            '第4層: トランスポート層（TCP, UDP）',
            '第3層: ネットワーク層（IP, ルーティング）',
            '第2層: データリンク層（MACアドレス、イーサネット）',
            '第1層: 物理層（電気信号、ケーブル）',
            '覚え方: ア・プ・セ・ト・ネ・デ・ブ',
          ],
        },
        {
          title: 'TCP/IPモデル',
          content:
            'TCP/IPはインターネットで実際に使われているプロトコル体系で、OSIの7層を4層に簡略化したモデルです。第4層アプリケーション層（OSIの第5〜7層に対応、HTTP/FTP/SMTP等）、第3層トランスポート層（OSIの第4層に対応、TCP/UDP）、第2層インターネット層（OSIの第3層に対応、IP/ICMP/ARP）、第1層ネットワークインタフェース層（OSIの第1〜2層に対応、イーサネット等）で構成されます。データは送信時に上位層から下位層へヘッダが付加され（カプセル化）、受信時に下位層から上位層へヘッダが除去されます（非カプセル化）。',
          keyPoints: [
            'TCP/IP: インターネットの標準プロトコル体系（4層モデル）',
            'アプリケーション層: HTTP, FTP, SMTP, DNS等',
            'トランスポート層: TCP（信頼性）, UDP（速度）',
            'インターネット層: IP, ICMP, ARP',
            'ネットワークインタフェース層: イーサネット, Wi-Fi等',
            'カプセル化: 送信時に各層でヘッダを付加',
          ],
        },
        {
          title: 'アプリケーション層の主要プロトコル',
          content:
            'HTTP（HyperText Transfer Protocol）はWebページの転送に使うプロトコルで、ポート番号80を使用します。HTTPS（ポート443）はHTTPにSSL/TLSによる暗号化を加えたものです。FTP（File Transfer Protocol）はファイル転送プロトコルで、制御用（ポート21）とデータ転送用（ポート20）の2つのコネクションを使います。TELNET（ポート23）はリモートログインプロトコルですが、通信が暗号化されないためSSH（ポート22）が推奨されます。SNMP（Simple Network Management Protocol）はネットワーク機器を管理・監視するプロトコルです。NTP（Network Time Protocol）はネットワーク上のコンピュータの時刻を同期するプロトコルです。SMTP（ポート25）はメール送信、POP3（ポート110）はメール受信（サーバからダウンロード）、IMAP4（ポート143）はメール受信（サーバ上で管理）のプロトコルです。',
          keyPoints: [
            'HTTP（80）: Web通信 / HTTPS（443）: 暗号化Web通信',
            'FTP（20/21）: ファイル転送（2つのコネクション使用）',
            'SSH（22）: 暗号化リモートログイン（TELNETの代替）',
            'SMTP（25）: メール送信 / POP3（110）: メール受信',
            'IMAP4（143）: メールをサーバ上で管理',
            'SNMP: ネットワーク機器の管理・監視',
            'NTP: 時刻同期',
          ],
        },
        {
          title: 'トランスポート層（TCPとUDP）',
          content:
            'TCP（Transmission Control Protocol）はコネクション型の信頼性の高いプロトコルです。3ウェイハンドシェイク（SYN→SYN+ACK→ACK）で接続を確立し、データの到達確認、順序制御、再送制御を行います。ウィンドウ制御により効率的なデータ転送を実現します。Webブラウジングやメール送受信など、データの欠落が許されない通信に使われます。UDP（User Datagram Protocol）はコネクションレス型で、接続確立の手順がなく高速です。到達確認や再送制御を行わないため信頼性は低いですが、リアルタイム性が重要な動画ストリーミング、IP電話（VoIP）、DNSの名前解決などに使われます。ポート番号は0〜65535の範囲で、0〜1023はウェルノウンポート（既知のサービス用）として予約されています。',
          keyPoints: [
            'TCP: コネクション型、信頼性重視（3ウェイハンドシェイクで接続確立）',
            'TCP: 到達確認・順序制御・再送制御・ウィンドウ制御',
            'UDP: コネクションレス型、リアルタイム性重視（高速だが信頼性低い）',
            'UDP用途: 動画配信、IP電話、DNS名前解決',
            'ポート番号: 0〜65535（0〜1023はウェルノウンポート）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-pr-fc1', front: '7層（ア・プ・セ・ト・ネ・デ・ブ）', back: 'OSI基本参照モデルは何層で構成される？', explanation: 'アプリケーション・プレゼンテーション・セション・トランスポート・ネットワーク・データリンク・物理の7層です。', difficulty: 'basic' },
      { id: 'fe-pr-fc2', front: 'トランスポート層（第4層）', back: 'OSI参照モデルでTCPやUDPが動作する層は？', explanation: 'トランスポート層はエンドツーエンドの信頼性確保を担当し、TCPとUDPが代表的なプロトコルです。', difficulty: 'basic' },
      { id: 'fe-pr-fc3', front: 'ネットワーク層（第3層）', back: 'OSI参照モデルでIPアドレスによるルーティングを行う層は？', explanation: 'ネットワーク層は異なるネットワーク間の通信経路を決定します。IPプロトコルが代表例です。', difficulty: 'basic' },
      { id: 'fe-pr-fc4', front: '4層', back: 'TCP/IPモデルは何層で構成される？', explanation: 'アプリケーション層、トランスポート層、インターネット層、ネットワークインタフェース層の4層です。', difficulty: 'basic' },
      { id: 'fe-pr-fc5', front: '3ウェイハンドシェイク', back: 'TCPで接続を確立するための手順を何という？', explanation: 'SYN→SYN+ACK→ACKの3回のやり取りで接続を確立します。', difficulty: 'basic' },
      { id: 'fe-pr-fc6', front: 'UDP', back: 'コネクションレス型で、動画配信やIP電話に適したプロトコルは？', explanation: 'UDPは接続確立や到達確認を行わないため高速で、リアルタイム通信に適しています。', difficulty: 'basic' },
      { id: 'fe-pr-fc7', front: 'HTTP: 80、HTTPS: 443', back: 'HTTPとHTTPSのウェルノウンポート番号は？', explanation: 'HTTPはポート80、HTTPS（暗号化）はポート443を使用します。', difficulty: 'standard' },
      { id: 'fe-pr-fc8', front: 'FTP（ポート20/21）', back: 'ファイル転送に使われ、制御用とデータ転送用の2つのコネクションを使うプロトコルは？', explanation: 'FTPはポート21で制御、ポート20でデータ転送を行います。', difficulty: 'standard' },
      { id: 'fe-pr-fc9', front: 'SMTP: 送信、POP3: 受信（ダウンロード）、IMAP4: 受信（サーバ管理）', back: '電子メールの送信・受信に使われる3つのプロトコルは？', explanation: 'SMTPでメール送信、POP3/IMAP4でメール受信。IMAP4はサーバ上でメールを管理できます。', difficulty: 'standard' },
      { id: 'fe-pr-fc10', front: 'SNMP', back: 'ネットワーク機器の管理・監視に使われるプロトコルは？', explanation: 'Simple Network Management Protocolの略。ルータやスイッチの状態を監視・管理します。', difficulty: 'standard' },
      { id: 'fe-pr-fc11', front: 'カプセル化', back: '送信時に各層でヘッダを付加していくことを何という？', explanation: 'データは上位層から下位層へ渡される際にヘッダが付加（カプセル化）されます。受信時は逆に除去されます。', difficulty: 'standard' },
      { id: 'fe-pr-fc12', front: 'SSH（ポート22）', back: 'TELNETの代わりに使われる暗号化されたリモートログインプロトコルは？', explanation: 'TELNETは通信が平文のため、SSHで暗号化してリモートログインするのが一般的です。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-pr-q1',
          question: 'OSI基本参照モデルの第3層（ネットワーク層）の役割として、適切なものはどれか。',
          options: [
            'データ形式の変換や暗号化を行う',
            '異なるネットワーク間の経路制御（ルーティング）を行う',
            'エンドツーエンドの信頼性を確保する',
            '同一ネットワーク内でMACアドレスを用いて通信する',
          ],
          correctIndex: 1,
          explanation: 'ネットワーク層（第3層）はIPアドレスを用いて異なるネットワーク間の経路制御（ルーティング）を行います。データ形式変換はプレゼンテーション層、信頼性確保はトランスポート層、MACアドレスはデータリンク層の役割です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pr-q2',
          question: 'TCP/IPモデルにおいて、OSI基本参照モデルの第5層〜第7層に対応する層はどれか。',
          options: ['ネットワークインタフェース層', 'インターネット層', 'トランスポート層', 'アプリケーション層'],
          correctIndex: 3,
          explanation: 'TCP/IPモデルのアプリケーション層は、OSIモデルのセション層（第5層）・プレゼンテーション層（第6層）・アプリケーション層（第7層）の機能をまとめて担当します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pr-q3',
          question: 'TCPの3ウェイハンドシェイクの手順として、正しいものはどれか。',
          options: [
            'ACK → SYN → SYN+ACK',
            'SYN → SYN+ACK → ACK',
            'SYN → ACK → SYN+ACK',
            'SYN+ACK → SYN → ACK',
          ],
          correctIndex: 1,
          explanation: 'TCPの3ウェイハンドシェイクは、クライアントがSYNを送信→サーバがSYN+ACKを返信→クライアントがACKを送信、の順で接続を確立します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pr-q4',
          question: 'UDPの特徴として、適切なものはどれか。',
          options: [
            '3ウェイハンドシェイクで接続を確立する',
            'データの到達確認と再送制御を行う',
            'コネクションレス型で、リアルタイム通信に適している',
            'ウィンドウ制御により効率的にデータを転送する',
          ],
          correctIndex: 2,
          explanation: 'UDPはコネクションレス型プロトコルで、接続確立や到達確認を行わないため高速です。動画配信やIP電話など、リアルタイム性が求められる通信に適しています。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pr-q5',
          question: 'FTPの特徴として、適切なものはどれか。',
          options: [
            'ポート80を使用してファイルを転送する',
            '制御用とデータ転送用の2つのコネクションを使用する',
            '暗号化された安全なファイル転送を標準で提供する',
            'メールの添付ファイルを転送するプロトコルである',
          ],
          correctIndex: 1,
          explanation: 'FTPはポート21（制御用）とポート20（データ転送用）の2つのコネクションを使用します。標準では暗号化されないため、安全なファイル転送にはSFTPやFTPSを使用します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pr-q6',
          question: 'ウェルノウンポート番号の範囲として、正しいものはどれか。',
          options: ['0〜255', '0〜1023', '0〜4095', '0〜65535'],
          correctIndex: 1,
          explanation: 'ウェルノウンポート番号は0〜1023の範囲で、HTTP（80）、HTTPS（443）、FTP（20/21）、SMTP（25）など既知のサービスに割り当てられています。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pr-q7',
          question: '電子メールの受信に使われ、メールをサーバ上で管理できるプロトコルはどれか。',
          options: ['SMTP', 'POP3', 'IMAP4', 'SNMP'],
          correctIndex: 2,
          explanation: 'IMAP4はメールをサーバ上で管理でき、複数の端末からメールを閲覧できます。POP3はメールをダウンロードする方式で、SMTPはメール送信用、SNMPはネットワーク管理用です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pr-q8',
          question: 'OSI基本参照モデルにおいて、データの暗号化や文字コードの変換を行う層はどれか。',
          options: ['アプリケーション層', 'プレゼンテーション層', 'セション層', 'トランスポート層'],
          correctIndex: 1,
          explanation: 'プレゼンテーション層（第6層）はデータの表現形式の変換（文字コード変換、データ圧縮、暗号化・復号など）を担当します。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
