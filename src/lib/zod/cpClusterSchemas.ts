import {z} from "zod";
import {CPSchema, DisplayOnlyTextSchema} from "@/lib/zod/general";
import {createUniqueFieldSchema} from "@ts-react/form";
import {cellSchema} from "@/lib/zod/teacherScTableSchemas";


export const updateCpClusterCellSchema = createUniqueFieldSchema(
    z.array(cellSchema.merge(
            z.object({
                cellId: z.string().optional(),
                isWPF: z.boolean()
            })
        )
    ).min(1, "CP Cluster braucht mindestens 1 Modul"), "updatae-cp-cluster-cells");

export type UpdateCpClusterCells = z.infer<typeof updateCpClusterCellSchema>;

export const updateClusterSchema = z.object({
    clusterId: DisplayOnlyTextSchema.describe("Cluster ID // ID des Clusters"),
    cp_note: CPSchema.describe("CP Note // Geben sie CP an, wieviel mindestens auf Note geschrieben werden soll"),
    cells: updateCpClusterCellSchema.describe("Module im CP Cluster"),
})

export const createClusterSchema = z.object({
    cp_note: CPSchema.describe("CP Note // Geben sie CP an, wieviel mindestens auf Note geschrieben werden soll"),
    cells: updateCpClusterCellSchema.describe("Module im CP Cluster"),
})

