import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import ProgressBar from "@/app/utils/progressbar";

export default function Page() {
  return (
    <div>
      <div className="">
        <div className="relative ">
          <Image
            height={500}
            width={500}
            src="/images/background-2.jpg"
            alt="Car Wash"
            loading="lazy"
            className="object-cover w-full h-[400px]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white font-bold text-4xl">Blog Page </p>
              <br />
              <p className="text-white">
                <Link href={"/"}>Home</Link> /{" "}
                <span className="text-green-300">Blog</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex pt-[50px]">
          <div className="flex-col justify-center text-center w-2/3">
            <div className="flex w-full text-center pt-5">
              <div className="w-1/3">
                <div className="flex justify-center">
                  <div className="flex">
                    <p className="w-[200px]">Ishu Singh</p>
                    <p className="py-1 ml-3">
                      <GoPerson />
                    </p>
                  </div>
                </div>
                <div className="flex justify-center text-center">
                  <div className="flex">
                    <p className="w-[200px]">19 March 2024</p>
                    <p className="py-1 ml-3">
                      <IoCalendarOutline />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center">
                    {" "}
                    {/* Centering container */}
                    <Image
                      src="/images/background-1.jpg"
                      alt="galery-01"
                      height={500}
                      width={500}
                      loading="lazy"
                      className="h-[20rem] w-[38rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                    />
                  </div>
                </div>
                <Link href="#">
                  <div className="font-bold text-xl mb-2 hover:text-green-400 cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, eos!
                  </div>
                </Link>
                <div className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            {/* ------------------------------ */}
            <div className="flex w-full text-center pt-5">
              <div className="w-1/3">
                <div className="flex justify-center">
                  <div className="flex">
                    <p className="w-[200px]">Ishu Singh</p>
                    <p className="py-1 ml-3">
                      <GoPerson />
                    </p>
                  </div>
                </div>
                <div className="flex justify-center text-center">
                  <div className="flex">
                    <p className="w-[200px]">19 March 2024</p>
                    <p className="py-1 ml-3">
                      <IoCalendarOutline />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center">
                    {" "}
                    {/* Centering container */}
                    <Image
                      src="/images/background-1.jpg"
                      alt="galery-01"
                      height={500}
                      width={500}
                      loading="lazy"
                      className="h-[20rem] w-[38rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                    />
                  </div>
                </div>
                <Link href="#">
                  <div className="font-bold text-xl mb-2 hover:text-green-400 cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, eos!
                  </div>
                </Link>
                <div className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
              <p className="font-bold text-2xl">Latest Causes</p>
            <div>
              <div className="flex px-5 pt-5">
                <Image
                  src="/images/background-1.jpg"
                  alt="galery-01"
                  height={500}
                  width={500}
                  loading="lazy"
                  className="h-[5rem] w-[8rem] hover:scale-105 cursor-pointer duration-300 mb-2"
                />
                <Link href="#">
                  <div className="font-bold text-normal mb-2 hover:text-green-400 cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, eos!
                  </div>
                  <div className="px-5">
                    <ProgressBar maxValue={100} value={50} />
                  </div>
                  <div className="flex justify-between px-2 mb-5 text-[14px]">
                    <div>
                      Raised : <span className="text-[#5F646B]">5000</span>
                    </div>
                    <div>
                      Goal : <span className="text-[#5F646B]">8000</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              {/* <p className="font-bold text-2xl">Latest Causes</p> */}
              <div className="flex px-5 pt-5">
                <Image
                  src="/images/background-1.jpg"
                  alt="galery-01"
                  height={500}
                  width={500}
                  loading="lazy"
                  className="h-[5rem] w-[8rem] hover:scale-105 cursor-pointer duration-300 mb-2"
                />
                <Link href="#">
                  <div className="font-bold text-normal mb-2 hover:text-green-400 cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, eos!
                  </div>
                  <div className="px-5">
                    <ProgressBar maxValue={100} value={50} />
                  </div>
                  <div className="flex justify-between px-2 mb-5 text-[14px]">
                    <div>
                      Raised : <span className="text-[#5F646B]">5000</span>
                    </div>
                    <div>
                      Goal : <span className="text-[#5F646B]">8000</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
