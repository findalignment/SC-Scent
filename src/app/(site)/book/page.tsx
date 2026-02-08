export const metadata = {
  title: 'Book - Santa Cruz Scent',
  description: 'Contact us to place an order or ask questions.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-20 bg-slate-800 text-white border-b-4 border-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-xl p-8 md:p-12 text-center border-t-4 border-teal-600">
              <p className="text-lg text-gray-700 mb-8 font-medium">
                Ready to order or have questions? Get in touch.
              </p>
              
              <div className="space-y-6">
                <div className="p-8 bg-slate-50 shadow-md border-l-4 border-teal-600">
                  <div className="text-5xl mb-4">📧</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Email</h3>
                  <a
                    href="mailto:hello@santacruzscent.com"
                    className="text-teal-700 hover:text-teal-800 hover:underline text-xl font-bold"
                  >
                    hello@santacruzscent.com
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Best for orders, party inquiries, and detailed questions
                  </p>
                </div>

                <div className="p-8 bg-slate-50 shadow-md border-l-4 border-slate-600">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Instagram</h3>
                  <a
                    href="https://instagram.com/santacruzscent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 hover:underline text-xl font-bold"
                  >
                    @santacruzscent
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    See what's new, DM for quick questions
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-teal-50 border-l-4 border-teal-700 shadow-md">
                <p className="text-sm text-gray-800 text-center font-medium">
                  <strong className="text-teal-800">🌊 Based in Santa Cruz, CA</strong>
                  <br />
                  In-person scent consultations available locally
                </p>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
