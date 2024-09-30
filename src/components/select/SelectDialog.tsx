import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {SelectStudyProgram} from "@/components/select/SelectStudyProgram";
import {SelectSPO} from "@/components/select/SelectSPO";

export const SelectDialog = ({open, setOpen}: SelectDialogProps) => {

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    return (
            <div>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Studiengang und Studienprüfungsordnung</DialogTitle>
                    <DialogContent>
                        <Box component="form" sx={{display: 'flex', flexWrap: 'wrap'}}>
                            <SelectStudyProgram/>
                            <SelectSPO/>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}

type SelectDialogProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

