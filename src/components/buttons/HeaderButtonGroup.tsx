import {Button, ButtonGroup} from "@mui/material";

export const HeaderButtonGroup = () => {
    return (
            <ButtonGroup variant={"contained"} disableElevation={true} >
                <Button color={"primary"}>Modul hinzufügen</Button>
                <Button color={"primary"}>Modul bearbeiten</Button>
                <Button color={"error"} >Modul löschen</Button>
            </ButtonGroup>
    )
}