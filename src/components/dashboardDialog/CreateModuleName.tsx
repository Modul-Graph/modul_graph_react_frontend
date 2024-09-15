
import React from "react";
import TextField from "@mui/material/TextField";


export const CreateModuleName = ({moduleName, setModuleName}: ModuleNameProps ) => {

    return (

            <TextField
                    sx={{ m: 1, mt: 3 }}
                    value = {moduleName}
                    label = "Modulname"
                    variant = "outlined"
                    onChange = {(e) => {
                        setModuleName(e.target.value);
                    }}
            />

    );
}

type ModuleNameProps = {moduleName: string, setModuleName: (state: string)=>void}
