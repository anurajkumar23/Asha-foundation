import Button from "@/app/utils/button";
import ProgressBar from "@/app/utils/progressbar";
import Image from "next/image";
import React from "react";

export default function work() {
  return (
    <div className="pt-[120px]">
      <div className="text-center">
        <p className="font-bold text-3xl">Featured Causes</p>
        <p className=" md:px-[5%] px-[2%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid mxs:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mx-5 md:mx-20">
          <div className="mx-auto border-2 rounded-xl shadow-xl"> 
            <div className="flex justify-center">
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="h-[16rem] w-[22rem] hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                loading="lazy"
              />
            </div>
            <ProgressBar maxValue={100} value={50} />

            <div className="flex justify-between px-2 mb-5">
              <div>
                Raised : <span className="text-[#5F646B]">5000</span>
              </div>
              <div>
                Goal : <span className="text-[#5F646B]">8000</span>
              </div>
            </div>
            <div className="font-bold text-xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </div>
            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Button text="Donate Now" />
          </div>
          <div className="mx-auto border-2 rounded-xl shadow-xl">
            <div className="flex justify-center">
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="h-[16rem] w-[22rem] hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                loading="lazy"
              />
            </div>
            <ProgressBar maxValue={100} value={50} />

            <div className="flex justify-between px-2 mb-5">
              <div>
                Raised : <span className="text-[#5F646B]">5000</span>
              </div>
              <div>
                Goal : <span className="text-[#5F646B]">8000</span>
              </div>
            </div>
            <div className="font-bold text-xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </div>
            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Button text="Donate Now" />
          </div>
          <div className="mx-auto border-2 rounded-xl shadow-xl">
            <div className="flex justify-center">
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="h-[16rem] w-[22rem] hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                loading="lazy"
              />
            </div>
            <ProgressBar maxValue={100} value={50} />

            <div className="flex justify-between px-2 mb-5">
              <div>
                Raised : <span className="text-[#5F646B]">5000</span>
              </div>
              <div>
                Goal : <span className="text-[#5F646B]">8000</span>
              </div>
            </div>
            <div className="font-bold text-xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </div>
            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Button text="Donate Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
