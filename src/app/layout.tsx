import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{"height": "100%"}}>
        <body style={{"height": "100%", "margin": 0, "padding": 0}}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
