import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Workshop schedule and logistics.
 */
export const workshops = pgTable("workshops", {
    id: serial("id").notNull().primaryKey(),
    title: text("title").notNull(),
    speaker: text("speaker").notNull(),
    location: text("location").notNull(),
    startTime: timestamp("start_time").notNull(),
    endTime: timestamp("end_time").notNull(),
    qrCode: text("qr_code").notNull(),
});
