'use client'
import * as React from 'react';
import {Box, Button, IconButton} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

export default function GenericDialog({title, children, buttons}:GenericDialogProps) {
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
                    {title}
                </Button>
                <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                                event.preventDefault();
                                handleClose();
                            },
                        }}
                >
                    <DialogTitle>
                        <Box display="flex" alignItems="center">
                            <Box flexGrow={1} >{title}</Box>
                            <Box>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </DialogTitle>
                    {children && (
                            <Box>
                                <DialogContent style={{ height: 'inherit', position: 'relative' }}>
                                    {children}
                                </DialogContent>
                            </Box>
                    )}
                    <DialogActions>
                        {buttons}
                    </DialogActions>
                </Dialog>
            </React.Fragment>
    );
}

type GenericDialogProps = {title:string, children:React.ReactNode, buttons:React.ReactNode}