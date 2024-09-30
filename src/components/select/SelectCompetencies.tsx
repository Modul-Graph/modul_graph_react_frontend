'use client'

import {InputLabel, MenuItem, OutlinedInput} from "@mui/material";
import React, {useEffect, useState} from "react";
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import theme from "@/theme";
import {apiHooks} from "@/lib/connectivity/client";


export const SelectCompetencies = ({onChange}: {
    onChange: (v: string[]) => void,
    sc_name: string
}) => {

    const {
        data,
        isLoading,
        error
    } = apiHooks.useGetAllCompetences({}, {refetchOnMount: false});


    const [competenceName, setCompetenceName] = useState<string[]>([]);

    useEffect(() => {
        onChange(competenceName);
    }, [competenceName, onChange]);

    if (isLoading || error) return <></>;


    const handleChange = (event: SelectChangeEvent<typeof competenceName>) => {
        const {
            target: {value},
        } = event;
        setCompetenceName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (


            <>
                <FormControl sx={{m: 1, width: 250}} size="small">
                    <InputLabel color={"secondary"}>Kompetenzen auswählen</InputLabel>
                    <Select
                            variant={"outlined"}
                            multiple
                            value={competenceName}
                            onChange={handleChange}
                            renderValue={(selected) => selected.join(', ')}
                            input={<OutlinedInput label="Kompetenz" sx={{
                                background: theme.palette.background.paper,
                                color: theme.palette.primary.dark
                            }}/>}
                    >
                        {(data ?? []).map((competence) => (
                                <MenuItem
                                        key={competence} value={competence}
                                >
                                    <Checkbox checked={competenceName.indexOf(competence) > -1}/>
                                    <ListItemText primary={competence}/>
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>
    )
}

//type SelectCompetenciesProp = title, array comps
