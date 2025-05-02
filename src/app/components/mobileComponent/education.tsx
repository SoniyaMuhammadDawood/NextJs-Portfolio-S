import React from 'react'

const MobileEducation = () => {
  const education=[
    //My education
    {
        uniName:"Karachi university",
        date:"Oct - 2023",
        field:"Bachlors in commerce",
        details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
    },
  
 // my Education
{
  uniName:"Karachi College",
  date:"sep - 2020",
  field:"Intermediate in Commerce",
  details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
},

// my Education
{
  uniName:"CMS Alumni Govt college karachi",
  date:"sep - 2018",
  field:"Matric",
  details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
},
  
  // my Education
  {
    uniName:"Karachi university",
    date:"Oct - 2023",
    field:"Bachlors in commerce",
    details:" Glossier echo park pug, church-key sartorial biodiesel vexillologistpop-up snackwave ramps cornhole. Marfa 3 wolf moon party messengerbag selfies, poke vaporware kombucha lumbersexual pork bellypolaroid hoodie portland craft beer",
  }
  ]

  return (
    <div className='w-full p-5'>
      <h2 className="mb-4 scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-bold tracking-tight first:mt-0">Eduction</h2>
<div  className="py-4 divide-y-2 divide-blue-300">
  {education.map((Item, i)=>(

<div key={i} className="flex flex-wrap md:flex-nowrap">
<div className="md:w-64 mt-4 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
<span className="font-semibold title-font text-gray-700 uppercase text-2xl">
  {Item.field}
</span>
<span className="mt-1 text-blue-500 text-2xl font-semibold">{Item.date}</span>
</div>
<div className="md:flex-grow">
<h2 className="text-3xl font-semibold text-gray-900 title-font mb-2 uppercase ">
  {Item.uniName}
</h2>
<p className="text-2xl leading-relaxed ">
 {Item.details}
</p>

</div>
</div>

))}

</div>
    </div>
  )
}

export default MobileEducation
