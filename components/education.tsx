import React from "react";
import { EducationCard } from "./custom/EducationCard";
import { DATA } from "@/data/resume";

export const Education = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:mt-48 mt-36 relative">
      <h2 className="heading_grad md:text-4xl text-3xl font-bold">education</h2>

      <div className="relative flex flex-col bg-dark border-2 border-card rounded-32 w-full">
        {/* Vertical Timeline Bar */}

        {DATA.education.map((education, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-8  ${
                index === 0 ? "h-1/2 top-1/2" : index === DATA.education.length - 1 ? "h-1/2 bottom-1/2" : "-top-[1px] -bottom-[2px]"
              } -my-1 w-[1.5px] bg-card rounded-full`}
            />
            {/* Timeline Dot */}
            <div
              className={`absolute -left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-card 
                            ${index === 0 ? "bg-accent shadow-ultraGlow w-4 h-4" : "bg-dark w-3 h-3"}`}
            />
            <EducationCard educationDetails={{ ...education, idx: index }} />
          </div>
        ))}
      </div>
    </div>
  );
};
