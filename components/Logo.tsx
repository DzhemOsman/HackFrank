import React from "react";

interface LogoProps {
  sizeClasses?: string;
}

export const Logo = ({ sizeClasses = "text-7xl md:text-8xl" }: LogoProps) => {
  return (
    <div className={`font-black leading-none ${sizeClasses}`}>
      <div
        className="relative text-cyan-300"
        style={{
          textShadow: "0.025em 0.025em 0px #0891b2, 0.05em 0.05em 0px #0e7490",
        }}
      >
        HACK
      </div>
      <div
        className="relative text-white"
        style={{
          textShadow: "0.025em 0.025em 0px #22d3ee, 0.05em 0.05em 0px #06b6d4",
        }}
      >
        FRANK
      </div>
    </div>
  );
};
