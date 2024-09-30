import {AnalysisHeader} from "@/components/dashboardHeader/AnalysisHeader";
import DoabilityStepper from "@/app/sc/[standardCurriculum]/teacher_view/feasibility_analysis/Stepper";
import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import React from "react";
import {Box, Stack} from "@mui/material";

/**
 * renders feasibility analysis (visualizes if modules fit the study program)
 * */

export default function AnalysisViewPage({params}: { params: RouteType }) {

    const {standardCurriculum} = params;
    return (
            <Stack height={1} sx={{overflow: "hidden"}}>
                <AnalysisHeader/>
                <DoabilityStepper standardCurriculum={decodeURI(standardCurriculum)}/>;
            </Stack>)
}