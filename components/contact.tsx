"use client"

import React from 'react'
import { FaRegCopy } from 'react-icons/fa6'
import toast, { Toaster } from "react-hot-toast";
import { DATA } from '@/data/resume';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

export const Contact = () => {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(DATA.contact.email);
            toast('Email copied!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        border: '1px solid #1B2624',
                        background: '#111313',
                        color: '#07998C',
                    },
                }
            );
        } catch (err) {
            toast.error("Failed to copy!: " + err);
        }
    };

    return (
        <div className='flex flex-col items-center gap-8 md:my-48 my-36'>
            <h2 className='heading_grad md:text-4xl text-3xl font-bold'>get in touch</h2>


            <p className='text-white-100 text-center max-w-xl'>Whether you&apos;re looking to collaborate or have a great opportunity in mind, <span className='bold-text'>let&apos;s connect</span> and make things happen!</p>

            <div className="flex flex-col gap-4 items-center mt-3">
                <h3 className='fancy_grad_text md:text-xl text-lg'>Email me on</h3>
                <div className="card_grad text-white-400 flex items-center gap-4 px-6 py-2 rounded-full border-2 border-card">
                    <span>{DATA.contact.email}</span>
                    <FaRegCopy onClick={handleCopy} title='Copy email' className='text-accent cursor-pointer ' />

                </div>
                <Toaster position="bottom-right" reverseOrder={false} />
            </div>

            <div className="flex flex-col gap-4 items-center mt-3">
                <h3 className='fancy_grad_text md:text-xl text-lg'>OR, DM me on</h3>
                <div className="flex items-center gap-8">
                    <Link href={DATA.contact.social.LinkedIn.url} className='flex items-center gap-2 group text-white cursor-pointer'><span>LinkedIn</span><MdArrowOutward className='text-white-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150' /></Link>
                    <Link href={DATA.contact.social.X.url} className='flex items-center gap-2 group text-white cursor-pointer'><span>X (Twitter)</span><MdArrowOutward className='text-white-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150' /></Link>
                </div>
            </div>




        </div>
    )
}
