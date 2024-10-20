import React from 'react'
import { FloatingNav } from './ui/floating-navbar';

export const Navbar = () => {
  // return (
  //   <div className='absolute text-white top-12 z-30 text-sm font-light flex items-center gap-10 card_grad border-dark-400 border-[1px] border-opacity-80 rounded-full py-4 px-11' >

  //       <a href="#" className='hover:text-accent transition-all duration-200 ease-linear'>About</a>
  //       <a href="#" className='hover:text-accent transition-all duration-200 ease-linear'>Projects</a>
  //       <a href="#" className='hover:text-accent transition-all duration-200 ease-linear'>Why me?</a>
  //       <a href="#" className='hover:text-accent transition-all duration-200 ease-linear'>Contact</a>

  //   </div>
  // )


  const navItems = [
    {
      name: "About",
      link: "#",
      icon: <></>,
    },
    {
      name: "Projects",
      link: "/about",
      icon: <></>,
    },
    {
      name: "Why me?",
      link: "/contact",
      icon: (
        <></>
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <></>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems}
        className='text-sm text-white text-center font-light card_grad border-dark-400 border-[1px] border-opacity-80 py-4 px-10'
      />
    </div>
  )

}
