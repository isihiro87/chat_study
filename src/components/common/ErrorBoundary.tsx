import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-4">
          <span className="mb-4 text-6xl">😵</span>
          <h1
            className="mb-2 text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            問題が発生しました
          </h1>
          <p
            className="mb-6 text-center text-sm text-gray-500"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            ページの表示中にエラーが起きました。
            <br />
            トップページに戻ってやり直してください。
          </p>
          <a
            href="/"
            className="rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            トップページへ
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
