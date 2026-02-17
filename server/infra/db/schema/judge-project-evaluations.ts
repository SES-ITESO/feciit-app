import {
    integer,
    pgEnum,
    pgTable,
    text,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";
import { judges } from "./judge";
import { projects } from "./projects";

/**
 * Tracks the lifecycle state of a project evaluation.
 */
export const evaluationStatusEnum = pgEnum("evaluation_status_enum", [
    "PENDING",
    "DRAFT",
    "COMPLETED",
]);

/**
 * Source used to submit an evaluation.
 */
export const submissionMethodEnum = pgEnum("submission_method_enum", [
    "APP",
    "PAPER",
    "MANUALLY",
]);

/**
 * Per-judge scoring and feedback for a project.
 */
export const judgeProjectEvaluations = pgTable("judge_project_evaluations", {
    id: uuid("id").notNull().primaryKey().defaultRandom(),
    projectId: integer("project_id")
        .notNull()
        .references(() => projects.id),
    judgeId: integer("judge_id")
        .notNull()
        .references(() => judges.id),
    domainScore: integer("domain_score").notNull(),
    clarityScore: integer("clarity_score").notNull(),
    organizationScore: integer("organization_score").notNull(),
    impactScore: integer("impact_score").notNull(),
    visualScore: integer("visual_score").notNull(),
    comments: text("comments").notNull(),
    status: evaluationStatusEnum().notNull().default("PENDING"),
    submissionMethod: submissionMethodEnum(),
    assignedAt: timestamp("assigned_at"),
    submittedAt: timestamp("submitted_at"),
});
