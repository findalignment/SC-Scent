export const metadata = {
  title: 'Book - Santa Cruz Scent',
  description: 'Contact us to place an order or ask questions.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-cyan-50">
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
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <p className="text-lg text-gray-700 mb-8">
                Ready to order or have questions? Get in touch with us.
              </p>
              
              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
                  <div className="text-5xl mb-4">📧</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Email</h3>
                  <a
                    href="mailto:hello@santacruzscent.com"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline text-xl font-medium"
                  >
                    hello@santacruzscent.com
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Best for orders, party inquiries, and detailed questions
                  </p>
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">Instagram</h3>
                  <a
                    href="https://instagram.com/santacruzscent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 hover:underline text-xl font-medium"
                  >
                    @santacruzscent
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    See what's new, DM for quick questions
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-cyan-50 rounded-xl border border-cyan-200">
                <p className="text-sm text-gray-700 text-center">
                  <strong className="text-cyan-700">🌊 Based in Santa Cruz</strong>
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
