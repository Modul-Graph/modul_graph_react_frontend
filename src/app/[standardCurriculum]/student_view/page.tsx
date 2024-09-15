import {StudentHeader} from "@/components/dashboardHeader/StudentHeader";
import {StudentFooter} from "@/components/dashboardFooter/StudentFooter";
import {CustomGraph} from "@/components/studyProgramGraph/CustomGraph";
import {edges, nodes} from "@/components/studyProgramGraph/MockData";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {GraphSkeleton} from "@/components/placeholder/GraphSkeleton";

/**
 * renders student view with functionalities and module studyProgramGraph
 * */
export default function StudentViewPage() {
    const isLoading = true;

    return (
            <Box height={1}>
                <Stack height={1}>
                    <StudentHeader/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative", overflow: "hidden"}} //
                            display={"block"}

                    >
                        {isLoading ?
                                <GraphSkeleton/>
                                : <CustomGraph nodes={nodes} edges={edges}></CustomGraph>
                        }

                    </Box>

                    <StudentFooter/>
                </Stack>

            </Box>
    )
}