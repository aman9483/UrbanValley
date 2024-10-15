import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/action/product"; // Import the action to fetch products
import ClothingCard from "./ClotingCard"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const filterOptions = {
  categories: ["Men", "Women", "Kids"],
  priceRange: ["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Above ₹2000"],
  clothingTypes: ["Jeans", "Shirts", "T-Shirts", "Tops", "Jackets", "Sweaters"],
  sizes: ["S", "M", "L", "XL", "XXL"],
};

const ClothingShop = () => {
  const dispatch = useDispatch();

  // Accessing the products from the Redux store
  const { loading, products, error } = useSelector((state) => state.productList);

  const [filteredData, setFilteredData] = useState(products);
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: [],
    clothingTypes: [],
    sizes: [],
  });

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  useEffect(() => {
    applyFilters(selectedFilters, searchQuery); // Apply filters and search
  }, [products, searchQuery]);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[type] = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      applyFilters(newFilters, searchQuery); // Apply filters whenever the state changes
      return newFilters;
    });
  };

  const applyFilters = (currentFilters, query) => {
    const filtered = products.filter((item) => {
      const matchesFilters =
        (currentFilters.categories.length === 0 || currentFilters.categories.includes(item.category)) &&
        (currentFilters.priceRange.length === 0 || applyPriceRangeFilter(item.price, currentFilters.priceRange)) &&
        (currentFilters.clothingTypes.length === 0 || currentFilters.clothingTypes.includes(item.ProductType)) &&
        (currentFilters.sizes.length === 0 || currentFilters.sizes.includes(item.ProductSize));

      const matchesSearch =
        item.productName.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());

      return matchesFilters && matchesSearch;
    });
    setFilteredData(filtered);
  };

  // Helper function to filter price ranges
  const applyPriceRangeFilter = (price, priceRanges) => {
    if (priceRanges.includes("Under ₹500") && price < 500) return true;
    if (priceRanges.includes("₹500 - ₹1000") && price >= 500 && price <= 1000) return true;
    if (priceRanges.includes("₹1000 - ₹2000") && price > 1000 && price <= 2000) return true;
    if (priceRanges.includes("Above ₹2000") && price > 2000) return true;
    return false;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col lg:mx-20 py-4">
      {/* Header */}
      <span className="flex items-center justify-center lg:w-full lg:my-14">
        <h1 className="text-2xl font-bold lg:text-5xl">
          Our <span className="font-serif text-yellow">Urban Clothing</span> Collections
        </h1>
      </span>

      {/* Search Bar */}
      <div className="flex justify-center w-full px-4 py-2">
        <input
          type="text"
          className="w-full max-w-lg p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Search clothing..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-6 w-full bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Categories Filter */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg text-gray-700">Categories:</span>
          {filterOptions.categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("categories", category)}
              />
              {category}
            </label>
          ))}
        </div>

        {/* Price Range Filter */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg text-gray-700">Price Range:</span>
          {filterOptions.priceRange.map((price) => (
            <label key={price} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("priceRange", price)}
              />
              {price}
            </label>
          ))}
        </div>

        {/* Clothing Types Filter */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg text-gray-700">Clothing Types:</span>
          {filterOptions.clothingTypes.map((type) => (
            <label key={type} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("clothingTypes", type)}
              />
              {type}
            </label>
          ))}
        </div>

        {/* Sizes Filter */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg text-gray-700">Sizes:</span>
          {filterOptions.sizes.map((size) => (
            <label key={size} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("sizes", size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Clothing Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {filteredData.map((clothing) => (
          <ClothingCard
            key={clothing._id}
            id={clothing._id}
            name={clothing.productName}
            price={clothing.price}
            desc={clothing.description}
            rating={clothing.rating}
            img={clothing.image}
            sizes={["XS", "S", "M", "L", "XL"]}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ClothingShop;
