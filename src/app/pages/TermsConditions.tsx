import React from 'react';
import { Link } from 'react-router-dom';

export function TermsConditions() {
  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-600">Last Updated: February 10, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8">
          
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Exotic Fiber. By accessing or using our website and purchasing our products, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-light mb-4">1. General Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                These Terms & Conditions govern your use of our website and the purchase of products from Exotic Fiber. By placing an order, you confirm that you are at least 18 years old and have the legal capacity to enter into this agreement.
              </p>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-light mb-4">2. Orders and Payment</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Order Acceptance:</strong> All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order for any reason, including pricing errors, product unavailability, or suspected fraudulent activity.
              </p>
              <p className="leading-relaxed">
                <strong>Pricing:</strong> All prices are listed in USD and are subject to change without notice. We strive to ensure pricing accuracy, but errors may occur. If we discover a pricing error after you've placed an order, we'll notify you and offer the option to proceed at the correct price or cancel your order.
              </p>
              <p className="leading-relaxed">
                <strong>Payment:</strong> We accept major credit cards, PayPal, and other payment methods as indicated at checkout. Payment is processed at the time of order. Your order will not be fulfilled until payment is received and verified.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-light mb-4">3. Shipping and Delivery</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Processing Time:</strong> Orders are typically processed and shipped within 2-5 business days. Custom dye orders may take 2-3 weeks.
              </p>
              <p className="leading-relaxed">
                <strong>Shipping Costs:</strong> Shipping costs are calculated at checkout based on your location and selected shipping method. We offer free standard shipping on orders over $75 within the contiguous United States.
              </p>
              <p className="leading-relaxed">
                <strong>Delivery Times:</strong> Estimated delivery times are provided at checkout but are not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or unforeseen circumstances.
              </p>
              <p className="leading-relaxed">
                <strong>International Orders:</strong> International customers are responsible for any customs duties, taxes, or fees imposed by their country.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-light mb-4">4. Returns and Exchanges</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We want you to love your purchase. If you're not satisfied, you may return unused, unwashed items in their original condition within 30 days of delivery for a refund or exchange.
              </p>
              <p className="leading-relaxed">
                <strong>Non-Returnable Items:</strong> Custom dye orders, sale items, gift cards, and digital patterns are final sale and cannot be returned.
              </p>
              <p className="leading-relaxed">
                <strong>Return Process:</strong> To initiate a return, contact us at returns@exoticfiber.com with your order number. Return shipping costs are the customer's responsibility unless the item is defective or we made an error.
              </p>
              <p className="leading-relaxed">
                <strong>Refunds:</strong> Refunds will be issued to the original payment method within 5-7 business days after we receive and inspect your return.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-light mb-4">5. Product Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We make every effort to accurately represent our products through descriptions and images. However, colors may vary slightly due to monitor settings and hand-dyeing processes. Natural fibers may contain slight variations in texture and appearance, which is normal and part of their charm.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-light mb-4">6. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                All content on this website, including text, images, logos, patterns, and designs, is the property of Exotic Fiber and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>
              <p className="leading-relaxed">
                <strong>Patterns:</strong> Purchased patterns are for personal use only. You may sell finished items made from our patterns, but you may not reproduce, distribute, or sell the pattern itself.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-light mb-4">7. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              When you create an account, you are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage resulting from your failure to protect your account information.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-light mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Exotic Fiber is not liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our liability is limited to the amount you paid for the product in question.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-light mb-4">9. Prohibited Activities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-2 ml-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Use our website for any unlawful purpose</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Transmit viruses, malware, or harmful code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Scrape or harvest data from our website without permission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Impersonate another person or entity</span>
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-light mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions are governed by the laws of the State of New York, United States, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of New York.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-light mb-4">11. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-light mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-[#f9f8f6] p-6 rounded-lg text-sm">
              <p className="mb-1"><strong>Exotic Fiber</strong></p>
              <p className="text-gray-600">Email: info@exoticfiber.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Address: 128 Mercer Street, New York, NY 10012</p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="border-t pt-8">
            <p className="text-gray-700 leading-relaxed">
              By using our website and making a purchase, you acknowledge that you have read, understood, and agree to these Terms & Conditions.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
