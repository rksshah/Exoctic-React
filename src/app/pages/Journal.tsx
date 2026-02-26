import React, { useState } from 'react';
import { motion } from 'motion/react';
import { blogPosts, categories } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, Clock } from 'lucide-react';
import { clsx } from 'clsx';

export function Journal() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const postCategories = ['All', 'Tutorials', 'Behind the Scenes', 'Patterns', 'Community'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-4 block">The Journal</span>
          <h1 className="font-serif text-5xl md:text-6xl text-black mb-6">Stories from the Studio</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore tutorials, meet our makers, discover free patterns, and go behind the scenes at Exotic Fiber.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {postCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                activeCategory === cat 
                  ? "bg-black text-white" 
                  : "bg-[#f9f8f6] text-gray-500 hover:bg-[#dedac8] hover:text-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (First one) */}
        {activeCategory === 'All' && blogPosts.length > 0 && (
           <Link to={`/journal/${blogPosts[0].slug}`} className="block group mb-20 relative aspect-[2/1] md:aspect-[2.5/1] overflow-hidden rounded-sm">
             <img 
               src={blogPosts[0].coverImage} 
               alt={blogPosts[0].title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-white">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight group-hover:underline underline-offset-8 decoration-1 decoration-[#dedac8]">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 md:text-lg mb-6 line-clamp-2">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-[#dedac8]">
                   <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blogPosts[0].readTime}</span>
                   <span className="flex items-center gap-2">Read Article <ChevronRight className="w-4 h-4" /></span>
                </div>
             </div>
           </Link>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredPosts.slice(activeCategory === 'All' ? 1 : 0).map((post) => (
            <Link key={post.id} to={`/journal/${post.slug}`} className="group flex flex-col h-full">
              <div className="aspect-[3/2] overflow-hidden rounded-sm mb-6 bg-[#f9f8f6]">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3 text-[10px] font-bold uppercase tracking-widest text-[#8c8a7b]">
                  <span>{post.category}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-[#555348] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-black group-hover:text-[#8c8a7b] transition-colors">Read More</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}