import * as React from "react";
import {ComponentProps} from "react";
import {Box, IconButton, Paper, SxProps} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {OpenControlProps} from "@/components/dashboardDialog/DialogTypes";

export default function GenericDialog({title, children, buttons, open, setOpen, sx}: GenericDialogProps) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
            <React.Fragment>
                <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperProps={
                            {
                                component: "div",
                                sx: {
                                    maxWidth: "80vw",
                                    ...sx,
                                },
                            } as ComponentProps<typeof Paper>
                        }
                >
                    <DialogTitle>
                        <Box display="flex" alignItems="center">
                            <Box flexGrow={1}>{title}</Box>
                            <Box>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </DialogTitle>
                    {open ?
                            <>
                                <DialogContent
                                        style={{height: "inherit", position: "relative"}}>{children}</DialogContent>
                            </> : null
                    }
                    {buttons ? <DialogActions>{buttons}</DialogActions> : null}
                </Dialog>
            </React.Fragment>
    );
}

type GenericDialogProps = {
    title: string;
    children: React.ReactNode;
    buttons?: React.ReactNode;
    sx?: SxProps;
} & OpenControlProps;
