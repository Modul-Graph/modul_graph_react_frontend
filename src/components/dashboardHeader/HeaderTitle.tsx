import {Typography} from "@mui/material";
/**
 * takes a title prop and renders it inside a Typography component
 * **/
export const HeaderTitle = ({title}:HeaderTitleProps) => {


    return (
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {title}
            </Typography>
    )
}

type HeaderTitleProps = {title:String}