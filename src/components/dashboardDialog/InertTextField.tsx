import {ComponentProps} from "react";
import {TextField} from "@mui/material";

export default function InertTextField({...props}: ComponentProps<typeof TextField>) {
    return <TextField
            slotProps={{
                ...props.slotProps,
                htmlInput: {
                    ...props.slotProps?.htmlInput,
                    inert: "",
                },
            }}
            {...props}
    />;
}