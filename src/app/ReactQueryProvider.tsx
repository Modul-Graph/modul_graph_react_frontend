'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from "react";

export default function ReactQueryProvider({children}: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchInterval: false,
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                staleTime: 0
            }
        },
    }))

    return <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
}