import Image from 'next/image'
import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { MdArrowOutward } from "react-icons/md";

export const ProjectCard = () => {

    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image:
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
    ];


    return (
        <div className='flex flex-col gap-4 w-full border-2 border-card p-6 rounded-32 bg-dark shadow-ultraGlow'>

            <div className='relative aspect-[1.6] '>
                <Image
                    src="/project-thumbs/demo.png"
                    alt="Project 1"
                    fill
                    className='object-cover rounded-32'
                />
            </div>

            <h3 className='text-white text-2xl font-bold mt-4'>Moneybinds Web App</h3>

            <p className='text-white-100 text-[15px]'>A simple yet powerful personal money management app desgined to reduce complexity and make it easier to manage your money.</p>

            <div className="flex items-center justify-between">

                <AnimatedTooltip items={people} />

                <div className='flex items-center gap-2 cursor-pointer group'><span className='fancy_grad_text'>Check live </span><MdArrowOutward className='text-white-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150' /></div>

            </div>

        </div>
    )
}
