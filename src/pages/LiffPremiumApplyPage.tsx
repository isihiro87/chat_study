import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { withFirestoreTimeout } from '../utils/firestoreTimeout';
import {
  CONTACT_TIME_BAND_LABEL,
  PAYMENT_PREFERENCE_LABEL,
  PREMIUM_APPLICATION_NOTE_MAX_LENGTH,
  type ApplicationGrade,
  type ApplicationPreferredHour,
  type ApplicationSubject,
  type ContactTimeBand,
  type PaymentPreference,
} from '../types/premium';

type Plan = 'free' | 'premium';
type Status = 'loading' | 'ready' | 'already_premium' | 'submitting' | 'submitted' | 'error';

interface UserProfile {
  subject: ApplicationSubject | null;
  grade: ApplicationGrade | null;
  preferredHour: ApplicationPreferredHour | null;
  plan: Plan;
}

const CONTACT_TIME_OPTIONS: ContactTimeBand[] = [
  'morning',
  'afternoon',
  'evening',
  'anytime',
];

const PAYMENT_OPTIONS: PaymentPreference[] = [
  'bank_transfer',
  'credit_card',
  'undecided',
];

/**
 * LIFF プレミアム申込フォーム。
 *
 * 認証必須。Firebase Auth 確立後、users/{uid} を読んで plan を確認:
 * - premium ならフォームを出さず「すでにプレミアム」案内
 * - free ならフォーム表示 → 送信で premiumApplications/{autoId} に書き込み
 *
 * LINE displayName は送信時に liff.getProfile() で取得して同梱する。
 * 申込ステータスは初期値 "pending" 固定（firestore.rules で強制）。
 */
