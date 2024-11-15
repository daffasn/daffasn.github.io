import { Tabs } from "./ui/Tabs";
import Image from "next/image"
import { FaLaravel } from "react-icons/fa";
import { ShortHandIcons } from "@/libs/data";

const About = () => {

  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full overflow-x-auto relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-emerald-400 to-green-700">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <p>
              I am Daffa Septian Nurdyantoro, a graduate of Gunadarma University with a degree in Information Systems. I graduated with a thesis and a GPA of 3.36. I am very passionate about the world of computers, especially in programming. The programming languages I started with are PHP and Laravel Framework, and currently, I am developing my programming skills in JavaScript using React and Next.js.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image 
                src="/images/mypic2.png"
                width={380}
                height={180}
                alt="Image"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-x-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-rose-400 text-center">
          <p className="text-center mb-5">My Skills</p>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            <div className="flex flex-col items-center">
              {ShortHandIcons('HTML', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('CSS', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('PHP', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">PHP</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('Javascript', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('PostgreSQL', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('MySQL', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('Bootstrap', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('Tailwind', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Tailwind</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('ReactJS', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">React JS</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('NextJS', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Next JS</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('VueJS', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Vue JS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLaravel className="h-12 w-12 sm:h-20 sm:w-20 text-red-600 m-1 sm:m-2" />
              <p className="text-base sm:text-lg">Laravel</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('Prisma', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Prisma</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('Canva', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Canva</p>
            </div>
            <div className="flex flex-col items-center">
              {ShortHandIcons('MicrosoftOffice', "h-14 w-14 sm:h-24 sm:w-24")}
              <p className="text-base sm:text-lg">Microsoft Office</p>
            </div>
            
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div id="about" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-20 mb-40 p-5 md:p-0 text-center">
      <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default About