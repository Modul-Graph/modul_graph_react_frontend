import Button from "@mui/material/Button";
import * as React from "react";
/**
 * button to delete a module
 * **/
export default function ButtonDeleteDialog({moduleName, moduleSelection}: ButtonCreateModuleProps){
    const isFormComplete = moduleSelection.some(x => x === moduleName) ;
    // Question how to submit compulsoryModule or modulAreaName
    const createModuleObject = {"name": moduleName};

    return(<Button  disabled={!isFormComplete} type={"submit"} variant={"outlined"} onClick={(event) => {
        //object and send data function to delete
        console.log(createModuleObject);
    }}
    >aus Ansicht löschen</Button>)
}

type ButtonCreateModuleProps = {moduleName: string, moduleSelection: string[]}
