"use client";

import {TeacherHeaderModuleGraph} from "@/components/dashboardHeader/TeacherHeaderModuleGraph";
import {Box, Stack} from "@mui/material";
import TimeTable from "@/components/timeTable/TimeTable";
import {apiHooks} from "@/lib/connectivity/client";
import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import React from "react";
import CellInfoDialog from "@/components/dashboardDialog/CellInfoDialog";
import CpClusterInfoDialog from "@/components/dashboardDialog/CpClusterInfoDialog";

/**
 * renders teacher view with functionalities and module studyProgramGraph
 * */
export default function TeacherViewModuleGraphPage({params}: { params: RouteType }) {
    const sc_name = decodeURI(params.standardCurriculum);

    const {
        data: res,
        isLoading,
        error,
        refetch,
    } = apiHooks.useGetTeacherScTable(
            {
                queries: {sc_name: sc_name},
            },
            {
                refetchInterval: false,
                refetchOnWindowFocus: false,
            },
    );

    const [showCellDialog, setShowCellDialog] = React.useState(false);
    const [showCPClusterDialog, setShowCPClusterDialog] = React.useState(false);
    const [cellId, setCellId] = React.useState<string>();
    const [cpClusterId, setCpClusterId] = React.useState<string>();

    if (error) return "error";
    if (isLoading) return "loading";

    return (
            <>
                <Stack height={1}>
                    <TeacherHeaderModuleGraph/>
                    <Box py={1} px={3} flexGrow={1}>
                        <TimeTable
                                ttData={res}
                                onCellClicked={(e, cell) => {
                                    setCellId(cell.cellId);
                                    setShowCellDialog(true);
                                }}
                                onCpClusterClicked={(e, cpCluster) => {
                                    console.log(e)
                                    setCpClusterId(cpCluster.cp_cluster_id);
                                    setShowCPClusterDialog(true);
                                }}
                        />
                    </Box>
                </Stack>
                {showCellDialog ? <CellInfoDialog
                        onChangeSubmitted={refetch}
                        setOpen={setShowCellDialog}
                        open={showCellDialog}
                        cellId={cellId}
                        sc_name={sc_name}
                /> : null}
                {showCPClusterDialog ?
                        <CpClusterInfoDialog cpClusterID={cpClusterId!} open={showCPClusterDialog}
                                             setOpen={setShowCPClusterDialog}/> : null
                }
            </>
    );
}
