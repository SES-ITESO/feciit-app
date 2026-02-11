import { z } from "better-auth";

export const logInRequest = z.object({
    email: z.email(),
    password: z.string(),
});
