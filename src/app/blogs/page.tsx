import Image from "next/image";
import Link from "next/link";

import ProgressBar from "@/app/utils/progressbar";
import BlogPage from "./BlogPage";
import getBlog from "@/action/get-blog";
import getCampaign from "@/action/get-campaign";

export default async function Page() {

  const blog = await getBlog()
  const campaign = await getCampaign()

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
              <Link href={"/"}>Home /</Link>
              <span className="text-green-300"> Blog</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 lg:flex-row lg:justify-between mx-6">

        <BlogPage data={blog} />
        <div className="w-full lg:w-1/3  ">
          <div className="flex flex-col ">
            <p className="font-bold flex text-2xl mb-4 items-center justify-center text-gray-800 lg:text-right">
              Latest Campaigns
            </p>

            <div className="flex flex-col space-y-4 mx-2">
              {campaign.map((campaigns) => (
                <Link href={`/campaigns/${campaigns.id}`} key={campaigns.id}>
                  <div className="border-2 rounded-lg flex items-center space-x-2 p-2">
                    <Image
                      src={campaigns.imageUrl}
                      alt="Cause Image"
                      height={500}
                      width={500}
                      loading="lazy"
                      className="w-24 h-16 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                    />

                    <div className="flex flex-col">
                      <p className="font-bold text-lg text-gray-800 cursor-pointer hover:text-green-400">
                        {campaigns.campaign} : {campaigns.heading}
                      </p>

                      <ProgressBar maxValue={campaigns.goalAmount} value={campaigns.raisedAmount} />
                      <div className="flex justify-between text-xs">
                        <p>Raised : <span className="text-gray-600"> {campaigns.raisedAmount}</span></p>
                        <p>Goal : <span className="text-gray-600">{campaigns.goalAmount}</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}