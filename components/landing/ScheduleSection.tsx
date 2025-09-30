import React from "react";
import {Card, CardHeader, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {Divider} from "@heroui/divider";
import {Section} from "./Section";
import {landingContent} from "@/config/content";

export const ScheduleSection = () => (
    <Section id="schedule">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {landingContent.schedule.title} 
                    <span className="block text-foreground mt-2">{landingContent.schedule.highlightedTitle}</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {landingContent.schedule.description.map((text, index) => (
                        <p key={index} className="text-xl text-default-600 leading-relaxed" dangerouslySetInnerHTML={{__html: text}}/>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {landingContent.schedule.days.map((day, index) => (
                    <Card 
                        key={index} 
                        className="h-full hover:shadow-lg transition-all duration-300 border border-divider hover:border-primary/30 bg-gradient-to-br from-background to-default-50"
                    >
                        <CardHeader className="pb-4">
                            <div className="w-full text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <Chip 
                                        color={index === 0 ? "primary" : "secondary"}
                                        variant="flat" 
                                        size="lg"
                                        className="font-bold"
                                    >
                                        {day.day}
                                    </Chip>
                                </div>
                                <h3 className="text-3xl font-bold text-foreground mb-2">
                                    {day.title}
                                </h3>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="pt-6">
                            <div className="space-y-4">
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className="flex items-start gap-4 p-3 rounded-lg hover:bg-default-100/50 transition-colors">
                                        <div className="shrink-0">
                                            <Chip 
                                                color="default" 
                                                variant="bordered"
                                                size="sm"
                                                className="font-mono font-bold"
                                            >
                                                {event.time}
                                            </Chip>
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <p className="text-default-700 font-medium leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    </Section>
);

