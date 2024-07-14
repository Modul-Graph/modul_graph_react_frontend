import {Graph, InternalGraphNode} from "reagraph";
//import {DragReferences} from "reagraph/dist/store"; // idk doesnt exist anymore - error message?

/**
 * interfaces
 * */

/**
 * class interface for nodes
 * */
export interface CustomNode {
    id: string,
    label: string,
    sem: number,
    rowID?: number,
    fx?: number,
    fy?: number,
    fz?: number
}

/**
 * class interface for edges
 * */
export interface CustomEdge {
    source: string,
    target: string,
    id: string
}

export interface LayoutFactoryProps {
    //Get the node position for a given node id.
    getNodePosition: (id: string, args: CustomNodePositionArgs) => InternalGraphNode;
}

export interface CustomNodePositionArgs {
    //graphology object
    graph: Graph;

    // Any dragged nodes
    //drags?: DragReferences;

    //nodes for the graph.
    nodes: CustomNode[];

    //edges for the graph.
    edges: CustomEdge[];
}