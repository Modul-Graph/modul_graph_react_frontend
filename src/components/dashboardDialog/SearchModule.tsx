'use client'

import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export const SearchModule = () => {

    const modules = ["Einführung in die Informatik" , "Sichere Systeme", "Mathe 1", "Mathe 2", "Visualisierung",
        "Mathe 3"];


        const [value, setValue] = useState<string | null>("");
        const [inputValue, setInputValue] = useState("");

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
                            options={modules}
                            sx={{ m: 1, width: 300, mt: 3 }}
                            renderInput={(params) => <TextField {...params} label="Modulname" />}
                    />
        );
}
//type SelectCompetenciesProp = title, array comps
