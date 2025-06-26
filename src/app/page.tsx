// ========================================================================
// THIS IS THE MOST IMPORTANT LINE - IT FIXES THE "variants" ERROR
"use client"; 
// ========================================================================

import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { blogPostsData } from "./blogPostsData";
// FIX 1: Import the 'Variants' type from framer-motion
import { motion, Variants } from "framer-motion";

export default function Home() {
  const featured = blogPostsData.find((post) => post.featured);
  const others = blogPostsData.filter((post) => !post.featured);
  const recentOthers = others.slice(0, 2); 

  // FIX 2: Explicitly type the constant with ': Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // FIX 3: Explicitly type this constant as well. This is where the error was.
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" // TypeScript now understands this is a valid Easing type
      },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        {/* THE BLOG Heading with animation */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <hr className="border-slate-200" />
          <h1 className="font-extrabold text-[clamp(3.5rem,10vw,8rem)] leading-none text-slate-900 text-center py-10 tracking-tighter">
            THE BLOG
          </h1>
          <hr className="border-slate-200 mb-16" />
        </motion.div>

        {/* Recent blog posts */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">
            Recent Posts
          </h2>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Featured Post */}
            {featured && (
              <motion.div className="lg:col-span-2" variants={itemVariants}>
                <Link href={featured.href} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative">
                    <Image src={featured.image} alt={featured.alt} className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105" width={800} height={400} />
                  </div>
                  <div className="p-6 flex flex-col">
                    <p className="text-sm font-semibold text-indigo-600 mb-2">{featured.author} <span className="text-slate-500 font-normal">• {featured.date}</span></p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">{featured.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{featured.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {featured.tags.map((tag) => (<span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Right column with 2 posts */}
            <motion.div className="flex flex-col gap-8" variants={itemVariants}>
              {recentOthers.map((post) => (
                <div key={post.id}>
                  <Link href={post.href} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="relative">
                      <Image src={post.image} alt={post.alt} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" width={400} height={200} />
                    </div>
                    <div className="p-4"><h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2">{post.title}</h3><p className="text-xs font-medium text-slate-500">{post.author} • {post.date}</p></div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* All blog posts */}
        <section className="max-w-7xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">All Posts</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {others.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={post.href} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image src={post.image} alt={post.alt} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" width={400} height={225} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-indigo-600 mb-2">{post.author} <span className="text-slate-500 font-normal">• {post.date}</span></p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">{post.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {post.tags.map((tag) => (<span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}