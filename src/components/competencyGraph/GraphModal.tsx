"use client"
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import {CompetencyGraphSkeleton} from "@/components/placeholder/CompetencyGraphSkeleton";
import Button from "@mui/material/Button";
import {CompetencyGraph} from "@/components/competencyGraph/CompetencyGraph";

/**
* modal popup with competency graph
 * */

export const GraphModal = ({open, setOpen}:GraphModalProps) => {
    const isLoading = true;
    //const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        minWidth: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
            <>
                {/*todo: delete button a*/}
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                        open={open}
                        onClose={handleClose}

                >
                    <Box sx={style}>
                        {isLoading ?
                                <CompetencyGraphSkeleton/>
                                : <CompetencyGraph/>
                        }
                    </Box>
                </Modal>
            </>
    )
}

type GraphModalProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>}