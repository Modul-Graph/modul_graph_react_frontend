import {List, ListItem, ListItemText, Stack} from "@mui/material";
import InertTextField from "@/components/dashboardDialog/InertTextField";
import {CpCluster} from "@/lib/zod/teacherScTableSchemas";

export default function CPClusterInfoView({data}: { data: CpCluster }) {
    return <Stack paddingTop={2} gap={2}>
        <InertTextField label={"Cluster ID"} value={data.cp_cluster_id}/>
        <InertTextField label={"CP mindestens auf Note"} value={data.cp_note}/>
        <List subheader={"Modulzellen im CP Cluster"}>

            {
                data.cells.map(cell => <ListItem><ListItemText primary={cell.name}
                                                               secondary={`${cell.sem}. Semester - ${cell.cp} CP`}/></ListItem>)
            }
        </List>
    </Stack>
}