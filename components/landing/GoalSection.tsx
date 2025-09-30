import React from "react";
import {Card, CardHeader, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {Divider} from "@heroui/divider";
import {Section} from "./Section";
import {landingContent} from "@/config/content";

export const GoalSection = () => (
    <Section id="goal">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {landingContent.goal.title} 
                    <span className="block text-foreground mt-2">{landingContent.goal.highlightedTitle}</span>
                </h2>
                <p className="text-xl text-default-600 max-w-4xl mx-auto leading-relaxed mb-12">
                    {landingContent.goal.description}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {landingContent.goal.keyGoals.map((goal, index) => (
                            <Card 
                                key={index} 
                                className="h-full hover:shadow-lg transition-all duration-300 border border-divider hover:border-primary/30"
                                isPressable
                            >
                                <CardHeader className="pb-4">
                                    <div className="w-full">
                                        <div className="flex items-center justify-start mb-3">
                                            <Chip 
                                                color="secondary" 
                                                variant="flat" 
                                                size="sm"
                                                className="font-medium"
                                            >
                                                Goal {index + 1}
                                            </Chip>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {goal.title}
                                        </h3>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <p className="text-default-600 leading-relaxed">
                                        {goal.description}
                                    </p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <Card className="h-full border border-divider bg-gradient-to-br from-primary/5 to-secondary/5">
                        <CardHeader>
                            <h3 className="text-2xl font-bold text-center w-full">Event Stats</h3>
                        </CardHeader>
                        <Divider />
                        <CardBody className="gap-8">
                            {landingContent.goal.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm font-semibold text-default-600 tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </Section>
);

