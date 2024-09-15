import {GenericFooter} from "@/components/dashboardFooter/GenericFooter";
import { FooterStudentButton, FooterStudentButtonProps} from "@/components/buttons/FooterStudentButton";
import {Grid} from "@mui/material";
/**
 * footer component for student view
 * **/
export const StudentFooter = ({onClick}: FooterStudentButtonProps) => {
    return (<GenericFooter leftChild={<Grid item></Grid>} rightChild={<FooterStudentButton onClick={onClick}/>}/>)
}