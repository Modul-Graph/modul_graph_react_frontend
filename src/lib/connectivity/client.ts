import {Zodios} from "@zodios/core";
import doabilityResponseSchema from "@/lib/zod/doabilityResponseSchema";
import {getClientEnvironment} from "@/lib/zod/environment";
import {competenceTimeTableSchema} from "@/lib/zod/competenceTimeTableSchema";
import {scGraphResponseSchema, transformSCSuggestionToGraph} from "@/lib/zod/scGraphResponseSchema";
import {z} from "zod";
import {cpClusterSchema, teacherScTableSchema} from "@/lib/zod/teacherScTableSchemas";
import {ZodiosHooks} from "@zodios/react";
import {CellResponseSchema} from "@/lib/zod/cellResponseSchema";
import {ModuleAreaUpdateSchema} from "@/lib/zod/moduleAreaUpdateSchema";
import {CreateModuleSchema, ModuleSchemaBase} from "@/lib/zod/ModuleSchemas";
import {ModuleResponseSchema} from "@/lib/zod/moduleResponseSchema";
import {createClusterSchema, updateClusterSchema} from "@/lib/zod/cpClusterSchemas";
import {ModuleAreaResponseSchema} from "@/lib/zod/moduleAreaResponseSchema";

const API_URL = getClientEnvironment().NEXT_PUBLIC_API_URL;

