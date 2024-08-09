import {Zodios} from "@zodios/core";
import doabilityResponseSchema from "@/lib/zod/doabilityResponseSchema";
import {getClientEnvironment} from "@/lib/zod/environment";
import {competenceTimeTableSchema} from "@/lib/zod/competenceTimeTableSchema";


const API_URL = getClientEnvironment().NEXT_PUBLIC_API_URL

const apiClient = new Zodios(
    API_URL,
    [{
        method: "get",
        path: "/doability/:standardCurriculum",
        requestFormat: "json",
        response: doabilityResponseSchema,
        alias: "getDoability"
    }, {
        method: "get",
        path: "/sc/competence/:standardCurriculum",
        response: competenceTimeTableSchema,
        alias: "getCompetenceTimeTable"
    }
    ]
)

export default apiClient