import React from 'react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600">Last Updated: February 10, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8">
          
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              At Exotic Fiber, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-light mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Personal Information:</strong> When you place an order, create an account, or sign up for our newsletter, we collect information such as your name, email address, shipping address, billing address, and phone number.
              </p>
              <p className="leading-relaxed">
                <strong>Payment Information:</strong> Payment details are processed securely through our payment processor. We do not store complete credit card information on our servers.
              </p>
              <p className="leading-relaxed">
                <strong>Browsing Information:</strong> We collect data about how you interact with our website, including pages visited, products viewed, and your IP address. This helps us improve your experience.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-light mb-4">2. How We Use Your Information</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">We use the information we collect to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <span>Process and fulfill your orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <span>Communicate with you about your order status, shipping updates, and customer service inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <span>Send you marketing emails about new products, promotions, and events (only if you've opted in)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <span>Improve our website, products, and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <span>Detect and prevent fraud</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-light mb-4">3. How We Protect Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your personal information, including SSL encryption for data transmission, secure servers, and restricted access to sensitive data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-light mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-2 ml-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span><strong>Service Providers:</strong> Shipping companies, payment processors, and email marketing platforms that help us operate our business</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-light mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser, but disabling cookies may limit some functionality on our site.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-light mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2 ml-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Access, update, or delete your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Opt out of marketing emails at any time by clicking the unsubscribe link</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                <span>Request a copy of the data we hold about you</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@exoticfiber.com" className="text-[#555348] underline hover:no-underline">privacy@exoticfiber.com</a>
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-light mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-light mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-light mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-light mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-[#f9f8f6] p-6 rounded-lg text-sm">
              <p className="mb-1"><strong>Exotic Fiber</strong></p>
              <p className="text-gray-600">Email: privacy@exoticfiber.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Address: 128 Mercer Street, New York, NY 10012</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
