import { useEffect, useState } from 'react';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { LiffAuthFailedScreen } from '../components/common/LiffAuthFailedScreen';

const GRADE_NUM_TO_LABEL = (g: 1 | 2 | 3 | null): GradeLabel | null => {
  if (g === 1) return '中1';
  if (g === 2) return '中2';
  if (g === 3) return '中3';
  return null;
};

type Subject = 'history' | 'english' | 'science';
type GradeLabel = '中1' | '中2' | '中3';
type PreferredHour = 6 | 7 | 16 | 18 | 20;
const NICKNAME_MAX_LEN = 20;

// 学年・教科の変更は 1 ユーザー 1 日（JST）あたりこの回数まで。
// 連続タップでの誤変更・乱用を防ぐ。保存のたびに最新カウントを読み直して判定する。
const LEARNING_CHANGE_LIMIT_PER_DAY = 3;

// 英語コンテンツは未配信のため非表示。配信開始時に
// { id: 'english', label: '英語', emoji: '🔤' } を追加する。
const SUBJECTS: { id: Subject; label: string; emoji: string }[] = [
  { id: 'history', label: '歴史', emoji: '⏳' },
  { id: 'science', label: '理科', emoji: '🔬' },
];

/** JST の 'YYYY-MM-DD'（日次カウントのリセット境界）。 */
function jstDateStr(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo' }).format(
    new Date()
  );
}

/** user doc から「今日あと何回 学年・教科を変更できるか」を求める。 */
function computeRemainingChanges(data: Record<string, unknown> | undefined): number {
  const date = typeof data?.learningChangeDate === 'string' ? data.learningChangeDate : null;
  const count = typeof data?.learningChangeCount === 'number' ? data.learningChangeCount : 0;
  const todayCount = date === jstDateStr() ? count : 0;
  return Math.max(0, LEARNING_CHANGE_LIMIT_PER_DAY - todayCount);
}

const GRADES: { value: GradeLabel; label: string }[] = [
  { value: '中1', label: '中1' },
  { value: '中2', label: '中2' },
  { value: '中3', label: '中3' },
];

const HOURS: { value: PreferredHour; label: string }[] = [
  { value: 6, label: '朝6時' },
  { value: 7, label: '朝7時' },
  { value: 16, label: '夕方4時' },
  { value: 18, label: '夕方6時' },
  { value: 20, label: '夜8時' },
];

// LIFF お問い合わせフォームへのリンク。
// 相対パスにすると、何らかの理由で Settings が www ドメインで開かれた場合に
// Web 版（LIFF ルート未登録）の NotFoundPage に落ちてしまう。LIFF URL を
// 明示することで、LINE 内ブラウザでも外部ブラウザでも LIFF SDK 経由で
// 正しい endpoint URL（line.chatstudy.jp 配下）に遷移する。
const LIFF_ID_CONTACT = import.meta.env.VITE_LIFF_ID_CONTACT as string | undefined;
const CONTACT_URL = LIFF_ID_CONTACT
  ? `https://liff.line.me/${LIFF_ID_CONTACT}`
  : 'https://line.chatstudy.jp/liff/contact';

interface UserSettings {
  nickname: string;
  subject: Subject | null;
  grade: GradeLabel | null;
  preferredHour: PreferredHour | null;
}

// この LIFF ページ自身の LIFF ID。Vercel に VITE_LIFF_ID_SETTINGS が未設定だと
// ビルド時に undefined となり、useLiffAuth が LIFF ログインを一切試みず認証失敗
// （「アプリを再起動してください」画面）になる。webhook 側と同じ既定 ID を
// フォールバックに持たせ、env 未設定でも確実に認証できるようにする。
const SETTINGS_LIFF_ID =
  (import.meta.env.VITE_LIFF_ID_SETTINGS as string | undefined) ??
  '2009587166-IvJl78Hk';

function sanitizeNickname(raw: string): string {
  return raw.replace(/\s+/g, ' ').trim().slice(0, NICKNAME_MAX_LEN);
}

type Status = 'loading' | 'ready' | 'saving' | 'saved' | 'error';

