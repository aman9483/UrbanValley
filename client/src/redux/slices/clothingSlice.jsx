// src/redux/clothingSlice.js

import { createSlice } from '@reduxjs/toolkit';
import ClothingData from '../data/ClothingData.js'; // Import your clothing data

const initialState = {
  items: ClothingData, // Set initial clothing data
  filteredItems: ClothingData, // Set filtered items (default is the same as items)
};

const clothingSlice = createSlice({
  name: 'clothing',
  initialState,
  reducers: {
    filterItems: (state, action) => {
      const { categories, priceRange, clothingTypes, sizes } = action.payload;

      // Filter clothing items based on the provided filters
      state.filteredItems = state.items.filter((item) => {
        return (
          (categories.length === 0 || categories.includes(item.category)) &&
          (priceRange.length === 0 || priceRange.includes(item.priceRange)) &&
          (clothingTypes.length === 0 || clothingTypes.includes(item.type)) &&
          (sizes.length === 0 || sizes.includes(item.size))
        );
      });
    },
  },
});

// Export actions and reducer
export const { filterItems } = clothingSlice.actions;
export default clothingSlice.reducer;
