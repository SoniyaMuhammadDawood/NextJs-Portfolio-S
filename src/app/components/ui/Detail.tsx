
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/app/components/tabs"
  import Experiance from "../Experiance"
  import Skills from "../Skills"
  import Project from "../Project"
  import Education from "../Education"
  import Contact from "../Contact"
  
  
  
  export function Detail() {
    return (
      <Tabs defaultValue="education" className="w-full p-6">
        <TabsList className="grid w-full grid-cols-5">
  
          {/* Tabs triger button */}
          <TabsTrigger className="font-semibold text-base " value="education">Education</TabsTrigger>
          <TabsTrigger className="font-semibold text-base" value="experience">Experience</TabsTrigger>
          <TabsTrigger className="font-semibold text-base" value="skills">Skills</TabsTrigger>
          <TabsTrigger className="font-semibold text-base" value="project">Project</TabsTrigger>
          <TabsTrigger className="font-semibold text-base" value="contact">Contact</TabsTrigger>
        </TabsList>
          {/* Tabs content here */}
        
        {/* Education */}
        <TabsContent value="education">
          <Education />
        </TabsContent>
  
        {/* Experiance */}
        <TabsContent value="experience">
          < Experiance />
          </TabsContent>
  
        {/* Skills */}
        <TabsContent value="skills">
          <Skills />
          </TabsContent>
  
        {/* Projects */}
        <TabsContent value="project">
          <Project />
          </TabsContent>
          
        {/* Contact */}
        <TabsContent value="contact">
          <Contact />
          </TabsContent>
      
      </Tabs>
    )
  }
  