// import Image from "next/image";

import TagCloudComponent from "@/Layout/tagclod";

export default function Home() {
  return (
    <div className="app-page-container items-center mx-auto">

    <div className=" flex z-20 items-center overflow-hidden">
        <div className="container items-center md:gap-10 flex flex-col sm:flex-row relative ">
            <div className=" flex order-2  sm:order-1 flex-col relative z-20">
                <span className="w-20 h-2 bg-black dark:bg-white sm:mb-12">
                    
                </span>
                <h1 className="uppercase text-3xl sm:text-5xl font-black flex flex-col leading-none ">
                    Hello, I&apos;m Prashant
                    <div className="typo text-xl text-wrap sm:text-nowrap h-8 sm:text-3xl">
                        A full stack developer
                    </div>
                </h1>
                <p className="uppercase text-sm sm:text-base ">
                    I can help you with

                </p>
                <ul className=" uppercase ml-5 list-disc">
                        <li>React</li>
                        <li>next</li>
                        <li>Angular</li>
                        <li>Node</li>
                    </ul>
                <div className="flex  sm:mt-8">
                    {/* <a href={`/assets/resume/Prashant.pdf`} download={true}  className="uppercase py-2 px-4 rounded-lg bg-orange-400 border-2 border-transparent  text-md mr-4 hover:bg-orange-300">
                        Download Resume
                    </a> */}
                    {/* <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a> */}
                </div>
            </div>
            <div className=" items-center order-1 sm:block sm:w-1/3 lg:w-3/5 relative">
                        <TagCloudComponent />
                {/* <Image height={180} width={180}  src={`/assets/image/profile.png`} alt="pro" className="max-w-xs rounded-xl md:max-w-sm m-auto"/> */}
            </div>
        </div>
    </div>
    </div>
  );
}
