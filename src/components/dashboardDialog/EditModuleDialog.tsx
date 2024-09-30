import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {Dispatch, SetStateAction} from "react";
import {apiHooks} from "@/lib/connectivity/client";
import UpdatePflichtModuleForm from "@/components/form/module/UpdateModuleForm";

export default function EditModuleDialog({sc_name, onSaved, module_name, open, setOpen}: {
    sc_name: string,
    onSaved: () => void,
    module_name: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) {

    const {data, isLoading, isError} = apiHooks.useGetModule({params: {moduleName: module_name}}, {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })

    console.log(data)

    if (isLoading || isError) return <></>

    return <GenericDialog title={"Modul Bearbeiten"} buttons={<></>} open={open} setOpen={setOpen}>
        <UpdatePflichtModuleForm module={data} sc_name={sc_name} onSaved={() => onSaved()}/>
    </GenericDialog>
}