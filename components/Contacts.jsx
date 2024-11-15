import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { socials } from '@/libs/data'

const Contacts = () => {
  return (
    <div id='contacts'>
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      

      <div className="max-w-5xl mx-auto px-8">

        <h1 className="text-3xl pt-5 sm:pt-0 font-bold text-center">Let&apos;s Get In Touch</h1>

        <HoverEffect items={socials} />
      </div>

    </div>
    </div>
  )
}

export default Contacts