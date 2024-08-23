import {competenceTimeTableSchema, CompetenceTimeTableType} from "@/components/competencyGraph/MockData2";
import {ColoredEdge, ColoredNode} from "@/components/competencyGraph/ICompetencyGraph";
import {red,pink,purple,blue,green,yellow,orange, grey} from "@mui/material/colors"

/**
 * create from backend data Competency Nodes, Module Nodes and Edges; color nodes
 */


export const makeNodesNEdges = ({data}: NodeColorAssignmentProps) => {
    // validate incoming data
    const parsedData = competenceTimeTableSchema.parse(data);

    // set containing all unique competences
    const competencesSet: Set<string> = new Set();

    // set containing all unique modules
    const modulesSet: Set<string> = new Set();

    // create array to hold tuples of competences with their corresponding modules
    const competencesWithModules: [string, string][] = [];


    // loop through parsed data and extract competences
    for (const moduleEntry of parsedData) {
        for (const module of moduleEntry.modules) {
            modulesSet.add(module.name); //add module names
            for (const competence of module.competences) {
                competencesSet.add(competence); // add competency names
                // add competencies with corresponding module
                competencesWithModules.push([competence, module.name]);
            }
        }
    }

    // create nodes
    const nodes: ColoredNode[]=[];
    let rowIDcounter = 0;

    //colors for nodes
    const colors= [red[300], green[300], yellow[300], blue[300], pink[300], orange[300], purple[300]];

    // create competency nodes
    // CompetencyNode - color: different, colID: 1
    competencesSet.forEach((value) => {
        rowIDcounter++;
        const color=colors[rowIDcounter%7]; // pick color
        nodes.push({id: `${value}`, label: `${value}`, fill: color, colID: 1, rowID: rowIDcounter});
    });

    rowIDcounter = 0;// reset counter
    //create module nodes
    // ModuleNode - color: grey, colID: 2
    modulesSet.forEach((value) => {
        nodes.push({id: `${value}`, label: `${value}`, fill: grey[300], colID: 2, rowID: rowIDcounter});
        rowIDcounter++;
    });

    //create edges
    const edges: ColoredEdge[]=[];
    // Edges - source: competence, target: module

    for (let i = 0; i < competencesWithModules.length; i++) {
    const [competence, module] = competencesWithModules[i];
    edges.push({ source:`${competence}`, target:`${module}`, id:`${competence}-${module}`});
    rowIDcounter++;
}

    return [nodes,edges];

}

type NodeColorAssignmentProps = {
    data: CompetenceTimeTableType
}