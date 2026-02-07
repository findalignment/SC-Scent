export const metadata = {
  title: 'Book - Santa Cruz Scent',
  description: 'Contact us to place an order or ask questions.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">📅</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Experience
            </h1>
            <p className="text-xl text-gray-600">
              Whether you're looking for a consultation, party experience, or custom order, we're here to help you find your perfect scent.
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
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                  <a
                    href="mailto:hello@santacruzscent.com"
                    className="text-amber-600 hover:underline text-lg"
                  >
                    hello@santacruzscent.com
                  </a>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/santacruzscent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:underline text-lg"
                  >
                    @santacruzscent
                  </a>
                </div>
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
