import {z} from "zod";
import {ModuleResponseSchema} from "@/lib/zod/moduleResponseSchema";
import {ModuleAreaResponseSchema} from "@/lib/zod/moduleAreaResponseSchema";

export const CellResponseSchema = z
    .discriminatedUnion("contains_wpf", [
        z.object({contains_wpf: z.literal(true), data: ModuleAreaResponseSchema}),
        z.object({contains_wpf: z.literal(false), data: ModuleResponseSchema}),
    ])
    .transform((d) => ({...d, name: d.data.name}));

export type CellResponse = z.infer<typeof CellResponseSchema>;
