const RUBY_PATTERN = /\{([^{}|]+)\|([^{}|]+)\}/g;

export function hasRubyMarkup(text: string): boolean {
  return /\{[^{}|]+\|[^{}|]+\}/.test(text);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function convertRubyToHtml(text: string): string {
  return text.replace(RUBY_PATTERN, (_m, base: string, reading: string) =>
    `<ruby>${escapeHtml(base)}<rt>${escapeHtml(reading)}</rt></ruby>`,
  );
}

export function stripRuby(text: string): string {
  return text.replace(RUBY_PATTERN, (_m, base: string) => base);
}
