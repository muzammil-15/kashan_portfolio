import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Image from "next/image";
import Link from "next/link";

const DrawerComponent = ({ title, desc, image, image1, href }) => {
  return (
    <DrawerContent className=" w-full md:w-[90%] lg:w-[70%] mx-auto max-h-[80vh] border-none  max-w-screen-2xl bg-[#1d1d1def] ">
      <DrawerHeader className="mt-5">
        <DrawerTitle className="text-xl md:text-2xl font-[700] text-[#FFF]">
          Project Detail
        </DrawerTitle>
        <DrawerDescription className="text-sm text-[#949494] font-[500]">
          Details About The Porject
        </DrawerDescription>
        <hr className="border-[0.5px] border-[#818080b2] w-[100%] mt-4" />
      </DrawerHeader>
      <DrawerClose className="absolute top-14 right-5 transition-all ease-in border border-gray-200 hover:border-orange-300 rounded-lg py-1 px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="white"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="hover:stroke-orange-300 transition-all ease-in "
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </DrawerClose>

      <div className="w-full py-5 px-5 z-50 overflow-y-auto box-border">
        <h2 className="text-2xl md:text-3xl font-[700] text-[#FFF]">{title}</h2>
        <p className="text-sm text-[#949494] font-[500] mt-4">{desc}</p>
        <Image
          src={image1}
          width={1000}
          height={400}
          alt="title"
          className="mt-6 px-10"
        />
        <div className="my-5 w-full flex justify-center items-center">
          <Link href={href} target="_blank">
            <button className="flex justify-center items-center py-3 px-6 rounded-full bg-[#FF9142] hover:bg-[#f07f2e] text-[#F4F7FA] text-sm">
              View more
            </button>
          </Link>
        </div>
      </div>
    </DrawerContent>
  );
};

export default DrawerComponent;
