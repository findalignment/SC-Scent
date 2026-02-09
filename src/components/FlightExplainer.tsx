import { FLIGHT_RULES } from '@/lib/constants';

export default function FlightExplainer() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 text-sm font-bold mb-4 border-l-4 border-teal-700 shadow-md">
              Travel Tips
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TSA-Approved Sizes
            </h2>
            <p className="text-lg text-gray-700">
              All our decants are flight-ready and travel-friendly
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white shadow-xl overflow-hidden border-t-4 border-teal-700">
            {/* Hero Section */}
            <div className="bg-slate-800 p-8 text-white border-b-4 border-teal-600">
              <div>
                <h3 className="text-2xl font-bold mb-1">Travel-Ready</h3>
                <p className="text-gray-300">
                  All sizes {FLIGHT_RULES.maxSize} or less • Perfect for carry-on
                </p>
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
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-700 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 pt-0.5">{requirement}</p>
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
                <div className="bg-white p-4 border-l-4 border-teal-600 shadow-md">
                  <h5 className="font-bold text-gray-900 mb-2">Pack Smart</h5>
                  <p className="text-sm text-gray-700">
                    Keep your decants in a clear, quart-sized bag and place it on top of your carry-on for easy access during security.
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-teal-600 shadow-md">
                  <h5 className="font-bold text-gray-900 mb-2">Leak Protection</h5>
                  <p className="text-sm text-gray-700">
                    For extra protection during travel, wrap your decants in a small ziplock bag inside your quart-sized liquids bag.
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-teal-600 shadow-md">
                  <h5 className="font-bold text-gray-900 mb-2">Temperature Care</h5>
                  <p className="text-sm text-gray-700">
                    Avoid extreme temperatures. Don't leave fragrances in checked bags or hot cars—stick to carry-on.
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-teal-600 shadow-md">
                  <h5 className="font-bold text-gray-900 mb-2">Size Right</h5>
                  <p className="text-sm text-gray-700">
                    A 5ml decant is perfect for a week-long trip. Order multiple sizes for extended travel.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="bg-teal-50 p-8 text-center border-t-4 border-teal-600 shadow-md">
              <p className="text-gray-800 mb-4 font-bold">
                All decants are TSA-compliant and ready for your next adventure
              </p>
              <a
                href="/in-stock"
                className="inline-block px-6 py-3 bg-teal-700 text-white font-bold shadow-lg hover:shadow-xl hover:bg-teal-800 transition-all duration-200"
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
