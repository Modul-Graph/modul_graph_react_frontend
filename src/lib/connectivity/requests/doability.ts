import {ZodiosEndpointDefinition} from "@zodios/core"
import {z} from "zod";

const GetDoabilityForStandardCurriculum: ZodiosEndpointDefinition = {
    method: "get",
    path: "/doability/:standardCurriculum",
    requestFormat: "json",
    response: z.object({
        status: z.union([
            z.literal("success"),
            z.literal("info"),
            z.literal("warning"),
            z.literal("error")
        ]),
        message: z.string(),
    }),
}

export default GetDoabilityForStandardCurriculum