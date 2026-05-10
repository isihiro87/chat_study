import * as functions from "firebase-functions/v1";

export const onAnswerCreated = functions
  .region("asia-northeast1")
  .firestore.document("answers/{answerId}")
  .onCreate(async (snap) => {
    const data = snap.data();
    const questionId = typeof data.questionId === "string" ? data.questionId : "";
    const isCorrect = data.isCorrect === true;

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

    const updates: Record<string, FirebaseFirestore.FieldValue> = {
      totalAnswered: FieldValue.increment(1),
    };
    if (isCorrect) {
      updates.totalCorrect = FieldValue.increment(1);
    }

    try {
      await db.doc(`questions/${questionId}`).set(updates, { merge: true });
      console.log(
        `[onAnswerCreated] updated questions/${questionId}: isCorrect=${isCorrect}`
      );
    } catch (error) {
      console.error("[onAnswerCreated] update failed:", error);
    }
  });
