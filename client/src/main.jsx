import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Change the extension to .jsx
import './index.css';

import { Provider } from 'react-redux'; // Ensure this import is included
import Store from "./redux/Store.js";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Provider store={Store}>
        <App />
      </Provider>

  </React.StrictMode>,
);
