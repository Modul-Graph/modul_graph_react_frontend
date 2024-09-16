import {createTsForm} from "@ts-react/form";
import FormContainer from "@/components/form/FormContainer";
import {CPSchema, FilledByModuleSchema, ModuleAreaNameSchema} from "@/lib/zod/general";
import FilledByModuleEditFormComponent from "@/components/form/moduleArea/FilledByModuleEditFormComponent";
import CPTextField from "@/components/form/CPTextField";
import FormTextField from "@/components/form/FormTextField";

const formMapping = [
    [FilledByModuleSchema, FilledByModuleEditFormComponent] as const,
    [CPSchema, CPTextField] as const,
    [ModuleAreaNameSchema, FormTextField] as const,
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});


export default function () {
    return <Form schema={} onSubmit={} />
}