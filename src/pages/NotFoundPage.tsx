import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-4">
      <span className="mb-4 text-6xl">🔍</span>
      <h1
        className="mb-2 text-xl font-bold text-gray-800"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        ページが見つかりません
      </h1>
      <p
        className="mb-6 text-center text-sm text-gray-500"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        お探しのページは存在しないか、
        <br />
        移動した可能性があります。
      </p>
      <Link
        to="/"
        className="rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white active:scale-95"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        トップページへ
      </Link>
    </div>
  );
}
