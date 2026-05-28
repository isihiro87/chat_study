import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore/lite';
import { db } from '../../firebase/config';

/**
 * Instagram コメント → DM → 公式LINE 集客キャンペーンの管理タブ。
 * AdminDashboardPage 配下のローカル限定タブ（本番ビルド除外）。
 */

interface CampaignRow {
  id: string;
  mediaId: string;
  mediaPermalink?: string;
  keywords: string[];
  commentReplyText: string;
  dmText: string;
  lineUrl: string;
  startsAt: Date;
  endsAt: Date;
  isActive: boolean;
}

interface FunnelCounts {
  commentCount: number;
  dmSent: number;
  dmFailed: number;
  lineFollowers: number;
  premiumApplications: number;
}

interface EditDraft {
  id?: string;
  mediaId: string;
  mediaPermalink: string;
  keywordsRaw: string;
  commentReplyText: string;
  dmText: string;
  lineUrl: string;
  startsAt: string;
  endsAt: string;
  isActive: boolean;
}

const EMPTY_DRAFT: EditDraft = {
  mediaId: '',
  mediaPermalink: '',
  keywordsRaw: '',
  commentReplyText: 'DM お送りしました📩 ご確認ください！',
  dmText:
    'コメントありがとうございます！\n以下から公式LINE にご登録ください👇\n{lineUrl}',
  lineUrl: '',
  startsAt: toLocalInput(new Date()),
  endsAt: toLocalInput(addDays(new Date(), 14)),
  isActive: true,
};

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 86_400_000);
}

