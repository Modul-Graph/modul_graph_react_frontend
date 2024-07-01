import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
/**
 * renders child component in header
 * **/
export const GenericHeader = ({child}:GenericHeaderProps) => {
    return (
             <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        {child}
                    </Toolbar>
                </AppBar>
            </Box>
    )
}

type GenericHeaderProps = {child:React.ReactNode}