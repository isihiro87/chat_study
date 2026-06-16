/**
 * 公式LINE トーク内「出題範囲設定」フロー（Quick Reply 逐次選択）の純粋ロジック。
 *
 * 副作用なし（Firestore / LINE API を触らない）。webhook 側のハンドラから呼ばれ、
 * 選択状態のトグル・eraId -> topic.name 展開・Quick Reply の中身（label/data/url）の
 * 組み立てを担う。テストは __tests__/lineScopeFlow.test.ts。
 *
 * 状態（教科・学年・選択中の era 集合）は postback data に往復させて保持し、
 * トグルのたびに Firestore を読まない（CLAUDE.md の read 規律）。
 */

import {
  lineScopeEras,
  type EraMeta,
  type ScopeSubjectId,
  type ScopeGrade,
} from './generated/line-scope-eras.generated';

/** Quick Reply / postback の安全上限。 */
export const QUICK_REPLY_LABEL_MAX = 20;
export const POSTBACK_DATA_MAX = 300;

/** トーク内フローで提示する Quick Reply 1 件分の抽象表現（LINE 形式は webhook 側で組む）。 */
export interface ScopeQuickItem {
  /** チップに表示するラベル（20字以内）。 */
  label: string;
  /** postback アクションのとき: data 文字列。 */
  data?: string;
  /** uri アクションのとき: 遷移先 URL。 */
  url?: string;
}

/** 指定教科・学年の時代メタ一覧（表示順）。未対応は空配列。 */
export function getEraMetas(subject: string, grade: number): EraMeta[] {
  const bySubject = lineScopeEras[subject as ScopeSubjectId];
  if (!bySubject) return [];
  return bySubject[grade as ScopeGrade] ?? [];
}

/**
 * トーク内の時代選択フローが使えるか。
 * 時代が 2 つ以上ある教科のみ（英語=1カテゴリ等は /scope ページへフォールバック）。
 */
export function supportsEraFlow(subject: string, grade: number): boolean {
  return getEraMetas(subject, grade).length >= 2;
}

