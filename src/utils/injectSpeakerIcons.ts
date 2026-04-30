/** speakable英文にインラインスピーカーアイコンを注入する */

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const SPEAKER_SVG =
  '<svg class="speaker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';

export function injectSpeakerIcons(
  html: string,
  speakable: string[],
): string {
  const unique = [...new Set(speakable)].filter((s) => s.length > 0);
  if (unique.length === 0) return html;

  // 長いマッチを優先し、'in' のような短い語が他語の部分一致を奪わないようにする
  const sorted = [...unique].sort((a, b) => b.length - a.length);
  const pattern = sorted.map(escapeRegExp).join('|');
  const regex = new RegExp(`(${pattern})`, 'g');

  // HTMLタグ内に注入されないよう、タグとテキストに分割しテキスト部分のみ置換する。
  // これがないと 'on' が後続反復で polygon / none / speaker-icon 等にマッチし、
  // SVGが壊れて巨大表示される（class="speaker-icon" が破損しCSSが効かなくなるため）。
  const parts = html.split(/(<[^>]+>)/);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part || part.startsWith('<')) continue;
    parts[i] = part.replace(regex, (match) => {
      const attr = match.replace(/"/g, '&quot;');
      return `<span class="speakable-inline" data-speak-text="${attr}">${match}${SPEAKER_SVG}</span>`;
    });
  }
  return parts.join('');
}
