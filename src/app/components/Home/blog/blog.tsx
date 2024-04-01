import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blog } from "../../../../../types";

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

interface BlogProps {
  data: Blog;
}

const blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className="pt-[45px]">
      <div className="text-center">
        <p className="font-bold text-3xl flex items-center justify-center mb-5 gap-x-2">
          <span className="border-b-2 border-green-500 w-16"></span>
          Our Blogs
          <span className="border-b-2 border-green-500 w-16"></span>
        </p>
        <p className=" md:px-[5%] px-[2%] mt-5">Welcome To Our Blog</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mx-5 md:mx-20">
          {data.map((blogs) => (
            <div
              key={blogs.id}
              className="cursor-pointer mx-auto border-2 rounded-xl shadow-xl"
            >
              <div className="flex justify-center">
                <Image
                  src={blogs.imageUrl}
                  alt="Donor"
                  width={500}
                  height={500}
                  className="sm:h-max-[16rem] sm:w-max-[22rem] md:h-[16rem] md:w-[22rem]  hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                  loading="lazy"
                />
              </div>
              <Link href={`/blogs/${blogs.id}`}>
                <div className="font-bold text-xl mb-2 hover:text-green-400 cursor-pointer">
                  {blogs.heading}
                </div>
              </Link>
              <div className="mb-2">
                {" "}
                Created At : {formatDate(blogs.createdAt)}{" "}
              </div>

              <div className="mb-2 h-[50px] box-border overflow-hidden mx-2">
                {blogs.descriptions}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default blog;
