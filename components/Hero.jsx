import { TextGenerateEffect } from "./ui/TextEffect"
import { Boxes } from "./ui/BgBoxes"
import MagicButton from "./ui/MagicButton"
import { FlipWords } from "./ui/FlipWords"

const Hero = () => {

  const words = [
    'Daffa Septian Nurdyantoro',
    'a Web Developer',
    'Enjoying Making Websites',
    'Excited About Learning New Things'
  ]

  return (
    <div id="home" className="min-h-screen relative w-full overflow-hidden bg-rose-500 flex flex-col justify-center items-center rounded-lg">
      
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent z-20" />
 
      <Boxes />
      
      <div className="flex flex-col items-center mb-36 md:mb-0">
        
        <h1 className="text-white relative z-20">
          <TextGenerateEffect 
            className='md:text-4xl text-xl mb-5'
            words='Hello There 👋'
          />
        </h1>

        

        <div className="flex items-center text-[18px] md:text-3xl z-20 mx-auto">
          <span className="font-extrabold">I am</span>
          <FlipWords words={words} />
        </div>

        <a href="#projects">
          <MagicButton>
            See My Projects
          </MagicButton>
        </a>
      </div>

    </div>
  )
}

export default Hero