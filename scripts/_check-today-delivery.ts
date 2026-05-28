/**
 * 今日（JST）の配信内容を確認するワンショット集計。
 *
 * 各ユーザーの `lastQuestionDeliveredAt` が今日 (JST) のユーザーを抽出し、
 * `recentQuestionIds` の末尾を当日出題 ID とみなして、`questions` コレクションから
 * 実際の問題テキストを取得して表示する。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
const db = getFirestore();

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
function jstDateStr(d: Date): string {
  return new Date(d.getTime() + JST_OFFSET_MS).toISOString().slice(0, 10);
}
function jstTimeStr(d: Date): string {
  return new Date(d.getTime() + JST_OFFSET_MS).toISOString().slice(11, 19);
}

async function main() {
  const now = new Date();
  const today = jstDateStr(now);
  console.log(`[check-today] JST today = ${today}`);

  const usersSnap = await db.collection("users").get();

  interface UserDelivered {
    uid: string;
    lineUserId?: string;
    nickname?: string;
    grade?: number;
    subject?: string;
    preferredHour?: number;
    plan?: string;
    deliveredAt: Date;
    deliveredJstTime: string;
    lastQuestionId?: string;
    answered: boolean;
    answeredCorrect?: boolean;
  }

  const todayDelivered: UserDelivered[] = [];
  const notDeliveredToday: { uid: string; preferredHour?: number; lineUserId?: string; status?: string }[] = [];

  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (typeof data.lineUserId === "string" && ADMIN.has(data.lineUserId)) continue;

    const lqd = data.lastQuestionDeliveredAt as Timestamp | undefined;
    const lqdDate = lqd && typeof lqd.toDate === "function" ? lqd.toDate() : undefined;
    const lqdJst = lqdDate ? jstDateStr(lqdDate) : undefined;

    if (lqdJst === today) {
      const recent = (data.recentQuestionIds as string[] | undefined) ?? [];
      const lastQuestionId = recent.length > 0 ? recent[recent.length - 1] : undefined;
      const lastAnswered = data.lastAnsweredQuestionId as string | undefined;
      todayDelivered.push({
        uid: doc.id,
        lineUserId: data.lineUserId,
        nickname: data.nickname,
        grade: data.grade,
        subject: data.subject,
        preferredHour: data.preferredHour,
        plan: data.plan,
        deliveredAt: lqdDate!,
        deliveredJstTime: jstTimeStr(lqdDate!),
        lastQuestionId,
        answered: lastAnswered === undefined && lastQuestionId !== undefined ? false : !!lastAnswered,
      });
    } else {
      notDeliveredToday.push({
        uid: doc.id,
        preferredHour: data.preferredHour,
        lineUserId: data.lineUserId,
        status: data.status,
      });
    }
  }

  // 出題された問題の内容を取得
  const allQids = Array.from(
    new Set(todayDelivered.map((d) => d.lastQuestionId).filter((id): id is string => !!id))
  );
  const questionMap = new Map<string, { topic?: string; question?: string; choices?: string[] }>();
  console.log(`[check-today] fetching ${allQids.length} question docs ...`);
  await Promise.all(
    allQids.map(async (qid) => {
      try {
        const qdoc = await db.collection("questions").doc(qid).get();
        if (qdoc.exists) {
          const qd = qdoc.data() ?? {};
          questionMap.set(qid, {
            topic: qd.topic,
            question: qd.question ?? qd.statement ?? qd.prompt,
            choices: qd.choices ?? qd.options,
          });
        }
      } catch (err) {
        console.warn(`[check-today] question fetch fail ${qid}:`, err);
      }
    })
  );

  // 出力
  console.log(`\n========== 今日 (${today}) 配信されたユーザー: ${todayDelivered.length} 人 ==========`);

  // 配信時刻でソート
  todayDelivered.sort((a, b) => a.deliveredAt.getTime() - b.deliveredAt.getTime());

  for (const u of todayDelivered) {
    const q = u.lastQuestionId ? questionMap.get(u.lastQuestionId) : undefined;
    const lineId = u.lineUserId ? u.lineUserId.slice(0, 10) + "..." : "(no lineUserId)";
    const nick = u.nickname ?? "(no nick)";
    const grade = u.grade ? `中${u.grade}` : "?";
    const hour = typeof u.preferredHour === "number" ? `${u.preferredHour}時希望` : "未設定";
    console.log(`\n--- ${u.deliveredJstTime} JST | ${nick} | ${grade} | ${u.subject ?? "?"} | ${hour} | plan=${u.plan ?? "unset"} | ${lineId}`);
    if (u.lastQuestionId) {
      console.log(`   questionId: ${u.lastQuestionId}`);
      if (q) {
        console.log(`   topic     : ${q.topic ?? "(no topic)"}`);
        console.log(`   question  : ${(q.question ?? "(no text)").slice(0, 100)}`);
        if (q.choices && q.choices.length > 0) {
          q.choices.forEach((c, i) => console.log(`     ${i + 1}. ${c.slice(0, 60)}`));
        }
      } else {
        console.log(`   (questions doc 未存在: 旧形式の topic-based 出題かも)`);
      }
      console.log(`   answered  : ${u.answered ? "✅ 回答済" : "未回答"}`);
    }
  }

  // 配信されなかったユーザー
  console.log(`\n========== 今日まだ配信されていないユーザー: ${notDeliveredToday.length} 人 ==========`);
  const hourCount = new Map<number | string, number>();
  for (const u of notDeliveredToday) {
    const k = typeof u.preferredHour === "number" ? u.preferredHour : "未設定";
    hourCount.set(k, (hourCount.get(k) ?? 0) + 1);
  }
  for (const [k, v] of Array.from(hourCount.entries()).sort((a, b) => {
    if (typeof a[0] === "number" && typeof b[0] === "number") return a[0] - b[0];
    if (typeof a[0] === "number") return -1;
    return 1;
  })) {
    const label = typeof k === "number" ? `${k}時希望` : k;
    console.log(`  ${label}: ${v} 人`);
  }

  console.log("\n========== 完了 ==========");
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
