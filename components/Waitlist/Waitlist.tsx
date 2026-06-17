"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left — content */}
      <div className="flex flex-col justify-between lg:w-[52%] px-6 sm:px-10 lg:px-16 py-8 lg:py-10 order-2 lg:order-1">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/assets/logo_black.png"
              alt="Qatobit"
              width={140}
              height={40}
              className="h-auto w-32 sm:w-36"
            />
          </Link>
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 lg:py-0"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-1.5 text-white font-medium text-sm mb-6">
            <span className="h-1.5 w-1.5  bg-white" />
            Early Access
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight mb-5 font-inter">
            India's Crypto
            <br />
            Wealth Architect.
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-neutral-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
            Crypto without the chaos. Built on indices, driven by methodology,
            and backed by live Proof of Reserves. The door is open.
          </p>

          {/* Email form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4 max-w-md"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
              <p className="font-inter text-green-700 text-sm font-medium">
                You're on the list. We'll be in touch.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                required
                className="flex-1 h-12 px-4 border-b border-neutral-200 text-neutral-900 font-inter text-sm outline-none focus:border-primary  transition-all"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-primary text-white rounded-full font-medium text-lg  shrink-0 hover:opacity-90 active:scale-95 transition-all"
              >
                Get on the list
              </button>
            </form>
          )}

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-6">
            <div className="flex items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0 bg-neutral-200"
                >
                  <Image
                    src="/assets/Testimonial/avatar.png"
                    alt="investor"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <span className="ml-3 font-inter text-sm text-neutral-600 font-medium">
                178 investors already on the list
              </span>
            </div>

            <span className="hidden sm:block text-neutral-300">·</span>

            <Link
              href="/document/The%20QSI%20Methodology_%20Construction%2C%20Discipline%2C%20and%20Governance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Read the methodology
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="font-inter text-xs text-neutral-400">
          © 2025 QATOBIT · All rights reserved.
        </p>
      </div>

      {/* Right — illustration */}
      <div className="lg:w-[48%] h-72 sm:h-96 lg:h-auto lg:min-h-screen p-3 sm:p-4 order-1 lg:order-2">
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <Image
            src="/assets/bot_image1.png"
            alt="Qatobit platform"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
