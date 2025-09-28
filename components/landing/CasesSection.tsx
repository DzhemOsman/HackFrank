import React from "react";
import {Card, CardHeader, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {Section} from "./Section";
import {landingContent} from "@/config/content";

export const CasesSection = () => (
    <Section id="cases">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {landingContent.cases.title} 
                    <span className="block text-foreground mt-2">{landingContent.cases.highlightedTitle}</span>
                </h2>
                <p className="text-xl text-default-600 max-w-3xl mx-auto leading-relaxed">
                    Choose from three exciting case categories designed to challenge different skill sets and interests. 
                    Each case offers unique opportunities to showcase your expertise and creativity.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {landingContent.cases.items.map((caseItem, index) => (
                    <Card 
                        key={index} 
                        className="h-full hover:shadow-lg transition-shadow duration-300 border border-divider hover:border-primary/30"
                        isPressable
                    >
                        <CardHeader className="pb-4">
                            <div className="w-full">
                                <div className="flex items-center justify-between mb-3">
                                    <Chip 
                                        color="primary" 
                                        variant="flat" 
                                        size="sm"
                                        className="font-medium"
                                    >
                                        Case {index + 1}
                                    </Chip>
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {caseItem.title}
                                </h3>
                            </div>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <p className="text-default-600 leading-relaxed">
                                {caseItem.description}
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    </Section>
);

