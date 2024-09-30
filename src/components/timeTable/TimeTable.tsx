import {Box, Typography} from "@mui/material";
import {createKey} from "next/dist/shared/lib/router/router";
import {TeacherScTableData} from "@/lib/zod/teacherScTableSchemas";
import TimeTableCPCluster from "@/components/timeTable/TimeTableCPCluster";
import {TimeTableCellOnClick, TimeTableCpClusterOnClick, TimeTableData} from "@/components/timeTable/TimeTableTypes";

export default function TimeTable({
                                      ttData,
                                      onCellClicked,
                                      onCpClusterClicked,
                                  }: {
    ttData: TeacherScTableData;
    onCellClicked?: TimeTableCellOnClick;
    onCpClusterClicked?: TimeTableCpClusterOnClick;
}) {
    const data: TimeTableData = ttData.map((cpCluster) => {
        const startSemester = Math.min(...cpCluster.cells.map((cell) => cell.sem));
        const endSemester = Math.max(...cpCluster.cells.map((cell) => cell.sem));
        return {
            ...cpCluster,
            startSemester: startSemester,
            endSemester: endSemester,
            span: endSemester - startSemester + 1,
            maxCellCountOverSemesters: cpCluster.cells.reduce((acc, cell) => {
                return Math.max(acc, cpCluster.cells.filter((c) => c.sem === cell.sem).length);
            }, 0),
        };
    });

    const sortedSemesters = Array.from(
            new Set(data.flatMap((cpCluster) => cpCluster.cells.map((cell) => cell.sem))).values(),
    ).sort();

    const cpClustersSortedByStartSemesterAndSpan = data
            .sort((a, b) => {
                if (a.startSemester === b.startSemester) {
                    return a.span - b.span;
                }
                return a.startSemester - b.startSemester;
            })
            .reverse();

    return (
            <Box
                    minWidth={"fit-content"}
                    display={"grid"}
                    padding={"6px"}
                    gridTemplateColumns={`repeat(${sortedSemesters.length}, minmax(200px, 1fr))`}
                    gridAutoRows={"1fr"}
                    gridTemplateRows={"auto minmax(0, 1fr)"}
                    gridAutoFlow={"row dense"}
                    sx={{
                        gap: "6px",
                    }}
                    component={"div"}
            >
                {sortedSemesters.map((sem) => {
                    return (
                            <Box
                                    key={createKey()}
                                    display={"flex"}
                                    maxHeight={"2rem"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    sx={{outline: "6px solid black"}}
                            >
                                <Typography>{sem}. Semester</Typography>
                            </Box>
                    );
                })}
                {cpClustersSortedByStartSemesterAndSpan.map((cpCluster) => {
                    return (
                            <TimeTableCPCluster
                                    onCPClusterClicked={onCpClusterClicked}
                                    onCellClicked={onCellClicked}
                                    key={createKey()}
                                    sx={{
                                        gridColumnStart: `${cpCluster.startSemester}`,
                                        gridColumnEnd: `${cpCluster.endSemester + 1}`,
                                        gridRowStart: `span ${cpCluster.maxCellCountOverSemesters}`,
                                        outline: "6px solid black",
                                    }}
                                    cpCluster={cpCluster}
                            />
                    );
                })}
            </Box>
    );
}
