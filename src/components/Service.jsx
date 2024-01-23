"use client";

import Image from "next/image";



export default function Service({ title, desc, image }) {
  return (
    <section className="w-full  flex flex-col gap-6 p-6 justify-center items-center lative card   overflow-hidden h-[250px] md:h-[310px] sm:w-[80%] md:w-[40%] lg:w-[30%] rounded-[10px]  bg-contain bg-center" >
      <Image src={image} width={80} height={80} alt="service"/>

        <h1 className="text-2xl text-center md:text-3xl font-[700]">{title}</h1>
        <p className="text-center text-[#FFFFFF80] text-lg md:text-xl font-[500]">{desc}</p>

    </section>
  );
}
