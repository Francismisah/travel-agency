import React from 'react'
import Image from 'next/image'
import { SERVICES } from '@/constants'

const Services = () => {
  return (
    <section  className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div  className="max-container padding-container relative flex w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
        <Image
            src="/mobile.png"
            alt="phone"
            width={300}
            height={200}
            className="feature-phone ml-[160]"
            />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
          <Image
            src="/take.png"
            alt="take"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Services</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {SERVICES.map((services) =>(
              <ServicesItem 
              key={services.title}
              title={services.title}
              icon={services.icon}
              description={services.description}
              />
            ) )}
          </ul>
        </div>
      </div>
    </section>
  )
}

type ServicesItem = {
  title: string,
  icon: string,
  description: string,
}

const ServicesItem = ({ title, icon,  description }: ServicesItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
         <Image
        src={icon}
        alt="map"
        width={28}
        height={28}
        /> </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
     <p className='regular-16 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
    </li>
  )
}

export default Services
