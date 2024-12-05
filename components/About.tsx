import { DATA } from '@/data/resume'
import React from 'react'

const About = () => {
  return (
    <div className=' flex flex-col items-center gap-12'>
      <h2 className='heading_grad md:text-4xl text-3xl font-bold'>about</h2>


      <div className="text-center max-md:text-[15px] border-card border-2 rounded-32 md:px-10 px-8 md:py-7 py-5 text-white-100">
        {DATA.summary}
      </div>




    </div>
  )
}

export default About