import { z } from "zod";

export const teacherScTableSchema = z
    .array(
        z.object({
            cp_note: z.number().min(0, "CP note must be at least 0"),
            cp_cluster_id: z.string().min(1, "CP cluster ID must not be empty"),
            cells: z
                .array(
                    z.object({
                        name: z.string().min(1, "Name must not be empty"),
                        cp: z.number().min(1, "CP must be at least 1"),
                        sem: z
                            .number()
                            .int()
                            .min(1, "Semester must be at least 1")
                            .max(7, "Semester must be at most 15"),
                        cellId: z.string().min(1, "Cell ID must not be empty"),
                    }),
                )
                .min(1, "At least one cell must be present"),
        }),
    )
    .refine((data) => {
        const semesters = new Set(data.flatMap((d) => d.cells.map((c) => c.sem)));
        const maxSemester = Math.max(...semesters);
        const minSemester = Math.min(...semesters);
        return maxSemester - minSemester + 1 === semesters.size;
    }, "Semesters must be consecutive");

export type TeacherScTableData = z.infer<typeof teacherScTableSchema>;
