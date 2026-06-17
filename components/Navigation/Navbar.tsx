'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavLinks } from "@/constants/NavLinks";
import PrimaryButton from "../Reusable/PrimaryButton";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

type PillStyle = {
    left: number;
    width: number;
    top: number;
    height: number;
    visible: boolean;
};

const Navbar = () => {
    const pathname = usePathname();
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);
    const [pillStyle, setPillStyle] = useState<PillStyle>({ left: 0, width: 0, top: 0, height: 0, visible: false });
    const [isOpen, setIsOpen] = useState(false);
    const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);

    const activeIndex = NavLinks.findIndex((link) => {
        if (link.href) return pathname === link.href || pathname.startsWith(link.href + '/');
        if (link.links) return link.links.some(sub => pathname === sub.href || pathname.startsWith(sub.href + '/'));
        return false;
    });

    const targetIdx = hoverIdx !== null ? hoverIdx : activeIndex;

    useEffect(() => {
        const el = itemRefs.current[targetIdx];
        const nav = navRef.current;
        if (el && nav && targetIdx >= 0) {
            const navRect = nav.getBoundingClientRect();
            const elRect = el.getBoundingClientRect();
            setPillStyle({
                left: elRect.left - navRect.left,
                width: elRect.width,
                top: elRect.top - navRect.top,
                height: elRect.height,
                visible: true,
            });
        } else {
            setPillStyle(prev => ({ ...prev, visible: false }));
        }
    }, [targetIdx]);

    useEffect(() => {
        setIsOpen(false);
        setMobileOpenIdx(null);
    }, [pathname]);

    return (
        <nav className=" z-50 absolute top-0 left-0 w-full bg-transparent">
            <div className="flex items-center justify-between px-10 py-4 ">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="Qatobit Logo"
                        width={150}
                        height={50}
                        className="w-[150px] sm:w-[160px] lg:w-[170px] h-auto"
                    />
                </Link>

                {/* Desktop nav */}
                <div ref={navRef} className="relative hidden lg:flex items-center gap-8">
                    <div
                        className="glass-pill-indicator absolute rounded-full pointer-events-none transition-all duration-300 ease-in-out"
                        style={{
                            left: pillStyle.left,
                            width: pillStyle.width,
                            top: pillStyle.top,
                            height: pillStyle.height,
                            opacity: pillStyle.visible ? 1 : 0,
                        }}
                    />

                    {NavLinks.map((item, idx) => {
                        const hasDropdown = item.links?.length;

                        if (!hasDropdown) {
                            return (
                                <Link
                                    key={idx}
                                    href={item.href!}
                                    ref={(el) => { itemRefs.current[idx] = el as HTMLElement; }}
                                    className={`relative font-medium px-4 py-2 rounded-full z-10 transition-colors ${idx === activeIndex ? 'text-primary' : 'text-white'}`}
                                    onMouseEnter={() => setHoverIdx(idx)}
                                    onMouseLeave={() => setHoverIdx(null)}
                                >
                                    {item.name}
                                </Link>
                            );
                        }

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                ref={(el) => { itemRefs.current[idx] = el as HTMLElement; }}
                                onMouseEnter={() => setHoverIdx(idx)}
                                onMouseLeave={() => setHoverIdx(null)}
                            >
                                <button className={`relative flex items-center gap-1 font-medium px-4 py-2 rounded-full z-10 cursor-pointer transition-colors ${idx === activeIndex ? 'text-primary' : 'text-white'}`}>
                                    {item.name}
                                    <ChevronDown size={16} />
                                </button>

                                <div className="glass-pill-indicator absolute left-0 top-full z-50 mt-2 min-w-30 rounded-xl p-2 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                                    {item.links!.map((subLink) => (
                                        <Link
                                            key={subLink.href}
                                            href={subLink.href}
                                            className="block rounded-lg px-4 py-2 text-sm text-white hover:text-primary transition-colors"
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                    <PrimaryButton text="Get Started" href="/join-waitlist" />
                </div>

                {/* Hamburger */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 z-999 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="mx-4 mb-4 rounded-2xl px-4 py-4 flex flex-col gap-1 bg-neutral-950/95 backdrop-blur-xl border border-white/10">
                    {NavLinks.map((item, idx) => {
                        const hasDropdown = item.links?.length;
                        const isActive = idx === activeIndex;

                        if (!hasDropdown) {
                            return (
                                <Link
                                    key={idx}
                                    href={item.href!}
                                    className={`font-medium px-4 py-3 rounded-xl transition-colors ${isActive ? 'text-primary' : 'text-white hover:bg-white/10'}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        }

                        return (
                            <div key={idx}>
                                <button
                                    className={`w-full flex items-center justify-between font-medium px-4 py-3 rounded-xl transition-colors cursor-pointer ${isActive ? 'text-primary' : 'text-white hover:bg-white/10'}`}
                                    onClick={() => setMobileOpenIdx(mobileOpenIdx === idx ? null : idx)}
                                >
                                    {item.name}
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${mobileOpenIdx === idx ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-200 ${mobileOpenIdx === idx ? 'max-h-60' : 'max-h-0'}`}>
                                    <div className="pl-4 pb-2 flex flex-col">
                                        {item.links!.map((subLink) => (
                                            <Link
                                                key={subLink.href}
                                                href={subLink.href}
                                                className="block px-4 py-2.5 text-sm text-white/80 hover:text-primary rounded-lg transition-colors"
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="mt-2 px-2">
                        <PrimaryButton text="Get Started" href="/join-waitlist" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
