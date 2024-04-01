import Button from "@/app/utils/button";
import ProgressBar from "@/app/utils/progressbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Campaign } from "../../../../../types";

interface CampaignProps {
  data: Campaign[];
}

const work: React.FC<CampaignProps> = ({ data }) => {
  return (
    <div className="pt-[120px]">
      <div className="text-center">
        <div className="flex items-center justify-center mb-5 gap-x-2">
          <div className="border-b-2 border-green-500 w-16"></div>
          <p className="font-bold text-3xl">Campaigns</p>
          <div className="border-b-2 border-green-500 w-16"></div>
        </div>
        <p className=" md:px-[5%] px-[2%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mx-5 md:mx-15 md:gap-5 lg:mx-20 lg:gap-10">
          {data.map((campaigns) => (
            <Link href={`/campaigns/${campaigns.id}`} key={campaigns.id}>
              <div className="cursor-pointer mx-auto border-2 rounded-xl shadow-xl pb-3">
                <div className="flex justify-center">
                  <Image
                    src={campaigns.imageUrl}
                    alt="Donor"
                    width={500}
                    height={500}
                    className=" sm:h-max-[16rem] sm:w-max-[22rem] md:h-[16rem] md:w-[22rem]  hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="mx-2">
                <ProgressBar maxValue={campaigns.goalAmount} value={campaigns.raisedAmount} />
                </div>

                <div className="flex justify-between px-2 mb-5">
                  <div>
                    Raised :{" "}
                    <span className="text-[#5F646B]">
                      {campaigns.raisedAmount}
                    </span>
                  </div>
                  <div>
                    Goal :{" "}
                    <span className="text-[#5F646B]">
                      {campaigns.goalAmount}
                    </span>
                  </div>
                </div>
                <div className="font-bold text-xl mb-5">
                  {campaigns.campaign} : {campaigns.heading}
                </div>
                <div className="mb-2 h-[50px] box-border overflow-hidden mx-2">
                  {campaigns.descriptions}
                </div>
                <Button text="Donate Now" goto={`/campings/:${campaigns.id}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default work;
