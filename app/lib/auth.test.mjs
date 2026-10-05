// Run: node app/lib/auth.test.mjs
// Guards the admin auth boundary: a forged cookie must never verify.
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";

const SECRET = "test-secret";

// mirrors signToken() in auth.ts
const sign = (payload) => {
  const data = JSON.stringify(payload);
  return (
    Buffer.from(data).toString("base64") +
    "." +
    createHmac("sha256", SECRET).update(data).digest("hex")
  );
};

const { verifyTokenEdge } = await import("./auth-edge.ts");

const valid = sign({ username: "admin", exp: Date.now() + 60_000 });
assert.equal(await verifyTokenEdge(valid, SECRET), true, "valid token rejected");

// The bypass this file exists for: payload is attacker-controlled base64, so a
// token with no real signature must fail even though it parses and isn't expired.
const forged =
  Buffer.from(
    JSON.stringify({ username: "admin", exp: Date.now() + 60_000 })
  ).toString("base64") + ".deadbeef";
assert.equal(await verifyTokenEdge(forged, SECRET), false, "forged token accepted");

assert.equal(
  await verifyTokenEdge(sign({ username: "admin", exp: Date.now() - 1 }), SECRET),
  false,
  "expired token accepted"
);
assert.equal(await verifyTokenEdge(valid, "wrong-secret"), false, "wrong secret accepted");
assert.equal(await verifyTokenEdge("garbage", SECRET), false, "malformed token accepted");
assert.equal(
  await verifyTokenEdge(sign({ exp: Date.now() + 60_000 }), SECRET),
  false,
  "token without username accepted"
);

console.log("auth boundary ok");
