

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function blog() {
  return (
    <div className="pt-[45px]">
      <div className="text-center">
        <p className="font-bold text-3xl flex items-center justify-center mb-5 gap-x-2">
        <span className="border-b-2 border-green-500 w-16"></span>
          Our Blogs
          <span className="border-b-2 border-green-500 w-16"></span>
          </p>
        <p className=" md:px-[5%] px-[2%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid mxs:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mx-5 md:mx-20">
          <div className="cursor-pointer mx-auto border-2 rounded-xl shadow-xl">
            <div className="flex justify-center">
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="h-[16rem] w-[22rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                loading="lazy"
              />
            </div>
            <Link href="#">
            <div className="font-bold text-xl mb-2 hover:text-green-400 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </div>
            </Link>
            <div className="mb-2"> Created At : 18 March 2024 </div>

            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

         
          </div>
          <div className=" cursor-pointer mx-auto border-2 rounded-xl shadow-xl">
            <div className="flex justify-center">
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="h-[16rem] w-[22rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                loading="lazy"
              />
            </div>
            
            <Link href="#">
            <div className="font-bold text-xl mb-2 hover:text-green-400 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </div>
            </Link>
            <div className="mb-2"> Created At : 18 March 2024 </div>

            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

         
          </div>
          <div className="cursor-pointer mx-auto border-2 rounded-xl shadow-xl">
            <div className="flex justify-center">
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="h-[16rem] w-[22rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                loading="lazy"
              />
            </div>
            
            <Link href="#">
            <div className="font-bold text-xl mb-2 hover:text-green-400 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </div>
            </Link>
            <div className="mb-2"> Created At : 18 March 2024 </div>

            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

          
          </div>
      
        </div>
      </div>
    </div>
  );
}
