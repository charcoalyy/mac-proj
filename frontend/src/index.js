import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReviewsContextProvider } from './contexts/ReviewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReviewsContextProvider>
      <App />
    </ReviewsContextProvider>
  </React.StrictMode>
);
