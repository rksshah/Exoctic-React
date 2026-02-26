import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Check } from 'lucide-react';

export function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const presetAmounts = [25, 50, 100, 150, 200];

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-black">Gift Cards</span>
          </div>
          
          <Gift className="w-16 h-16 mx-auto mb-6 text-gray-700" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-light mb-6">Gift Cards</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Give the gift of choice. Our digital gift cards are delivered instantly via email and never expire. Perfect for the fiber lover in your life.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left: Gift Card Preview */}
          <div>
            <div className="bg-gradient-to-br from-[#555348] to-[#3d3a30] text-white rounded-lg p-12 mb-6 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-widest mb-8 opacity-80">Exotic Fiber Gift Card</p>
                <p className="text-5xl font-bold mb-12">
                  ${selectedAmount || customAmount || '—'}
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1 opacity-60">To:</p>
                    <p className="font-medium">{recipientName || 'Recipient Name'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest mb-1 opacity-60">From:</p>
                    <p className="font-medium">{senderName || 'Your Name'}</p>
                  </div>
                </div>
              </div>
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <pattern id="gift-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#gift-pattern)" />
                </svg>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">Delivered instantly via email</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">Never expires</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">Can be used across multiple orders</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">Redeemable on all products including sale items</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form className="space-y-6">
              
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-4">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 rounded-lg border-2 transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? 'border-[#555348] bg-[#555348] text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-2">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="10"
                      max="500"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      placeholder="Custom amount"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#555348] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Recipient Details */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-4">Recipient Details</label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="Recipient's Name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#555348] focus:outline-none"
                  />
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="Recipient's Email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#555348] focus:outline-none"
                  />
                </div>
              </div>

              {/* Sender Details */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-4">Your Details</label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#555348] focus:outline-none"
                />
              </div>

              {/* Personal Message */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-4">Personal Message (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a personal message..."
                  rows={4}
                  maxLength={250}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#555348] focus:outline-none resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">{message.length}/250 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#555348] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors"
              >
                Add to Cart - ${selectedAmount || customAmount || 0}
              </button>

            </form>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t">
          <h2 className="text-2xl font-light mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">How does it work?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                After purchase, the recipient will receive an email with a unique gift card code. They can enter this code at checkout to apply the balance to their order.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Do gift cards expire?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No! Our gift cards never expire and can be used at any time.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Can I use multiple gift cards?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes, you can apply multiple gift card codes to a single order.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">What if I don't use the full amount?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Any remaining balance stays on the gift card and can be used on future purchases.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
