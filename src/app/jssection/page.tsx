"use client";
import Navbar from "../Navbar"; // Make sure this path is correct for your project
import Sidebar from "./Sidebar";
import { jsTopicsData } from "./jsTopicsData";
import { useState } from "react";

export default function JsSection() {
  const [selectedTopicId, setSelectedTopicId] = useState(jsTopicsData[0].id);

  // Find the full topic object based on the selected ID
  const topic = jsTopicsData.find((t) => t.id === selectedTopicId);

  return (
    <div className="bg-white min-h-screen font-sans text-[#222]">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
        <Sidebar
          topics={jsTopicsData.map(({ id, title }) => ({ id, title }))}
          selectedTopicId={selectedTopicId}
          onSelect={setSelectedTopicId}
        />
        <main className="flex-1 p-6 md:p-10 bg-[#fafbfc]">
          {/* Conditional rendering to ensure 'topic' exists before trying to access its properties */}
          {topic && (
            <article className="max-w-4xl mx-auto">
              {/* --- Header Section --- */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                  <span>{topic.emoji}</span>
                  <span>{topic.title}</span>
                </h1>
                <p className="text-lg leading-relaxed text-gray-600 whitespace-pre-wrap">
                  {topic.description}
                </p>
              </header>

              {/* --- Informational Tips --- */}
              {topic.proTip && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-900">
                  <strong>💡 Pro Tip:</strong> {topic.proTip}
                </div>
              )}
              {topic.didYouKnow && (
                <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900">
                  <strong>📚 Did you know?</strong> {topic.didYouKnow}
                </div>
              )}
              
              {/* --- START: ADDED CODE BLOCKS --- */}

              {/* Inputs Section (only shows if 'inputs' data exists) */}
              {topic.inputs && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Inputs</h3>
                  <div className="bg-gray-100 border border-gray-300 rounded-md">
                    <pre className="p-4 text-sm text-gray-700 overflow-x-auto">
                      <code>{topic.inputs}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Code Example Section (only shows if 'code' data exists) */}
              {topic.code && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Code Example</h3>
                  {/* Using a dark theme for the code block for better readability */}
                  <div className="bg-[#2d2d2d] rounded-md shadow-lg">
                    <pre className="p-4 text-sm text-white overflow-x-auto">
                      <code>{topic.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Output Section (only shows if 'output' data exists) */}
              {topic.output && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Output</h3>
                  <div className="bg-gray-100 border border-gray-300 rounded-md">
                    <pre className="p-4 text-sm text-gray-700 font-mono overflow-x-auto">
                      <code>{topic.output}</code>
                    </pre>
                  </div>
                </div>
              )}
              
              {/* --- END: ADDED CODE BLOCKS --- */}

            </article>
          )}
        </main>
      </div>
    </div>
  );
}