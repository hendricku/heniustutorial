"use client";
import Navbar from "../Navbar";
import Sidebar from "../htmlsection/Sidebar";
import { cssTopicsData } from "./topicsData";
import { useState } from "react";


export default function CssSection() {
  // CORRECTED LINE: Use a type assertion to fix the type mismatch.
  const allTopics = cssTopicsData.flatMap((group) => group.topics) ;


  const [selectedTopicId, setSelectedTopicId] = useState(allTopics[0].id);

  return (
    <div className="bg-white min-h-screen font-sans text-[#222]">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
        <Sidebar
          topics={allTopics.map(({ id, title }) => ({ id, title }))}
          selectedTopicId={selectedTopicId}
          onSelect={setSelectedTopicId}
        />
        <main className="flex-1 p-6 md:p-10 bg-[#fafbfc] min-h-screen">
          {(() => {
            const topic = allTopics.find((t) => t.id === selectedTopicId);
            if (!topic) return null;
            return (
              <article className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  <span>{topic.emoji}</span>
                  <span>{topic.title}</span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-[#222] whitespace-pre-wrap">
                  {topic.description}
                </p>
                {topic.code && (
                  <pre className="bg-[#222] text-[#f8f8f2] rounded-lg p-4 mb-6 overflow-x-auto text-base">
                    <code>{topic.code}</code>
                  </pre>
                )}

                {topic.output && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-[#333]">
                      Sample Output
                    </h2>
                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                      {/* Using <pre> preserves the whitespace and formatting of your block diagrams */}
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                        <code>{topic.output}</code>
                      </pre>
                    </div>
                  </div>
                )}
                {/* End of new output section */}

                {topic.proTip && (
                  <div className="mb-4 p-3 rounded bg-green-50 border-l-4 border-green-400 text-green-900">
                    <strong>💡 Pro Tip:</strong> {topic.proTip}
                  </div>
                )}
                {topic.didYouKnow && (
                  <div className="mb-4 p-3 rounded bg-blue-50 border-l-4 border-blue-400 text-blue-900">
                    <strong>📚 Did you know?</strong> {topic.didYouKnow}
                  </div>
                )}
                {topic.whatsNext && (
                  <div className="mb-4 p-3 rounded bg-purple-50 border-l-4 border-purple-400 text-purple-900">
                    <strong>⏭️ What's next?</strong> {topic.whatsNext}
                  </div>
                )}
              </article>
            );
          })()}
        </main>
      </div>
    </div>
  );
}