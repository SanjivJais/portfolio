import React from 'react'
import { ProjectCard } from './custom/projectCard'

export const Portfolio = () => {
  return (
    <div className='flex flex-col items-center gap-12 mt-48 mb-48'>
      <h2 className='heading_grad text-4xl font-bold'>my recent work</h2>

      <div className="grid grid-cols-2 gap-9 w-full">
        <ProjectCard />
        <ProjectCard />

      </div>


    </div>
  )
}
