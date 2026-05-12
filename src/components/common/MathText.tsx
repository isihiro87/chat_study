// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { memo } from 'react';
import { renderMathInHtml } from '../../utils/math-formula';
import { convertRubyToHtml, hasRubyMarkup } from '../../utils/ruby';

interface MathTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'p' | 'span';
}

/**
 * テキスト内の √ や $...$ をKaTeXでレンダリングし、{漢字|よみ} を ruby に変換して表示するコンポーネント。
 * 数学コンテンツや ruby が含まれない場合はプレーンテキストと同等に動作する。
 */
export const MathText = memo(function MathText({ text, className, style, as: Tag = 'span' }: MathTextProps) {
  const hasMath = text.includes('√') || text.includes('$');
  const hasRuby = hasRubyMarkup(text);

  if (!hasMath && !hasRuby) {
    return <Tag className={className} style={style}>{text}</Tag>;
  }

  const html = hasMath ? renderMathInHtml(hasRuby ? convertRubyToHtml(text) : text)
    : convertRubyToHtml(text);

  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});
