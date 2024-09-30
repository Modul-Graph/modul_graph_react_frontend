import {useTsController} from "@ts-react/form";
import {HiddenStringType} from "@/lib/zod/general";

export default function HiddenStringFormField() {
    const {
        field: { onChange, value: _value, disabled },
        error,
    } = useTsController<HiddenStringType>();

    return (
        <></>
    );
}