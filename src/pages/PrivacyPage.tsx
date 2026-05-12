/**
 * プライバシーポリシーページ（`/privacy`）。
 * LINE Login チャネルの「プライバシーポリシー」URL として使用する。
 *
 * 法務監修を受けたものではない最小限のポリシー。実運用で取得する情報や
 * 利用目的が拡張されたら、内容を更新すること。
 */
export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] py-10 px-4">
      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 leading-relaxed text-gray-800">
        <h1
          className="text-2xl font-bold mb-2 text-center"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          プライバシーポリシー
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          チャットでスタディ
        </p>

        <p className="text-sm mb-6">
          ぐっとスクール（代表：石本大貴。以下「運営者」といいます）は、「チャットでスタディ」（以下「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
        </p>

        <Section title="第1条（個人情報）">
          <p>
            「個人情報」とは、個人情報保護法に定める「個人情報」を指し、生存する個人に関する情報であって、氏名、生年月日、住所、メールアドレス、識別子等により特定の個人を識別できるもの、および他の情報と容易に照合することができ、特定の個人を識別できるものを指します。
          </p>
        </Section>

        <Section title="第2条（個人情報の収集方法）">
          <p>
            運営者は、ユーザーが本サービスを利用する際に、以下の方法で個人情報を取得します:
          </p>
          <ul className="list-disc list-inside ml-4 mt-1 text-sm">
            <li>LINE 公式アカウントの友だち追加時に、LINE プラットフォームから提供される情報（LINE ユーザー識別子、表示名、プロフィール画像）</li>
            <li>LINE Login（LIFF）の同意時に、LINE プラットフォームから提供される情報（同上の範囲、OpenID Connect の `sub` クレーム）</li>
            <li>本サービス利用中にユーザーが入力・選択する情報（学年・教科・配信時刻・テスト範囲設定など）</li>
            <li>本サービス利用中の操作ログ（問題回答内容、正誤、学習日時、連続記録など）</li>
          </ul>
        </Section>

        <Section title="第3条（個人情報を収集・利用する目的）">
          <p>運営者は、収集した個人情報を以下の目的のために利用します:</p>
          <ol className="list-decimal list-inside space-y-0.5 text-sm">
            <li>本サービスの提供・運用のため（ユーザーを識別し、適切なコンテンツを配信するため）</li>
            <li>学習履歴・成績の保存および表示のため</li>
            <li>本サービスの改善、新機能の開発、利用状況の分析のため</li>
            <li>ユーザーからのお問い合わせに対応するため</li>
            <li>料金請求および課金に関する処理のため</li>
            <li>本規約や本ポリシーに違反した利用がないかの確認のため</li>
            <li>利用規約の変更等、本サービスに関する重要な事項をお知らせするため</li>
          </ol>
        </Section>

        <Section title="第4条（個人情報の第三者提供）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              運営者は、ユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。ただし、以下の場合を除きます:
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関等への協力に必要な場合</li>
              </ul>
            </li>
            <li>
              本サービスはその性質上、以下の外部サービスを利用しており、ユーザー情報の一部はそれらの仕様に基づいて取り扱われます。各サービスの利用は、それぞれのサービス提供者のプライバシーポリシーに従います:
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>
                  <strong>LINE ヤフー株式会社</strong>（LINE Messaging API / LINE Login）—
                  ユーザー識別子、プロフィール、メッセージ送受信
                </li>
                <li>
                  <strong>Google LLC</strong>（Firebase Authentication / Firestore / Cloud Functions）—
                  認証セッション、学習データの保管、配信処理の実行
                </li>
                <li>
                  <strong>Vercel Inc.</strong> — Web サイトのホスティング
                </li>
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="第5条（個人情報の管理期間）">
          <p>
            運営者は、利用目的の達成に必要な期間、または法令で定められた期間、ユーザーの個人情報を保管します。退会または利用停止の申請を受けた場合は、合理的な期間内に該当する個人情報を削除します（ただし法令に基づく保管義務がある場合を除きます）。
          </p>
        </Section>

        <Section title="第6条（個人情報の開示・訂正・削除等）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              ユーザーは、運営者に対して、自己の個人情報の開示・訂正・追加・削除・利用停止を求めることができます。お問い合わせ窓口より請求してください。
            </li>
            <li>
              運営者は、本人確認を行ったうえで、合理的な範囲・期間内に対応します。ただし、個人情報保護法その他の法令により、運営者が開示等の義務を負わない場合は、この限りではありません。
            </li>
          </ol>
        </Section>

        <Section title="第7条（Cookie・類似技術の利用）">
          <p>
            本サービスは、サービスの利便性向上・セキュリティ確保のため、Cookie や localStorage・sessionStorage 等のブラウザ機能を利用することがあります。これらの機能はブラウザ側の設定で無効化できますが、無効にした場合は本サービスの一部機能が利用できなくなることがあります。
          </p>
        </Section>

        <Section title="第8条（未成年者の利用）">
          <p>
            本サービスは中学生など未成年のユーザーが利用することを想定しています。未成年者の方は、ご利用前に必ず保護者の同意を得てください。保護者の方は、お子様の本サービス利用を把握いただくとともに、必要に応じて運営者までお問い合わせください。
          </p>
        </Section>

        <Section title="第9条（プライバシーポリシーの変更）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              運営者は、本ポリシーの内容を、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができます。
            </li>
            <li>
              変更後のプライバシーポリシーは、本サービスに掲載した時点で効力を生じるものとします。
            </li>
          </ol>
        </Section>

        <Section title="第10条（お問い合わせ窓口）">
          <p>
            本ポリシーに関するお問い合わせは、下記の窓口までお願いします:
          </p>
          <ul className="list-disc list-inside ml-4 mt-1 text-sm">
            <li>屋号: ぐっとスクール</li>
            <li>代表者: 石本大貴</li>
            <li>
              メール:{' '}
              <a
                href="mailto:guttoschool.okazaki@gmail.com"
                className="text-amber-600 underline"
              >
                guttoschool.okazaki@gmail.com
              </a>
            </li>
          </ul>
        </Section>

        <p className="mt-10 text-xs text-gray-500 text-center">
          制定日: 2026年5月12日
          <br />
          ぐっとスクール（代表：石本大貴）
        </p>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <h2
        className="text-lg font-bold text-gray-800 mb-2 border-l-4 border-amber-500 pl-3"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        {title}
      </h2>
      <div className="text-sm pl-1">{children}</div>
    </section>
  );
}
