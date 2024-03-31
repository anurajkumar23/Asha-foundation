import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../utils/button";
import ContactBar from "./contactbar";
import Trustees from "./Trustee";
import getTrustee from "@/action/get-trustee";
import getAboutUs from "@/action/get-aboutUs";

export default async function page() {
  
  const trustee = await getTrustee()
  const aboutUs = await getAboutUs()

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

       <Trustees data = {trustee} aboutUs = {aboutUs} />

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
                <Button text="Donate Now" goto="/donate" />
              </div>
              <div className="text-center">
                <p className="text-white text-4xl font-semibold mb-5">
                  Become A volunteer To Help Others
                </p>
                <Button text="Join Us" goto="/donate"/>
              </div>
            </div>
          </div>
        </div>
        <ContactBar data={aboutUs}/>
      </div>
    </div>
  );
}
