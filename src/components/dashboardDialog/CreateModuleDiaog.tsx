import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {Dispatch, SetStateAction, useState} from "react";
import CreateModule from "@/components/form/module/CreateModule";
import {Button} from "@mui/material";

export default function CreateModuleDialog({open, setOpen, sc_name}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    sc_name: string
}) {
    return <GenericDialog title={"Modul erstellen"} open={open} setOpen={setOpen}>
        <CreateModule sc_name={sc_name} onSaved={() => {
            setOpen(false)
        }}/>
    </GenericDialog>
}