import type {Metadata} from "next";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import {Inter} from "next/font/google";

import theme from "@/theme";
import {QueryClient} from "@tanstack/react-query";
import ReactQueryProvider from "@/app/ReactQueryProvider";
import React from "react";
import {PublicEnvScript} from "next-runtime-env";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
new QueryClient();

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <html lang="en" style={{height: "100%"}}>
            <head>
                <PublicEnvScript />
            </head>
            <body className={inter.className} style={{height: "100%", margin: 0, padding: 0}}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <ReactQueryProvider>
                        {children}
                    </ReactQueryProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>

            </body>
            </html>
    );
}
