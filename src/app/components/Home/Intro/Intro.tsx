import Button from "@/app/utils/button";
import React from "react";

export default function Intro() {
  return (
    <div className="py-10 md:py-20">
      <div className="md:flex px-5">
        <div className="md:w-1/2 md:text-center">
          <div className="md:px-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome To Charity
            </p>
            <p className="mt-5 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 text-[#646F86] mb-5 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <Button text="Read More"/>
          </div>
        </div>
        <div className="md:w-1/2 md:text-center mt-5 md:mt-0">
          <div className="aspect-w-16 aspect-h-9">
            <video className="object-cover w-full h-full" controls>
              <source src="/images/home-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
