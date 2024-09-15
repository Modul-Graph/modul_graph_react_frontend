'use client'
import {CustomNode} from "@/components/studyProgramGraph/ICustomLayout";
import cloneDeep from "lodash/cloneDeep";

/**
 * update nodes array with rowID property based on position of nodes in semester column
 * */

export const convertNodes = (_nodes: CustomNode[]) => {

    // deep copy nodes - crazy stuff happens otherwise
    const nodes: CustomNode[] = cloneDeep(_nodes);

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


    const semesters = new Set(nodes.map(node => node.sem));
    semesters.forEach((sem) => {
        nodes.push({id: `sem-${sem}`, label: sem.toString(), sem: sem, rowID: 1});
    })


    //nodes.push({id: 'sem-05', label: '5', sem: 5, rowID: 1});
    //nodes.push({id: 'sem-06', label: '6', sem: 6, rowID: 1});
    //nodes.push({id: 'sem-07', label: '7', sem: 7, rowID: 1})
    return nodes; // return modified nodes array
};



