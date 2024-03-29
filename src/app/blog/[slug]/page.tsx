import Image from "next/image";
import Link from "next/link";
import React from "react";
import Work from "@/app/components/Home/works/work";

export default function page() {
  return (
    <div>
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
            src="/images/background-1.jpg"
            alt="galery-01"
            className="mx-auto "
          />
          <div className="flex justify-center mt-5">
            <p className="mr-5">Author: Ishu Singh</p>
            <p>Date : 22 March 2024</p>
          </div>
          <h2 className="mt-5 mb-5 hover:text-green-300 text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi
            dicta inventore?
          </h2>
          <p className="mx-[5%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            facere. Laudantium dolorum magnam debitis quibusdam. Iure animi qui
            velit exercitationem? Sint aliquam dolore aperiam neque, perferendis
            officia quo iusto sequi eaque debitis veritatis ratione vel
            doloribus tenetur rerum consequuntur nesciunt eum! Ut asperiores eos
            labore veniam, odio soluta ea sit. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Corporis unde dolore sint modi ex
            ipsum? Corporis expedita accusantium quisquam magnam voluptatum
            maiores dolorem laudantium aperiam recusandae animi, ad voluptate
            facere dolore reprehenderit pariatur iste molestias, quaerat eaque
            iure beatae eligendi libero rem quae nulla! Nisi ex similique ipsam
            voluptate earum aspernatur quae pariatur tempora corrupti dolorem
            facilis harum perferendis, tenetur culpa consectetur dolore,
            voluptatem omnis id itaque possimus hic, animi numquam? Eos nemo,
            atque nam officia debitis, magni magnam dolore officiis fugiat optio
            neque vel illum labore vitae quidem praesentium fuga eveniet.
            Dolorum repellendus eveniet quaerat. Quisquam commodi eum provident?
          </p>
          <p className="mt-5 text-right mx-[5%]">
            share: facebook , whatsapp ,instagram , telegram{" "}
          </p>
        </div>
        <Work/>
      </div>
    </div>
  );
}
