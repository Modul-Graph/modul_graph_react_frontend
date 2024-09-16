import {CpClusterCells} from "@/lib/zod/teacherScTableSchemas";
import {apiHooks} from "@/lib/connectivity/client";
import {List, ListItem, ListItemIcon, ListItemText, Stack} from "@mui/material";
import {Delete} from "@mui/icons-material";
import AddCellCandidate from "@/components/dashboardDialog/AddCellCandidate";
import {useTsController} from "@ts-react/form";

export default function CellFormList() {
    const {
        field: {onChange, value: _value},
        error,
    } = useTsController<CpClusterCells>();

    const {data, error: queryError, isLoading, refetch} = apiHooks.useGetPotentialCellContent({}, {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
    });

    if (isLoading) return <></>
    if (queryError) return <></>

    const value: CpClusterCells = [] as unknown as CpClusterCells;

    return <Stack gap={2}>
        <List>
            {value.map((cell, index) => {
                return <ListItem key={index}>
                    <ListItemText primary={cell.name} secondary={`${cell.sem} Semester`}/>
                    <ListItemIcon onClick={() => console.log(cell)}><Delete/></ListItemIcon>
                </ListItem>
            })}
        </List>
        <Stack>
            <AddCellCandidate cells={data} onAdd={(d) => console.log(d)}/>
        </Stack>
    </Stack>


}