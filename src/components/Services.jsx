import { services } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="my-20 md:mt-5 w-full min-h-[90vh]">
      <div className="  px-10  flex flex-col  justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/assets/Services.png"} width={1000} height={200} alt="services"/>
          
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap w-full">
          {services.map((service, index) => (
            <React.Fragment key={index} >
              <Service {...service} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
