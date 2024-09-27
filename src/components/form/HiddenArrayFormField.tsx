import {useTsController} from "@ts-react/form";
import {HiddenArrayType, HiddenStringType} from "@/lib/zod/general";

export default function HiddenArrayFormField() {
    const {
        field: { onChange, value: _value, disabled },
        error,
    } = useTsController<HiddenArrayType>();

    return (
        <></>
    );
}