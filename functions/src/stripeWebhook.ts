import * as crypto from "crypto";
import * as functions from "firebase-functions/v1";

import { logServerFunnelEvent } from "./funnelEvent";
import {
  LineRichMenuApiError,
  LineRichMenuConfigError,
  linkRichMenuForUser,
} from "./lineRichMenu";

type StripeEventType =
  | "checkout.session.completed"
  | "customer.subscription.created"
  | "customer.subscription.updated"
  | "customer.subscription.deleted";

interface StripeEvent {
  id?: string;
  type?: StripeEventType | string;
  data?: {
    object?: Record<string, unknown>;
  };
}

function timingSafeEqual(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

function verifyStripeSignature(
  rawBody: Buffer,
  signatureHeader: string,
  secret: string
): boolean {
  const parts = signatureHeader.split(",").map((part) => part.trim());
  const timestamp = parts
    .find((part) => part.startsWith("t="))
    ?.slice("t=".length);
  const signatures = parts
    .filter((part) => part.startsWith("v1="))
    .map((part) => part.slice("v1=".length));
  if (!timestamp || signatures.length === 0) return false;

  const timestampMs = Number(timestamp) * 1000;
  if (!Number.isFinite(timestampMs)) return false;
  const toleranceMs = 5 * 60 * 1000;
  if (Math.abs(Date.now() - timestampMs) > toleranceMs) return false;

  const signedPayload = `${timestamp}.${rawBody.toString("utf8")}`;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  return signatures.some((sig) => timingSafeEqual(sig, expected));
}

function getString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function getMetadata(obj: Record<string, unknown>): Record<string, unknown> {
  const metadata = obj.metadata;
  return metadata && typeof metadata === "object"
    ? (metadata as Record<string, unknown>)
    : {};
}

function normalizeUid(value: string): string {
  if (!value) return "";
  return value.startsWith("line:") ? value : `line:${value}`;
}

function resolveUidFromStripeObject(obj: Record<string, unknown>): {
  uid: string;
  lineUserId: string;
} {
  const metadata = getMetadata(obj);
  const clientReferenceId = getString(obj.client_reference_id);
  const metadataUid = getString(metadata.uid);
  const metadataLineUserId = getString(metadata.lineUserId);
  const urlLineUserId = getString(obj.line_user_id);

  const uid = normalizeUid(
    metadataUid || clientReferenceId || metadataLineUserId || urlLineUserId
  );
  const lineUserId = uid.startsWith("line:") ? uid.slice("line:".length) : "";
  return { uid, lineUserId };
}

async function findUidByStripeIdentifiers(input: {
  customerId: string;
  subscriptionId: string;
}): Promise<{ uid: string; lineUserId: string } | null> {
  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  if (input.subscriptionId) {
    const bySubscription = await db
      .collection("users")
      .where("stripeSubscriptionId", "==", input.subscriptionId)
      .limit(1)
      .get();
    if (!bySubscription.empty) {
      const doc = bySubscription.docs[0];
      const lineUserId = doc.id.startsWith("line:")
        ? doc.id.slice("line:".length)
        : getString(doc.data().lineUserId);
      return { uid: doc.id, lineUserId };
    }
  }

  if (input.customerId) {
    const byCustomer = await db
      .collection("users")
      .where("stripeCustomerId", "==", input.customerId)
      .limit(1)
      .get();
    if (!byCustomer.empty) {
      const doc = byCustomer.docs[0];
      const lineUserId = doc.id.startsWith("line:")
        ? doc.id.slice("line:".length)
        : getString(doc.data().lineUserId);
      return { uid: doc.id, lineUserId };
    }
  }

  return null;
}

async function markPaid(input: {
  uid: string;
  lineUserId: string;
  customerId: string;
  subscriptionId: string;
  eventId: string;
}): Promise<void> {
  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  try {
    await linkRichMenuForUser(input.lineUserId, "premium");
  } catch (error) {
    if (
      error instanceof LineRichMenuConfigError ||
      error instanceof LineRichMenuApiError
    ) {
      console.error(
        `[stripeWebhook] premium rich menu link failed uid=${input.uid}:`,
        error
      );
    } else {
      throw error;
    }
  }

  await db.doc(`users/${input.uid}`).set(
    {
      plan: "premium",
      planSource: "paid",
      richMenuType: "premium",
      stripeCustomerId: input.customerId || null,
      stripeSubscriptionId: input.subscriptionId || null,
      paidStartedAt: FieldValue.serverTimestamp(),
      lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  await logServerFunnelEvent("paid_contract_started", input.uid, {
    eventId: input.eventId,
    stripeCustomerId: input.customerId || null,
    stripeSubscriptionId: input.subscriptionId || null,
  });
}

async function markSubscriptionEnded(input: {
  uid: string;
  lineUserId: string;
  eventId: string;
}): Promise<void> {
  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  try {
    await linkRichMenuForUser(input.lineUserId, "free");
  } catch (error) {
    console.error(
      `[stripeWebhook] free rich menu link failed uid=${input.uid}:`,
      error
    );
  }

  await db.doc(`users/${input.uid}`).set(
    {
      plan: "free",
      planSource: null,
      richMenuType: "free",
      paidEndedAt: FieldValue.serverTimestamp(),
      lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
}

export const stripeWebhook = functions
  .region("asia-northeast1")
  .https.onRequest(async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed");
      return;
    }

    const secret = process.env.STRIPE_WEBHOOK_SECRET || "";
    if (!secret) {
      console.error("[stripeWebhook] STRIPE_WEBHOOK_SECRET is not set");
      res.status(500).send("Server misconfigured");
      return;
    }

    const signature = req.get("stripe-signature") || "";
    if (!signature || !verifyStripeSignature(req.rawBody, signature, secret)) {
      console.warn("[stripeWebhook] invalid signature");
      res.status(400).send("Invalid signature");
      return;
    }

    let event: StripeEvent;
    try {
      event = JSON.parse(req.rawBody.toString("utf8")) as StripeEvent;
    } catch (error) {
      console.error("[stripeWebhook] invalid JSON:", error);
      res.status(400).send("Invalid JSON");
      return;
    }

    const obj = event.data?.object ?? {};
    const eventId = event.id || "";
    const eventType = event.type || "";
    const customerId = getString(obj.customer);
    const subscriptionId = getString(obj.subscription) || getString(obj.id);

    try {
      if (eventType === "checkout.session.completed") {
        const paymentStatus = getString(obj.payment_status);
        const mode = getString(obj.mode);
        if (mode === "subscription" && paymentStatus !== "paid") {
          res.json({ received: true, skipped: "unpaid_checkout" });
          return;
        }

        const resolved = resolveUidFromStripeObject(obj);
        if (!resolved.uid || !resolved.lineUserId) {
          console.error(
            "[stripeWebhook] missing uid/lineUserId in checkout session"
          );
          res.status(400).send("Missing uid");
          return;
        }

        await markPaid({
          uid: resolved.uid,
          lineUserId: resolved.lineUserId,
          customerId,
          subscriptionId,
          eventId,
        });
        res.json({ received: true });
        return;
      }

      if (
        eventType === "customer.subscription.created" ||
        eventType === "customer.subscription.updated"
      ) {
        const status = getString(obj.status);
        if (!["active", "trialing"].includes(status)) {
          res.json({ received: true, skipped: `subscription_${status}` });
          return;
        }
        const found = await findUidByStripeIdentifiers({
          customerId,
          subscriptionId: getString(obj.id),
        });
        if (!found) {
          res.json({ received: true, skipped: "user_not_found" });
          return;
        }
        await markPaid({
          uid: found.uid,
          lineUserId: found.lineUserId,
          customerId,
          subscriptionId: getString(obj.id),
          eventId,
        });
        res.json({ received: true });
        return;
      }

      if (eventType === "customer.subscription.deleted") {
        const found = await findUidByStripeIdentifiers({
          customerId,
          subscriptionId: getString(obj.id),
        });
        if (found) {
          await markSubscriptionEnded({
            uid: found.uid,
            lineUserId: found.lineUserId,
            eventId,
          });
        }
        res.json({ received: true });
        return;
      }

      res.json({ received: true, ignored: eventType });
    } catch (error) {
      console.error(
        `[stripeWebhook] handling failed type=${eventType}:`,
        error
      );
      res.status(500).send("Webhook handling failed");
    }
  });
