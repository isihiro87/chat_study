import { useState } from 'react';
import { Header } from '../components/common/Header';
import { SEOHead } from '../components/common/SEOHead';
import { clearProgress } from '../utils/studyProgressStorage';

export function SettingsPage() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [cleared, setCleared] = useState(false);

  const handleReset = () => {
    clearProgress();
    setShowConfirm(false);
    setCleared(true);
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
      <main className="mx-auto max-w-md px-4 py-6">
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
      </main>
    </div>
  );
}
