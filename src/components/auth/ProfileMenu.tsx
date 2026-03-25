import { useState, type FormEvent } from 'react';
import { updateProfile } from 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';

export function ProfileMenu() {
  const { user, signOut } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!user) return null;

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await signOut();
    } catch {
      setSigningOut(false);
    }
  };

  const handleEditStart = () => {
    setNewName(user.displayName || '');
    setEditing(true);
    setSaved(false);
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed || trimmed === user.displayName) {
      setEditing(false);
      return;
    }
    setSaving(true);
    try {
      await updateProfile(user, { displayName: trimmed });
      setSaved(true);
      setEditing(false);
    } catch {
      // エラー時は何もしない
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="flex items-center gap-3">
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold">
            {(user.displayName || user.email || '?')[0]}
          </div>
        )}
        <div className="flex-1 min-w-0">
          {editing ? (
            <form onSubmit={handleSave} className="flex gap-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="flex-1 min-w-0 px-2 py-1 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                autoFocus
                maxLength={30}
              />
              <button
                type="submit"
                disabled={saving}
                className="px-3 py-1 bg-gray-800 text-white text-xs rounded-lg active:scale-95 transition-transform disabled:opacity-50"
              >
                {saving ? '...' : '保存'}
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-2 py-1 text-xs text-gray-400"
              >
                取消
              </button>
            </form>
          ) : (
            <>
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {user.displayName || 'ユーザー'}
                </p>
                <button
                  onClick={handleEditStart}
                  className="text-xs text-amber-500 hover:text-amber-600 shrink-0"
                >
                  変更
                </button>
              </div>
              {saved && (
                <p className="text-xs text-emerald-500">名前を変更しました</p>
              )}
              <p className="text-xs text-gray-400 truncate">
                {user.email}
              </p>
            </>
          )}
        </div>
      </div>
      <button
        onClick={handleSignOut}
        disabled={signingOut}
        className="w-full mt-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-full hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-50"
      >
        {signingOut ? 'ログアウト中...' : 'ログアウト'}
      </button>
    </div>
  );
}
