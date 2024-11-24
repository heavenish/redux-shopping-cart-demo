import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Hooks for accessing and modifying Redux state
import { RootState } from "../../store/store"; // Type definition for the global Redux state
import { updateQuantity, clearCart } from "../../store/cart/cartSlice"; // Redux action for updating item quantities in the cart

// CheckoutPage Component: Displays a summary of items in the cart, their quantities, and the total price
const CheckoutPage: React.FC = () => {
  // Select cart items from the Redux store using the `useSelector` hook
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, // Multiply price by quantity for each item
    0 // Start the sum at 0
  );

  return (
    <div
      style={{
        padding: "1rem", // Add spacing inside the page
      }}
    >
      {/* Page title */}
      <h2>Checkout</h2>

      {/* If the cart is empty, display a message */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        // If the cart has items, display a summary of each item
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id} // Unique key for each item in the list
              style={{
                border: "1px solid #ccc", // Border around each item
                padding: "1rem", // Inner padding
                marginBottom: "1rem", // Space between items
              }}
            >
              {/* Product name */}
              <h3>{item.name}</h3>

              {/* Display the price of a single item */}
              <p>Price: ${item.price.toFixed(2)}</p>

              {/* Display the total cost for the current item (price * quantity) */}
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

              {/* Input to adjust the quantity of the item */}
              <label>
                Quantity:
                <input
                  type="number" // Numeric input field
                  min="1" // Minimum value is 1
                  value={item.quantity} // Bind the current quantity of the item
                  onChange={(e) =>
                    // Dispatch an action to update the quantity in Redux state
                    dispatch(
                      updateQuantity({
                        id: item.id, // Item ID to identify which product to update
                        quantity: Number(e.target.value), // New quantity from the input
                      })
                    )
                  }
                  style={{
                    marginLeft: "0.5rem", // Space between label and input
                    width: "50px", // Set input width
                  }}
                />
              </label>
            </div>
          ))}

          {/* Display the total price of all items in the cart */}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          {/* Clear Cart Button */}
          <button
            onClick={() => dispatch(clearCart())}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
