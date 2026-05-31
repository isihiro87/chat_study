/**
 * プレミアム訴求コピーの一元管理。
 *
 * セールスコピー設計（requirements.md §D 参照）に従い、場面別の文言を切り替える。
 *
 * 設計の鉄則（テストで保証）:
 *   - 「コーヒー」「カフェ」「ジュース」「お菓子」「マンガ」を比較対象に使わない
 *     → 中学生のリアルに合わない / 我慢して勉強感が出るため
 *   - 「全教科」「全科目」表現を使わない（コンテンツは歴史科目のみ）
 *   - 「通常¥1,280」など旧表記を使わない（新価格体系: 体験中¥680 / 体験後¥980）
 *   - 「急げ」「損する」「今しか」など煽り表現を禁止
 *   - 学習関連の比較（ワークブック / 問題集 / 副教材）のみ使用
 *   - 塾比較・授業料比較は parentCopy.ts でのみ使用
 */

export type PremiumScene =
  | "day0-start"
  | "day1"
  | "day3-feature"
  | "day3-parent"
  | "day5-story"
  | "day6"
  | "day7-morning"
  | "day7-evening"
  | "day7-night"
  | "day8-expired"
  | "day15-post"
  | "day30-post"
  | "winback-day7-trial-experienced"
  | "winback-day7-trial-fresh"
  | "first-answer"
  | "milestone";

import type { LockedMonthlyPrice } from "./userDocTypes";

/**
 * 場面別の価格アンカリングテキスト。
 *
 * @param scene 表示する場面
 * @param lockedPrice 確定価格（実体験中は 680、それ以外は 980）
 */
export function getPriceAnchorText(
  scene: PremiumScene,
  lockedPrice: LockedMonthlyPrice
): string {
  const priceLabel = `月¥${lockedPrice}`;
  switch (scene) {
    case "day0-start":
      return `${priceLabel}で全機能を体験中。気に入ったらそのまま続けられます。`;
    case "day1":
      return `いま体験中の登録なら${priceLabel}。これがあなたの価格として、ずっとそのまま。`;
    case "day3-feature":
    case "day5-story":
      // D-12: Day 3 / Day 5 は価格訴求を抜く
      return "";
    case "day3-parent":
      return `${priceLabel}でお子様の学習を月単位で支援できます。`;
    case "day6":
      return `${priceLabel}で続けられるのは体験期間中の登録だけ。明日以降は月¥980スタートに切り替わります。`;
    case "day7-morning":
      return `今日が${priceLabel}で確定できる最後の1日。これからずっと¥${lockedPrice}のまま、これから追加される教科分も同じ価格で使えます。`;
    case "day7-evening":
      return `今夜中の登録で${priceLabel}ロック。明日からの新規登録は月¥980に戻ります。`;
    case "day7-night":
      return `今夜23:59で${priceLabel}の価格ロックが終了します。`;
    case "day8-expired":
      return "また始めたくなったら月¥980から続けられます。";
    case "day15-post":
    case "day30-post":
      return "再開はいつでも月¥980から。あなたのペースで戻ってきてね。";
    case "winback-day7-trial-experienced":
      return "戻ってきてくれてありがとう。特別に¥680価格ロックを再オープンします。";
    case "winback-day7-trial-fresh":
      return "まだ7日間無料の体験は使えるよ。今から始めれば月¥680で続けられる。";
    case "first-answer":
      return "体験中の登録なら、月¥680のままずっと同じ価格で続けられます。";
    case "milestone":
      return `${priceLabel}で全機能を試せます。`;
  }
}

/**
 * 場面別のリスクリバーサル箇条書き（D-2）。
 */
export function getRiskReversalBullets(scene: PremiumScene): string[] {
  switch (scene) {
    case "day0-start":
    case "first-answer":
      return [
        "✅ カード登録なしで開始",
        "✅ 7日後に自動で無料プランに戻る",
        "✅ 解約忘れの心配ゼロ",
        "✅ いつでもメッセージ1通で停止可能",
      ];
    case "day1":
    case "day3-feature":
    case "day3-parent":
    case "day5-story":
    case "day6":
    case "day7-morning":
    case "day7-evening":
    case "day7-night":
      return [
        "✅ カード未登録、いつでも停止可",
        "✅ 登録時の価格をずっと維持",
      ];
    case "day8-expired":
    case "day15-post":
    case "day30-post":
    case "winback-day7-trial-experienced":
    case "winback-day7-trial-fresh":
    case "milestone":
      return [
        "✅ カード未登録、いつでも停止可",
      ];
  }
}

/**
 * 場面別の CTA テキスト（D-8）。
 * 心理ハードルを段階的に下げる設計。
 */
