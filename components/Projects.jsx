"use client"

import { useState } from "react";
import { BackgroundGradient } from "./ui/CardGradient";
import { BackgroundBeamsWithCollision } from "./ui/BeamsBackground";
import Image from "next/image";
import { projects } from "@/libs/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Projects = () => {

  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + 3);
      setLoading(false)
    }, 1000)
  };

  return (
    <div id="projects">
    <BackgroundBeamsWithCollision className="flex flex-col py-6 px-5 sm:px-0">

      <h1 className="text-3xl pb-8 font-bold">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.slice(0, visibleCount).map((item, index) => (
            <Link key={index} href={item.link} target="_blank">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  height="400"
                  width="400"
                  className="object-contain h-56"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {item.title}
                </p>
         
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>

                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  {item.lang}
                  {item.icon}
                </button>
              </BackgroundGradient>  
            </Link>
        ))}
      </div>
            {visibleCount < projects.length && (
                <div>
                  {loading ? (
                    <MagicButton disabled={true}>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading
                  </MagicButton>
                  ) : (
                    <MagicButton onClick={handleLoadMore}>
                      Load More
                    </MagicButton>  
                  )}
                </div>
            )}
    </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Projects