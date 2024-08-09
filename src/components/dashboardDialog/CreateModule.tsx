'use client'

import React, {useState} from "react";
import TextField from "@mui/material/TextField";


export const CreateModule = () => {

    const [module, setModule] = useState("");

    return (

            <TextField
                    sx={{ m: 1, width: 300, mt: 3 }}
                    value = {module}
                    label = "Modulname"
                    variant = "outlined"
                    onChange = {(e) => {
                        setModule(e.target.value);
                    }}
            />

    );
}