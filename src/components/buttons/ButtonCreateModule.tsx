import Button from "@mui/material/Button";
import * as React from "react";
/**
 * button to submit a new module
 * **/
export default function ButtonCreateModule({moduleName, creditPoints, providedCompetenceName,
                                       requiredCompetenceName, winter, summer, studyPO, moduleAreaName,
                                       compulsoryModule}: ButtonCreateModuleProps){
    const isFormComplete = moduleName && creditPoints && studyPO && (moduleAreaName || compulsoryModule) && (winter || summer);

   // Question how to submit compulsoryModule or modulAreaName
    const createModuleObject = {"name": moduleName, "summer":summer, "winter":winter, "std_curr_names": studyPO, "module_areas": moduleAreaName,
    "compulsory_module": compulsoryModule, "credit_points": creditPoints, "providedCompetenceName": providedCompetenceName, "requiredCompetenceName" : requiredCompetenceName};


    return(<Button  disabled={!isFormComplete} type={"submit"} variant={"outlined"} onClick={(event) => {
        //object and send data function
        console.log(createModuleObject);
    }}
    >zur Ansicht hinzufügen</Button>)
}

type ButtonCreateModuleProps = {moduleName: string, creditPoints: string[], providedCompetenceName: string[],
    requiredCompetenceName: string[], winter: boolean, summer: boolean, studyPO: string, moduleAreaName: string[],
    compulsoryModule: boolean
}
