import React from "react";
import {Section} from "./Section";
import {landingContent} from "@/config/content";

export const ScheduleSection = () => (
    <Section id="schedule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-bold mb-6">
                    <span
                        className="text-cyan-400">{landingContent.schedule.title}</span>
                    <br/> {landingContent.schedule.highlightedTitle}
                </h2>
                {landingContent.schedule.description.map((text, index) => (
                    <p key={index} className="text-lg mt-4" dangerouslySetInnerHTML={{__html: text}}/>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
                {landingContent.schedule.days.map((day, index) => (
                    <div key={index}>
                        <h3 className="text-2xl font-bold">{day.title}</h3>
                        <p className="text-cyan-400 font-semibold mb-4">{day.day}</p>
                        <ul className="space-y-3">
                            {day.events.map((event, eventIndex) => (
                                <li key={eventIndex}><strong>{event.time}</strong> {event.description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

