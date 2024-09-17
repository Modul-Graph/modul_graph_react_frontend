import {useDescription, useTsController} from "@ts-react/form";
import InertTextField from "@/components/dashboardDialog/InertTextField";
import {DisplayOnlyTextType} from "@/lib/zod/general";

export default function DisplayOnlyFormTextField() {
    const {
        field: {value: _value, disabled},
        error,
    } = useTsController<DisplayOnlyTextType>();
    const {label, placeholder} = useDescription();

    const value = _value ?? "";

    return (
            <InertTextField
                    fullWidth
                    value={value}
                    error={!!error}
                    helperText={error?.errorMessage}
                    variant={"outlined"}
                    disabled={disabled}
                    label={label}
                    placeholder={placeholder}
            />
    );
}
