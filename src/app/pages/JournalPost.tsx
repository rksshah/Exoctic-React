import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export function JournalPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  return (
    <div className="pt-[120px] pb-24 bg-white min-h-screen">
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl">
           <Link to="/journal" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c8a7b] hover:text-black mb-6 transition-colors">
             <ArrowLeft className="w-4 h-4" /> Back to Journal
           </Link>
           
           <h1 className="font-serif text-4xl md:text-5xl text-black mb-6 leading-tight">
             {post.title}
           </h1>

           <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium border-b border-gray-100 pb-8 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
              <span className="bg-[#f9f8f6] px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-bold text-[#555348]">
                {post.category}
              </span>
           </div>

           <article className="prose prose-lg prose-headings:font-serif prose-headings:font-normal hover:prose-a:text-[#555348] text-gray-600">
             <p className="lead text-xl text-black font-serif italic mb-8">
               {post.excerpt}
             </p>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <h3>The Process</h3>
             <p>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
             <figure>
               <img 
                 src="https://images.unsplash.com/photo-1616252993439-7e1924e5c29b?auto=format&fit=crop&q=80&w=1000" 
                 alt="Spinning wheel detail" 
                 className="w-full aspect-video object-cover rounded-sm"
               />
               <figcaption className="text-center text-xs text-gray-400 mt-2 italic">Detailed hand-spinning process in our studio.</figcaption>
             </figure>
             <p>
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
             </p>
             <blockquote>
               "Knitting is the saving of life. It is the peace of the soul."
             </blockquote>
             <p>
               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
             </p>
           </article>
           
           {/* Share */}
           <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
             <span className="text-xs font-bold uppercase tracking-widest text-black">Share this Article</span>
             <div className="flex gap-4">
               <button className="p-2 bg-[#f9f8f6] hover:bg-[#dedac8] rounded-full transition-colors"><Facebook className="w-4 h-4" /></button>
               <button className="p-2 bg-[#f9f8f6] hover:bg-[#dedac8] rounded-full transition-colors"><Twitter className="w-4 h-4" /></button>
               <button className="p-2 bg-[#f9f8f6] hover:bg-[#dedac8] rounded-full transition-colors"><Linkedin className="w-4 h-4" /></button>
               <button className="p-2 bg-[#f9f8f6] hover:bg-[#dedac8] rounded-full transition-colors"><Share2 className="w-4 h-4" /></button>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
}
