import Navbar from "./Navbar";
import Image from "next/image";
import { blogPostsData } from "./blogPostsData";

export default function Home() {
  // Separate featured and regular posts
  const featured = blogPostsData.find((post) => post.featured);
  const others = blogPostsData.filter((post) => !post.featured);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <main>
        {/* THE BLOG Heading */}
        <div className="max-w-7xl mx-auto px-8">
          <hr className="border-gray-200 mb-10" />
          <h1
            className="font-extrabold text-[clamp(4rem,12vw,10rem)] leading-[1.05] text-[#222] text-center pb-10"
            style={{ letterSpacing: "-0.04em" }}
          >
            THE BLOG
          </h1>
          <hr className="border-gray-200 mb-12" />
        </div>

        {/* Recent blog posts */}
        <section className="max-w-7xl mx-auto px-8">
          <h2 className="font-semibold text-[20px] mb-6 text-[#222]">
            Recent blog posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
            {/* Featured Post */}
            {featured && (
              <div className="md:col-span-2 flex flex-col bg-white rounded-lg">
                <div className="relative">
                  <Image
                    src={featured.image}
                    alt={featured.alt}
                    className="rounded-lg w-full h-[240px] object-cover"
                    width={800}
                    height={240}
                  />
                  <a
                    href={featured.href}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                    aria-label="External link"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#222"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
                <div className="mt-5">
                  <div className="text-[14px] text-[#6f42c1] font-semibold mb-1">
                    {featured.author}{" "}
                    <span className="text-[#6b6b6b] font-normal">
                      • {featured.date}
                    </span>
                  </div>
                  <div className="font-bold text-[23px] mb-1 text-[#222] flex items-center">
                    <a
                      href={featured.href}
                      className="hover:underline focus:underline"
                    >
                      {featured.title}
                    </a>
                  </div>
                  <div className="text-[16px] text-[#555] mb-3">
                    {featured.excerpt}
                  </div>
                  <div className="flex gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#e9d8fd] text-[#6f42c1] rounded px-3 py-1 text-[13px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Right Column: Other posts */}
            <div className="flex flex-col gap-8">
              {others.map((post) => (
                <div key={post.id} className="flex flex-col">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    className="rounded-lg w-full h-[110px] object-cover mb-3"
                    width={400}
                    height={110}
                  />
                  <div className="text-[14px] text-[#6f42c1] font-semibold mb-1">
                    {post.author}{" "}
                    <span className="text-[#6b6b6b] font-normal">
                      • {post.date}
                    </span>
                  </div>
                  <div className="font-bold text-[17px] mb-1 text-[#222]">
                    <a
                      href={post.href}
                      className="hover:underline focus:underline"
                    >
                      {post.title}
                    </a>
                  </div>
                  <div className="text-[14px] text-[#555] mb-3 line-clamp-2">
                    {post.excerpt}
                  </div>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#e9d8fd] text-[#6f42c1] rounded px-3 py-1 text-[13px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All blog posts */}
        <section className="max-w-7xl mx-auto px-8 mt-16">
          <h2 className="font-semibold text-[22px] mb-8 text-[#222]">
            All blog posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Post 1 */}
            <div className="flex flex-col">
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                alt="Semantic HTML"
                className="rounded-lg w-full h-[180px] object-cover mb-3"
                width={600}
                height={180}
              />
              <div className="text-[15px] text-[#6f42c1] font-semibold mb-1">
                Riley Markup{" "}
                <span className="text-[#6b6b6b] font-normal">• 20 Jun 2025</span>
              </div>
              <div className="font-bold text-[22px] mb-1 text-[#222] flex items-center">
                Semantic HTML: Why It Matters
                <span className="ml-1 text-[18px]">↗</span>
              </div>
              <div className="text-[15px] text-[#555] mb-3">
                Understand the importance of semantic tags in HTML for
                accessibility, SEO, and maintainable code.
              </div>
              <div className="flex gap-2">
                <span className="bg-[#e9d8fd] text-[#805ad5] rounded px-3 py-1 text-[13px]">
                  HTML
                </span>
                <span className="bg-[#e2e8f0] text-[#4a5568] rounded px-3 py-1 text-[13px]">
                  Accessibility
                </span>
              </div>
            </div>
            {/* Post 2 */}
            <div className="flex flex-col">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
                alt="Responsive CSS"
                className="rounded-lg w-full h-[180px] object-cover mb-3"
                width={600}
                height={180}
              />
              <div className="text-[15px] text-[#6f42c1] font-semibold mb-1">
                Casey Flex{" "}
                <span className="text-[#6b6b6b] font-normal">• 19 Jun 2025</span>
              </div>
              <div className="font-bold text-[22px] mb-1 text-[#222] flex items-center">
                Responsive CSS: Flex & Grid
                <span className="ml-1 text-[18px]">↗</span>
              </div>
              <div className="text-[15px] text-[#555] mb-3">
                Learn how to use Flexbox and Grid to create layouts that look
                great on any device.
              </div>
              <div className="flex gap-2">
                <span className="bg-[#bee3f8] text-[#3182ce] rounded px-3 py-1 text-[13px]">
                  CSS
                </span>
                <span className="bg-[#e9d8fd] text-[#6f42c1] rounded px-3 py-1 text-[13px]">
                  Responsive
                </span>
                <span className="bg-[#fed7e2] text-[#d53f8c] rounded px-3 py-1 text-[13px]">
                  Layout
                </span>
              </div>
            </div>
            {/* Post 3 */}
            <div className="flex flex-col">
              <Image
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                alt="JavaScript DOM"
                className="rounded-lg w-full h-[180px] object-cover mb-3"
                width={600}
                height={180}
              />
              <div className="text-[15px] text-[#6f42c1] font-semibold mb-1">
                Jordan DOM <span className="text-[#6b6b6b] font-normal">• 18 Jun 2025</span>
              </div>
              <div className="font-bold text-[22px] mb-1 text-[#222] flex items-center">
                JavaScript and the DOM
                <span className="ml-1 text-[18px]">↗</span>
              </div>
              <div className="text-[15px] text-[#555] mb-3">
                Dive into how JavaScript interacts with the Document Object Model
                to create dynamic web pages.
              </div>
              <div className="flex gap-2">
                <span className="bg-[#e9d8fd] text-[#6f42c1] rounded px-3 py-1 text-[13px]">
                  JavaScript
                </span>
                <span className="bg-[#bee3f8] text-[#3182ce] rounded px-3 py-1 text-[13px]">
                  DOM
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}