import React from "react";
// import Image from "next/image";
import { projects } from "@/Data/projects";
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";


// return <motion.div style={{ scaleX: scrollYProgress }} />

const page = () => {
  const { scrollYProgress } = useScroll()
  return (

    <div className="items-start h-[84vh] justify-normal">
      <motion.div style={{ scaleX: scrollYProgress }}/>
      <div>
        {projects.map((project, index) => (
          <div key={index} className=" p-4 m-4 rounded-md shadow flex flex-grow gap-5 ">
            <img src={project.image} alt="dfgh" className="h-1/5 w-2/5 " />
            <span>
              <h2 className="text-2xl flex gap-10 items-center">{project.name}<Link href={project.pLink} className="text-green-500" target="_blank"><FaExternalLinkAlt /></Link></h2>
              <p>{project.description}</p>
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default page;
