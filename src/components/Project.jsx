"use client";

import Image from "next/image";

export default function Project({ title, desc, image }) {
  return (
    <section className="w-full relative  overflow-hidden h-[250px] sm:w-[80%] md:w-[40%] lg:w-[30%] rounded-lg bg-contain bg-center">
      <img src={image} className="h-[250px] w-full" alt="image" />
      <div className="w-full h-full bg-[#1d1d1d93] z-50 absolute top-0 left-0">
        <h1 className="absolute bottom-5 left-2">{title}</h1>
      </div>
    </section>
  );
}
