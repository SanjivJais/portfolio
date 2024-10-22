import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function EducationTimeline() {
    const data = [
        {
            content: (
                <div className="card_grad p-5 rounded-[32px] w-full">
                    <div className="text-accent font-semibold">2022 – 2026</div>
                    <h3 className="text-white font-bold my-2 text-xl">Bachelor in BSc.CSIT</h3>
                    <div className="flex gap-1 items-center text-white-100 mb-2 text-xs md:text-sm ">
                        <FaUniversity className="text-sm" />
                        <p className="font-normal">Tribhuvan University</p>
                    </div>
                    <div className="flex gap-1 items-center text-white-100 mb-2 text-xs md:text-sm ">
                        <FaLocationDot className="text-sm" />
                        <p className="font-normal">Asian School of Management and Technology, Gongabu, Kathmandu, Nepal</p>
                    </div>

                </div>
            ),
        },


    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
