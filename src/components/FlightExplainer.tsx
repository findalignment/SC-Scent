import { FLIGHT_RULES } from '@/lib/constants';

export default function FlightExplainer() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Travel Tips
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flying with Fragrance
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about traveling with your favorite scents
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">✈️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">TSA-Approved Sizes</h3>
                  <p className="text-blue-100">
                    Maximum container size: {FLIGHT_RULES.maxSize} (3.4oz)
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
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center border-t border-gray-200">
              <p className="text-gray-700 mb-4">
                All our flight-ready decants are pre-tested and guaranteed TSA-compliant.
              </p>
              <a
                href="/in-stock"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Shop Flight-Ready Decants
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
