"use client"
import Button from "@/app/utils/button";
import Image from "next/image";
import React, { useState } from "react";
import JoinUsForm from "../../joinus/JoinUsForm";

export default function Volunteer() {
  const [showModal, setShowModal] = useState(false);

  const handleJoinUsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="pt-[120px]">
      <div className="font-bold text-3xl text-center flex items-center justify-center mb-5 gap-x-2">
      <div className="border-b-2 border-green-500 w-16"></div>
        Become A Volunteer
        <div className="border-b-2 border-green-500 w-16"></div>
        </div>
      <div className="relative mt-7">
        <Image
          height={500}
          width={500}
          src="/images/background-2.jpg"
          alt="Car Wash"
          loading="lazy"
          className="object-cover w-full h-[400px]"
        />
        <div onClick={handleJoinUsClick} className="absolute inset-0 flex items-center justify-center">
          <Button text="Join Us Now" goto=""/>
          
        </div>
        {showModal && <JoinUsForm onClose={handleCloseModal} />}
      </div>
    </div>
  );
}