export function LiffPremiumApplyPage() {
  const { user, loading } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_PREMIUM_APPLY as string | undefined,
  );

  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const [parentName, setParentName] = useState('');
  const [contactTimeBand, setContactTimeBand] =
    useState<ContactTimeBand | null>(null);
  const [paymentPreference, setPaymentPreference] =
    useState<PaymentPreference | null>(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await withFirestoreTimeout(
          getDoc(doc(db, 'users', user.uid)),
          5000,
          `getDoc users/${user.uid} (premium-apply)`,
        );
        if (cancelled) return;
        const data = snap.exists() ? snap.data() : {};
        const plan = ((data.plan as Plan | undefined) ?? 'free') as Plan;
        setProfile({
          subject: (data.subject as ApplicationSubject | undefined) ?? null,
          grade: (data.grade as ApplicationGrade | undefined) ?? null,
          preferredHour:
            (data.preferredHour as ApplicationPreferredHour | undefined) ??
            null,
          plan,
        });
        setStatus(plan === 'premium' ? 'already_premium' : 'ready');
      } catch (err) {
        console.error('[LiffPremiumApplyPage] load failed', err);
        if (!cancelled) {
          setErrorMessage('読み込みに失敗しました。再度開き直してください。');
          setStatus('error');
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  const canSubmit = useMemo(() => {
    if (status !== 'ready') return false;
    if (!contactTimeBand) return false;
    if (!paymentPreference) return false;
    if (note.length > PREMIUM_APPLICATION_NOTE_MAX_LENGTH) return false;
    return true;
  }, [status, contactTimeBand, paymentPreference, note.length]);

  const handleSubmit = async () => {
    if (!user || !profile) return;
    if (!contactTimeBand || !paymentPreference) return;
    setStatus('submitting');
    setErrorMessage(null);

    let displayName = '';
    try {
      const liff = (await import('@line/liff')).default;
      if (liff.isLoggedIn()) {
        const p = await liff.getProfile();
        displayName = p.displayName ?? '';
      }
    } catch (err) {
      console.warn('[LiffPremiumApplyPage] getProfile failed (continue)', err);
    }

    const lineUserId = user.uid.startsWith('line:')
      ? user.uid.slice('line:'.length)
      : user.uid;

    try {
      await withFirestoreTimeout(
        addDoc(collection(db, 'premiumApplications'), {
          uid: user.uid,
          lineUserId,
          displayName,
          subject: profile.subject,
          grade: profile.grade,
          preferredHour: profile.preferredHour,
          parentName: parentName.trim() ? parentName.trim() : null,
          contactTimeBand,
          paymentPreference,
          note: note.trim() ? note.trim() : null,
          status: 'pending' as const,
          createdAt: serverTimestamp(),
        }),
        7000,
        'addDoc premiumApplications',
      );
      setStatus('submitted');
    } catch (err) {
      console.error('[LiffPremiumApplyPage] submit failed', err);
      setErrorMessage(
        '送信できませんでした。通信状況を確認のうえ、もう一度お試しください。',
      );
      setStatus('ready');
    }
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }
  if (!user) {
    return <Navigate to="/welcome?next=/liff/premium-apply" replace />;
  }
  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'error' && !profile) {
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

  if (status === 'already_premium') {
    return (
      <div className="min-h-screen bg-[#FAF9F7] pb-12">
        <header className="bg-amber-500">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <h1
              className="text-xl font-bold text-white text-center"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ✨ ご利用ありがとうございます
            </h1>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4">
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5 text-center">
            <p
              className="text-sm font-bold text-gray-800 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              すでにプレミアムをご利用中です
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              追加のお手続きは不要です。設定や解約のご相談はリッチメニュー「設定・サポート」からお問い合わせください。
            </p>
          </section>
        </main>
      </div>
    );
  }

  if (status === 'submitted') {
    return (
      <div className="min-h-screen bg-[#FAF9F7] pb-12">
        <header className="bg-amber-500">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <h1
              className="text-xl font-bold text-white text-center"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ✅ 申込を受け付けました
            </h1>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4">
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              24時間以内に担当者からLINEで連絡いたします。
              <br />
              ご希望の時間帯にあわせてご案内します。
            </p>
          </section>
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
            <p
              className="text-xs font-bold text-gray-700 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              次のステップ
            </p>
            <ol className="text-xs text-gray-600 space-y-1.5 leading-relaxed list-decimal pl-5">
              <li>担当者がLINEでご連絡します</li>
              <li>支払いのご案内に従ってお手続き</li>
              <li>確認後、リッチメニューが切り替わります</li>
            </ol>
          </section>
          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            このページは閉じていただいて構いません
          </p>
        </main>
      </div>
    );
  }

  const s = profile!;
  const submitting = status === 'submitting';

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-amber-500">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1
            className="text-xl font-bold text-white text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ✨ プレミアム申込フォーム
          </h1>
          <p className="text-xs text-white/90 text-center mt-1">
            内容を確認のうえ、担当者からLINEでご連絡します
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 space-y-4 mt-4">
        {/* 自動コピー欄（読み取り専用） */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">登録内容（自動）</div>
          <dl className="text-sm text-gray-700 space-y-1">
            <div className="flex gap-2">
              <dt className="text-gray-500 w-16 shrink-0">教科</dt>
              <dd>{s.subject ? labelForSubject(s.subject) : '未設定'}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-500 w-16 shrink-0">学年</dt>
              <dd>{s.grade ?? '未設定'}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-gray-500 w-16 shrink-0">配信時刻</dt>
              <dd>{s.preferredHour ? `${s.preferredHour}時` : '未設定'}</dd>
            </div>
          </dl>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            変更は「設定・サポート」から行えます
          </p>
        </section>

        {/* 保護者氏名（任意） */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <label
            className="text-xs text-gray-500 mb-2 block"
            htmlFor="parent-name"
          >
            保護者氏名（任意）
          </label>
          <input
            id="parent-name"
            type="text"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            placeholder="例: 山田 太郎"
            maxLength={40}
            disabled={submitting}
            className="w-full rounded-xl border border-gray-200 focus:border-amber-400 outline-none px-3 py-2 text-sm disabled:opacity-50"
          />
        </section>

        {/* 連絡可能時間帯（必須） */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">
            連絡可能な時間帯<span className="text-red-500 ml-1">*</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {CONTACT_TIME_OPTIONS.map((band) => {
              const active = contactTimeBand === band;
              return (
                <button
                  key={band}
                  type="button"
                  onClick={() => setContactTimeBand(band)}
                  disabled={submitting}
                  className={`rounded-full py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {CONTACT_TIME_BAND_LABEL[band]}
                </button>
              );
            })}
          </div>
        </section>

        {/* 支払い希望（必須） */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">
            支払い希望<span className="text-red-500 ml-1">*</span>
          </div>
          <div className="flex flex-col gap-2">
            {PAYMENT_OPTIONS.map((pref) => {
              const active = paymentPreference === pref;
              return (
                <button
                  key={pref}
                  type="button"
                  onClick={() => setPaymentPreference(pref)}
                  disabled={submitting}
                  className={`rounded-full py-2 px-4 text-sm font-medium transition text-left ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  } disabled:opacity-50`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {PAYMENT_PREFERENCE_LABEL[pref]}
                </button>
              );
            })}
          </div>
        </section>

        {/* メモ（任意） */}
        <section className="bg-white rounded-2xl shadow-sm p-5">
          <label className="text-xs text-gray-500 mb-2 block" htmlFor="note">
            ご質問・ご要望（任意）
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="ご不明点や希望期間などあればお書きください"
            rows={4}
            maxLength={PREMIUM_APPLICATION_NOTE_MAX_LENGTH + 50}
            disabled={submitting}
            className="w-full rounded-xl border border-gray-200 focus:border-amber-400 outline-none px-3 py-2 text-sm leading-relaxed resize-none disabled:opacity-50"
          />
          <div className="flex justify-end mt-1">
            <span
              className={`text-xs ${
                note.length > PREMIUM_APPLICATION_NOTE_MAX_LENGTH
                  ? 'text-red-500'
                  : 'text-gray-400'
              }`}
            >
              {note.length} / {PREMIUM_APPLICATION_NOTE_MAX_LENGTH}
            </span>
          </div>
        </section>

        {errorMessage && (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        )}

        {/* 送信ボタン */}
        <section>
          <button
            type="button"
            onClick={() => void handleSubmit()}
            disabled={!canSubmit || submitting}
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {submitting ? '送信中...' : '申込内容を送信する'}
          </button>
          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            送信後、24時間以内に担当者からLINEで連絡します
          </p>
        </section>
      </main>
    </div>
  );
}

function labelForSubject(subject: ApplicationSubject): string {
  return subject === 'history' ? '歴史' : '英語';
}
