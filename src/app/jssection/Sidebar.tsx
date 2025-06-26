import { useState } from "react";

type SidebarProps = {
  topics: { id: string; title: string }[];
  selectedTopicId: string;
  onSelect: (id: string) => void;
};

export default function Sidebar({ topics, selectedTopicId, onSelect }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="font-bold text-xl mb-4 text-purple-700">JS Tutorial</h2>
        <ul className="space-y-1">
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  selectedTopicId === topic.id
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => onSelect(topic.id)}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Burger Menu */}
      <div className="md:hidden">
        <button
          className="flex items-center gap-2 px-4 py-3 text-purple-700 font-bold focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Open JS Sidebar"
        >
          {/* Burger Icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#9333ea" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#9333ea" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="#9333ea" />
          </svg>
          <span>JS Tutorial</span>
        </button>
        {open && (
          <div className="absolute z-40 left-0 right-0 bg-white border-b border-gray-200 shadow animate-fade-in-down">
            <ul className="space-y-1 p-4">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded ${
                      selectedTopicId === topic.id
                        ? "bg-purple-100 text-purple-700 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      onSelect(topic.id);
                      setOpen(false);
                    }}
                  >
                    {topic.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}