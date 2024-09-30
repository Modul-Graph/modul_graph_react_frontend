import {Dispatch, SetStateAction, useState} from "react";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {apiHooks} from "@/lib/connectivity/client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Button, ListItem, ListItemText} from "@mui/material";

export default function SelectCompetenceDialog({open, setOpen, onSelection, title, actionName}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    sc_name: string,
    onSelection: (v: string) => void,
    title: string,
    actionName: string
}) {

    const [selectedCompetence, setSelectedCompetence] = useState<string | null>(null)

    const {data} = apiHooks.useGetAllCompetences()

    return <GenericDialog
            title={title}
            buttons={
                <Button
                        onClick={() => {
                            if (selectedCompetence) onSelection(selectedCompetence)
                            setSelectedCompetence(null)
                        }}
                        disabled={!selectedCompetence}
                >{actionName}</Button>}
            open={open}
            setOpen={setOpen}>
        <Autocomplete renderInput={(params) => <TextField {...params} label="Kompetenz"/>}

                      getOptionLabel={(option) => option}
                      value={selectedCompetence}
                      onChange={(_, value) => {
                          setSelectedCompetence(value)
                      }}
                      renderOption={({key, ...props}, option: string) => {
                          return <ListItem key={key} {...props}>
                              <ListItemText primary={option}/>
                          </ListItem>
                      }} options={data ?? []}/>
    </GenericDialog>
}