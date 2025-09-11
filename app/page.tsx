import {Link} from "@heroui/link";
import {Snippet} from "@heroui/snippet";
import {Code} from "@heroui/code";
import {button as buttonStyles} from "@heroui/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-3xl text-center justify-center">
                <span className={title({size: "lg"})}>Frankfurt’s most innovative hackathon, organized by&nbsp;</span>
                <span className={title({size: "lg", color: "cyan"})}>GDGoC Frankfurt&nbsp;</span>
                <br/>
                <div className={subtitle({class: "mt-4"})}>
                    24 hours of creativity, community, and collaboration to shape the
                    future
                </div>
            </div>
            <div className="flex gap-3">
                <Link
                    isExternal
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                    href={siteConfig.links.docs}
                >
                    Documentation
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({variant: "bordered", radius: "full"})}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20}/>
                    GitHub
                </Link>
            </div>

            <div className="mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
                </Snippet>
            </div>
            <section id="goal" className="w-full mt-20"></section>
        </section>
    );
}
