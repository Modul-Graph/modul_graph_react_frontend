"use client"
import Modal from '@mui/material/Modal';
import * as React from 'react';
import {CompetencyGraphSkeleton} from "@/components/placeholder/CompetencyGraphSkeleton";
import Button from "@mui/material/Button";
import {CompetencyGraph} from "@/components/competencyGraph/CompetencyGraph";
import {data} from "@/components/competencyGraph/MockData2";
import {Paper} from "@mui/material";

/**
* modal popup with competency graph
 * */

export const GraphModal = () => {
    const isLoading = true;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        width: "auto",
        minWidth: '50vw',
        minHeight: '50vh',
        padding: '2rem',
    };

    return (
            <>
                {/*todo: delete button a*/}
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                        open={open}
                        onClose={handleClose}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                >
                    <Paper elevation={3} sx={style}>
                        {isLoading ?
                                <CompetencyGraphSkeleton/>
                                : <CompetencyGraph wpfEntry={data}/>
                        }
                    </Paper>
                </Modal>
            </>
    )
}

type GraphModalProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>}