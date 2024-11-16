import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#044E83] p-7 sticky top-0 z-30 print:hidden">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={90}
          height={11}
          className="absolute -top-12 sm:mt-20 mt-14 md:w-[90px] sm:w-[80px] w-[70px]"
        />
      </Link>
      <div>
        <h1 className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
          Tuition Free Education Program on Latest Technologies
        </h1>

        <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
          Tuition Free Program
        </h1>
      </div>
      <ul className="flex gap-10 text-white">
        <li>Home</li>
        <li>Apply</li>
        <li>Jobs</li>
        <li>Result</li>
        <li>Courses</li>
      </ul>
    </div>
  );
};

export default Header;
