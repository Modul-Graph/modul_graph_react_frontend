import {z} from "zod";

const competenceSchema = z.string().min(1, "Competence must not be empty")
const moduleNameSchema = z.string().min(1, "Module/WPF name must not be empty")

export const competenceTimeTableSchema = z.object({
    pflichtmodule: z.array(z.object({
        name: moduleNameSchema,
        competences: z.array(competenceSchema),
        semester: z.number().int().min(1, "Semester must be at least 1"),
    })),
    WPF: z.array(
        z.object({
            name: moduleNameSchema,
            modules: z.array(z.object({
                name: moduleNameSchema,
                competences: z.array(competenceSchema)
            })),
            semesters: z.array(z.number().int().min(1, "Semester must be at least 1"))
        })
    )
})

export type CompetenceTimeTableType = z.infer<typeof competenceTimeTableSchema>

export type WPFEntry = CompetenceTimeTableType["WPF"][0]

