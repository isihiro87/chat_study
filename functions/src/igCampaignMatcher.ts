import type { Firestore, Timestamp } from 'firebase-admin/firestore';
import type { IgCampaign } from './igTypes';

export function normalize(input: string): string {
  // NFKC で全角空白 (U+3000) → 半角空白に潰れた後、\s で吸収する。
  return input
    .normalize('NFKC')
    .toLowerCase()
    .replace(/\s+/g, '');
}

export interface MatchResult {
  campaign: IgCampaign;
  matchedKeyword: string;
}

export function matchKeyword(
  text: string,
  keywords: readonly string[],
): string | null {
  const normalizedText = normalize(text);
  if (!normalizedText) return null;
  for (const kw of keywords) {
    const normalizedKw = normalize(kw);
    if (!normalizedKw) continue;
    if (normalizedText.includes(normalizedKw)) return kw;
  }
  return null;
}

export function isWithinPeriod(
  campaign: Pick<IgCampaign, 'startsAt' | 'endsAt'>,
  now: Date = new Date(),
): boolean {
  const startMs = campaign.startsAt.toMillis();
  const endMs = campaign.endsAt.toMillis();
  const nowMs = now.getTime();
  return startMs <= nowMs && nowMs < endMs;
}

/**
 * 候補キャンペーン群から最初にマッチするものを返す。
 * 投稿 ID は呼び出し側で一致確認済みである前提。
 */
export function pickMatch(
  candidates: readonly IgCampaign[],
  text: string,
  now: Date = new Date(),
): MatchResult | null {
  for (const c of candidates) {
    if (!c.isActive) continue;
    if (!isWithinPeriod(c, now)) continue;
    const matched = matchKeyword(text, c.keywords);
    if (matched) return { campaign: c, matchedKeyword: matched };
  }
  return null;
}

/**
 * Firestore から mediaId / isActive で候補を引いて、キーワード AND 判定する。
 */
export async function findMatchingCampaign(
  db: Firestore,
  mediaId: string,
  text: string,
  now: Date = new Date(),
): Promise<MatchResult | null> {
  const snap = await db
    .collection('igCampaigns')
    .where('mediaId', '==', mediaId)
    .where('isActive', '==', true)
    .get();

  if (snap.empty) return null;

  const candidates: IgCampaign[] = snap.docs.map((d) => {
    const data = d.data() as Omit<IgCampaign, 'id'>;
    return { id: d.id, ...data };
  });

  return pickMatch(candidates, text, now);
}

// テスト容易性のため、Timestamp を意識せず Date で扱えるヘルパー
export function makeTimestampLike(date: Date): Pick<Timestamp, 'toMillis'> {
  return { toMillis: () => date.getTime() };
}
