"use client"

import {CompetenceTimeTableType, WPFEntry} from "@/lib/zod/competenceTimeTableSchema";
import {useEffect, useState} from "react";
import client from "@/lib/connectivity/client";
import {CompetenceTable} from "@/components/competencesTable/CompetenceTable";
import {Box} from "@mui/material";
import GenericDialog from "@/components/dashboardDialog/GenericDialog";
import {CompetencyGraph} from "@/components/competencyGraph/CompetencyGraph";

export default function CompetenceTimeTable({sc}: { sc: string }) {
    const [data, setData] = useState<CompetenceTimeTableType | null>(null)
    const [showDialog, setShowDialog] = useState(false)
    const [shownWPF, setShownWPF] = useState<WPFEntry | null>(null)

    useEffect(() => {
        client.getCompetenceTimeTable({params: {standardCurriculum: sc}}).then(r => {
            setData(r)
        })

    }, [sc])

    if (data == null) {
        return "Loading..."
    }
    const [table_data, column_key, row_key] = prepareCompetenceTimeTableData(data)
    return <>
        <CompetenceTable<TCompetenceTimeTableCell, number, string> data={table_data} column_key={column_key}
                                                                   row_key={row_key} orderColumnKeys={(a, b) => a - b}
                                                                   orderRowKeys={(a, b) => {
                                                                       if (a == "WPF") {
                                                                           return 1
                                                                       } else if (b == "WPF") {
                                                                           return -1
                                                                       } else {
                                                                           return a.localeCompare(b)
                                                                       }
                                                                   }}
                                                                   cellRenderer={(T) => <Box
                                                                           sx={{cursor: "pointer"}}
                                                                           onClick={() => {
                                                                               if (Object.hasOwn(T, "modules")) {
                                                                                   setShownWPF({
                                                                                       ...(T as TCompetenceTimeTableWPFCell),
                                                                                       semesters: []
                                                                                   })
                                                                                   setShowDialog(true)
                                                                               }
                                                                           }}>{T.name}</Box>}
                                                                   columnHeader={"Semester"} rowHeader={"Kompetenz"}/>
        <GenericDialog sx={{
            minHeight: "80vh",
            minWidth: "60vw"
        }} title={"Kompetenzgraph"} buttons={<></>} open={showDialog} setOpen={setShowDialog}>
            {shownWPF ? <CompetencyGraph wpfEntry={shownWPF}/> : null}
        </GenericDialog>
    </>
}

function prepareCompetenceTimeTableData(data: CompetenceTimeTableType): [TCompetenceTimeTableCell[], keyof TCompetenceTimeTableCell, keyof TCompetenceTimeTableCell] {
    const column_keys: keyof TCompetenceTimeTableCell = "semester"
    const row_keys: keyof TCompetenceTimeTableCell = "competence"
    console.log(data)
    const table_data_pflichtmodule: TCompetenceTimeTableModuleCell[] = data.pflichtmodule.flatMap(m => {
        return m.competences.map(competence => {
            return {
                name: m.name,
                competence: competence,
                semester: m.semester
            } as TCompetenceTimeTableModuleCell
        })
    })

    const table_data_wpf: TCompetenceTimeTableWPFCell[] =
            data.WPF.flatMap(wpf => wpf.semesters.map(s => {
                        return {
                            semester: s,
                            name: wpf.name,
                            modules: wpf.modules,
                            competence: "WPF"
                        } as TCompetenceTimeTableWPFCell
                    })
            )

    return [table_data_pflichtmodule.concat(table_data_wpf), column_keys, row_keys]
}

type TCompetenceTimeTableModuleCell = {
    name: string
    competence: string
    semester: number

}

type TCompetenceTimeTableWPFCell = {
    name: string
    modules: {
        name: string,
        competences: string[]
    }[],
    semester: number
    competence: string
}

type TCompetenceTimeTableCell = TCompetenceTimeTableModuleCell | TCompetenceTimeTableWPFCell

