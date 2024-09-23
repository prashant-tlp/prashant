import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <button className='footer-button'><Image width={40} height={10}  style={{backgroundColor:'white'}} alt='git' src='assets/icons/Footer/github.svg'></Image></button>
        <button className='footer-button'><Image width={40} height={10}  style={{backgroundColor:'white'}} alt='git' src='assets/icons/Footer/linkedin.svg'></Image></button>
    </div>
  )
}

export default Footer