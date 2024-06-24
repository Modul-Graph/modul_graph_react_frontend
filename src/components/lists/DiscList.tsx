import {List, ListItem, ListItemProps, ListProps} from "@mui/material";

/**
 * Unordered list with disc style
 * @param props same as @mui/material/ ListProps
 */
export const DiscList = (props: ListProps) => {
    return <List {...props} sx={{...props.sx, listStyle: "outside", listStyleType: "disc", pl: 2}}>
        {props.children}
    </List>
}

/**
 * List item for DiscList
 * @param props Same as @mui/material ListItemProps
 */
export const DiscListItem = (props: ListItemProps) => {
    return <ListItem disablePadding {...props} sx={{...props.sx, display: "list-item", ml: 4, width: "unset"}}>
        {props.children}
    </ListItem>
}
