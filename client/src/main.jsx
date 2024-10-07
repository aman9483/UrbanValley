import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Change the extension to .jsx
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { Provider } from 'react-redux'; // Ensure this import is included
import Store from "./redux/Store.js";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={Store}>
        <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>,
);
