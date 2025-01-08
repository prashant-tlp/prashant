'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { NavData } from '@/Data/Navbar';
import { HiMiniBars3BottomRight, HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CiLogin, CiDark } from "react-icons/ci";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [login, setLogin] = useState(true);

  return (
    <nav className="justify-around  items-center   md:flex gap-2 w-full  ">
      <div className='flex justify-between '>
        <span className='font-sans text-2xl md:text-3xl neon-text'>
          <Link href={`/`} onClick={() => { setNavOpen(true) }}>PRASHANT</Link>
        </span>
        <button className='md:hidden text-right text-2xl md:text-3xl ' onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <HiMiniBars3BottomRight /> : <HiMiniBars3BottomLeft />}
        </button>

      </div>
      <span className='sm:px-4 sm:rounded-full bg-transparent sm:bg-foreground text-background flex'>
        <ul className={`text-left fixed items-center bg-foreground w-full md:w-auto md:static md:bg-transparent z-30 flex-col  text-2xl md:text-xl ${navOpen ? 'hidden' : 'block'} md:flex  md:flex-row gap-10 text-pretty font-semibold`}>

          {NavData.map((e: any, i: any) => (
            <li key={i} className='sm:hover:text-orange-400 w-full sm:p-2 sm:rounded-full' onClick={() => { setNavOpen(true) }} >
              <Link className={`relative hover:underline active:bg-red-500 transition duration-500 `} href={e.Link ?? ''}>
                {e.type === 'logpng' ? <CiLogin /> : e.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className='text-2xl sm:hover:text-orange-400 invisible sm:visible' onClick={() => {
          document.documentElement.classList.toggle('dark')
        }}>< CiDark /></button>
      </span>
    </nav>
  );
};

export default Navbar;
