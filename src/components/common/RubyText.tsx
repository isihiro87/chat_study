// Security: dangerouslySetInnerHTML is used with static content data only (no user input or API data).
import { memo } from 'react';
import { convertRubyToHtml, hasRubyMarkup } from '../../utils/ruby';

interface RubyTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'p' | 'span' | 'div';
}

/**
 * {漢字|よみ} 形式のインライン ruby 記法をパースして <ruby> タグで表示する軽量コンポーネント。
 * KaTeX 等の重い依存を含まないので LIFF など slim ビルドからも利用可能。
 */
export const RubyText = memo(function RubyText({ text, className, style, as: Tag = 'span' }: RubyTextProps) {
  if (!hasRubyMarkup(text)) {
    return <Tag className={className} style={style}>{text}</Tag>;
  }

  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: convertRubyToHtml(text) }}
    />
  );
});
