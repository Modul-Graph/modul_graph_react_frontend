'use client'

import {GraphCanvas} from "reagraph";
import {myTheme} from "@/components/studyProgramGraph/ITheme";
import React from "react";
import {ColoredNodePositionArgs} from "@/components/competencyGraph/ICompetencyGraph";
import {makeNodesNEdges} from "@/components/competencyGraph/NodeEdgeAssignment";
import {WPFEntry} from "@/lib/zod/competenceTimeTableSchema";

/**
 * implements a custom layout defined by competency nodes connected to modules
 * */

export const CompetencyGraph = ({wpfEntry}: {wpfEntry: WPFEntry}) => {

    // todo: backend anfrage zod

    const [nodes,edges] = makeNodesNEdges(wpfEntry);

    class CustomLayoutInputs {
        
    }

    return (

            <GraphCanvas
                    nodes={nodes}
                    edges={edges}
                    theme={myTheme}
                    edgeArrowPosition="end"
                    edgeInterpolation="curved"
                    layoutType={"custom"}
                    layoutOverrides={{
                        getNodePosition: (id: string, {nodes}: ColoredNodePositionArgs) => {
                            const node = nodes.find(n => n.id === id);
                            // if node undefined
                            if (!node || !node.rowID || !node.colID) return {x: 0, y: 0, z: 1};

                            const columns = 2; // first column competency nodes, second module nodes
                            const columnWidth = 100; // Width of each column
                            const columnMargin = 20; // Margin between columns
                            const columnStartX = 100; // Starting X position for the first column
                            const rowHeight = 50; // Height of each row

                            const columnX = columnStartX + (node.colID) * (columnWidth + columnMargin);
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