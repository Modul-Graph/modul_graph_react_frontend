'use client'
import {GraphCanvas} from "reagraph";
import {CustomNodePositionArgs} from "@/components/graph/ICustomLayout";
import React from "react";
import {CustomEdge, CustomNode} from "@/components/graph/ICustomLayout";
import {convertNodes} from "@/components/graph/NodeRowAssignment";

/**
 * implements a custom layout defined by semesters and renders module graph
 * */

class CustomLayoutInputs {
}

export const CustomGraph = ({nodes, edges}: CustomGraphProps) => {

    // todo: backend anfrage

    convertNodes(nodes, edges);

    return (

            <GraphCanvas
                    nodes={nodes}
                    edges={edges}
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
                                y: columnCenterY + node.rowID * rowHeight,
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
}