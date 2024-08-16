import {TeacherFooter} from "@/components/dashboardFooter/TeacherFooter";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {TeacherHeader} from "@/components/dashboardHeader/TeacherHeader";
import {TableSkeleton} from "@/components/placeholder/TableSkeleton";
/**
 * renders teacher view start page with functionalities and navigation
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
                        <TableSkeleton/>
                    </Box>

                    <TeacherFooter/>
                </Stack>

            </Box>
    )

}