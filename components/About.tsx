import { DATA } from '@/data/resume'
import React from 'react'

const About = () => {
  return (
    <div className=' flex flex-col items-center gap-12'>
      <h2 className='heading_grad text-4xl font-bold'>about</h2>


      <div className="text-center border-card border-2 rounded-32 px-10 py-7 text-white-100">
        {DATA.summary}
      </div>




    </div>
  )
}

export default About