/**
 * 公式LINE のリッチメニュー「設定・サポート」から開かれる LIFF ページ。
 *
 * users/{uid} の subject / grade / preferredHour を編集可能。
 * お問い合わせ・FAQ への外部リンクを集約。
 *
 * Web 版（www.chatstudy.jp）の UI には影響しない。
 */
export function LiffSettingsPage() {
  const { user, loading, userDoc, userDocLoaded } = useAuth();

  const { attempted: liffAuthAttempted } = useLiffAuth(SETTINGS_LIFF_ID);

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [nicknameDraft, setNicknameDraft] = useState('');
  // 学年・教科の本日の残り変更回数（null = 取得前）。
  const [remainingChanges, setRemainingChanges] = useState<number | null>(null);

  useEffect(() => {
    if (settings) setNicknameDraft(settings.nickname);
  }, [settings]);

  // AuthContext がロード済みの userDoc から派生（getDoc 重複を排除）。
  // 以前は preferredHour / plan が UserDoc に含まれていなかったため追加 fetch
  // していたが、これらも UserDoc に格納するようになったので 1 回の fetch で完結。
  useEffect(() => {
    if (loading) return;
    if (!user) return;
    if (!userDocLoaded) return;

    setSettings({
      nickname: typeof userDoc?.nickname === 'string' ? userDoc.nickname : '',
      subject: (userDoc?.subject ?? null) as Subject | null,
      grade: GRADE_NUM_TO_LABEL(userDoc?.grade ?? null),
      preferredHour: (userDoc?.preferredHour ?? null) as PreferredHour | null,
    });
    setStatus('ready');

    // 学年・教科の本日の残り変更回数を取得（userDoc にはカウントを載せていない
    // ため 1 回だけ読む。設定ページは低頻度なので read 規律上も許容範囲）。
    let active = true;
    void (async () => {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (active) setRemainingChanges(computeRemainingChanges(snap.data()));
      } catch {
        // 取得失敗時は表示用にデフォルト上限を出す（保存時に再判定するので安全）。
        if (active) setRemainingChanges(LEARNING_CHANGE_LIMIT_PER_DAY);
      }
    })();
    return () => {
      active = false;
    };
  }, [user, loading, userDoc, userDocLoaded]);

  /**
   * 学年・教科の変更（1日3回まで）。保存直前に最新カウントを読み直して原子性に
   * 近い判定をし、上限到達時は書き込まずメッセージを出す。同値の再タップは
   * カウントを消費しない。
   */
  const saveLearningField = async (key: 'subject' | 'grade', value: string) => {
    if (!user || !settings) return;
    if (settings[key] === value) return; // 同じ値: 変更なし＝カウント消費しない
    setStatus('saving');
    setErrorMessage(null);
    try {
      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);
      const data = snap.data();
      const today = jstDateStr();
      const prevDate =
        typeof data?.learningChangeDate === 'string' ? data.learningChangeDate : null;
      const prevCount =
        typeof data?.learningChangeCount === 'number' ? data.learningChangeCount : 0;
      const todayCount = prevDate === today ? prevCount : 0;

      if (todayCount >= LEARNING_CHANGE_LIMIT_PER_DAY) {
        setRemainingChanges(0);
        setErrorMessage(
          `学年・教科の変更は1日${LEARNING_CHANGE_LIMIT_PER_DAY}回までです。また明日変更できます。`
        );
        setStatus('ready');
        return;
      }

      const newCount = todayCount + 1;
      await setDoc(
        ref,
        {
          [key]: value,
          learningChangeCount: newCount,
          learningChangeDate: today,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      setSettings((prev) => (prev ? { ...prev, [key]: value } : prev));
      setRemainingChanges(Math.max(0, LEARNING_CHANGE_LIMIT_PER_DAY - newCount));
      setStatus('saved');
      setTimeout(() => {
        setStatus((s) => (s === 'saved' ? 'ready' : s));
      }, 1500);
    } catch (err) {
      console.error('[LiffSettingsPage] learning save failed', err);
      setErrorMessage('保存できませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  const saveField = async <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) => {
    if (!user || !settings) return;
    setStatus('saving');
    setErrorMessage(null);
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        {
          [key]: value,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      setSettings((prev) => (prev ? { ...prev, [key]: value } : prev));
      setStatus('saved');
      setTimeout(() => {
        setStatus((s) => (s === 'saved' ? 'ready' : s));
      }, 1500);
    } catch (err) {
      console.error('[LiffSettingsPage] save failed', err);
      setErrorMessage('保存できませんでした。通信状況を確認してください。');
      setStatus('error');
    }
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <LiffAuthFailedScreen nextPath="/liff/settings" />;
  }

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'error' && !settings) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm text-red-600 mb-3">{errorMessage}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  const s = settings!;

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1
            className="text-lg font-bold text-gray-800 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ⚙️ 設定・サポート
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 space-y-4 mt-4">
        {/* ニックネーム */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">ニックネーム</div>
          <div className="flex gap-2">
            <input
              type="text"
              value={nicknameDraft}
              onChange={(e) => setNicknameDraft(e.target.value)}
              disabled={status === 'saving'}
              maxLength={NICKNAME_MAX_LEN}
              placeholder="例: たろう"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            />
            <button
              type="button"
              onClick={() => {
                const cleaned = sanitizeNickname(nicknameDraft);
                if (!cleaned) return;
                void saveField('nickname', cleaned);
              }}
              disabled={
                status === 'saving' ||
                sanitizeNickname(nicknameDraft) === s.nickname ||
                sanitizeNickname(nicknameDraft).length === 0
              }
              className="rounded-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition px-4 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              保存
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            最大 {NICKNAME_MAX_LEN} 文字。空白だけは保存できません。
          </p>
        </section>

        {/* 学年・教科の変更回数の案内（1日3回まで） */}
        <p className="text-xs text-gray-400 px-1">
          {remainingChanges === 0
            ? `本日の学年・教科の変更上限（${LEARNING_CHANGE_LIMIT_PER_DAY}回）に達しました。また明日変更できます。`
            : `学年・教科の変更は1日${LEARNING_CHANGE_LIMIT_PER_DAY}回まで${
                remainingChanges === null ? '' : `（今日はあと${remainingChanges}回）`
              }`}
        </p>

        {/* 教科 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">教科</div>
          <div className="flex gap-2">
            {SUBJECTS.map((sub) => {
              const active = s.subject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => void saveLearningField('subject', sub.id)}
                  disabled={status === 'saving' || remainingChanges === 0}
                  className={`flex-1 rounded-full py-2.5 px-4 text-sm font-medium transition ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <span className="mr-1">{sub.emoji}</span>
                  {sub.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 学年 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">学年</div>
          <div className="flex gap-2">
            {GRADES.map((g) => {
              const active = s.grade === g.value;
              return (
                <button
                  key={g.value}
                  onClick={() => void saveLearningField('grade', g.value)}
                  disabled={status === 'saving' || remainingChanges === 0}
                  className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 配信時刻 */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">毎日1問の配信時刻</div>
          <div className="grid grid-cols-2 gap-2">
            {HOURS.map((h) => {
              const active = s.preferredHour === h.value;
              return (
                <button
                  key={h.value}
                  onClick={() => void saveField('preferredHour', h.value)}
                  disabled={status === 'saving'}
                  className={`rounded-full py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {h.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 保存ステータス */}
        {status === 'saved' && (
          <p className="text-center text-sm text-amber-700">✓ 保存しました</p>
        )}
        {status === 'saving' && (
          <p className="text-center text-sm text-gray-500">保存中...</p>
        )}
        {status === 'error' && errorMessage && (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        )}

        {/* サポートリンク */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-3">サポート</div>
          <div className="flex flex-col gap-2">
            <a
              href={CONTACT_URL}
              className="block w-full text-center bg-white border border-gray-200 hover:border-amber-300 rounded-full py-3 text-sm font-medium text-gray-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              お問い合わせ
            </a>
          </div>
        </section>

        <div className="text-center text-xs text-gray-500 mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a
            href="https://www.chatstudy.jp/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            利用規約
          </a>
          <a
            href="https://www.chatstudy.jp/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            プライバシーポリシー
          </a>
          <a
            href="https://www.chatstudy.jp/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            特定商取引法に基づく表記
          </a>
        </div>
      </main>
    </div>
  );
}
