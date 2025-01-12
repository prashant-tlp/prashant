'use client'
import React, { useState } from "react";
import { projects } from "@/Data/projects";
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleProjectChange = (index: number) => {
    setCurrentProjectIndex(index);
  };
  

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="flex flex-col sm:flex-row items-center overflow-hidden h-[82vh] gap-5 justify-center">
      <div
        key={currentProjectIndex}
        id="project"
        className="p-6 rounded-md shadow-lg flex-col sm:flex-row flex flex-grow gap-5"
      >
        <img
          src={currentProject.image}
          alt={currentProject.name}
          loading="lazy"
          className="h-auto w-full animate-pop-ele sm:w-1/2 rounded-md object-cover"
        />
        <span className="flex flex-col animate-nav-slide gap-2 ">
          <h2 className="text-2xl font-semibold flex gap-2 items-center">
          {currentProject.name}
            <Link href={currentProject.pLink} className="" target="_blank">
              <FaExternalLinkAlt />
            </Link>
          </h2>
          <p className="">{currentProject.description}</p>
        </span>
      </div>

      <div className="mt-2 flex sm:flex-col gap-3">
        {projects.map((_, i) => (
          <button
            key={`button-${i}`}
            className={`h-4 w-4  rounded-full border border-black font-semibold ${currentProjectIndex === i ? "bg-indigo-600" : "bg-gray-400"
              }  transition`}
            onClick={() => handleProjectChange(i)}
          >
            
          </button>
        ))}
      </div>
    </div>

  );
};

export default Page;

// <div className="items-start h-[84vh] justify-normal ">
// <div>
//   {projects.map((project, index) => (
//     <div key={index} className=" p-4 m-4 rounded-md shadow flex-col sm:flex-row flex flex-grow gap-5 ">
//       <img src={project.image} alt="dfgh" loading="lazy" className="h-full w-4/5 p-0.5 sm:p-0 sm:h-1/5 sm:w-2/5 " />

//       <span>
//         <h2 className="text-2xl flex gap-10 items-center">{project.name}<Link href={project.pLink} className="text-green-500" target="_blank"><FaExternalLinkAlt /></Link></h2>
//         <p>{project.description}</p>
//       </span>
//     </div>
//   ))}

// </div>
// </div>
