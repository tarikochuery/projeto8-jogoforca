import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './components/App/App';
import { GlobalStyle } from './styles/GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

