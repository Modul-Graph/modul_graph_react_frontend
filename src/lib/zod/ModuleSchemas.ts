import { z } from "zod";
import {
    CPSchema,
    ModuleAreaListSchema,
    MultilineTextSchema,
    NeededCompetencesSchema,
    ProvidedCompetencesSchema
} from "@/lib/zod/general";

const ModuleUpdateSchemaBase = z.object({
    name: z.string().min(1, "Modulname darf nicht leer sein!").describe("Modulname // Geben sie einen Modulnamen ein"),
    description: MultilineTextSchema.describe("Modulbeschreibung // Geben sie eine Modulbeschreibung ein"),

    cp: CPSchema,
    summer: z.boolean().describe("Im Sommersemester angeboten"),
    winter: z.boolean().describe("Im Wintersemester angeboten"),

    module_areas: ModuleAreaListSchema,
    needs_competences: NeededCompetencesSchema.transform((e) => e ?? []),
    provides_competences: ProvidedCompetencesSchema.transform((e) => e ?? []),
});

export const ModuleUpdateSchema = ModuleUpdateSchemaBase.refine(
    (data) => {
        return data.summer || data.winter;
    },
    {
        message: "Modul muss mindestens für ein Semester angeboten werden",
        path: ["summer", "winter"],
    },
);

export const PflichtModuleUpdateSchema = ModuleUpdateSchemaBase.omit({
    module_areas: true,
}).refine(
    (data) => {
        console.log(data);
        console.log("te", data.summer || data.winter);
        return data.summer || data.winter;
    },
    {
        message: "Modul muss mindestens für ein Semester angeboten werden",
        path: ["winter"],
    },
);

export type PflichtModuleUpdateType = z.infer<typeof PflichtModuleUpdateSchema>;
