import { useDescription, useTsController } from "@ts-react/form";
import TextField from "@mui/material/TextField";

export default function MultilineFormTextField() {
    const {
        field: { onChange, value: _value, disabled },
        error,
    } = useTsController<string>();
    const { label, placeholder } = useDescription();

    const value = _value ?? "";

    return (
        <TextField
            minRows={4}
            maxRows={16}
            multiline={true}
            fullWidth
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            error={!!error}
            helperText={error?.errorMessage}
            variant={"outlined"}
            disabled={disabled}
            label={label}
            placeholder={placeholder}
        />
    );
}
