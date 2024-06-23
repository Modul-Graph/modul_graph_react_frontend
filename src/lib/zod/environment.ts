// @ts-check
/**
 * This file is inspired by: https://sophiabits.com/blog/verify-environment-variables-nextjs
 */

import {z} from "zod"

const zodClientEnvironmentSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
})

const zodServerOnlyEnvironmentSchema = z.object({
    NODE_ENV: z.union(
        [
            z.literal("development"),
            z.literal("production"),
            z.literal("test")
        ]).default("development")
})


const zodServerEnvironmentSchema = zodClientEnvironmentSchema.and(zodServerOnlyEnvironmentSchema)

export type ClientEnvironment = z.infer<typeof zodClientEnvironmentSchema>
export type ServerEnvironment = z.infer<typeof zodServerEnvironmentSchema>
export const getClientEnvironment = (): ClientEnvironment => {
    // Don't allow server to run this
    if (typeof window === undefined) {
        throw new Error("Module can only be used on the client side!")
    }

    const clientEnvironment: ClientEnvironment = {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? ""
    }
    return zodClientEnvironmentSchema.parse(clientEnvironment)
}

export const getServerEnvironment = (): ServerEnvironment => {
    // Don't allow client to run this
    if (typeof window !== undefined) {
        throw new Error("Module can only be used on the server side!")
    }

    return zodServerEnvironmentSchema.parse(process.env)
}