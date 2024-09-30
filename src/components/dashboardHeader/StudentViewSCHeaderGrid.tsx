import {Button, Grid} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";

/**
 * responsive header grid layout for the student view with interactive components
 * **/
export const StudentViewSCHeaderGrid = ({sc_name}: { sc_name: string }) => {
    return (
            <Grid direction={"row"} alignItems="center" justifyContent={"end"} xs={10} container item>
                <Grid item><Button color={"contrast"} startIcon={<ArrowBack/>}
                                   href={`/sc/${encodeURI(sc_name)}/student_view`}>Zurück</Button></Grid>
            </Grid>
    )

}