import Navbar from "./Navbar";
import Image from "next/image";

export default function HtmlSection() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="font-extrabold text-[2.5rem] mb-6 text-[#222]">Getting Started with HTML</h1>
        <p className="text-lg text-[#444] mb-8">
          HTML (HyperText Markup Language) is the foundation of every website. It provides the basic structure for web pages, allowing you to define headings, paragraphs, links, images, and more.
        </p>
        <h2 className="font-bold text-xl mb-3 text-[#222]">What is HTML?</h2>
        <p className="mb-4">
          HTML uses <span className="font-mono bg-gray-100 px-1 rounded">&lt;tags&gt;</span> to mark up content. Each tag describes a different type of content or structure, such as headings, paragraphs, or lists.
        </p>
        <h2 className="font-bold text-xl mb-3 text-[#222]">Basic Structure</h2>
        <pre className="bg-gray-100 rounded p-4 mb-4 overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`}
        </pre>
        <h2 className="font-bold text-xl mb-3 text-[#222]">Key Elements</h2>
        <ul className="list-disc pl-6 mb-4 text-[#444]">
          <li><span className="font-mono">&lt;h1&gt;...&lt;/h1&gt;</span> - Headings</li>
          <li><span className="font-mono">&lt;p&gt;...&lt;/p&gt;</span> - Paragraphs</li>
          <li><span className="font-mono">&lt;a href=&quot;&quot;&gt;...&lt;/a&gt;</span> - Links</li>
          <li><span className="font-mono">&lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;</span> - Images</li>
          <li><span className="font-mono">&lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt;</span> - Lists</li>
        </ul>
        <p className="text-lg text-[#444]">
          Start experimenting with HTML by editing and viewing your own files in the browser!
        </p>
        <Image src="..." alt="..." width={300} height={150} />
      </main>
    </div>
  );
}