import { useState, type FormEvent } from 'react';

const CORRECT_PASSWORD = 'chat';

interface PasswordGateProps {
  onAuthenticated: () => void;
}

export function PasswordGate({ onAuthenticated }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm">
        <h1
          className="text-xl font-bold text-gray-800 text-center mb-6"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          チャットでスタディ
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            パスワードを入力してください
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            autoComplete="off"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">
              パスワードが違うみたい。もう一度試してね
            </p>
          )}
          <button
            type="submit"
            className="w-full mt-4 bg-gray-800 text-white py-3 rounded-full font-medium active:scale-95 transition-transform"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            はじめる
          </button>
        </form>
        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          パスワードがわからない場合は<br />
          <a
            href="https://www.instagram.com/guttoschool_jh2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 underline"
          >
            Instagram
          </a>
          からメッセージをください
        </p>
      </div>
    </div>
  );
}
