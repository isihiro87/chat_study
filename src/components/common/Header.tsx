import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export function Header({ title, subtitle, showBack = false }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex items-center px-4 py-3">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
            aria-label="戻る"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
        )}
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-800">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
}
