import {CompetenceSCHeader} from "@/components/dashboardHeader/CompetenceSCHeader";
import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import CompetenceTimeTable from "@/app/sc/[standardCurriculum]/competence_sc/CompetenceTimeTable";
import {Box, Stack} from "@mui/material";

/**
 * renders competence table for standard curriculum with competency analysis
 * */

export default function TableViewPage({params}: { params: RouteType }) {
    return (
            <Stack height={1} gap={1}>
                <CompetenceSCHeader/>
                <Box height={1} overflow={"hidden"}>
                    <CompetenceTimeTable sc={params.standardCurriculum}/>
                </Box>
            </Stack>)
}