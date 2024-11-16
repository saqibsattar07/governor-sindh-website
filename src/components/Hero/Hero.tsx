import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Counter } from "../Counter/Counter";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div
      className={` relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bg_house.jpg')] bg-cover ${poppins.className}`}
    >
      <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>

      <div className=" z-50 m-auto mt-6 block w-[95%] items-center   justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px] ">
        <div className=" h-fit w-full pt-5 md:w-1/2 md:py-10">
          <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold text-[#044E83] leading-10 tracking-wider sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
            Governor Sindh
          </h1>
          <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal text-[#044E83] leading-[2rem] tracking-wider sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
            Kamran Khan Tessori
          </h1>
          <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold text-[#2EB6E8] leading-[2rem] tracking-wider sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
          </h1>
          <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-[#044E83] sm:text-2xl md:text-left">
            Earn up to $5,000 / month
          </p>
          <p className="my-5 w-full text-center text-[1.25rem] font-bold text-[#044E83] tracking-wider sm:text-2xl md:w-[80%] md:text-left">
            Now admissions are open in Hyderabad
          </p>
          <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
            <Link className="w-full md:w-auto" href={"/apply"}>
              <button className="w-full rounded-md py-3 text-center text-sm font-semibold bg-[#044E83] tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                APPLY NOW
              </button>
            </Link>
            <Counter />
          </div>
        </div>
        <div className=" relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
          <Image
            src="/cover.png"
            alt="piaic"
            width={1600}
            height={1212}
            className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
