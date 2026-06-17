'use client';

import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../Reusable/PrimaryButton";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/Home/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute top-[15%] flex items-center">
        <div className="w-full px-5 sm:px-10 lg:px-16 flex flex-col items-start gap-5 sm:gap-6 ">

          {/* Badge */}
          <div className="bg-[#FF420070] border border-primary px-2 py-2 rounded-xl flex items-center">
            <div className="bg-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shrink-0">
              <p className="text-white font-medium text-xs sm:text-sm">QSI Crypto Indices</p>
            </div>

            {/* Animated divider */}
            <div className="relative h-7.5 w-px bg-primary mx-3 sm:mx-4 shrink-0 overflow-hidden">
              <motion.div
                className="absolute left-0 w-full h-3.5 bg-linear-to-b from-transparent via-white to-transparent"
                animate={{ y: [-14, 30] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Torch text */}
            <div className="relative pr-2">
              <div
                className="absolute inset-y-1 -left-4 right-0 rounded-r-xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 85% 80% at 0% 50%, rgba(255,97,0,0.45), transparent 70%)",
                }}
              />
              <p className="relative text-white font-medium text-xs sm:text-sm">Wealth, By Design</p>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
              India's Crypto Wealth Architect.
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
              A Structured way to own Crypto
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4  sm:w-auto items-start">
            <PrimaryButton text="Explore the Crypto Indices" className="w-full sm:w-auto justify-center" href="/join-waitlist" />
            <PrimaryButton text="Read the Methodology" className="bg-[#282828] w-full sm:w-auto justify-center" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
