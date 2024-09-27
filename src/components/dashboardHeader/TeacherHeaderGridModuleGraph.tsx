import {Grid} from "@mui/material";
import {SelectCompetencies} from "@/components/select/SelectCompetencies";
import {HeaderButtonGroup} from "@/components/buttons/HeaderButtonGroup";
import {ButtonSelectStudyProgram} from "@/components/buttons/ButtonSelectStudyProgram";
import {Dispatch, SetStateAction} from "react";

/**
 * responsive header grid layout for the teacher view with interactive components + competency filter
 * **/

export const TeacherHeaderGridModuleGraph = ({onChange, sc_name}: {
    onChange: (v: string[]) => void
    sc_name: string
}) => {

    return(
           <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" container item xs={10}>
                            <Grid container item xs={12} sm={6} md={4} lg={"auto"}>
                                <SelectCompetencies sc_name={sc_name} onChange={onChange}></SelectCompetencies>
                            </Grid>

                        </Grid>
    )
}