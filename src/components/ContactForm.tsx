'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border-l-4 border-green-600 p-8 text-center shadow-xl">
        <div className="text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-900 mb-3">
          Message Sent!
        </h3>
        <p className="text-green-800 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 focus:outline-none transition-colors"
          placeholder="Your name"
          disabled={status === 'loading'}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 focus:outline-none transition-colors"
          placeholder="your@email.com"
          disabled={status === 'loading'}
        />
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Phone <span className="text-gray-500 text-xs font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 focus:outline-none transition-colors"
          placeholder="(831) 555-1234"
          disabled={status === 'loading'}
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your fragrance interests, event details, or any questions you have..."
          disabled={status === 'loading'}
        />
        <p className="text-sm text-gray-500 mt-2">
          {formData.message.length} / 2000 characters
        </p>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4">
          <p className="text-red-800 font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-teal-700 text-white font-bold shadow-lg hover:shadow-xl hover:bg-teal-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-400"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        We typically respond within 24 hours
      </p>
    </form>
  );
}
