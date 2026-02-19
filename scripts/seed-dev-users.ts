import "dotenv/config";
import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { user } from "../server/infra/db/schema";

const DEV_STAFF_USERS = [
    { email: "staff.one@feciit.dev", name: "Staff One" },
    { email: "staff.two@feciit.dev", name: "Staff Two" },
    { email: "staff.three@feciit.dev", name: "Staff Three" },
] as const;

function assertDevelopmentOnly() {
    if (process.env.NODE_ENV === "production") {
        throw new Error(
            "[seed-dev-users] Refusing to run in production. This script is development-only.",
        );
    }

    if (!process.env.DATABASE_URL) {
        throw new Error(
            "[seed-dev-users] Missing required env var: DATABASE_URL",
        );
    }
}

async function main() {
    assertDevelopmentOnly();

    const [{ db }, { auth }] = await Promise.all([
        import("../server/infra/db"),
        import("../server/utils/auth"),
    ]);

    for (const staff of DEV_STAFF_USERS) {
        const [existing] = await db
            .select({
                id: user.id,
                role: user.role,
                emailVerified: user.emailVerified,
            })
            .from(user)
            .where(eq(user.email, staff.email))
            .limit(1);

        if (!existing) {
            const temporaryPassword = randomBytes(32).toString("base64");

            await auth.api.createUser({
                body: {
                    name: staff.name,
                    email: staff.email,
                    password: temporaryPassword,
                },
            });

            console.log(`[seed-dev-users] Created ${staff.email}`);
        }

        await db
            .update(user)
            .set({
                name: staff.name,
                role: "staff",
                emailVerified: true,
            })
            .where(eq(user.email, staff.email));

        console.log(`[seed-dev-users] Synced ${staff.email}`);
    }

    console.log("[seed-dev-users] Done");
}

void main().catch((error) => {
    console.error("[seed-dev-users] Failed", error);
    process.exit(1);
});
