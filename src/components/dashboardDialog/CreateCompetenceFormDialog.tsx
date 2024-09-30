import {Dispatch, SetStateAction} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import CreateCompetenceForm from "@/components/form/competences/CreateCompetenceForm";

export default function CreateCompetenceFormDialog({onSuccess, open, setOpen}: {
    onSuccess?: () => void,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) {
    return <GenericDialog title={"Kompetenz Erstellen"} open={open} setOpen={setOpen}>
        <CreateCompetenceForm onSuccess={onSuccess}/>
    </GenericDialog>
}