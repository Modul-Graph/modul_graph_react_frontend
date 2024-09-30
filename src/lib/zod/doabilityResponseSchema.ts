import {z} from "zod";

const doabilityStatus = z.union([
    z.literal("success"),
    z.literal("info"),
    z.literal("warning"),
    z.literal("error")
])

type DoabilityStatus = z.infer<typeof doabilityStatus>

const doabilityResponseSchema = z.object({
    status: doabilityStatus as z.ZodType<DoabilityStatus>,
    message: z.string(),
})

export type DoabilityResponse = z.infer<typeof doabilityResponseSchema>

export default doabilityResponseSchema