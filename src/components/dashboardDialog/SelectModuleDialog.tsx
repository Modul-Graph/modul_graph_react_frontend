import {Dispatch, SetStateAction, useState} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {apiHooks} from "@/lib/connectivity/client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Button, ListItem, ListItemText} from "@mui/material";

export default function SelectModuleDialog({open, setOpen, sc_name, onSelection}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    sc_name: string,
    onSelection: (v: string) => void
}) {

    const [selectedModule, setSelectedModule] = useState<string | null>(null)

    const {data} = apiHooks.useGetAllModules({queries: {sc_name: sc_name}})

    return <GenericDialog
            title={"Modul auswählen"}
            buttons={
                <Button
                        onClick={() => {
                            if (selectedModule) onSelection(selectedModule)
                            setSelectedModule(null)
                        }}
                        disabled={!selectedModule}
                >Auswählen</Button>}
            open={open}
            setOpen={setOpen}>
        <Autocomplete renderInput={(params) => <TextField {...params} label="(WPF) Modul"/>}

                      getOptionLabel={(option) => option}
                      value={selectedModule}
                      onChange={(_, value) => {
                          setSelectedModule(value)
                      }}
                      renderOption={({key, ...props}, option: string) => {
                          return <ListItem key={key} {...props}>
                              <ListItemText primary={option}/>
                          </ListItem>
                      }} options={data ?? []}/>
    </GenericDialog>
}