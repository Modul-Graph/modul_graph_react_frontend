"use client"

import {StudentHeader} from "@/components/dashboardHeader/StudentHeader";
import {StudentFooter} from "@/components/dashboardFooter/StudentFooter";
import {CustomGraph} from "@/components/studyProgramGraph/CustomGraph";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {CustomEdge, CustomNode} from "@/components/studyProgramGraph/ICustomLayout";
import {useEffect, useState} from "react";
import client from "@/lib/connectivity/client";

/**
 * renders student view with functionalities and module studyProgramGraph
 * */
export default function StudentViewPage() {

    const [nodes, setNodes] = useState<CustomNode[]>([]);
    const [edges, setEdges] = useState<CustomEdge[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        client.getSCSuggestion({
            standard_curriculum: "SPO 2017 Informatik (Start Wintersemester)",
            competences: ["Analysis"]
        }).then(([nodes, edges]) => {
            setNodes(nodes);
            setEdges(edges);
            setLoading(false);
        }).catch(e => console.error(e))
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
            <Box height={1}>
                <Stack height={1}>
                    <StudentHeader/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative"}} //
                            display={"block"}

                    >
                        <CustomGraph onClick={() => null} nodes={nodes} edges={edges}></CustomGraph>
                    </Box>

                    <StudentFooter/>
                </Stack>

            </Box>
    )
}