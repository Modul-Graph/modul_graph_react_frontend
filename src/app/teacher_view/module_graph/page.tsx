import {TeacherHeaderModuleGraph} from "@/components/dashboardHeader/TeacherHeaderModuleGraph";
import {TeacherFooter} from "@/components/dashboardFooter/TeacherFooter";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {CustomGraph} from "@/components/studyProgramGraph/CustomGraph";
import {edges, nodes} from "@/components/studyProgramGraph/MockData";
import {GraphSkeleton} from "@/components/placeholder/GraphSkeleton";
/**
 * renders teacher view with functionalities and module studyProgramGraph
 * */
export default function TeacherViewModuleGraphPage() {
    const isLoading= true;
    return (
            <Box height={1}>
                <Stack height={1}>
                    <TeacherHeaderModuleGraph/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative", overflow: "hidden"}}
                            display={"block"}


                    >
                    {isLoading ?
                            <GraphSkeleton/>
                            : <CustomGraph nodes={nodes} edges={edges}></CustomGraph>
                        }
                    </Box>

                    <TeacherFooter/>
                </Stack>

            </Box>
    )

}