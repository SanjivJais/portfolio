import Image from 'next/image'
import React from 'react'

export const ProjectCard = () => {
    return (
        <div className='flex flex-col gap-4 w-full border-2 border-card p-6 rounded-32 bg-dark shadow-ultraGlow'>

            <div className='w-[392px] h-auto rounded-32'>

                <Image
                    src="/project-thumbs/demo.png"
                    alt="Project 1"
                    width={392}
                    height={233}
                    className='object-cover'
                />
            </div>

        </div>
    )
}
