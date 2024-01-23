
import Image from "next/image";


const Testimonail = () => {
  return (
    <div className="my-20 md:mt-5 w-full min-h-[90vh]">
      <div className="ml-5 sm:ml-10 md:ml-20 px-5  md:px-10  flex flex-col  justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/assets/testimonial.png"} width={1200} height={200} />
          
        </div>
       
      </div>
    </div>
  );
};

export default Testimonail;
