import {useTsController} from "@ts-react/form";
import TextField from "@mui/material/TextField";
import {CPType} from "@/lib/zod/general";

export default function CPTextField() {
    const {
        field: { onChange, value: _value, disabled },
        error,
    } = useTsController<CPType>();

    const value = _value ?? "";

    return (
        <TextField
            fullWidth
            error={!!error}
            variant={"outlined"}
            helperText={error?.errorMessage}
            type={"number"}
            label={"CP"}
            slotProps={{
                input: {
                    step: "0.1"
                },
                htmlInput: {
                    step: "0.1"
                }
            }}
            disabled={disabled}
            value={value}
            onChange={(e) => {
                onChange(Number.parseFloat(e.target.value))
            }}
        />
    );
}
