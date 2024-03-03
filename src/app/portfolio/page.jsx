"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Web Ide",
    desc: "EveryIde는 웹에서 코딩실습을 도와주는 프로젝트입니다. 코딩실습을 함께할 팀원을 찾을 수 있는 플랫폼 기능을 합니다. 나아가 구성된 팀원과 채팅을 하며 동시편집이 가능한 코딩에디터 입니다.",
    img: "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/web-ide.gif",
    link: "https://k547f55f71a44a.user-app.krampoline.com",
    github: "https://github.com/every-ide/IDE-FRONTEND",
    pdf: "junhyeongchae's webide project.pdf",
    pdfs3:
      "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%AE%E1%86%AF%E1%84%89%E1%85%B3%E1%84%90%E1%85%A2%E1%86%A83%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1_WEBIDE_3%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%A6%E1%84%87%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC_%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5.pdf",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next Where Bnb",
    desc: "Airbnb사이트를 모티브한 프로젝트 입니다. ",
    img: "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/where-bnb.gif",
    github: "https://github.com/Develsopher/wherebnb-frontend",
    pdf: "junhyeongchae's wherebnb project.pdf",
    pdfs3:
      "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/wherebnb-%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5.pdf",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Develsopher Blog",
    desc: "공부한 Web관련 기술들과 진행한 프로젝트 과정을 기록하는 개인 블로그 프로젝트입니다.",
    img: "https://develsopher-nextjs.s3.ap-northeast-2.amazonaws.com/develsopher-blog.png",
    link: "https://develsopher.com",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[650px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill className="rounded-xl" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[750px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-x-4 items-center">
                    {item.link && (
                      <Link
                        href={item.link}
                        className="flex justify-start"
                        target="_blank"
                      >
                        <button className="p-2 text-sm bg-white text-gray-600 font-semibold rounded hover:bg-black/5 hover:text-black transition flex items-center gap-x-2">
                          <p>Visit Page</p>
                          <FaExternalLinkAlt />
                        </button>
                      </Link>
                    )}
                    {item.pdf && (
                      <a href={item.pdfs3} download={item.pdf} target="_blank">
                        <button className="p-2 text-sm bg-white text-gray-600 font-semibold rounded hover:bg-black/5 hover:text-black transition flex items-center gap-x-2">
                          <p>Download PDF</p>
                          <MdOutlineFileDownload />
                        </button>
                      </a>
                    )}
                    {item.github && (
                      <Link
                        href={item.github}
                        className="flex justify-start"
                        target="_blank"
                      >
                        <FaGithub className="w-8 h-8 text-black" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">I can do anything!</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Interactive Developer
              </textPath>
            </text>
          </motion.svg>
          <a
            target="_blank"
            href="https://github.com/develsopher"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Git Hub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
