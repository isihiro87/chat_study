import * as functions from "firebase-functions/v1";

import { getJstDateString, nextStreakState, type StreakState } from "./streakState";

export const onAnswerCreated = functions
  .region("asia-northeast1")
  .firestore.document("answers/{answerId}")
  .onCreate(async (snap) => {
    const data = snap.data();
    const uid = typeof data.uid === "string" ? data.uid : "";
    const questionId = typeof data.questionId === "string" ? data.questionId : "";
    const isCorrect = data.isCorrect === true;
    const subject = typeof data.subject === "string" ? data.subject : "";
    const topic =
      typeof data.topic === "string" && data.topic.trim() !== ""
        ? data.topic
        : null;

    if (!questionId) {
      console.warn("[onAnswerCreated] missing questionId in answer:", snap.id);
      return;
    }

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const questionUpdates: Record<string, FirebaseFirestore.FieldValue> = {
      totalAnswered: FieldValue.increment(1),
    };
    if (isCorrect) {
      questionUpdates.totalCorrect = FieldValue.increment(1);
    }

    try {
      await db.doc(`questions/${questionId}`).set(questionUpdates, { merge: true });
      console.log(
        `[onAnswerCreated] updated questions/${questionId}: isCorrect=${isCorrect}`
      );
    } catch (error) {
      console.error("[onAnswerCreated] questions update failed:", error);
    }

    if (!uid) {
      console.warn("[onAnswerCreated] missing uid in answer; skip stats update:", snap.id);
      return;
    }

    const userRef = db.doc(`users/${uid}`);

    try {
      await db.runTransaction(async (tx) => {
        const userSnap = await tx.get(userRef);
        const userData = userSnap.exists ? userSnap.data() ?? {} : {};
        const prevStats = (userData.stats as Record<string, unknown> | undefined) ?? {};
        const prevStreak = (prevStats.streak as StreakState | undefined) ?? null;

        const todayJst = getJstDateString(new Date());
        const nextStreak = nextStreakState(prevStreak, todayJst);

        const statsPatch: Record<string, unknown> = {
          totalAnswered: FieldValue.increment(1),
          lastAnsweredAt: FieldValue.serverTimestamp(),
          streak: {
            current: nextStreak.current,
            longest: nextStreak.longest,
            lastStudyDate: nextStreak.lastStudyDate,
          },
        };
        if (isCorrect) {
          statsPatch.totalCorrect = FieldValue.increment(1);
        }
        if (subject) {
          const subjectPatch: Record<string, FirebaseFirestore.FieldValue> = {
            total: FieldValue.increment(1),
          };
          if (isCorrect) {
            subjectPatch.correct = FieldValue.increment(1);
          }
          statsPatch.bySubject = { [subject]: subjectPatch };
        }
        if (topic) {
          const topicPatch: Record<string, FirebaseFirestore.FieldValue> = {
            total: FieldValue.increment(1),
          };
          if (isCorrect) {
            topicPatch.correct = FieldValue.increment(1);
          }
          statsPatch.byTopic = { [topic]: topicPatch };
        }

        tx.set(userRef, { stats: statsPatch }, { merge: true });
      });
      console.log(`[onAnswerCreated] updated users/${uid}.stats`);
    } catch (error) {
      console.error("[onAnswerCreated] users stats update failed:", error);
    }
  });
