import Button from "@mui/material/Button";
import * as React from "react";
/**
 * button to recieve data from a module to edit
 * **/
export default function ButtonDialogReceiveData({handleCloseAutoComplete, handleClickOpenEditDialog, moduleName, moduleSelection,
                                                    providedCompetenceName, setProvidedCompetenceName, requiredCompetenceName, setRequiredCompetenceName,
                                                    summer, setSummer, winter, setWinter,  moduleAreaName, setModuleAreaName, compulsoryModule, setCompulsoryModule,
                                                    studyPO, setStudyPO,  creditPointsVal, setCreditPoints}: ButtonDialogReceiveProps){


    const isFormComplete = moduleSelection.some(x => x === moduleName) ;
    const createModuleObject = {"name": moduleName}

    return(<Button  disabled={!isFormComplete} type={"submit"} variant={"outlined"} onClick={(event) => {
        //object and send data function
        console.log(createModuleObject);
        //receive and set variables of the EditDialog
        //open and Close the Dialogs
        handleCloseAutoComplete();
        handleClickOpenEditDialog();

    }}
    >Modul bearbeiten</Button>)
}

type ButtonDialogReceiveProps = {handleCloseAutoComplete: () => void, handleClickOpenEditDialog:  () => void ,moduleName: string, moduleSelection: string[],providedCompetenceName: string[], setProvidedCompetenceName: (comp: string[])=>void, requiredCompetenceName: string[], setRequiredCompetenceName: (comp: string[])=>void,
    summer: boolean, setSummer: (state: boolean)=>void, winter: boolean, setWinter:(state: boolean)=>void,  moduleAreaName: string[], setModuleAreaName: (state: string[])=>void, compulsoryModule: boolean, setCompulsoryModule: (state: boolean)=>void,
    studyPO: string, setStudyPO:(state: string)=>void,  creditPointsVal: string[], setCreditPoints: (cps: string[])=>void
}
