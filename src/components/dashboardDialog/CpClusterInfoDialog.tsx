import {Dispatch, SetStateAction, useState} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {Button} from "@mui/material";
import apiClient, {apiHooks} from "@/lib/connectivity/client";
import CPClusterInfoView from "@/components/dashboardDialog/components/CPClusterInfoView";
import EditCPClusterForm from "@/components/form/cpCluster/EditCPClusterForm";

export default function CpClusterInfoDialog({cpClusterID, open, setOpen}: {
    cpClusterID: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) {
    const {
        data,
        isLoading,
        error,
        refetch
    } = apiHooks.useGetCPCluster({params: {cpClusterId: cpClusterID}}, {
        enabled: open,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        refetchOnReconnect: false
    });

    const [editing, setEditing] = useState(false);

    if (isLoading) return <></>;
    if (error) return <></>;

    return <GenericDialog
            title={"CP Cluster Info"}
            sx={{minWidth: "40vw"}}
            buttons={<>
                <Button onClick={() => {
                    setEditing((prev) => !prev)
                }}>
                    {editing ? "Abrechen" : "Bearbeiten"}
                </Button>
                <Button onClick={async () => {
                    await apiClient.deleteCPCluster(undefined, {params: {cpClusterId: cpClusterID}})
                }}>Löschen</Button></>
            } open={open} setOpen={setOpen}
    >
        {editing ? <EditCPClusterForm onSuccess={() => {
            refetch()
            setEditing(false)
        }} data={data}/> : <CPClusterInfoView data={data}/>}
    </GenericDialog>
}