import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
   <section className="flexCenter flex-col">
    <div className="padding-container max-container w-full pb-24">
    <Image
            src="/building.png"
            alt="builder"
            width={50}
            height={50}/>
            <p className="uppercase regular-18 -mt-1 mb-3 text-red-800" >
              we are her for you
            </p>
            <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
                Guide You To Great Meals
              </h2>
              <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                Only with the tyme & tide application you will no longer get lost and
                get lost again, because we already support offline maps when there is 
                no internet connection in the field. invite your friends, relatives and
                friends to have good meals in our restuarants
              </p>
            </div>
    </div>
    <div className="flexCenter max-container relative w-full">
    <Image
            src="/guide.jpg"
            alt="guide"
            width={1440}
            height={580}
            className="w-full object-cover object-center 2xl:rounded-5xl"/>
            <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
            <Image
            src="/meter.png"
            alt="meter"
            width={16}
            height={158}
            className="w-auto h-full"/>
        
              <div className="flexBetween flex-col">
                <div className="flex w-full flex-col">
                  <div className="flexBetween w-full">
                    <p className="regular-16 text-gray-20">
                      Destination
                    </p>
                    <p className="bold-16 text-green-50">48 min</p>
                  </div>
                  <p className="bold-20 mt-2">Aguas Calientes</p>
                </div>

                <div className="flex w-full flex-col">
                 
                    <p className="regular-16 text-gray-20">
                      Start Track
                    </p>
                    
                  <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
                </div>
              </div>
            </div>
    </div>
   </section>
  )
}

export default Guide
