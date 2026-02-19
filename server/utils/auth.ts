import { APIError, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP, admin, createAuthMiddleware } from "better-auth/plugins";
import { db } from "../infra/db";
import { sendEmail } from "./mailer";
import { sendOtpEmail } from "../lib/mails/otp";
import { eq, and } from "drizzle-orm";
import { user } from "../infra/db/schema";

/**
 * Hybrid authentication strategy:
 * - Staff users authenticate with Email OTP (email must be in staff allowlist).
 * - Admin users authenticate with classic email/password.
 *
 * The before hook intentionally returns neutral responses for unknown/non-staff
 * emails on OTP send to prevent role/email enumeration.
 */
export const auth = betterAuth({
    plugins: [
        emailOTP({
            async sendVerificationOTP({ email, otp, type }) {
                if (type === "sign-in") {
                    void sendEmail({
                        to: email,
                        subject: "Código de verificación FECIIT",
                        html: sendOtpEmail(otp),
                    });
                }
            },
            disableSignUp: true, // otp validation doesn't give signup
        }),

        admin({
            defaultRole: "staff",
            adminRoles: ["admin"],
        }),
    ],

    database: drizzleAdapter(db, {
        provider: "pg",
    }),

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        disableSignUp: true, // Users can't signup
    },

    hooks: {
        before: createAuthMiddleware(async (ctx) => {
            // disallow admins to create users with role that are neither admin nor staff
            if (ctx.path === "/admin/create-user") {
                console.log(ctx.body);
                if (
                    ctx.body?.role &&
                    ctx.body?.role !== "staff" &&
                    ctx.body?.role !== "admin"
                ) {
                    throw new APIError("BAD_REQUEST", {
                        message: "Role must be either 'staff' or 'admin'",
                    });
                }
            }

            // disallow staff members not in database to recieve otp
            if (ctx.path === "/email-otp/send-verification-otp") {
                const email = ctx.body?.email || "";
                const staffMemberInDb = await db.query.user.findFirst({
                    where: and(eq(user.email, email), eq(user.role, "staff")),
                });
                if (!staffMemberInDb) {
                    return ctx.json({ success: true }); // avoid email enumeration
                }
            }
        }),
    },
});
