import getConfig from "next/config";

export async function GET(req: Request) {

    const API_URL = getConfig().publicRuntimeConfig.API_URL;

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