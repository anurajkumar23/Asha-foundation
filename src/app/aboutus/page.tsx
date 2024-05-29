/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../utils/button";
import ContactBar from "./contactbar";
import Trustees from "./Trustee";
import getTrustee from "@/action/get-trustee";
import getAboutUs from "@/action/get-aboutUs";
import AboutJoinUs from "./aboutJoinUs";


export const metadata = {
  title: "About Us ",
  description:
    "Learn more about Asha Foundation, our mission, vision, and the various campaigns we run to support all types of needy people. Join us in making a difference.",
  alternates: {
    canonical: `/aboutus`,
  },
};


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
            "The Vision" for our NGO encapsulates our profound commitment to fostering positive change, empowering communities, and creating a world where every individual has the opportunity to thrive. Through innovative initiatives and unwavering dedication, we aspire to build a society marked by equality, compassion, and sustainable development. Our vision transcends boundaries, inspiring hope and igniting transformational impact, as we envision a future where every dream finds wings and every heart finds solace.
          </div>
        </div>

        <Trustees data={trustee} aboutUs={aboutUs} />

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
              <AboutJoinUs />
            </div>
          </div>
        </div>
        <ContactBar data={aboutUs} />
      </div>
    </div>
  );
}
