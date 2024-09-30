import {Dispatch, SetStateAction, useState} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {apiHooks} from "@/lib/connectivity/client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Button, ListItem, ListItemText} from "@mui/material";

export default function SelectWPFDialog({open, setOpen, onSelection, sc_name, title, actionName}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    sc_name: string,
    onSelection: (v: string) => void,
    title: string,
    actionName: string
}) {

    const [selectedWPF, setSelectedWPF] = useState<string | null>(null)

    const {data} = apiHooks.useGetAllWPFModuleAreas()

    return <GenericDialog
            title={title}
            buttons={
                <Button
                        onClick={() => {
                            if (selectedWPF) onSelection(selectedWPF)
                            setSelectedWPF(null)
                        }}
                        disabled={!selectedWPF}
                >{actionName}</Button>}
            open={open}
            setOpen={setOpen}>
        <Autocomplete renderInput={(params) => <TextField {...params} label="WPF"/>}

                      getOptionLabel={(option) => option}
                      value={selectedWPF}
                      onChange={(_, value) => {
                          setSelectedWPF(value)
                      }}
                      renderOption={({key, ...props}, option: string) => {
                          return <ListItem key={key} {...props}>
                              <ListItemText primary={option}/>
                          </ListItem>
                      }} options={data ?? []}/>
    </GenericDialog>
}