import { useDescription, useTsController } from "@ts-react/form";
import React from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function BooleanFormToggle() {
    const {
        field: { onChange, value: _value, disabled },
        error,
    } = useTsController<boolean>();
    const { label, placeholder } = useDescription();

    const value = _value ?? false;

    return (
        <FormControl component="fieldset" variant="standard">
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={value} onChange={(_, checked) => onChange(checked)} />}
                    label={label}
                />
            </FormGroup>
            {error ? <FormHelperText error={error}>{error.errorMessage ?? "unknown error"}</FormHelperText> : <></>}
        </FormControl>
    );
}
