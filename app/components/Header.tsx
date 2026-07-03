"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "The Group", href: "https://www.playtosky.com/" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 w-full mx-auto relative z-100">
      {/* PARTIE GAUCHE : Logo */}
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <Image
            src="/logo-pulse-x-management.webp"
            alt="Logo Pulse X Management"
            width={80}
            height={28}
            priority={true}
            className="object-contain w-auto h-auto max-w-17.5 md:max-w-21.25 cursor-pointer"
          />
        </Link>
      </div>

      {/* PARTIE CENTRALE : Navigation Desktop */}
      <nav className="hidden md:flex flex-1 justify-center gap-8 text-xs font-semibold tracking-widest uppercase">
        {navLinks.map((link) =>
          link.href.startsWith("http") ? (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ),
        )}
      </nav>

      {/* PARTIE DROITE : Localisation & Menu Burger */}
      <div className="flex-1 flex justify-end items-center gap-6">
        {/* L'icône de localisation */}
        <Link
          href="/locations"
          aria-label="Our Locations"
          className="text-white hover:text-black transition-colors"
        >
          <MapPin className="w-5 h-5 md:w-6 md:h-6" />
        </Link>

        {/* Bouton Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="relative md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-110 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* OVERLAY MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-pulse-pink z-105 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-10 text-center">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="text-3xl font-regular text-white tracking-widest hover:scale-110 transition-transform"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-3xl font-regular text-white tracking-widest hover:scale-110 transition-transform"
              >
                {link.name}
              </Link>
            ),
          )}

          {/* Lien localisation dans le menu mobile */}
          <Link
            href="/locations"
            onClick={toggleMenu}
            className="text-3xl font-regular text-white tracking-widest hover:scale-110 transition-transform flex items-center justify-center gap-3"
          >
            <MapPin className="w-8 h-8" /> Locations
          </Link>
        </nav>
        <div className="absolute bottom-12 text-white/60 text-[10px] tracking-widest uppercase">
          A Play To Sky Group Entity
        </div>
      </div>
    </header>
  );
}
