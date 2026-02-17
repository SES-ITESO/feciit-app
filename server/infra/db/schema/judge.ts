import { boolean, pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

/**
 * Judges that evaluate projects.
 */
export const judges = pgTable("judges", {
    id: serial("id").notNull().primaryKey(),
    fullName: text("full_name").notNull(),
    speciality: text("speciality").notNull(),
    isActive: boolean("is_active").notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    arrivalAt: timestamp("arrival_at"),
});
