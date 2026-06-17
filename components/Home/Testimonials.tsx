"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import TestimonialCard from "./Testimonial/TestimonialCard";
import { testimonials } from "@/constants/Testimonials";

function MarqueeColumn({ reverse = false }: { reverse?: boolean }) {
  const controls = useAnimation();

  const start = () =>
    controls.start({
      y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: { duration: 35, repeat: Infinity, repeatType: "loop", ease: "linear" },
    });

  useEffect(() => { start(); }, []);

  return (
    <div
      className="relative h-175 lg:h-200 overflow-hidden"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => start()}
    >
      <motion.div animate={controls} className="flex flex-col gap-5">
        {[...testimonials, ...testimonials].map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#F8F8F8] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#F8F8F8] to-transparent z-10" />
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="overflow-hidden px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="grid gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
        {/* Left Content */}
        <div className="h-fit xl:sticky xl:top-24">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white">
              <span className="h-2 w-2 bg-white" />
              Investor
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-medium tracking-tight">
              Investors who read before
              they allocate.
            </h2>

            <p className="max-w-lg text-sm sm:text-base lg:text-lg text-gray-500">
              Early investors, in their own words. What they checked,
              what convinced them, and what they tell their friends.
            </p>
          </div>
        </div>

        {/* All screens: vertical columns */}
        <div className="grid h-175 lg:h-200 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <MarqueeColumn />
          <div className="hidden md:block">
            <MarqueeColumn reverse />
          </div>
          <div className="hidden xl:block">
            <MarqueeColumn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
