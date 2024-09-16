/**
 * @fileoverview CellInfoDialog component that displays the information of a TimeTable cell in a dialog.
 */
import {apiHooks} from "@/lib/connectivity/client";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Button} from "@mui/material";
import ModuleAreaForm from "@/components/form/moduleArea/ModuleAreaForm";
import WPFInfoView from "@/components/dashboardDialog/components/WPFInfoView";
import ModuleForm from "@/components/form/module/PflichtModuleForm";
import PflichtmoduleInfoView from "@/components/dashboardDialog/components/PflichtmoduleInfoView";

export default function CellInfoDialog({
                                           cellId,
                                           setOpen,
                                           open,
                                           sc_name,
                                           onChangeSubmitted,
                                       }: {
    cellId?: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
    open: boolean;
    sc_name: string;
    onChangeSubmitted?: () => void;
}) {
    const {data, isLoading, error, refetch} = apiHooks.useGetCellInformation(
            {
                params: {
                    cellId: cellId!, // can't be undefined, as we check that in the enabled option
                },
            },
            {enabled: open && cellId !== undefined},
    );

    const [editableView, setEditableView] = useState(false);

    useEffect(() => {
        if (!open) {
            setEditableView(false);
        }
    }, [open]);
    if (error) return "error";
    if (isLoading) return "loading";


    return (
            <GenericDialog
                    sx={{
                        minWidth: "40vw",
                    }}
                    open={open}
                    title={`${data.name}`}
                    setOpen={setOpen}
                    buttons={
                        <Button
                                variant={"contained"}
                                fullWidth
                                color={editableView ? "error" : "primary"}
                                onClick={() => setEditableView(!editableView)}
                        >
                            {editableView ? "Abbrechen" : "Bearbeiten"}
                        </Button>
                    }
            >
                {data.contains_wpf ? (
                        editableView ? (
                                <ModuleAreaForm
                                        sc_name={sc_name}
                                        moduleArea={data.data}
                                        onSaved={() => {
                                            setEditableView(false);
                                            refetch();
                                            onChangeSubmitted?.();
                                        }}
                                />
                        ) : (
                                <WPFInfoView data={data.data}/>
                        )
                ) : editableView ? (
                        <ModuleForm sc_name={sc_name} module={data.data} onSaved={() => {
                            setEditableView(false);
                            refetch();
                            onChangeSubmitted?.();
                        }}/>
                ) : <PflichtmoduleInfoView
                        data={data.data}/>}
            </GenericDialog>
    );
}
