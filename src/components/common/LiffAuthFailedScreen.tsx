import { Navigate } from 'react-router-dom';

/**
 * LIFF 認証に失敗してユーザーが確定しなかった場合の救済画面。
 *
 * 旧実装は `<Navigate to="/welcome?next=...">` でウェルカムページに飛ばしていたが、
 * LINE 内ブラウザでは /welcome の OAuth フローが正しく機能しないことが多く、
 * ユーザーは「読み込みエラー → ウェルカム → また失敗」のループに陥っていた。
 *
 * 本コンポーネントは:
 *   - LINE アプリ内（WebView）と判定したら → 完全終了・再起動を強く推奨する UI を表示
 *   - 外部ブラウザと判定したら → 従来通り /welcome に遷移
 *
 * LINE 内判定は User-Agent の `Line/` 文字列で行う（LIFF SDK をロードせずに同期判定可能）。
 */
interface Props {
  nextPath: string;
}

function isInsideLineApp(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /\bLine\//.test(navigator.userAgent);
}

export function LiffAuthFailedScreen({ nextPath }: Props) {
  // LINE 外（PC ブラウザなど）なら従来通りウェルカム経由の認証フロー
  if (!isInsideLineApp()) {
    const sep = nextPath.startsWith('/') ? '' : '/';
    return <Navigate to={`/welcome?next=${sep}${nextPath}`} replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm max-w-md w-full p-6 space-y-5">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600 text-3xl mb-3">
            🔄
          </div>
          <h1
            className="text-lg font-bold text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ページを開けませんでした
          </h1>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            LINE アプリのキャッシュが残っている可能性があります。
          </p>
        </div>

        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p
            className="text-sm font-bold text-amber-800 mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            👉 LINE アプリを完全に終了してから開き直してください
          </p>
          <p className="text-xs text-gray-700 leading-relaxed">
            ❌ ホームに戻るだけでは更新されません
            <br />
            ✅ アプリ切替画面から LINE を上にスワイプして消す
          </p>
          <div className="mt-3 text-xs text-gray-700 leading-relaxed space-y-1">
            <p>
              <strong>iPhone</strong>: 画面の下から上にスワイプして少し止め、
              アプリ一覧で LINE を上にスワイプ
            </p>
            <p>
              <strong>Android</strong>: 履歴ボタン（□）→ LINE を上にスワイプ
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition rounded-full py-3 text-sm font-bold text-white"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          このページをもう一度読み込む
        </button>

        <details className="text-[11px] text-gray-500 px-1">
          <summary className="cursor-pointer text-center text-gray-400">
            それでも開かないとき
          </summary>
          <ol className="mt-2 px-2 space-y-1 leading-relaxed list-decimal list-inside">
            <li>画面右上の「⋮」（縦三点）ボタンをタップ</li>
            <li>「すべてのタブ」を開く</li>
            <li>「チャットでスタディ」のタブを全て削除</li>
            <li>LINE のメニューからもう一度開き直す</li>
          </ol>
        </details>
      </div>
    </div>
  );
}
