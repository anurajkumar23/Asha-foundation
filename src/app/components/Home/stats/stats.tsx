import Image from "next/image";
import React from "react";

export default function stats() {
  return (
    <div>
      <div className="grid mxs:grid-cols-2 md:grid-cols-4 gap-4 mt-10 mx-5 md:mx-20 ">
        <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
          <Image
            src={`/Donor.svg`}
            alt="Donor"
            width={500}
            height={500}
            className="h-[7rem] w-[7rem] hover:scale-105 cursor-pointer duration-300"
            loading="lazy"
          />
          <p className="font-semibold text-2xl mt-3">100k</p>
          <p className="mt-3 text-green-500 text-xl mb-2">Donors</p>
        </div>
        <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
          <Image
            src={`/lifesaved.svg`}
            alt="Donor"
            width={500}
            height={500}
            className="h-[7rem] w-[7rem] hover:scale-105 cursor-pointer duration-300"
            loading="lazy"
          />
          <p className="font-semibold text-2xl mt-3">100k</p>
          <p className="mt-3 text-green-500 text-xl mb-2">Life Saved</p>
        </div>
        <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
          <Image
            src={`/money.svg`}
            alt="Donor"
            width={500}
            height={500}
            className="h-[7rem] w-[7rem] hover:scale-105 cursor-pointer duration-300"
            loading="lazy"
          />
          <p className="font-semibold text-2xl mt-3">100k</p>
          <p className="mt-3 text-green-500 text-xl mb-2">Donated</p>
        </div>
        <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
          <Image
            src={`/Volunteer.svg`}
            alt="Donor"
            width={500}
            height={500}
            className="h-[7rem] w-[7rem] hover:scale-105 cursor-pointer duration-300"
            loading="lazy"
          />
          <p className="font-semibold text-2xl mt-3">100k</p>
          <p className="mt-3 text-green-500 text-xl mb-2">Volunteers</p>
        </div>
        
      </div>
    </div>
  );
}
