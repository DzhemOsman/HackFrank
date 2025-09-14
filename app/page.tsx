import { Divider } from "@heroui/divider";
import React from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { GoalSection } from "@/components/landing/GoalSection";
import { ScheduleSection } from "@/components/landing/ScheduleSection";
import { CasesSection } from "@/components/landing/CasesSection";
import { TrackRecordSection } from "@/components/landing/TrackRecordSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Divider className="my-4" />
            <GoalSection />
            <Divider className="my-4" />
            <ScheduleSection />
            <Divider className="my-4" />
            <CasesSection />
            <Divider className="my-4" />
            <TrackRecordSection />
        </>
    );
}