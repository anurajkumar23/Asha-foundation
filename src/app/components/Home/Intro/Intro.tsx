import Button from "@/app/utils/button";
import React from "react";

export default function Intro() {
  return (
    <div className="py-[7rem]">
      <div className="flex  px-5 ">
        <div className="w-1/2 text-center  ">
          <div className="px-[8rem] ">
            <p className="text-3xl font-bold ">Welcome To Charity</p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 text-[#646F86] mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <Button text="Read More"/>
           
          </div>
        </div>
        <div className="w-1/2 text-center ">
          <div className="">
            <video width="640" height="360" controls>
              <source
                src="/images/home-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
