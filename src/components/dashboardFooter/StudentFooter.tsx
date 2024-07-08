import {GenericFooter} from "@/components/dashboardFooter/GenericFooter";
import {FooterStudentButton} from "@/components/buttons/FooterStudentButton";
import {Grid} from "@mui/material";
/**
 * footer component for student view
 * **/
export const StudentFooter = () => {
    return (<GenericFooter leftChild={<Grid item></Grid>} rightChild={<FooterStudentButton/>}/>)
}