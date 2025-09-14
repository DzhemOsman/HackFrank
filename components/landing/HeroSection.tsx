import React from "react";
import { Logo } from "@/components/Logo";
import { landingContent } from "@/config/content";
import { subtitle, title } from "@/components/primitives";

export const HeroSection = () => (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Logo />
        <div className="inline-block max-w-4xl text-center justify-center">
            <span className={title({ size: "sm" })}>{landingContent.hero.title}</span>
            <span className={title({ size: "sm", color: "cyan" })}>{landingContent.hero.highlightedTitle}</span>
            <br />
            <div className={subtitle({ class: "mt-3" })}>{landingContent.hero.subtitle}</div>
        </div>
    </section>
);
