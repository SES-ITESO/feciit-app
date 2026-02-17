import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Projects submitted for evaluation in the event.
 */
export const projects = pgTable("projects", {
    id: serial("id").notNull().primaryKey(),
    teamNumber: integer("team_number").unique().notNull(),
    title: text("title").notNull(),
    description: text("description"),
    category: text("category").notNull(),
    paperUrl: text("paper_url").notNull(),
    posterUrl: text("poster_url").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
