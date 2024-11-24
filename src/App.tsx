import React from "react";
import { Routes, Route } from "react-router-dom"; 
// Import `Routes` and `Route` from React Router for client-side navigation
import Header from "./components/header/Header"; 
// Import the Header component to display a global header across pages
import ProductListPage from "./pages/productList/ProductListPage"; 
// Import the Product List Page to display all available products
import ProductDetailsPage from "./pages/productDetail/ProductDetailsPage"; 
// Import the Product Details Page to show details of a specific product
import CheckoutPage from "./pages/checkout/CheckoutPage"; 
// Import the Checkout Page to display cart summary and manage purchases

// App Component: Defines the layout and routing for the application
function App() {
  return (
    <div>
      {/* Header Component: Displayed on all pages */}
      <Header />

      {/* Routes Component: Defines the app's navigation and routes */}
      <Routes>
        {/* Landing Page */}
        <Route 
          path="/" 
          element={<ProductListPage />} 
          // The Product List Page is displayed at the root URL ("/")
        />

        {/* Product Details Page */}
        <Route 
          path="/products/:id" 
          element={<ProductDetailsPage />} 
          // Displays details of a specific product, based on its ID in the URL
        />

        {/* Checkout Page */}
        <Route 
          path="/checkout" 
          element={<CheckoutPage />} 
          // Displays the checkout page with cart summary and functionality
        />
      </Routes>
    </div>
  );
}

export default App;
