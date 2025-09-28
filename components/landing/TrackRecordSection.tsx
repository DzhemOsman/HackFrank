import React from "react";
import {Section} from "./Section";
import {SectionTitle} from "./SectionTitle";
import {landingContent} from "@/config/content";

export const TrackRecordSection = () => (
    <Section id="track-record">
        <SectionTitle main={landingContent.trackRecord.title} sub={landingContent.trackRecord.highlightedTitle}
                      isCentered/>
        <div className="max-w-3xl mx-auto text-center text-lg">
            {landingContent.trackRecord.description.map((text, index) => (
                <p key={index} className="mt-4" dangerouslySetInnerHTML={{__html: text}}/>
            ))}
        </div>
    </Section>
);

