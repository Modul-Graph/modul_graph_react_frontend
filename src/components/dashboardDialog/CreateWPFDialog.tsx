import {Dispatch, SetStateAction} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import CreateModuleAreaForm from "@/components/form/moduleArea/CreateModuleAreaForm";

export default function CreateWPFDialog({sc_name, open, setOpen}: {
    sc_name: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) {

    return <GenericDialog title={"WPF erstellen"} buttons={<></>} open={open} setOpen={setOpen}>
        <CreateModuleAreaForm sc_name={sc_name} onSaved={() => {
            setOpen(false)
        }}/>
    </GenericDialog>
}