import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaSquareYoutube } from "react-icons/fa6";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from '../ui/button';



function MobileCard() {
  return (
    <div className=" h-[60vh] flex flex-col items-center justify-center">
    <div data-aos="fade-up" className="card  glass w-98 p-12 flex flex-col justify-center items-center">

    <Image src="/images/image.png" alt="profile-pic" width={300} height={400} className="rounded-md mx-auto"/>
  <div className="card-body ">

    {/* Name here */}
    <h1 className="card-title text-2xl font-semibold tracking-tight uppercase text-center text-gray-900">Soniya dawood</h1>
    <h2 className="text-lg font-bold text-center text-blue-600">
   <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer', 'Accountant'],
    autoStart: true,
    loop: true,
  }}
/>
   </h2>

   {/* Social media Account */}
   <div className="mt-1 grid grid-cols-3 gap-2">
      {/* Linkedln */}
      <div className="mt-2">
        <Link href="#" target="_blank " className=" text-gray-700 hover:text-[#0762C8]">
      <FaLinkedin className="text-5xl "/>
      </Link>
      </div>

      {/* Vercel */}
      <div className="mt-2">
        <Link href="#" target="_blank " className=" text-gray-700 hover:text-[#FF0000]">
      <FaSquareYoutube className="text-5xl "/>
      </Link>
      </div>

      {/* GitHub */}
      <div className="mt-2">
        <Link href="https://github.com/SoniyaMuhammadDawood" target="_blank " className=" text-gray-700 hover:text-[#6e5494]">
      <FaGithub className="text-5xl "/>
      </Link>
      </div>

    </div>

       {/* Download CV Button */}
       <Link href={"/Assets/cv/Curriculum Vitae.pdf"} className="mt-4 text-center justify-center" target="_blank">
    <Button className="text-xl mt-6">
      <FaCloudDownloadAlt className="mr-2 h-4 w-5 " /> Download CV 
    </Button>
    </Link>

  </div>
</div>
    
    </div>
  )
}

export default MobileCard   
