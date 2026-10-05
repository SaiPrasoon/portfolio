const encoder = new TextEncoder();

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/**
 * Verifies the HMAC-SHA256 hex signature produced by signToken() in
 * app/lib/auth.ts, using Web Crypto because node:crypto is unavailable on edge.
 */
export async function verifyTokenEdge(
  token: string,
  secret: string
): Promise<boolean> {
  try {
    const [dataB64, signature] = token.split(".");
    if (!dataB64 || !signature) return false;

    const data = atob(dataB64);
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const mac = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
    const expected = Array.from(new Uint8Array(mac))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    if (!timingSafeEqual(expected, signature)) return false;

    const payload = JSON.parse(data);
    return typeof payload?.username === "string" && payload.exp > Date.now();
  } catch {
    return false;
  }
}
