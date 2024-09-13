

import React from "react";
import Checkbox from "@mui/material/Checkbox";
import {FormControlLabel, FormGroup} from "@mui/material";


export const SelectSemestertyp = ({summer, setSummer, winter, setWinter}: SelectSemestertypProps) => {

    const handleChangeWinter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWinter(event.target.checked);
    };

    const handleChangeSummer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSummer(event.target.checked);
    };
    return (
            <FormGroup sx={{ m: 1}}>
                <FormControlLabel
                        label="Wintersemester"
                        control={ <Checkbox
                                checked={winter}
                                onChange={handleChangeWinter}
                                color="primary"
                        />}
                />
                <FormControlLabel
                        label="Sommersemester"
                        control={ <Checkbox
                                checked={summer}
                                onChange={handleChangeSummer}
                                color="primary"
                        />}
                />
            </FormGroup>
    );
}

type SelectSemestertypProps = {summer: boolean, setSummer: (state: boolean)=>void, winter: boolean, setWinter:(state: boolean)=>void}