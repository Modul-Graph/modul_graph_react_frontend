'use client'
import {StudentHeader} from "@/components/dashboardHeader/StudentHeader";
import {StudentFooter} from "@/components/dashboardFooter/StudentFooter";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {GraphSkeleton} from "@/components/placeholder/GraphSkeleton";
import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import {useState} from "react";
import {CompetencyGraph} from "@/components/CompetencyGraph";

/**
 * renders student view with functionalities and module studyProgramGraph
 * */
export default function StudentViewPage({params}: { params: RouteType }) {
    const [competences, setCompetences] = useState<string[]>([])



    return (
            <Box height={1} >
                <Stack height={1}>
                    <StudentHeader sc_name={decodeURI(params.standardCurriculum)}
                                   onCompetenceChange={(v) => setCompetences(v)}/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative", overflow: "hidden"}} //
                            display={"block"}

                    >
                        {competences.length === 0 ?
                                <GraphSkeleton/>
                                : <CompetencyGraph sc_name={decodeURI(params.standardCurriculum)}
                                                   competences={competences}/>
                        }

                    </Box>

                    {/*<StudentFooter onClick={() => {*/}
                    {/*}}/>*/}
                </Stack>

            </Box>
    )
}