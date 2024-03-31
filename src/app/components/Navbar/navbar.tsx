"use client"
import Button from '@/app/utils/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import JoinUsForm from '../joinus/JoinUsForm'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const handleJoinUsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      <div className='flex fixed w-full flex-row px-5 z-20 bg-slate-100 shadow-xl items-center py-2 justify-between'>
        <div>
        <Link href="/"> 
          <Image width={500} height={500} alt="logo" src="/images/asha-logo.png" className='w-[80px] h-[80px]' />
          </Link>
        </div>

        <ul className="'ml-4 hidden items-center md:flex text-xl lg:w-1/3 md:w-1/2 justify-between">
          <Link href="/">
            <li className=' cursor-pointer hover:text-red-300'>Home</li>
          </Link>
          <Link href="/aboutus">
            <li className=' cursor-pointer hover:text-red-300'>About Us</li>
          </Link>
          <Link href="/blog">
            <li className=' cursor-pointer hover:text-red-300'>Blog</li>
          </Link>
          <Link href="/donate">
            <li className=' cursor-pointer hover:text-red-300'>
            <Button text="Donate" goto="/donate" /></li>
          </Link>
        </ul>
        <div className='flex items-center gap-x-3 '>
          <div className=' border-2 rounded-xl px-3 py-2 hover:text-white text-red-600 text-xl font-bold cursor-pointer hover:bg-red-300 hover:border-red-400' onClick={handleJoinUsClick} >Join us</div>
          {showModal && <JoinUsForm onClose={handleCloseModal} />}
          <div onClick={handleNav} className='md:hidden cursor-pointer relative'>
            <AiOutlineMenu size={25} className='justify-end' />
          </div>
        </div>
        <div className={
          menuOpen ? "fixed left-0 top-0 w-[60%] md:hidden h-screen bg-slate-200 p-8 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
          <div onClick={handleNav} className='flex cursor-pointer items-center justify-end'>
            <AiOutlineClose size={25} />
          </div>
          <div className='flex-col py-4'>
            <ul >
            <Link href="/">
            <li onClick={handleNav} className='py-4 text-center cursor-pointer hover:text-red-300'>Home</li>
          </Link>
          <Link href="/aboutus">
            <li onClick={handleNav} className='py-4 text-center cursor-pointer hover:text-red-300'>About Us</li>
          </Link>
          <Link href="/blog">
            <li onClick={handleNav} className='py-4 text-center cursor-pointer hover:text-red-300'>Blog</li>
          </Link>
          <Link href="/donate">
            <li onClick={handleNav} className='py-4 text-center cursor-pointer hover:text-red-300'>Donate</li>
          </Link>
            </ul>
          </div>
          <div className='flex flex-row justify-around p-2 items-center cursor-pointer'>
            <FaInstagram className="text-pink-500 w-7 h-7" />
            <FaFacebook className="text-blue-500 w-7 h-7" />
            <FaTwitter className="text-blue-400 w-7 h-7" />
            <FaWhatsapp className="text-green-500 w-7 h-7" />
          </div>
          <div className='w-full flex justify-center pt-2'>
            <Link href="/">
            <Image width={500} height={500} alt="logo" src="/images/asha-logo.png" className='w-[80px] h-[80px]' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
