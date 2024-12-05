"use client";

import { DATA } from '@/data/resume';
import React from 'react'
import { Badge } from './custom/badge';

export const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-12 md:mt-48 mt-36'>
      <h2 className='heading_grad md:text-4xl text-3xl font-bold'>skills</h2>


      <div className="flex flex-col shadow-ultraGlow border-card border-2 rounded-32 text-white-100">

        <div className="flex flex-col gap-4 w-full items-start md:p-10 p-6">
          <h3 className='fancy_grad_text text-2xl font-bold lowercase'>{DATA.skills[0].title}</h3>
          <div className='text-white-100 max-md:text-[15px]'>
            {DATA.skills[0].description}
          </div>
          <h4 className='text-[15px] bold-text'>Primary tech stack</h4>


          <div className="flex flex-wrap gap-3">
            {DATA.skills[0].tags.map((item, index) => (<Badge key={index} label={item} />))}
          </div>
        </div>

        <div className='h-[1px] w-full bg-card shadow-glow'></div>

        <div className="grid md:grid-cols-2 grid-cols-1">

          <div className="flex flex-col gap-4 w-full items-start md:p-10 p-6 md:border-r-2 border-card">
            <h3 className='fancy_grad_text text-2xl font-bold lowercase'>{DATA.skills[1].title}</h3>
            <div className='text-white-100 max-md:text-[15px]'>
              {DATA.skills[1].description}
            </div>

            <div className="flex flex-wrap gap-3">
              {DATA.skills[1].tags.map((item, index) => (<Badge key={index} label={item} />))}
            </div>
          </div>

          <div className='md:hidden h-[1px] w-full bg-card shadow-glow'></div>


          <div className="flex flex-col gap-4 w-full items-start md:p-10 p-6">
            <h3 className='fancy_grad_text text-2xl font-bold lowercase'>{DATA.skills[2].title}</h3>
            <div className='text-white-100 max-md:text-[15px]'>
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
