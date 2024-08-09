"use client"

import {
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {styled} from '@mui/material/styles';
import {ReactNode} from "react";
import theme from "@/theme";

/**
 * TimeTable component. CK and RK must be types of T[column_key] and T[row_key] respectively. T is the type of one data entry
 * @param props @type TimeTableProps
 */
export function TimeTable<T, CK extends KeyType, RK extends KeyType>(props: TimeTableProps<T, CK, RK>): ReactNode {
    const [data, column_keys, row_keys] = genTableData(props)

    return <TimeTableView data={data} column_keys={column_keys} row_keys={row_keys} cellRenderer={props.cellRenderer}
                          columnHeader={props.columnHeader} rowHeader={props.rowHeader}/>
}


const TimeTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.root}`]: {
        borderRight: `1px solid ${theme.palette.divider}`,
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
    }
}))

function TimeTableView<T, CK extends KeyType, RK extends KeyType>(props: TimeTableViewProps<T, CK, RK>) {
    console.log(props.data)
    return <TableContainer sx={{maxHeight: "100%"}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={2} sx={{border: 'none', zIndex: 20}}/>
                    <TableCell colSpan={props.column_keys.length}
                               sx={(theme) => ({
                                   background: theme.palette.primary.main,
                                   color: theme.palette.primary.contrastText,
                                   borderLeftColor: theme.palette.divider,
                                   textAlign: "center",
                                   verticalAlign: "middle",
                                   border: "none"
                               })}>
                        {props.columnHeader}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2} sx={{border: 'none', zIndex: 20, top: 56}}/>
                    {props.column_keys.map((column_key, idx) => {
                        return <TimeTableCell sx={(theme) => ({
                            color: theme.palette.primary.contrastText,
                            background: theme.palette.primary.main,
                            top: 56
                        })} key={idx}>
                            {column_key.toString()}
                        </TimeTableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.data.map((row, i) => {
                        if (i == 0) {
                            return <TableRow key={i}>
                                <TableCell sx={(theme) => ({
                                    borderTopStyle: 'solid',
                                    borderTopWidth: '1px',
                                    borderTopColor: theme.palette.divider,
                                    borderLeftStyle: 'solid',
                                    borderLeftWidth: '1px',
                                    borderLeftColor: theme.palette.divider,
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    writingMode: 'sideways-lr',
                                    fontWeight: 500,
                                    minWidth: "2rem",
                                    width: "2rem",
                                    maxWidth: "2rem",
                                    background: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    position: "sticky",
                                    left: 0,
                                })} rowSpan={props.data.length}>
                                    {props.rowHeader}</TableCell>
                            </TableRow>
                        }
                        return <TableRow key={i}>
                            <TimeTableCell sx={(theme) => ({
                                background: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                fontWeight: 500,
                                position: "sticky",
                                left: `calc(2rem + 2*16px)`,

                            })}>
                                {props.row_keys[i].toString()}
                            </TimeTableCell>
                            {row.map((cell, j) => {
                                return <TimeTableCell key={j}>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                {cell.map((cellData, k) =>
                                                        <TimeTableCell key={k}>
                                                            {props.cellRenderer(cellData)}
                                                        </TimeTableCell>
                                                )}
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TimeTableCell>
                            })}
                        </TableRow>
                    })
                }

            </TableBody>
        </Table>
    </TableContainer>
}

type TimeTableViewProps<T, CK extends KeyType, RK extends KeyType> = {
    data: T[][][],
    column_keys: CK[],
    row_keys: RK[],
    cellRenderer: (cellData: T) => ReactNode,
    columnHeader: ReactNode,
    rowHeader: ReactNode
}

function genTableData<T, CK extends KeyType, RK extends KeyType>(
        {data, column_key, row_key, orderColumnKeys, orderRowKeys}: TimeTableProps<T, CK, RK>
): [T[][][], CK[], RK[]] {

    // BEGIN: CREATE INTERMEDIATE DATA STRUCTURE
    const column_key_to_entries: Map<CK, Set<T>> = new Map();
    const row_key_to_values: Map<RK, Set<T>> = new Map();

    for (const item of data) {

        // Stringify the keys to ensure that they are displayable in the table.
        const column_key_value = item[column_key] as CK;
        const row_key_value = item[row_key] as RK;


        const column_values: Set<T> | undefined = column_key_to_entries.get(column_key_value);
        const row_values: Set<T> | undefined = row_key_to_values.get(row_key_value);

        // Add value or create new array with value if key doesn't exist in map yet.
        if (column_values === undefined) {
            column_key_to_entries.set(column_key_value, new Set());
            column_key_to_entries.get(column_key_value)!.add(item)
        } else {
            column_values.add(item)
        }


        if (row_values === undefined) {
            row_key_to_values.set(row_key_value, new Set());
            row_key_to_values.get(row_key_value)!.add(item)
        } else {
            row_values.add(item)
        }
    }
    // END: CREATE INTERMEDIATE DATA STRUCTURE
    // BEGIN: CREATE OUTPUT DATA
    const column_keys: CK[] = Array.from(column_key_to_entries.keys()).sort(orderColumnKeys)
    const row_keys: RK[] = Array.from(row_key_to_values.keys()).sort(orderRowKeys)

    const table_data: T[][][] = Array(row_keys.length)
            .fill(null)
            .map(() => Array(column_keys.length).fill(null).map(e => []))

    row_keys.forEach((row_key, row_index) => {
        column_keys.forEach((column_key, column_index) => {
            const column_values = column_key_to_entries.get(column_key)
            const row_values = row_key_to_values.get(row_key)
            if (column_values !== undefined && row_values !== undefined) {
                table_data[row_index][column_index] = Array.from(column_values.intersection(row_values))
            } else {
                console.error("Column or row values are undefined. This should not happen.")
            }
        })
    })
    console.log(table_data)
    return [table_data, column_keys, row_keys];
}


export type TimeTableProps<T, CK extends KeyType, RK extends KeyType> = {

    /**
     * List of time table cells containing data
     */
    data: T[],

    // Data attribute to use as column table header. Data will be grouped to columns by this attribute.
    column_key: keyof T,

    // Data attribute to use as row table header. Data will be grouped to rows by this attribute.
    row_key: keyof T,

    // Function to order column keys by
    orderColumnKeys: (a: CK, b: CK) => number,

    // Function to order row keys by
    orderRowKeys: (a: RK, b: RK) => number,

    cellRenderer: (cellData: T) => ReactNode,

    // Header to display above the column headers
    columnHeader: ReactNode,

    // Header to display above the row headers
    rowHeader: ReactNode
};

type KeyType = string | number | boolean;

/*
            {
                props.row_keys.map((e, i) => {
                    console.log(e)
                    console.log(i)
                    return <TableRow key={i}>
                        {props.data[i].map((e, j) => {
                            return <TableCell key={j}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            {e.map((e, k) =>
                                                    <TableCell key={k}>
                                                        {props.cellRenderer(e)}
                                                    </TableCell>
                                            )}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableCell>
                        })}
                    </TableRow>
                })
            }
 */