import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a single cart item
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Define the structure of the cart's state
type CartState = {
  items: CartItem[];
};

// Helper to load the cart state from localStorage
const loadCartFromStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Initial state of the cart, loaded from localStorage
const initialState: CartState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Add item to cart
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // Update item quantity
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // Clear the cart
    clearCart: (state) => {
      state.items = [];
      // Remove the cart from localStorage
      localStorage.removeItem("cart");
    },
  },
});

// Export actions for use in components
export const { addToCart, updateQuantity, clearCart } = cartSlice.actions;

// Export reducer to be added to the store
export default cartSlice.reducer;
