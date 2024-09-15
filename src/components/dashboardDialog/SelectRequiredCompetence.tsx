
import {InputLabel, MenuItem, OutlinedInput} from "@mui/material";
import React from "react";
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import theme from "@/theme";


export default function SelectRequiredCompetencies({competences, requiredCompetenceName, setRequiredCompetenceName}: RequiredCompetencesProps)  {

    const handleChange = (event: SelectChangeEvent<typeof requiredCompetenceName>) => {
        const {
            target: {value},
        } = event;
        setRequiredCompetenceName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (


            <>
                <FormControl sx={{m: 1, width: 250}} size="small">
                    <InputLabel color={"secondary"} >benötigte Kompetenzen</InputLabel>
                    <Select
                            multiple
                            value={requiredCompetenceName}
                            onChange={handleChange}
                            renderValue={(selected) => selected.join(', ')}
                            input={<OutlinedInput label="Kompetenz" sx={{
                                background: theme.palette.background.paper,
                                color: theme.palette.primary.dark
                            }} inputProps={{

                            }} />}
                    >
                        {competences.map((competence) => (
                                <MenuItem
                                        key={competence} value={competence}
                                >
                                    <Checkbox checked={requiredCompetenceName.indexOf(competence) > -1}/>
                                    <ListItemText primary={competence}/>
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>
    )
}

type RequiredCompetencesProps = {competences: string[], requiredCompetenceName: string[], setRequiredCompetenceName: (comp: string[])=>void}
