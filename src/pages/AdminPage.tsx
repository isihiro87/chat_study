import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/common/Header';

const ADMIN_EMAIL = 'ishimotty.gst@gmail.com';

interface UserSummary {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
  provider: string;
  lastActiveAt: string | null;
  quizAttempts: number;
  flashcardSessions: number;
}

interface QuizAttempt {
  topicId: string;
  subjectId: string;
  score: number;
  totalQuestions: number;
  completedAt: { seconds: number } | null;
  answers: { correct: boolean; timeMs: number }[];
}

interface FlashcardSession {
  topicId: string;
  subjectId: string;
  totalCards: number;
  firstRoundRemembered: number;
  firstRoundTotal: number;
  reviewRounds: number;
  completedAt: { seconds: number } | null;
}

export function AdminPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserSummary[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [quizData, setQuizData] = useState<QuizAttempt[]>([]);
  const [fcData, setFcData] = useState<FlashcardSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);

  const isAdmin = user?.email === ADMIN_EMAIL;

  // ユーザー一覧取得
  useEffect(() => {
    if (!isAdmin) return;

    async function fetchUsers() {
      try {
        const snap = await getDocs(collection(db, 'users'));
        const userList: UserSummary[] = [];
        for (const doc of snap.docs) {
          const data = doc.data();
          const quizSnap = await getDocs(collection(db, `users/${doc.id}/quizAttempts`));
          const fcSnap = await getDocs(collection(db, `users/${doc.id}/flashcardSessions`));
          userList.push({
            uid: doc.id,
            displayName: data.displayName || '名前未設定',
            email: data.email || '',
            photoURL: data.photoURL || null,
            provider: data.provider || 'google',
            lastActiveAt: data.lastActiveAt?.toDate?.()?.toISOString?.() || null,
            quizAttempts: quizSnap.size,
            flashcardSessions: fcSnap.size,
          });
        }
        setUsers(userList);
      } catch (e) {
        console.error('Failed to fetch users:', e);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [isAdmin]);

  // ユーザー詳細取得
  const loadUserDetail = async (uid: string) => {
    setSelectedUser(uid);
    setDetailLoading(true);
    try {
      const quizSnap = await getDocs(
        query(collection(db, `users/${uid}/quizAttempts`), orderBy('completedAt', 'desc'), limit(50)),
      );
      setQuizData(quizSnap.docs.map((d) => d.data() as QuizAttempt));

      const fcSnap = await getDocs(
        query(collection(db, `users/${uid}/flashcardSessions`), orderBy('completedAt', 'desc'), limit(50)),
      );
      setFcData(fcSnap.docs.map((d) => d.data() as FlashcardSession));
    } catch (e) {
      console.error('Failed to fetch user detail:', e);
    } finally {
      setDetailLoading(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <p className="text-gray-500">アクセス権限がありません</p>
      </div>
    );
  }

  const selectedUserInfo = users.find((u) => u.uid === selectedUser);

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Header title="管理画面" showBack />
      <main className="mx-auto max-w-2xl px-4 py-6 space-y-6">
        {/* ユーザー一覧 */}
        <section>
          <h2 className="text-sm font-semibold text-gray-600 mb-3">
            ユーザー一覧 ({users.length}人)
          </h2>
          {loading ? (
            <p className="text-sm text-gray-400">読み込み中...</p>
          ) : users.length === 0 ? (
            <p className="text-sm text-gray-400">まだユーザーがいません</p>
          ) : (
            <div className="space-y-2">
              {users.map((u) => (
                <button
                  key={u.uid}
                  onClick={() => loadUserDetail(u.uid)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm text-left transition-all hover:bg-gray-50 ${
                    selectedUser === u.uid ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  {u.photoURL ? (
                    <img src={u.photoURL} alt="" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold">
                      {u.displayName[0]}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{u.displayName}</p>
                    <p className="text-xs text-gray-400">{u.email}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-500">Q: {u.quizAttempts}回</p>
                    <p className="text-xs text-gray-500">FC: {u.flashcardSessions}回</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* ユーザー詳細 */}
        {selectedUser && (
          <section>
            <h2 className="text-sm font-semibold text-gray-600 mb-3">
              {selectedUserInfo?.displayName} の学習データ
            </h2>
            {detailLoading ? (
              <p className="text-sm text-gray-400">読み込み中...</p>
            ) : (
              <div className="space-y-4">
                {/* クイズ成績 */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">クイズ ({quizData.length}回)</h3>
                  {quizData.length === 0 ? (
                    <p className="text-xs text-gray-400">データなし</p>
                  ) : (
                    <div className="space-y-2">
                      {quizData.map((q, i) => {
                        const rate = q.totalQuestions > 0 ? Math.round((q.score / q.totalQuestions) * 100) : 0;
                        const avgTime = q.answers.length > 0
                          ? Math.round(q.answers.reduce((s, a) => s + a.timeMs, 0) / q.answers.length / 1000)
                          : 0;
                        const date = q.completedAt
                          ? new Date(q.completedAt.seconds * 1000).toLocaleDateString('ja-JP')
                          : '';
                        return (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <span className="text-gray-400 w-16 shrink-0">{date}</span>
                            <span className="text-gray-600 flex-1 truncate">{q.topicId}</span>
                            <span className={`font-bold ${rate >= 80 ? 'text-emerald-500' : rate >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                              {rate}%
                            </span>
                            <span className="text-gray-400 w-10 text-right">{avgTime}s</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* FC成績 */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">フラッシュカード ({fcData.length}回)</h3>
                  {fcData.length === 0 ? (
                    <p className="text-xs text-gray-400">データなし</p>
                  ) : (
                    <div className="space-y-2">
                      {fcData.map((fc, i) => {
                        const rate = fc.firstRoundTotal > 0
                          ? Math.round((fc.firstRoundRemembered / fc.firstRoundTotal) * 100)
                          : 0;
                        const date = fc.completedAt
                          ? new Date(fc.completedAt.seconds * 1000).toLocaleDateString('ja-JP')
                          : '';
                        return (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <span className="text-gray-400 w-16 shrink-0">{date}</span>
                            <span className="text-gray-600 flex-1 truncate">{fc.topicId}</span>
                            <span className={`font-bold ${rate >= 80 ? 'text-emerald-500' : rate >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                              初回{rate}%
                            </span>
                            <span className="text-gray-400">{fc.reviewRounds}周</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
