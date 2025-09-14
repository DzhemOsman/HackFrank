import React from "react";
import { Section } from "./Section";
import { landingContent } from "@/config/content";
import Image from "next/image";

export const CasesSection = () => (
    <Section id="cases">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-full min-h-[400px]">
                <Image src="/frankfurt.jpg" alt="Team working on a project" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-6">
                    <span className="text-cyan-400">{landingContent.cases.title}</span><br /> {landingContent.cases.highlightedTitle}
                </h2>
                <div className="space-y-6">
                    {landingContent.cases.items.map((caseItem, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-cyan-400">{caseItem.title}</h3>
                            <p className="mt-2">{caseItem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

