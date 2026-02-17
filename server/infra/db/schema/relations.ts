import { relations } from "drizzle-orm";
import { judgeProjectEvaluations } from "./judge-project-evaluations";
import { judges } from "./judge";
import { projects } from "./projects";
import { workshopFeedbacks } from "./workshop-feedbacks";
import { workshops } from "./workshop";

/**
 * Project relations.
 */
export const projectsRelations = relations(projects, ({ many }) => ({
    evaluations: many(judgeProjectEvaluations),
}));

/**
 * Judge relations.
 */
export const judgesRelations = relations(judges, ({ many }) => ({
    evaluations: many(judgeProjectEvaluations),
}));

/**
 * Project evaluation relations.
 */
export const judgeProjectEvaluationsRelations = relations(
    judgeProjectEvaluations,
    ({ one }) => ({
        project: one(projects, {
            fields: [judgeProjectEvaluations.projectId],
            references: [projects.id],
        }),
        judge: one(judges, {
            fields: [judgeProjectEvaluations.judgeId],
            references: [judges.id],
        }),
    }),
);

/**
 * Workshop relations.
 */
export const workshopsRelations = relations(workshops, ({ many }) => ({
    feedbacks: many(workshopFeedbacks),
}));

/**
 * Workshop feedback relations.
 */
export const workshopFeedbacksRelations = relations(
    workshopFeedbacks,
    ({ one }) => ({
        workshop: one(workshops, {
            fields: [workshopFeedbacks.workshopId],
            references: [workshops.id],
        }),
    }),
);
