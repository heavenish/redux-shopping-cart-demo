import React from "react";
import { useSelector } from "react-redux"; // Hook to access Redux state
import { RootState } from "../../store/store"; // Type definition for the global Redux state
import { Link } from "react-router-dom"; // Link component for navigation

// Header Component: Displays the app title and shopping cart with total item count
const Header: React.FC = () => {
  // Select the cart items from the Redux store using the `useSelector` hook
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate the total quantity of items in the cart by summing the quantities
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      style={{
        // Header layout styles
        display: "flex",
        justifyContent: "space-between", // Space out the title and cart icon
        alignItems: "center", // Vertically align items in the center
        padding: "1rem", // Padding around the header
        borderBottom: "1px solid #ccc", // Border at the bottom for separation
      }}
    >
      {/* Link to navigate back to the homepage (/) */}
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>Shopping Cart</h1>
      </Link>

      {/* Shopping cart icon with a badge showing the total quantity */}
      <Link to="/checkout" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            position: "relative", // Needed to position the badge correctly
            display: "flex", // Flexbox for aligning the icon and badge
            alignItems: "center", // Align icon and badge vertically
          }}
        >
          {/* Shopping cart emoji as the icon */}
          🛒
          {/* Badge showing the total number of items in the cart */}
          <span
            style={{
              marginLeft: "0.5rem", // Space between the icon and the badge
              background: "green", // Badge background color
              color: "white", // Badge text color
              borderRadius: "50%", // Circular shape for the badge
              padding: "0.2rem 0.5rem", // Inner spacing of the badge
              fontSize: "0.8rem", // Font size for the badge text
            }}
          >
            {totalQuantity} {/* Display the total quantity */}
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
