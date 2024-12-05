import React from 'react'
import { EducationCard } from './custom/EducationCard'
import { DATA } from '@/data/resume'

export const Education = () => {
    return (
        <div className='flex flex-col items-center gap-8 md:mt-48 mt-36'>
            <h2 className='heading_grad md:text-4xl text-3xl font-bold'>education</h2>

            <div className="flex flex-col bg-dark border-2 border-card rounded-32 w-full">
                {DATA.education.map((education, index) => (
                    <EducationCard key={index} educationDetails={{ ...education, idx: index }} />
                ))}

            </div>

        </div>
    )
}
