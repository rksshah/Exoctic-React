import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { motion } from 'motion/react';

interface TextPageProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function TextPage({ title, subtitle, lastUpdated, children }: TextPageProps) {
  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 border-b border-gray-100 pb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-black mb-4">{title}</h1>
          {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
          {lastUpdated && <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest">Last Updated: {lastUpdated}</p>}
        </div>
        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-a:text-[#555348] hover:prose-a:text-black text-gray-600 mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

// --- Specific Implementations ---

export function FAQ() {
  return (
    <TextPage title="Frequently Asked Questions" subtitle="Common questions about our fibers and shipping.">
      <div className="space-y-12 not-prose">
        {[
          { q: "Where does your wool come from?", a: "Our Merino comes from certified farms in New Zealand, while our Alpaca is sourced from cooperatives in the Peruvian Andes." },
          { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries. Shipping costs are calculated at checkout based on weight and destination." },
          { q: "Is your yarn mulesing-free?", a: "Absolutely. We have a zero-tolerance policy for mulesing and only work with farms that adhere to strict animal welfare standards." },
          { q: "How should I wash my finished garment?", a: "We recommend hand washing in cool water with a wool-safe detergent. Lay flat to dry away from direct heat." }
        ].map((item, i) => (
          <div key={i} className="border-b border-gray-100 pb-8">
            <h3 className="font-serif text-2xl mb-4 text-black">{item.q}</h3>
            <p className="text-gray-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </TextPage>
  );
}

export function Shipping() {
  return (
    <TextPage title="Shipping Policy" lastUpdated="October 2025">
      <h3>Processing Time</h3>
      <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
      
      <h3>Domestic Shipping Rates</h3>
      <ul>
        <li>Standard (3-5 business days): $8.00 (Free over $200)</li>
        <li>Express (2 business days): $15.00</li>
        <li>Overnight (1 business day): $35.00</li>
      </ul>

      <h3>International Shipping</h3>
      <p>We offer DHL Express and standard international shipping. Duties and taxes are calculated at checkout so there are no surprises upon delivery.</p>
    </TextPage>
  );
}

export function Returns() {
  return (
    <TextPage title="Returns & Exchanges">
      <p className="lead">We want you to love your yarn. If you are not completely satisfied, we accept returns within 30 days of purchase.</p>
      
      <h3>Conditions</h3>
      <p>Items must be unused, in their original condition, and in the original packaging. Skeins that have been wound into balls cannot be returned.</p>
      
      <h3>How to Initiate a Return</h3>
      <p>Please email <a href="mailto:support@exoticfiber.com">support@exoticfiber.com</a> with your order number. We will provide a prepaid shipping label for domestic returns.</p>
      
      <h3>Refunds</h3>
      <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed to the original method of payment within 5-7 business days.</p>
    </TextPage>
  );
}

export function Values() {
  return (
    <TextPage title="Our Core Values" subtitle="The principles that guide every skein we spin.">
      <div className="grid gap-12 not-prose">
         <div className="text-center">
            <h3 className="font-serif text-2xl mb-4">Quality Over Quantity</h3>
            <p>We believe in slow fashion and heirloom materials. We produce in small batches to ensure the highest standard of quality control.</p>
         </div>
         <div className="text-center">
            <h3 className="font-serif text-2xl mb-4">Transparency</h3>
            <p>You deserve to know exactly where your materials come from. We share the story of every farm and mill we partner with.</p>
         </div>
         <div className="text-center">
            <h3 className="font-serif text-2xl mb-4">Community</h3>
            <p>We are more than a shop; we are a gathering place for makers. We support inclusivity and education in the fiber arts.</p>
         </div>
      </div>
    </TextPage>
  );
}

export function HowItWorks() {
  return (
    <div className="pt-0 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
         <h1 className="font-serif text-5xl mb-16">From Fleece to Needle</h1>
         
         <div className="relative border-l border-gray-200 ml-6 md:ml-auto md:border-l-0 md:flex md:justify-between md:items-start md:gap-8">
            {[
              { step: "01", title: "Sourcing", desc: "We visit farms annually to select the finest fleeces." },
              { step: "02", title: "Milling", desc: "Raw fiber is cleaned and carded at our eco-friendly mills." },
              { step: "03", title: "Spinning", desc: "Fibers are twisted into strong, consistent yarns." },
              { step: "04", title: "Dyeing", desc: "Hand-dyed in small batches using non-toxic pigments." },
              { step: "05", title: "You", desc: "Transformed by your hands into something beautiful." },
            ].map((item, i) => (
              <div key={i} className="mb-12 ml-8 md:ml-0 md:mb-0 md:flex-1 relative">
                 <span className="absolute -left-[41px] md:static md:block md:mx-auto md:mb-6 w-8 h-8 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold border-4 border-white">
                   {item.step}
                 </span>
                 <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                 <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
