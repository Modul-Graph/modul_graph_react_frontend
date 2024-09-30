import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import { HeaderTitle } from "@/components/dashboardHeader/HeaderTitle";

/**
 * renders title, child and menu component in header
 * **/
export const GenericHeader = ({ title, child, menu }: GenericHeaderProps) => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid
                        container
                        rowSpacing={1}
                        alignItems="center"
                        justifyContent={"space-between"}
                        direction={"row"}
                    >
                        <Grid item>
                            <HeaderTitle title={title} />
                        </Grid>
                        {child}
                        <Grid item xs={0.4}>
                            {menu}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

type GenericHeaderProps = {
    title: string;
    child: React.ReactNode;
    menu: React.ReactNode;
};
