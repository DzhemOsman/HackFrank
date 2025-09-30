import React from "react";
import {Card, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {Button} from "@heroui/button";
import {Logo} from "@/components/Logo";
import {landingContent} from "@/config/content";

export const HeroSection = () => (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 min-h-[80vh]">
        <div className="max-w-6xl mx-auto text-center">
            {/* Logo and Badge */}
            <div className="flex flex-col items-center mb-8">
                <Logo/>
            </div>

            {/* Main Title */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {landingContent.hero.title}
                    </span>
                    <span className="block text-foreground mt-2">
                        {landingContent.hero.highlightedTitle}
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-default-600 max-w-4xl mx-auto leading-relaxed font-light">
                    {landingContent.hero.subtitle}
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <Card className="border border-divider hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardBody className="text-center p-6">
                        <div className="text-4xl mb-3">⏰</div>
                        <h3 className="font-bold text-lg mb-2">36 Hours</h3>
                        <p className="text-default-600 text-sm">Non-stop innovation</p>
                    </CardBody>
                </Card>
                <Card className="border border-divider hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardBody className="text-center p-6">
                        <div className="text-4xl mb-3">🏆</div>
                        <h3 className="font-bold text-lg mb-2">3 Categories</h3>
                        <p className="text-default-600 text-sm">Multiple winning opportunities</p>
                    </CardBody>
                </Card>
                <Card className="border border-divider hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardBody className="text-center p-6">
                        <div className="text-4xl mb-3">🤝</div>
                        <h3 className="font-bold text-lg mb-2">200+ Participants</h3>
                        <p className="text-default-600 text-sm">Network & collaborate</p>
                    </CardBody>
                </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                    size="lg"
                    color="primary"
                    variant="solid"
                    className="text-lg px-8 py-6 font-semibold"
                >
                    Register Now
                </Button>
                <Button 
                    size="lg"
                    color="default"
                    variant="bordered"
                    className="text-lg px-8 py-6 font-semibold"
                >
                    Learn More
                </Button>
            </div>

            {/* Event Date Chip */}
            <div className="mt-8">
                <Chip 
                    color="secondary" 
                    variant="flat" 
                    size="lg"
                    className="font-bold text-lg px-6 py-3"
                >
                    November 22-23, 2025
                </Chip>
            </div>
        </div>
    </section>
);
