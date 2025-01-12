import React from 'react'
import { skill } from '@/Data/skill'
import Image from 'next/image'
function Skills() {
  return (
    <div className=" h-[84vh] sm:flex sm:justify-center sm:items-center">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {skill.map((e, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 0.2}s` }}
            className="animate-pop-ele flex flex-col gap-5 justify-center items-center hover:scale-95 border h-32 w-48 bg-background shadow-md"
          >
            <Image src={e.link} height={32} width={48} alt="" />
            <span className=" uppercase">{e.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills