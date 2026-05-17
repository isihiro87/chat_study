/**
 * 指定ユーザーのオンボーディング関連フィールドを Firestore から削除し、
 * 「LINE 友だち追加直後の新規ユーザー」と同じ状態にリセットする。
 *
 * 用途: 新オンボーディング体験の動作確認（自分のアカウントで初回フローをもう一度通すため）。
 * 学習履歴 (`stats` / `studyStats` / `studyPrefs` / `answers` collection) は保持する。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/reset-user-onboarding.ts --uid line:Uxxxx --dry-run
 *   npx tsx scripts/reset-user-onboarding.ts --uid line:Uxxxx
 *
 * --include-test-scope を付けると testScope も消す (default: 保持)。
 *
 * 削除対象フィールド:
 *   grade, subject, preferredHour
 *   lastQuestionDeliveredAt, recentQuestionIds, lastAnsweredQuestionId
 *   lastSettingsChangeAt
 *   onboardingState, onboardingStartedAt, onboardingCompletedAt, onboardingReminderSentAt
 *   (--include-test-scope 指定時のみ) testScope
 *
 * 保持するフィールド:
 *   displayName, email, photoURL, lineUserId, provider, source, status,
 *   plan, premiumUntil, richMenuType, stats, studyStats, studyPrefs, lastActiveAt
 *
 * 実行後の手順:
 *   1. LINE で公式アカウントをブロック
 *   2. すぐにブロック解除 → follow event が再発火し、新ウェルカム + STEP1/3 学年選択 flex が届く
 */

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

const FIELDS_TO_DELETE = [
  'grade',
  'subject',
  'preferredHour',
  'lastQuestionDeliveredAt',
  'recentQuestionIds',
  'lastAnsweredQuestionId',
  'lastSettingsChangeAt',
  'onboardingState',
  'onboardingStartedAt',
  'onboardingCompletedAt',
  'onboardingReminderSentAt',
] as const;

interface CliArgs {
  uid: string | null;
  dryRun: boolean;
  includeTestScope: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  let uid: string | null = null;
  let dryRun = false;
  let includeTestScope = false;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--uid') {
      uid = argv[++i] ?? null;
    } else if (a === '--dry-run') {
      dryRun = true;
    } else if (a === '--include-test-scope') {
      includeTestScope = true;
    }
  }
  return { uid, dryRun, includeTestScope };
}

async function main() {
  const { uid, dryRun, includeTestScope } = parseArgs(process.argv.slice(2));
  if (!uid) {
    console.error('Usage: npx tsx scripts/reset-user-onboarding.ts --uid line:Uxxxx [--dry-run] [--include-test-scope]');
    process.exit(1);
  }

  const { initializeApp, applicationDefault, getApps } = await import(
    'firebase-admin/app'
  );
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const db = getFirestore();

  console.log(
    `[reset-user-onboarding] mode=${dryRun ? 'dry-run' : 'live'} uid=${uid} includeTestScope=${includeTestScope}`
  );

  const ref = db.doc(`users/${uid}`);
  const snap = await ref.get();
  if (!snap.exists) {
    console.error(`[reset-user-onboarding] user not found: ${uid}`);
    process.exit(1);
  }

  const data = snap.data() ?? {};
  const fieldsToDelete = [...FIELDS_TO_DELETE];
  if (includeTestScope) fieldsToDelete.push('testScope' as never);

  const existing = fieldsToDelete.filter((f) => f in data);
  const missing = fieldsToDelete.filter((f) => !(f in data));

  console.log(`[reset-user-onboarding] will delete (${existing.length}):`);
  for (const f of existing) console.log(`  - ${f}`);
  if (missing.length > 0) {
    console.log(`[reset-user-onboarding] not present (${missing.length}):`);
    for (const f of missing) console.log(`  - ${f}`);
  }

  if (dryRun) {
    console.log('[reset-user-onboarding] dry-run mode, no writes performed');
    return;
  }

  const update: Record<string, unknown> = {
    updatedAt: FieldValue.serverTimestamp(),
  };
  for (const f of existing) {
    update[f] = FieldValue.delete();
  }

  await ref.update(update);
  console.log(`[reset-user-onboarding] done: deleted ${existing.length} fields`);
}

main().catch((err) => {
  console.error('[reset-user-onboarding] failed:', err);
  process.exit(1);
});
