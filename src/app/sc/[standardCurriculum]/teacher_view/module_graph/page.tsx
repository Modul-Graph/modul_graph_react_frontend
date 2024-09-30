"use client"

import {TeacherHeaderModuleGraph} from "@/components/dashboardHeader/TeacherHeaderModuleGraph";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
// import {edges, nodes} from "@/components/studyProgramGraph/MockData";
import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import {useEffect, useState} from "react";
import {CompetencyGraph} from "@/components/CompetencyGraph";

/**
 * renders teacher view with functionalities and module studyProgramGraph
 * */
export default function TeacherViewModuleGraphPage({params}: { params: RouteType }) {

    const sc_name = decodeURI(params.standardCurriculum);
    const [competences, setCompetences] = useState<string[]>([])

    useEffect(() => {
    }, []);

    return (
            <Box height={1}>
                <Stack height={1}>
                    <TeacherHeaderModuleGraph sc_name={sc_name} onChange={(d) => setCompetences(d)}/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative", overflow: "hidden"}}
                            display={"block"}


                    >
                        <CompetencyGraph sc_name={sc_name} competences={competences}/>
                    </Box>
                </Stack>

            </Box>
    )

}