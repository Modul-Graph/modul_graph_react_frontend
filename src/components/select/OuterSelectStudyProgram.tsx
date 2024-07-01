'use client'

import {InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import React from "react";
import theme from "@/theme";
import {SelectDialog} from "@/components/select/SelectDialog";
import {SERVER_RUNTIME} from "next/dist/lib/constants";

export const OuterSelectStudyProgram = () => {
    const [open, setOpen] = React.useState(false);

    const studyProgram = "Studiengang";
    const handleChange = (event: SelectChangeEvent<typeof studyProgram>) => {
        setOpen(true);

    };

    return (
            <>
                <FormControl sx={{m: 1, width: 150}}>
                    <InputLabel color={"secondary"} >Studiengang</InputLabel>
                    <Select
                            variant ="outlined"
                            value={studyProgram}
                            onChange={handleChange}
                            input={<OutlinedInput label="Studiengang"
                            sx={{
                                background: theme.palette.background.paper,
                                color: theme.palette.primary.dark
                            }} inputProps={{

                            }}/>}

                    >
                        <MenuItem>Studiengang und SPO</MenuItem>
                        <SelectDialog open={open} setOpen={setOpen}/>
                    </Select>
                </FormControl>
            </>
    );
}

