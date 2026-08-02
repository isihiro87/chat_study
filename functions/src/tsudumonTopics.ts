/**
 * つづもんの「節」（全92節）。章（`tsudumonUnits.ts` の19章）の1段下の粒度。
 *
 * ## なぜ要るか
 * テスト範囲を章だけで持つと粗すぎる。たとえば第08章「幕藩体制の確立」は9節あり、
 * 学校の範囲が「江戸幕府の成立〜享保の改革」でも**章まるごと**を範囲にするしかなく、
 * 習っていないところまで出題される（ユーザー指摘 2026-08-02）。
 *
 * ## データの出どころ
 * 新しいデータは作らない。`generated/reference-topics.generated.ts`
 * （`pdf-workbook/export_reference_topics.py` が出力）に92節ぶんの
 * 章番号・節名が既にあるので、そこから組み立てる。
 *
 * ## ⚠️ index は教材の `#t{i}` と一致する（ここがずれると行き先が壊れる）
 * 参考書 `reference/{NN}.json` と問題集 `books/{NN}-*.json` は**同じ順・同じ節数**で、
 * Web版はどちらも章内の通し番号 `#t{i}`（1始まり）で節を開く。
 * `REFERENCE_TOPICS` のキーの並びがその順なので、章ごとに数え上げた位置が
 * そのまま `#t{i}` になる（章05: 1=rise-of-bushi=「武士の成長」で実機確認済み）。
 * 教材側の節を増やす・並べ替えたときは、生成物を作り直せばここも追従する。
 */
import { REFERENCE_TOPICS } from './generated/reference-topics.generated';
import { TSUDUMON_UNITS } from './tsudumonUnits';

export interface TsudumonTopic {
  /** 節ID。`REFERENCE_TOPICS` のキー（例 '05-rise-of-bushi'） */
  id: string;
  /** 属する章番号（'01'〜'19'） */
  unitNo: string;
  /** 章内の通し番号（1始まり）。教材の `#t{index}` と一致する */
  index: number;
  /** 節名（例 '武士の成長'） */
  name: string;
}

/** 全92節。章番号→章内順の並び。 */
export const TSUDUMON_TOPICS: readonly TsudumonTopic[] = (() => {
  const seen = new Map<string, number>();
  const out: TsudumonTopic[] = [];
  // オブジェクトのキーは挿入順（数値風でない文字列キーなので順序が保たれる）
  for (const [id, t] of Object.entries(REFERENCE_TOPICS)) {
    const unitNo = id.slice(0, 2);
    const index = (seen.get(unitNo) ?? 0) + 1;
    seen.set(unitNo, index);
    out.push({ id, unitNo, index, name: t.name });
  }
  return out;
})();

const BY_ID = new Map(TSUDUMON_TOPICS.map((t) => [t.id, t]));
const BY_UNIT = new Map<string, TsudumonTopic[]>();
for (const t of TSUDUMON_TOPICS) {
  const list = BY_UNIT.get(t.unitNo);
  if (list) list.push(t);
  else BY_UNIT.set(t.unitNo, [t]);
}

/** その章の節（章内順）。未知の章は空配列。 */
export function topicsOfUnit(unitNo: string): readonly TsudumonTopic[] {
  return BY_UNIT.get(unitNo) ?? [];
}

export function topicById(id: string): TsudumonTopic | undefined {
  return BY_ID.get(id);
}

/** 節IDの配列から、重複を除いた章番号をカリキュラム順で返す。 */
export function unitNosOfTopics(topicIds: readonly string[]): string[] {
  const set = new Set<string>();
  for (const id of topicIds) {
    const t = BY_ID.get(id);
    if (t) set.add(t.unitNo);
  }
  return TSUDUMON_UNITS.filter((u) => set.has(u.no)).map((u) => u.no);
}

/**
 * 章を「その章の全節」に展開する。
 *
 * 旧データ（`unitNos` しか持たない `tsudumonExam`）を節ベースで扱うための橋。
 * 章にチェック＝その章ぜんぶ、という規則をここ1か所に閉じ込める。
 */
export function expandUnitsToTopics(unitNos: readonly string[]): string[] {
  const out: string[] = [];
  for (const u of TSUDUMON_UNITS) {
    if (unitNos.includes(u.no))
      out.push(...topicsOfUnit(u.no).map((t) => t.id));
  }
  return out;
}
