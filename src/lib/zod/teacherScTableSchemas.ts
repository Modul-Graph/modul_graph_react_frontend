import {z} from "zod";
import {createUniqueFieldSchema} from "@ts-react/form";

export const cellSchema = z.object({
    isWPF: z.boolean(),
    name: z.string().min(1, "Name must not be empty"),
    cp: z.number().min(1, "CP must be at least 1"),
    sem: z
        .number()
        .int()
        .min(1, "Semester must be at least 1")
        .max(15, "Semester must be at most 15"),
    cellId: z.string().min(1, "Cell ID must not be empty"),
})

export const cpClusterSchema = z.object({
    cp_note: z.number().min(0, "CP note must be at least 0"),
    cp_cluster_id: z.string().min(1, "CP cluster ID must not be empty"),
    cells: z
        .array(
            cellSchema
        )
        .min(1, "At least one cell must be present"),
})

export const teacherScTableSchema = z
    .array(
        cpClusterSchema,
    )
    .refine((data) => {
        const semesters = new Set(data.flatMap((d) => d.cells.map((c) => c.sem)));
        const maxSemester = Math.max(...semesters);
        const minSemester = Math.min(...semesters);
        return maxSemester - minSemester + 1 === semesters.size;
    }, "Semesters must be consecutive");

createUniqueFieldSchema(z.array(cellSchema), "cp-cluster-cells");

export type TeacherScTableData = z.infer<typeof teacherScTableSchema>;
export type CpCluster = z.infer<typeof cpClusterSchema>;
