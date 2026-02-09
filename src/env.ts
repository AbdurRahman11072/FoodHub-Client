// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs"; // or core package
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    BACKEND_URL: z.url(),
    BACKEND_BETTER_AUTH_URL: z.url(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_BACKEND_URL: z.url(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_BETTER_AUTH_URL: process.env.BACKEND_BETTER_AUTH_URL,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
});
