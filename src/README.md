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
