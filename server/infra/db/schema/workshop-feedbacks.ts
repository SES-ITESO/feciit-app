import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";
import { workshops } from "./workshop";

/**
 * Attendee feedback submitted after each workshop.
 */
export const workshopFeedbacks = pgTable("workshop_feedbacks", {
    id: uuid("id").notNull().defaultRandom().primaryKey(),
    workshopId: integer("workshop_id")
        .notNull()
        .references(() => workshops.id),
    attendeeName: text("attendee_name").notNull(),
    topicRating: integer("topic_rating").notNull(),
    organizationRating: integer("organization_rating").notNull(),
    timeRating: integer("time_rating").notNull(),
    understood: boolean("understood").notNull(),
    recommendationProbability: integer("recommendation_probability").notNull(),
    mostLikedThing: text("most_liked_thing").notNull(),
    comments: text("comments"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
