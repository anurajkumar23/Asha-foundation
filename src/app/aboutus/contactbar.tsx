import Image from "next/image";
import React from "react";

export default function contactbar() {
  const data = [
    {
      name: "Call us at",
      detail:
        "+91 958xxxxxxx",
    },
    {
      name: "Our Address",
      detail:
        "CarLight car washing center, Charkhari Rd, Rath Purab, Uttar Pradesh 210431",
    },
    {
      name: "Working hours",
      detail:
        "Monday-Sunday: 7am - 7pm",
    },
    // {
    //   name: "Polish and waxing",
    //   detail:
    //     "Car Lite provides you with the greatest polishing and waxing services available, making your car shine in any situation.",
    // },
  ];
  return (
    <div className="grid mxs:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mx-5 md:mx-20 pt-[50px]">
      <div
        className="flex items-center justify-center mb-4 md:mb-0 flex-col "

      >
        <Image
          src={`/phone.svg`}
          alt="features1"
          width={500}
          height={500}
          className="h-[5rem] w-[5rem] hover:scale-105 cursor-pointer duration-300"
          loading="lazy"
        />

        <p className="font-semibold mt-2 uppercase"> {data[0].name}</p>
        <p className="mt-2 p-4">{data[0].detail}</p>
      </div>
      <div
        className="flex items-center justify-center mb-4 md:mb-0 flex-col "

      >
        <Image
          src={`/map.svg`}
          alt="features1"
          width={500}
          height={500}
          className="h-[5rem] w-[5rem] hover:scale-105 cursor-pointer duration-300 "
          loading="lazy"
        />

        <p className="font-semibold mt-2 uppercase"> {data[1].name}</p>
        <p className="mt-2 p-4">{data[1].detail}</p>
      </div>
      <div
        className="flex items-center justify-center mb-4 md:mb-0 flex-col "

      >
        <Image
          src={`/clockblue.svg`}
          alt="features1"
          width={500}
          height={500}
          className="h-[5rem] w-[5rem] hover:scale-105 cursor-pointer duration-300 "
          loading="lazy"
          
        />

        <p className="font-semibold mt-2 uppercase"> {data[2].name}</p>
        <p className="mt-2 p-4">{data[2].detail}</p>
      </div>
    </div>
  );
}
