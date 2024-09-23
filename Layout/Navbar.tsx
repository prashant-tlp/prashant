
import Link from 'next/link'
import React from 'react'
import { NavData } from '@/Data/Navbar'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='ulist '>
        {
          NavData.map((e:any,i:any)=>
            <li key={i}><Link href={`${e.Link}`}>{e.type == "image" ? <Image className='profile-img-round' width={30} height={25} src={`/assets/image/profile.jpg`} alt=''></Image> : e.name}</Link></li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar