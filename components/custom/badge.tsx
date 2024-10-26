"use client"
import React from 'react'

interface BadgeProps {
    label: string
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
    return (
        <div className='card_grad rounded-full text-white text-[15px] px-6 py-[6px]'>
            {label}
        </div>
    )
}
