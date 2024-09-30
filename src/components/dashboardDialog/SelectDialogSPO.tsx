import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export const SelectDialogSPO = ({studyPO, setStudyPO, selectionStudyPOs}: SelectSPOProps) => {

    const handleChange = (event: SelectChangeEvent<typeof studyPO>) => {
        setStudyPO(event.target.value as string);
    };


    return (
            <>

                <FormControl sx={{m: 1, minWidth: 220}}>
                    <InputLabel>Studienprüfungsordnung</InputLabel>
                    <Select
                            variant={"filled"}
                            value={studyPO}
                            onChange={handleChange}
                            input={<OutlinedInput label="Studienprüfungsordnung"/>}
                    >
                        {selectionStudyPOs.map((studyPO) => (
                                <MenuItem key={studyPO} value={studyPO}>
                                    {studyPO}
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </>
    );
}

type SelectSPOProps ={studyPO: string, setStudyPO:(state: string)=>void, selectionStudyPOs: string[]}

