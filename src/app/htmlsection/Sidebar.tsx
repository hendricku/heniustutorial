"use client";
import React, { useState } from "react";

interface Topic {
  id: string;
  title: string;
}

interface SidebarProps {
  topics: Topic[];
  selectedTopicId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ topics, selectedTopicId, onSelect }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 lg:w-80 bg-white/95 backdrop-blur-sm border-r border-slate-200 md:sticky top-[56px] md:h-[calc(100vh-56px)] overflow-y-auto p-4 md:p-6 shrink-0">
        <h3 className="font-bold text-lg mb-4 text-purple-700 tracking-wide">HTML Tutorial</h3>
        <nav className="flex flex-col gap-1">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelect(topic.id)}
              className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 font-medium text-sm border-l-4 ${
                selectedTopicId === topic.id
                  ? "bg-purple-100 text-purple-800 border-purple-500 font-semibold"
                  : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              {topic.title}
            </button>
          ))}
        </nav>
      </aside>
      {/* Mobile Burger Button */}
      <div className="md:hidden flex items-center px-4 py-2 bg-white border-b border-slate-200 sticky top-[56px] z-20">
        <button
          className="p-2 rounded focus:outline-none"
          aria-label="Open sidebar"
          onClick={() => setOpen(true)}
        >
          <svg width={28} height={28} fill="none" stroke="#6f42c1" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="ml-3 font-bold text-purple-700 text-lg">HTML Tutorial</span>
      </div>
      {/* Mobile Sidebar Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <aside className="relative w-64 bg-white h-full shadow-xl p-6">
            <button
              className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100"
              aria-label="Close sidebar"
              onClick={() => setOpen(false)}
            >
              <svg width={24} height={24} fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <h3 className="font-bold text-lg mb-4 text-purple-700 tracking-wide">HTML Tutorial</h3>
            <nav className="flex flex-col gap-1">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    onSelect(topic.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 font-medium text-sm border-l-4 ${
                    selectedTopicId === topic.id
                      ? "bg-purple-100 text-purple-800 border-purple-500 font-semibold"
                      : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  {topic.title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}