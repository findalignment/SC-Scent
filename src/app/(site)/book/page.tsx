import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact - Santa Cruz Scent',
  description: 'Get in touch with Santa Cruz Scent for orders, questions, or party bookings.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white border-b-4 border-teal-600" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Questions about fragrances? Want to order? Interested in hosting a party?
              <br />
              <span className="font-semibold text-white">Let's connect!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white shadow-xl p-8 md:p-12 border-t-4 border-teal-600 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              
              <ContactForm />
            </div>

            {/* Alternative Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Call or Text</h3>
                <a
                  href="tel:+18312952076"
                  className="text-amber-700 hover:text-amber-800 hover:underline text-xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 inline-block"
                  aria-label="Call (831) 295-2076"
                >
                  (831) 295-2076
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  For quick questions
                </p>
              </div>

              {/* Instagram */}
              <div className="bg-white p-6 shadow-lg border-l-4 border-slate-600">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Instagram</h3>
                <a
                  href="https://instagram.com/santacruzscent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-900 hover:underline text-xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 inline-flex items-center gap-2"
                  aria-label="Visit Santa Cruz Scent on Instagram, opens in new tab"
                >
                  @santacruzscent
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  DM for quick questions
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 border-l-4 border-teal-700 shadow-md text-center">
              <p className="text-sm text-gray-800 font-medium">
                <strong className="text-teal-800">Based in Santa Cruz, CA</strong>
                <br />
                In-person scent consultations available locally
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
