import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import SelectRequiredCompetence from "@/components/dashboardDialog/SelectRequiredCompetence";
import SelectProvidedCompetence from "@/components/dashboardDialog/SelectProvidedCompetence";
import * as React from "react";
import { Button, Stack } from "@mui/material";
import SelectCreditPoints from "@/components/dashboardDialog/SelectCreditPoints";
import SelectModuleArea from "@/components/dashboardDialog/SelectModuleArea";
import { SelectSPO } from "@/components/select/SelectSPO";
import { OpenControlProps } from "@/components/dashboardDialog/DialogTypes";

export const DialogEditModule = ({ open, setOpen }: {} & OpenControlProps) => {
    return (
        <GenericDialog
            open={open}
            setOpen={setOpen}
            title={"Modul bearbeiten"}
            buttons={<Button type="submit">in Ansicht bearbeiten</Button>}
        >
            <Stack direction={"column"} justifyContent={"end"}>
                {/* Doesn't exist: <SearchModule />*/}
                <SelectCreditPoints />
                <SelectModuleArea />
                <SelectSPO />
                <SelectRequiredCompetence />
                <SelectProvidedCompetence />
            </Stack>
        </GenericDialog>
    );
};
