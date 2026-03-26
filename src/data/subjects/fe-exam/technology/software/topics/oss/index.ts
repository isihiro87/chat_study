import type { Topic } from '../../../../../../types';

export const oss: Topic = {
  id: 'fe-oss',
  eraId: 'fe-software',
  name: 'オープンソースソフトウェア',
  subtitle: 'OSSライセンス・代表的なOSS',
  icon: '🌐',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: 'OSSの定義',
          content:
            'オープンソースソフトウェア（OSS）とは、ソースコードが公開され、誰でも自由に利用・改変・再配布できるソフトウェアです。OSI（Open Source Initiative）が定めたオープンソースの定義では、ソースコードの公開、自由な再配布、派生物の作成許可、差別の禁止などが要件とされています。OSSは無料で利用できることが多いですが、「オープンソース＝無料」ではなく、ソースコードの公開と利用の自由が本質です。OSSを活用することで開発コストの削減、技術の透明性の確保、コミュニティによる品質向上が期待できます。',
          keyPoints: [
            'ソースコードが公開されている',
            '自由に利用・改変・再配布が可能',
            'オープンソース ≠ 無料（本質はソースコードの公開と自由）',
            'コミュニティによる開発・品質向上が特徴',
          ],
        },
        {
          title: 'OSSライセンス',
          content:
            'OSSにはさまざまなライセンスがあり、利用条件が異なります。GPL（GNU General Public License）は代表的なコピーレフト型ライセンスで、GPLのソフトウェアを改変・再配布する場合、その派生物もGPLにしなければなりません。LGPLはGPLの緩和版で、ライブラリとしてリンクするだけなら派生物にGPLを適用する必要がありません。BSDライセンスやMITライセンスは寛容型ライセンスと呼ばれ、著作権表示を残せばほぼ自由に利用でき、派生物のライセンスも自由に選べます。Apacheライセンスも寛容型で、特許に関する条項が含まれています。',
          keyPoints: [
            'GPL: コピーレフト型（派生物もGPLにする義務）',
            'LGPL: GPLの緩和版（ライブラリリンクは例外）',
            'BSD/MIT: 寛容型（著作権表示のみで自由に利用可能）',
            'コピーレフト: 派生物にも同じライセンスを適用する仕組み',
          ],
        },
        {
          title: '代表的なOSS',
          content:
            'OSSは多くの分野で活用されています。OS分野ではLinuxが代表的で、サーバやスマートフォン（Android）の基盤として広く使われています。WebサーバではApache HTTP ServerやNginxがシェアの大部分を占めています。データベースではMySQL、PostgreSQL、MariaDBが有名です。プログラミング言語ではPython、Ruby、PHPなどがOSSとして開発されています。Webブラウザの分野ではFirefoxやChromium（Google Chromeのベース）があります。オフィスソフトではLibreOfficeが代表的です。',
          keyPoints: [
            'OS: Linux（サーバ・Android基盤）',
            'Webサーバ: Apache HTTP Server、Nginx',
            'データベース: MySQL、PostgreSQL、MariaDB',
            'ブラウザ: Firefox、Chromium',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-oss-fc1', front: 'ソースコードが公開され、自由に利用・改変・再配布できるソフトウェア', back: 'オープンソースソフトウェア（OSS）とは？', explanation: '無料で使えるかどうかではなく、ソースコードの公開と利用の自由が本質です。', difficulty: 'basic' },
      { id: 'fe-oss-fc2', front: 'GPL（GNU General Public License）', back: '代表的なコピーレフト型ライセンスは？', explanation: '派生物もGPLで公開する義務があり、ソースコードの公開が連鎖します。', difficulty: 'standard' },
      { id: 'fe-oss-fc3', front: 'コピーレフト', back: '派生物にも同じライセンスの適用を義務付ける仕組みは？', explanation: 'GPLが代表例で、改変したソフトウェアも同じ条件で公開する必要があります。', difficulty: 'standard' },
      { id: 'fe-oss-fc4', front: 'BSD/MITライセンス', back: '著作権表示を残せばほぼ自由に利用でき、派生物のライセンスも自由に選べるライセンスは？', explanation: '寛容型（パーミッシブ）ライセンスと呼ばれ、商用利用も容易です。', difficulty: 'standard' },
      { id: 'fe-oss-fc5', front: 'Linux', back: 'サーバやAndroidの基盤として広く使われている代表的なOSSのOSは？', explanation: 'Linus Torvaldsが開発を始めたオープンソースのOSカーネルです。', difficulty: 'basic' },
      { id: 'fe-oss-fc6', front: 'MySQL、PostgreSQL', back: '代表的なオープンソースのデータベース管理システムを2つ挙げよ。', explanation: 'どちらもリレーショナルデータベースで、多くのWebサービスで利用されています。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-oss-q1',
          question: 'OSSの説明として適切なものはどれか。',
          options: [
            '無料で配布されるソフトウェアのこと',
            'ソースコードが公開され、利用・改変・再配布が自由なソフトウェア',
            '特定の企業が独占的に開発するソフトウェア',
            'インターネット上でのみ利用可能なソフトウェア',
          ],
          correctIndex: 1,
          explanation: 'OSSの本質はソースコードの公開と利用の自由であり、無料かどうかは直接の定義ではありません。',
          difficulty: 'basic',
        },
        {
          id: 'fe-oss-q2',
          question: 'GPLライセンスの特徴として適切なものはどれか。',
          options: [
            '派生物のライセンスは自由に選べる',
            '商用利用は一切禁止されている',
            '派生物もGPLで公開する義務がある',
            'ソースコードの公開は任意である',
          ],
          correctIndex: 2,
          explanation: 'GPLはコピーレフト型ライセンスで、GPLソフトウェアを改変・再配布する場合、その派生物もGPLにする必要があります。',
          difficulty: 'standard',
        },
        {
          id: 'fe-oss-q3',
          question: '派生物にも同じライセンスの適用を義務付ける考え方を何というか。',
          options: ['パーミッシブ', 'コピーレフト', 'パブリックドメイン', 'プロプライエタリ'],
          correctIndex: 1,
          explanation: 'コピーレフトは、改変・再配布する際に同じライセンス条件を引き継ぐことを義務付ける考え方です。GPLが代表例です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-oss-q4',
          question: '次のうち、OSSのデータベース管理システムはどれか。',
          options: ['Oracle Database', 'SQL Server', 'PostgreSQL', 'Microsoft Access'],
          correctIndex: 2,
          explanation: 'PostgreSQLはOSSのリレーショナルデータベースです。Oracle DatabaseとSQL Serverは商用製品です。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
