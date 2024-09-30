import {createUniqueFieldSchema} from "@ts-react/form";
import {z} from "zod";

export const FilledByModuleSchema = createUniqueFieldSchema(
    z.array(z.string().min(1, "Module name must not be empty")).min(2, "Ein WPF muss mindestens 2 Module haben."),
    "filled-by-module-schema",
);
export const CPSchema = createUniqueFieldSchema(z.number().min(0, "CP must be a positive integer"), "cp-schema");

export const ModuleAreaNameSchema = createUniqueFieldSchema(
    z.string().min(1, "Name must not be empty"),
    "module-area-name",
);

export const ModuleAreaListSchema = createUniqueFieldSchema(
    z.array(z.string().min(1, "WPF bereiche brauchen einen namen")),
    "module-area-list",
).describe("WPF Bereiche // Liste von WPF Bereichen");

export const MultilineTextSchema = createUniqueFieldSchema(
    z.string().transform((e) => e ?? ""),
    "multiline-text-schema",
);


export const DisplayOnlyTextSchema = createUniqueFieldSchema(z.string(), "display-only-text-schema");

export const ProvidedCompetencesSchema = createUniqueFieldSchema(z.array(z.string().min(1, "Competence name must not be empty")), "provided-competences-schema");
export const NeededCompetencesSchema = createUniqueFieldSchema(z.array(z.string().min(1, "Competence name must not be empty")), "needed-competences-schema");

export const HiddenStringValueSchema = createUniqueFieldSchema(z.string(), "hidden-value-schema");
export const HiddenArrayValueSchema = createUniqueFieldSchema(z.array(z.string()), "hidden-array-value-schema");

export type FilledByModuleType = z.infer<typeof FilledByModuleSchema>;
export type CPType = z.infer<typeof CPSchema>;
export type ModuleAreaListType = z.infer<typeof ModuleAreaListSchema>;
export type DisplayOnlyTextType = z.infer<typeof DisplayOnlyTextSchema>;
