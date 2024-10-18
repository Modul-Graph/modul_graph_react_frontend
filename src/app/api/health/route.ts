import getConfig from "next/config";
import { unstable_noStore as noStore } from 'next/cache';
import {env} from "next-runtime-env";


export async function GET(req: Request) {
    noStore()

    const API_URL = env('NEXT_PUBLIC_API_URL') ?? "";

    try {
        await fetch(`${API_URL}/health`)
    } catch (e) {
        console.error(`Unable to reach Backend API at ${API_URL}/health:`, e)
        console.error(`Please check if the API is running and reachable. Or configured correctly. Use NEXT_PUBLIC_API_URL environment variable to set the API URL.`)

        return new Response(
            'API Unavailable',
            {status: 500}
        )
    }

    return new Response(
        'OK',
        {status: 200}
    )
}