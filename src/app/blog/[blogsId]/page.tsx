import Image from "next/image";
import Link from "next/link";
import React from "react";
import Work from "@/app/components/Home/works/work";
import getBlog from "@/action/get-blog";
import getCampaign from "@/action/get-campaign";

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


export default async function page() {
  const blogs = await getBlog()
  const campaign = await getCampaign()

  return (
    <div>
      {blogs.map((blogs) => (
      <div key={blogs.id}>
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
                <span className="text-green-300">Single Blog</span>
              </p>
            </div>
          </div>
        </div>

       
        <div className="pt-[50px] text-center">
          <Image
            height={500}
            width={500}
            src={blogs.imageUrl}
            alt="galery-01"
            className="mx-auto "
          />
          <div className="flex justify-center mt-5">
            <p className="mr-5">Author: {blogs.author}</p>
            <p>Date : {formatDate(blogs.createdAt)}</p>
          </div>
          <h2 className="mt-5 mb-5 hover:text-green-300 text-xl font-semibold">
           {blogs.heading}
          </h2>
          <p className="mx-[5%] ">
           {blogs.descriptions}
          </p>
          <p className="mt-5 text-right mx-[5%]">
            share: facebook , whatsapp ,instagram , telegram{" "}
          </p>
        </div>
        <Work data = {campaign} />
      </div>
      ))}
    </div>
  );
}
