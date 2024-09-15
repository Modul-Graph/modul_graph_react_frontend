"use client"


import {TeacherHeader} from "@/components/dashboardHeader/TeacherHeader";
import {TeacherFooter} from "@/components/dashboardFooter/TeacherFooter";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {CustomGraph} from "@/components/studyProgramGraph/CustomGraph";
import TeacherViewModulePopup from "@/components/popups/TeacherViewModulePopup";
import {memo, useEffect, useState} from "react";
import _ from "lodash";
import {CustomEdge, CustomNode} from "@/components/studyProgramGraph/ICustomLayout";
import apiClient from "@/lib/connectivity/client";

/**
 * renders teacher view with functionalities and module studyProgramGraph
 * */
export default function TeacherViewPage() {

    // Memoize CustomGraph to prevent unnecessary rerenders
    const MemoizedCustomGraph = memo(CustomGraph, (prevProps, nextProps) => {
        return _.isEqual(prevProps.nodes, nextProps.nodes) && _.isEqual(prevProps.edges, nextProps.edges);
    });

    useEffect(() => {
        apiClient.getTeacherViewGraph({
            queries: {
                sc_name: "SPO 2017 Informatik (Start Wintersemester)",
            }
        }).then(([nodes, edges]) => {
            setNodes(nodes);
            setEdges(edges);
            setLoading(false)
        })
    }, []);


    const [popupOpen, setPopupOpen] = useState(false);
    const [modalNodeData, setModalNodeData] = useState<CustomNode>();
    const [nodes, setNodes] = useState<CustomNode[]>();
    const [edges, setEdges] = useState<CustomEdge[]>();
    const [loading, setLoading] = useState(true);


    if (loading) {
        return <div>Loading...</div>
    }

    return (
            <Box height={1}>
                <Stack height={1}>
                    <TeacherHeader/>
                    <Box
                            flex={9999999999999999}
                            sx={{position: "relative"}}
                            display={"block"}

                    >
                        <MemoizedCustomGraph nodes={nodes!} edges={edges!} onClick={(node) => {
                            console.log(node)
                        }}/>
                    </Box>

                    <TeacherFooter/>
                </Stack>

            </Box>
    )

}

