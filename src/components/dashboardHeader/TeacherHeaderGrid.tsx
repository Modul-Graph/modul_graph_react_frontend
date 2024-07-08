import {Grid} from "@mui/material";
import {SelectCompetencies} from "@/components/select/SelectCompetencies";
import {HeaderButtonGroup} from "@/components/buttons/HeaderButtonGroup";
import {ButtonSelectStudyProgram} from "@/components/buttons/ButtonSelectStudyProgram";
import {HeaderButtonAnalysis} from "@/components/buttons/HeaderButtonAnalysis";

export const TeacherHeaderGrid = () => {

    return(
           <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" container item xs={10}>
                            <Grid container item xs={12} sm={6} md={4} lg={"auto"}>
                                <SelectCompetencies></SelectCompetencies>
                            </Grid>
                            <Grid container item xs={12} sm={8} md={6} lg={"auto"}>
                                <HeaderButtonGroup/>
                            </Grid>
                            <Grid container item xs={12} sm={6} md={3} lg={"auto"}>
                                <HeaderButtonAnalysis/>
                            </Grid>
                            <Grid container item xs={12} sm={6} md={3} lg={"auto"}>
                                <ButtonSelectStudyProgram></ButtonSelectStudyProgram>
                            </Grid>
                        </Grid>
    )
}