import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  health: baseProcedure.query(async () => {
    // throw new Error("Something went wrong");
    return { status: "ok", code: 123 };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
