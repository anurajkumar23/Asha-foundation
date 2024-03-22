import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../utils/button";
import ContactBar from "./contactbar";

export default function page() {
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
              <p className="text-white font-bold text-4xl">About Us </p>
              <br />
              <p className="text-white">
                <Link href={"/"}>Home</Link> /{" "}
                <span className="text-green-300">About Us</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[50px] text-center text-lg ">
          <p className="text-green-300 mb-5 ">What We Are Doing</p>
          <p className="font-bold text-4xl text-[#072366] ">
            We Are In A Mission To <br /> Help The Helpless
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-1 xl:mx-[5%]  px-5 pt-[60px]">
          <Image
            src="/images/background-1.jpg"
            alt="washing car"
            height={500}
            width={500}
            className="xl:pl-8 pl-2 mx-auto lg:col-span-1 lg:self-center"
            loading="lazy"
          />

          <div className="italic text-[#818181] ">
            <p className="text-2xl pb-5">The Vision </p>
            CarLight Hand Wash is an eco-friendly, hand car wash and detailing
            service based in INDIA. Our company was founded back in 2020 by a
            team of experts with more then 10 years of professional car wash
            experience. We operate three car washes throught INDIA area. Our
            goal is to provide our customers with the friendliest, most
            convenient hand car wash experience possible. We use the most modern
            and up-to-date water reclamation modules as a part of our car wash
            systems. Our products are all biodegradable and eco-friendly.
          </div>
        </div>

        <div className="pt-[70px] text-center">
          <p className="font-bold text-2xl text-[#072366] mb-5">
            {" "}
            BOARD OF TRUSTEES
          </p>
          <p className="text-lg">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            deleniti, ut culpa aspernatur incidunt eaque modi ipsam recusandae{" "}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5  md:mx-20 ">
            <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
              <Image
                src={`/images/trustee.jpg`}
                alt="trustee"
                width={500}
                height={500}
                className="h-[15rem] w-[17rem] hover:scale-105 cursor-pointer duration-300"
                loading="lazy"
              />
              <p className="font-semibold text-2xl mt-3">MR. Mukesh Jha</p>
              <p className="mt-3 text-green-500 text-xl mb-2">
                Organisation Consultant
              </p>
            </div>
            <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
              <Image
                src={`/images/trustee.jpg`}
                alt="trustee"
                width={500}
                height={500}
                className="h-[15rem] w-[17rem] hover:scale-105 cursor-pointer duration-300"
                loading="lazy"
              />
              <p className="font-semibold text-2xl mt-3">MR. Mukesh Jha</p>
              <p className="mt-3 text-green-500 text-xl mb-2">
                Organisation Consultant
              </p>
            </div>
            <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
              <Image
                src={`/images/trustee.jpg`}
                alt="trustee"
                width={500}
                height={500}
                className="h-[15rem] w-[17rem] hover:scale-105 cursor-pointer duration-300"
                loading="lazy"
              />
              <p className="font-semibold text-2xl mt-3">MR. Mukesh Jha</p>
              <p className="mt-3 text-green-500 text-xl mb-2">
                Organisation Consultant
              </p>
            </div>
          </div>
          <div className="pt-[70px] text-center ">
            <p className="font-bold text-2xl text-[#072366] mb-5">
              {" "}
              OUR MEMBERS
            </p>
            <Image
              src={`/images/team.jpg`}
              alt="trustee"
              width={500}
              height={500}
              className=" sm:h-[36rem] sm:w-[60rem] h-max-[36rem] w-max-[60rem] hover:scale-105 cursor-pointer duration-300 mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="pt-[70px] relative">
          <div className="relative mt-7">
            <Image
              height={500}
              width={500}
              src="/images/background-2.jpg"
              alt="Car Wash"
              loading="lazy"
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center mb-8">
                <p className="text-white text-4xl font-semibold mb-5">
                  Help us so we can help others
                </p>
                <Button text="Donate Now" />
              </div>
              <div className="text-center">
                <p className="text-white text-4xl font-semibold mb-5">
                  Become A volunteer To Help Others
                </p>
                <Button text="Join Us" />
              </div>
            </div>
          </div>
        </div>
        <ContactBar />
      </div>
    </div>
  );
}
