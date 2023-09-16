"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import animation from "../public/animation.json";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="flex items-center justify-center max-h-screen"
    >
      <div className="max-w-lg min-h-screen flex flex-col items-center justify-center">
        <Lottie animationData={animation} loop={true} />
        <div className="mt-5 space-y-2 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Website Under Development
          </h1>
          <p className="text-lg text-gray-600">
            Stay tuned for exciting updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
