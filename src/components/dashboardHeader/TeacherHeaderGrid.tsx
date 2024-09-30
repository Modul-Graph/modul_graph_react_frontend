import {Grid} from "@mui/material";
import {HeaderButtonGroup} from "@/components/buttons/HeaderButtonGroup";
import {ButtonSelectStudyProgram} from "@/components/buttons/ButtonSelectStudyProgram";


/**
 * responsive header grid layout for the teacher view with interactive components
 * **/

export const TeacherHeaderGrid = ({sc_name}: {sc_name: string}) => {

    return(
           <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" container item xs={10}>

                            <Grid container item xs={12} sm={8} md={6} lg={"auto"}>
                                <HeaderButtonGroup sc_name={sc_name}/>
                            </Grid>
                        </Grid>
    )
}