import React from "react";
import { useParams } from "react-router-dom"; // Hook to access route parameters
import { useDispatch } from "react-redux"; // Hook to dispatch actions to the Redux store
import { addToCart } from "../../store/cart/cartSlice"; // Redux action to add items to the cart

// Static list of products to simulate a product database
const products = [
  { id: 1, name: "Apple", price: 1, description: "A fresh and juicy apple." },
  { id: 2, name: "Banana", price: 2, description: "A ripe banana full of flavor." },
  { id: 3, name: "Cherry", price: 3, description: "Sweet and delicious cherries." },
];

// ProductDetailsPage Component: Displays detailed information about a single product
const ProductDetailsPage: React.FC = () => {
  // Extract the product ID from the URL using `useParams`
  const { id } = useParams<{ id: string }>(); // The `id` parameter is defined as a string

  // Find the product that matches the ID from the URL
  const product = products.find((p) => p.id === Number(id)); // Convert `id` to a number for comparison

  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // If no product is found for the given ID, display a "Product not found" message
  if (!product) {
    return <p>Product not found!</p>;
  }

  // Render the product details
  return (
    <div
      style={{
        padding: "1rem", // Add inner spacing
        border: "1px solid #ccc", // Add a border around the product details
      }}
    >
      {/* Display the product name */}
      <h2>{product.name}</h2>

      {/* Display the product price formatted to 2 decimal places */}
      <p>Price: ${product.price.toFixed(2)}</p>

      {/* Display the product description */}
      <p>{product.description}</p>

      {/* Button to add the product to the cart */}
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsPage;
