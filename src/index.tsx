import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App';
import { SignInContextProvider } from './AuthContext/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignInContextProvider>
      <App />
    </SignInContextProvider>
  </React.StrictMode>
);
