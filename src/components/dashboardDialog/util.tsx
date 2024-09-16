import {Divider, List, ListItem, ListItemText, ListSubheader} from "@mui/material";
import React from "react";

export function getList(items: string[], header: string) {
    return <List
            subheader={<ListSubheader>{header}</ListSubheader>}
            sx={{
                overflowY: "scroll",
                maxHeight: "60vh",
            }}
    >
        {items.map((item, idx) => (
                <>
                    <ListItem key={item}>
                        <ListItemText primary={item}></ListItemText>
                    </ListItem>
                    <Divider component="li"/>
                </>
        ))}
    </List>;
}