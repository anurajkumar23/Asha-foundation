"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
import "./slider.css";
import Button from "@/app/utils/button";
import { Billboard } from "../../../../../types";
import Link from "next/link";



interface BillboardProps {
  data: Billboard
}

const Slider: React.FC<BillboardProps> = ({
   data
}) => {  
  const customStyle = {
    height: "615px",
    zIndex: "1",
    "@media (max-width: 500px)": {
      height: "500px",
    },
  };

  return (
    <div id="home">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mySlider"
        // style={customStyle}
      >
       {data.map((item) => (
        <SwiperSlide key={item.id} >
          <div className="relative h-full bg-cover z-1 sm:bg-left flex flex-col content-center justify-center items-center sm:text-xl text-lg uppercase text-center">
            <Image
              height={500}
              width={500}
              src={item.imageUrl} // Replace with the actual path to your image
              alt="Car Wash"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
            />
            <p className="sm:mb-10 relative bottom-2 ml-2 text-base sm:text-xl mb-2">
              {item.label1}
            </p>
            <p className="sm:text-5xl relative font-bold sm:mb-8 text-base bottom-3 text-[#404040]">
              {item.label2}
            </p>
           <Link href={item.linkUrl}>
            <Button text="Donate" goto="/donate" />
            </Link>
          </div>
          
        </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="relative h-full bg-cover sm:bg-left bg-center flex flex-col content-center justify-center items-center sm:text-2xl text-xl uppercase text-center">
            <Image
              height={500}
              width={500}
              src="/images/background-2.jpg" // Replace with the actual path to your image
              alt="Car Wash"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
            />
            <p className="sm:mb-10 relative bottom-2 ml-2 text-base sm:text-xl mb-2">
              Become A 
            </p>
            <p className="sm:text-5xl relative font-bold sm:mb-8 text-base bottom-3  text-[#404040]">
            Volunteer 
              
            </p>
            <Button text="Volunteer" goto="/donate" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Slider;