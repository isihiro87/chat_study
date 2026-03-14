// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { memo } from 'react';
import { renderMathInHtml } from '../../utils/math-formula';

interface MathTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'p' | 'span';
}

/**
 * テキスト内の √ や $...$ をKaTeXでレンダリングして表示するコンポーネント。
 * 数学コンテンツに √ や分数が含まれない場合はプレーンテキストと同等に動作する。
 */
export const MathText = memo(function MathText({ text, className, style, as: Tag = 'span' }: MathTextProps) {
  // √ や $ を含まない場合はプレーンテキストとして表示（パフォーマンス最適化）
  if (!text.includes('√') && !text.includes('$')) {
    return <Tag className={className} style={style}>{text}</Tag>;
  }

  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: renderMathInHtml(text) }}
    />
  );
});
