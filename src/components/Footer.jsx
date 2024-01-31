import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full bg-[#131313]">
      <div className=" pt-14 pb-2 flex justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="w-full px-5 md:w-[80%] flex flex-col justify-between items-center gap-6 mx-auto">
          <h2 className="text-3xl md:text-5xl font-[700] text-[#FFF] text-center">Let’s Talk with Me!</h2>
          <p className="text-[#FFFFFF80] text-lg md:text-xl font-[500] text-center">
            
            I am always open to discuss your project, improve your online
            presence or help with your UI/UX deesign
          </p>
          <div className="flex justify-center gap-5 md:gap-10 items-center w-full">
            <Link href="https://twitter.com/kashan48207" target="_blank">
                <Image src={"/assets/t.png"} width={50} height={50} alt="tweeter"/>
            </Link>
            <Link href="https://www.linkedin.com/feed/" target="_blank">
                <Image src={"/assets/l.png"} width={50} height={50} alt="linkedin"/>
            </Link>
            <Link href="https://dribbble.com/kashan909042" target="_blank">
                <Image src={"/assets/d.png"} width={50} height={50} alt="dribble"/>
            </Link>
            <Link href="https://wa.link/mj6z3v" target="_blank">
                <Image src={"/assets/w.png"} width={50} height={50} alt="whatsapp"/>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/meer2keman@gmail.com" target="_blank">
                <Image src={"/assets/m.png"} width={50} height={50} alt="email"/>
            </Link>
          </div>
          <div className="text-[#FFFFFF80] text-sm sm:text-lg md:text-xl font-[500] text-center">Created by <span className="text-[#FFF] font-[700]">Kashan Mir</span> | All Reserved!</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
