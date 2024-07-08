import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Grid} from "@mui/material";
import {HeaderTitle} from "@/components/dashboardHeader/HeaderTitle";

/**
 * renders title and child component in header
 * **/
export const GenericHeader = ({title, child}: GenericHeaderProps) => {
    return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container rowSpacing={1} alignItems="center" direction={"row"} >

                            <Grid item>
                                <HeaderTitle title={title}/>
                            </Grid>
                            {child}
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}

type GenericHeaderProps = {
    title: string;
    child: React.ReactNode
}