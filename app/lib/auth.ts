import { createHmac } from "crypto";

const SECRET = process.env.SESSION_SECRET || "fallback-secret-change-me";

interface TokenPayload {
  username: string;
  exp: number;
}

export function signToken(username: string): string {
  const payload: TokenPayload = {
    username,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
  const data = JSON.stringify(payload);
  const signature = createHmac("sha256", SECRET).update(data).digest("hex");
  const token = Buffer.from(data).toString("base64") + "." + signature;
  return token;
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const [dataB64, signature] = token.split(".");
    if (!dataB64 || !signature) return null;

    const data = Buffer.from(dataB64, "base64").toString("utf-8");
    const expectedSig = createHmac("sha256", SECRET).update(data).digest("hex");

    if (signature !== expectedSig) return null;

    const payload: TokenPayload = JSON.parse(data);
    if (payload.exp < Date.now()) return null;

    return payload;
  } catch {
    return null;
  }
}
