import {createTsForm} from "@ts-react/form";
import FormContainer from "@/components/form/FormContainer";
import apiClient from "@/lib/connectivity/client";
import FormTextField from "@/components/form/FormTextField";
import {z} from "zod";
import {competenceSchema} from "@/lib/zod/competenceSchema";

const formMapping = [
    [z.string(), FormTextField] as const,
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});


export default function CreateCompetenceForm({onSuccess}: { onSuccess?: () => void }) {
    return <Form schema={competenceSchema} onSubmit={async (d) => {
        await apiClient.createCompetence(undefined, {params: {name: d.name}})
        onSuccess?.()
    }}/>
}