import {ComponentProps, MouseEvent} from "react";
import {Box, Stack, Theme, Typography} from "@mui/material";
import {createKey} from "next/dist/shared/lib/router/router";
import {TimeTableCellOnClick, TimeTableCpClusterOnClick, TimeTableData} from "@/components/timeTable/TimeTableTypes";
import TimeTableModuleCell from "@/components/timeTable/TimeTableModuleCell";

const TimeTableCPCluster = ({
                                cpCluster,
                                onCellClicked,
                                onCPClusterClicked,
                                ...props
                            }: {
    cpCluster: TimeTableData[0];
    onCellClicked?: TimeTableCellOnClick;
    onCPClusterClicked?: TimeTableCpClusterOnClick;
} & ComponentProps<typeof Stack>) => {
    return (
            <Box
                    onClick={(e: MouseEvent<HTMLElement>) => onCPClusterClicked?.(e, cpCluster)}
                    height={1}
                    {...props}
                    sx={(theme: Theme) => ({
                        backgroundColor: theme.palette.background.default,
                        "&:not(:has(.module-cell:hover)):hover": {
                            transition: theme.transitions.create("all", {
                                duration: theme.transitions.duration.short,
                                easing: theme.transitions.easing.easeInOut,
                            }),
                            transform: "scale(1.05)",
                            borderRadius: "4px",
                            boxShadow: 10,
                            overflow: "hidden",
                        },
                        ...props.sx,
                    })}
            >
                <Stack height={1} width={1}>
                    <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            borderBottom={"2px solid black"}
                            flexGrow={0}
                            flexShrink={1}
                    >
                        {cpCluster.cp_note ? (
                                <Typography>{cpCluster.cp_note} CP</Typography>
                        ) : (
                                <Typography>&nbsp;</Typography>
                        )}
                    </Box>
                    <Box
                            className={"module-cell-container"}
                            display={"grid"}
                            sx={{
                                gridAutoFlow: "row dense",
                                gridTemplateRows: `repeat(${cpCluster.maxCellCountOverSemesters}, 1fr)`,
                                gridTemplateColumns: `repeat(${cpCluster.span}, 1fr)`,
                                gap: "2px",
                            }}
                            height={1}
                    >
                        {cpCluster.cells.map((cell) => {
                            return (
                                    <TimeTableModuleCell
                                            onClick={(e, cell) => {
                                                // Don't trigger the cluster click event
                                                e.stopPropagation();

                                                onCellClicked?.(e, cell);
                                            }}
                                            className={"module-cell"}
                                            key={createKey()}
                                            sx={{
                                                gridColumnStart: `${cell.sem - cpCluster.startSemester + 1}`,
                                            }}
                                            cell={cell}
                                    />
                            );
                        })}
                    </Box>
                </Stack>
            </Box>
    );
};

export default TimeTableCPCluster;
