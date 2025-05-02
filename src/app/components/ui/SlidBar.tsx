import { Button } from "./button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaSquareYoutube } from "react-icons/fa6";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";



export function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
     
    {/* Image */}
    <Image src="/images/girl.png" alt="profile-pic" width={500} height={500} className="rounded-md h-[250px] w-[300px]"/>

    {/* Name here */}
   <div className="mt-2 -mx-1">
   <h1 className="text-2xl font-bold tracking-tight uppercase text-center text-gray-600">Soniya dawood</h1>
   <h2 className="text-md font-semibold tracking-tight text-center text-gray-600">
   <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer', 'Accountant'],
    autoStart: true,
    loop: true,
  }}
/>
   </h2>
   </div>

    {/* Social media Account */}
    <div className="mt-3 grid grid-cols-3 gap-2">
      {/* Linkedln */}
      <div className="mt-2">
        <Link href="#" target="_blank " className=" text-[#0762C8] hover:text-[#316fb6]">
      <FaLinkedin className="text-4xl "/>
      </Link>
      </div>

      {/* Vercel */}
      <div className="mt-2">
        <Link href="#" target="_blank " className=" text-[#FF0000] hover:text-[#fc4e4e]">
      <FaSquareYoutube className="text-4xl "/>
      </Link>
      </div>

      {/* GitHub */}
      <div className="mt-2">
        <Link href="#" target="_blank " className=" text-[#6e5494] hover:text-[#8b64c5]">
      <FaGithub className="text-4xl "/>
      </Link>
      </div>

    </div>

    {/* Download CV Button */}
    <Link href={"/Assets/cv/Curriculum Vitae.pdf"} className="mt-4" target="_blank">
    <Button className="bg-teal-500  hover:bg-blue-500">
      <FaCloudDownloadAlt className="mr-2 h-4 w-4 " /> Download CV 
    </Button>
    </Link>

    </div>
  )
}