'use client'
import {GraphCanvas, GraphCanvasRef, LayoutOverrides} from "reagraph";
import {CustomNodePositionArgs} from "@/components/studyProgramGraph/ICustomLayout";
import React, {forwardRef, Ref} from "react";
import {CustomEdge, CustomNode} from "@/components/studyProgramGraph/ICustomLayout";
import {convertNodes} from "@/components/studyProgramGraph/NodeRowAssignment";
import {myTheme} from "@/components/studyProgramGraph/ITheme";
import {useEventCallback, useInterval} from "usehooks-ts";

type CustomLayoutInputs = LayoutOverrides & {
    getNodePosition: (id: string, args: CustomNodePositionArgs) => { x: number, y: number, z: number };
}

/**
 * implements a custom layout defined by semesters and renders module studyProgramGraph
 * */

const _CustomGraph = ({nodes, edges, onClick}: CustomGraphProps, ref: Ref<GraphCanvasRef> ) => {

    // todo: backend anfrage bzw props von vorheriger anfrage von PageView

    nodes = convertNodes(nodes);

    return (

            <GraphCanvas
                    ref={ref}
                    nodes={nodes}
                    edges={edges}
                    theme={myTheme}
                    animated={false}
                    onNodeClick={(nodes) => onClick(nodes as unknown as CustomNode)}
                    edgeArrowPosition="end"
                    edgeInterpolation="curved"
                    layoutType={"custom"}
                    layoutOverrides={{
                        getNodePosition: (id: string, {nodes}: CustomNodePositionArgs) => {
                            const node = nodes.find(n => n.id === id);
                            // if node undefined
                            if (!node || !node.rowID) return {x: 0, y: 0, z: 1};

                            const columns = 7; // 7 semesters
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
                    draggable={false}
                    disabled={true}
                    minDistance={2500}
                    maxDistance={2750}
            />
    );
}

// Ref for pdf export - forward Ref to pass Ref forward
export const CustomGraph = forwardRef(_CustomGraph);

type CustomGraphProps = {
    nodes: CustomNode[],
    edges: CustomEdge[],
    onClick: (a: CustomNode) => void
}