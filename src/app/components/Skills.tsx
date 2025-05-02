import React from 'react'
import { FaCheckSquare } from "react-icons/fa";


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/app/components/card"


const Skills = () => {
  const skills = [
      {
        name:"HTML",
        detail:"100%",

      },
      {
        name:"CSS",
        detail:"90%",

      },
      {
        name:"Typescript",
        detail:"70%",

      },
      {
        name:"Nextjs",
        detail:"60%",

      },
      {
        name:"python",
        detail:"90%",

      },
    
    ]

  return (
    <div>       
              {/* for animation */}
             <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto ">
          <CardHeader>
            <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Skills</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
          
          {/* Skills here */}
         
              <div  className="flex flex-wrap -m-4">
             
              {/* HTML */}
              {skills.map((item, i)=>(
          <div key={i} className="p-4 w-full md:w-1/3 ">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-600 text-white flex-shrink-0">
                
                <FaCheckSquare className="text-lg font-bold text-white" />
    
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
               {item.name}
                </h2>
              </div>
    
              <div className="w-full h-1 rounded-lg bg-gray-500 ">
                  <div className="w-[100%] h-1 rounded-lg bg-teal-500 "/>
                </div>
                <h3 className="text-teal-500 text-sm text-right font-semibold tracking-tight">{item.detail}</h3>
    
            </div>
        
          ))}
  
             </div>
              </CardContent>
              
        </Card>
    </div>
  )
}

export default Skills
