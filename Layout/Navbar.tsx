'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { NavData } from '@/Data/Navbar';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <nav className="justify-around  items-center  md:flex gap-2 w-full  ">
      <div className='flex justify-between '>
      <span className='font-sans text-2xl md:text-3xl neon-text'>
        PRASHANT
      </span>
      <button className='md:hidden text-right text-2xl md:text-3xl ' onClick={()=>setNavOpen(!navOpen)}>
        {navOpen ? <HiMiniBars3BottomRight/> : <HiMiniBars3BottomLeft/>}
      </button>

      </div>
      <ul className={`text-left static z-10 flex-col  text-2xl md:text-xl ${navOpen?'hidden':'block'} md:flex  md:flex-row gap-10 text-pretty font-semibold`}>
        
        {NavData.map((e:any, i:any) => (
          <li key={i} onClick={()=>{setNavOpen(true)}} >
            <Link className={`relative hover:underline active:bg-red-500 transition duration-500 `} href={e.Link}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
