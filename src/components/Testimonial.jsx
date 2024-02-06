import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { testimonials } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

const Testimonail = () => {
  return (
    <div className="mt-20 md:mt-5 w-full overflow-hidden">
      <div className=" my-10 px-10  flex flex-col gap-10 justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/assets/testimonial.png"}
            width={1000}
            height={200}
            alt="testimonials"
          />
          <h2 className="text-2xl sm:text-3xl mt-[-20px] font-[500] md:font-[700] md:text-5xl text-[#FFFFFF] md:mt-[-30px]">
            Testimonials
          </h2>
        </div>
        <div className="relative md:my-10 w-full">
          <Carousel
            className="md:mx-10"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              AutoScroll({
                startDelay: 0,
                stopOnInteraction: false,
                stopOnFocusIn: false,
              }),
            ]}
          >
            <CarouselContent className="">
              {testimonials.map((testi, ind) => (
                <CarouselItem
                  key={ind}
                  className=" relative flex justify-center items-center p-10"
                >
                  <div className="w-full md:w-[80%] bg-[#1A1A1A] p-2 md:p-6 z-20">
                    <div className="bg-[#525252] p-2 md:p-6 flex justify-center items-center flex-col gap-5">
                      <p className="text-center w-full md:w-[90%] lg:w-[70%] text-[10px] md:text-base ">
                        {testi.desc}
                      </p>
                      <pre>{testi.name}</pre>
                    </div>
                  </div>
                  <Image
                    src={"/assets/dots.png"}
                    width={250}
                    height={250}
                    alt="dots"
                    className="absolute top-[-50px] right-16 z-10 hidden md:block"
                  />
                  <Image
                    src={"/assets/dots.png"}
                    width={250}
                    height={250}
                    alt="dots"
                    className="absolute bottom-[-50px] left-20 z-10 hidden md:block"
                  />
                  <Image
                    src={testi.image}
                    width={70}
                    height={70}
                    alt="client"
                    className="absolute bottom-[0px] right-0 sm:right-5 md:right-20 z-[999]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
