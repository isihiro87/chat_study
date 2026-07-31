/**
 * LLM プロバイダ側の停止（費用上限・レート制限）を運営へ通知する。
 *
 * AI Studio のプロジェクト費用上限に到達すると Gemini は 429/403 を返し、
 * **そのプロジェクトの全キーが止まる**（つづもんAI・一問一答AI・LPチャット・ムビスタ）。
 * 自然回復しないので、運営が上限を上げるまで AI は沈黙し続ける。
 *
 * ⚠️ 以前は `aiPaidChat` にだけ実装されており、**無料Bot（3,000人）側が沈黙しても
 * 誰も気づけなかった**。両経路から呼べるようにここへ切り出す。
 *
 * 例外は投げない（webhook 200 を維持する）。
 */

/**
 * エラーがプロバイダ停止（費用上限・レート制限）なら運営へ通知する。
 * それ以外のエラー・通知の失敗では何もしない（ログのみ）。
 *
 * スロットル付きなので連投にはならない。
 */
export async function notifyIfProviderStopped(
  error: unknown,
  now: Date
): Promise<void> {
  try {
    const { LlmHttpError } = await import('./llmProvider');
    if (!(error instanceof LlmHttpError) || !error.isQuotaOrBilling) return;

    const { notifyAdminsThrottled } = await import('./adminNotify');
    await notifyAdminsThrottled(
      `ai_provider_stopped:${error.status}`,
      [
        '🛑 Gemini API が停止しています',
        `HTTP ${error.status}（費用上限またはレート制限）`,
        `時刻: ${now.toISOString()}`,
        '',
        '⚠️ このプロジェクトの全キーが影響します',
        '（つづもんAI・一問一答AI・LPチャット・ムビスタ）',
        '',
        '確認: Google AI Studio の費用上限 / Gemini API のクォータ',
        '手順: docs/operations/ai-cost-guardrails.md §1',
      ].join('\n'),
      now.getTime()
    );
  } catch (notifyError) {
    console.error(
      '[aiProviderAlert] provider-stop notify failed:',
      notifyError
    );
  }
}
