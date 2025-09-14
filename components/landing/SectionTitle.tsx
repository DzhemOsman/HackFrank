import React from "react";

export const SectionTitle = ({ main, sub, isCentered = false }: { main: string; sub: string; isCentered?: boolean }) => (
    <h2 className={`text-4xl font-bold mb-6 ${isCentered ? 'text-center' : ''}`}>
        <span className="text-cyan-400">{main}</span> {sub}
    </h2>
);

