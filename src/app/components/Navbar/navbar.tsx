import Image from 'next/image'
import React from 'react'

export default function navbar() {
  return (
    <div>
      <div className='flex  flex-row px-5 bg-[#f8f8f8] shadow items-center py-2 justify-between' >
        <div >
        <Image width={500} height={500} alt="logo"  src="/images/asha-logo.png" className='w-[80px] h-[80px] '  />
        </div>
        <div className='flex text-xl w-1/3 justify-between'>
            <p className='ml-5 text-center cursor-pointer hover:text-red-300'>Home</p>
            <p className='ml-5 text-center cursor-pointer hover:text-red-300'>About Us</p>
            <p className='ml-5 text-center cursor-pointer hover:text-red-300'>Blog</p>
            <p className='ml-5 text-center cursor-pointer hover:text-red-300'>Donate</p>
        </div>
        <div className='border-2 rounded-sm px-3 py-2 hover:text-white cursor-pointer hover:bg-red-300 '>Login</div>
      </div>
    </div>
  )
}
