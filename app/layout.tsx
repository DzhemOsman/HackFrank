import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {Link} from "@heroui/link";
import clsx from "clsx";

import {Providers} from "./providers";

import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Navbar} from "@/components/navbar";
import React from "react";
import {GdGIcon, InstagramIcon, LinkedInIcon} from "@/components/icons"; // Import the new icons

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/bull.png",
    },
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html suppressHydrationWarning lang="en">
        <head>
            <title>
                {siteConfig.name} - {siteConfig.description}
            </title>
        </head>
        <body
            className={clsx(
                "min-h-screen text-foreground bg-background font-sans antialiased",
                fontSans.variable,
            )}
        >
        <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
            <div className="relative flex flex-col min-h-screen">
                <Navbar/>
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                    {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                    <div className="flex items-center gap-4">
                        <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
                            <LinkedInIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
                            <InstagramIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal aria-label="GDG" href={siteConfig.links.gdg}>
                            <GdGIcon className="text-default-500" style={{height: '24px', width: 'auto'}}/>
                        </Link>
                    </div>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}
