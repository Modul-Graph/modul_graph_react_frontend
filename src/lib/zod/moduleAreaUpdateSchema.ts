import { z } from "zod";
import { CPSchema, FilledByModuleSchema, ModuleAreaNameSchema } from "@/lib/zod/general";

export const ModuleAreaUpdateSchema = z.object({
    name: ModuleAreaNameSchema.describe("WPF-Name // Gib einen WPF-Namen an. Dieser darf nicht bereits vergeben sein!"),
    cp: CPSchema.describe("CP // Gib die CP des WPF an."),
    filled_by_module: FilledByModuleSchema,
});
