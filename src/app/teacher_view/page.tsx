import {TeacherHeader} from "@/components/dashboardHeader/TeacherHeader";
import {TeacherFooter} from "@/components/dashboardFooter/TeacherFooter";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {CustomGraph} from "@/components/studyProgramGraph/CustomGraph";
import {edges, nodes} from "@/components/studyProgramGraph/MockData";
/**
 * renders teacher view with functionalities and module studyProgramGraph
 * */
export default function TeacherViewPage() {
    return (
            <Box height={1}>
                <Stack height={1}>
                    <TeacherHeader/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative"}}
                            display={"block"}

                    >
                        <CustomGraph nodes={nodes} edges={edges}></CustomGraph>
                    </Box>

                    <TeacherFooter/>
                </Stack>

            </Box>
    )

}