import React from "react";
import {Card, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {Divider} from "@heroui/divider";
import {Section} from "./Section";
import {landingContent} from "@/config/content";
import {ImageCarousel} from "@/components/ImageCarousel";

export const TrackRecordSection = () => {
    const trackRecordImages = [
        { src: "/track record pictures/track_1.png", alt: "Track Record Event 1" },
        { src: "/track record pictures/track_2.jpg", alt: "Track Record Event 2" },
        { src: "/track record pictures/track_3.jpg", alt: "Track Record Event 3" },
        { src: "/track record pictures/track_4.jpg", alt: "Track Record Event 4" },
        { src: "/track record pictures/track_5.jpg", alt: "Track Record Event 5" },
        { src: "/track record pictures/track_6.jpg", alt: "Track Record Event 6" },
    ];

    return (
        <Section id="track-record">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {landingContent.trackRecord.title} 
                        <span className="block text-foreground mt-2">{landingContent.trackRecord.highlightedTitle}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Main content card */}
                    <div className="md:col-span-2">
                        <Card className="h-full border border-divider hover:shadow-lg transition-all duration-300">
                            <CardBody className="p-8">
                                <div className="space-y-6 mb-8">
                                    {landingContent.trackRecord.description.map((text, index) => (
                                        <p 
                                            key={index} 
                                            className={`leading-relaxed ${
                                                index === 0 ? 'text-xl font-medium text-foreground' : 
                                                index === landingContent.trackRecord.description.length - 1 ? 
                                                'text-lg font-semibold text-primary italic' : 
                                                'text-lg text-default-600'
                                            }`}
                                            dangerouslySetInnerHTML={{__html: text}}
                                        />
                                    ))}
                                </div>

                                {/* Image Carousel */}
                                <ImageCarousel 
                                    images={trackRecordImages} 
                                    title="Event Gallery"
                                />
                            </CardBody>
                        </Card>
                    </div>

                {/* Highlights sidebar */}
                <div className="md:col-span-1">
                    <Card className="h-full border border-divider bg-gradient-to-br from-primary/5 to-secondary/5">
                        <CardBody className="p-6 flex flex-col justify-center items-center">
                            <h3 className="text-xl font-bold text-center mb-6">Key Achievements</h3>
                            <Divider className="mb-6 w-full" />
                            <div className="space-y-4 flex flex-col items-center w-full max-w-sm">
                                <div className="text-center p-4 rounded-lg bg-background/50 w-full">
                                    <div className="text-2xl mb-2">💻</div>
                                    <h4 className="font-bold text-sm mb-1">LeetCode Competition</h4>
                                    <p className="text-xs text-default-600">Coding challenges</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-background/50 w-full">
                                    <div className="text-2xl mb-2">🏢</div>
                                    <h4 className="font-bold text-sm mb-1">Deutsche Bank Talk</h4>
                                    <p className="text-xs text-default-600">Cloud innovation</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-background/50 w-full">
                                    <div className="text-2xl mb-2">📊</div>
                                    <h4 className="font-bold text-sm mb-1">Bloomberg Visit</h4>
                                    <p className="text-xs text-default-600">Industry insights</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-background/50 w-full">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <h4 className="font-bold text-sm mb-1">START HACK</h4>
                                    <p className="text-xs text-default-600">European hackathon</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </Section>
    );
}