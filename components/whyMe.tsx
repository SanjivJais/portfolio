"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function WhyMeRevealCanvas() {
  const [hoveredIndex, setHoveredIndex] = React.useState(1);
  return (
    <>
      <div className="flex flex-col items-center gap-12 md:mt-48 mt-36">
        <h2 className="heading_grad md:text-4xl text-3xl font-bold">why me?</h2>
        <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-4 mx-auto">
          <Card
            title={
              <p>
                I&apos;m Not Just a Developer, I&apos;m a Strategic{" "}
                <span className="fancy_grad_text font-bold">
                  Product Builder
                </span>
                .
              </p>
            }
            icon={<TargetIcon />}
            index={0}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-black"
              colors={[[7, 53, 140]]}
              dotSize={1.5}
            />
          </Card>
          <Card
            title={
              <p className="font-bold">
                I Can Do What <span className="fancy_grad_text font-bold">AI Can&apos;t</span>.
              </p>
            }
            icon={<RocketIcon />}
            index={1}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={1.5}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card
            title={
              <p>
                I&apos;m highly{" "}
                <span className="fancy_grad_text font-bold">Adaptive</span> and{" "}
                <span className="fancy_grad_text font-bold">Flexible</span>.
              </p>
            }
            icon={<EnergyIcon />}
            index={2}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-black"
              colors={[[125, 211, 252]]}
              dotSize={1.5}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

interface CardProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  children?: React.ReactNode;
  index: number;
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
}

