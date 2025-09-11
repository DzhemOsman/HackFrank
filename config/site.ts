export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "HackFrank",
    description: "Frankfurt’s most innovative hackathon, organized by GDGoC Frankfurt — 24 hours of creativity, community, and collaboration to shape the future\n",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Goal",
            href: "#goal",
        },
        {
            label: "Schedule",
            href: "#schedule",
        },
        {
            label: "Cases",
            href: "#cases",
        },
        {
            label: "Track Record",
            href: "#track-record",
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/heroui-inc/heroui",
        twitter: "https://twitter.com/hero_ui",
        docs: "https://heroui.com",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
