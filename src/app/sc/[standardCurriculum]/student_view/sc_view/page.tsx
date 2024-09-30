"use client"

import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import {Box, Stack} from "@mui/material";
import TimeTable from "@/components/timeTable/TimeTable";
import React from "react";
import {apiHooks} from "@/lib/connectivity/client";
import {StudentViewSCHeader} from "@/components/dashboardHeader/StudentViewSCHeader";

/**
 * renders competence table for standard curriculum with competency analysis
 * */

export default function TableViewPage({params}: { params: RouteType }) {

    const sc_name = decodeURI(params.standardCurriculum);

    const {
        data: res,
        isLoading,
        error,

    } = apiHooks.useGetTeacherScTable(
            {
                queries: {sc_name: sc_name},
            },
            {
                refetchInterval: false,
                refetchOnWindowFocus: false,
            },
    );


    if (error) return "error";
    if (isLoading) return "loading";

    return (
            <>
                <Stack height={1}>
                    <StudentViewSCHeader sc_name={sc_name}/>
                    <Box py={1} px={3} flexGrow={1} position={"relative"}>
                        <TimeTable
                                ttData={res}
                                onCellClicked={() => {
                                }}
                                onCpClusterClicked={() => {
                                }}
                        />
                    </Box>
                </Stack>
            </>
    )
}