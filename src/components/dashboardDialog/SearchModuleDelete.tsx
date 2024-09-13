
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export const SearchModuleDelete = ({moduleSelection, value, setValue, inputValue, setInputValue}: SearchModuleProps) => {

        return (
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
        );
}

type SearchModuleProps = {moduleSelection: string[], value: string | null, setValue: (state: string | null)=>void,
    inputValue: string, setInputValue: (state: string)=>void}
