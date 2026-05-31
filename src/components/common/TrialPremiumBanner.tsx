import { useAuth } from '../../contexts/AuthContext';

/**
 * trial 中ユーザー向けの帯バナー。
 * 各主要 LIFF ページの上部（header の直下）に挿入することで、
 * 「どこにいても本登録の入口が見える」状態を作る。
 * 遷移先は LIFF /liff/premium-info（情報→申込フォームの順で案内）。
 */
const PREMIUM_INFO_PATH = '/liff/premium-info';

export function TrialPremiumBanner() {
  const { userDoc } = useAuth();
  if (!userDoc) return null;
  if (userDoc.planSource !== 'trial') return null;
  if (!userDoc.premiumUntil) return null;
  const msLeft = userDoc.premiumUntil.getTime() - Date.now();
  if (msLeft <= 0) return null;
  const daysLeft = Math.max(1, Math.ceil(msLeft / (24 * 60 * 60 * 1000)));

  return (
    <a
      href={PREMIUM_INFO_PATH}
      className="block bg-amber-500 hover:bg-amber-600 transition px-4 py-2.5 text-center text-xs sm:text-sm font-bold text-white"
      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
    >
      ✨ プレミアム体験中（あと{daysLeft}日）　→ 本登録の詳細を見る
    </a>
  );
}
