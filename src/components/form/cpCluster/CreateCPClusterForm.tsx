import {createTsForm} from "@ts-react/form";
import FormContainer from "@/components/form/FormContainer";
import {CPSchema, DisplayOnlyTextSchema, FilledByModuleSchema} from "@/lib/zod/general";
import FilledByModuleEditFormComponent from "@/components/form/moduleArea/FilledByModuleEditFormComponent";
import CPTextField from "@/components/form/CPTextField";
import DisplayOnlyFormTextField from "@/components/form/DisplayOnlyFormTextField";
import {createClusterSchema, updateCpClusterCellSchema} from "@/lib/zod/cpClusterSchemas";
import CellFormList from "@/components/form/cpCluster/CellFormList";
import apiClient from "@/lib/connectivity/client";

const formMapping = [
    [FilledByModuleSchema, FilledByModuleEditFormComponent] as const,
    [CPSchema, CPTextField] as const,
    [DisplayOnlyTextSchema, DisplayOnlyFormTextField] as const,
    [updateCpClusterCellSchema, CellFormList] as const,
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});


export default function CreateCPClusterForm({onSuccess}: { onSuccess?: () => void }) {
    return <Form schema={createClusterSchema} onSubmit={async (d) => {
        await apiClient.createCPCluster(d, {})
        onSuccess?.()
    }}/>
}