import React from "react";
import Image from "next/image";
import { projects } from "@/Data/projects";
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
const page = () => {
  // const Image = image
  return (
    <div className="h-full flex justify-center w-full">
      <div>
      {projects.map((e,i) => (
        <div key={i} className=" p-2  gap-2 sm:flex justify-center w-full">
          <Image
            height={10}
            width={400}
            src={e.image}
            alt="project"
          ></Image>
          <div className="w-full  h-auto p-2 text-left border-orange-400 border-l-2 border-b-2">
            <span className="text-lg font-bold text-nowrap flex items-center gap-2 "><p>Project Name : {e.name}</p><Link className="animate-pulse text-green-500" href={e.pLink} target="_blank"><FaExternalLinkAlt></FaExternalLinkAlt></Link></span>
            <hr className="my-1 border-black" />
            <p className="font-semibold">Description: </p>
            <p className="text-md leading-8 tracking-wide">
              {e.description}
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default page;
