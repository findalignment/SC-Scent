'use client';

import { useState } from 'react';
import type { FilterOptions } from '@/lib/schema';

interface InventoryFiltersProps {
  availableOptions: {
    brands: string[];
    scentFamilies: string[];
    concentrations: string[];
    genders: string[];
  };
  onFilterChange: (filters: Partial<FilterOptions>) => void;
}

export default function InventoryFilters({ 
  availableOptions, 
  onFilterChange 
}: InventoryFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<Partial<FilterOptions>>({
    brands: [],
    scentFamilies: [],
    concentrations: [],
    genders: [],
    inStockOnly: false,
    flightReadyOnly: false,
  });

  const handleCheckboxChange = (
    category: keyof FilterOptions,
    value: string | boolean
  ) => {
    let newFilters = { ...filters };

    if (typeof value === 'boolean') {
      newFilters = { ...newFilters, [category]: value };
    } else {
      const currentArray = (newFilters[category] as string[]) || [];
      const isSelected = currentArray.includes(value);

      newFilters = {
        ...newFilters,
        [category]: isSelected
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      brands: [],
      scentFamilies: [],
      concentrations: [],
      genders: [],
      inStockOnly: false,
      flightReadyOnly: false,
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFilterCount = 
    (filters.brands?.length || 0) +
    (filters.scentFamilies?.length || 0) +
    (filters.concentrations?.length || 0) +
    (filters.genders?.length || 0) +
    (filters.inStockOnly ? 1 : 0) +
    (filters.flightReadyOnly ? 1 : 0);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-gray-900">Filters</h3>
            {activeFilterCount > 0 && (
              <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
        </div>
      </div>

      {/* Filters Content */}
      <div className={`p-4 space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        {/* Quick Filters */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Quick Filters</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.inStockOnly || false}
                onChange={(e) => handleCheckboxChange('inStockOnly', e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700">In Stock Only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.flightReadyOnly || false}
                onChange={(e) => handleCheckboxChange('flightReadyOnly', e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700">✈️ Flight Ready</span>
            </label>
          </div>
        </div>

        {/* Brands */}
        {availableOptions.brands.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Brand</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableOptions.brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands?.includes(brand) || false}
                    onChange={() => handleCheckboxChange('brands', brand)}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Scent Families */}
        {availableOptions.scentFamilies.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Scent Family</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableOptions.scentFamilies.map((family) => (
                <label
                  key={family}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={filters.scentFamilies?.includes(family) || false}
                    onChange={() => handleCheckboxChange('scentFamilies', family)}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-gray-700">{family}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Gender */}
        {availableOptions.genders.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Gender</h4>
            <div className="space-y-2">
              {availableOptions.genders.map((gender) => (
                <label
                  key={gender}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={filters.genders?.includes(gender) || false}
                    onChange={() => handleCheckboxChange('genders', gender)}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Concentration */}
        {availableOptions.concentrations.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Concentration</h4>
            <div className="space-y-2">
              {availableOptions.concentrations.map((concentration) => (
                <label
                  key={concentration}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={filters.concentrations?.includes(concentration) || false}
                    onChange={() => handleCheckboxChange('concentrations', concentration)}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-gray-700">{concentration}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
