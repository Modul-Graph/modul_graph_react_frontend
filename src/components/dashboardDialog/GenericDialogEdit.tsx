
import * as React from 'react';
import {Box, IconButton} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

export default function GenericDialogEdit({open, setOpen, handleClickOpen, handleClose, openButton ,title, children, buttons}:GenericDialogProps) {
    return (
            <React.Fragment>
                {openButton}
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
                            <>
                                <DialogContent style={{ height: 'inherit', position: 'relative' }}>
                                    {children}
                                </DialogContent>
                            </>
                    )}
                    <DialogActions>
                        {buttons}
                    </DialogActions>
                </Dialog>
            </React.Fragment>
    );
}

type GenericDialogProps = {open:boolean, setOpen:(state: boolean)=>void, handleClickOpen: () => void, handleClose: () => void, openButton: React.ReactNode ,title:string, children:React.ReactNode, buttons:React.ReactNode}