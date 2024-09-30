import apiClient, {apiHooks} from "@/lib/connectivity/client";
import {Alert, List, ListItem, ListItemText, Stack} from "@mui/material";
import {Delete} from "@mui/icons-material";
import AddCellCandidate from "@/components/dashboardDialog/AddCellCandidate";
import {useTsController} from "@ts-react/form";
import {UpdateCpClusterCells} from "@/lib/zod/cpClusterSchemas";
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react";
import {CellResponse} from "@/lib/zod/cellResponseSchema";

export default function CellFormList() {
    const {
        field: {onChange, value: _value},
        error,
    } = useTsController<UpdateCpClusterCells>();

    const {data, error: queryError, isLoading} = apiHooks.useGetPotentialCellContent({}, {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
    });

    const [potentialCells, setPotentialCells] = useState<CellResponse[]>([]);
    useEffect(() => {
        if (isLoading || queryError) return;
        else setPotentialCells(data);
    }, [data, queryError, isLoading]);

    if (isLoading) return <></>
    if (queryError) return <></>

    const value = _value ?? [];

    return <Stack gap={2}>
        {error ? <Alert severity={"error"}>{error.errorMessage}</Alert> : null}
        <List subheader={"Module im CP Cluster"} sx={{
            maxHeight: "70vh",
            overflowY: "auto"
        }}>
            {value.map((cell, index) => {
                return <ListItem secondaryAction={<IconButton
                        onClick={async () => {
                            onChange(value.toSpliced(index, 1))

                            if (cell.isWPF) return
                            else {
                                const mod = await apiClient.getModule({
                                    params: {
                                        moduleName: cell.name
                                    }
                                })

                                setPotentialCells((prev) => [...prev, {
                                    name: mod.name,
                                    contains_wpf: false,
                                    data: mod
                                }])
                            }
                        }}><Delete/></IconButton>} key={index}>
                    <ListItemText primary={cell.name} secondary={`${cell.sem} Semester`}/>
                </ListItem>
            })}
        </List>
        <Stack>
            <AddCellCandidate cells={potentialCells} onAdd={([cellInfo, semester]) => {
                const isWPF = cellInfo.contains_wpf;
                let cp: number;
                const name: string = cellInfo.name
                if (isWPF) {
                    cp = cellInfo.data.cp;
                } else {
                    cp = cellInfo.data.cp_plus_description.DEFAULT;
                    setPotentialCells((prev) => prev.filter((cell) => cell.name !== name))
                }
                onChange([...value, {
                    name: name,
                    cp: cp,
                    sem: semester,
                    isWPF: isWPF
                }])
            }}/>
        </Stack>
    </Stack>


}