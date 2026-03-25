import * as functions from "firebase-functions/v1";

const LINE_LOGIN_CHANNEL_ID = process.env.LINE_LOGIN_CHANNEL_ID || "";
const LINE_LOGIN_CHANNEL_SECRET = process.env.LINE_LOGIN_CHANNEL_SECRET || "";

interface LineTokenResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  id_token: string;
}

interface LineProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
}

export const createLineCustomToken = functions
  .region("asia-northeast1")
  .https.onRequest(async (req, res) => {
    // CORS
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const { code, redirectUri } = req.body;
    if (!code || !redirectUri) {
      res.status(400).json({ error: "code and redirectUri are required" });
      return;
    }

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getAuth } = await import("firebase-admin/auth");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");

    if (getApps().length === 0) {
      initializeApp();
    }

    try {
      const tokenRes = await fetch("https://api.line.me/oauth2/v2.1/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
          client_id: LINE_LOGIN_CHANNEL_ID,
          client_secret: LINE_LOGIN_CHANNEL_SECRET,
        }),
      });

      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        console.error("LINE token exchange failed:", err);
        res.status(401).json({ error: "LINE token exchange failed" });
        return;
      }

      const tokenData = (await tokenRes.json()) as LineTokenResponse;

      const profileRes = await fetch("https://api.line.me/v2/profile", {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      });

      if (!profileRes.ok) {
        res.status(401).json({ error: "Failed to get LINE profile" });
        return;
      }

      const profile = (await profileRes.json()) as LineProfile;

      const auth = getAuth();
      const uid = `line:${profile.userId}`;
      try {
        await auth.getUser(uid);
        await auth.updateUser(uid, {
          displayName: profile.displayName,
          photoURL: profile.pictureUrl,
        });
      } catch {
        await auth.createUser({
          uid,
          displayName: profile.displayName,
          photoURL: profile.pictureUrl,
        });
      }

      const db = getFirestore();
      await db.doc(`users/${uid}`).set(
        {
          displayName: profile.displayName,
          photoURL: profile.pictureUrl || null,
          provider: "line",
          lineUserId: profile.userId,
          lastActiveAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      const customToken = await auth.createCustomToken(uid);
      res.json({ customToken, displayName: profile.displayName });
    } catch (error) {
      console.error("LINE auth error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
