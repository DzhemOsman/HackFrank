import React from "react";

export const Section = ({ id, children }: { id?: string; children: React.ReactNode }) => (
    <section id={id} className="w-full py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
    </section>
);

