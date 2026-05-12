/**
 * Firestore 操作に hard timeout を付与するユーティリティ。
 *
 * Firestore-lite の getDoc は fetch ベースだが、デフォルトでタイムアウトを持たないため、
 * 通信障害や IndexedDB 競合などで「resolve も reject もしない」状態になる可能性がある。
 * その場合、await している UI コードが永久にロード画面を出し続けるため、
 * 明示的なタイムアウトでフォールバックを発火させる。
 */

export class FirestoreTimeoutError extends Error {
  constructor(operation: string, ms: number) {
    super(`Firestore operation timed out after ${ms}ms: ${operation}`);
    this.name = 'FirestoreTimeoutError';
  }
}

/**
 * `promise` が `timeoutMs` 以内に解決しない場合は FirestoreTimeoutError を throw する。
 * 元の promise はキャンセルされない（fetch 中の場合は完了したら結果は捨てられる）。
 */
export function withFirestoreTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  operation = 'firestore',
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new FirestoreTimeoutError(operation, timeoutMs));
    }, timeoutMs);
    promise
      .then((v) => {
        clearTimeout(timeoutId);
        resolve(v);
      })
      .catch((e) => {
        clearTimeout(timeoutId);
        reject(e);
      });
  });
}
