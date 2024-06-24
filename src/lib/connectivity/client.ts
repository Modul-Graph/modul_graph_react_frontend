import {Zodios} from "@zodios/core";
import doabilityResponseSchema from "@/lib/zod/doabilityResponseSchema";
import {getClientEnvironment} from "@/lib/zod/environment";


const API_URL = getClientEnvironment().NEXT_PUBLIC_API_URL

const apiClient = new Zodios(
    API_URL,
    [{
        method: "get",
        path: "/sc/:standardCurriculum/doability",
        requestFormat: "json",
        response: doabilityResponseSchema,
        alias: "getDoability"
    }]
)

export default apiClient