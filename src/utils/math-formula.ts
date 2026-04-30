/**
 * 数式のHTML構造化ヘルパー関数
 * chat.tsのformula文字列で使用し、分数・根号・上付き文字を構造化表示する
 */
import katex from 'katex';

/** 分数をKaTeX表記で表示 */
export const frac = (num: string, den: string): string =>
  `$\\frac{${num}}{${den}}$`;

/** 根号（√）をKaTeX表記で表示 */
export const sqrt = (content: string): string =>
  `$\\sqrt{${content}}$`;

/** 上付き文字（累乗など）をKaTeX表記で表示 */
export const sup = (base: string, exp: string): string =>
  `${base}$^{${exp}}$`;

/** KaTeX でテキストをレンダリング */
function katexRender(tex: string): string {
  try {
    return katex.renderToString(tex, {
      throwOnError: false,
      displayMode: false,
      output: 'html',
    });
  } catch {
    return tex;
  }
}

/**
 * √ パターンを KaTeX の $\sqrt{...}$ に変換する。
 * 対応パターン:
 *   √2, √3, √5      → $\sqrt{2}$
 *   √12, √49         → $\sqrt{12}$
 *   √(b²−4ac)        → $\sqrt{b^2-4ac}$
 *   ±√n              → $\pm\sqrt{n}$
 *
 * $...$ 内部の √ は変換しない（既にKaTeX管理下のため）。
 */
function convertSqrtToKatex(html: string): string {
  // $...$ ブロックを一時退避して √ 変換がKaTeX内部に干渉しないようにする
  const katexBlocks: string[] = [];
  const placeholder = '\x00KATEX';
  let escaped = html.replace(/\$[^$]+\$/g, (m) => {
    katexBlocks.push(m);
    return `${placeholder}${katexBlocks.length - 1}\x00`;
  });

  // HTMLタグを退避（<ruby>等がマッチしないように）
  const htmlTags: string[] = [];
  const tagPlaceholder = '\x01TAG';
  escaped = escaped.replace(/<[^>]+>/g, (m) => {
    htmlTags.push(m);
    return `${tagPlaceholder}${htmlTags.length - 1}\x01`;
  });

  // ±√(...) パターン
  escaped = escaped.replace(/([±]?)√\(([^)]+)\)/g, (_m, pm: string, content: string) => {
    const pmTex = pm === '±' ? '\\pm' : '';
    return `$${pmTex}\\sqrt{${content}}$`;
  });

  // ±√数字 パターン（1桁以上の数字）
  escaped = escaped.replace(/([±]?)√(\d+)/g, (_m, pm: string, digits: string) => {
    const pmTex = pm === '±' ? '\\pm' : '';
    return `$${pmTex}\\sqrt{${digits}}$`;
  });

  // 単独 √ + 英字（√a, √b など）
  escaped = escaped.replace(/([±]?)√([a-zA-Z])/g, (_m, pm: string, letter: string) => {
    const pmTex = pm === '±' ? '\\pm' : '';
    return `$${pmTex}\\sqrt{${letter}}$`;
  });

  // HTMLタグ復元 — \x01 はプレースホルダ用の意図した制御文字
  // eslint-disable-next-line no-control-regex
  escaped = escaped.replace(/\x01TAG(\d+)\x01/g, (_m, idx: string) => htmlTags[Number(idx)]);

  // KaTeXブロック復元 — \x00 はプレースホルダ用の意図した制御文字
  // eslint-disable-next-line no-control-regex
  escaped = escaped.replace(/\x00KATEX(\d+)\x00/g, (_m, idx: string) => katexBlocks[Number(idx)]);

  return escaped;
}

/**
 * formula文字列内の $...$ デリミタを検出し、KaTeXでレンダリングしたHTMLを返す。
 * また、√ パターンを自動検出してKaTeX化する。
 * $...$ 以外の部分はそのまま（HTMLタグ含む）保持される。
 */
export function renderMathInHtml(html: string): string {
  // ステップ1: √ を $\sqrt{...}$ に変換
  const withSqrt = convertSqrtToKatex(html);

  // ステップ2: $...$ をKaTeXでレンダリング
  return withSqrt.replace(/\$([^$]+)\$/g, (_match, tex: string) => katexRender(tex));
}
