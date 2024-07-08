import {Grid} from "@mui/material";
import {SelectCompetencies} from "@/components/select/SelectCompetencies";
import {ButtonSelectStudyProgram} from "@/components/buttons/ButtonSelectStudyProgram";
import {HeaderButtonViewRSP} from "@/components/buttons/HeaderButtonViewRSP";

export const StudentHeaderGrid = () => {
    return(
            <Grid direction={"row"} rowSpacing={1} columnSpacing={2} alignItems="center" xs={10} container item>
                            <Grid container item xs={12} sm={6} md={4} lg={"auto"}>
                                <SelectCompetencies></SelectCompetencies>
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