import {Grid} from "@mui/material";
import {HeaderTitle} from "@/components/dashboardHeader/HeaderTitle";
import {SelectCompetencies} from "@/components/select/SelectCompetencies";
import {OuterSelectStudyProgram} from "@/components/select/OuterSelectStudyProgram";
import {HeaderButtonViewRSP} from "@/components/buttons/HeaderButtonViewRSP";

export const StudentHeaderGrid = () => {
    return(
            <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" container>
                            <Grid item>
                                <HeaderTitle title="individueller Studienplan"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={2.2}>
                                <SelectCompetencies></SelectCompetencies>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={2.2}>
                                <HeaderButtonViewRSP/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={2.5}>
                                <OuterSelectStudyProgram></OuterSelectStudyProgram>
                            </Grid>
                        </Grid>
    )

}