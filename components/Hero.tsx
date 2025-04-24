import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
import { DATA } from '@/data/resume'

export const Hero = () => {
    return (
        <div className='h-screen flex items-center max-w-[1120px] w-full max-sm:px-4'>
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


            <div className='flex flex-col w-full items-center justify-center text-center mb-10'>


                {/* <div className='w-fit h-fit gap-1 fancy_grad_bg p-[0.8px] rounded-full  mb-10  z-40 cursor-pointer'>
                    <Link href={"https://moneybinds.com/"} target='_blank' className='group flex gap-1 items-center rounded-full text-white-400 bg-dark px-6 py-2 text-sm font-normal'>
                        <span>🎉 Check Out My New MVP!</span>
                        <FaArrowRightLong className=' transform group-hover:translate-x-1 transition-all duration-150' />
                    </Link>
                </div> */}

                <Image
                    src={`${DATA?.avatarUrl}`}
                    alt={`${DATA?.name}`}
                    width={132}
                    height={132}
                    className='rounded-full border-2 border-white-100 aspect-square object-cover object-top z-40 mb-2'
                />

                <h2 className='md:text-[44px] text-[38px] font-extrabold text-white z-30'>hi, i&apos;m sanjiv👋</h2>
                <div className='text-white-400 max-md:text-[15px] mt-3 max-w-[500px] z-30'>{DATA?.description}</div>
                <div className="flex gap-6 items-center z-30 mt-8">
                    <div className="flex justify-center text-center">
                        <Link
                            href={DATA?.cvDownloadLink}
                            target="_blank">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className=" card_grad text-white flex items-center space-x-2 border-dark-400 py-2 px-6"
                            >
                                <span>Ask For Resume</span>
                                <IoIosArrowRoundDown className='text-accent text-2xl -rotate-[135deg]' />
                            </HoverBorderGradient>
                        </Link>
                    </div>
                </div>
            </div>

        </div >


    )
}
