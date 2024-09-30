"use client"

import {Button, ButtonGroup} from "@mui/material";
import CreateModuleDialog from "@/components/dashboardDialog/CreateModuleDiaog";
import {useState} from "react";
import SelectModuleDialog from "@/components/dashboardDialog/SelectModuleDialog";
import EditModuleDialog from "@/components/dashboardDialog/EditModuleDialog";
import apiClient from "@/lib/connectivity/client";
import CreateWPFDialog from "@/components/dashboardDialog/CreateWPFDialog";
import UpdateWPFDialog from "@/components/dashboardDialog/UpdateWPFDialog";
import {useRouter} from "next/navigation";
import SelectWPFDialog from "@/components/dashboardDialog/SelectWPFDialog";
import CreateCPClusterDialog from "@/components/dashboardDialog/CreateCPClusterDialog";
import CreateCompetenceFormDialog from "@/components/dashboardDialog/CreateCompetenceFormDialog";
import SelectCompetenceDialog from "@/components/dashboardDialog/SelectCompetenceDialog";

export const HeaderButtonGroup = ({sc_name}: { sc_name: string }) => {
    const [createModuleDiagOpen, setCreateModuleDiagOpen] = useState(false)
    const [selectUpdateModuleDiagOpen, setSelectUpdateModuleDiagOpen] = useState(false)
    const [editModuleDiagOpen, setEditModuleDiagOpen] = useState(false)
    const [module_name, setModule_name] = useState<string | null>(null)
    const [deleteSelectModuleDiagOpen, setDeleteSelectModuleDiagOpen] = useState(false)
    const [createWPFDialogOpen, setCreateWPFDialogOpen] = useState(false)
    const [selectWPFDialogOpen, setSelectWPFDialogOpen] = useState(false)
    const [wpfName, setWpfName] = useState<string | null>(null)
    const [editWPFDialogOpen, setEditWPFDialogOpen] = useState(false)
    const [WPFDeleteDialogOpen, setWPFDeleteDialogOpen] = useState(false)
    const [createCPClusterDialogOpen, setCreateCPClusterDialogOpen] = useState(false)
    const [createCompetenceDialogOpen, setCreateCompetenceDialogOpen] = useState(false)
    const [removeCompetenceDialogOpen, setRemoveCompetenceDialogOpen] = useState(false)


    useRouter();


    return (<>
                <ButtonGroup variant={"contained"} disableElevation={true}>
                    <Button color={"primary"} onClick={() => setCreateModuleDiagOpen(true)}>Modul hinzufügen</Button>
                    <Button color={"primary"} onClick={() => setSelectUpdateModuleDiagOpen(true)}>Modul
                        bearbeiten</Button>
                    <Button color={"error"} onClick={() => setDeleteSelectModuleDiagOpen(true)}>Modul löschen</Button>
                    <Button color={"primary"} onClick={() => setCreateWPFDialogOpen(true)}>WPF erstellen</Button>
                    <Button color={"primary"} onClick={() => setSelectWPFDialogOpen(true)}>WPF bearbeiten</Button>
                    <Button color={"error"} onClick={() => setWPFDeleteDialogOpen(true)}>WPF löschen</Button>
                    <Button color={"primary"} onClick={() => setCreateCPClusterDialogOpen(true)}>CP Cluster
                        erstellen</Button>
                    <Button color={"primary"} onClick={() => setCreateCompetenceDialogOpen(true)}>Kompetenz
                        erstellen</Button>
                    <Button color={"error"} onClick={() => {
                        setRemoveCompetenceDialogOpen(true)
                    }}>Kompetenz Löschen</Button>
                </ButtonGroup>
                <CreateModuleDialog open={createModuleDiagOpen} setOpen={setCreateModuleDiagOpen} sc_name={sc_name}/>
                <SelectModuleDialog
                        open={selectUpdateModuleDiagOpen}
                        setOpen={setSelectUpdateModuleDiagOpen}
                        sc_name={sc_name}
                        onSelection={(d) => {
                            setModule_name(d)
                            setEditModuleDiagOpen(true)
                            setSelectUpdateModuleDiagOpen(false)
                        }}/>
                {module_name ? <EditModuleDialog
                        sc_name={sc_name}
                        onSaved={() => {
                            setEditModuleDiagOpen(false)
                            setModule_name(null)
                        }}
                        module_name={module_name}
                        open={editModuleDiagOpen}
                        setOpen={setEditModuleDiagOpen}
                /> : null}
                <SelectModuleDialog open={deleteSelectModuleDiagOpen} setOpen={setDeleteSelectModuleDiagOpen}
                                    sc_name={sc_name} onSelection={async (moduleName) => {
                    await apiClient.deleteModule(undefined, {params: {moduleName: moduleName}})
                    setDeleteSelectModuleDiagOpen(false)
                }}/>
                <SelectWPFDialog actionName={"Auswählen"} title={"WPF Auswählen"} open={selectWPFDialogOpen}
                                 setOpen={setSelectWPFDialogOpen} sc_name={sc_name}
                                 onSelection={(v) => {
                                     setSelectWPFDialogOpen(false)
                                     setWpfName(v)
                                     setEditWPFDialogOpen(true)
                                 }}/>
                <CreateWPFDialog sc_name={sc_name} open={createWPFDialogOpen} setOpen={setCreateWPFDialogOpen}/>
                {
                    wpfName ?
                            <UpdateWPFDialog wpf_name={wpfName} sc_name={sc_name} open={editWPFDialogOpen}
                                             setOpen={setEditWPFDialogOpen} onSaved={() => {
                                setEditWPFDialogOpen(false)
                                setWpfName(null)
                                if (location) {
                                    location.reload()
                                }
                            }}/> : null
                }

                <SelectWPFDialog actionName={"Löschen"} title={"WPF Löschen (permanent)"} open={WPFDeleteDialogOpen}
                                 setOpen={setWPFDeleteDialogOpen} sc_name={sc_name}
                                 onSelection={async (v) => {
                                     await apiClient.deleteModuleArea(undefined, {params: {moduleAreaName: v}})
                                     setWPFDeleteDialogOpen(false)
                                     if (location) {
                                         location.reload()
                                     }
                                 }}/>
                <CreateCPClusterDialog open={createCPClusterDialogOpen} setOpen={setCreateCPClusterDialogOpen}
                                       onSave={() => {
                                           setCreateCPClusterDialogOpen(false)
                                           if (location) {
                                               location.reload()
                                           }
                                       }}/>
                <CreateCompetenceFormDialog open={createCompetenceDialogOpen} setOpen={setCreateCompetenceDialogOpen}
                                            onSuccess={() => {
                                                setCreateCompetenceDialogOpen(false)
                                                if (location) {
                                                    location.reload()
                                                }
                                            }}/>
                <SelectCompetenceDialog open={removeCompetenceDialogOpen} setOpen={setRemoveCompetenceDialogOpen}
                                        sc_name={sc_name} title={"Kompetenz Löschen (Permanent)"} actionName={"Löschen"}
                                        onSelection={async (v) => {
                                            await apiClient.deleteCompetence(undefined, {params: {name: v}})

                                            if (location) {
                                                location.reload()
                                            }

                                        }}/>
            </>
    )
}