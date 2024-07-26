'use client'
import {CustomNode} from "@/components/graph/ICustomLayout";
import cloneDeep from "lodash/cloneDeep";

/**
 * update nodes array with rowID property based on position of nodes in semester column
 * */

export const convertNodes = (_nodes: CustomNode[]) => {

    // deep copy nodes - crazy stuff happens otherwise
    const nodes = cloneDeep(_nodes);

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
            node.rowID = rowIndex + 3;
            console.log(node)

        });
    });

    //create dummy nodes for semesters
    nodes.push({id: 'sem-01', label: '1', sem: 1, rowID: 1});
    nodes.push({id: 'sem-02', label: '2', sem: 2, rowID: 1});
    nodes.push({id: 'sem-03', label: '3', sem: 3, rowID: 1});
    nodes.push({id: 'sem-04', label: '4', sem: 4, rowID: 1})

    //nodes.push({id: 'sem-05', label: '5', sem: 5, rowID: 1});
    //nodes.push({id: 'sem-06', label: '6', sem: 6, rowID: 1});
    //nodes.push({id: 'sem-07', label: '7', sem: 7, rowID: 1})
    return nodes; // return modified nodes array
};



