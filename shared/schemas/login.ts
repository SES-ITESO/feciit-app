import { z } from "zod";

export const adminLoginRequest = z.object({
    email: z.email({ error: "Un correo electrónico válido es requerido" }),
    password: z.string({ error: "La contraseña es requerida" }),
});

export const staffEmailLoginRequest = z.object({
    email: z.email({ error: "Un correo electrónico válido es requerido" }),
});

export type AdminLoginRequest = z.infer<typeof adminLoginRequest>;
export type StaffEmailLoginRequest = z.infer<typeof staffEmailLoginRequest>;
