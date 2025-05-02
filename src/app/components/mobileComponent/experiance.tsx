import React from 'react'

function MobileExperiance() {
  const experience=[
//My Experience
  {
        compName:"XYZ Limited Co.",
        dateStart:"Oct - 2023",
        dateEnd:"dec -2024",
        position:"General manager",
        details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
        work:["develop there official website", "make e-commerce website for client", "Have contributed on the team task"]
}, 
//My Experience
  {
    compName:"ABC Limited Co.",
    dateStart:"Oct - 2023",
    dateEnd:"dec -2024",
    position:"General manager",
    details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
    work:["develop there official website", "make e-commerce website for client", "Have contributed on the team task"]
},
//My Experience
{
    compName:"XYZ Limited Co.",
    dateStart:"Oct - 2023",
    dateEnd:"dec -2024",
    position:"General manager",
    details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
    work:["develop there official website", "make e-commerce website for client", "Have contributed on the team task"]
},
  ]

  return (
    <div className="w-full p-5">
      <h2 className="mb-4 scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-bold tracking-tight first:mt-0">Experiance</h2>
      <div className="-my-8 divide-y-2 divide-blue-300">
{experience.map((item, i)=>(
<div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
    <span className="font-bold text-2xl title-font text-gray-900 uppercase">
      {item.position}
    </span>
    <span className="mt-1 text-blue-500 text-xl">{`${item.dateStart} - ${item.dateEnd}`}</span>
  </div>
  <div className="md:flex-grow">
    <h2 className="text-xl font-bold text-gray-900 title-font mb-2 uppercase">
      {item.compName}
    </h2>
  
<ul className="ml-4 list-disc mr-1 text-xl">
  {item.work?.map((workItem , i)=>(
    <li key={i} >{workItem}</li>
  ))}
  
 
</ul>

  </div>
</div> ))}
</div>

    </div>
  )
}

export default MobileExperiance
