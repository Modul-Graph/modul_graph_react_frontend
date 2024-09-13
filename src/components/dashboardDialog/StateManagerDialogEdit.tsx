'use client'

import React from "react";
import {AutocompleteModule} from "@/components/dashboardDialog/AutocompleteModule";
import {DialogEditCopy} from "@/components/dashboardDialog/DialogEditCopy";
import {Button} from "@mui/material";
import ButtonDialogReceiveData from "@/components/buttons/ButtonDialogReceiveData";
import ButtonDialogEditSubmit from "@/components/buttons/ButtonDialogEditSubmit";


export const StateManagerDialogEdit = () => {

    //Edit Dialog state management
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    //AutoComplete modulename state management
    const [openAutoComplete, setOpenAutoComplete] = React.useState(false);
    const handleClickOpenAutoComplete = () => {
        setOpenAutoComplete(true);
    };

    const handleCloseAutoComplete = () => {
        setOpenAutoComplete(false);
    };

    const moduleSelection = ["Einführung in die Informatik" , "Sichere Systeme", "Mathe 1", "Mathe 2", "Visualisierung",
        "Mathe 3"];

    const competences = ['Algorithmen und Datenstrukturen',
        'Analysis',
        'Numerik',
        'Betriebssysteme',
        'Datenbanken und Informationssysteme',
        'Digitaltechnik und Rechnerorganisation',
        'Diskrete Strukturen',
        'Logik',
        'Algebra',
        'lineare Algebra',
        'Formale Sprachen und Automaten',
        'Informatik als Disziplin',
        'Informatik und Gesellschaft',
        'IT-Sicherheit',
        'Mensch-Computer-Interaktion',
        'Modellierung',
        'Programmiersprachen und -methodik',
        'Projekt- und Teamkompetenz',
        'Rechnernetze und verteilte Systeme',
        'Software-Engineering',
        'Wahrscheinlichkeitstheorie',
        'Statistik',
        'Topologie',
        'Differentialgeometrie',
        'Robotik',
        'Künstliche Intelligenz',
        'Analytische Geometrie'];
    const selectionStudyPOs = ["aktuelle SPO", "SPO 2017", "SPO 2023"];

    //variables of the module
    const [creditPoints, setCreditPoints] = React.useState<string[]>(["1", "2"])
    const [providedCompetenceName, setProvidedCompetenceName] = React.useState<string[]>(["Numerik"]);
    const [requiredCompetenceName, setRequiredCompetenceName] = React.useState<string[]>([]);
    const [winter, setWinter] = React.useState(true);
    const [summer, setSummer] = React.useState(false);
    const [studyPO, setStudyPO] = React.useState<string>("SPO 2023");
    const [moduleAreaName, setModuleAreaName] = React.useState<string[]>([]);
    const [compulsoryModule, setCompulsoryModule] = React.useState(false);

    //AutoComplete
    const [moduleValue, setModuleValue] = React.useState<string | null>("");
    const [moduleName, setModuleName] = React.useState("");

    const selectionModulArea = [
        'Informatik 1 - Pflicht',
        'Informatik 2 - Pflicht',
        'Informatik Wahlpflicht',
        'Technische Informatik',
        'Mathematik/ Theoretische Informatik'
    ];

    return (
                <div>
                    <AutocompleteModule value={moduleValue} setValue={setModuleValue} inputValue={moduleName} setInputValue={setModuleName}
                                        moduleSelection={moduleSelection} handleClickOpen={handleClickOpenAutoComplete} open={openAutoComplete} setOpen={setOpenAutoComplete} handleClose={handleCloseAutoComplete}
                                        openButton={<Button variant="contained"  onClick={handleClickOpenAutoComplete}>Modul bearbeiten</Button>}
                                        submitButton={<ButtonDialogReceiveData handleClickOpenEditDialog={handleClickOpenEditDialog} handleCloseAutoComplete={handleCloseAutoComplete}
                                                                               moduleName={moduleName} moduleSelection={moduleSelection}
                                                                               setModuleAreaName={setModuleAreaName} compulsoryModule={compulsoryModule} setCompulsoryModule={setCompulsoryModule} moduleAreaName={moduleAreaName}
                                                                               providedCompetenceName={providedCompetenceName} setProvidedCompetenceName={setProvidedCompetenceName}
                                                                               requiredCompetenceName={requiredCompetenceName} setRequiredCompetenceName={setRequiredCompetenceName}
                                                                               summer={summer} setSummer={setSummer} winter={winter} setWinter={setWinter} studyPO={studyPO} setStudyPO={setStudyPO}  creditPointsVal={creditPoints}
                                                                               setCreditPoints={setCreditPoints}/> }
                     />

                    <DialogEditCopy buttonSubmit={<ButtonDialogEditSubmit moduleName={moduleName} requiredCompetenceName={requiredCompetenceName}
                                                                          providedCompetenceName={providedCompetenceName} moduleAreaName={moduleAreaName}
                                                                          winter={winter} summer={summer} studyPO={studyPO} compulsoryModule={compulsoryModule} creditPoints={creditPoints} />}
                                    handleClickOpen={handleClickOpenEditDialog} open={openEditDialog} setOpen={setOpenEditDialog}
                                    handleClose={handleCloseEditDialog} openButton={null} selectionModulArea={selectionModulArea}
                                    setModuleAreaName={setModuleAreaName} compulsoryModule={compulsoryModule} setCompulsoryModule={setCompulsoryModule} moduleAreaName={moduleAreaName}
                                    competences={competences} providedCompetenceName={providedCompetenceName} setProvidedCompetenceName={setProvidedCompetenceName}
                                    requiredCompetenceName={requiredCompetenceName} setRequiredCompetenceName={setRequiredCompetenceName}
                                    summer={summer} setSummer={setSummer} winter={winter} setWinter={setWinter} studyPO={studyPO} setStudyPO={setStudyPO} selectionStudyPOs={selectionStudyPOs} creditPointsVal={creditPoints}
                                    setCreditPoints={setCreditPoints}/>
                </div>
        );
    }

