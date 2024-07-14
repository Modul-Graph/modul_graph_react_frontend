'use client'
import {CustomEdge, CustomNode} from "@/components/graph/ICustomLayout";

/**
 * update nodes array with rowID property based on position of nodes in semester column
 * */

//todo: minimize overlapping edges

export const convertNodes = (nodes: CustomNode[], edges: CustomEdge[]) => {


    const columns: { [key: string]: CustomNode[] } = {};

    // organize nodes into groups based on semester property
    nodes.forEach((node) => {
        if (!columns[node.sem]) {
            columns[node.sem] = [];
        }
        columns[node.sem].push(node);
    });

    // iterate through semester column
    Object.keys(columns).forEach((sem) => {
        const columnNodes = columns[sem];
        // assign node a rowID property based on position in columnNodes[]
        columnNodes.forEach((node, rowIndex) => {
            node.rowID = rowIndex + 1;

        });
    });

    return nodes; // return modified nodes array
};
