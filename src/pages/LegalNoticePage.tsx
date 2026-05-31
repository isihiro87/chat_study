/**
 * 特定商取引法に基づく表記ページ（`/legal`）。
 * 有料サブスクリプション販売のための法的必須表記。
 * /premium LP・LIFF premium-apply / premium-info / settings のフッターから到達。
 */
export function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] py-10 px-4">
      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 leading-relaxed text-gray-800">
        <h1
          className="text-2xl font-bold mb-2 text-center"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          特定商取引法に基づく表記
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          チャットでスタディ
        </p>

        <p className="text-sm mb-6">
          本ページは、特定商取引法第11条（通信販売）に基づき、ぐっとスクール（代表：石本大貴。以下「運営者」といいます）が提供する「チャットでスタディ」（以下「本サービス」といいます）の販売条件等を表示するものです。
        </p>

        <dl className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden text-sm">
          <Row label="販売事業者名">ぐっとスクール</Row>
          <Row label="運営責任者">石本大貴</Row>
          <Row label="所在地">
            お客様からのご請求があれば、遅滞なく開示いたします。下記メールアドレスまでご連絡ください。
          </Row>
          <Row label="電話番号">
            お客様からのご請求があれば、遅滞なく開示いたします。お問い合わせは原則として下記メールアドレス、または公式LINEアカウントの「お問い合わせ」フォームよりお願いいたします。
          </Row>
          <Row label="メールアドレス">
            <a
              href="mailto:guttoschool.okazaki@gmail.com"
              className="text-amber-600 underline"
            >
              guttoschool.okazaki@gmail.com
            </a>
          </Row>
          <Row label="販売価格">
            <ul className="list-disc list-inside space-y-0.5">
              <li>プレミアムプラン（早期登録価格）: 月額 680 円（税込）</li>
              <li>プレミアムプラン（通常価格）: 月額 980 円（税込）</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              早期登録価格は、運営者が定めるキャンペーン期間中にお申し込みいただいた方を対象として、ご利用継続中は同じ月額料金を維持いたします（解約後の再登録時はその時点のキャンペーン条件に従います）。
            </p>
          </Row>
          <Row label="商品代金以外の必要料金">
            本サービスの利用に必要なインターネット接続料金・通信費はお客様のご負担となります。決済手数料は発生いたしません。
          </Row>
          <Row label="支払方法">
            クレジットカード決済（Visa / Mastercard / JCB / American Express）。
            決済は Stripe（Stripe, Inc.）を通じて処理されます。
          </Row>
          <Row label="支払時期">
            <ul className="list-disc list-inside space-y-0.5">
              <li>初回: お申し込み時に即時決済</li>
              <li>2 回目以降: 毎月の自動更新時に決済</li>
            </ul>
          </Row>
          <Row label="商品の引渡時期">
            決済完了後、ただちに本サービスのプレミアム機能をご利用いただけます。
          </Row>
          <Row label="無料トライアルの取扱い">
            本サービスでは 7 日間の無料トライアルを提供する場合がありますが、トライアル終了後に自動的に有料プランへ移行することはありません。継続をご希望の場合は、お客様ご自身で本登録のお手続きをお願いいたします。お手続きがない場合は自動的に無料プランへ戻ります。
          </Row>
          <Row label="返品・キャンセル条件">
            <p className="mb-2">
              本サービスはデジタルコンテンツの提供を伴うため、お客様のご都合による返品・返金はお受けできません。
            </p>
            <p>
              月額プランは、次回更新日の前であればいつでも解約手続きを行うことができます。解約手続き後も、次回更新日までは引き続き本サービスをご利用いただけます。日割りでの返金はいたしません。
            </p>
          </Row>
          <Row label="解約方法">
            <ul className="list-disc list-inside space-y-0.5">
              <li>
                公式LINE アカウント内の「設定・サポート」メニューから「お問い合わせ」フォームを開き、解約のご連絡をいただく方法
              </li>
              <li>
                LIFF 設定ページ（line.chatstudy.jp/liff/settings）から解約手続きを行う方法
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              いずれの方法でも、引き止めや追加の手続きを求めることはありません。
            </p>
          </Row>
          <Row label="動作環境">
            <ul className="list-disc list-inside space-y-0.5">
              <li>iOS / Android の LINE アプリ最新版</li>
              <li>
                ブラウザ: Google Chrome / Safari の最新版を推奨（その他の主要ブラウザでも動作しますが、表示崩れが生じる場合があります）
              </li>
              <li>安定したインターネット接続環境</li>
            </ul>
          </Row>
          <Row label="領収書の発行">
            Stripe の顧客ポータルから、毎月の請求書・領収書を PDF
            形式でダウンロードいただけます。発行方法のご案内が必要な場合は、上記メールアドレスまでご連絡ください。
          </Row>
        </dl>

        <p className="mt-10 text-xs text-gray-500 text-center">
          制定日: 2026年5月30日
          <br />
          ぐっとスクール（代表：石本大貴）
        </p>
      </main>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr]">
      <dt className="bg-gray-50 px-4 py-3 font-bold text-gray-700 sm:border-r sm:border-gray-200">
        {label}
      </dt>
      <dd className="px-4 py-3">{children}</dd>
    </div>
  );
}
