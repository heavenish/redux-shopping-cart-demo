import { configureStore } from "@reduxjs/toolkit"; 
// `configureStore` is a helper function from Redux Toolkit to set up the Redux store
import cartReducer from "./cart/cartSlice"; 
// Import the `cartReducer` from the `cartSlice` to manage the cart state

// Create the Redux store
export const store = configureStore({
  reducer: {
    // Combine reducers here. In this case, we only have the `cart` reducer
    cart: cartReducer, // The `cart` state is managed by the `cartReducer`
  },
});

// Type for the entire state of the Redux store
// `ReturnType<typeof store.getState>` infers the structure of the store's state
export type RootState = ReturnType<typeof store.getState>;

// Type for the store's dispatch function
// Useful for type-safe usage of `dispatch` in components
export type AppDispatch = typeof store.dispatch;
