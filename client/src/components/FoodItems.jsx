import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/action/product"; // Import the action to fetch products
import ClothingCard from "./FoodCard"; // Update to your ClothingCard component

const filterOptions = {
  categories: ["Men", "Women", "Kids"],
  priceRange: ["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Above ₹2000"],
  clothingTypes: ["Jeans", "Shirts", "T-Shirts", "Tops", "Jackets", "Sweaters"],
  sizes: ["S", "M", "L", "XL", "XXL"],
};

const ClothingShop = () => {
  const dispatch = useDispatch();

  // Accessing the products from the Redux store
  const { loading, products, error } = useSelector((state) => state.productList); // Corrected line

  const [filteredData, setFilteredData] = useState(products);
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
    setFilteredData(products); // Update filtered data when products change
  }, [products]);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[type] = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      applyFilters(newFilters); // Apply filters whenever the state changes
      return newFilters;
    });
  };

  const applyFilters = (currentFilters) => {
    const filtered = products.filter((item) => {
      return (
        (currentFilters.categories.length === 0 || currentFilters.categories.includes(item.category)) &&
        (currentFilters.priceRange.length === 0 || applyPriceRangeFilter(item.price, currentFilters.priceRange)) &&
        (currentFilters.clothingTypes.length === 0 || currentFilters.clothingTypes.includes(item.ProductType)) &&
        (currentFilters.sizes.length === 0 || currentFilters.sizes.includes(item.ProductSize))
      );
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
      <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
        <h1 className="text-2xl font-bold lg:text-5xl">
          Our <span className="font-serif text-yellow">Urban Clothing</span>{" "}
          Collections
        </h1>
      </span>

      {/* Filter Options */}
      <div className="flex flex-wrap mb-4 gap-6 w-full bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Categories Filter */}
        <div className="flex gap-4">
          <span className="font-semibold text-lg text-gray-700">Categories:</span>
          {filterOptions.categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("categories", category)}
              />
              <span className="hover:underline">{category}</span>
            </label>
          ))}
        </div>

        {/* Price Range Filter */}
        <div className="flex gap-4">
          <span className="font-semibold text-lg text-gray-700">Price Range:</span>
          {filterOptions.priceRange.map((price) => (
            <label key={price} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("priceRange", price)}
              />
              <span className="hover:underline">{price}</span>
            </label>
          ))}
        </div>

        {/* Clothing Types Filter */}
        <div className="flex gap-4">
          <span className="font-semibold text-lg text-gray-700">Clothing Types:</span>
          {filterOptions.clothingTypes.map((type) => (
            <label key={type} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("clothingTypes", type)}
              />
              <span className="hover:underline">{type}</span>
            </label>
          ))}
        </div>

        {/* Sizes Filter */}
        <div className="flex gap-4">
          <span className="font-semibold text-lg text-gray-700">Sizes:</span>
          {filterOptions.sizes.map((size) => (
            <label key={size} className="flex items-center cursor-pointer text-gray-600 hover:text-yellow-600">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                onChange={() => handleFilterChange("sizes", size)}
              />
              <span className="hover:underline">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clothing Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {filteredData.map((clothing) => (
          <ClothingCard
            key={clothing._id} // Ensure you're using the correct identifier
            id={clothing._id} // Use _id from MongoDB
            name={clothing.ProductName} // Map to your model's properties
            price={clothing.price}
            desc={clothing.desc}
            rating={clothing.rating}
            img={clothing.image} // Ensure this matches your model's image field
          />
        ))}
      </div>
    </div>
  );
};

export default ClothingShop;
