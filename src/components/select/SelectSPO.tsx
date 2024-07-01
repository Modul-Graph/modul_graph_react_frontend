import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export const SelectSPO = () => {
    const studyPOs = ["aktuelle SPO", "SPO 2017", "SPO 2023"];

    const [studyPO, setStudyPO] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<typeof studyPO>) => {
        setStudyPO(event.target.value as string);
    };


    return (
            <>

                <FormControl sx={{m: 1, minWidth: 220}}>
                    <InputLabel>Studienprügungsordnung</InputLabel>
                    <Select
                            value={studyPO}
                            onChange={handleChange}
                            input={<OutlinedInput label="Studienprüfungsordnung"/>}
                    >
                        {studyPOs.map((studyPO) => (
                                <MenuItem key={studyPO} value={studyPO}>
                                    {studyPO}
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </>
    );
}



