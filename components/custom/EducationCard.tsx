import { DATA } from '@/data/resume'
import { LiaUniversitySolid } from "react-icons/lia";
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { GoDotFill } from "react-icons/go";

interface ExperienceCardProps {
    educationDetails: {
        idx: number,
        title: string,
        school: string,
        location: string,
        start: string,
        end: string
    }
}

export const EducationCard: React.FC<ExperienceCardProps> = ({ educationDetails }) => {
    return (
        <div>
            <div className={`flex flex-col gap-2 text-white-100 p-10 w-full ${DATA.education.length - 1 !== educationDetails.idx ? 'border-b-2 border-card' : ''}`}>
                <div className="flex justify-between items-center">

                    <h3 className="text-white text-xl font-bold max-w-[80%]">{educationDetails.title}</h3>

                    <div className="flex items-center text-accent text-[15px] font-medium">
                        <span className="">{educationDetails.start} - {educationDetails.end}</span>
                    </div>
                </div>
                <div className="flex gap-x-4 gap-y-2 flex-wrap items-center">
                    <div className='flex gap-2 items-center'><LiaUniversitySolid /><span>{educationDetails.school}</span></div>
                    <GoDotFill className='text-[8px]' />
                    <div className='flex gap-2 items-center'><FaLocationDot /><span>{educationDetails.location}</span></div>
                </div>



            </div>
        </div>
    )
}
