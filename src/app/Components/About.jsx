"use client";
import React from "react";
import { arrow } from "../../../public/images";
import Image from "next/image";
import SlideShow from "./SlideShow";
import { useState } from "react";

function About() {
  const [useHover, setHover] = useState(false);
  const [useHover1, setHover1] = useState(false);
  const [useHover2, setHover2] = useState(false);
  const handleHover = () => {
    setHover(!useHover);
  };
  const handleHover1 = () => {
    setHover1(!useHover);
  };
  const handleHover2 = () => {
    setHover2(!useHover);
  };

  return (
    <>
      <div className="flex  text-black justify-center mt-[100px] mb-[50px] flex-col items-center px-3 sm:px-10">
        <h3 className="text-[#999999] text-[15px] sm:text-[20px] w-[99%]">
          02 --- About Us
        </h3>
        <div className="flex justify-between items-center w-[99%]">
          <h1 className="md:text-[50px] text-[20px] sm:text-[30px] font-bold  ">
            We Strive to Innovate
          </h1>
          <div className="md:flex hidden justify-center items-center py-3 px-6 gap-2  rounded-3xl bg-[#F1F1F1] ">
            <p className="">Become a client</p>{" "}
            <Image className="w-4 h-5" src={arrow} alt="" />
          </div>
        </div>
        <div className="border mt-4 border-t border-r border-l border-b-0 border-[#999999] w-[100%] sm:w-[99%] h-[20px] "></div>
        <div className="flex mt-[30px] sm:mt-[50px]  justify-between flex-row w-[99%]  ">
          <div className="flex flex-col w-[370px] lmd:w-[550px]  justify-center items-start">
            <p className="mb-[30px] text-[18px]">
              Solid Strategy
              <span className="text-[#999999]">
                {" "}
                aligned with business needs and robust data analysis are
                fundamental ingredients to extract actionable insights
              </span>
            </p>
            <p className="my-[20px]">Some Number About Us</p>
            <div className="grid grid-cols-2 gap-2 grid-row-2 w-full  ">
              <div className="rounded-3xl relative z-[0] w-[180px]  lg:w-[270px] p-4 pt-2 overflow-hidden bg-[#F2F0F0] lg:h-[180px] h-[140px]">
                <h1 className="text-[30px] lg:text-[45px] z-[2] font-bold">
                  +300
                </h1>
                <p className="text-[13px] absolute  w-[160px] z-[2] text-[#000]">
                  We have successfully completed a total of 300+ projects
                </p>
                <div className="absolute lg:bottom-[-25px] bottom-[-20px] right-[-20px] lg:right-[-30px] rounded-3xl z-[1]">
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
                  >
                    <source
                      src="https://awsmd.com/media/about/volchek-color.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="rounded-3xl relative w-[180px] lg:w-[270px] overflow-hidden p-4 pt-2 bg-[#F2F0F0]  lg:h-[180px] h-[140px]">
                <h1 className="text-[30px] lg:text-[45px] font-bold">100K</h1>
                <p className="text-[12px]  absolute z-[2] w-[140px] text-[#000]">
                  We’ve gathered dozens of reviews from the clients and + 100k
                  reviews from their users
                </p>
                <div className="absolute lg:bottom-[-30px] bottom-[-20px] right-[-20px] lg:right-[-40px] rounded-3xl z-[1]">
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
                  >
                    <source
                      src="https://awsmd.com/media/about/pruzina-color.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="rounded-3xl relative w-[180px] lg:w-[270px] p-4 pt-2 overflow-hidden bg-[#F2F0F0] lg:h-[180px] h-[140px]">
                <h1 className="text-[30px] lg:text-[45px] font-bold">+10</h1>
                <p className="text-[13px] absolute  w-[160px] z-[2] text-[#000]">
                  Years of experience
                </p>
                <div className="absolute lg:bottom-[-30px] bottom-[-20px] right-[-17px] lg:right-[-25px] rounded-3xl z-[1]">
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl w-[100px]  h-[100px] lg:w-[150px] lg:h-[150px]"
                  >
                    <source
                      src="https://awsmd.com/media/about/time-color.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="rounded-3xl relative  w-[180px] lg:w-[270px] p-4 pt-2  overflow-hidden  bg-[#F2F0F0]  lg:h-[180px] h-[140px]">
                <h1 className="text-[30px] lg:text-[45px] font-bold">+40 </h1>
                <p className="text-[13px]  absolute  w-[140px] z-[2] text-[#000]">
                  Team members all over the world
                </p>
                <div className="absolute lg:bottom-[-30px] z-[1] bottom-[-20px] right-[-15px] sm:right-[-20px] rounded-3xl ">
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
                  >
                    <source
                      src="https://awsmd.com/media/about/ball-color.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="lmd:flex hidden h-full">
            <div className="relative">
              <div className="ml:h-[600px] ml:w-[600px] h-[500px] w-[500px] z-[1] relative rounded-full bg-[#F4F4F4]"></div>
              <div
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className="ml:h-[500px] h-[400px] w-[400px] hover:border-[#d3d3d3] hover:border  top-[15px] z-[1] right-[15px] ml:w-[500px] absolute rounded-full  bg-[#EEEEEE]"
              ></div>
              <div className="w-3 absolute  z-[2] ml:bottom-[153px] bottom-[125px] left-[150px]  ml:left-[153px] rounded-full bg-blue-600 h-3">
                <div class="after:absolute after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-1 after:font-bold  after:content-['Growth']"></div>
                <div
                  className={`${
                    useHover ? "animate-circle" : "hidden"
                  } rounded-full bottom-[179px] left-[180px] flex justify-center items-center absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute after:whitespace-nowrap after:inline-block  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['Experiment']"></div>
                </div>
                <div
                  className={`${
                    useHover ? "animate-circle1" : "hidden"
                  } rounded-full bottom-[179px] left-[180px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['Optimization']"></div>
                </div>
                <div
                  className={`${
                    useHover ? "animate-circle2" : "hidden"
                  } rounded-full bottom-[179px] left-[180px] absolute w-1 h-1 bg-black `}
                >
                  <div class="after:absolute after:whitespace-nowrap after:inline-block  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['A-BContent']"></div>
                </div>
              </div>

              <div className="w-3 absolute z-[2] bottom-[200px] right-[270px] ml:bottom-[220px] ml:right-[360px] rounded-full bg-blue-600 h-3">
                <div class="after:absolute after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-1 after:font-bold  after:content-['Insights']"></div>
                <div
                  className={`${
                    useHover1 ? "animate-circle" : "hidden"
                  } rounded-full bottom-[179px] left-[177px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['Experiment']"></div>
                </div>
                <div
                  className={`${
                    useHover1 ? "animate-circle" : "hidden"
                  } rounded-full bottom-[179px] left-[177px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['Optimi']"></div>
                </div>
                <div
                  className={`${
                    useHover1 ? "animate-circle" : "hidden"
                  } rounded-full bottom-[179px] left-[177px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['A/B testing']"></div>
                </div>
              </div>
              <div className="w-3 absolute z-[2] top-[70px] right-[70px] ml:top-[88px] ml:right-[77px] rounded-full bg-blue-600 h-3">
                <div class="after:absolute after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-1 after:font-bold  after:content-['Product']"></div>
                <div
                  className={`${
                    useHover2 ? "animate-circle6" : "hidden"
                  } rounded-full bottom-[179px] left-[177px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['Experiment']"></div>
                </div>
                <div
                  className={`${
                    useHover2 ? "animate-circle5" : "hidden"
                  } rounded-full bottom-[179px] left-[177px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['Optimi']"></div>
                </div>
                <div
                  className={`${
                    useHover2 ? "animate-circle4" : "hidden"
                  } rounded-full bottom-[179px] left-[177px] absolute w-1 h-1 bg-black `}
                >
                  {/* <p>Experiment</p> */}
                  <div class="after:absolute  after:top-0 after:left-0 after:mt-[-35px] after:ml-4 after:inset-0 after:font-bold  after:content-['A/B testing']"></div>
                </div>
              </div>

              <div
                onMouseEnter={handleHover1}
                onMouseLeave={handleHover1}
                className="ml:h-[400px] h-[300px] w-[300px] hover:border-[#d3d3d3] hover:border top-[30px] z-[1]  right-[30px] ml:w-[400px] absolute rounded-full  bg-[#E1E1E1]"
              ></div>
              <div
                onMouseEnter={handleHover2}
                onMouseLeave={handleHover2}
                className="ml:h-[250px] h-[150px] w-[150px] hover:border-[#d3d3d3] hover:border top-[55px] z-[1] right-[50px] ml:w-[250px] absolute rounded-full bg-[#F4F4F4]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <SlideShow />
      <span id="parent">hover here</span>
      <div id="child" className="circle"></div>
    </>
  );
}

export default About;