export function getCtaText(scene: PremiumScene): string {
  switch (scene) {
    case "day0-start":
      return "▶ まずは追加で解く";
    case "day1":
      return "続けるならこちら";
    case "day3-feature":
      return "もっと使ってみる";
    case "day3-parent":
      return "保護者の方が登録する";
    case "day5-story":
      return "使い方をもっと見る";
    case "day6":
      return "月¥680を確保する";
    case "day7-morning":
      return "今日中に月¥680で確定";
    case "day7-evening":
      return "今夜中に月¥680で確定";
    case "day7-night":
      return "あと数時間で締切";
    case "day8-expired":
    case "day15-post":
    case "day30-post":
      return "今ならまだ月¥980";
    case "winback-day7-trial-experienced":
      return "月¥680ロックで再開する";
    case "winback-day7-trial-fresh":
      return "7日間無料で始める";
    case "first-answer":
      return "7日間無料で始める";
    case "milestone":
      return "プレミアムを試す";
  }
}

/**
 * 場面別のベネフィットテキスト（D-1）。
 * 「全教科」表現は禁止。歴史科目を主語にする。
 */
export function getBenefitText(scene: PremiumScene): string {
  switch (scene) {
    case "day0-start":
      return "1日10問+復習無制限。歴史263トピック・約1,500問が解き放題。";
    case "day1":
      return "毎日10問解けて、苦手はピンポイントで復習できます。";
    case "day3-feature":
      return "暗記カードと四択クイズで、効率よく覚えられる学習体験。";
    case "day3-parent":
      return "お子様の学習履歴を保護者にも共有でき、月単位で自走を支援できます。";
    case "day5-story":
      // 体験談。ベネフィット要素は story 本体に組み込むので空でも可。
      return "";
    case "day6":
      return "あなたが今まで解いた問題、苦手リスト、進捗がそのまま続きます。";
    case "day7-morning":
      return "ここまで使ってきた苦手リストを、明日以降も自由に復習できます。";
    case "day7-evening":
      return "今夜までに登録すれば、明日からも追加で解く・じっくり学ぶがそのまま使えます。";
    case "day7-night":
      return "登録は1分で完了。カードも不要です。";
    case "day8-expired":
      return "毎日1問は引き続き無料でお届けします。プレミアムに戻る場合は月¥980から。";
    case "day15-post":
    case "day30-post":
      return "気が変わったら、いつでも月¥980で再スタートできます。";
    case "winback-day7-trial-experienced":
      return "今から3日以内に登録すれば、月¥680のままずっと使えます。";
    case "winback-day7-trial-fresh":
      return "暗記カード・四択クイズ・苦手復習が全部使える7日間。";
    case "first-answer":
      return "1日10問+復習無制限。歴史263トピック・約1,500問が解き放題。";
    case "milestone":
      return "暗記カード・四択クイズ・苦手復習で、学習がもう一段はかどります。";
  }
}

/** 損失回避テキスト用のコンテキスト */
export interface LossAversionContext {
  /** 苦手リストの問題数 */
  weakCount?: number;
  /** じっくり学ぶの進捗（%） */
  jikkuriProgress?: number;
}

/**
 * 場面別の損失回避テキスト（D-9）。
 * ユーザー固有の数字を組み込んで「使わない損失」+「価格ロックの喪失」を提示。
 */
export function getLossAversionText(
  scene: PremiumScene,
  ctx: LossAversionContext = {}
): string {
  const weak = ctx.weakCount ?? 0;
  switch (scene) {
    case "day6":
      if (weak > 0) {
        return `ここまで作った苦手リスト${weak}問は、無料に戻ると毎日1問ずつしか復習できなくなります。月¥680ロックは今日と明日限定。`;
      }
      return "月¥680ロックは今日と明日限定です。";
    case "day7-morning":
    case "day7-evening":
      if (weak > 0) {
        return `体験は今夜23:59で終了します。${weak}問の苦手リストは、無料に戻ると毎日1問ずつしか復習できなくなります。`;
      }
      return "体験は今夜23:59で終了します。『じっくり学ぶ』や暗記カードが使えるのも今夜までです。";
    case "day7-night":
      return "今夜23:59で価格ロックが終わります。これがあなたの選択。あとで気が変わったら月¥980で再登録できます。";
    case "day8-expired":
      if (weak > 0) {
        return `あなたの苦手リスト${weak}問、復習スピードが落ちています。`;
      }
      return "";
    default:
      return "";
  }
}

/**
 * 場面別の社会的証明テキスト（D-6）。
 *
 * 現状はサンプル実装。実データに置換するまでは中立的表現に留め、誇大表現を避ける。
 * 数値（{N}）は実データが集計可能になり次第、注入する設計。
 */
export function getSocialProofText(scene: PremiumScene): string {
  switch (scene) {
    case "day1":
      return "先輩の声: 「定期テスト前にちょうど良い」";
    case "day3-feature":
      return "先輩の声: 「四択クイズで覚えやすかった」";
    case "winback-day7-trial-experienced":
    case "winback-day7-trial-fresh":
      return "戻ってきた人の声: 「久しぶりでも1問なら気軽だった」";
    default:
      return "";
  }
}
