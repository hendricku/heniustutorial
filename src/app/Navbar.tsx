"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/htmlsection", label: "HTML" },
  { href: "/csssection", label: "CSS" },
  { href: "/jssection", label: "JAVASCRIPT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full rounded-t" />
      <nav className="flex items-center justify-between h-[64px] px-4 md:px-10">
        {/* Logo & Brand */}
        <span className="flex items-center gap-2 font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 select-none drop-shadow">
          <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-blue-500">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          Henius Tutorials
        </span>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-semibold">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-1 rounded transition-all duration-200
                    ${isActive
                      ? "text-white bg-gradient-to-r from-blue-500 to-pink-500 shadow-md scale-105"
                      : "text-[#222] hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:scale-105"
                    }
                  `}
                  style={isActive ? { boxShadow: "0 2px 12px 0 rgba(99,102,241,0.15)" } : {}}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Burger */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none transition-colors hover:bg-gray-100"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Animated burger */}
          <svg
            width={28}
            height={28}
            fill="none"
            stroke="#222"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow z-40 animate-fade-in-down">
          <ul className="flex flex-col gap-2 p-4 text-[16px] font-semibold">
            {navLinks.map(link => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block py-2 px-3 rounded transition-all
                      ${isActive
                        ? "text-white bg-gradient-to-r from-blue-500 to-pink-500 shadow"
                        : "text-[#222] hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500"
                      }
                    `}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}