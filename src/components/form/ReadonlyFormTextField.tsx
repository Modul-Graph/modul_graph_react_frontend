import { useDescription, useTsController } from "@ts-react/form";
import TextField from "@mui/material/TextField";

export default function ReadonlyFormTextField() {
    const {
        field: { value: _value, disabled },
        error,
    } = useTsController<string>();
    const { label, placeholder } = useDescription();

    const value = _value ?? "";

    return (
        <TextField
            value={value}
            onChange={(e) => {}}
            error={!!error}
            helperText={error?.errorMessage}
            variant={"outlined"}
            disabled={disabled}
            label={label}
            slotProps={{
                htmlInput: {
                    inert: "",
                },
            }}
            inert={true}
            placeholder={placeholder}
        />
    );
}
