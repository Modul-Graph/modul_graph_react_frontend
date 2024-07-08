import {GenericFooter} from "@/components/dashboardFooter/GenericFooter";
import {FooterTeacherButtonsGrid} from "@/components/buttons/FooterTeacherButtonsGrid";
import {Grid} from "@mui/material";
/**
 * footer component for teacher view
 * **/
export const TeacherFooter = () => {
    return(<GenericFooter leftChild={<Grid item></Grid>} rightChild={<FooterTeacherButtonsGrid/>}/>)
}
