import React from "react"; 
// Core React library for building UI components
import ReactDOM from "react-dom/client"; 
// ReactDOM is used to render the React application to the DOM
import { Provider } from "react-redux"; 
// Provider makes the Redux store available to the React app
import { BrowserRouter } from "react-router-dom"; 
// BrowserRouter provides routing functionality to enable navigation between pages
import { store } from "./store/store"; 
// Import the Redux store, which holds the global state
import App from "./App"; 
// Main application component
import "./index.css"; 
// Import global CSS styles for the application

// Create the root DOM node where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    {/* Wrap the application with the Redux Provider */}
    <Provider store={store}>
      {/* Wrap the application with BrowserRouter for routing */}
      <BrowserRouter>
        {/* Render the main application component */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
