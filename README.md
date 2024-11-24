# Purpose
This app shows how using Redux makes managing shared state (like a shopping cart) easier compared to passing props everywhere in non-Redux setups. It keeps things organized, avoids messy code, and even remembers your cart during a session. Perfect for understanding why Redux is useful in React apps

It also uses TypeScript (TS/TSX) instead of JavaScript to make the code safer and easier to work with. TypeScript helps catch errors early, ensures everything is clearly defined (like the shape of the cart or products), and improves readability—especially in a collaborative or large project.

## Features
- **Product List Page**:
  - Displays a list of available products.
  - Users can add products to the cart.
  - Cart updates dynamically and shows the total item count in the header.

- **Product Details Page**:
  - View detailed information about a selected product.
  - Add the product to the cart directly from the details page.

- **Checkout Page**:
  - Displays a summary of cart items with their quantities.
  - Allows users to adjust item quantities.
  - Dynamically updates the total price of items in the cart.

- **Global Header**:
  - Shows the shopping cart icon with the total item count.
  - Provides navigation to the checkout page.

## Project Structure
src/
  components/
    header/
      Header.tsx            # Global header with cart info
    product/
      ProductCard.tsx       # Card component for product list
  pages/
    checkout/
      CheckoutPage.tsx      # Checkout page displaying cart summary
    productDetail/
      ProductDetailsPage.tsx  # Detailed view of a selected product
    productList/
      ProductListPage.tsx   # Default landing page with product list
  store/
    cart/
      cartSlice.ts          # Redux slice for cart logic
    store.ts                # Central Redux store
  App.tsx                   # App component with routes
  index.tsx                 # Entry point


## Getting Started
### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shopping-cart

2. Install Dependencies:
npm install

3. Run the Application:
npm start