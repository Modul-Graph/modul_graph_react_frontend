import {Zodios} from "@zodios/core";
import doabilityResponseSchema from "@/lib/zod/doabilityResponseSchema";
import {getClientEnvironment} from "@/lib/zod/environment";
import {competenceTimeTableSchema} from "@/lib/zod/competenceTimeTableSchema";
import {scGraphResponseSchema, transformSCSuggestionToGraph} from "@/lib/zod/scGraphResponseSchema";
import {z} from "zod";
import {teacherScTableSchema} from "@/lib/zod/teacherScTableSchema";
import {ZodiosHooks} from "@zodios/react";


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
    }, {
        method: "put",
        path: "/analysis/suggestion",
        response: scGraphResponseSchema.transform(transformSCSuggestionToGraph),
        requestFormat: "json",
        parameters: [
            {
                name: "body",
                type: "Body",
                schema: z.object({
                    standard_curriculum: z.string(),
                    competences: z.array(z.string().min(1, "Competence must not be empty"))
                }),
            }
        ],
        alias: "getSCSuggestion"
    }, {
        alias: "getTeacherViewGraph",
        method: "get",
        path: "/sc/get_sc_graph",
        response: scGraphResponseSchema.transform(transformSCSuggestionToGraph),
        parameters: [
            {
                name: "sc_name",
                type: "Query",
                schema: z.string()
            }
        ]
    }, {
        alias: "getTeacherScTable",
        method: "get",
        path: "/sc/get_rich_cp_cluster",
        response: teacherScTableSchema,
        parameters: [
            {
                name: "sc_name",
                type: "Query",
                schema: z.string()
            }
        ]
    }],
)

export const apiHooks = new ZodiosHooks("myAPI", apiClient);

export default apiClient