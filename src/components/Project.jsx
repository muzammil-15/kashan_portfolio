"use client";

import Image from "next/image";
import { Drawer, DrawerTrigger } from "./ui/drawer";

import DrawerComponent from "./DrawerComponent";

export default function Project({ title, desc, image }) {
  const description = desc.slice(0,30)
  return (
    <Drawer className="w-full">
      <DrawerTrigger className="w-full relative  overflow-hidden h-[300px] sm:w-[80%] md:w-[40%] lg:w-[30%] rounded-lg bg-contain bg-center">
          <img src={image} className="h-[300px] w-full" alt="image" />
          <div className="w-full h-full bg-[#1d1d1dad] z-50 absolute top-0 left-0">
            <h1 className="absolute bottom-8 left-2 uppercase">{title.slice(0,40)}</h1>
            <p className="absolute bottom-3 left-2 text-sm">{description + "..."}</p>
          </div>
          

      </DrawerTrigger>
      <DrawerComponent title={title} desc={desc} image={image}/>
    </Drawer>
  );
}
