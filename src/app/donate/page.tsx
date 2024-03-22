import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DonateForm from './donateform'

export default function page() {
  return (
    <div >
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
              <p className="text-white font-bold text-4xl">Donate </p>
              <br />
              <p className="text-white">
                <Link href={"/"}>Home</Link> /{" "}
                <span className="text-green-300">Donate</span>
              </p>
            </div>
          </div>
        </div>

        <div className='text-semibold text-3xl text-center pt-[50px]'>
            <p className='mb-5'>DONATE AND PARTICIPATE WITH US</p>
            <hr className='mx-[30%] pt-5 '/>
            <p>A Best way to help the humanity and save tax.😊</p>

        </div>
        <DonateForm/>
      </div>
    </div>
  )
}
