import React from "react";
import {Section} from "./Section";
import {SectionTitle} from "./SectionTitle";
import {landingContent} from "@/config/content";

export const GoalSection = () => (
    <Section id="goal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <SectionTitle main={landingContent.goal.title} sub={landingContent.goal.highlightedTitle}/>
                <p className="text-lg mb-8">{landingContent.goal.description}</p>
                <ul className="space-y-4">
                    {landingContent.goal.keyGoals.map((goal, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-cyan-400 font-bold mr-2">•</span>
                            <div>
                                <h3 className="font-bold">{goal.title}</h3>
                                <p>{goal.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-around space-y-8 md:space-y-0">
                {landingContent.goal.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <p className="text-6xl font-bold">{stat.value}</p>
                        <p className="text-cyan-400 font-semibold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

