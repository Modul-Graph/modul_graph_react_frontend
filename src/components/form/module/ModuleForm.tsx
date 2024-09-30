import {PflichtModuleUpdateSchema} from "@/lib/zod/ModuleSchemas";
import {Divider, Stack, Typography} from "@mui/material";
import {DeepPartial, useForm} from "react-hook-form";
import {z} from "zod";
import {
    CPSchema,
    HiddenArrayValueSchema,
    HiddenStringValueSchema,
    ModuleAreaListSchema,
    MultilineTextSchema,
    NeededCompetencesSchema,
    ProvidedCompetencesSchema
} from "@/lib/zod/general";
import FillsModuleAreaEditFormComponent from "@/components/form/module/FillsModuleAreaEditFormComponent";
import CPTextField from "@/components/form/CPTextField";
import FormTextField from "@/components/form/FormTextField";
import BooleanFormToggle from "@/components/form/BooleanFormToggle";
import MultilineFormTextField from "@/components/form/MultilineFormTextField";
import NeededCompetencesFormSelector from "@/components/form/competences/NeededCompetencesFormSelector";
import ProvidedCompetencesFormSelector from "@/components/form/competences/ProvidedCompetencesFormSelector";
import HiddenStringFormField from "@/components/form/HiddenStringFormField";
import HiddenArrayFormField from "@/components/form/HiddenArrayFormField";
import {createTsForm} from "@ts-react/form";
import FormContainer from "@/components/form/FormContainer";
import {RTFFormSubmitFn, UnwrapEffects} from "@ts-react/form/lib/src/createSchemaForm";


const formMapping = [
    [ModuleAreaListSchema, FillsModuleAreaEditFormComponent] as const,
    [CPSchema, CPTextField] as const,
    [z.string(), FormTextField] as const,
    [z.boolean(), BooleanFormToggle],
    [MultilineTextSchema, MultilineFormTextField],
    [NeededCompetencesSchema, NeededCompetencesFormSelector],
    [ProvidedCompetencesSchema, ProvidedCompetencesFormSelector],
    [HiddenArrayValueSchema, HiddenStringFormField],
    [HiddenStringValueSchema, HiddenArrayFormField]
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});

export default function ModuleForm({defaultValues, onSubmit, form}: {
    sc_name: string,
    defaultValues?: DeepPartial<z.infer<UnwrapEffects<typeof PflichtModuleUpdateSchema>>>,
    onSubmit: RTFFormSubmitFn<typeof PflichtModuleUpdateSchema>
    form?: ReturnType<typeof useForm<z.infer<typeof PflichtModuleUpdateSchema>>>
}) {

    return <Form
            form={form}
            onSubmit={onSubmit}
            schema={PflichtModuleUpdateSchema}
            defaultValues={defaultValues}
    >
        {
            ({provides_competences, needs_competences, ...props}) => {
                return <>
                    {Object.values(props)}
                    <Stack direction={"row"} spacing={4}>
                        <Stack gap={1}>
                            <Typography variant={"h5"}>Bereitgestellte Kompetenzen:</Typography>
                            {provides_competences}
                        </Stack>
                        <Divider orientation="vertical" flexItem/>
                        <Stack gap={1}>
                            <Typography variant={"h5"}>Benötigte Kompetenzen</Typography>
                            {needs_competences}
                        </Stack>

                    </Stack>
                </>
            }
        }
    </Form>
}