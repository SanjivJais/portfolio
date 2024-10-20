import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { HoverBorderGradient } from './ui/hover-border-gradient'

export const Hero = () => {
    return (
        <div className='pb-20 pt-52 max-w-[1120px] w-full max-sm:px-4'>
            <div className=''>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
                    fill="#ffffff30"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full rotate-90 z-10"
                    fill="#ffffff30"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw] z-10"
                    fill="#ffffff30"
                />
            </div>
            <div className="absolute top-0 left-0 z-[4] h-screen w-full bg-transparent bg-grid-[#222E2D]/[0.07] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>


            <div className='flex flex-col'>
                <h2 className='text-4xl text-white z-30'>Hello, I'm</h2>
                <h2 className='font-secondary text-5xl font-bold text-accent mt-2 z-30'>Sanjiv Jaiswal</h2>
                <p className='text-white-400 mt-6 max-w-[500px] z-30'>An Entrepreneurial Web Developer, Building Real Products For the Real World.</p>
                <div className="flex gap-6 items-center z-30 mt-8">
                    <button className='bg-accent px-6 py-2 rounded-full w-fit font-bold shadow-glow'>Say Hi 👋</button>
                    {/* <button className='card_grad px-6 py-2 rounded-full w-fit text-white-400 flex items-center gap-1'><span>Download CV</span> <IoIosArrowRoundDown className='text-accent text-2xl' /></button> */}
                    <div className="flex justify-center text-center">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className=" card_grad text-white flex items-center space-x-2 border-dark-400 py-2 px-6"
                        >
                            <span>Download CV</span>
                            <IoIosArrowRoundDown className='text-accent text-2xl' />
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>

        </div>


    )
}
