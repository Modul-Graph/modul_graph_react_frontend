import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import * as React from "react";
import {SearchModuleDelete} from "@/components/dashboardDialog/SearchModuleDelete";
import ButtonDeleteDialog from "@/components/buttons/ButtonDeleteDialog";

export const DialogDelete = () =>
{
    const modules = ["Einführung in die Informatik" , "Sichere Systeme", "Mathe 1", "Mathe 2", "Visualisierung",
        "Mathe 3"];
    const [value, setValue] = React.useState<string | null>("");
    const [inputValue, setInputValue] = React.useState("");

    return(<GenericDialog title={"Modul löschen"} buttons={ <ButtonDeleteDialog moduleName={inputValue} moduleSelection={modules}/>}>
           <SearchModuleDelete moduleSelection={modules} value={value} setValue={setValue} inputValue={inputValue} setInputValue={setInputValue}/>
    </GenericDialog>)
}

