'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const handleClick = (link:any) =>{
    console.log('hjk')
  }
  return (
    <div className='footer md:mx-20 gap-5 '>
        <Link href={`https://github.com/prashant-tlp`} target='_blank'><Image width={40} height={10}  style={{backgroundColor:'white'}} alt='git' src='assets/icons/Footer/github.svg'></Image></Link>
        
        <Link href={`https://www.linkedin.com/in/prashant-singh-9177a9223/` } target='_blank'><Image width={40} height={10}  style={{backgroundColor:'white'}} alt='git' src='assets/icons/Footer/linkedin.svg'></Image></Link>
    </div>
  )
}

export default Footer