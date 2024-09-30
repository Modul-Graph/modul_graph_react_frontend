import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import SelectRequiredCompetence from "@/components/dashboardDialog/SelectRequiredCompetence";
import SelectProvidedCompetence from "@/components/dashboardDialog/SelectProvidedCompetence";
import * as React from "react";
import { Stack } from "@mui/material";
import { CreateModuleName } from "@/components/dashboardDialog/CreateModuleName";
import SelectCreditPoints from "@/components/dashboardDialog/SelectCreditPoints";
import SelectModuleArea from "@/components/dashboardDialog/SelectModuleArea";
import { SelectSemestertyp } from "@/components/dashboardDialog/SelectSemestertyp";
import { SelectDialogSPO } from "@/components/dashboardDialog/SelectDialogSPO";
import ButtonCreateModule from "@/components/buttons/ButtonCreateModule";
import { OpenControlProps } from "@/components/dashboardDialog/DialogTypes";

export const DialogCreatingModule = ({ open, setOpen }: {} & OpenControlProps) => {
    const competences = [
        "Algorithmen und Datenstrukturen",
        "Analysis",
        "Numerik",
        "Betriebssysteme",
        "Datenbanken und Informationssysteme",
        "Digitaltechnik und Rechnerorganisation",
        "Diskrete Strukturen",
        "Logik",
        "Algebra",
        "lineare Algebra",
        "Formale Sprachen und Automaten",
        "Informatik als Disziplin",
        "Informatik und Gesellschaft",
        "IT-Sicherheit",
        "Mensch-Computer-Interaktion",
        "Modellierung",
        "Programmiersprachen und -methodik",
        "Projekt- und Teamkompetenz",
        "Rechnernetze und verteilte Systeme",
        "Software-Engineering",
        "Wahrscheinlichkeitstheorie",
        "Statistik",
        "Topologie",
        "Differentialgeometrie",
        "Robotik",
        "Künstliche Intelligenz",
        "Analytische Geometrie",
    ];

    const selectionStudyPOs = ["aktuelle SPO", "SPO 2017", "SPO 2023"];

    const [moduleName, setModuleName] = React.useState<string>("");
    const [creditPoints, setCreditPoints] = React.useState<string[]>([]);
    const [providedCompetenceName, setProvidedCompetenceName] = React.useState<string[]>([]);
    const [requiredCompetenceName, setRequiredCompetenceName] = React.useState<string[]>([]);
    const [winter, setWinter] = React.useState(true);
    const [summer, setSummer] = React.useState(true);
    const [studyPO, setStudyPO] = React.useState<string>("");
    const [moduleAreaName, setModuleAreaName] = React.useState<string[]>([]);
    const [compulsoryModule, setCompulsoryModule] = React.useState(false);

    const selectionModulArea = [
        "Informatik 1 - Pflicht",
        "Informatik 2 - Pflicht",
        "Informatik Wahlpflicht",
        "Technische Informatik",
        "Mathematik/ Theoretische Informatik",
    ];

    return (
        <GenericDialog
            setOpen={setOpen}
            open={open}
            title={"Modul hinzufügen"}
            buttons={
                <ButtonCreateModule
                    moduleName={moduleName}
                    creditPoints={creditPoints}
                    providedCompetenceName={providedCompetenceName}
                    requiredCompetenceName={requiredCompetenceName}
                    winter={winter}
                    summer={summer}
                    moduleAreaName={moduleAreaName}
                    compulsoryModule={compulsoryModule}
                    studyPO={studyPO}
                />
            }
        >
            <Stack direction={"column"} justifyContent={"end"}>
                <CreateModuleName moduleName={moduleName} setModuleName={setModuleName} />
                <SelectCreditPoints creditPointsVal={creditPoints} setCreditPoints={setCreditPoints} />
                <SelectModuleArea
                    selectionModulArea={selectionModulArea}
                    moduleAreaName={moduleAreaName}
                    setModuleAreaName={setModuleAreaName}
                    compulsoryModule={compulsoryModule}
                    setCompulsoryModule={setCompulsoryModule}
                />
                <SelectDialogSPO studyPO={studyPO} setStudyPO={setStudyPO} selectionStudyPOs={selectionStudyPOs} />
                <SelectSemestertyp summer={summer} setSummer={setSummer} winter={winter} setWinter={setWinter} />
                <SelectRequiredCompetence
                    competences={competences}
                    requiredCompetenceName={requiredCompetenceName}
                    setRequiredCompetenceName={setRequiredCompetenceName}
                />
                <SelectProvidedCompetence
                    competences={competences}
                    providedCompetenceName={providedCompetenceName}
                    setProvidedCompetenceName={setProvidedCompetenceName}
                />
            </Stack>
        </GenericDialog>
    );
};
