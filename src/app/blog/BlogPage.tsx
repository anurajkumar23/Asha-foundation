import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { GoPerson } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { Blog } from '../../../types';


interface BlogPageProps{
    data:Blog
}

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

  

const BlogPage:React.FC<BlogPageProps> = ({
    data
}) => {
  return (
<div className="flex flex-col justify-center text-center w-full lg:w-2/3 ">
{data.map((blogs)=>(
          <div key={blogs.id} className=" flex flex-col w-full pt-6 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center">
            <div className="max-lg:ml-0 max-lg:rounded-xl rounded-l-xl w-full lg:w-1/4 bg-green-500 text-white font-semibold ">
              <div className="flex items-center justify-center mb-2 ">
                <GoPerson className="mr-1" />
                <p>{blogs.author}</p>
              </div>
              <div className="flex items-center justify-center mb-2 ">
                <IoCalendarOutline className="mr-1" />
                <p>{formatDate(blogs.createdAt)}</p>
              </div>
            </div>
            <div className="cursor-pointer w-full lg:w-2/3 border-2 p-2 rounded-xl">
              <div className="flex justify-center mb-2">
                <Image
                  src={blogs.imageUrl}
                  alt="Gallery Image"
                  height={500}
                  width={500}
                  loading="lazy"
                  className="h-max-[20rem] w-max-[38rem] hover:scale-105 cursor-pointer duration-300 mb-2 rounded-xl"
                />
              </div>
              <Link href={`/blog/${blogs.id}`}>
                <p className="font-bold text-xl mb-2 text-gray-800 cursor-pointer hover:text-green-400">
                  {blogs.heading}
                </p>
              </Link>
              <p className="mb-2 text-gray-600">
               {blogs.descriptions}
              </p>
            </div>
          </div>
          ))}
        </div>
  )
}

export default BlogPage
