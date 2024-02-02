"use client";

import Image from "next/image";
import Link from "next/link";

export default function Social({ href, image }) {
  return (
    <section className="w-full relative  overflow-hidden h-[250px] sm:w-[80%] md:w-[40%] lg:w-[30%] rounded-[18px] bg-contain bg-center hover:shadow-[0_0px_30px_0px_rgba(167,_152,_152,_0.57)] hover:overflow-hidden">
    <Link href={href} alt={"social images"} className="overflow-hidden " target="_blank">
        <Image src={image} fill/>

    </Link>
      
    </section>
  );
}
