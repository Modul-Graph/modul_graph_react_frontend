import {createTsForm} from "@ts-react/form";
import FormContainer from "@/components/form/FormContainer";
import {CPSchema, DisplayOnlyTextSchema, FilledByModuleSchema} from "@/lib/zod/general";
import FilledByModuleEditFormComponent from "@/components/form/moduleArea/FilledByModuleEditFormComponent";
import CPTextField from "@/components/form/CPTextField";
import DisplayOnlyFormTextField from "@/components/form/DisplayOnlyFormTextField";
import {updateClusterSchema, updateCpClusterCellSchema} from "@/lib/zod/cpClusterSchemas";
import CellFormList from "@/components/form/cpCluster/CellFormList";
import {CpCluster} from "@/lib/zod/teacherScTableSchemas";
import apiClient from "@/lib/connectivity/client";

const formMapping = [
    [FilledByModuleSchema, FilledByModuleEditFormComponent] as const,
    [CPSchema, CPTextField] as const,
    [DisplayOnlyTextSchema, DisplayOnlyFormTextField] as const,
    [updateCpClusterCellSchema, CellFormList] as const,
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});


export default function EditCPClusterForm({data, onSuccess}: { data: CpCluster, onSuccess?: () => void }) {
    return <Form defaultValues={{
        cp_note: data.cp_note,
        clusterId: data.cp_cluster_id,
        cells: data.cells
    }} schema={updateClusterSchema} onSubmit={async (d) => {
        await apiClient.updateCpCluster(d, {})
        onSuccess?.()

    }}/>
}