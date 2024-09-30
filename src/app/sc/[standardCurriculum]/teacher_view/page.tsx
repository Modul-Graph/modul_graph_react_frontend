"use client";

import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {apiHooks} from "@/lib/connectivity/client";
import React from "react";
import TimeTable from "@/components/timeTable/TimeTable";
import CellInfoDialog from "@/components/dashboardDialog/CellInfoDialog";
import CpClusterInfoDialog from "@/components/dashboardDialog/CpClusterInfoDialog";
import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import {TeacherHeader} from "@/components/dashboardHeader/TeacherHeader";

/**
 * renders teacher view start page with functionalities and navigation
 * */
export default function TeacherViewPage({params}: { params: RouteType }) {
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
                    <TeacherHeader sc_name={sc_name}/>
                    <Box py={1} px={3} flexGrow={1}>
                        <TimeTable
                                ttData={res}
                                onCellClicked={(e, cell) => {
                                    console.log(e)
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
            </>)

}