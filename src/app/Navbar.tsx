"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between h-[56px] px-4 md:px-8">
        <span className="font-semibold text-[17px] text-[#222]">Henius Tutorials</span>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-[16px]">
          <li>
            <Link href="/" className="hover:underline text-[#222]">HOME</Link>
          </li>
          <li>
            <Link href="/htmlsection" className="hover:underline text-[#222]">HTML</Link>
          </li>
          <li>
            <a href="#" className="hover:underline text-[#222]">CSS</a>
          </li>
          <li>
            <a href="#" className="hover:underline text-[#222]">JAVASCRIPT</a>
          </li>
        </ul>
       
        {/* Burger */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg width={28} height={28} fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 shadow z-40">
          <ul className="flex flex-col gap-2 p-4 text-[16px]">
            <li>
              <Link href="/" className="block py-2 px-2 rounded hover:bg-gray-100 text-[#222]" onClick={() => setOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/htmlsection" className="block py-2 px-2 rounded hover:bg-gray-100 text-[#222]" onClick={() => setOpen(false)}>
                HTML
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-2 rounded hover:bg-gray-100 text-[#222]">CSS</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-2 rounded hover:bg-gray-100 text-[#222]">JAVASCRIPT</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}