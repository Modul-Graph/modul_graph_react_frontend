import {Dispatch, SetStateAction} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import CreateCPClusterForm from "@/components/form/cpCluster/CreateCPClusterForm";

export default function CreateCPClusterDialog({open, setOpen, onSave}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    onSave: () => void
}) {
    return <GenericDialog title={"CP-Cluster anlegen"} open={open} setOpen={setOpen}>
        <CreateCPClusterForm onSuccess={onSave}/>
    </GenericDialog>
}