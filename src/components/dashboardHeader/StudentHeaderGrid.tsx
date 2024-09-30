import {Grid} from "@mui/material";
import {SelectCompetencies} from "@/components/select/SelectCompetencies";
import {ButtonSelectStudyProgram} from "@/components/buttons/ButtonSelectStudyProgram";
import {HeaderButtonViewRSP} from "@/components/buttons/HeaderButtonViewRSP";
/**
 * responsive header grid layout for the student view with interactive components
 * **/
export const StudentHeaderGrid = ({onCompetenceChange, sc_name}: {onCompetenceChange: (v: string[]) => void, sc_name: string}) => {
    return(
            <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" xs={10} container item>
                            <Grid container item xs={12} sm={6} md={4} lg={"auto"}>
                                <SelectCompetencies sc_name={sc_name} onChange={onCompetenceChange}></SelectCompetencies>
                            </Grid>
                            <Grid container item xs={12} sm={6} md={3} lg={"auto"}>
                                <HeaderButtonViewRSP/>
                            </Grid>
                            <Grid container item xs={12} sm={6} md={3} lg={"auto"}>
                                <ButtonSelectStudyProgram></ButtonSelectStudyProgram>
                            </Grid>
                        </Grid>
    )

}