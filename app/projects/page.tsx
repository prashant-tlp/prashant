import React from "react";
import Image from "next/image";
import { projects } from "@/Data/projects";
const page = () => {
  // const Image = image
  return (
    <div className="h-full">
      {projects.map((e,i) => (
        <div key={i} className=" p-2  gap-2 sm:flex justify-center r">
          <Image
            height={100}
            width={200}
            src={e.image}
            alt="project"
          ></Image>
          <div className=" sm:w-3/5 h-auto p-2 text-left  border-orange-400 border-l-2 border-b-2">
            <p className="text-lg font-bold text-nowrap ">Project Name : {e.name}</p>
            <hr className="my-1 border-black" />
            <p className="font-semibold">Description: </p>
            <p className="text-md leading-8 tracking-wide">
              {e.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
