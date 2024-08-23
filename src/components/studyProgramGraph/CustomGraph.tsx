'use client'
import {GraphCanvas, LayoutOverrides} from "reagraph";
import {CustomNodePositionArgs} from "@/components/studyProgramGraph/ICustomLayout";
import React from "react";
import {CustomEdge, CustomNode} from "@/components/studyProgramGraph/ICustomLayout";
import {convertNodes} from "@/components/studyProgramGraph/NodeRowAssignment";
import {myTheme} from "@/components/studyProgramGraph/ITheme";

type CustomLayoutInputs = LayoutOverrides & {
    getNodePosition: (id: string, args: CustomNodePositionArgs) => { x: number, y: number, z: number };
}

/**
 * implements a custom layout defined by semesters and renders module studyProgramGraph
 * */



export const CustomGraph = ({nodes, edges, onClick}: CustomGraphProps) => {

    // todo: backend anfrage

    nodes = convertNodes(nodes);



    return (

            <GraphCanvas
                    nodes={nodes}
                    edges={edges}
                    theme={myTheme}
                    onNodeClick={(nodes) => onClick(nodes as unknown as CustomNode)}
                    edgeArrowPosition="end"
                    edgeInterpolation="curved"
                    layoutType={"custom"}
                    layoutOverrides={{
                        getNodePosition: (id: string, {nodes}: CustomNodePositionArgs) => {
                            const node = nodes.find(n => n.id === id);
                            // if node undefined
                            if (!node || !node.rowID) return {x: 0, y: 0, z: 1};

                            const columns = 4; // todo: set to 7 semesters
                            const columnWidth = 100; // Width of each column
                            const columnMargin = 20; // Margin between columns
                            const columnStartX = 100; // Starting X position for the first column
                            const rowHeight = 50; // Height of each row

                            const columnX = columnStartX + (node.sem) * (columnWidth + columnMargin);
                            const columnCenterY = (columns * rowHeight) / 2;


                            return {
                                x: columnX,
                                y: columnCenterY - node.rowID * rowHeight,
                                z: 1
                            };

                        }
                    } as CustomLayoutInputs
                    }
                    draggable={true}
            />
    );
}

type CustomGraphProps = {
    nodes: CustomNode[],
    edges: CustomEdge[],
    onClick: (a: CustomNode) => void
}