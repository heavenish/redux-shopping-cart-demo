import React from "react";
import { useDispatch } from "react-redux"; // Hook to dispatch actions to the Redux store
import { Link } from "react-router-dom"; // Link component for navigation
import { addToCart } from "../../store/cart/cartSlice"; // Redux action to add items to the cart

// Define the Product type to ensure proper structure for the product prop
type Product = {
  id: number; // Unique identifier for the product
  name: string; // Name of the product
  price: number; // Price of the product
};

// ProductCard Component: Displays a single product with its details
// Props: Accepts a "product" object of type "Product"
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch(); // Hook to access the Redux dispatch function

  return (
    <div
      style={{
        // Styles for the product card container
        border: "1px solid #ccc", // Add a border around the card
        padding: "1rem", // Inner padding
        margin: "1rem", // Margin between cards
      }}
    >
      {/* Product name */}
      <h3>{product.name}</h3>

      {/* Product price formatted to 2 decimal places */}
      <p>${product.price.toFixed(2)}</p>

      {/* Button to add the product to the cart */}
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      {/* Link to navigate to the product details page */}
      <div>
        <Link to={`/products/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
