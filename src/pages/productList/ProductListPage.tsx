import React from "react";
import ProductCard from "../../components/product/ProductCard"; // Reusable component to display individual product details

// Static list of products to simulate a product database
const products = [
  { id: 1, name: "Apple", price: 1 }, // Product 1: Apple
  { id: 2, name: "Banana", price: 2 }, // Product 2: Banana
  { id: 3, name: "Cherry", price: 3 }, // Product 3: Cherry
];

// ProductListPage Component: Displays a list of products
const ProductListPage: React.FC = () => {
  return (
    <div>
      {/* Page title */}
      <h2>Product List</h2>

      {/* Container for displaying product cards in a row with spacing */}
      <div
        style={{
          display: "flex", // Flexbox layout to arrange product cards in a row
          gap: "1rem", // Space between product cards
        }}
      >
        {/* Map over the products array and render a ProductCard for each product */}
        {products.map((product) => (
          <ProductCard 
            key={product.id} // Unique key for each product (required for React lists)
            product={product} // Pass the product object as a prop to ProductCard
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
