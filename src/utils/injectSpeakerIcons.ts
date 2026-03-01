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
  const unique = [...new Set(speakable)];
  let result = html;
  for (const text of unique) {
    const escaped = escapeRegExp(text);
    const regex = new RegExp(`(${escaped})`, 'g');
    const attr = text.replace(/"/g, '&quot;');
    result = result.replace(
      regex,
      `<span class="speakable-inline" data-speak-text="${attr}">$1${SPEAKER_SVG}</span>`,
    );
  }
  return result;
}
