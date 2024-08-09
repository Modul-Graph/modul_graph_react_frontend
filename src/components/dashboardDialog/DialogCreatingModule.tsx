import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import SelectRequiredCompetence from "@/components/dashboardDialog/SelectRequiredCompetence";
import SelectProvidedCompetence from "@/components/dashboardDialog/SelectProvidedCompetence";
import * as React from "react";
import {Button, Stack} from "@mui/material";
import {CreateModule} from "@/components/dashboardDialog/CreateModule";
import SelectCreditPoints from "@/components/dashboardDialog/SelectCreditPoints";
import SelectModuleArea from "@/components/dashboardDialog/SelectModuleArea";
import {SelectSPO} from "@/components/select/SelectSPO";

export const DialogCreatingModule = () =>
{
    return(<GenericDialog title={"Modul hinzufügen"} buttons={ <Button type="submit">zur Ansicht hinzufügen</Button>}>
        <Stack direction={"column"} justifyContent={"end"}>
           <CreateModule/>
           <SelectCreditPoints/>
           <SelectModuleArea/>
           <SelectSPO/>
           <SelectRequiredCompetence/>
           <SelectProvidedCompetence/>
        </Stack>
    </GenericDialog>)
}
