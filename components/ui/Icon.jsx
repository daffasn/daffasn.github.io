import { SiVercel } from "react-icons/si";
import { FaLaravel } from 'react-icons/fa';

export const VercelLogo = () => {
  return (
    <SiVercel className="pl-1 h-[30px] w-[30px] text-black" />
  )
}

export const LaravelLogo = () => {
  return (
    <FaLaravel className="pl-1 h-[30px] w-[30px] text-red-600" />
  )
}