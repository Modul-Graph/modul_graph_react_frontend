import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {Button} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

export const DialogDelete = () =>
{

    return(<GenericDialog title={"Modul löschen"} buttons={ <Button type="submit">aus Ansicht löschen</Button>}>
            <Autocomplete
                    //disablePortal
                    id="combo-box-demo"
                    options={modules}
                    sx={{p:2, width: 300, maxHeight: 200, overflow: 'auto' }}
                    renderInput={(params) => <TextField {...params} label="Modulname" />}
            />
    </GenericDialog>)
}

const modules = ["Einführung in die Informatik" , "Sichere Systeme", "Mathe 1", "Mathe 2", "Visualisierung",
    "Mathe 3"];