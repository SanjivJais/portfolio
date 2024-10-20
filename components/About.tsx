import React from 'react'

export const About = () => {
  return (
    <div className='text-white-400 max-w-[1120px] w-full max-sm:px-4 py-20'>

      <h2 className='font-extrabold -tracking-[1px] leading-[60px] text-[42px] text-white-100 font-secondary text-center'>Let's <span className='text-accent'>Dive</span> In!</h2>

      <div className="flex justify-between w-full gap-8 mt-20">

        <div className="flex flex-col items-center gap-8 px-8 py-10 w-3/12 card_grad rounded-[32px]">

          {/* <div className="bg-accent text-dark px-6 py-3 rounded-full">Skills</div> */}
          <div className='bg-accent text-center text-dark px-6 py-3 w-full rounded-full font-bold cursor-pointer shadow-glow'>Skills</div>
          <div className='bg-transparent text-center text-white-400 px-6 py-3 w-full rounded-full font-bold cursor-pointer hover:shadow-glow transition-shadow duration-200'>Education</div>
          <div className='bg-transparent text-center text-white-400 px-6 py-3 w-full rounded-full font-bold cursor-pointer hover:shadow-glow transition-shadow duration-200'>Experience</div>
          <div className='bg-transparent text-center text-white-400 px-6 py-3 w-full rounded-full font-bold cursor-pointer hover:shadow-glow transition-shadow duration-200'>About Me</div>



        </div>


      </div>
      

    </div>
  )
}
