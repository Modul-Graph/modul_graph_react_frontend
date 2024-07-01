import {Grid} from "@mui/material";
import {SelectCompetencies} from "@/components/select/SelectCompetencies";
import {HeaderButtonGroup} from "@/components/buttons/HeaderButtonGroup";
import {OuterSelectStudyProgram} from "@/components/select/OuterSelectStudyProgram";
import {HeaderTitle} from "@/components/dashboardHeader/HeaderTitle";
import {HeaderButtonAnalysis} from "@/components/buttons/HeaderButtonAnalysis";

export const TeacherHeaderGrid = () => {

    return(
           <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" container>
                            <Grid item>
                                <HeaderTitle title="Studienverlaufsplan"/>

                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={2.2}>
                                <SelectCompetencies></SelectCompetencies>
                            </Grid>
                            <Grid item xs={12} sm={8} md={6} lg={4}>
                                <HeaderButtonGroup/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={1.7}>
                                <HeaderButtonAnalysis/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={2.5}>
                                <OuterSelectStudyProgram></OuterSelectStudyProgram>
                            </Grid>
                        </Grid>
    )
}