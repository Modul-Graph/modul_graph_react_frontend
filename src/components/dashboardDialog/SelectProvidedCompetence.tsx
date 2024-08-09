'use client'

import {InputLabel, MenuItem, OutlinedInput} from "@mui/material";
import React from "react";
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import theme from "@/theme";


export default function SelectCompetencies () {

    const competences = ['Algorithmen und Datenstrukturen',
        'Analysis',
        'Numerik',
        'Betriebssysteme',
        'Datenbanken und Informationssysteme',
        'Digitaltechnik und Rechnerorganisation',
        'Diskrete Strukturen',
        'Logik',
        'Algebra',
        'lineare Algebra',
        'Formale Sprachen und Automaten',
        'Informatik als Disziplin',
        'Informatik und Gesellschaft',
        'IT-Sicherheit',
        'Mensch-Computer-Interaktion',
        'Modellierung',
        'Programmiersprachen und -methodik',
        'Projekt- und Teamkompetenz',
        'Rechnernetze und verteilte Systeme',
        'Software-Engineering',
        'Wahrscheinlichkeitstheorie',
        'Statistik',
        'Topologie',
        'Differentialgeometrie',
        'Robotik',
        'Künstliche Intelligenz',
        'Analytische Geometrie'];


    const [competenceName, setCompetenceName] = React.useState<string[]>([]);

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
                    <InputLabel color={"secondary"} >bereitgestellte Kompetenzen</InputLabel>
                    <Select
                            multiple
                            value={competenceName}
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
