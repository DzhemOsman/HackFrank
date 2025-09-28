import React from "react";
import {Logo} from "@/components/Logo";
import {landingContent} from "@/config/content";
import {subtitle, title} from "@/components/primitives";

export const HeroSection = () => (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="relative inline-block max-w-4xl text-center justify-center rounded-2xl overflow-hidden">
            {/* Background image with low opacity */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-2xl"
                style={{
                    backgroundImage: "url('/frankfurt.jpg')"
                }}
            />
            {/* Content overlay */}
            <div className="relative z-10 p-8">
                <Logo/>
                <span className={title({size: "sm"})}>{landingContent.hero.title}</span>
                <span className={title({size: "sm", color: "cyan"})}>{landingContent.hero.highlightedTitle}</span>
                <br/>
                <div className={subtitle({class: "mt-3"})}>{landingContent.hero.subtitle}</div>
            </div>
        </div>
    </section>
);
