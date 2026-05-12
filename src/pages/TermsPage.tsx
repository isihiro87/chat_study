/**
 * 利用規約ページ（`/terms`）。
 * LINE Login チャネルの「サービス利用規約」URL として使用する。
 *
 * 法務監修を受けたものではない最小限の規約。実運用で課金体系が固まったり
 * 法的相談を経たりした段階で内容を更新すること。
 */
export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] py-10 px-4">
      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 leading-relaxed text-gray-800">
        <h1
          className="text-2xl font-bold mb-2 text-center"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          利用規約
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          チャットでスタディ
        </p>

        <p className="text-sm mb-6">
          この利用規約（以下「本規約」といいます）は、ぐっとスクール（代表：石本大貴。以下「運営者」といいます）が提供する「チャットでスタディ」（以下「本サービス」といいます）の利用条件を定めるものです。本サービスを利用するユーザー（以下「ユーザー」といいます）は、本規約に同意のうえご利用ください。
        </p>

        <Section title="第1条（適用）">
          <p>
            本規約は、ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されます。運営者が本サービス上で随時掲載する個別規定・運営者のお知らせも、本規約の一部を構成するものとします。
          </p>
        </Section>

        <Section title="第2条（利用登録）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              本サービスは、LINE プラットフォーム上の公式アカウント友だち追加および LINE Login による認証を経て利用できます。
            </li>
            <li>
              利用希望者が運営者の定める方法によって利用申請を行い、運営者がこれを承認した場合に、利用登録が完了するものとします。
            </li>
            <li>
              <strong>未成年者の方</strong>は、本サービスの利用にあたって保護者の同意を得たうえでご利用いただくことを推奨します。中学生など本サービスの主な対象層は、利用前に必ず保護者の方とご確認ください。
            </li>
            <li>
              運営者は、利用申請者に以下の事由があると判断した場合、利用申請の承認をしないこと、または承認後に登録を取り消すことがあります:
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>虚偽の情報を提供した場合</li>
                <li>過去に本規約違反等で登録を取り消されたことがある場合</li>
                <li>その他、運営者が利用登録を相当でないと判断した場合</li>
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="第3条（アカウント情報の管理）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              ユーザーは、自己の責任において LINE アカウントを管理するものとします。
            </li>
            <li>
              LINE アカウントに紐づく学習データの第三者による利用、不正使用に対し、運営者は一切の責任を負いません。
            </li>
          </ol>
        </Section>

        <Section title="第4条（本サービスの提供内容）">
          <p>
            本サービスは、中学生向けの学習コンテンツを公式 LINE および Web 上で提供するものです。主な機能:
          </p>
          <ul className="list-disc list-inside ml-4 mt-1 text-sm space-y-0.5">
            <li>毎日 1 問の自動配信</li>
            <li>暗記カード・4 択クイズによる学習</li>
            <li>連続記録・学習履歴・正答率の表示</li>
            <li>テスト範囲設定（プレミアム機能の一部含む）</li>
          </ul>
          <p className="mt-2">
            機能の内容・対象範囲は予告なく変更されることがあります。
          </p>
        </Section>

        <Section title="第5条（料金）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              本サービスには無料プランと有料のプレミアムプランがあります。プレミアムプランの料金は
              <strong>月額 680 円（プロモーション価格）</strong>
              です。料金は今後改定されることがあります。
            </li>
            <li>
              料金体系・課金方法・解約方法の詳細は、別途運営者から案内します。
            </li>
            <li>
              すでに支払われた料金は、原則として返金しません。
            </li>
          </ol>
        </Section>

        <Section title="第6条（禁止事項）">
          <p>ユーザーは、以下の行為をしてはなりません:</p>
          <ol className="list-decimal list-inside space-y-0.5 text-sm">
            <li>法令または公序良俗に違反する行為</li>
            <li>運営者または第三者の知的財産権・プライバシー・名誉等を侵害する行為</li>
            <li>本サービスの内容・コンテンツを無断で複製・転載・販売する行為</li>
            <li>本サービスの運営を妨害する行為（過度なアクセス・不正アクセス等）</li>
            <li>運営者のサーバーまたはネットワークの機能を破壊・妨害する行為</li>
            <li>不正な目的で本サービスを利用する行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ol>
        </Section>

        <Section title="第7条（本サービスの提供停止・終了）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              運営者は、以下のいずれかに該当する場合、ユーザーに事前通知なく本サービスの全部または一部の提供を停止・中断・終了することができます:
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>本サービスのメンテナンス・更新を行う場合</li>
                <li>地震、火災、停電、天災等の不可抗力により提供が困難となった場合</li>
                <li>LINE プラットフォーム・Firebase 等の外部サービスに障害が発生した場合</li>
                <li>その他、運営者が停止・終了を必要と判断した場合</li>
              </ul>
            </li>
            <li>
              提供停止・終了によりユーザーに生じた損害について、運営者は一切の責任を負いません。
            </li>
          </ol>
        </Section>

        <Section title="第8条（退会）">
          <p>
            ユーザーは、本サービス内の「設定・サポート」または運営者へのお問い合わせを通じて、退会することができます。退会の際、学習データ等は当社プライバシーポリシーに従って取り扱います。
          </p>
        </Section>

        <Section title="第9条（免責事項）">
          <ol className="list-decimal list-inside space-y-1">
            <li>
              運営者は、本サービスの内容について、その正確性・完全性・有用性等いかなる保証も行いません。学習効果や成績向上を保証するものではありません。
            </li>
            <li>
              運営者は、本サービスに起因してユーザーに生じたあらゆる損害について、当該損害が運営者の故意または重過失による場合を除き、一切の責任を負いません。
            </li>
            <li>
              本サービスの利用は、ユーザー自身の責任において行うものとします。
            </li>
          </ol>
        </Section>

        <Section title="第10条（知的財産権）">
          <p>
            本サービスを構成する文章・画像・音声・コード等のコンテンツに関する著作権その他の知的財産権は、運営者または正当な権利を有する第三者に帰属します。ユーザーは、私的利用の範囲を超えてこれらを利用してはなりません。
          </p>
        </Section>

        <Section title="第11条（規約の変更）">
          <p>
            運営者は、必要と判断した場合、ユーザーに事前通知することなく本規約を変更できるものとします。変更後の規約は本サービス上に掲載した時点で効力を生じるものとし、変更後にユーザーが本サービスを利用した場合、変更後の規約に同意したものとみなします。
          </p>
        </Section>

        <Section title="第12条（準拠法・管轄裁判所）">
          <ol className="list-decimal list-inside space-y-1">
            <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
            <li>
              本サービスに関して紛争が生じた場合、運営者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。
            </li>
          </ol>
        </Section>

        <Section title="第13条（お問い合わせ）">
          <p>
            本規約に関するお問い合わせは、以下の窓口までお願いします。
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
