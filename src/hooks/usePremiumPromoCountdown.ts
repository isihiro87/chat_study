import { useEffect, useMemo, useState } from 'react';

export interface PromoCountdownState {
  promoEndAt: Date | null;
  isActive: boolean;
  isExpired: boolean;
  daysRemaining: number;
  hoursRemaining: number;
}

const UPDATE_INTERVAL_MS = 60 * 1000;

function parsePromoEnd(envValue: string | undefined): Date | null {
  if (!envValue) return null;
  const parsed = new Date(envValue);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function computeState(promoEndAt: Date | null, now: Date): PromoCountdownState {
  if (!promoEndAt) {
    return {
      promoEndAt: null,
      isActive: false,
      isExpired: false,
      daysRemaining: 0,
      hoursRemaining: 0,
    };
  }
  const diffMs = promoEndAt.getTime() - now.getTime();
  if (diffMs <= 0) {
    return {
      promoEndAt,
      isActive: false,
      isExpired: true,
      daysRemaining: 0,
      hoursRemaining: 0,
    };
  }
  const totalHours = Math.floor(diffMs / (60 * 60 * 1000));
  const daysRemaining = Math.floor(totalHours / 24);
  const hoursRemaining = totalHours - daysRemaining * 24;
  return {
    promoEndAt,
    isActive: true,
    isExpired: false,
    daysRemaining,
    hoursRemaining,
  };
}

export function usePremiumPromoCountdown(): PromoCountdownState {
  // env から取得した終了日時は実行中に変わらないので、メモ化して effect の deps に渡す
  const promoEndAt = useMemo(
    () =>
      parsePromoEnd(
        import.meta.env.VITE_PREMIUM_PROMO_END_AT as string | undefined,
      ),
    [],
  );
  const [state, setState] = useState<PromoCountdownState>(() =>
    computeState(promoEndAt, new Date()),
  );

  useEffect(() => {
    if (!promoEndAt) return;
    const tick = () => setState(computeState(promoEndAt, new Date()));
    tick();
    const id = window.setInterval(tick, UPDATE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [promoEndAt]);

  return state;
}
