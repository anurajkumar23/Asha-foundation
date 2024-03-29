import Image from "next/image";
import React from "react";
import { AboutUs } from "../../../types";

interface contactbarProps{
  data: AboutUs
}

const contactbar:React.FC<contactbarProps> = ({
data
}) => {

  return (
    <>
    {data.map((aboutUs) =>(
    <div key={aboutUs.id} className="grid mxs:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mx-5 md:mx-20 pt-[50px]">
     
        
      <div
        className="flex items-center justify-center mb-4 md:mb-0 flex-col "

      >
        <Image
          src={`/phone.svg`}
          alt="features1"
          width={500}
          height={500}
          className="h-[5rem] w-[5rem] hover:scale-105 cursor-pointer duration-300"
          loading="lazy"
        />

        <p className="font-semibold mt-2 uppercase"> Call us at</p>
        <p className="mt-2 p-4">{aboutUs.phoneNo}</p>
      </div>
      <div
        className="flex items-center justify-center mb-4 md:mb-0 flex-col "

      >
        <Image
          src={`/map.svg`}
          alt="features1"
          width={500}
          height={500}
          className="h-[5rem] w-[5rem] hover:scale-105 cursor-pointer duration-300 "
          loading="lazy"
        />

        <p className="font-semibold mt-2 uppercase"> Our Address</p>
        <p className="mt-2 p-4">{aboutUs.address}</p>
      </div>
      <div
        className="flex items-center justify-center mb-4 md:mb-0 flex-col "

      >
        <Image
          src={`/clockblue.svg`}
          alt="features1"
          width={500}
          height={500}
          className="h-[5rem] w-[5rem] hover:scale-105 cursor-pointer duration-300 "
          loading="lazy"
          
        />

        <p className="font-semibold mt-2 uppercase"> Working hours</p>
        <p className="mt-2 p-4">Monday-Sunday: 7am - 7pm</p>
      </div>
      
      
    </div>
    ))}
    </>
  );
}

export default contactbar;