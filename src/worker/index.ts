import { Hono } from "hono";
import { cors } from "hono/cors";

import { createAuth } from "./lib/auth";

type Variables = {
  auth: ReturnType<typeof createAuth>;
};

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.use(
  "/api/**",
  cors({
    origin: "*", // In production, replace with your actual domain
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

// Middleware to initialize auth instance for each request
app.use("*", async (c, next) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = createAuth(c.env, (c.req.raw as any).cf || {});
  c.set("auth", auth);
  await next();
});

// Handle all auth routes
app.all("/api/auth/*", async (c) => {
  const auth = c.get("auth");
  return auth.handler(c.req.raw);
});

app.get("/api", (c) => {
  return c.json({ name: "Cloudflare" });
});

export default app;
