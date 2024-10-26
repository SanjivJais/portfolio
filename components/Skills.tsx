"use client";

import { DATA } from '@/data/resume';
import React from 'react'
import { Badge } from './custom/badge';

export const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-12 mt-48'>
      <h2 className='heading_grad text-4xl font-bold'>skills</h2>


      <div className="flex flex-col shadow-ultraGlow border-card border-2 rounded-32 text-white-100">

        <div className="flex flex-col gap-4 w-full items-start p-10">
          <h3 className='fancy_grad_text text-2xl font-bold lowercase'>{DATA.skills[0].title}</h3>
          <div className='text-white-100'>
            {DATA.skills[0].description}
          </div>
          <h4 className='text-[15px] bold-text'>Primary tech stack</h4>


          <div className="flex flex-wrap gap-3">
            {DATA.skills[0].tags.map((item, index) => (<Badge key={index} label={item} />))}
          </div>
        </div>

        <div className='h-[1px] w-full bg-card shadow-glow'></div>

        <div className="grid grid-cols-2">

          <div className="flex flex-col gap-4 w-full items-start p-10 border-r-2 border-card">
            <h3 className='fancy_grad_text text-2xl font-bold lowercase'>{DATA.skills[1].title}</h3>
            <div className='text-white-100'>
              {DATA.skills[1].description}
            </div>

            <div className="flex flex-wrap gap-3">
              {DATA.skills[1].tags.map((item, index) => (<Badge key={index} label={item} />))}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full items-start p-10">
            <h3 className='fancy_grad_text text-2xl font-bold lowercase'>{DATA.skills[2].title}</h3>
            <div className='text-white-100'>
              {DATA.skills[2].description}
            </div>

            <div className="flex flex-wrap gap-3">
              {DATA.skills[2].tags.map((item, index) => (<Badge key={index} label={item} />))}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
