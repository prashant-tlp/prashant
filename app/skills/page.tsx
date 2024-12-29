import React from 'react'
import { skill } from '@/Data/skill'
import Image from 'next/image'
function Skills() {
  return (
    <div className=' h-full overflow-auto md:overflow-hidden '>
          <div className="flex flex-wrap justify-center gap-4 p-4 ">
      {
        skill.map((e,i)=>(
          <div key={i} className="flex flex-col gap-5 justify-center items-center hover:scale-95 border h-32 w-48 bg-white ">
            <Image src={e.link} height={32} width={48} alt='' ></Image>
            <span className='text-black uppercase' >{e.name}</span>
          </div>
        ))
      }
    </div> 
    </div>

  )
}

export default Skills