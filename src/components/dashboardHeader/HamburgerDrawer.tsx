'use client'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import GrainIcon from '@mui/icons-material/Grain';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TableChartIcon from '@mui/icons-material/TableChart';
import StartIcon from '@mui/icons-material/Start';
import ListItemText from "@mui/material/ListItemText";
import {Divider, List, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import {styled} from '@mui/material/styles';
import React from "react";
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'

/**
 *  hamburger menu component opens drawer for page navigation
 * */

export default function HamburgerDrawer() {
    const params = useParams<{ standardCurriculum: string }>();
    const pathname = usePathname();

    const drawerWidth = 240;

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const DrawerHeader = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));
    return (
            <>
                <IconButton
                        color="inherit"

                        onClick={handleDrawerOpen}
                        sx={{...(open && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>

                <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                            },
                        }}
                        variant="persistent"
                        anchor="right"
                        open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <ClearIcon/>
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>


                    {/*dynamic path not supported, needs direct path*/}
                    <List>

                        <ListItem disablePadding>
                            <Link href={`/sc/${params.standardCurriculum}/teacher_view/module_graph`}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GrainIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Modulgraph'}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link href={`/sc/${params.standardCurriculum}/teacher_view/feasibility_analysis?referrer_path=${encodeURI(pathname)}`}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TrendingUpIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Machbarkeitsanalyse'}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link href={`/sc/${params.standardCurriculum}/teacher_view/competence_sc`}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TableChartIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Kompetenzanalyse Studienprogramm'}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem disablePadding>
                            <Link href={`/sc/${params.standardCurriculum}/teacher_view`}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <StartIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={''}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>


                    </List>
                </Drawer>
            </>
    )
}