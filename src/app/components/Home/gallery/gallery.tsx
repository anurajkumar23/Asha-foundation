import Image from "next/image";
import React from "react";

export default function carprotection() {
  return (
    <div className="md:pt-[120px]  pt-10 flex-col" id="gallery">
      <p className="font-bold text-3xl flex items-center justify-center  gap-x-2">
  <span className="border-b-2 border-green-500 w-16"></span>
  Our Blogs
  <span className="border-b-2 border-green-500 w-16"></span>
</p>


      <div className="p-5 md:p-10 ">
        <div className="cursor-pointer columns-2 sm:columns-3 lg:columns-4 xl:columns-4 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
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
