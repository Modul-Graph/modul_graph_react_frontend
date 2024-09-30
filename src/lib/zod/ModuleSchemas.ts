import {z} from "zod";
import {
    CPSchema,
    HiddenArrayValueSchema,
    HiddenStringValueSchema,
    ModuleAreaListSchema,
    MultilineTextSchema,
    NeededCompetencesSchema,
    ProvidedCompetencesSchema
} from "@/lib/zod/general";

export const ModuleSchemaBase = z.object({
    name: z.string().min(1, "Modulname darf nicht leer sein!").describe("Modulname // Geben sie einen Modulnamen ein"),
    description: MultilineTextSchema.describe("Modulbeschreibung // Geben sie eine Modulbeschreibung ein"),
    cp: CPSchema,
    summer: z.boolean().describe("Im Sommersemester angeboten"),
    winter: z.boolean().describe("Im Wintersemester angeboten"),

    needs_competences: NeededCompetencesSchema.transform((e) => e ?? []),
    provides_competences: ProvidedCompetencesSchema.transform((e) => e ?? []),
})

export const CreateModuleSchema = ModuleSchemaBase.and(z.object({
    std_curr_names: z.array(z.string())
}))

const ModuleUpdateSchemaBase = z.object({
    name: z.string().min(1, "Modulname darf nicht leer sein!").describe("Modulname // Geben sie einen Modulnamen ein"),
    description: MultilineTextSchema.describe("Modulbeschreibung // Geben sie eine Modulbeschreibung ein"),
    cp: CPSchema,
    summer: z.boolean().describe("Im Sommersemester angeboten").default(false),
    winter: z.boolean().describe("Im Wintersemester angeboten").default(false),

    needs_competences: NeededCompetencesSchema.transform((e) => e ?? []),
    provides_competences: ProvidedCompetencesSchema.transform((e) => e ?? []),
    isPflicht: z.boolean().default(false).describe("Ist Pflichtmodul?"),
})
    // .refine((v) => {
    //     // const notAllowedNames = v.existing_modules.filter((e) => e !== v.old_name);
    //     //
    //     // return !notAllowedNames.includes(v.name)
    //
    //     return true;
    // }, {
    //     message: "Modulname existiert bereits",
    //     path: ["name"],
    // })
    .refine(
    (data) => {
        return data.summer || data.winter;
    },
    {
        message: "Modul muss mindestens für ein Semester angeboten werden",
        path: ["summer"],
    },
    )

export const ModuleUpdateSchema = ModuleUpdateSchemaBase.and(z.object({
    module_areas: ModuleAreaListSchema,
}));

export const PflichtModuleUpdateSchema = ModuleUpdateSchemaBase
//     .refine(
//     (data) => {
//         return data.summer || data.winter;
//     },
//     {
//         message: "Modul muss mindestens für ein Semester angeboten werden",
//         path: ["winter"],
//     },
// );

export type PflichtModuleUpdateType = z.infer<typeof PflichtModuleUpdateSchema>;
