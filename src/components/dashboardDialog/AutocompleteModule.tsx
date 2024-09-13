
import TextField from "@mui/material/TextField";
import * as React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import GenericDialogEdit from "@/components/dashboardDialog/GenericDialogEdit";

export const AutocompleteModule= ({open, setOpen, handleClickOpen, handleClose, openButton, moduleSelection, value,
                                      setValue, inputValue, setInputValue, submitButton}: AutoCompleteModuleProps) =>
{

    return(<GenericDialogEdit setOpen={setOpen} open={open} openButton={openButton} handleClickOpen={handleClickOpen}
                              handleClose={handleClose}  title={"Modul bearbeiten"} buttons={submitButton}>
        <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="manageable-states-demo"
                options={moduleSelection}
                sx={{ m: 1, width: 300, mt: 3 }}
                renderInput={(params) => <TextField {...params} label="Modulname" />}
        />
    </GenericDialogEdit>)
}

type AutoCompleteModuleProps = {open:boolean, setOpen:(state: boolean)=>void, handleClickOpen: () => void, handleClose: () => void, openButton: React.ReactNode ,moduleSelection: string[], value: string | null, setValue: (state: string | null)=>void,
    inputValue: string, setInputValue: (state: string)=>void, submitButton: React.ReactNode}