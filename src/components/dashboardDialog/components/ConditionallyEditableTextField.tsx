import { ComponentProps } from "react";
import { TextField } from "formik-mui";

export default function ConditionallyEditableTextField({
    editable,
    ...props
}: { editable: boolean } & ComponentProps<typeof TextField>) {
    const tabIndex = editable ? props.tabIndex : -1;
    const inert = editable ? props.slotProps?.htmlInput?.inert : "";
    return (
        <TextField
            {...props}
            tabIndex={tabIndex}
            slotProps={{
                ...props.slotProps,
                input: {
                    ...props.slotProps?.input,
                },
                htmlInput: {
                    ...props.slotProps?.htmlInput,
                    inert: inert,
                    tabIndex: tabIndex,
                },
            }}
        />
    );
}
