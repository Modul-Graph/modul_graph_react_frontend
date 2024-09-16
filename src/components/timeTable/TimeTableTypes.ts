import { TeacherScTableData } from "@/lib/zod/teacherScTableSchemas";

import { MouseEvent } from "react";

export type TimeTableData = ({
    startSemester: number;
    endSemester: number;
    span: number;
    maxCellCountOverSemesters: number;
    cp_note: number;
    cells: TeacherScTableData[0]["cells"];
} & TeacherScTableData[0])[];

export type TimeTableCellOnClick = (e: MouseEvent<HTMLElement>, cell: TeacherScTableData[0]["cells"][0]) => void;
export type TimeTableCpClusterOnClick = (e: MouseEvent<HTMLElement>, cell: TeacherScTableData[0]) => void;

export type CellType = TeacherScTableData[0]["cells"][0];
