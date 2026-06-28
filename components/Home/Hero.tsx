'use client';

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../Reusable/PrimaryButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 117;
const framePath = (i: number) =>
  `/seq/frames/frame_${String(i).padStart(6, "0")}.jpg`;

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let firstFrameReady = false;

    const drawFrame = (index: number) => {
      const img = images[index];
      if (!img?.complete || !img.naturalWidth) return;
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    // Preload — frame first frame synchronously so canvas isn't blank
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i + 1);
      if (i === 0) {
        img.onload = () => {
          if (!firstFrameReady) {
            firstFrameReady = true;
            drawFrame(0);
          }
        };
      }
      images[i] = img;
    }

    const currentFrame = { index: 0 };

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const idx = Math.min(
          FRAME_COUNT - 1,
          Math.round(self.progress * (FRAME_COUNT - 1))
        );
        if (idx !== currentFrame.index) {
          currentFrame.index = idx;
          drawFrame(idx);
        }
      },
    });

    const onResize = () => {
      setSize();
      drawFrame(currentFrame.index);
    };
    window.addEventListener("resize", onResize);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "600vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        {/* Sequence canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

        {/* Hero content */}
        <div className="absolute top-[15%] flex items-center">
          <div className="w-full px-5 sm:px-10  flex flex-col items-start gap-5 sm:gap-6">

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
                  className="absolute -inset-y-1 -left-4 right-0 rounded-r-xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 85% 80% at 0% 50%, rgba(255,97,0,0.45), transparent 70%)",
                  }}
                />
                <p className="relative text-white font-medium text-xs sm:text-sm">Wealth, by design</p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight tracking-tighter">
                India's Crypto Wealth Architect.
              </h1>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight tracking-tighter">
                A Structured Way to Own Crypto.
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:w-auto items-start">
              <PrimaryButton text="Explore the Crypto Indices" className="w-full sm:w-auto justify-center" href="/join-waitlist" />
              <PrimaryButton
                href="/document/The%20QSI%20Methodology_%20Construction%2C%20Discipline%2C%20and%20Governance.pdf"
                target="_blank"
                text="Read the Methodology"
                className="bg-[#282828] w-full sm:w-auto justify-center"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
