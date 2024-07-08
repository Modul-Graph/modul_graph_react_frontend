import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
/**
 * functional component for custom buttons in a grid for footer
 * **/
export const FooterTeacherButtonsGrid = () => {
    return(
            <Grid container item direction={"row"} rowSpacing={1} width={"unset"} spacing={1}>
                <Grid item>
                    <Button variant="outlined">Differenzansicht</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">Änderungen speichern</Button>
                </Grid>
            </Grid>
    )
}