import {Graph} from "reagraph";

/**
 * interfaces for competency graph
 * */

// Competency Nodes have color / Module Nodes are grey
export interface ColoredNode {
    id: string,
    label: string,
    fill: string, //color
    colID?: number,
    rowID?: number,
    //absolute positon
    fx?: number,
    fy?: number,
    fz?: number
}

export interface ColoredEdge {
    source: string,
    target: string,
    id: string,
    fill?: string //color
}

export interface ColoredNodePositionArgs {
    //graphology object
    graph: Graph;

    // Any dragged nodes
    //drags?: DragReferences;

    //nodes for the studyProgramGraph.
    nodes: ColoredNode[];

    //edges for the studyProgramGraph.
    edges: ColoredEdge[];
}