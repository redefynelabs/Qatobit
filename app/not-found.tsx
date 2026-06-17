'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,97,0,0.12) 0%, transparent 70%)" }}
      />

      {/* Pattern overlay */}
      <Image
        src="/assets/pattern.png"
        alt=""
        fill
        className="object-cover opacity-5 pointer-events-none select-none"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Qatobit"
            width={140}
            height={40}
            className="h-auto w-28 sm:w-32 mb-16"
          />
        </Link>

        {/* Bot */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/qatobot.png"
            alt="Qatobot"
            width={200}
            height={223}
            className="h-40 sm:h-52 w-auto"
            priority
          />
        </motion.div>

        {/* 404 */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-7xl sm:text-9xl font-medium text-white/10 select-none">4</span>
          <div className="h-16 sm:h-24 w-px bg-primary/40" />
          <span className="text-7xl sm:text-9xl font-medium text-white/10 select-none">0</span>
          <div className="h-16 sm:h-24 w-px bg-primary/40" />
          <span className="text-7xl sm:text-9xl font-medium text-white/10 select-none">4</span>
        </div>

        <h1 className="mt-6 text-xl sm:text-2xl font-medium text-white">
          This page doesn't exist
        </h1>
        <p className="mt-3 max-w-xs font-inter text-sm text-white/40 leading-relaxed">
          You may have followed a broken link or typed the address incorrectly.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="h-11 px-6 bg-primary text-white rounded-full font-medium text-sm hover:opacity-90 active:scale-95 transition-all flex items-center"
          >
            Back to home
          </Link>
          <Link
            href="/join-waitlist"
            className="h-11 px-6 bg-white/5 border border-white/10 text-white/70 rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center"
          >
            Join the waitlist
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
