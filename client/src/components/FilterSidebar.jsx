import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

// Define available filter options
const filterOptions = {
  categories: ["Men", "Women", "Kids"],
  priceRange: ["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Above ₹2000"],
  clothingTypes: ["Jeans", "Shirts", "T-Shirts", "Tops", "Jackets", "Sweaters"],
  sizes: ["S", "M", "L", "XL", "XXL"],
};

const FilterSidebar = ({ applyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: [],
    clothingTypes: [],
    sizes: [],
  });

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[type] = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      priceRange: [],
      clothingTypes: [],
      sizes: [],
    });
  };

  return (
    <motion.div
      initial={{ x: -300 }} // Sidebar initial hidden position
      animate={{ x: 0 }} // Slide-in animation
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      className="fixed top-16 left-0 h-auto bg-gray-100 shadow-lg w-64 py-4 px-4 overflow-y-auto" // Adjust height to auto and add overflow
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Filter Options</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-red-500 hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Categories Filter */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Categories</h3>
        <ul className="space-y-2 mt-2">
          {filterOptions.categories.map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.categories.includes(category)}
                  onChange={() => handleFilterChange("categories", category)}
                  className="form-checkbox text-yellow-500"
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Price Range</h3>
        <ul className="space-y-2 mt-2">
          {filterOptions.priceRange.map((price) => (
            <li key={price}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.priceRange.includes(price)}
                  onChange={() => handleFilterChange("priceRange", price)}
                  className="form-checkbox text-yellow-500"
                />
                <span>{price}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Clothing Type Filter */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Clothing Types</h3>
        <ul className="space-y-2 mt-2">
          {filterOptions.clothingTypes.map((type) => (
            <li key={type}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.clothingTypes.includes(type)}
                  onChange={() => handleFilterChange("clothingTypes", type)}
                  className="form-checkbox text-yellow-500"
                />
                <span>{type}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Sizes</h3>
        <ul className="space-y-2 mt-2">
          {filterOptions.sizes.map((size) => (
            <li key={size}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.sizes.includes(size)}
                  onChange={() => handleFilterChange("sizes", size)}
                  className="form-checkbox text-yellow-500"
                />
                <span>{size}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={() => applyFilters(selectedFilters)}
        className="w-full py-2 mt-4 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
      >
        Apply Filters
      </button>
    </motion.div>
  );
};

export default FilterSidebar;
