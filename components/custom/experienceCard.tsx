import { DATA } from '@/data/resume'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

interface ExperienceCardProps {
    experienceDetails: {
        idx: number,
        company: string,
        href: string | null,
        badges: readonly string[],
        location: string,
        title: string,
        logoUrl: string,
        start: string,
        end: string
        description: React.ReactNode
    }
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experienceDetails }) => {
    return (
        <div>
            <div className={`flex flex-col gap-4 text-white-100 p-10 w-full ${DATA.experience.length - 1 !== experienceDetails.idx ? 'border-b-2 border-card' : ''}`}>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <div className="relative">
                            <Image
                                src={experienceDetails.logoUrl}
                                alt={experienceDetails.company}
                                width={25}
                                height={25}
                            />
                        </div>
                        <h3 className="text-white text-xl font-bold ml-4">{experienceDetails.title} {experienceDetails.company && <>at</>} {experienceDetails.href && experienceDetails.company? <Link href={experienceDetails.href} target="_blank" className="text-accent group inline-flex items-center gap-1">{experienceDetails.company} <MdArrowOutward className='transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150' /></Link>: experienceDetails.company} </h3>
                    </div>

                    <div className="flex items-center text-accent text-[15px] font-medium">
                        {/* <FaCalendar /> */}
                        <span className="ml-2 ">{experienceDetails.start} - {experienceDetails.end}</span>
                    </div>
                </div>
                <div>{experienceDetails.description}</div>


            </div>
        </div>
    )
}
