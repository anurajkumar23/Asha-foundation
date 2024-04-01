import ProgressBar from "@/app/utils/progressbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DonateForm from "@/app/donate/donateform";

import getCampaigns from "@/action/get-campaigns";

interface CampaignPageProps {
    params: {
        campaignId: string;
    },
}

const CampaignPage: React.FC<CampaignPageProps> = async ({
params
}) => {

    const campaigns = await getCampaigns(params.campaignId);

    // console.log(campaigns)

    return (
        <div>
            <div>
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
                            <p className="text-white font-bold text-4xl">Campings Page </p>
                            <br />
                            <p className="text-white">
                                <Link href={"/"}>Home</Link> /{" "}
                                <span className="text-green-300">Single Cause</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-[50px] max-sm:mx-[2%]">
                    <Image
                        src={campaigns.imageUrl}
                        alt="Donor"
                        width={500}
                        height={500}
                        className="sm:h-[30rem] sm:w-[55rem] h-max-[30rem] w-max-[55rem] hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl mx-auto"
                        loading="lazy"
                    />
                    <div className="mx-[20%] max-sm:mx-[3%] ">
                        <ProgressBar maxValue={campaigns.goalAmount} value={campaigns.raisedAmount} />
                        <div className="flex justify-between px-2 mb-5">
                            <div>
                                Raised : <span className="text-[#5F646B]">{campaigns.raisedAmount}</span>
                            </div>
                            <div>
                                Goal : <span className="text-[#5F646B]">{campaigns.goalAmount}</span>
                            </div>
                        </div>
                        <div className="font-bold text-xl mb-5">{campaigns.campaign} : {campaigns.heading}</div>
                        <div className="mb-2  ">
                           {campaigns.descriptions}
                        </div>
                        <div className="mb-5 mt-2">
                            Share : Facebook , instagram , telegram ,Whastapp
                        </div>
                        <DonateForm campings="Women Education" />
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default CampaignPage;