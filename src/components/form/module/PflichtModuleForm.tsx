import {createTsForm} from "@ts-react/form";
import CPTextField from "@/components/form/CPTextField";
import FormTextField from "@/components/form/FormTextField";
import {
    CPSchema,
    ModuleAreaListSchema,
    MultilineTextSchema,
    NeededCompetencesSchema,
    ProvidedCompetencesSchema
} from "@/lib/zod/general";
import FormContainer from "@/components/form/FormContainer";
import {ModuleResponseType} from "@/lib/zod/moduleResponseSchema";
import {PflichtModuleUpdateSchema} from "@/lib/zod/ModuleSchemas";
import FillsModuleAreaEditFormComponent from "@/components/form/module/FillsModuleAreaEditFormComponent";
import BooleanFormToggle from "@/components/form/BooleanFormToggle";
import {z} from "zod";
import MultilineFormTextField from "@/components/form/MultilineFormTextField";
import NeededCompetencesFormSelector from "@/components/form/competences/NeededCompetencesFormSelector";
import ProvidedCompetencesFormSelector from "@/components/form/competences/ProvidedCompetencesFormSelector";
import {Divider, Stack, Typography} from "@mui/material";
import apiClient from "@/lib/connectivity/client";

const formMapping = [
    [ModuleAreaListSchema, FillsModuleAreaEditFormComponent] as const,
    [CPSchema, CPTextField] as const,
    [z.string(), FormTextField] as const,
    [z.boolean(), BooleanFormToggle],
    [MultilineTextSchema, MultilineFormTextField],
    [NeededCompetencesSchema, NeededCompetencesFormSelector],
    [ProvidedCompetencesSchema, ProvidedCompetencesFormSelector],
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});

export default function ({
                             module: {
                                 name: oldName,
                                 cp_plus_description,
                                 description,
                                 summer,
                                 winter,
                                 provides_competences,
                                 needs_competences
                             },
                             onSaved,
                         }: {
    sc_name: string;
    module: ModuleResponseType;
    onSaved?: () => void;
}) {
    return (
            <Form
                    onSubmit={async (d) => {
                        console.log(d);
                        const prevName = oldName;
                        const {name, cp, description, summer, winter, needs_competences, provides_competences} = d;
                        await apiClient.updateModule(
                                {
                                    name,
                                    cp,
                                    description,
                                    summer,
                                    winter,
                                    needs_competences,
                                    provides_competences
                                },
                                {params: {old_name: prevName}},
                        );
                        onSaved?.();
                    }}
                    schema={PflichtModuleUpdateSchema}
                    defaultValues={{
                        name: oldName,
                        cp: cp_plus_description.DEFAULT,
                        description: description ?? "",
                        summer,
                        winter,
                        provides_competences,
                        needs_competences
                    }}
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
    );
}
