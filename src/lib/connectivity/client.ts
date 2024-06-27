import {Zodios} from "@zodios/core";
import doabilityResponseSchema from "@/lib/zod/doabilityResponseSchema";
import {getClientEnvironment} from "@/lib/zod/environment";
import {z} from "zod";


const API_URL = getClientEnvironment().NEXT_PUBLIC_API_URL

const apiClient = new Zodios(
    API_URL,
    [{
        method: "get",
        path: "/analysis/doability",
        requestFormat: "json",
        parameters: [{
            name: "sc",
            description: "Standard Curriculum",
            type: "Query",
            schema: z.string()
        }],
        response: doabilityResponseSchema,
        alias: "getDoability"
    }]
)

export default apiClient