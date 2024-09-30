import {ComponentProps, MouseEvent} from "react";
import {Box, Theme, Typography} from "@mui/material";
import _ from "lodash";
import {CellType, TimeTableCellOnClick} from "@/components/timeTable/TimeTableTypes";

const TimeTableModuleCell = ({
                                 cell,
                                 onClick,
                                 ...props
                             }: {
    cell: CellType;
    onClick?: TimeTableCellOnClick;
} & Omit<ComponentProps<typeof Box>, "onClick">) => {
    onClick = onClick ?? ((..._) => null);

    const name = cell.name;
    const cp = cell.cp;

    return (
            <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    {...props}
                    onClick={(e: MouseEvent<HTMLElement>) => onClick(e, _.clone(cell))}
                    sx={(theme: Theme) => ({
                        overflow: "hidden",
                        p: 1,
                        outline: "2px solid black",
                        backgroundColor: theme.palette.background.default,
                        "&:hover": {
                            transition: theme.transitions.create("all", {
                                duration: theme.transitions.duration.short,
                                easing: theme.transitions.easing.easeInOut,
                            }),
                            transform: "scale(1.05)",
                            borderRadius: "4px",
                            boxShadow: 10,
                        },
                        ...props.sx,
                    })}
            >
                <Typography
                        textOverflow={"ellipsis"}
                        overflow={"hidden"}
                        sx={{overflowWrap: "break-word", verticalAlign: "middle"}}
                        align={"center"}
                >
                    {name} ({cp}
                    <>&nbsp;</>
                    CP)
                </Typography>
            </Box>
    );
};

export default TimeTableModuleCell;
