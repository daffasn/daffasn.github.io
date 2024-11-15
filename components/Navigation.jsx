import React from 'react'
import { FloatingDock } from './ui/NavDock'
import { IconHome, IconInfoSquareRounded, IconFiles, IconBroadcast } from '@tabler/icons-react';

const Navigation = () => {

    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/",
        },
        {
            title: "About Me",
            icon: (
              <IconInfoSquareRounded className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
          title: "Projects",
          icon: (
            <IconFiles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#projects",
        },
        {
          title: "Contacts",
          icon: (
            <IconBroadcast className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#contacts",
        },
      ];

  return (
    <div className="flex items-center justify-center fixed bottom-0 z-50 w-full mb-10">
      <FloatingDock
      items={links}
      />
    </div>
  )
}

export default Navigation