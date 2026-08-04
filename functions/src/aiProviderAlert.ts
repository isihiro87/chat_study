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
      `ai_provider_stopped:${error.provider}:${error.status}`,
      buildProviderStopText(error.provider, error.status, now),
      now.getTime()
    );
  } catch (notifyError) {
    console.error(
      '[aiProviderAlert] provider-stop notify failed:',
      notifyError
    );
  }
}

/**
 * 通知の本文。**プロバイダごとに見に行く場所が違う**ので出し分ける。
 *
 * ⚠️ 以前はここが Gemini 決め打ちで、OpenAI が止まっても
 * 「Gemini API が停止しています／確認: Google AI Studio」と送っていた。
 * 2026-08-04 に OpenAI のクレジットが尽きたとき、通知は飛んでいたのに
 * **まったく別のコンソールを案内していた**ため原因にたどり着けなかった。
 * export はテスト用。
 */
export function buildProviderStopText(
  provider: 'gemini' | 'openai',
  status: number,
  now: Date
): string {
  const head =
    provider === 'openai'
      ? [
          '🛑 OpenAI API が停止しています',
          `HTTP ${status}（クレジット残高ぎれ・レート制限）`,
        ]
      : [
          '🛑 Gemini API が停止しています',
          `HTTP ${status}（費用上限またはレート制限）`,
        ];
  const scope =
    provider === 'openai'
      ? [
          '⚠️ つづもんの有料・体験ユーザーのAIチャットが止まります',
          '（無料の一問一答Botは Gemini なので影響なし）',
          '',
          '確認: https://platform.openai.com/settings/organization/billing/',
          '対処: クレジットを購入し、Auto recharge を有効にする',
        ]
      : [
          '⚠️ このプロジェクトの全キーが影響します',
          '（つづもんAI・一問一答AI・LPチャット・ムビスタ）',
          '',
          '確認: Google AI Studio の費用上限 / Gemini API のクォータ',
          '手順: docs/operations/ai-cost-guardrails.md §1',
        ];
  return [...head, `時刻: ${now.toISOString()}`, '', ...scope].join('\n');
}
