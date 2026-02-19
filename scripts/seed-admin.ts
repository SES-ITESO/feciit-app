import "dotenv/config";
import { eq } from "drizzle-orm";
import { user } from "../server/infra/db/schema";

/**
 * Environment variables required to seed a master admin account.
 */
const env = {
    databaseUrl: process.env.DATABASE_URL,
    adminEmail: process.env.SEED_ADMIN_EMAIL,
    adminName: process.env.SEED_ADMIN_NAME,
    adminPassword: process.env.SEED_ADMIN_PASSWORD,
};

/**
 * Validates required seed variables and basic password constraints.
 * @throws {Error} When required variables are missing or password is too short.
 */
function assertRequiredEnv() {
    const missing = Object.entries({
        DATABASE_URL: env.databaseUrl,
        SEED_ADMIN_EMAIL: env.adminEmail,
        SEED_ADMIN_NAME: env.adminName,
        SEED_ADMIN_PASSWORD: env.adminPassword,
    })
        .filter(([, value]) => !value)
        .map(([key]) => key);

    if (missing.length > 0) {
        throw new Error(`Missing required env vars: ${missing.join(", ")}`);
    }

    if (env.adminPassword!.length < 8) {
        throw new Error(
            "SEED_ADMIN_PASSWORD must be at least 8 characters long",
        );
    }
}

/**
 * Idempotently seeds a master admin account.
 *
 * Workflow:
 * - Create the user through Better Auth admin API if it does not exist.
 * - Enforce admin role and verified email status.
 */
async function main() {
    assertRequiredEnv();

    const [{ db }, { auth }] = await Promise.all([
        import("../server/infra/db"),
        import("../server/utils/auth"),
    ]);

    const [existing] = await db
        .select({
            id: user.id,
            role: user.role,
            emailVerified: user.emailVerified,
        })
        .from(user)
        .where(eq(user.email, env.adminEmail!))
        .limit(1);

    let adminId = existing?.id;

    if (!adminId) {
        await auth.api.createUser({
            body: {
                name: env.adminName!,
                email: env.adminEmail!,
                password: env.adminPassword!,
            },
        });

        const [created] = await db
            .select({
                id: user.id,
                role: user.role,
                emailVerified: user.emailVerified,
            })
            .from(user)
            .where(eq(user.email, env.adminEmail!))
            .limit(1);

        if (!created) {
            throw new Error(
                "Admin user creation completed but user could not be reloaded",
            );
        }

        adminId = created.id;
        console.log(`[seed-admin] Created user ${env.adminEmail}`);
    } else {
        console.log(`[seed-admin] User already exists ${env.adminEmail}`);
    }

    const [current] = await db
        .select({ role: user.role, emailVerified: user.emailVerified })
        .from(user)
        .where(eq(user.id, adminId))
        .limit(1);

    if (!current) {
        throw new Error("Admin user not found after seed operation");
    }

    if (current.role !== "admin") {
        await db
            .update(user)
            .set({ role: "admin" })
            .where(eq(user.id, adminId));
        console.log("[seed-admin] Role set to admin");
    }

    if (!current.emailVerified) {
        await db
            .update(user)
            .set({ emailVerified: true })
            .where(eq(user.id, adminId));
        console.log("[seed-admin] Email marked as verified");
    }

    console.log("[seed-admin] Done");
}

void main().catch((error) => {
    console.error("[seed-admin] Failed", error);
    process.exit(1);
});
