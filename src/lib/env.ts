import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
  },
  experimental__runtimeEnv: {},
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

/**It tells the app: "You are not allowed to start unless there is a DATABASE_URL that is a string and is not 
 * empty." If it's missing, the app will crash immediately with a clear error message instead of failing later 
 * with a "database not found" bug.
 */
