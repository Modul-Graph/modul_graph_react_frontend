import {z} from "zod";

export const competenceSchema = z.object({
    name: z.string().describe("Name der Kompetenz // Gib hier den Namen der Kompetenz ein"),
})