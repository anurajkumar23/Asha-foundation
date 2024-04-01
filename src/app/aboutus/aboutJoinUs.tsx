"use client"
import React, { useState } from 'react'
import Button from '../utils/button'
import JoinUsForm from '../components/joinus/JoinUsForm';

const AboutJoinUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleJoinUsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-center">
    <p className="text-white text-4xl font-semibold mb-5">
      Become A volunteer To Help Others
    </p>
    <div onClick={handleJoinUsClick}>
    <Button text="Join Us" goto="" />
    </div>
    {showModal && <JoinUsForm onClose={handleCloseModal} />}
  </div>
  )
}

export default AboutJoinUs;
