import Image from 'next/image'
import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { MdArrowOutward } from "react-icons/md";
import { DATA } from '@/data/resume';
import Link from 'next/link';

interface ProjectCardProps {
    projectDetails: {
        title: string;
        description: React.ReactElement;
        image: string;
        link: string;
        active: boolean;
        video: string;
        technologies: string[] | ReadonlyArray<string>;
    }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectDetails }) => {

    return (
        <div className='flex flex-col gap-4 w-full border-2 border-card p-6 rounded-32 bg-dark shadow-ultraGlow'>

            <div className='relative aspect-[1.6] '>
                <Image
                    src={projectDetails.image}
                    alt={projectDetails.title}
                    fill
                    className='object-cover rounded-32'
                />
            </div>

            <h3 className='text-white text-2xl font-bold mt-4'>{projectDetails.title}</h3>

            {projectDetails.description}

            <div className="flex items-center justify-between">
                <AnimatedTooltip items={DATA.technologies.filter((tech: { id: string, name: string, image: string }) => projectDetails.technologies.includes(tech.id))} />
                <Link href={projectDetails.link} target='_blank' className='flex items-center gap-2 cursor-pointer group'><span className='fancy_grad_text'>Check live </span><MdArrowOutward className='text-white-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150' /></Link>
            </div>

        </div>
    )
}
