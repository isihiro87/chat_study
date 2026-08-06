/**
 * プレミアム導線 funnel イベントを Firestore に記録するサーバー側ヘルパー。
 *
 * クライアント側 (`src/utils/funnelEvent.ts`) と書き込み先 collection を共有:
 * `premiumFunnelEvents/{autoId}`
 *
 * クライアント側は eventType を allowlist で制限しているが、サーバー側は admin SDK
 * 経由なので任意の eventType を記録できる。trial 開放・期限切れなどユーザー操作を
 * 介さない場面はサーバー側で記録する。
 *
 * 失敗時はログのみ。再試行はしない（funnel データの欠損は許容、機能本体は止めない）。
 */

export type ServerFunnelEventType =
  | 'richmenu_premium_info_tap'
  // 学習エンゲージメント（回答後カード / メニューの追加学習動線）
  | 'extra_question_tap'
  | 'weak_review_tap'
  /**
   * AI チャットの入口（回答後カードの「AIに質問する」）をタップした（2026-08-06）。
   * AI は自由文のフォールバックとして実装されていて**存在に気づかれていなかった**
   * （利用 591UU / 3,638人＝16%）。この導線がどれだけ利用を押し上げたかを見る。
   * context: src（どの面から来たか）
   */
  | 'ai_intro_tap'
  // 「まだ習ってない」ワンタップ出題除外（2026-07）
  | 'not_learned_tap'
  | 'not_learned_applied'
  // 友だち追加直後のおためし1問（2026-07。context: correct）
  | 'sample_question_answered'
  // つづもん（PDF問題集）ライセンス有効化・体験（2026-07）
  | 'tsudumon_activated'
  | 'trial_started'
  | 'trial_reminder_sent'
  | 'trial_expired'
  | 'paid_contract_started'
  | 'paid_cancel_requested'
  | 'checkout_session_created'
  // === つづもん 保護者導線（.steering/20260727-parent-handoff/）===
  // 中学生本人は決済できないので、ここが唯一の課金経路。どこで落ちるかを段階で見る。
  /** 子が「おうちの人にわたすカード」を発行した */
  | 'parent_link_created'
  /** 保護者がカード（保護者ページ）を開いた。uid は**子**で記録する */
  | 'parent_page_viewed'
  /** 保護者が決済に進んだ（context: sibling） */
  | 'parent_checkout_started'
  /** 保護者が公式LINEで子と連携した（context: childCount） */
  | 'parent_linked'
  /** 連携が解除された（context: by='child'|'parent'） */
  | 'parent_unlinked'
  // 休眠ユーザー除外システム / Win-back（§B, §C）
  | 'winback_sent'
  | 'status_transition'
  | 'restart_intent_detected'
  // 配信一時停止 / 再開（ユーザー自身の選択、2026-07）
  | 'delivery_paused'
  | 'delivery_resumed'
  // Trial ドリップキャンペーン（§D）
  | 'trial_drip_sent'
  | 'trial_drip_parent_sent'
  | 'trial_drip_story_sent'
  | 'trial_evening_reminder_sent'
  | 'trial_night_reminder_sent'
  // 申込フォーム離脱 / 期限切れ後フォロー（§D-13）
  | 'premium_apply_form_abandoned'
  | 'post_trial_followup_sent'
  // 月次送信モニタリング
  | 'monthly_delivery_report_generated'
  // 月末ふり返りレポート（AI 学習分析）
  | 'monthly_report_invite_sent'
  | 'monthly_report_viewed'

  // === つづもん AI 個別サポート（.steering/20260725-ai-personal-support/）===
  /** 学習プランを作成・保存した（context: weeks / testDate） */
  | 'ai_plan_created'
  /** 学習分析を返した（context: verified / hasData） */
  | 'ai_analysis_view'
  /** 悩み相談として応答した（context: なし。内容は載せない） */
  | 'ai_counsel_reply'
  /** 危険サインを検知した（context: なし。内容は載せない） */
  | 'ai_safety_flag'
  /** 予算デグレード・上限で応答を落とした（context: reason / degrade） */
  | 'ai_budget_degraded'
  /** 記憶を更新した（context: keys） */
  | 'ai_memory_updated'
  | 'ai_operator_handoff'
  /** 教材へのリンクを添えた（context: topicKey） */
  | 'ai_topic_linked'
  /** 個別化した日次メッセージを送った（context: window） */
  | 'ai_daily_message_sent';

export async function logServerFunnelEvent(
  eventType: ServerFunnelEventType,
  uid: string,
  context?: Record<string, unknown>
): Promise<void> {
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const lineUserId = uid.startsWith('line:')
      ? uid.slice('line:'.length)
      : uid;

    await db.collection('premiumFunnelEvents').add({
      uid,
      lineUserId,
      eventType,
      occurredAt: FieldValue.serverTimestamp(),
      context: context ?? null,
    });
  } catch (error) {
    console.warn(
      `[funnelEvent] server log failed eventType=${eventType} uid=${uid}:`,
      error
    );
  }
}