const Card = ({
  title,
  icon,
  children,
  index,
  hoveredIndex,
  setHoveredIndex,
}: CardProps) => {
  const isHovered = hoveredIndex === index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(1)}
      className={`${
        isHovered ? "shadow-ultraGlow" : ""
      } whyMeCard border-2 border-card rounded-32 group/canvas-card flex items-center justify-center bg-dark max-w-sm w-full mx-auto p-4 relative md:h-[30rem] h-[20rem]`}
    >
      {isHovered && (
        <Icon className="absolute h-6 w-6 -top-5 -left-5 text-white-100" />
      )}
      {isHovered && (
        <Icon className="absolute h-6 w-6 -bottom-5 -left-5 text-white-100" />
      )}
      {isHovered && (
        <Icon className="absolute h-6 w-6 -top-5 -right-5 text-white-100" />
      )}
      {isHovered && (
        <Icon className="absolute h-6 w-6 -bottom-5 -right-5 text-white-100" />
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div
          className={` ${
            isHovered ? "opacity-0 -translate-y-4" : "opacity-100"
          } absolute top-[10%] left-[50%] transform -translate-x-1/2 translate-y-1/2 transition-all duration-200 `}
        >
          {icon}
        </div>
        <h2
          className={`text-white lg:text-[22px] text-lg text-center  ${
            isHovered
              ? "canvas-card:opacity-100 canvas-card:text-white canvas-card:-translate-y-2"
              : "opacity-0"
          }  relative z-10 font-bold  transition duration-200`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

const TargetIcon = () => {
  return (
    <svg
      width="44"
      height="43"
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4548 5.38129C22.3037 5.3771 22.1521 5.375 22 5.375C13.0944 5.375 5.875 12.5944 5.875 21.5C5.875 30.4056 13.0944 37.625 22 37.625C30.9056 37.625 38.125 30.4056 38.125 21.5C38.125 21.3479 38.1228 21.1963 38.1188 21.0452L42.8663 16.2976C43.2802 17.9634 43.5 19.7061 43.5 21.5C43.5 33.3742 33.8742 43 22 43C10.1259 43 0.5 33.3742 0.5 21.5C0.5 9.62587 10.1259 0 22 0C23.7939 0 25.5366 0.21971 27.2024 0.633688L22.4548 5.38129Z"
        fill="url(#paint0_linear_207_200)"
      />
      <path
        d="M11.25 21.5002C11.25 16.4911 14.6759 12.2822 19.3125 11.0889V16.8443C17.7059 17.7736 16.625 19.5107 16.625 21.5002C16.625 24.4687 19.0315 26.8752 22 26.8752C23.9895 26.8752 25.7266 25.7943 26.6559 24.1877H32.4114C31.2179 28.8243 27.0091 32.2503 22 32.2503C16.0629 32.2503 11.25 27.4373 11.25 21.5002Z"
        fill="url(#paint1_linear_207_200)"
      />
      <path
        d="M38.125 5.375L35.4375 0L27.375 8.0625V12.3243L21.4434 18.2559L25.2441 22.0566L31.1756 16.125H35.4375L43.5 8.0625L38.125 5.375Z"
        fill="url(#paint2_linear_207_200)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_207_200"
          x1="0.5"
          y1="21.5"
          x2="43.5"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_207_200"
          x1="11.25"
          y1="21.6696"
          x2="32.4114"
          y2="21.6696"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_207_200"
          x1="21.4434"
          y1="11.0283"
          x2="43.5"
          y2="11.0283"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const RocketIcon = () => {
  return (
    <svg
      width="44"
      height="43"
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6236 8.52064L10.1559 13.972C9.15089 14.9739 8.22895 15.8931 7.50088 16.7239C7.03332 17.2574 6.56608 17.8416 6.17031 18.4868L6.11704 18.4337C6.0159 18.3329 5.96529 18.2823 5.91451 18.2331C4.96415 17.311 3.84626 16.5779 2.62066 16.0729C2.55517 16.0459 2.48869 16.0196 2.35574 15.9669L1.54165 15.6443C0.438787 15.2073 0.144862 13.7876 0.984046 12.9509C3.39249 10.5498 6.28416 7.66686 7.67969 7.08782C8.91043 6.57718 10.2399 6.40727 11.5222 6.59677C12.6971 6.7704 13.8086 7.3739 15.6236 8.52064Z"
        fill="url(#paint0_linear_207_208)"
      />
      <path
        d="M24.9598 37.2226C25.4003 37.6698 25.6929 37.9856 25.9576 38.3232C26.3065 38.7684 26.6187 39.2417 26.8907 39.7374C27.1968 40.2958 27.4346 40.8922 27.9102 42.085C28.2972 43.0562 29.5833 43.3129 30.3302 42.5681L30.5108 42.388C32.9193 39.9866 35.8108 37.1037 36.3915 35.7125C36.9038 34.4852 37.0741 33.1598 36.884 31.8814C36.7099 30.7101 36.1049 29.6022 34.9549 27.793L29.469 33.2625C28.441 34.2872 27.4987 35.227 26.6464 35.9629C26.1356 36.4041 25.5768 36.8451 24.9598 37.2226Z"
        fill="url(#paint1_linear_207_208)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.2603 30.9102L39.8308 18.3772C41.6413 16.5723 42.5465 15.6699 43.0231 14.5223C43.5 13.3747 43.5 12.0984 43.5 9.54587V8.32641C43.5 4.40131 43.5 2.43875 42.2769 1.21937C41.054 2.56299e-07 39.0854 0 35.1486 0H33.9254C31.3652 0 30.0851 1.92224e-07 28.934 0.475363C27.7829 0.950725 26.8778 1.85318 25.0675 3.65812L12.4967 16.1911C10.3813 18.3001 9.06966 19.6079 8.56173 20.871C8.40125 21.2701 8.32101 21.6648 8.32101 22.0787C8.32101 23.8032 9.71291 25.191 12.4967 27.9664L12.8709 28.3394L17.2537 23.8913C17.8788 23.2569 18.8996 23.2493 19.5341 23.8743C20.1683 24.4993 20.1758 25.5204 19.5508 26.1548L15.1548 30.6165L15.4494 30.9102C18.2333 33.6858 19.6252 35.0734 21.3549 35.0734C21.7369 35.0734 22.1027 35.0057 22.4705 34.8702C23.7676 34.3925 25.0916 33.0724 27.2603 30.9102ZM33.1659 16.192C31.5351 17.8178 28.8912 17.8178 27.2605 16.192C25.6297 14.5662 25.6297 11.9302 27.2605 10.3043C28.8912 8.67849 31.5351 8.67849 33.1659 10.3043C34.7966 11.9302 34.7966 14.5662 33.1659 16.192Z"
        fill="url(#paint2_linear_207_208)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_207_208"
          x1="0.499992"
          y1="12.5041"
          x2="15.6236"
          y2="12.5041"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_207_208"
          x1="24.9598"
          y1="35.3963"
          x2="36.9596"
          y2="35.3963"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_207_208"
          x1="8.32101"
          y1="17.5367"
          x2="43.5"
          y2="17.5367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const EnergyIcon = () => {
  return (
    <svg
      width="32"
      height="43"
      viewBox="0 0 32 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.15 15.05H31.05L7.40001 43L13.85 21.5H0.950012L11.7 0H26.75L18.15 15.05Z"
        fill="url(#paint0_linear_267_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_267_3"
          x1="0.950012"
          y1="21.5"
          x2="31.05"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EF0E7E" />
          <stop offset="1" stop-color="#9138F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
