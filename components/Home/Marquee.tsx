'use client';

import Image from 'next/image';

interface MarqueeItem {
  name: string;
  icon: string;
  code: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
}

const Marquee = ({ items, speed = 25 }: MarqueeProps) => {
  // Duplicate items for seamless infinite scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <div className="group relative w-full overflow-hidden py-4">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/95 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/95 to-transparent" />

      <div
        className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 rounded-full border border-primary bg-white px-4 py-2 transition-all duration-300 hover:shadow-md whitespace-nowrap"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="h-8 w-8 object-contain"
            />

            <span className="text-lg font-medium text-gray-700">
              {item.name}
            </span>
            <span className="text-xs font-medium text-primary uppercase">
              {item.code}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;