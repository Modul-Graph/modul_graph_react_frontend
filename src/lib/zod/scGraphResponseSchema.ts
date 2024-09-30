import {z} from "zod";
import {CustomEdge, CustomNode} from "@/components/studyProgramGraph/ICustomLayout";

export const scGraphResponseSchema = z.object({
    nodes: z.array(z.object({
        id: z.string(),
        label: z.string(),
        semester: z.number()
    })),
    edges: z.array(z.object({
        source: z.string(),
        target: z.string(),
        id: z.string(),
    }))
})

export const transformSCSuggestionToGraph = (suggestions: z.infer<typeof scGraphResponseSchema>): [CustomNode[], CustomEdge[]] => {
    const nodes = suggestions.nodes.map(node => {
        return {
            id: node.id,
            label: node.label,
            sem: node.semester
        } as CustomNode
    })

    const edges = suggestions.edges.map(edge => {
        return {
            id: edge.id,
            source: edge.source,
            target: edge.target
        } as CustomEdge
    })

    return [nodes, edges]
}
