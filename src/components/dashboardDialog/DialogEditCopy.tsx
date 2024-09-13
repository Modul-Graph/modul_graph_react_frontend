
import SelectRequiredCompetence from "@/components/dashboardDialog/SelectRequiredCompetence";
import SelectProvidedCompetence from "@/components/dashboardDialog/SelectProvidedCompetence";
import * as React from "react";
import {Stack} from "@mui/material";
import SelectCreditPoints from "@/components/dashboardDialog/SelectCreditPoints";
import SelectModuleArea from "@/components/dashboardDialog/SelectModuleArea";
import {SelectSemestertyp} from "@/components/dashboardDialog/SelectSemestertyp";
import {SelectDialogSPO} from "@/components/dashboardDialog/SelectDialogSPO";
import GenericDialogEdit from "@/components/dashboardDialog/GenericDialogEdit";

export const DialogEditCopy = ({open, setOpen, handleClickOpen, handleClose, openButton, buttonSubmit, competences, providedCompetenceName, setProvidedCompetenceName, requiredCompetenceName, setRequiredCompetenceName,
                               summer, setSummer, winter, setWinter, selectionModulArea, moduleAreaName, setModuleAreaName, compulsoryModule, setCompulsoryModule,
                               studyPO, setStudyPO, selectionStudyPOs, creditPointsVal, setCreditPoints}: DialogEditProps) =>
{

    return(<GenericDialogEdit open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} openButton={openButton}
                              handleClose={handleClose} title={"Modul bearbeiten"} buttons={buttonSubmit}>
        <Stack direction={"column"} justifyContent={"end"}>
        <SelectCreditPoints creditPointsVal={creditPointsVal} setCreditPoints={setCreditPoints}/>
        <SelectModuleArea selectionModulArea={selectionModulArea} moduleAreaName={moduleAreaName} setModuleAreaName={setModuleAreaName} compulsoryModule={compulsoryModule} setCompulsoryModule={setCompulsoryModule}/>
        <SelectDialogSPO studyPO={studyPO} setStudyPO={setStudyPO} selectionStudyPOs={selectionStudyPOs}/>
        <SelectSemestertyp summer={summer} setSummer={setSummer} winter={winter} setWinter={setWinter}/>
        <SelectRequiredCompetence competences={competences} requiredCompetenceName={requiredCompetenceName} setRequiredCompetenceName={setRequiredCompetenceName}/>
        <SelectProvidedCompetence competences={competences} providedCompetenceName={providedCompetenceName} setProvidedCompetenceName={setProvidedCompetenceName}/>
        </Stack>
    </GenericDialogEdit>)
}

type DialogEditProps = {open:boolean, setOpen:(state: boolean)=>void, handleClickOpen: () => void, handleClose: () => void, openButton: React.ReactNode , buttonSubmit:  React.ReactNode,
    competences: string[], providedCompetenceName: string[], setProvidedCompetenceName: (comp: string[])=>void, requiredCompetenceName: string[], setRequiredCompetenceName: (comp: string[])=>void,
    summer: boolean, setSummer: (state: boolean)=>void, winter: boolean, setWinter:(state: boolean)=>void, selectionModulArea: string[], moduleAreaName: string[], setModuleAreaName: (state: string[])=>void, compulsoryModule: boolean, setCompulsoryModule: (state: boolean)=>void,
    studyPO: string, setStudyPO:(state: string)=>void, selectionStudyPOs: string[], creditPointsVal: string[], setCreditPoints: (cps: string[])=>void}
