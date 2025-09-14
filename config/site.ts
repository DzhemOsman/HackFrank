export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "HackFrank",
    description: "Frankfurt’s most innovative hackathon, organized by GDGoC Frankfurt — 24 hours of creativity, community, and collaboration to shape the future\n",
    navItems: [
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
        linkedin: "https://www.linkedin.com/company/gdg-on-campus-frankfurt/",
        instagram: "https://www.instagram.com/gdgoc.frankfurt/",
        gdg: "https://gdg.community.dev/gdg-on-campus-goethe-university-frankfurt-germany/"
    },
};
