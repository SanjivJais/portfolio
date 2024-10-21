import React from 'react'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact, FaWordpress } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { ShineBorder } from './ui/ShineBorder'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { LinkPreview } from './ui/link-preview'

export const About = () => {

  return (
    <div className='text-white-400 max-w-[1120px] w-full max-sm:px-4 py-20'>

      <h2 className='font-extrabold -tracking-[1px] leading-[60px] text-[42px] text-white-100 font-secondary text-center'>Let's <span className='text-accent'>Dive</span> In!</h2>

      <div className="flex justify-between w-full gap-8 mt-20">

        <div className="flex flex-col items-center gap-8 px-8 py-10 h-fit w-3/12 card_grad rounded-[32px]">

          {/* <div className="bg-accent text-dark px-6 py-3 rounded-full">Skills</div> */}
          <div className='bg-accent text-center text-dark px-6 py-3 w-full rounded-full font-bold cursor-pointer shadow-glow'>Skills</div>
          <div className='bg-transparent text-center text-white-400 px-6 py-3 w-full rounded-full font-bold cursor-pointer hover:shadow-glow transition-shadow duration-200'>Education</div>
          <div className='bg-transparent text-center text-white-400 px-6 py-3 w-full rounded-full font-bold cursor-pointer hover:shadow-glow transition-shadow duration-200'>Experience</div>
          <div className='bg-transparent text-center text-white-400 px-6 py-3 w-full rounded-full font-bold cursor-pointer hover:shadow-glow transition-shadow duration-200'>About Me</div>



        </div>


        <div className="flex flex-col items-center gap-8 w-9/12 rounded-[32px]">

          <div className="flex justify-between w-full gap-4">

            <div className='fancy_grad_bg text-white w-full px-6 py-3 rounded-full font-bold cursor-pointer text-center'>Web Development</div>
            <div className='hover:fancy_grad_bg text-white w-full px-6 py-3 rounded-full font-bold cursor-pointer text-center'>Product Building</div>
            <div className='hover:fancy_grad_bg text-white w-full px-6 py-3 rounded-full font-bold cursor-pointer text-center'>Business and Marketing</div>


          </div>

          <div className="flex flex-col gap-6 w-full">

            {/* First row */}
            <div className="flex justify-center items-center w-full gap-6">

              <ShineBorder
                className="card_grad text-white-400 group flex flex-col justify-center items-center w-3/12 gap-2 p-6 rounded-[32px]"
                color={["#07998C"]}
                duration={16}
                borderRadius={32}
              >
                <FaHtml5 className='text-5xl' />
                <div className=''>HTML</div>
              </ShineBorder>


              <ShineBorder
                className="card_grad text-white-400 group flex flex-col justify-center items-center w-3/12 gap-2 p-6 rounded-[32px]"
                color={["#07998C"]}
                duration={16}
                borderRadius={32}
              >
                <FaCss3Alt className='text-5xl' />
                <div className=''>CSS</div>
              </ShineBorder>

              <ShineBorder
                className="card_grad text-white-400 group flex flex-col justify-center items-center w-3/12 gap-2 p-6 rounded-[32px]"
                color={["#07998C"]}
                duration={16}
                borderRadius={32}
              >
                <SiJavascript className='text-5xl' />
                <div className=''>JavaScript</div>
              </ShineBorder>

              <ShineBorder
                className="card_grad text-white-400 group flex flex-col justify-center items-center w-3/12 gap-2 p-6 rounded-[32px]"
                color={["#07998C"]}
                duration={16}
                borderRadius={32}
              >
                <SiTypescript className='text-5xl' />
                <div className=''>TypeScript</div>
              </ShineBorder>

            </div>


            {/* Second row */}

            <div className="flex justify-center items-center w-full gap-6">


              <LinkPreview
                url="https://react.dev/"
                className="w-6/12"
                quality={50}
              >

                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <FaReact className='text-5xl' />
                  <div className=''>React</div>
                </ShineBorder>

              </LinkPreview>

              <LinkPreview
                url="https://nextjs.org/"
                className="w-6/12"
                quality={50}
              >
                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <RiNextjsFill className='text-5xl' />
                  <div className=''>NextJS</div>
                </ShineBorder>

              </LinkPreview>


            </div>


            {/* Third row */}
            <div className="flex justify-center items-center w-full gap-6">

              <LinkPreview
                url="https://tailwindcss.com/"
                className="w-4/12"
                quality={50}
              >
                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center  gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <RiTailwindCssFill className='text-5xl' />
                  <div className=''>TailwindCSS</div>
                </ShineBorder>
              </LinkPreview>

              <LinkPreview
                url="https://appwrite.io/"
                className="w-4/12"
                quality={50}
              >
                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <svg width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_48_124)">
                      <path d="M38.6279 25.4906V33.9874H17.0381C10.7481 33.9874 5.25604 30.5702 2.31768 25.4906C1.89052 24.7521 1.51666 23.9774 1.20305 23.1733C0.587412 21.5975 0.200419 19.9066 0.0830078 18.1423V15.8451C0.108498 15.4519 0.148665 15.0618 0.201191 14.6764C0.308561 13.8854 0.470774 13.1114 0.683968 12.3591C2.70081 5.22632 9.25885 0 17.0381 0C24.8174 0 31.3746 5.22632 33.3915 12.3591H24.16C22.6445 10.034 20.0213 8.49688 17.0381 8.49688C14.0549 8.49688 11.4317 10.034 9.91619 12.3591C9.45428 13.0659 9.09585 13.8453 8.86104 14.6764C8.65246 15.4133 8.54124 16.1904 8.54124 16.9937C8.54124 19.4292 9.5655 21.6245 11.2077 23.1733C12.7294 24.6108 14.781 25.4906 17.0381 25.4906H38.6279Z" fill="#CCCECD" />
                      <path d="M38.6279 14.6765V23.1733H22.8685C24.5108 21.6246 25.535 19.4293 25.535 16.9938C25.535 16.1905 25.4238 15.4134 25.2152 14.6765H38.6279Z" fill="#CCCECD" />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_124">
                        <rect width="38.8571" height="48" fill="white" transform="translate(0.0830078)" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className=''>Appwrite</div>
                </ShineBorder>
              </LinkPreview>

              <LinkPreview
                url="https://www.figma.com/design/"
                className="w-4/12"
                quality={50}
              >
                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <FaFigma className='text-5xl' />
                  <div className=''>UI/UX Design</div>
                </ShineBorder>
              </LinkPreview>

            </div>


            {/* Fourth row */}
            <div className="flex justify-center items-center w-full gap-6">


              <ShineBorder
                className="card_grad text-white-400 group flex flex-col justify-center items-center w-4/12  gap-2 p-6 rounded-[32px]"
                color={["#07998C"]}
                duration={16}
                borderRadius={32}
              >
                <FaGithub className='text-5xl' />
                <div className=''>Git/GitHub</div>
              </ShineBorder>

              <LinkPreview
                url="https://getbootstrap.com/"
                className="w-4/12"
                quality={50}

              >
                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <FaBootstrap className='text-5xl' />
                  <div className=''>Bootstrap</div>
                </ShineBorder>
              </LinkPreview>


              <LinkPreview
                url="https://wordpress.org/showcase/"
                className="w-4/12"
                quality={50}

              >
                <ShineBorder
                  className="card_grad text-white-400 group flex flex-col justify-center items-center gap-2 p-6 rounded-[32px]"
                  color={["#EF0E7E", "#9138F0"]}
                  duration={16}
                  borderRadius={32}
                >
                  <FaWordpress className='text-5xl' />
                  <div className=''>WordPress</div>
                </ShineBorder>
              </LinkPreview>

            </div>




          </div>


        </div>

      </div>


    </div>
  )
}
