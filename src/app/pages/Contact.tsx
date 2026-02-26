import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert("Thank you for your message. We'll get back to you shortly.");
  };

  return (
    <div className="pt-[120px] pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-4 block">Get in Touch</span>
            <h1 className="font-serif text-5xl text-black mb-8">We'd love to hear from you.</h1>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Whether you have a question about a yarn base, need help with an order, or just want to say hello, our team is here for you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#f9f8f6] p-3 rounded-full">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Email Us</h4>
                  <a href="mailto:hello@exoticfiber.com" className="text-gray-600 hover:text-black hover:underline">hello@exoticfiber.com</a>
                  <p className="text-xs text-gray-400 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f9f8f6] p-3 rounded-full">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Call Us</h4>
                  <a href="tel:+15550123456" className="text-gray-600 hover:text-black hover:underline">+1 (555) 012-3456</a>
                  <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 5pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f9f8f6] p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Visit Our Studio</h4>
                  <p className="text-gray-600">123 Woolen Way<br/>Fiber City, VT 05401</p>
                  <p className="text-xs text-gray-400 mt-1">By appointment only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#f9f8f6] p-10 md:p-16 rounded-sm">
            <h3 className="font-serif text-2xl mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                  <input 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">Valid email required</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Subject</label>
                <select 
                  {...register("subject")}
                  className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors appearance-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="press">Press & Collabs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="How can we help?"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1">Required</span>}
              </div>

              <button type="submit" className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#555348] transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
