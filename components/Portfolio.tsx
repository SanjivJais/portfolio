import React from 'react'
import { ProjectCard } from './custom/projectCard'
import { DATA } from '@/data/resume'

export const Portfolio = () => {
  return (
    <div className='flex flex-col items-center gap-12 md:mt-48 mt-36'>
      <h2 id='projects' className='heading_grad md:text-4xl text-3xl font-bold'>my recent work</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-9 w-full">
        {DATA.projects.map((project, index) => (
          <ProjectCard key={index} projectDetails={project} />
        ))}

      </div>


    </div>
  )
}
