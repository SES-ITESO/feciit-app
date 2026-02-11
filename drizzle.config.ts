import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./server/infra/db/schema",
    out: "./server/infra/db/migrations/",
    dbCredentials: {
        url: process.env.DATABASE_URL || "",
    },
});
