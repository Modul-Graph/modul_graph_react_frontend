'use client'
import * as React from 'react';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectModuleArea from "@/components/dashboardDialog/SelectModuleArea";
import SelectRequiredCompetence from "@/components/dashboardDialog/SelectRequiredCompetence";
import SelectProvidedCompetence from "@/components/dashboardDialog/SelectProvidedCompetence";

export default function TeacherDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
        Modul bearbeiten
    </Button>
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
        component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            handleClose();
        },
    }}
>
    <DialogTitle>Modul bearbeiten</DialogTitle>
    <DialogContent>
    <DialogContentText>
    Bitte geben sie einen Modulnamen ein.
    </DialogContentText>
    <TextField
    autoFocus
    required
    margin="dense"
    id="moduleName"
    name="Modulname"
    label="Modulname"
    type="string"
    fullWidth
    variant="standard"
    />
    <SelectModuleArea/>
        <DialogContentText>
            benötigte Kompetenzen
        </DialogContentText>
        <SelectRequiredCompetence/>
        <DialogContentText>
            bereitgestellte Kompetenzen
        </DialogContentText>
        <SelectProvidedCompetence/>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose}>Abbrechen</Button>
        <Button type="submit">zur Ansicht hinzufügen</Button>
        </DialogActions>
        </Dialog>
        </React.Fragment>
);
}
