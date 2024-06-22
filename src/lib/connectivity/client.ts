import {Zodios} from "@zodios/core";
import getConfig from "next/config"
import {PublicRuntimeConfigType} from "@/lib/nextConfigTypes";
import GetDoabilityForStandardCurriculum from "@/lib/connectivity/requests/doability";

const {publicRuntimeConfig}: {publicRuntimeConfig: PublicRuntimeConfigType} = getConfig()

const apiClient = new Zodios(
    publicRuntimeConfig.API_URL,
    [GetDoabilityForStandardCurriculum]
)

export default apiClient