const apiClient = new Zodios(API_URL, [
    {
        method: "get",
        path: "/analysis/doability/:standardCurriculum",
        requestFormat: "json",
        response: doabilityResponseSchema,
        alias: "getDoability",
    },
    {
        method: "get",
        path: "/sc/competence/:standardCurriculum",
        response: competenceTimeTableSchema,
        alias: "getCompetenceTimeTable",
    },
    {
        method: "post",
        path: "/analysis/suggestion",
        response: scGraphResponseSchema.transform(transformSCSuggestionToGraph),
        requestFormat: "json",
        parameters: [
            {
                name: "data",
                type: "Body",
                schema: z.object({
                    standard_curriculum: z.string(),
                    competences: z.array(z.string().min(1, "Competence must not be empty")),
                }),
            },
        ],
        alias: "getSCSuggestion",
    },
    {
        alias: "getTeacherViewGraph",
        method: "get",
        path: "/sc/get_sc_graph",
        response: scGraphResponseSchema.transform(transformSCSuggestionToGraph),
        parameters: [
            {
                name: "sc_name",
                type: "Query",
                schema: z.string(),
            },
        ],
    },
    {
        alias: "getTeacherScTable",
        method: "get",
        path: "/sc/get_rich_cp_cluster",
        response: teacherScTableSchema,
        parameters: [
            {
                name: "sc_name",
                type: "Query",
                schema: z.string(),
            },
        ],
    },
    {
        alias: "getCellInformation",
        method: "get",
        path: "/cell/:cellId",
        response: CellResponseSchema,
        parameters: [
            {
                name: "cellId",
                type: "Path",
                schema: z.string(),
            },
        ],
    },
    {
        alias: "getAllModules",
        method: "get",
        path: "/sc/get_modules",
        response: z
            .array(z.string().min(1, "Module name must not be empty"))
            .refine((value) => new Set(value).size === value.length, "Module names must be unique"),
        parameters: [
            {
                name: "sc_name",
                type: "Query",
                schema: z.string(),
            },
            {
                name: "ignore_wpf",
                type: "Query",
                schema: z.boolean().optional(),
            },
        ],
    },
    {
        alias: "updateModuleArea",
        method: "put",
        path: "/module_area/:old_name",
        requestFormat: "json",
        parameters: [
            {
                name: "module_area",
                type: "Body",
                schema: ModuleAreaUpdateSchema,
            },
        ],
        response: z.NEVER,
        responseCode: 201,
    },
    {
        alias: "deleteModuleArea",
        method: "delete",
        path: "/module_area/:moduleAreaName",
        response: z.NEVER
    },
    {
        alias: "getWPFAreas",
        method: "get",
        path: "/sc/get_module_areas",
        response: z.array(z.string().min(1, "WPF area must not be empty")),
        parameters: [
            {
                name: "sc_name",
                type: "Query",
                schema: z.string(),
            },
        ],
    },
    {
        alias: "updateModule",
        method: "put",
        path: "/module/:old_name",
        response: z.NEVER,
        parameters: [
            {
                name: "module",
                type: "Body",
                schema: ModuleSchemaBase.transform((data) => ({
                    ...data,
                    cp_plus_description: {DEFAULT: data.cp},
                })),
            },
        ],
    }, {
        alias: "getAllCompetences",
        method: "get",
        path: "/sc/get_competences",
        response: z.array(z.string().min(1, "Competence name must not be empty")),
    }, {
        alias: "getCPCluster",
        method: "get",
        path: "/cp_cluster/:cpClusterId",
        response: cpClusterSchema,

    }, {
        alias: "getPotentialCellContent",
        method: "get",
        path: "/sc/get_potential_cell_content",
        response: z.array(CellResponseSchema)
    }, {
        alias: "getSemesters",
        method: "get",
        path: "/sc/get_semesters",
        response: z.array(z.number().int().min(1, "Semester must be at least 1").max(15, "Semester must be at most 15")),
    }, {
        alias: "getModule",
        method: "get",
        path: "/module/:moduleName",
        response: ModuleResponseSchema
    }, {
        alias: "getModuleWinterSummerInfo",
        method: "get",
        path: "/module/:moduleName/winter_summer_info",
        response: z.tuple([z.boolean(), z.boolean()])
    }, {
        alias: "updateCpCluster",
        method: "put",
        path: "/cp_cluster/",
        requestFormat: "json",
        parameters: [
            {
                name: "cp_cluster",
                type: "Body",
                schema: updateClusterSchema
            }
        ],
        response: z.any()
    }, {
        alias: "getCompetencesSC",
        method: "get",
        path: "/sc/get_competence_sc",
        parameters: [
            {
                name: "sc",
                type: "Query",
                schema: z.string()
            }
        ],
        response: z.array(z.string().min(1, "Competence name must not be empty"))
    }, {
        alias: "createNewPflichtModule",
        method: "post",
        path: "/module/required",
        parameters: [
            {
                name: "module",
                type: "Body",
                schema: CreateModuleSchema.transform((data) => ({
                    ...data,
                    cp_plus_description: {DEFAULT: data.cp},
                }))
            }
        ],
        response: z.NEVER
    }, {
        alias: "createNewWPFModule",
        method: "post",
        path: "/module/elective",
        parameters: [
            {
                name: "module",
                type: "Body",
                schema: CreateModuleSchema.transform((data) => ({
                    ...data,
                    cp_plus_description: {DEFAULT: data.cp},
                }))
            }
        ],
        response: z.NEVER
    }, {
        alias: "deleteModule",
        method: "delete",
        path: "/module/:moduleName",
        response: z.NEVER
    }, {
        alias: "createModuleArea",
        method: "post",
        parameters: [
            {
                name: "module_area",
                type: "Body",
                schema: ModuleAreaUpdateSchema
            }
        ],
        path: "/module_area",
        response: z.NEVER
    }, {
        alias: "getAllModuleAreas",
        method: "get",
        response: z.array(z.string().min(1, "Module area must not be empty")),
        path: "/sc/module_areas"
    }, {
        alias: "getAllWPFModuleAreas",
        method: "get",
        response: z.array(z.string().min(1, "Module area must not be empty")),
        path: "/sc/wpf_module_areas"
    },
    {
        alias: "getModuleArea",
        method: "get",
        response: ModuleAreaResponseSchema,
        path: "/module_area/:moduleAreaName"
    }, {
        alias: "deleteCPCluster",
        method: "delete",
        response: z.any(),
        path: "/cp_cluster/:cpClusterId"
    }, {
        alias: "createCPCluster",
        method: "post",
        response: z.any(),
        requestFormat: "json",
        path: "/cp_cluster/",
        parameters: [
            {
                name: "cp_cluster",
                type: "Body",
                schema: createClusterSchema
            }
        ]
    }
]);

export const apiHooks = new ZodiosHooks("myAPI", apiClient);

export default apiClient;

