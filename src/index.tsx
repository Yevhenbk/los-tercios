import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/globals.scss';
import Layout from './layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
