import {Link} from "@heroui/link";
import {Snippet} from "@heroui/snippet";
import {Code} from "@heroui/code";
import {button as buttonStyles} from "@heroui/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import Image from "next/image";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Image src="/logo.png" alt="HackFrank Logo" width={500} height={500}/>
            <div className="inline-block max-w-4xl text-center justify-center">
                <span className={title({size: "sm"})}>Frankfurt’s most innovative hackathon, organized by&nbsp;</span>
                <span className={title({size: "sm", color: "cyan"})}>GDGoC Frankfurt&nbsp;</span>
                <br/>
                <div className={subtitle({class: "mt-3"})}>
                    24 hours of creativity, community, and collaboration to shape the
                    future
                </div>
            </div>
        </section>
    );
}