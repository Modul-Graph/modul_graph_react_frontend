import { z } from "zod";

export const ModuleResponseSchema = z
    .object({
        name: z.string().min(1, "Name must not be empty"),
        description: z.string().nullish().optional(),

        cp_plus_description: z.object({ DEFAULT: z.number().min(1) }),
        summer: z.boolean(),
        winter: z.boolean(),

        std_curr_names: z
            .array(z.string())
            .nullish()
            .transform((e) => e ?? []),
        module_areas: z
            .array(z.string())
            .nullish()
            .transform((e) => e ?? []),
        needs_competences: z
            .array(z.string())
            .nullish()
            .transform((e) => e ?? []),
        provides_competences: z
            .array(z.string())
            .nullish()
            .transform((e) => e ?? []),
        needs_micro_units: z
            .array(z.string())
            .nullish()
            .transform((e) => e ?? []),
        provides_micro_units: z
            .array(z.string())
            .nullish()
            .transform((e) => e ?? undefined),
    })
    .refine((data) => {
        return data.summer || data.winter;
    }, "Module must be available in at least winter or summer semester");

export type ModuleResponseType = z.infer<typeof ModuleResponseSchema>;
