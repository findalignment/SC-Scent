import { FLIGHT_RULES } from '@/lib/constants';

export default function FlightExplainer() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Travel Tips
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TSA-Approved Sizes
            </h2>
            <p className="text-lg text-gray-600">
              All our decants are flight-ready and travel-friendly
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-8 text-white rounded-t-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">✈️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Travel-Ready</h3>
                  <p className="text-cyan-100">
                    All sizes {FLIGHT_RULES.maxSize} or less • Perfect for carry-on
                  </p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                TSA Liquid Requirements
              </h4>
              <div className="space-y-4">
                {FLIGHT_RULES.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-0.5">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gray-50 p-8 border-t border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Pro Tips for Travelers
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">🎒</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Pack Smart</h5>
                  <p className="text-sm text-gray-600">
                    Keep your decants in a clear, quart-sized bag and place it on top of your carry-on for easy access during security.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">🔒</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Leak Protection</h5>
                  <p className="text-sm text-gray-600">
                    Our atomizers are leak-proof, but you can add extra protection by wrapping them in a small ziplock bag.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">🌡️</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Temperature Care</h5>
                  <p className="text-sm text-gray-600">
                    Avoid extreme temperatures. Don't leave fragrances in checked bags or hot cars—stick to carry-on.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">📏</div>
                  <h5 className="font-semibold text-gray-900 mb-2">Size Right</h5>
                  <p className="text-sm text-gray-600">
                    A 10ml decant is perfect for a week-long trip. Order multiple sizes for extended travel.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 text-center border-t border-gray-200 rounded-b-2xl">
              <p className="text-gray-700 mb-4 font-medium">
                All decants are TSA-compliant and ready for your next adventure
              </p>
              <a
                href="/in-stock"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Browse Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
