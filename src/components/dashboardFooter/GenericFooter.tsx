import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";

/**
 * generic footer component that displays children in grid
 * @param leftChild - ReactNode on the left side of generic grid
 * @param rightChild - ReactNode on the right side of generic grid
 * child needs to be grid!
 * **/
export const GenericFooter = ({ leftChild, rightChild }: GenericFooterProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Grid container spacing={1} alignItems="center" justifyContent={"space-between"}>
                    {/*can't be item container that breaks the formatting*, child is Grid*/}
                    {leftChild}
                    {rightChild}
                </Grid>
            </Toolbar>
        </Box>
    );
};
type GenericFooterProps = {
    leftChild: React.ReactNode;
    rightChild: React.ReactNode;
};
