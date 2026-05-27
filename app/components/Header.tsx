"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'The Group', href: '#' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="flex justify-between items-center px-6 md:px-12 py-6 w-full mx-auto relative z-100">
            {/* LOGO ENVELOPPÉ DANS UN LINK */}
            <div className="shrink-0">
                <Link href="/">
                    <Image
                        src="/Logo-Pulse-x-agency-bg.png"
                        alt="PulseX Agency Logo"
                        width={110}
                        height={35}
                        className="object-contain w-auto h-auto cursor-pointer"
                    />
                </Link>
            </div>

            {/* NAVIGATION DESKTOP */}
            <nav className="hidden md:flex gap-8 text-xs tracking-wider">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-white hover:text-black transition-colors">
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* BOUTON BURGER */}
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-110 focus:outline-none"
                aria-label="Toggle Menu"
            >
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* MENU MOBILE */}
            <div className={`fixed inset-0 bg-pulse-pink z-105 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col gap-10 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-3xl font-bold text-white tracking-widest hover:scale-110 transition-transform"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-12 text-white/60 text-[10px] uppercase tracking-widest">
                    A Play To Sky Group Entity
                </div>
            </div>
        </header>
    );
}