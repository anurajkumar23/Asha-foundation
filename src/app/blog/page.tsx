import Image from "next/image";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import ProgressBar from "@/app/utils/progressbar";

export default function Page() {
  return (
    <div className="">
      <div className="relative">
        <Image
          height={500}
          width={500}
          src="/images/background-2.jpg"
          alt="Car Wash"
          loading="lazy"
          className="object-cover w-full h-96 sm:h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-white font-bold text-4xl">Blog Page</p>
            <br />
            <p className="text-white">
              <Link href={"/"}>Home</Link> /{" "}
              <span className="text-green-300">Blog</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 lg:flex-row lg:justify-between mx-6">
        <div className="flex flex-col justify-center text-center w-full lg:w-2/3 ">
          <div className=" flex flex-col w-full pt-6 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center">
            <div className="max-lg:ml-0 max-lg:rounded-xl rounded-l-xl w-full lg:w-1/4 bg-green-500 text-white font-semibold ">
              <div className="flex items-center justify-center mb-2 ">
                <GoPerson className="mr-1" />
                <p>Ishu Singh</p>
              </div>
              <div className="flex items-center justify-center mb-2 ">
                <IoCalendarOutline className="mr-1" />
                <p>19 March 2024</p>
              </div>
            </div>
            <div className="cursor-pointer w-full lg:w-2/3 border-2 p-2 rounded-xl">
              <div className="flex justify-center mb-2">
                <Image
                  src="/images/background-1.jpg"
                  alt="Gallery Image"
                  height={500}
                  width={500}
                  loading="lazy"
                  className="h-max-[20rem] w-max-[38rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                />
              </div>
              <Link href="#">
                <p className="font-bold text-xl mb-2 text-gray-800 cursor-pointer hover:text-green-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, eos!
                </p>
              </Link>
              <p className="mb-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 ">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-2xl mb-4 text-gray-800 lg:text-right">
              Latest Campaigns
            </p>
            <div className="flex flex-col space-y-4 mx-2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="border-2 rounded-lg flex items-center space-x-2 p-2">
                  <Image
                    src="/images/background-1.jpg"
                    alt="Cause Image"
                    height={500}
                    width={500}
                    loading="lazy"
                    className="w-24 h-16 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col">
                    <Link href="#">
                      <p className="font-bold text-lg text-gray-800 cursor-pointer hover:text-green-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime, eos!
                      </p>
                    </Link>
                    <ProgressBar maxValue={100} value={50} />
                    <div className="flex justify-between text-xs">
                      <p>Raised : <span className="text-gray-600">5000</span></p>
                      <p>Goal : <span className="text-gray-600">8000</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
