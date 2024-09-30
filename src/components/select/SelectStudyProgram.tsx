import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export const SelectStudyProgram = () => {
    const studyPrograms = ["Informatik Bachelor", "Bilingual Informatik Bachelor", "Computervisualistik Bachelor"];

    const [studyProgram, setStudyProgram] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<typeof studyProgram>) => {
        setStudyProgram(event.target.value as string);
    };


    return (
            <>

                <FormControl sx={{m: 1, minWidth: 150}}>
                    <InputLabel>Studiengang</InputLabel>
                    <Select
                            value={studyProgram}
                            onChange={handleChange}
                            input={<OutlinedInput label="Studiengang"/>}
                    >
                        {studyPrograms.map((studyProgram) => (
                                <MenuItem key={studyProgram} value={studyProgram}>
                                    {studyProgram}
                                </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </>
    );
}



