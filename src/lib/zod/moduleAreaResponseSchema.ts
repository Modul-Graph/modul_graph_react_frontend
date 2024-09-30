import {z} from "zod";

export const ModuleAreaResponseSchema = z.object({
    name: z.string().min(1, "Name must not be empty"),
    cp: z.number().min(1, "CP must be at least 1"),
    filled_by_module: z.array(z.string()).min(1, "Module area must be filled by at least one module"),
});

export type ModuleAreaResponse = z.infer<typeof ModuleAreaResponseSchema>;
