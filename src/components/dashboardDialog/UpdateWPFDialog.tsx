import {apiHooks} from "@/lib/connectivity/client";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import UpdateModuleAreaForm from "@/components/form/moduleArea/UpdateModuleAreaForm";
import {useRouter} from "next/navigation";
import {Dispatch, SetStateAction} from "react";

export default function UpdateWPFDialog({sc_name, wpf_name, open, setOpen, onSaved}: {
    sc_name: string,
    wpf_name: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    onSaved: () => void
}) {

    const {data, isLoading, isError} = apiHooks.useGetModuleArea({params: {moduleAreaName: wpf_name}}, {})

    useRouter();


    if (isLoading || isError) return <></>

    return <GenericDialog title={"WPF Bearbeiten"} open={open} setOpen={setOpen} buttons={<></>}>
        <UpdateModuleAreaForm sc_name={sc_name} moduleArea={data} onSaved={onSaved}/>
    </GenericDialog>
}