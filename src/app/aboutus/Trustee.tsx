import Image from 'next/image'
import React from 'react'
import { AboutUs, Trustee } from '../../../types'

interface TrusteeProps {
    data: Trustee; // Corrected to Trustee[]
    aboutUs: AboutUs;
}

const Trustees: React.FC<TrusteeProps> = ({
    data,
    aboutUs
}) => {
    
    return (
        <div>
            <div className="pt-[70px] text-center">
                <p className="font-bold text-2xl text-[#072366] mb-5">
                    {" "}
                    BOARD OF TRUSTEES
                </p>
                <p className="text-lg">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                    deleniti, ut culpa aspernatur incidunt eaque modi ipsam recusandae{" "}
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5  md:mx-20 ">
                    {data.map((trustee) => (
                        <div key={trustee.id} className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
                            <Image
                                src={trustee.photoUrl}
                                alt="trustee"
                                width={500}
                                height={500}
                                className="h-[15rem] w-[17rem] hover:scale-105 cursor-pointer duration-300"
                                loading="lazy"
                            />
                            <p className="font-semibold text-2xl mt-3">{trustee.name}</p>
                            <p className="mt-3 text-green-500 text-xl mb-2">
                                {trustee.post}
                            </p>
                        </div>
                    ))}
                    <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
                        <Image
                            src={`/images/trustee.jpg`}
                            alt="trustee"
                            width={500}
                            height={500}
                            className="h-[15rem] w-[17rem] hover:scale-105 cursor-pointer duration-300"
                            loading="lazy"
                        />
                        <p className="font-semibold text-2xl mt-3">MR. Mukesh Jha</p>
                        <p className="mt-3 text-green-500 text-xl mb-2">
                            Organisation Consultant
                        </p>
                    </div>
                    <div className="rounded border-2 text-center flex flex-col justify-center items-center hover:border-green-500">
                        <Image
                            src={`/images/trustee.jpg`}
                            alt="trustee"
                            width={500}
                            height={500}
                            className="h-[15rem] w-[17rem] hover:scale-105 cursor-pointer duration-300"
                            loading="lazy"
                        />
                        <p className="font-semibold text-2xl mt-3">MR. Mukesh Jha</p>
                        <p className="mt-3 text-green-500 text-xl mb-2">
                            Organisation Consultant
                        </p>
                    </div>
                </div>
                <div className="pt-[70px] text-center ">
                    <p className="font-bold text-2xl text-[#072366] mb-5">
                        {" "}
                        OUR MEMBERS
                    </p>
                    {aboutUs.map((aboutUs) => (
                        <Image
                            key={aboutUs.id}
                            src={aboutUs.ourMembersUrl}
                            alt="trustee"
                            width={500}
                            height={500}
                            className=" sm:h-[36rem] sm:w-[60rem] h-max-[36rem] w-max-[60rem] hover:scale-105 cursor-pointer duration-300 mx-auto"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trustees
