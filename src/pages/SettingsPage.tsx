import { useState, useEffect } from 'react';
import { Header } from '../components/common/Header';
import { SEOHead } from '../components/common/SEOHead';
import { ProfileMenu } from '../components/auth/ProfileMenu';
import { clearProgress } from '../utils/studyProgressStorage';
import { useAuth } from '../contexts/AuthContext';
import { type ThemeMode, loadTheme, saveTheme, applyTheme } from '../utils/themeStorage';

const gradeOptions = [
  { value: null as number | null, label: '未設定' },
  { value: 1, label: '1年' },
  { value: 2, label: '2年' },
  { value: 3, label: '3年' },
];

const themeOptions: { value: ThemeMode; label: string }[] = [
  { value: 'light', label: 'ライト' },
  { value: 'dark', label: 'ダーク' },
  { value: 'system', label: '端末に合わせる' },
];

export function SettingsPage() {
  const { userProfile, updateUserProfile, deleteAccount } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(loadTheme);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleThemeChange = (mode: ThemeMode) => {
    setTheme(mode);
    saveTheme(mode);
    applyTheme(mode);
  };

  // system モード時にOS設定変更を追従
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const handleGradeChange = (value: number | null) => {
    updateUserProfile({ grade: value });
  };

  const handleReset = () => {
    clearProgress();
    setShowConfirm(false);
    setCleared(true);
  };

  const handleDelete = async () => {
    setDeleteError(null);
    setDeleting(true);
    try {
      await deleteAccount();
      // 成功時: AuthGuard が user=null を検知して LoginPage に遷移
    } catch (e) {
      const code = (e as { code?: string }).code;
      if (code === 'auth/requires-recent-login') {
        setDeleteError('セキュリティ確認のため、もう一度ログインしてからやり直してください');
      } else {
        setDeleteError('退会処理に失敗しました。時間をおいて再度お試しください');
      }
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <SEOHead
        title="設定"
        path="/settings"
        breadcrumbs={[
          { name: 'ホーム', path: '/' },
          { name: '設定', path: '/settings' },
        ]}
      />
      <Header title="設定" showBack />
      <main className="mx-auto max-w-md space-y-4 px-4 py-6">
        {/* アカウント */}
        <ProfileMenu />

        {/* テーマ設定 */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold text-gray-600">テーマ</h2>
          <div className="flex gap-2">
            {themeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleThemeChange(opt.value)}
                className={`flex-1 rounded-lg border-2 py-2.5 text-sm font-medium transition-colors ${
                  theme === opt.value
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 学年設定 */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold text-gray-600">学年</h2>
          <div className="flex gap-2">
            {gradeOptions.map((opt) => (
              <button
                key={String(opt.value)}
                onClick={() => handleGradeChange(opt.value)}
                className={`flex-1 rounded-lg border-2 py-2.5 text-sm font-medium transition-colors ${
                  userProfile.grade === opt.value
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 学習データ */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold text-gray-600">学習データ</h2>
          {cleared ? (
            <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
              学習データをリセットしました。ページを再読み込みすると反映されます。
            </div>
          ) : showConfirm ? (
            <div className="space-y-3">
              <p className="text-sm text-red-600">
                学習進捗・連続学習日数・お気に入りがすべて削除されます。この操作は取り消せません。
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="flex-1 rounded-lg bg-red-500 py-2.5 text-sm font-semibold text-white active:bg-red-600"
                >
                  リセットする
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-600 active:bg-gray-50"
                >
                  キャンセル
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-semibold text-red-500 active:bg-gray-50"
            >
              学習データをリセット
            </button>
          )}
        </div>

        {/* 退会 */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold text-gray-600">退会</h2>
          {showDeleteConfirm ? (
            <div className="space-y-3">
              <p className="text-sm text-red-600">
                アカウントとすべての学習データが削除されます。この操作は取り消せません。
              </p>
              {deleteError && (
                <p role="alert" className="text-sm text-red-600">{deleteError}</p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  aria-busy={deleting}
                  className="flex-1 rounded-lg bg-red-500 py-2.5 text-sm font-semibold text-white active:bg-red-600 disabled:opacity-50"
                >
                  {deleting ? '退会処理中...' : '本当に退会する'}
                </button>
                <button
                  onClick={() => { setShowDeleteConfirm(false); setDeleteError(null); }}
                  disabled={deleting}
                  className="flex-1 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-600 active:bg-gray-50 disabled:opacity-50"
                >
                  キャンセル
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full rounded-lg border border-red-200 bg-white py-2.5 text-sm font-semibold text-red-500 active:bg-red-50"
            >
              退会する
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
