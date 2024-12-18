import React from "react";
import { Link } from "react-router-dom"; // Link component for navigation
// import { useSelector } from "react-redux"; // TODO: Uncomment this to access the Redux store
// import { RootState } from "../../store/store"; // TODO: Import RootState type for TypeScript

// Header Component: Displays the app title and shopping cart with total item count
const Header: React.FC = () => {
  // TODO: 
  // 1️⃣ Use useSelector to access cart items from the Redux store.
  // 2️⃣ Calculate totalQuantity by summing the quantity of all cart items.
  
  // Example (students need to uncomment and complete the logic):
  // const cartItems = useSelector((state: RootState) => state.cart.items);
  // const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalQuantity = 0; // TODO: Replace this with the actual total from the Redux store

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
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
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Shopping cart emoji as the icon */}
          🛒
          {/* Badge showing the total number of items in the cart */}
          <span
            style={{
              marginLeft: "0.5rem",
              background: "green",
              color: "white",
              borderRadius: "50%",
              padding: "0.2rem 0.5rem",
              fontSize: "0.8rem",
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
