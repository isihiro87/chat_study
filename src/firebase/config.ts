import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { validateEnv } from '../utils/validateEnv';

validateEnv();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// 永続化を localStorage（browserLocalPersistence）に固定する。
// getAuth() の既定は indexedDBLocalPersistence 優先だが、LINE アプリ内ブラウザ
// などの webview では IndexedDB への書き込みがハングし、signInWithCustomToken が
// resolve せず「LINEでログイン中...」のまま固まる事象があった。localStorage は
// これらの環境でも安定するため明示指定する（IndexedDB は使わない）。
// initializeAuth は getAuth より前に 1 度だけ呼ぶ必要があるため、ここで実行する。
export const auth = initializeAuth(app, {
  persistence: [
    browserLocalPersistence,
    browserSessionPersistence,
    inMemoryPersistence,
  ],
});
export const db = getFirestore(app);
