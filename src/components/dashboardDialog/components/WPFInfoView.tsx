import {ModuleAreaResponse} from "@/lib/zod/moduleAreaResponseSchema";
import {Divider, List, ListItem, ListItemText, ListSubheader, Stack, TextField} from "@mui/material";
import React from "react";
import {getList} from "@/components/dashboardDialog/util";
import InertTextField from "@/components/dashboardDialog/InertTextField";


export default ({data}: { data: ModuleAreaResponse }) => {
    return (
            <Stack spacing={1} paddingTop={2}>
                <InertTextField
                        value={data.cp}
                        label={"CP"}
                />
                {getList(data.filled_by_module, "Belegbare Module")}
            </Stack>
    );
};
