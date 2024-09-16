import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {CellResponse} from "@/lib/zod/cellResponseSchema";
import {Box, Button, ListItem, ListItemText, Stack} from "@mui/material";
import {useState} from "react";
import {AddOutlined} from "@mui/icons-material";
import {apiHooks} from "@/lib/connectivity/client";

export default function AddCellCandidate({cells, onAdd}: {
    cells: CellResponse[],
    onAdd: ([cellCandidate, semester]: [CellResponse, number]) => void
}) {
    const {data, isLoading, error} = apiHooks.useGetSemesters({}, {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
    })

    const semesters = data ?? []

    const [currentCell, setCurrentCell] = useState<CellResponse | null>(null);
    const [currentSemester, setCurrentSemester] = useState<number | null>(null);

    if (isLoading) return <></>
    if (error) return <></>

    return <Stack direction={"row"} gap={1}>
        <Box flex={3}><Autocomplete renderInput={(params) => <TextField {...params} label="(WPF) Modul"/>}

                                    getOptionLabel={(option) => option.name}
                                    value={currentCell}
                                    onChange={(event, value) => {
                                        console.log(event)
                                        console.log(value)
                                        setCurrentCell(value)
                                    }}
                                    renderOption={({key, ...props}, option: CellResponse) => {
                                        return <ListItem key={key} {...props}>
                                            <ListItemText primary={option.name}
                                                          secondary={`${option.contains_wpf ? option.data.cp : option.data.cp_plus_description.DEFAULT} CP`}/>
                                        </ListItem>
                                    }} options={cells}/></Box>

        <Box flex={1}><Autocomplete renderInput={(params) => <TextField {...params} label="Semester"/>}
                                    options={semesters}
                                    getOptionLabel={(option) => option.toString()} value={currentSemester}
                                    onChange={(event, value) => setCurrentSemester(value)}/></Box>
        <Button
                onClick={() => {
                    if (currentCell !== null && currentSemester !== null) {
                        onAdd([currentCell, currentSemester])
                    }
                }}
                variant={"contained"}
                disabled={currentSemester === null || currentCell === null}
                color={"success"}
                endIcon={<AddOutlined/>}>
            Hinzufügen
        </Button>
    </Stack>
}