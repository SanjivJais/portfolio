"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  projectDetails: {
    title: string;
    description: React.ReactElement;
    image: string;
    link: string;
    active: boolean;
    video: string;
    technologies: string[] | ReadonlyArray<string>;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full border-2 border-card p-6 rounded-32 bg-dark shadow-ultraGlow">
      <div className="relative aspect-[1.6] ">
        <Image
          src={projectDetails.image}
          alt={projectDetails.title}
          fill
          className="object-cover rounded-32"
        />
      </div>

      <h3 className="text-white text-2xl font-bold mt-4">
        {projectDetails.title}
      </h3>

      {projectDetails.description}

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 fancy_grad_text group cursor-pointer"
          >
            <span className="group-hover:underline">Tech Stack</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/80 group-hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.div>
          </button>
          <Link
            href={projectDetails.link}
            target="_blank"
            className="flex text-sm items-center gap-2 cursor-pointer group px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <span className="text-white font-medium">See Live</span>
            <MdArrowOutward className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150" />
          </Link>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-2">
                <TooltipProvider>
                  {projectDetails.technologies.map((techId) => {
                    const tech = DATA.technologies.find((t) => t.id === techId);
                    if (!tech) return null;
                    return (
                      <Tooltip key={techId}>
                        <TooltipTrigger asChild>
                          <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80 hover:bg-white/20 transition-colors cursor-default">
                            {tech.name}
                          </span>
                        </TooltipTrigger>
                        {tech.description && (
                          <TooltipContent className="bg-dark border border-white/10 text-white/80">
                            <p>{tech.description}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
