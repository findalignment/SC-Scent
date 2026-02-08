'use client';

import { useEffect } from 'react';
import type { Fragrance } from '@/lib/schema';
import Badge from './Badge';
import NotesPills from './NotesPills';

interface FragranceModalProps {
  fragrance: Fragrance | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FragranceModal({ fragrance, isOpen, onClose }: FragranceModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !fragrance) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <span className="text-2xl text-gray-600">×</span>
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Image */}
            <div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-4">
                {fragrance.image ? (
                  <img
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🧴
                  </div>
                )}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {fragrance.inStock ? (
                  <Badge variant="success">In Stock</Badge>
                ) : (
                  <Badge variant="danger">Out of Stock</Badge>
                )}
                {fragrance.flightReady && (
                  <Badge variant="info">✈️ Flight Ready - TSA Approved</Badge>
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <p className="text-gray-500 font-medium mb-2">{fragrance.brand}</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  {fragrance.name}
                </h2>
              </div>

              {/* Available Sizes */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-3">Available Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(fragrance.sizes)
                    .filter(([_, qty]) => qty > 0)
                    .map(([size]) => (
                      <div
                        key={size}
                        className="px-4 py-2 bg-white border-2 border-green-200 rounded-lg text-center"
                      >
                        <p className="font-bold text-gray-900">{size}</p>
                      </div>
                    ))}
                  {Object.values(fragrance.sizes).every(qty => qty === 0) && (
                    <p className="text-gray-500">Currently out of stock</p>
                  )}
                </div>
              </div>

              {/* Concentration */}
              {fragrance.concentration && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Concentration</p>
                  <p className="font-semibold text-gray-900">{fragrance.concentration}</p>
                </div>
              )}

              {/* Description */}
              {fragrance.description && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{fragrance.description}</p>
                </div>
              )}

              {/* Scent Families */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Scent Families</h3>
                <div className="flex flex-wrap gap-2">
                  {fragrance.scentFamily.map((family, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full border border-amber-200 font-medium"
                    >
                      {family}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fragrance Notes */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Fragrance Notes</h3>
                <NotesPills notes={fragrance.notes} variant="full" />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <a
                  href="/book"
                  className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 text-center"
                >
                  Order This Scent
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
                >
                  Close
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Questions?</strong> Contact us at{' '}
                  <a href="mailto:hello@santacruzscent.com" className="underline">
                    hello@santacruzscent.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
