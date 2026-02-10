import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Santa Cruz Scent privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white border-b-4 border-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300">
              How we handle your information
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last Updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            {/* Introduction */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8 border-l-4 border-teal-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Santa Cruz Scent ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
              <p className="text-gray-700">
                By using our website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Information You Provide
              </h3>
              <p className="text-gray-700 mb-4">
                When you contact us via email, phone, or social media, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Message content and inquiry details</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
                <li>General location (city/region level only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cookies and Tracking
              </h3>
              <p className="text-gray-700 mb-4">
                Currently, we do not use cookies for tracking purposes. If this changes, we will update this policy and notify you accordingly.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Communication</strong>: To respond to your inquiries and provide customer service</li>
                <li><strong>Service Delivery</strong>: To fulfill orders and provide fragrance consultation services</li>
                <li><strong>Improvement</strong>: To understand how visitors use our site and improve our services</li>
                <li><strong>Marketing</strong>: To send you updates about new products (only if you opt-in)</li>
                <li><strong>Legal Compliance</strong>: To comply with applicable laws and regulations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Information Sharing and Disclosure
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                We Do NOT Sell Your Information
              </h3>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or rent your personal information to third parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Third-Party Services
              </h3>
              <p className="text-gray-700 mb-4">
                We may use the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Vercel</strong>: Website hosting and analytics (anonymized)</li>
                <li><strong>Instagram</strong>: Social media integration (governed by their privacy policy)</li>
              </ul>
              <p className="text-gray-700 mb-6">
                These services have their own privacy policies and we recommend reviewing them.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Legal Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required by law or in response to valid legal requests from authorities.
              </p>
            </div>

            {/* Data Security */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Encryption</strong>: All data transmitted via HTTPS (SSL/TLS)</li>
                <li><strong>Access Control</strong>: Limited access to personal information</li>
                <li><strong>Secure Storage</strong>: Environment variables and encrypted databases</li>
                <li><strong>Regular Updates</strong>: Security patches applied regularly</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the Internet is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only as long as necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Contact Inquiries</strong>: Retained for up to 2 years for customer service purposes</li>
                <li><strong>Order Information</strong>: Retained for 7 years for tax and legal compliance</li>
                <li><strong>Analytics Data</strong>: Anonymized and retained for 2 years</li>
              </ul>
              <p className="text-gray-700">
                You may request deletion of your personal information at any time by contacting us.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8 border-l-4 border-amber-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Access</strong>: Request a copy of your personal data</li>
                <li><strong>Correction</strong>: Request corrections to inaccurate information</li>
                <li><strong>Deletion</strong>: Request deletion of your personal data</li>
                <li><strong>Objection</strong>: Object to certain processing of your data</li>
                <li><strong>Portability</strong>: Request transfer of your data to another service</li>
                <li><strong>Opt-Out</strong>: Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-700">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:hello@santacruzscent.com" className="text-teal-600 hover:text-teal-700 font-semibold">
                  hello@santacruzscent.com
                </a>
              </p>
            </div>

            {/* California Privacy Rights (CCPA) */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information (we don't sell)</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under 18 years of age. 
                We do not knowingly collect personal information from children. 
                If we become aware that we have collected personal information from a child without parental consent, 
                we will take steps to delete that information promptly.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Links to Other Websites
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites (e.g., Instagram, Google). 
                We are not responsible for the privacy practices of these external sites. 
                We encourage you to review their privacy policies when visiting them.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="bg-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last Updated" date</li>
                <li>Notifying you via email (for significant changes)</li>
              </ul>
              <p className="text-gray-700">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-800 text-white p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">Email</h3>
                  <a 
                    href="mailto:hello@santacruzscent.com" 
                    className="text-white hover:text-amber-300 transition-colors"
                  >
                    hello@santacruzscent.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">Phone</h3>
                  <a 
                    href="tel:+18315551234" 
                    className="text-white hover:text-amber-300 transition-colors"
                  >
                    (831) 555-1234
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">Location</h3>
                  <p className="text-gray-300">
                    Santa Cruz, California
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mt-8">
                We will respond to your inquiry within 30 days.
              </p>
            </div>

            {/* Legal Note */}
            <div className="bg-gray-100 p-6 text-center text-sm text-gray-600">
              <p className="mb-2">
                This Privacy Policy was last updated on <strong>February 6, 2026</strong>
              </p>
              <p>
                Santa Cruz Scent • Santa Cruz, CA • All Rights Reserved © 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
