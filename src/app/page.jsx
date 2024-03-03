"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Nanum_Pen_Script } from "next/font/google";
import Link from "next/link";

const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });
const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 lg:items-start items-center justify-center">
          {/* title */}
          <div className="mt-6 lg:mt-0">
            <p className="text-4xl md:text-6xl font-bold">
              성장의 즐거움을 아는
            </p>
            <p className="text-4xl md:text-6xl font-bold">프론트엔드 개발자</p>
            <p className="text-4xl md:text-6xl font-bold">
              <span className={nanum.className}>채준형</span> 입니다.
            </p>
          </div>
          <p className="md:text-xl"></p>
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/about">더 알아보기</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/portfolio">작업물 둘러보기</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
