import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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

const names = [
    'Informatik 1 - Pflicht',
    'Informatik 2 - Pflicht',
    'Informatik Wahlpflicht',
    'Technische Informatik',
    'Mathematik/ Theoretische Informatik'
];

function getStyles(name: string, moduleName: readonly string[], theme: Theme) {
    return {
        fontWeight:
                moduleName.indexOf(name) === -1
                        ? theme.typography.fontWeightRegular
                        : theme.typography.fontWeightMedium,
    };
}

export default function SelectModuleArea() {
    const theme = useTheme();
    const [moduleName, setModuleName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof moduleName>) => {
        const {
            target: { value },
        } = event;
        setModuleName(
                // On Autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
            <div>
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Select
                            multiple
                            displayEmpty
                            value={moduleName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Modulbereich</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                                <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, moduleName, theme)}
                                >
                                    {name}
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
    );
}