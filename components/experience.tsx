import { DATA } from '@/data/resume'
import React from 'react'
import { ExperienceCard } from './custom/experienceCard'

export const Experience = () => {
    return (
        <div className='flex flex-col items-center gap-8 mt-48'>
            <h2 className='heading_grad text-4xl font-bold'>experience</h2>

            <div className="flex flex-col bg-dark border-2 border-card rounded-32 w-full">
                {DATA.experience.map((experience, index) => (
                    <ExperienceCard key={index} experienceDetails={{ ...experience, idx: index }} />
                ))}

            </div>

        </div>
    )
}
