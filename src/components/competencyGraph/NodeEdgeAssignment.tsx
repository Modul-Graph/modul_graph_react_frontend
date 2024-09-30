import {ColoredEdge, ColoredNode} from "@/components/competencyGraph/ICompetencyGraph";
import {blue, green, grey, orange, pink, purple, red, yellow} from "@mui/material/colors"
import {WPFEntry} from "@/lib/zod/competenceTimeTableSchema";

/**
 * create from backend data Competency Nodes, Module Nodes and Edges; color nodes
 */


export const makeNodesNEdges = (data: WPFEntry): [ColoredNode[], ColoredEdge[]] => {
    // set containing all unique competences
    const competencesSet: Set<string> = new Set();

    // set containing all unique modules
    const modulesSet: Set<string> = new Set();

    // create array to hold tuples of competences with their corresponding modules
    const competencesWithModules: [string, string][] = [];


    // loop through parsed data and extract competences
    for (const moduleEntry of data.modules) {
        modulesSet.add(moduleEntry.name); //add module names
        for (const competence of moduleEntry.competences) {
            competencesSet.add(competence); // add competency names
            // add competencies with corresponding module
            competencesWithModules.push([competence, moduleEntry.name]);
        }
    }

    // create nodes
    const nodes: ColoredNode[] = [];

    //colors for nodes
    const colors = [red[300], green[300], yellow[300], blue[300], pink[300], orange[300], purple[300]];

    // create competency nodes
    // CompetencyNode - color: different, colID: 1
    Array.from(competencesSet).forEach((value, index) => {
        const color = colors[index % 7]; // pick color
        nodes.push({id: `${value}`, label: `${value}`, fill: color, colID: 1, rowID: index + 1});
    });

    //create module nodes
    // ModuleNode - color: grey, colID: 2
    Array.from(modulesSet).forEach((value, index) => {
        nodes.push({id: `${value}`, label: `${value}`, fill: grey[300], colID: 2, rowID: index + 1});
    });

    //create edges
    const edges: ColoredEdge[] = [];
    // Edges - source: competence, target: module

    for (let i = 0; i < competencesWithModules.length; i++) {
        const [competence, module] = competencesWithModules[i];
        edges.push({source: `${competence}`, target: `${module}`, id: `${competence}-${module}`});
    }

    return [nodes, edges];

}