
import Link from 'next/link'
import React from 'react'
import { NavData } from '@/Data/Navbar'
const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='ulist '>
        {
          NavData.map((e:any,i:any)=>
            <li key={i}><Link href={`${e.link}`}>{e.name}</Link></li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar