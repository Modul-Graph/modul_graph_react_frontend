import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup} from "@mui/material";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name: string, moduleName: readonly string[], theme: Theme) {
    return {
        fontWeight:
                moduleName.indexOf(name) === -1
                        ? theme.typography.fontWeightRegular
                        : theme.typography.fontWeightMedium,
    };
}

export default function SelectModuleArea({selectionModulArea, moduleAreaName, setModuleAreaName, compulsoryModule, setCompulsoryModule}: ModuleAreaProps ) {
    const theme = useTheme();

    //State Management for the Select
    const handleChange = (event: SelectChangeEvent<typeof moduleAreaName>) => {
        const {
            target: { value },
        } = event;
        setModuleAreaName(
                // On Autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
        );
    };

    //State Management for the switch
       const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompulsoryModule(event.target.checked);

    };

    return (
            <div>
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <FormGroup>
                        <FormControlLabel control={ <Switch
                                checked={compulsoryModule}
                                onChange={handleChangeSwitch}
                                inputProps={{ 'aria-label': 'controlled' }}/>} label="Pflichtmodul" />
                    </FormGroup>
                    <Select
                            multiple
                            displayEmpty
                            value={moduleAreaName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Modulbereich</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' , disabled: compulsoryModule }}
                    >
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                        {selectionModulArea.map((name) => (
                                <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, moduleAreaName, theme)}
                                >
                                    {name}
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
    );
}

type ModuleAreaProps = {selectionModulArea: string[], moduleAreaName: string[], setModuleAreaName: (state: string[])=>void, compulsoryModule: boolean, setCompulsoryModule: (state: boolean)=>void};