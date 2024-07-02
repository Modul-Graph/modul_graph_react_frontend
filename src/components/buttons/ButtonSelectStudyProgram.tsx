'use client'

import {ButtonGroup} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {SelectDialog} from "@/components/select/SelectDialog";

export const ButtonSelectStudyProgram = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);

    };

    return (
            <ButtonGroup
                    variant="contained"
                    disableElevation={true}

            >
                <Button onClick={handleClick}>Studiengang</Button>
                <Button
                        size="small"
                        onClick={handleClick}
                >
                    <ArrowDropDownIcon/>
                </Button>
                <SelectDialog open={open} setOpen={setOpen} />
            </ButtonGroup>
    );
}

