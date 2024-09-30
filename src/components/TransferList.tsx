import React, {useEffect} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid2 from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import {Alert} from "@mui/material";

export default function TransferList({
                             titleLeft,
                             titleRight,
                             initialRight,
                             initialLeft,
                             onChange,
                             error,
                         }: {
    titleLeft: string,
    titleRight: string,
    initialLeft: string[];
    initialRight: string[];
    onChange: (right: string[]) => void;
    error?: string;
}) {
    const [checked, setChecked] = React.useState<readonly string[]>([]);
    const [left, setLeft] = React.useState<readonly string[]>(initialLeft);
    const [right, setRight] = React.useState<readonly string[]>(initialRight);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items: readonly string[]) => intersection(checked, items).length;

    const handleToggleAll = (items: readonly string[]) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    useEffect(() => {
        onChange([...right]);
    }, [right, onChange]);

    const customList = (title: React.ReactNode, items: readonly string[]) => (
            <Card>
                <CardHeader
                        sx={{px: 2, py: 1}}
                        avatar={
                            <Checkbox
                                    onClick={handleToggleAll(items)}
                                    checked={numberOfChecked(items) === items.length && items.length !== 0}
                                    indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                                    disabled={items.length === 0}
                                    inputProps={{
                                        "aria-label": "all items selected",
                                    }}
                            />
                        }
                        title={title}
                        subheader={`${numberOfChecked(items)}/${items.length} selected`}
                />
                <Divider/>
                <List
                        sx={{
                            height: 230,
                            bgcolor: "background.paper",
                            overflowY: "auto",
                            overflowX: "hidden",
                            minWidth: "min-width",
                        }}
                        dense
                        component="div"
                        role="list"
                >
                    {items.map((value: string) => {
                        const labelId = `transfer-list-all-item-${value}-label`;

                        return (
                                <ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                                checked={checked.includes(value)}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{
                                                    "aria-labelledby": labelId,
                                                }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={value} sx={{wordBreak: "break-word"}}/>
                                </ListItemButton>
                        );
                    })}
                </List>
            </Card>
    );

    return (
            <Grid2 container spacing={2} sx={{justifyContent: "center", alignItems: "center"}}>
                <Grid2 size={5} item>
                    {customList(titleLeft, left)}
                </Grid2>
                <Grid2 size={2} item>
                    <Grid2 container direction="column" sx={{alignItems: "center"}}>
                        <Button
                                sx={{my: 0.5}}
                                variant="outlined"
                                size="small"
                                onClick={handleCheckedRight}
                                disabled={leftChecked.length === 0}
                                aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                                sx={{my: 0.5}}
                                variant="outlined"
                                size="small"
                                onClick={handleCheckedLeft}
                                disabled={rightChecked.length === 0}
                                aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                    </Grid2>
                </Grid2>
                <Grid2 size={5} item>
                    {customList(titleRight, right)}
                </Grid2>
                {error ? (
                        <Grid2 item xs={12}>
                            <Alert severity="error">{error ?? "Unknown error!"}</Alert>
                        </Grid2>
                ) : null}
            </Grid2>
    );

    function not(a: readonly string[], b: readonly string[]) {
        return a.filter((value) => !b.includes(value));
    }

    function intersection(a: readonly string[], b: readonly string[]) {
        return a.filter((value) => b.includes(value));
    }

    function union(a: readonly string[], b: readonly string[]) {
        return [...a, ...not(b, a)];
    }
}
