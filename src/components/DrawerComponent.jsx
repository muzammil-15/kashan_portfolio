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
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DrawerComponent = ({ title, desc, image }) => {
  return (
      <DrawerContent className="w-full md:w-[90%] lg:w-[70%] mx-auto max-h-[70vh] border-none overflow-y-scroll max-w-screen-2xl bg-[#1d1d1def] ">
        <DrawerHeader className='mt-5'>
          <DrawerTitle className="text-xl md:text-2xl font-[700] text-[#FFF]">Project Detail</DrawerTitle>
          <DrawerDescription className='text-sm text-[#949494] font-[500]'>Details About The Porject</DrawerDescription>
          <hr className="border-[0.5px] border-[#818080b2] w-[100%] mt-4" />
        </DrawerHeader>
        <div className="w-full my-5 px-5 z-50">
          <h2 className="text-2xl md:text-3xl font-[700] text-[#FFF]">
            {title}
          </h2>
          <p className="text-sm text-[#949494] font-[500] mt-4">
            {desc}
          </p>
          <Image src={image} width={1000} height={600} alt="title" className="mt-6"/>
        </div>
      </DrawerContent>
  );
};

export default DrawerComponent;