function toLocalInput(date: Date): string {
  const pad = (n: number) => `${n}`.padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function fromLocalInput(input: string): Date {
  return new Date(input);
}

function parseKeywords(raw: string): string[] {
  return raw
    .split(/[、,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function buildCampaignFromDraft(
  draft: EditDraft,
  createdBy: string,
): {
  data: Record<string, unknown>;
  isNew: boolean;
} {
  const data: Record<string, unknown> = {
    mediaId: draft.mediaId.trim(),
    mediaPermalink: draft.mediaPermalink.trim() || null,
    keywords: parseKeywords(draft.keywordsRaw),
    commentReplyText: draft.commentReplyText.trim(),
    dmText: draft.dmText,
    lineUrl: draft.lineUrl.trim(),
    startsAt: Timestamp.fromDate(fromLocalInput(draft.startsAt)),
    endsAt: Timestamp.fromDate(fromLocalInput(draft.endsAt)),
    isActive: draft.isActive,
    updatedAt: serverTimestamp(),
  };
  const isNew = !draft.id;
  if (isNew) {
    data.createdAt = serverTimestamp();
    data.createdBy = createdBy;
  }
  return { data, isNew };
}

function rowToDraft(row: CampaignRow): EditDraft {
  return {
    id: row.id,
    mediaId: row.mediaId,
    mediaPermalink: row.mediaPermalink ?? '',
    keywordsRaw: row.keywords.join(', '),
    commentReplyText: row.commentReplyText,
    dmText: row.dmText,
    lineUrl: row.lineUrl,
    startsAt: toLocalInput(row.startsAt),
    endsAt: toLocalInput(row.endsAt),
    isActive: row.isActive,
  };
}

function formatDate(date: Date): string {
  return date
    .toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(/\//g, '-');
}

function campaignPhase(
  row: CampaignRow,
  now = new Date(),
): 'active' | 'scheduled' | 'ended' | 'disabled' {
  if (!row.isActive) return 'disabled';
  if (row.startsAt > now) return 'scheduled';
  if (row.endsAt <= now) return 'ended';
  return 'active';
}

const PHASE_LABEL: Record<
  ReturnType<typeof campaignPhase>,
  { label: string; className: string }
> = {
  active: { label: '実行中', className: 'bg-amber-500 text-white' },
  scheduled: { label: '予定', className: 'bg-amber-100 text-amber-800' },
  ended: { label: '終了', className: 'bg-gray-100 text-gray-600' },
  disabled: { label: '無効', className: 'bg-gray-200 text-gray-500' },
};

export function InstagramCampaignsTab({
  adminUid,
}: {
  adminUid: string;
}) {
  const [rows, setRows] = useState<CampaignRow[]>([]);
  const [counts, setCounts] = useState<Record<string, FunnelCounts>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'ended'>('all');
  const [draft, setDraft] = useState<EditDraft | null>(null);
  const [saving, setSaving] = useState(false);

  const reload = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const snap = await getDocs(collection(db, 'igCampaigns'));
      const list: CampaignRow[] = snap.docs.map((d) => {
        const data = d.data() as {
          mediaId?: string;
          mediaPermalink?: string;
          keywords?: string[];
          commentReplyText?: string;
          dmText?: string;
          lineUrl?: string;
          startsAt?: Timestamp;
          endsAt?: Timestamp;
          isActive?: boolean;
        };
        return {
          id: d.id,
          mediaId: data.mediaId ?? '',
          mediaPermalink: data.mediaPermalink,
          keywords: Array.isArray(data.keywords) ? data.keywords : [],
          commentReplyText: data.commentReplyText ?? '',
          dmText: data.dmText ?? '',
          lineUrl: data.lineUrl ?? '',
          startsAt: data.startsAt?.toDate?.() ?? new Date(0),
          endsAt: data.endsAt?.toDate?.() ?? new Date(0),
          isActive: data.isActive === true,
        };
      });
      list.sort((a, b) => b.startsAt.getTime() - a.startsAt.getTime());
      setRows(list);

      // ファネル集計（キャンペーンごとに並列クエリ）
      const countsEntries = await Promise.all(
        list.map(async (row): Promise<[string, FunnelCounts]> => {
          const [commentSnap, dmSentSnap, dmFailedSnap, usersSnap, appSnap] =
            await Promise.all([
              getDocs(
                query(
                  collection(db, 'igCommentEvents'),
                  where('campaignId', '==', row.id),
                ),
              ),
              getDocs(
                query(
                  collection(db, 'igDmEvents'),
                  where('campaignId', '==', row.id),
                  where('status', '==', 'sent'),
                ),
              ),
              getDocs(
                query(
                  collection(db, 'igDmEvents'),
                  where('campaignId', '==', row.id),
                  where('status', '==', 'failed'),
                ),
              ),
              getDocs(
                query(
                  collection(db, 'users'),
                  where('referrer.campaignId', '==', row.id),
                ),
              ),
              getDocs(
                query(
                  collection(db, 'premiumApplications'),
                  where('referrer.campaignId', '==', row.id),
                ),
              ).catch(() => ({ size: 0 }) as { size: number }),
            ]);
          return [
            row.id,
            {
              commentCount: commentSnap.size,
              dmSent: dmSentSnap.size,
              dmFailed: dmFailedSnap.size,
              lineFollowers: usersSnap.size,
              premiumApplications: appSnap.size,
            },
          ];
        }),
      );
      setCounts(Object.fromEntries(countsEntries));
    } catch (e) {
      console.error('[InstagramCampaignsTab] load failed:', e);
      setError(e instanceof Error ? e.message : '読み込みに失敗しました');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const filteredRows = useMemo(() => {
    const now = new Date();
    return rows.filter((r) => {
      const phase = campaignPhase(r, now);
      if (filter === 'all') return true;
      if (filter === 'active')
        return phase === 'active' || phase === 'scheduled';
      if (filter === 'ended') return phase === 'ended' || phase === 'disabled';
      return true;
    });
  }, [rows, filter]);

  const handleSave = useCallback(async () => {
    if (!draft) return;
    if (!draft.mediaId.trim()) {
      alert('mediaId は必須です');
      return;
    }
    if (parseKeywords(draft.keywordsRaw).length === 0) {
      alert('キーワードを 1 つ以上指定してください');
      return;
    }
    if (!draft.lineUrl.trim()) {
      alert('LINE 友だち追加 URL は必須です');
      return;
    }
    if (fromLocalInput(draft.startsAt) >= fromLocalInput(draft.endsAt)) {
      alert('終了日時は開始日時より後にしてください');
      return;
    }

    setSaving(true);
    try {
      const { data, isNew } = buildCampaignFromDraft(draft, adminUid);
      if (isNew) {
        await addDoc(collection(db, 'igCampaigns'), data);
      } else if (draft.id) {
        await setDoc(doc(db, 'igCampaigns', draft.id), data, { merge: true });
      }
      setDraft(null);
      await reload();
    } catch (e) {
      console.error('[InstagramCampaignsTab] save failed:', e);
      alert('保存に失敗しました: ' + (e instanceof Error ? e.message : ''));
    } finally {
      setSaving(false);
    }
  }, [draft, adminUid, reload]);

  const handleToggleActive = useCallback(
    async (row: CampaignRow) => {
      try {
        await updateDoc(doc(db, 'igCampaigns', row.id), {
          isActive: !row.isActive,
          updatedAt: serverTimestamp(),
        });
        await reload();
      } catch (e) {
        alert('切替に失敗: ' + (e instanceof Error ? e.message : ''));
      }
    },
    [reload],
  );

  const handleDelete = useCallback(
    async (row: CampaignRow) => {
      if (
        !confirm(
          `「${row.mediaId}」のキャンペーンを削除します。\nコメントログ (igCommentEvents) と DM ログ (igDmEvents) は残ります。よろしいですか？`,
        )
      ) {
        return;
      }
      try {
        await deleteDoc(doc(db, 'igCampaigns', row.id));
        await reload();
      } catch (e) {
        alert('削除に失敗: ' + (e instanceof Error ? e.message : ''));
      }
    },
    [reload],
  );

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        {(['all', 'active', 'ended'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              filter === f
                ? 'bg-amber-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {f === 'all' ? 'すべて' : f === 'active' ? '稼働/予定' : '終了/無効'}
          </button>
        ))}
        <button
          onClick={() => setDraft({ ...EMPTY_DRAFT })}
          className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white hover:bg-amber-600"
        >
          + 新規キャンペーン
        </button>
      </div>

      {loading && <p className="text-sm text-gray-400">読み込み中…</p>}
      {error && (
        <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg">
          {error}
        </div>
      )}

      {!loading && !error && filteredRows.length === 0 && (
        <p className="text-xs text-gray-400 p-4 bg-white rounded-xl shadow-sm">
          該当キャンペーンなし
        </p>
      )}

      <div className="space-y-3">
        {filteredRows.map((row) => {
          const phase = campaignPhase(row);
          const c = counts[row.id];
          const cv =
            c && c.dmSent > 0
              ? (c.lineFollowers / c.dmSent) * 100
              : null;
          return (
            <article
              key={row.id}
              className="bg-white rounded-xl shadow-sm p-4 space-y-3"
            >
              <header className="flex items-start gap-2">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${PHASE_LABEL[phase].className}`}
                >
                  {PHASE_LABEL[phase].label}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 truncate">
                    media: <span className="font-mono">{row.mediaId}</span>
                    {row.mediaPermalink && (
                      <>
                        {' · '}
                        <a
                          href={row.mediaPermalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 underline"
                        >
                          投稿を開く
                        </a>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-gray-700">
                    キーワード:{' '}
                    <span className="font-bold">
                      {row.keywords.join(' / ') || '(未設定)'}
                    </span>
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {formatDate(row.startsAt)} 〜 {formatDate(row.endsAt)}
                  </p>
                </div>
              </header>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                <Stat
                  label="コメント"
                  value={c?.commentCount.toLocaleString() ?? '—'}
                />
                <Stat
                  label="DM 送信"
                  value={c?.dmSent.toLocaleString() ?? '—'}
                />
                <Stat
                  label="DM 失敗"
                  value={c?.dmFailed.toLocaleString() ?? '—'}
                  alert={c ? c.dmFailed > 0 : false}
                />
                <Stat
                  label="LINE 友追加"
                  value={c?.lineFollowers.toLocaleString() ?? '—'}
                />
                <Stat
                  label="DM→友追加"
                  value={cv === null ? '—' : `${Math.round(cv)}%`}
                />
              </div>

              <div className="flex gap-2 flex-wrap text-xs">
                <button
                  onClick={() => setDraft(rowToDraft(row))}
                  className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  編集
                </button>
                <button
                  onClick={() => handleToggleActive(row)}
                  className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  {row.isActive ? '無効化' : '有効化'}
                </button>
                <button
                  onClick={() => handleDelete(row)}
                  className="px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100"
                >
                  削除
                </button>
                {c && c.premiumApplications > 0 && (
                  <span className="ml-auto text-amber-600 font-bold self-center">
                    体験申込 {c.premiumApplications.toLocaleString()} 件
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {draft && (
        <DraftEditor
          draft={draft}
          saving={saving}
          onChange={setDraft}
          onCancel={() => setDraft(null)}
          onSave={handleSave}
        />
      )}
    </section>
  );
}

function Stat({
  label,
  value,
  alert,
}: {
  label: string;
  value: string;
  alert?: boolean;
}) {
  return (
    <div className={`rounded-lg p-2 ${alert ? 'bg-red-50' : 'bg-gray-50'}`}>
      <p className="text-[10px] text-gray-500">{label}</p>
      <p
        className={`text-sm font-bold ${
          alert ? 'text-red-600' : 'text-gray-800'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function DraftEditor({
  draft,
  saving,
  onChange,
  onCancel,
  onSave,
}: {
  draft: EditDraft;
  saving: boolean;
  onChange: (next: EditDraft) => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  const setField = <K extends keyof EditDraft>(key: K, value: EditDraft[K]) =>
    onChange({ ...draft, [key]: value });

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-2">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-sm overflow-y-auto max-h-[90vh]">
        <header className="px-4 py-3 border-b sticky top-0 bg-white">
          <h2 className="text-sm font-bold text-gray-800">
            {draft.id ? 'キャンペーン編集' : '新規キャンペーン'}
          </h2>
        </header>
        <div className="p-4 space-y-3 text-xs">
          <Field
            label="Instagram 投稿 ID (mediaId)"
            value={draft.mediaId}
            onChange={(v) => setField('mediaId', v)}
            placeholder="例: 17891234567890"
            mono
          />
          <Field
            label="投稿 URL (任意、表示用)"
            value={draft.mediaPermalink}
            onChange={(v) => setField('mediaPermalink', v)}
            placeholder="https://www.instagram.com/p/XXXX/"
          />
          <FieldMulti
            label="トリガーキーワード (カンマ / 改行区切り)"
            value={draft.keywordsRaw}
            onChange={(v) => setField('keywordsRaw', v)}
            placeholder="ほしい, 資料"
            rows={2}
            hint="部分一致・大文字小文字無視・全角半角無視"
          />
          <FieldMulti
            label="公開コメント返信文"
            value={draft.commentReplyText}
            onChange={(v) => setField('commentReplyText', v)}
            rows={2}
          />
          <FieldMulti
            label="Instagram DM 文面 ({lineUrl} で URL 展開)"
            value={draft.dmText}
            onChange={(v) => setField('dmText', v)}
            rows={5}
            hint="DM 本文。{lineUrl} は LINE 友だち追加 URL に置換されます"
          />
          <Field
            label="LINE 友だち追加 URL (推奨: ?liff.state=ig_ref%3Dig_<id> 付き)"
            value={draft.lineUrl}
            onChange={(v) => setField('lineUrl', v)}
            placeholder="https://lin.ee/xxx?liff.state=ig_ref%3Dig_camp01"
          />
          <div className="grid grid-cols-2 gap-2">
            <Field
              label="開始日時"
              type="datetime-local"
              value={draft.startsAt}
              onChange={(v) => setField('startsAt', v)}
            />
            <Field
              label="終了日時"
              type="datetime-local"
              value={draft.endsAt}
              onChange={(v) => setField('endsAt', v)}
            />
          </div>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={draft.isActive}
              onChange={(e) => setField('isActive', e.target.checked)}
            />
            <span>有効（チェックを外すと Webhook 側で無視されます）</span>
          </label>
        </div>
        <footer className="px-4 py-3 border-t flex gap-2 sticky bottom-0 bg-white">
          <button
            onClick={onCancel}
            disabled={saving}
            className="flex-1 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 disabled:opacity-50"
          >
            キャンセル
          </button>
          <button
            onClick={onSave}
            disabled={saving}
            className="flex-1 px-3 py-2 rounded-lg bg-amber-500 text-white text-sm font-bold hover:bg-amber-600 disabled:opacity-50"
          >
            {saving ? '保存中…' : '保存'}
          </button>
        </footer>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  mono = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  mono?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] text-gray-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-1 w-full border rounded-lg px-2 py-1.5 text-sm ${
          mono ? 'font-mono' : ''
        }`}
      />
    </label>
  );
}

function FieldMulti({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] text-gray-600">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="mt-1 w-full border rounded-lg px-2 py-1.5 text-sm resize-y"
      />
      {hint && <span className="text-[10px] text-gray-400">{hint}</span>}
    </label>
  );
}
