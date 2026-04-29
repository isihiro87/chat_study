export async function retryAsync<T>(
  fn: () => Promise<T>,
  options: { retries?: number; delayMs?: number } = {},
): Promise<T> {
  const { retries = 1, delayMs = 1000 } = options;
  let lastErr: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
  }
  throw lastErr;
}
