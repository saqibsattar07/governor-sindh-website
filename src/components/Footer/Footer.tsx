import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-zinc-100 mt-20 print:hidden">
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto py-20">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="text-zinc-800">
            <h1 className="font-bold text-xl">Core Courses</h1>
            <div className="mt-5 flex flex-col gap-3 md:text-base text-sm">
              <Link href="/compulsory/1" className="truncate">
                Core Course 1
              </Link>
              <Link href="/compulsory/2" className="truncate">
                Core Course 2
              </Link>
              <Link href="/compulsory/3" className="truncate">
                Core Course 3
              </Link>
            </div>
          </div>
          <div className="text-zinc-800">
            <h1 className="font-bold text-xl">Advance Courses</h1>
            <div className="mt-5 flex flex-col gap-3 md:text-base text-sm">
              <Link href="/tracks/1/4" className="">
                Advanced Course 1
              </Link>
              <Link href="/tracks/2/4" className="">
                Advanced Course 2
              </Link>
              <Link href="/tracks/3/4" className="">
                Advanced Course 3
              </Link>
            </div>
          </div>

          <div className="text-zinc-800">
            <h1 className="font-bold text-xl">Social Links</h1>
            <div className="mt-5 flex gap-3 md:text-sm">
              <Link
                href="https://www.facebook.com/groups/panaverse"
                target="_blank"
                className="w-10 h-10 bg-[#044E83] rounded-full flex justify-center items-center text-white"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="https://twitter.com/Panaverse_edu"
                target="_blank"
                className="w-10 h-10 bg-[#044E83] rounded-full flex justify-center items-center text-white"
              >
                <FaTwitter size={16} />
              </Link>
              <Link
                href="https://www.youtube.com/@panaverse/streams"
                target="_blank"
                className="w-10 h-10 bg-[#044E83] rounded-full flex justify-center items-center text-white"
              >
                <FaYoutube size={16} />
              </Link>
              <Link
                href="https://github.com/panaverse"
                target="_blank"
                className="w-10 h-10 bg-[#044E83] rounded-full flex justify-center items-center text-white"
              >
                <FaGithub size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
