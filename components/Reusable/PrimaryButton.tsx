import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const PrimaryButton = ({
  text,
  onClick,
  href,
  className,
}: PrimaryButtonProps) => {
  const buttonClasses = twMerge(
    clsx(
      "inline-flex items-center justify-center rounded-lg px-5 py-2",
      "bg-primary text-white font-medium",
      "transition-all duration-300",
      "hover:opacity-90 active:scale-95 cursor-pointer",
      className
    )
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default PrimaryButton;