/** postback data の sel（カンマ連結 eraId）をパース。空・null は []。 */
export function parseSel(raw: string | null | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/** sel を data 用文字列にシリアライズ。 */
export function serializeSel(sel: string[]): string {
  return sel.join(',');
}

/**
 * sel に eraId をトグル（あれば外す／なければ追加）。
 * 結果は時代の表示順に正規化し、未知 eraId は捨てる。
 */
export function toggleEra(
  subject: string,
  grade: number,
  sel: string[],
  eraId: string
): string[] {
  const order = getEraMetas(subject, grade).map((e) => e.eraId);
  const set = new Set(sel.filter((id) => order.includes(id)));
  if (set.has(eraId)) {
    set.delete(eraId);
  } else if (order.includes(eraId)) {
    set.add(eraId);
  }
  return order.filter((id) => set.has(id));
}

/** 選択中 era を表示順に正規化（未知 eraId を除去）。 */
export function normalizeSel(
  subject: string,
  grade: number,
  sel: string[]
): string[] {
  const order = getEraMetas(subject, grade).map((e) => e.eraId);
  const set = new Set(sel);
  return order.filter((id) => set.has(id));
}

/**
 * 選択中の era を testScope.topics（= topic.name = questions.topic）に展開。
 * 未知 eraId は無視、重複は除去。
 */
export function expandErasToTopics(
  subject: string,
  grade: number,
  sel: string[]
): string[] {
  const metas = getEraMetas(subject, grade);
  const byId = new Map(metas.map((m) => [m.eraId, m]));
  const out: string[] = [];
  const seen = new Set<string>();
  for (const eraId of sel) {
    const meta = byId.get(eraId);
    if (!meta) continue;
    for (const name of meta.topics) {
      if (seen.has(name)) continue;
      seen.add(name);
      out.push(name);
    }
  }
  return out;
}

// --- postback data ビルダー ---

export function buildPickData(
  subject: string,
  grade: number,
  sel: string[],
  eraId: string
): string {
  const params = new URLSearchParams({
    type: 'scope_pick',
    s: subject,
    g: String(grade),
    sel: serializeSel(sel),
    era: eraId,
  });
  return params.toString();
}

export function buildResetData(subject: string, grade: number): string {
  const params = new URLSearchParams({
    type: 'scope_pick',
    s: subject,
    g: String(grade),
    reset: '1',
  });
  return params.toString();
}

export function buildCommitData(
  subject: string,
  grade: number,
  sel: string[]
): string {
  const params = new URLSearchParams({
    type: 'scope_commit',
    s: subject,
    g: String(grade),
    sel: serializeSel(sel),
  });
  return params.toString();
}

/** 「学年ぜんぶでOK」＝範囲解除（topics=[]）。 */
export function buildClearCommitData(subject: string, grade: number): string {
  const params = new URLSearchParams({
    type: 'scope_commit',
    s: subject,
    g: String(grade),
    sel: '',
  });
  return params.toString();
}

/** 「詳しく設定」= /scope へ。現在の sel があれば ?eras= を付ける。 */
export function buildDetailUrl(baseUrl: string, sel: string[]): string {
  if (sel.length === 0) return baseUrl;
  const sep = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${sep}eras=${encodeURIComponent(serializeSel(sel))}`;
}

// --- 表示テキスト ---

/** チップのラベル（✅/⬜ + 短縮名）。 */
export function eraChipLabel(meta: EraMeta, selected: boolean): string {
  return `${selected ? '✅' : '⬜'}${meta.shortName}`;
}

/** 最初のガイド本文（各 era: 短縮名（時期）｜代表用語）。 */
export function buildGuideText(subject: string, grade: number): string {
  const metas = getEraMetas(subject, grade);
  const lines = metas.map((m) => {
    const when = m.whenLabel ? `（${m.whenLabel}）` : '';
    const terms = m.keyTerms ? `\n　${m.keyTerms}` : '';
    return `▫️ ${m.shortName}${when}${terms}`;
  });
  return (
    '📚 テスト範囲をえらぼう\n' +
    '習ったところをタップしてね（複数OK・あとで変えられるよ）。\n' +
    '時期はだいたいの目安だよ。\n\n' +
    lines.join('\n')
  );
}

/** トグル後の短い確認文。タップ＝即保存が伝わる文言にする。 */
export function buildPickConfirmText(
  kind: 'add' | 'remove' | 'reset',
  eraName: string,
  count: number
): string {
  if (kind === 'reset') {
    return 'ぜんぶ解除して保存したよ（今は学年ぜんぶから出題）。もう一度えらべるよ。';
  }
  if (kind === 'add') {
    return `✅「${eraName}」を範囲に追加して保存したよ（計${count}）。\nこのまま続けて選べるよ。終わったら「これで決定」を押してね（押さなくても保存ずみ）。`;
  }
  return `「${eraName}」を範囲から外して保存したよ（計${count}）。`;
}

/** 確定後の確認文。 */
export function buildCommitText(
  subject: string,
  grade: number,
  sel: string[]
): string {
  if (sel.length === 0) {
    return '📖 学年ぜんぶから出題するよ。いつでも範囲設定から変えられるよ。';
  }
  const metas = getEraMetas(subject, grade);
  const byId = new Map(metas.map((m) => [m.eraId, m.shortName]));
  const names = sel.map((id) => byId.get(id) ?? id).join('・');
  return `✅ テスト範囲を設定したよ！\n【${names}】\nこれから毎日の1問はこの範囲から届くよ。間違えても範囲設定からいつでも変えられるよ。`;
}

/**
 * Quick Reply の中身一式を組み立てる（LINE 形式への変換は webhook 側）。
 * era チップ（✅/⬜）＋ 固定チップ（↩最初から / 🔧詳しく設定 / ✅決定(N) / 📖学年ぜんぶ）。
 */
export function buildScopeQuickItems(
  subject: string,
  grade: number,
  sel: string[],
  detailBaseUrl: string
): ScopeQuickItem[] {
  const metas = getEraMetas(subject, grade);
  const selSet = new Set(sel);
  const items: ScopeQuickItem[] = [];

  for (const meta of metas) {
    const selected = selSet.has(meta.eraId);
    items.push({
      label: eraChipLabel(meta, selected),
      data: buildPickData(subject, grade, sel, meta.eraId),
    });
  }

  if (sel.length > 0) {
    items.push({
      label: '↩ 最初から',
      data: buildResetData(subject, grade),
    });
  }

  // 詳しく設定は最初のガイドから常に表示（選択ゼロでも即 /scope へ）
  items.push({
    label: '🔧 詳しく設定',
    url: buildDetailUrl(detailBaseUrl, sel),
  });

  items.push({
    label: `✅ この範囲で決定（${sel.length}）`,
    data: buildCommitData(subject, grade, sel),
  });

  items.push({
    label: '📖 学年ぜんぶでOK',
    data: buildClearCommitData(subject, grade),
  });

  return items;
}
