"use client";
import React, { useState } from 'react'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact, FaWordpress } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { RiNextjsFill, RiSeoLine, RiTailwindCssFill, RiUserReceivedFill } from 'react-icons/ri'
import { IoRocketSharp } from 'react-icons/io5';
import { MdAppShortcut } from 'react-icons/md';
import { TbBulbFilled, TbReportSearch } from 'react-icons/tb';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { PiChartLineUpBold } from 'react-icons/pi';
import { EducationTimeline } from '@/components/EducationTimeline'

export const About = () => {


  const [aboutTab, setAboutTab] = useState(0)
  const [skillTab, setSkillTab] = useState(0)





  return (
    <div className='text-white-400 max-w-[1120px] w-full max-sm:px-4 pt-10 py-20 '>

      <h2 className='font-extrabold -tracking-[1px] leading-[60px] text-[42px] text-white-100 font-secondary text-center'>Let's <span className='text-accent'>Dive</span> In!</h2>

      <div className="flex justify-between w-full gap-8 mt-24">
        
        <div className="flex flex-col items-center gap-8 px-8 py-10 h-fit w-3/12 card_grad rounded-[32px] sticky top-0">

          <div onClick={() => setAboutTab(0)} className={`${aboutTab === 0 ? 'bg-accent text-dark shadow-glow' : 'bg-transparent hover:bg-accent hover:text-dark text-white-400 hover:shadow-glow'} text-center px-6 py-3 w-full rounded-full font-bold cursor-pointer transition-all duration-150`}>Skills</div>
          <div onClick={() => setAboutTab(1)} className={`${aboutTab === 1 ? 'bg-accent text-dark shadow-glow' : 'bg-transparent hover:bg-accent hover:text-dark text-white-400 hover:shadow-glow'} text-center px-6 py-3 w-full rounded-full font-bold cursor-pointer transition-all duration-150`}>Education</div>
          <div onClick={() => setAboutTab(2)} className={`${aboutTab === 2 ? 'bg-accent text-dark shadow-glow' : 'bg-transparent hover:bg-accent hover:text-dark text-white-400 hover:shadow-glow'} text-center px-6 py-3 w-full rounded-full font-bold cursor-pointer transition-all duration-150`}>Experience</div>
          <div onClick={() => setAboutTab(3)} className={`${aboutTab === 3 ? 'bg-accent text-dark shadow-glow' : 'bg-transparent hover:bg-accent hover:text-dark text-white-400 hover:shadow-glow'} text-center px-6 py-3 w-full rounded-full font-bold cursor-pointer transition-all duration-150`}>About Me</div>

        </div>



        {aboutTab === 0 && <div className="flex flex-col items-center gap-8 w-9/12 rounded-[32px]">

          <div className="flex justify-between w-full gap-4">

            <div onClick={() => setSkillTab(0)} className={`${skillTab === 0 ? 'fancy_grad_bg' : 'hover:fancy_grad_bg'} text-white w-full px-6 py-3 rounded-full font-bold cursor-pointer text-center`}>Web Development</div>
            <div onClick={() => setSkillTab(1)} className={`${skillTab === 1 ? 'fancy_grad_bg' : 'hover:fancy_grad_bg'} text-white w-full px-6 py-3 rounded-full font-bold cursor-pointer text-center`}>Product Building</div>
            <div onClick={() => setSkillTab(2)} className={`${skillTab === 2 ? 'fancy_grad_bg' : 'hover:fancy_grad_bg'} text-white w-full px-6 py-3 rounded-full font-bold cursor-pointer text-center`}>Business and Marketing</div>


          </div>


          {skillTab === 0 &&
            <div className="grid grid-cols-4 w-full gap-6">

              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaHtml5 className='text-4xl' />
                <div className=''>HTML</div>
              </div>


              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaCss3Alt className='text-4xl' />
                <div className=''>CSS</div>
              </div>

              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <SiJavascript className='text-4xl' />
                <div className=''>JavaScript</div>
              </div>

              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <SiTypescript className='text-4xl' />
                <div className=''>TypeScript</div>
              </div>

              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaReact className='text-4xl' />
                <div className=''>React</div>
              </div>


              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <RiNextjsFill className='text-4xl' />
                <div className=''>NextJS</div>
              </div>


              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <RiTailwindCssFill className='text-4xl' />
                <div className=''>TailwindCSS</div>
              </div>


              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_48_124)">
                    <path d="M38.6279 25.4906V33.9874H17.0381C10.7481 33.9874 5.25604 30.5702 2.31768 25.4906C1.89052 24.7521 1.51666 23.9774 1.20305 23.1733C0.587412 21.5975 0.200419 19.9066 0.0830078 18.1423V15.8451C0.108498 15.4519 0.148665 15.0618 0.201191 14.6764C0.308561 13.8854 0.470774 13.1114 0.683968 12.3591C2.70081 5.22632 9.25885 0 17.0381 0C24.8174 0 31.3746 5.22632 33.3915 12.3591H24.16C22.6445 10.034 20.0213 8.49688 17.0381 8.49688C14.0549 8.49688 11.4317 10.034 9.91619 12.3591C9.45428 13.0659 9.09585 13.8453 8.86104 14.6764C8.65246 15.4133 8.54124 16.1904 8.54124 16.9937C8.54124 19.4292 9.5655 21.6245 11.2077 23.1733C12.7294 24.6108 14.781 25.4906 17.0381 25.4906H38.6279Z" fill="#CCCECD" />
                    <path d="M38.6279 14.6765V23.1733H22.8685C24.5108 21.6246 25.535 19.4293 25.535 16.9938C25.535 16.1905 25.4238 15.4134 25.2152 14.6765H38.6279Z" fill="#CCCECD" />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_124">
                      <rect width="38.8571" height="36" fill="white" transform="translate(0.0830078)" />
                    </clipPath>
                  </defs>
                </svg>

                <div className=''>Appwrite</div>
              </div>


              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaFigma className='text-4xl' />
                <div className=''>UI/UX Design</div>
              </div>


              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaGithub className='text-4xl' />
                <div className=''>Git/GitHub</div>
              </div>
              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaBootstrap className='text-4xl' />
                <div className=''>Bootstrap</div>
              </div>
              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaWordpress className='text-4xl' />
                <div className=''>WordPress</div>
              </div>


            </div>
          }


          {skillTab === 1 &&
            <div className="grid grid-cols-2 w-full gap-6">

              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <IoRocketSharp className='text-4xl' />
                <div className=''>Product Strategy</div>
              </div>


              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <MdAppShortcut className='text-4xl' />
                <div className=''>MVP Development</div>
              </div>

              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <TbBulbFilled className='text-4xl' />
                <div className=''>Problem Solving</div>
              </div>

              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <FaHandshakeSimple className='text-4xl' />
                <div className=''>Entrepreneurial Mindset</div>
              </div>

            </div>
          }


          {skillTab === 2 &&
            <div className="grid grid-cols-2 w-full gap-6">

              <div className="card_grad text-white-400 group flex-col flex justify-center items-center gap-2 p-5 rounded-[32px]">
                <PiChartLineUpBold className='text-4xl' />
                <div className=''>SEO (Search Engine Optimization)</div>
              </div>


              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <TbReportSearch className='text-4xl' />
                <div className=''>Market Research and Analysis</div>
              </div>

              <div className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-5 rounded-[32px]">
                <RiUserReceivedFill className='text-4xl' />
                <div className=''>Digital Marketing</div>
              </div>

            </div>
          }


        </div>}


        {aboutTab === 1 &&
          <div className='w-9/12'>
            <EducationTimeline />
          </div>
        }

      </div>


    </div>
  )
}
