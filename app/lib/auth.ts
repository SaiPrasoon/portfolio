import { createHmac } from "crypto";

interface TokenPayload {
  username: string;
  exp: number;
}

export function signToken(username: string): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not configured");

  const payload: TokenPayload = {
    username,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
  const data = JSON.stringify(payload);
  const signature = createHmac("sha256", secret).update(data).digest("hex");
  return Buffer.from(data).toString("base64") + "." + signature;
}
