export const metadata = {
  title: 'Fragrance Parties - Santa Cruz Scent',
  description: 'Host a unique fragrance experience for your next event in Santa Cruz.',
};

export default function PartiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fragrance Party Experiences
            </h1>
            <p className="text-xl text-cyan-50 leading-relaxed">
              Create unforgettable memories with a personalized fragrance discovery experience in Santa Cruz
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What to Expect
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                <div className="text-4xl mb-4">👃</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scent Discovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sample 15-20 premium designer fragrances. Learn about fragrance families, notes, and how to find your signature scent.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I'll guide your group through the world of fragrances, explaining notes, longevity, and how scents work with body chemistry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                <div className="text-4xl mb-4">🧴</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Take-Home Samples
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Each guest receives sample vials of their favorite discoveries to take home and enjoy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Santa Cruz Setting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hosted at your location in the Santa Cruz area, perfect for creating a unique, memorable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Perfect For
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: '🎂', title: 'Birthdays', desc: 'Make your celebration unique' },
                { emoji: '👰', title: 'Bridal Showers', desc: 'Find the perfect wedding day scent' },
                { emoji: '💼', title: 'Team Building', desc: 'Unique corporate experience' },
                { emoji: '👯', title: "Friends' Gatherings", desc: 'Fun and interactive activity' },
                { emoji: '🎓', title: 'Graduation Parties', desc: 'Celebrate with something special' },
                { emoji: '🏠', title: 'Home Parties', desc: 'Intimate group experiences' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Me</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reach out with your event date, location in Santa Cruz area, and estimated number of guests (ideal: 4-12 people).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customize Your Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll discuss your group's preferences, event theme, and I'll curate the perfect fragrance selection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoy the Event</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I bring everything needed (fragrances, testing supplies, take-home samples) and create a fun, interactive 60-90 minute experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Pricing */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Details
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-600">60-90 minutes</p>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Group Size</h3>
                  <p className="text-gray-600">Ideal for 4-12 guests (can accommodate larger groups)</p>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Your venue in the Santa Cruz area</p>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">What's Included</h3>
                  <ul className="text-gray-600 space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      <span>15-20 premium designer fragrances to sample</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      <span>Expert guidance and fragrance education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      <span>Take-home sample vials for each guest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      <span>All testing supplies and materials</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Pricing</h3>
                  <p className="text-gray-600">Contact for custom quote based on group size and location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Host a Fragrance Party?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Let's create an unforgettable experience for your guests
            </p>
            <a
              href="/book"
              className="inline-block px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
