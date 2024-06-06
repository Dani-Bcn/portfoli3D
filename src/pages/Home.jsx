import React, { useEffect } from "react";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import imgYg_1 from "/public/imgs/imgYg-1.png";

export default function Home() {
  const arrayTitle = "Daniel Pérez".split("");
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  setTimeout(() => {
    tl.to(".mainTitle", {
      rotateY: 0,
      stagger: 0.1,
      duration: 0.5,
      opacity: 1,
      height: -650,
    });
  }, 150);

  useEffect(() => {
    gsap.to(".ballCursor", {
      y: 50,
      duration: 1,
      repeat: Infinity,
      yoyoEase: "circ.inOut",
    });

    gsap.to(".ballCursor", {
      scrollTrigger: {
        trigger: ".ballCursor",
        start: "center center",
        end: 500,
        scrub: 0.5,
      },
      opacity: 0,
    });

    gsap.to(".containerBall", {
      scrollTrigger: {
        trigger: ".containerBall",
        start: "center center",
        end: 500,
        scrub: 0.5,
      },
      opacity: 0,
    });


    
  }, []);

  
  


  return (
    <main className="relative w-screen h-screen flex flex-col justify-center items-center">
      <div className="absolute w-screen -mt-96 h-screen overflow-y-hidden flex justify-center items-center  bg-gradient-to-b from-orange-400 via-orange-400/50 to-orange-400/0">
        {arrayTitle.map((e, i) => {
          return (
            <h1
              key={i}
              className="mainTitle  opacity-0 font-extralight text-red-500 text-[15em]"
            >
              {e}
            </h1>
          );
        })}
      </div>
      <m.div
        animate={{
          transition: {
            delay: 1.5,
            duration: 0.5,
          },
          y: [200, 0],
          scale: [2, 1],
          opacity: [0, 1],
        }}
        className=" containerBall opacity-1  relative overflow-hidden flex justify-center w-8 h-20 rounded-2xl mt-96 border-2 border-red-600"
      >
        <div className="absolute ballCursor cursor-pointer hover:bg-indigo-400 w-5 h-5 bg-red-600 rounded-full z-[250] transition-all "></div>
      </m.div>
      <div className="absolute mt-[1000px] w-full h-full flex justify-around  rounded-2xl">     
      </div>
    </main>
  );
}
