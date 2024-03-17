import Image from "next/image";
import React from "react";

export default function carprotection() {
  return (
    <div className="md:pt-[120px]  flex-col" id="gallery">
      <div className="flex-col text-center text-3xl font-semibold text-[#222222] w-[18rem] m-auto ">
        Our Gallery
       
      </div>

      <div className="p-5 md:p-10 ">
        <div className="columns-1 xs:columns-2 lg:columns-3 xl:columns-4 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <Image
            src={`/images/background-1.jpg`}
            alt="galery-01"
            height={500}
            width={500}
            loading="lazy"
          />
          <Image
            src={`/images/background-2.jpg`}
            alt="galery-02"
            height={500}
            width={500}
            loading="lazy"
          />
              <Image
            src={`/images/background-1.jpg`}
            alt="galery-01"
            height={500}
            width={500}
            loading="lazy"
          />
          <Image
            src={`/images/background-2.jpg`}
            alt="galery-02"
            height={500}
            width={500}
            loading="lazy"
          />
        
        <Image
            src={`/images/background-1.jpg`}
            alt="galery-01"
            height={500}
            width={500}
            loading="lazy"
          />
          <Image
            src={`/images/background-2.jpg`}
            alt="galery-02"
            height={500}
            width={500}
            loading="lazy"
          />
        
        <Image
            src={`/images/background-1.jpg`}
            alt="galery-01"
            height={500}
            width={500}
            loading="lazy"
          />
          <Image
            src={`/images/background-2.jpg`}
            alt="galery-02"
            height={500}
            width={500}
            loading="lazy"
          />
        
        <Image
            src={`/images/background-1.jpg`}
            alt="galery-01"
            height={500}
            width={500}
            loading="lazy"
          />
          <Image
            src={`/images/background-2.jpg`}
            alt="galery-02"
            height={500}
            width={500}
            loading="lazy"
          />
        
        <Image
            src={`/images/background-1.jpg`}
            alt="galery-01"
            height={500}
            width={500}
            loading="lazy"
          />
          <Image
            src={`/images/background-2.jpg`}
            alt="galery-02"
            height={500}
            width={500}
            loading="lazy"
          />
        
        
        </div>
      </div>
    </div>
  );
}
