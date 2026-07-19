/**
 * ムビスタ学習記録 → スタ先生プロンプトへの要約（純粋ロジック）。
 *
 * `users/{uid}.mubista`（動画アプリでの視聴・クイズ）を、LINE のスタ先生が
 * 「同じ相棒がどこでも見守っている」ように声かけできる短い文脈に落とす。
 * Timestamp は import せずミリ秒（number）で扱う＝テスト可能・環境非依存。
 * `aiChatPrompt.buildMubistaContext` が Timestamp→ms 変換して呼ぶ。
 *
 * 統合設計: docs/ideas/mubista-line-shared-brain.md
 */

/** 要約入力（ms 版・prompt 生成に必要な最小形）。 */
export interface MubistaSummaryInput {
  lastUnit?: string;
  lastViewedAtMs?: number;
  units?: Record<
    string,
    { title?: string; progress?: number; viewedAtMs?: number }
  >;
  recentWrong?: Array<{ unit: string; concept: string }>;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_WRONG_SHOWN = 4;

/** 直近視聴の「いつ頃か」をやわらかい日本語に（数字の厳密さより雰囲気）。 */
function recencyPhrase(
  lastViewedAtMs: number | undefined,
  nowMs: number
): string {
  if (!lastViewedAtMs) return '';
  const days = Math.floor((nowMs - lastViewedAtMs) / DAY_MS);
  if (days <= 0) return '今日';
  if (days === 1) return 'きのう';
  if (days <= 3) return '最近';
  if (days <= 10) return '少し前';
  return '';
}

/**
 * ムビスタ記録を要約する。学習記録が無ければ null（プロンプトに何も足さない）。
 * 返す文字列は「参考情報」節（正解などの秘匿情報は含まない＝mubista quiz は概念と正誤のみ）。
 */
export function summarizeMubistaForPrompt(
  m: MubistaSummaryInput | undefined,
  nowMs: number
): string | null {
  if (!m || !m.units || Object.keys(m.units).length === 0) return null;

  const lines: string[] = [];

  // 直近に見た単元＋進捗
  const lastId = m.lastUnit;
  const last = lastId ? m.units[lastId] : undefined;
  if (last?.title) {
    const when = recencyPhrase(m.lastViewedAtMs, nowMs);
    const pct =
      typeof last.progress === 'number'
        ? Math.round(Math.max(0, Math.min(1, last.progress)) * 100)
        : null;
    const whenPart = when ? `${when}、` : '';
    const pctPart =
      pct === null
        ? ''
        : pct >= 90
          ? '（ほぼ見終わった）'
          : `（${pct}%まで視聴）`;
    lines.push(`- ${whenPart}動画で「${last.title}」を見ていた${pctPart}`);
  }

  // 最近まちがえた概念（横断・上位）
  const wrong = (m.recentWrong ?? []).slice(0, MAX_WRONG_SHOWN).map((w) => {
    const t = m.units?.[w.unit]?.title;
    return t ? `${t}の「${w.concept}」` : `「${w.concept}」`;
  });
  if (wrong.length > 0) {
    lines.push(`- 動画のクイズで最近まちがえた: ${wrong.join('、')}`);
  }

  if (lines.length === 0) return null;

  return (
    `\n\n# この子の「ムビスタ（動画）」での学習（参考）\n` +
    `あなたは公式LINEでも動画アプリ「ムビスタ」でも同じ先生（同じ相棒）。` +
    `下はこの子がムビスタで学んだ記録。これを踏まえて、` +
    `「あの動画どうだった？」のように自然に声をかけたり、` +
    `苦手をやさしく復習にさそったりしてよい（同じ相棒が続きを覚えている安心感を出す）。\n` +
    `ただし押しつけない。関係ない話題のときは無理に持ち出さない。` +
    `細かい数字やパーセントを羅列せず、会話にそっと織り込む。\n` +
    lines.join('\n')
  );
}
